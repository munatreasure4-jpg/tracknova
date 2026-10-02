import { NextRequest, NextResponse } from 'next/server';
import { signUpUser, setSessionCookie } from '@/lib/auth';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const result = await signUpUser(body);

  if ('error' in result) {
    return NextResponse.json({ error: result.error }, { status: 400 });
  }

  const response = NextResponse.json({
    message: 'Account created successfully.',
    user: {
      id: result.user.id,
      name: result.user.name,
      email: result.user.email
    }
  });

  const token = await (await import('@/lib/auth')).createSessionToken(result.user.id);
  response.cookies.set('tracknova_session', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7
  });

  return response;
}
