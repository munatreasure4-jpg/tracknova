"use client";

import { useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { ArrowRight, CheckCircle2, Clock3, MapPin, PackageSearch, Truck } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

type TrackingEvent = {
  id: string;
  status: string;
  message: string;
  createdAt: string;
};

type ShipmentData = {
  trackingNumber: string;
  origin: string;
  destination: string;
  currentLocation: string;
  status: string;
  eta: string;
  courier: string;
  events: TrackingEvent[];
};

const defaultShipment: ShipmentData = {
  trackingNumber: 'TNX-47812',
  origin: 'New York, NY',
  destination: 'Los Angeles, CA',
  currentLocation: 'Kansas City, MO',
  status: 'in_transit',
  eta: 'Tomorrow, 4:30 PM',
  courier: 'TrackNova Express',
  events: [
    { id: '1', status: 'created', message: 'Shipment created', createdAt: 'Apr 30 · 08:42 AM' },
    { id: '2', status: 'packed', message: 'Packed and labeled', createdAt: 'May 01 · 09:15 AM' },
    { id: '3', status: 'in_transit', message: 'In transit', createdAt: 'Current location · 2h ago' },
    { id: '4', status: 'out_for_delivery', message: 'Out for delivery', createdAt: 'Expected · Tomorrow' },
    { id: '5', status: 'delivered', message: 'Delivered', createdAt: 'Estimated · Wed' }
  ]
};

export default function TrackingPage() {
  const searchParams = useSearchParams();
  const [trackingNumber, setTrackingNumber] = useState(searchParams.get('id') || 'TNX-47812');
  const [shipment, setShipment] = useState<ShipmentData>(defaultShipment);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const id = searchParams.get('id') || 'TNX-47812';
    setTrackingNumber(id);
    fetchShipment(id);
  }, [searchParams]);

  async function fetchShipment(value: string) {
    setLoading(true);
    try {
      const response = await fetch(`/api/tracking/${value}`);
      if (!response.ok) {
        setShipment(defaultShipment);
        return;
      }
      const data = await response.json();
      setShipment({
        trackingNumber: data.trackingNumber || value,
        origin: data.origin,
        destination: data.destination,
        currentLocation: data.currentLocation,
        status: data.status,
        eta: data.eta,
        courier: data.courier,
        events: data.events || defaultShipment.events
      });
    } catch {
      setShipment(defaultShipment);
    } finally {
      setLoading(false);
    }
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetchShipment(trackingNumber);
  };

  return (
    <main className="min-h-screen bg-[#050b16] px-6 py-10 text-white lg:px-10">
      <div className="mx-auto max-w-7xl">
        <form onSubmit={handleSubmit} className="mb-8 flex flex-col gap-6 rounded-[26px] border border-slate-800 bg-slate-900/80 p-5 shadow-panel sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-sm uppercase tracking-[0.25em] text-blue-300">Track</div>
            <h1 className="mt-2 text-3xl font-black">Package tracking</h1>
          </div>

          <div className="flex w-full max-w-xl items-center overflow-hidden rounded-full border border-slate-700 bg-slate-950/60">
            <input
              value={trackingNumber}
              onChange={(event) => setTrackingNumber(event.target.value)}
              placeholder="Enter tracking number"
              className="w-full bg-transparent px-5 py-3 text-sm text-white outline-none placeholder:text-slate-400"
            />
            <button type="submit" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-400 px-5 py-3 font-medium text-white">
              {loading ? 'Loading...' : 'Track now'}
              <ArrowRight size={16} />
            </button>
          </div>
        </form>

        <div className="grid gap-8 xl:grid-cols-[1.3fr_0.7fr]">
          <div className="overflow-hidden rounded-[28px] border border-slate-800 bg-slate-900/80 shadow-panel">
            <div className="flex items-center justify-between border-b border-slate-800 px-5 py-4">
              <div>
                <div className="text-xs uppercase tracking-[0.25em] text-slate-400">Live location</div>
                <div className="mt-2 text-xl font-bold">{shipment.currentLocation}</div>
              </div>
              <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
                {shipment.status === 'delivered' ? 'Delivered' : 'In transit'}
              </span>
            </div>

            <div className="h-[520px] w-full">
              <MapContainer center={[39.0997, -94.5786]} zoom={5} scrollWheelZoom className="h-full w-full">
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[40.7128, -74.006]}>
                  <Popup>Origin: {shipment.origin}</Popup>
                </Marker>
                <Marker position={[39.0997, -94.5786]}>
                  <Popup>Current location: {shipment.currentLocation}</Popup>
                </Marker>
                <Marker position={[34.0522, -118.2437]}>
                  <Popup>Destination: {shipment.destination}</Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-[24px] border border-slate-800 bg-slate-900/80 p-5 shadow-panel">
              <div className="flex items-center justify-between">
                <div className="text-sm uppercase tracking-[0.2em] text-slate-400">Shipment</div>
                <div className="rounded-full border border-blue-500/20 bg-blue-500/10 px-2.5 py-1 text-xs font-medium text-blue-300">
                  {shipment.trackingNumber}
                </div>
              </div>

              <div className="mt-5 space-y-4">
                <div className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-950/60 p-3">
                  <PackageSearch className="text-blue-300" size={18} />
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Courier</div>
                    <div className="font-medium">{shipment.courier}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-950/60 p-3">
                  <MapPin className="text-violet-300" size={18} />
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Route</div>
                    <div className="font-medium">{shipment.origin} → {shipment.destination}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-950/60 p-3">
                  <Clock3 className="text-emerald-300" size={18} />
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-slate-400">ETA</div>
                    <div className="font-medium">{shipment.eta}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[24px] border border-slate-800 bg-slate-900/80 p-5 shadow-panel">
              <div className="mb-4 flex items-center gap-2 text-lg font-bold">
                <Truck size={18} className="text-blue-300" />
                Shipment progress
              </div>

              <div className="space-y-4">
                {shipment.events.map((event, index) => {
                  const complete = index <= shipment.events.length - 1;
                  return (
                    <div key={event.id} className="flex gap-3">
                      <div className="flex flex-col items-center">
                        <div className={`mt-1 flex h-5 w-5 items-center justify-center rounded-full border ${complete ? 'border-emerald-400 bg-emerald-400/20 text-emerald-300' : 'border-slate-600 bg-slate-800 text-slate-400'}`}>
                          {complete ? <CheckCircle2 size={12} /> : <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />}
                        </div>
                        {index !== shipment.events.length - 1 && <div className="mt-1 h-10 w-px bg-slate-700" />}
                      </div>

                      <div className="pb-1">
                        <div className="font-medium text-white">{event.message}</div>
                        <div className="mt-1 text-sm text-slate-400">{event.createdAt}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
