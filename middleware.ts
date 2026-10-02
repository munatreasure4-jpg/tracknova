import { NextResponse } from 'next/server';
import { verifySessionToken } from '@/lib/auth';

export async function middleware(request: Request) {
  const token = request.headers.get('cookie')?.match(/tracknova_session=([^;]+)/)?.[1];

  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  try {
    await verifySessionToken(token);
  } catch {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*']
};
