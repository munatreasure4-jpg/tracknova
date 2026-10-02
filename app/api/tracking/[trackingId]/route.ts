import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(
  _request: NextRequest,
  { params }: { params: { trackingId: string } }
) {
  const trackingId = params.trackingId.toUpperCase();

  const shipment = await prisma.shipment.findUnique({
    where: { trackingNumber: trackingId },
    include: {
      events: {
        orderBy: { createdAt: 'asc' }
      }
    }
  });

  if (!shipment) {
    return NextResponse.json({ error: 'Tracking ID not found.' }, { status: 404 });
  }

  return NextResponse.json(shipment);
}
