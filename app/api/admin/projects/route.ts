import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import fs from 'fs';
import path from 'path';

export async function POST(req: Request) {
  const authCookie = cookies().get('admin_auth');
  if (!authCookie || authCookie.value !== 'authenticated') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { projectData, imageBase64, imageFilename } = await req.json();

  const token = process.env.GITHUB_TOKEN;
  const owner = process.env.GITHUB_OWNER;
  const repo = process.env.GITHUB_REPO;

  // Local fallback for development if GitHub credentials are not provided
  if (process.env.NODE_ENV === 'development' && (!token || !owner || !repo)) {
    try {
      if (imageBase64 && imageFilename) {
        const imagePath = path.join(process.cwd(), 'public', 'images', 'projects', imageFilename);
        fs.writeFileSync(imagePath, Buffer.from(imageBase64, 'base64'));
        projectData.thumbnail = `/images/projects/${imageFilename}`;
      }

      const projectsPath = path.join(process.cwd(), 'data', 'projects.json');
      const projects = JSON.parse(fs.readFileSync(projectsPath, 'utf-8'));
      projects.unshift(projectData);
      fs.writeFileSync(projectsPath, JSON.stringify(projects, null, 2));

      return NextResponse.json({ success: true, local: true });
    } catch (err: any) {
      return NextResponse.json({ error: err.message }, { status: 500 });
    }
  }

  if (!token || !owner || !repo) {
    return NextResponse.json({ error: 'GitHub credentials not configured in Vercel' }, { status: 500 });
  }

  try {
    // 1. Upload image to GitHub if exists
    if (imageBase64 && imageFilename) {
      const imagePath = `public/images/projects/${imageFilename}`;
      const imgRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${imagePath}`, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/vnd.github.v3+json',
        },
        body: JSON.stringify({
          message: `Add project image ${imageFilename}`,
          content: imageBase64,
        }),
      });
      if (!imgRes.ok) throw new Error('Failed to upload image to GitHub');
      projectData.thumbnail = `/images/projects/${imageFilename}`;
    }

    // 2. Fetch current projects.json from GitHub
    const fileRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/data/projects.json`, {
      headers: { Authorization: `Bearer ${token}`, Accept: 'application/vnd.github.v3+json' }
    });
    if (!fileRes.ok) throw new Error('Failed to fetch projects.json from GitHub');
    
    const fileData = await fileRes.json();
    const currentSha = fileData.sha;
    const contentBuffer = Buffer.from(fileData.content, 'base64');
    const projects = JSON.parse(contentBuffer.toString('utf-8'));

    // 3. Add new project
    projects.unshift(projectData);

    // 4. Update projects.json on GitHub
    const updatedContent = Buffer.from(JSON.stringify(projects, null, 2)).toString('base64');
    
    const updateRes = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/data/projects.json`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github.v3+json',
      },
      body: JSON.stringify({
        message: `Add new project: ${projectData.title}`,
        content: updatedContent,
        sha: currentSha,
      }),
    });

    if (!updateRes.ok) throw new Error('Failed to update projects.json on GitHub');

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
    const projectsPath = path.join(process.cwd(), 'data', 'projects.json');
    const projects = JSON.parse(fs.readFileSync(projectsPath, 'utf-8'));
    return NextResponse.json({ projects });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
