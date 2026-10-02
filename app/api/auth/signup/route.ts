import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { prisma } from '@/lib/prisma';
import { createSessionToken, verifySessionToken } from '@/lib/auth';

export async function getCurrentUserFromRequest(request: NextRequest) {
  const token = request.cookies.get('tracknova_session')?.value;
  if (!token) return null;

  try {
    const payload = await verifySessionToken(token);
    const userId = typeof payload.userId === 'string' ? payload.userId : null;
    if (!userId) return null;

    return prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        email: true,
        createdAt: true
      }
    });
  } catch {
    return null;
  }
}

export async function signUpUser(body: { name?: string; email?: string; password?: string }) {
  if (!body.name || !body.email || !body.password) {
    return { error: 'Name, email, and password are required.' };
  }

  if (body.password.length < 6) {
    return { error: 'Password must be at least 6 characters long.' };
  }

  const existing = await prisma.user.findUnique({
    where: { email: body.email.toLowerCase() }
  });

  if (existing) {
    return { error: 'An account with this email already exists.' };
  }

  const passwordHash = await bcrypt.hash(body.password, 10);
  const user = await prisma.user.create({
    data: {
      name: body.name.trim(),
      email: body.email.toLowerCase(),
      passwordHash
    }
  });

  return { user };
}

export async function loginUser(body: { email?: string; password?: string }) {
  if (!body.email || !body.password) {
    return { error: 'Email and password are required.' };
  }

  const user = await prisma.user.findUnique({
    where: { email: body.email.toLowerCase() }
  });

  if (!user) {
    return { error: 'Invalid email or password.' };
  }

  const valid = await bcrypt.compare(body.password, user.passwordHash);
  if (!valid) {
    return { error: 'Invalid email or password.' };
  }

  return { user };
}

export async function setSessionCookie(response: NextResponse, userId: string) {
  const token = await createSessionToken(userId);
  response.cookies.set('tracknova_session', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7
  });
}
