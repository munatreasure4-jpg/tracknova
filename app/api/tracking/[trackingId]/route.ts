import { NextRequest, NextResponse } from 'next/server';
import { trackingRecords } from '@/lib/mock-data';

export async function GET(
  request: NextRequest,
  { params }: { params: { trackingId: string } }
) {
  const trackingId = params.trackingId.toUpperCase();
  const record = trackingRecords[trackingId];

  if (!record) {
    return NextResponse.json(
      { error: 'Tracking ID not found.' },
      { status: 404 }
    );
  }

  return NextResponse.json(record);
}
