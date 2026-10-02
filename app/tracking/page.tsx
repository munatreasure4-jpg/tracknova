"use client";

import { useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { ArrowRight, CheckCircle2, Clock3, MapPin, PackageSearch, Truck } from 'lucide-react';

const trackingSteps = [
  { status: 'Order created', time: 'Apr 30 · 08:42 AM', complete: true },
  { status: 'Packed & labeled', time: 'May 01 · 09:15 AM', complete: true },
  { status: 'In transit', time: 'Current location · 2h ago', complete: true },
  { status: 'Out for delivery', time: 'Expected · Tomorrow', complete: false },
  { status: 'Delivered', time: 'Estimated · Wed', complete: false }
];

const shipment = {
  id: 'TNX-47812',
  origin: 'New York, NY',
  destination: 'Los Angeles, CA',
  courier: 'TrackNova Express',
  eta: 'Tomorrow, 4:30 PM',
  location: 'Kansas City, MO'
};

export default function TrackingPage() {
  const [trackingNumber, setTrackingNumber] = useState('TNX-47812');

  return (
    <main className="min-h-screen bg-[#050b16] px-6 py-10 text-white lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-6 rounded-[26px] border border-slate-800 bg-slate-900/80 p-5 shadow-panel sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-sm uppercase tracking-[0.25em] text-blue-300">Track</div>
            <h1 className="mt-2 text-3xl font-black">Package tracking</h1>
          </div>

          <div className="flex w-full max-w-xl items-center overflow-hidden rounded-full border border-slate-700 bg-slate-950/60">
            <input
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              placeholder="Enter tracking number"
              className="w-full bg-transparent px-5 py-3 text-sm text-white outline-none placeholder:text-slate-400"
            />
            <button className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-400 px-5 py-3 font-medium text-white">
              Track now
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        <div className="grid gap-8 xl:grid-cols-[1.3fr_0.7fr]">
          <div className="overflow-hidden rounded-[28px] border border-slate-800 bg-slate-900/80 shadow-panel">
            <div className="flex items-center justify-between border-b border-slate-800 px-5 py-4">
              <div>
                <div className="text-xs uppercase tracking-[0.25em] text-slate-400">Live location</div>
                <div className="mt-2 text-xl font-bold">{shipment.location}</div>
              </div>
              <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
                In transit
              </span>
            </div>

            <div className="h-[520px] w-full">
              <MapContainer center={[39.0997, -94.5786]} zoom={5} scrollWheelZoom={true} className="h-full w-full">
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[40.7128, -74.0060]}>
                  <Popup>Origin: New York, NY</Popup>
                </Marker>
                <Marker position={[39.0997, -94.5786]}>
                  <Popup>Current location: Kansas City, MO</Popup>
                </Marker>
                <Marker position={[34.0522, -118.2437]}>
                  <Popup>Destination: Los Angeles, CA</Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-[24px] border border-slate-800 bg-slate-900/80 p-5 shadow-panel">
              <div className="flex items-center justify-between">
                <div className="text-sm uppercase tracking-[0.2em] text-slate-400">Shipment</div>
                <div className="rounded-full border border-blue-500/20 bg-blue-500/10 px-2.5 py-1 text-xs font-medium text-blue-300">
                  {shipment.id}
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
                {trackingSteps.map((step) => (
                  <div key={step.status} className="flex gap-3">
                    <div className="flex flex-col items-center">
                      <div className={`mt-1 flex h-5 w-5 items-center justify-center rounded-full border ${step.complete ? 'border-emerald-400 bg-emerald-400/20 text-emerald-300' : 'border-slate-600 bg-slate-800 text-slate-400'}`}>
                        {step.complete ? <CheckCircle2 size={12} /> : <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />}
                      </div>
                      {step.status !== trackingSteps[trackingSteps.length - 1].status && <div className="mt-1 h-10 w-px bg-slate-700" />}
                    </div>

                    <div className="pb-1">
                      <div className={`font-medium ${step.complete ? 'text-white' : 'text-slate-400'}`}>{step.status}</div>
                      <div className="mt-1 text-sm text-slate-400">{step.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
