import { NextRequest, NextResponse } from 'next/server';
import { shipmentIndex } from '@/lib/mock-data';

export async function GET() {
  return NextResponse.json(shipmentIndex);
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const newShipment = {
    id: `TNX-${Math.floor(10000 + Math.random() * 90000)}`,
    route: `${body.origin || 'New York'} → ${body.destination || 'Los Angeles'}`,
    status: 'In transit',
    eta: '2-4 days'
  };

  return NextResponse.json({ message: 'Shipment created', shipment: newShipment }, { status: 201 });
}
