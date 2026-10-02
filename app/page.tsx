import Link from 'next/link';
import { ArrowRight, PackageCheck, ShieldCheck, TrendingUp } from 'lucide-react';

const stats = [
  { label: 'Shipments tracked', value: '2.4M+' },
  { label: 'On-time deliveries', value: '97.8%' },
  { label: 'Average scan speed', value: '2.1 min' }
];

const features = [
  {
    icon: PackageCheck,
    title: 'Live shipment visibility',
    text: 'Monitor packages from first mile to final delivery in one polished dashboard.'
  },
  {
    icon: ShieldCheck,
    title: 'Secure operations',
    text: 'Protect shipments, manage address control, and build confidence with every update.'
  },
  {
    icon: TrendingUp,
    title: 'Business intelligence',
    text: 'Reduce delays with smarter performance insights, route trends, and delivery analytics.'
  }
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#050b16] text-white">
      <div className="absolute inset-0 bg-hero-grid pointer-events-none" />

      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-400 to-violet-500 shadow-glow">
            <span className="text-lg font-black">T</span>
          </div>
          <div>
            <div className="text-lg font-bold tracking-wide">TrackNova</div>
          </div>
        </div>

        <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          <Link href="/tracking">Tracking</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/login">Login</Link>
        </nav>

        <Link
          href="/login"
          className="rounded-full border border-blue-400/40 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-100 transition hover:border-blue-300 hover:bg-blue-500/20"
        >
          Start free
        </Link>
      </header>

      <section className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-6 pb-18 pt-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:pb-24 lg:pt-16">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-100">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Real-time shipment intelligence
          </div>

          <h1 className="max-w-xl text-5xl font-black tracking-tight text-white sm:text-6xl">
            Move packages with clarity.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            Track every shipment, streamline delivery operations, and turn shipping into a premium customer experience.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/tracking"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500 px-6 py-3 font-semibold text-white shadow-glow transition hover:scale-[1.01]"
            >
              Track a shipment
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center rounded-full border border-slate-600 bg-slate-900/70 px-6 py-3 font-semibold text-slate-100 transition hover:border-slate-500"
            >
              Explore dashboard
            </Link>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 backdrop-blur-sm">
                <div className="text-2xl font-black text-white">{stat.value}</div>
                <div className="mt-1 text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-8 top-16 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute -right-10 bottom-10 h-52 w-52 rounded-full bg-violet-500/20 blur-3xl" />

          <div className="relative overflow-hidden rounded-[32px] border border-slate-700 bg-slate-900/80 p-5 shadow-panel backdrop-blur-xl">
            <div className="rounded-[24px] border border-slate-700 bg-[#0a1220] p-4">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-[0.24em] text-slate-400">Live route</div>
                  <div className="mt-2 text-xl font-bold">TNX-47812</div>
                </div>
                <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold text-emerald-300">
                  In transit
                </span>
              </div>

              <div className="relative overflow-hidden rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-900 to-slate-800 p-4">
                <div className="h-52 rounded-xl bg-[radial-gradient(circle_at_30%_20%,rgba(59,231,199,0.2),transparent_20%),linear-gradient(135deg,#0f172a,#111827_40%,#0f172a)]">
                  <div className="relative h-full w-full">
                    <div className="absolute left-8 top-10 h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.9)]" />
                    <div className="absolute right-8 bottom-10 h-2.5 w-2.5 rounded-full bg-blue-400 shadow-[0_0_18px_rgba(96,165,250,0.9)]" />
                    <div className="absolute left-14 top-14 h-px w-32 rotate-[23deg] bg-gradient-to-r from-emerald-400 to-blue-400" />
                    <div className="absolute left-20 top-16 h-3 w-3 rounded-full bg-white/80" />
                    <div className="absolute right-16 bottom-16 h-3 w-3 rounded-full bg-white/80" />
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:22px_22px]" />
                  </div>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-slate-700 bg-slate-950/80 p-3">
                    <div className="text-xs uppercase tracking-[0.2em] text-slate-430">Origin</div>
                    <div className="mt-2 font-semibold text-white">New York, US</div>
                  </div>
                  <div className="rounded-xl border border-slate-700 bg-slate-950/80 p-3">
                    <div className="text-xs uppercase tracking-[0.2em] text-slate-430">Destination</div>
                    <div className="mt-2 font-semibold text-white">Los Angeles, US</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-24 lg:px-10">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-blue-300">Built for modern logistics</p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Ship smarter with real visibility.</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-panel">
              <div className="mb-5 inline-flex rounded-2xl bg-blue-500/10 p-3 text-blue-300">
                <Icon size={22} />
              </div>
              <h3 className="text-xl font-bold text-white">{title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
