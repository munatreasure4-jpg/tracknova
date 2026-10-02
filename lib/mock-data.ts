export type TrackingStatus = 'created' | 'packed' | 'in_transit' | 'out_for_delivery' | 'delivered';

export type TrackingRecord = {
  id: string;
  status: TrackingStatus;
  origin: string;
  destination: string;
  currentLocation: string;
  eta: string;
  courier: string;
  route: [number, number][];
};

export const trackingRecords: Record<string, TrackingRecord> = {
  'TNX-47812': {
    id: 'TNX-47812',
    status: 'in_transit',
    origin: 'New York, NY',
    destination: 'Los Angeles, CA',
    currentLocation: 'Kansas City, MO',
    eta: 'Tomorrow, 4:30 PM',
    courier: 'TrackNova Express',
    route: [
      [40.7128, -74.006],
      [39.0997, -94.5786],
      [34.0522, -118.2437]
    ]
  },
  'TNX-88901': {
    id: 'TNX-88901',
    status: 'out_for_delivery',
    origin: 'Chicago, IL',
    destination: 'Miami, FL',
    currentLocation: 'Fort Lauderdale, FL',
    eta: 'Today, 6:15 PM',
    courier: 'TrackNova Express',
    route: [
      [41.8781, -87.6298],
      [26.1224, -80.1373]
    ]
  }
};

export const shipmentIndex = [
  { id: 'TNX-47812', route: 'New York → Los Angeles', status: 'In transit', eta: 'Tomorrow' },
  { id: 'TNX-88901', route: 'Chicago → Miami', status: 'Out for delivery', eta: 'Today' },
  { id: 'TNX-11023', route: 'Seattle → Denver', status: 'Delivered', eta: 'Completed' }
];
