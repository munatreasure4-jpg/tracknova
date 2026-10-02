import { SignJWT, jwtVerify } from 'jose';

const secret = new TextEncoder().encode(
  process.env.JWT_SECRET || 'tracknova-development-secret'
);

export async function createSessionToken(userId: string) {
  return new SignJWT({ userId })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(secret);
}

export async function verifySessionToken(token: string) {
  const { payload } = await jwtVerify(token, secret);
  return payload;
}
