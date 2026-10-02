import { NextRequest, NextResponse } from 'next/server';
import { loginUser, setSessionCookie } from '@/lib/auth';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const result = await loginUser(body);

  if ('error' in result) {
    return NextResponse.json({ error: result.error }, { status: 401 });
  }

  const response = NextResponse.json({
    message: 'Login successful.',
    user: {
      id: result.user.id,
      name: result.user.name,
      email: result.user.email
    }
  });

  await setSessionCookie(response, result.user.id);
  return response;
}
