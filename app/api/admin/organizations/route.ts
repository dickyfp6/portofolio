import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import fs from 'fs';
import path from 'path';

export async function POST(req: Request) {
  const authCookie = cookies().get('admin_auth');
  if (!authCookie || authCookie.value !== 'authenticated') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { organizationData, imageBase64, imageFilename, isNewOrg, existingOrgId } = await req.json();

  const token = process.env.GITHUB_TOKEN;
  const owner = process.env.GITHUB_OWNER;
  const repo = process.env.GITHUB_REPO;

  if (process.env.NODE_ENV === 'development' && (!token || !owner || !repo)) {
    try {
      if (imageBase64 && imageFilename && isNewOrg) {
        const imagePath = path.join(process.cwd(), 'public', 'images', 'orgs', imageFilename);
        fs.writeFileSync(imagePath, Buffer.from(imageBase64, 'base64'));
        organizationData.logo = `/images/orgs/${imageFilename}`;
      }

      const orgsPath = path.join(process.cwd(), 'data', 'organizations.json');
      const orgs = JSON.parse(fs.readFileSync(orgsPath, 'utf-8'));
      
      if (isNewOrg) {
        orgs.unshift(organizationData);
      } else {
        const orgIndex = orgs.findIndex((o: any) => o.id === existingOrgId);
        if (orgIndex > -1) {
          // organizationData contains the single new experience here
          orgs[orgIndex].experiences.unshift(organizationData);
        }
      }

      fs.writeFileSync(orgsPath, JSON.stringify(orgs, null, 2));
      return NextResponse.json({ success: true, local: true });
    } catch (err: any) {
      return NextResponse.json({ error: err.message }, { status: 500 });
    }
  }

  if (!token || !owner || !repo) {
    return NextResponse.json({ error: 'GitHub credentials not configured in Vercel' }, { status: 500 });
  }

  try {
    if (imageBase64 && imageFilename && isNewOrg) {
      const imagePath = `public/images/orgs/${imageFilename}`;
      const imgRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${imagePath}`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/vnd.github.v3+json',
        },
        body: JSON.stringify({
          message: `Add org image ${imageFilename}`,
          content: imageBase64,
        }),
      });
      if (!imgRes.ok) throw new Error('Failed to upload image to GitHub');
      organizationData.logo = `/images/orgs/${imageFilename}`;
    }

    const fileRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/data/organizations.json`, {
      headers: { Authorization: `Bearer ${token}`, Accept: 'application/vnd.github.v3+json' }
    });
    if (!fileRes.ok) throw new Error('Failed to fetch organizations.json from GitHub');
    
    const fileData = await fileRes.json();
    const currentSha = fileData.sha;
    const contentBuffer = Buffer.from(fileData.content, 'base64');
    const orgs = JSON.parse(contentBuffer.toString('utf-8'));

    if (isNewOrg) {
      orgs.unshift(organizationData);
    } else {
      const orgIndex = orgs.findIndex((o: any) => o.id === existingOrgId);
      if (orgIndex > -1) {
        orgs[orgIndex].experiences.unshift(organizationData);
      }
    }

    const updatedContent = Buffer.from(JSON.stringify(orgs, null, 2)).toString('base64');
    
    const updateRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/data/organizations.json`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github.v3+json',
      },
      body: JSON.stringify({
        message: isNewOrg ? `Add new organization: ${organizationData.organizationName}` : `Add experience to org ${existingOrgId}`,
        content: updatedContent,
        sha: currentSha,
      }),
    });

    if (!updateRes.ok) throw new Error('Failed to update organizations.json on GitHub');

    return NextResponse.json({ success: true, local: false });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function GET(req: Request) {
  const authCookie = cookies().get('admin_auth');
  if (!authCookie || authCookie.value !== 'authenticated') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const orgsPath = path.join(process.cwd(), 'data', 'organizations.json');
    const orgs = JSON.parse(fs.readFileSync(orgsPath, 'utf-8'));
    return NextResponse.json({ organizations: orgs });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
