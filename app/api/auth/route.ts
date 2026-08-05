import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  try {
    const { password } = await request.json();

    // Check against env variable, fallback to a hardcoded one for local dev if not set
    const adminPassword = process.env.ADMIN_PASSWORD || 'rahasia123';

    if (password === adminPassword) {
      cookies().set({
        name: 'admin_auth',
        value: 'authenticated',
        httpOnly: true,
        path: '/',
        maxAge: 60 * 60 * 24 * 7, // 1 week
        sameSite: 'strict',
      });
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ success: false }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

export async function DELETE() {
  cookies().delete('admin_auth');
  return NextResponse.json({ success: true });
}
