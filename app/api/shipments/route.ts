import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getCurrentUserFromRequest } from '@/lib/auth';

function buildTrackingNumber() {
  return `TNX-${Math.floor(10000 + Math.random() * 90000)}`;
}

export async function GET(request: NextRequest) {
  const user = await getCurrentUserFromRequest(request);

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const shipments = await prisma.shipment.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: 'desc' },
    include: {
      events: {
        orderBy: { createdAt: 'asc' }
      }
    }
  });

  return NextResponse.json(shipments);
}

export async function POST(request: NextRequest) {
  const user = await getCurrentUserFromRequest(request);

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json();

  const shipment = await prisma.shipment.create({
    data: {
      trackingNumber: buildTrackingNumber(),
      origin: body.origin || 'New York, NY',
      destination: body.destination || 'Los Angeles, CA',
      currentLocation: body.origin || 'New York, NY',
      courier: body.courier || 'TrackNova Express',
      status: 'created',
      eta: body.eta || '2-5 days',
      userId: user.id,
      events: {
        create: [
          {
            status: 'created',
            message: 'Shipment created and ready for pickup.'
          }
        ]
      }
    },
    include: { events: true }
  });

  return NextResponse.json(shipment, { status: 201 });
}
