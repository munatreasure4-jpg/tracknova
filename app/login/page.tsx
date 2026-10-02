"use client";

import { useEffect, useState } from 'react';
import { Activity, BellDot, Box, CreditCard, Package, Search, Settings, Truck } from 'lucide-react';

type Shipment = {
  id: string;
  trackingNumber: string;
  origin: string;
  destination: string;
  currentLocation: string;
  status: string;
  eta: string;
  courier: string;
  createdAt: string;
};

const stats = [
  { label: 'Shipments', value: '1,284', icon: Box },
  { label: 'On time', value: '97.8%', icon: Activity },
  { label: 'Revenue', value: '$82.4k', icon: CreditCard }
];

export default function DashboardPage() {
  const [shipments, setShipments] = useState<Shipment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchShipments() {
      try {
        const response = await fetch('/api/shipments');
        if (!response.ok) {
          setShipments([]);
          return;
        }
        const data = await response.json();
        setShipments(data);
      } catch {
        setShipments([]);
      } finally {
        setLoading(false);
      }
    }

    fetchShipments();
  }, []);

  return (
    <main className="min-h-screen bg-[#050b16] px-6 py-8 text-white lg:px-10">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 flex flex-col gap-4 rounded-[26px] border border-slate-800 bg-slate-900/80 p-5 shadow-panel md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.26em] text-blue-300">Operations hub</p>
            <h1 className="mt-2 text-3xl font-black">Dashboard</h1>
          </div>

          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950/60 px-4 py-2 text-sm text-slate-200">
              <Search size={15} />
              Search shipments
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-950/60 text-slate-200">
              <BellDot size={16} />
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-violet-500 text-white shadow-glow">
              <Settings size={16} />
            </button>
          </div>
        </header>

        <section className="grid gap-5 md:grid-cols-3">
          {stats.map(({ label, value, icon: Icon }) => (
            <div key={label} className="rounded-[24px] border border-slate-800 bg-slate-900/80 p-5 shadow-panel">
              <div className="flex items-center justify-between">
                <div className="text-sm uppercase tracking-[0.2em] text-slate-400">{label}</div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-300">
                  <Icon size={16} />
                </div>
              </div>
              <div className="mt-5 text-3xl font-black text-white">{value}</div>
            </div>
          ))}
        </section>

        <section className="mt-8 grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[28px] border border-slate-800 bg-slate-900/80 p-5 shadow-panel">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <div className="text-sm uppercase tracking-[0.2em] text-slate-400">Recent shipments</div>
                <h2 className="mt-2 text-2xl font-bold">Live dispatch board</h2>
              </div>
              <button className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-2 text-sm font-medium text-blue-100">
                New shipment
              </button>
            </div>

            {loading ? (
              <div className="text-slate-300">Loading shipments...</div>
            ) : shipments.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-950/50 p-6 text-slate-300">
                No shipments yet. Create your first shipment from your shipping workspace.
              </div>
            ) : (
              <div className="space-y-4">
                {shipments.map((item) => (
                  <div key={item.id} className="flex flex-col gap-3 rounded-2xl border border-slate-800 bg-slate-950/60 p-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/15 to-violet-500/15 text-blue-200">
                        <Package size={18} />
                      </div>
                      <div>
                        <div className="font-semibold text-white">{item.trackingNumber}</div>
                        <div className="text-sm text-slate-400">{item.origin} → {item.destination}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${item.status === 'delivered' ? 'bg-emerald-500/10 text-emerald-300' : item.status === 'in_transit' ? 'bg-blue-500/10 text-blue-300' : 'bg-violet-500/10 text-violet-300'}`}>
                        {item.status}
                      </span>
                      <div className="text-sm text-slate-300">{item.eta}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="rounded-[28px] border border-slate-800 bg-slate-900/80 p-5 shadow-panel">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <div className="text-sm uppercase tracking-[0.2em] text-slate-400">Fleet</div>
                <h2 className="mt-2 text-2xl font-bold">Performance</h2>
              </div>
              <Truck className="text-blue-300" size={18} />
            </div>

            <div className="space-y-4">
              {[
                { label: 'Active vehicles', value: '146 / 178', percent: 82 },
                { label: 'Average delay', value: '11 min', percent: 35 },
                { label: 'Delivery success', value: '96.4%', percent: 96 }
              ].map((item) => (
                <div key={item.label}>
                  <div className="mb-2 flex items-center justify-between text-sm text-slate-300">
                    <span>{item.label}</span>
                    <span className="font-semibold text-white">{item.value}</span>
                  </div>
                  <div className="h-2.5 overflow-hidden rounded-full bg-slate-800">
                    <div className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" style={{ width: `${item.percent}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
