import Link from 'next/link';
import { ArrowRight, BarChart3, Check, PackageCheck, ShieldCheck, TrendingUp, Truck } from 'lucide-react';

const stats = [
  { label: 'Shipments tracked', value: '2.4M+' },
  { label: 'On-time deliveries', value: '97.8%' },
  { label: 'Avg. delivery speed', value: '2.1 min' }
];

const features = [
  {
    icon: PackageCheck,
    title: 'Live shipment visibility',
    text: 'See every parcel move from origin to destination with a clean, confidence-building tracking experience.'
  },
  {
    icon: ShieldCheck,
    title: 'Secure operations',
    text: 'Give teams the control, visibility, and trust they need to manage high-value or time-sensitive deliveries.'
  },
  {
    icon: TrendingUp,
    title: 'Business intelligence',
    text: 'Turn route patterns and delivery performance into more efficient shipping decisions and smoother operations.'
  }
];

const steps = [
  'Create shipment',
  'Generate label',
  'Track in real time',
  'Deliver with updates'
];

const plans = [
  {
    name: 'Starter',
    price: '$29',
    description: 'For small businesses getting organized.',
    features: ['Unlimited tracking pages', 'Shipment dashboard', 'Email notifications', 'Standard support'],
    featured: false
  },
  {
    name: 'Growth',
    price: '$79',
    description: 'For scaling businesses with more volume.',
    features: ['Everything in Starter', 'Priority support', 'Advanced analytics', 'Custom labels'],
    featured: true
  },
  {
    name: 'Enterprise',
    price: '$199',
    description: 'For operations teams managing scale.',
    features: ['Everything in Growth', 'Team permissions', 'Dedicated onboarding', 'White-glove support'],
    featured: false
  }
];

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050b16] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(90,169,255,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(125,92,255,0.16),transparent_30%)]" />

      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-400 to-violet-500 text-lg font-black shadow-glow">
            T
          </div>
          <div>
            <div className="text-lg font-bold tracking-wide">TrackNova</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          <Link href="/tracking">Tracking</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/login">Login</Link>
        </nav>

        <Link
          href="/signup"
          className="rounded-full border border-blue-400/40 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-100 transition hover:border-blue-300 hover:bg-blue-500/20"
        >
          Start free
        </Link>
      </header>

      <section className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 px-6 pb-20 pt-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:pb-28 lg:pt-16">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-100">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Real-time shipment intelligence
          </div>

          <h1 className="max-w-xl text-5xl font-black tracking-tight text-white sm:text-6xl">
            Deliver clarity from warehouse to doorstep.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            TrackNova is the premium shipping platform for modern businesses that want transparent deliveries, faster operations, and a branded customer experience.
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
                    <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Origin</div>
                    <div className="mt-2 font-semibold text-white">New York, US</div>
                  </div>
                  <div className="rounded-xl border border-slate-700 bg-slate-950/80 p-3">
                    <div className="text-xs uppercase tracking-[0.2em] text-slate-400">Destination</div>
                    <div className="mt-2 font-semibold text-white">Los Angeles, US</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-20 lg:px-10">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-blue-300">Built for modern logistics</p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Everything customers expect from premium shipping.</h2>
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

      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-20 lg:px-10">
        <div className="grid gap-8 rounded-[30px] border border-slate-800 bg-slate-900/70 p-6 shadow-panel lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col justify-center">
            <p className="text-sm uppercase tracking-[0.26em] text-blue-300">How it works</p>
            <h3 className="mt-3 text-3xl font-bold text-white">Simple flow, premium experience.</h3>
            <p className="mt-4 max-w-md text-slate-300">
              From bulk shipment creation to route updates and fulfillment alerts, TrackNova brings logistics operations into a polished digital experience.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {steps.map((step, index) => (
              <div key={step} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 text-sm font-bold text-blue-200">
                  {index + 1}
                </div>
                <div className="text-lg font-semibold text-white">{step}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-20 lg:px-10">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-blue-300">Pricing</p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">Choose the plan built for your growth.</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`${plan.featured ? 'border-blue-400/50 bg-gradient-to-b from-blue-500/10 to-slate-900/90 shadow-glow' : 'border-slate-800 bg-slate-900/70'} rounded-[28px] border p-6`}
            >
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <div className="text-xl font-bold text-white">{plan.name}</div>
                  <div className="mt-2 text-sm text-slate-300">{plan.description}</div>
                </div>
                {plan.featured && (
                  <div className="rounded-full border border-blue-400/40 bg-blue-500/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-200">
                    Popular
                  </div>
                )}
              </div>

              <div className="mb-6 flex items-end gap-2">
                <span className="text-4xl font-black text-white">{plan.price}</span>
                <span className="pb-1 text-sm text-slate-400">/ month</span>
              </div>

              <ul className="space-y-3 text-sm text-slate-200">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-300">
                      <Check size={12} />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="/signup"
                className={`mt-7 inline-flex w-full items-center justify-center rounded-full px-5 py-3 font-semibold ${plan.featured ? 'bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-glow' : 'border border-slate-700 bg-slate-950/60 text-slate-100'}`}
              >
                Get started
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-6 pb-20 lg:px-10">
        <div className="rounded-[32px] border border-slate-800 bg-slate-900/80 p-8 shadow-panel">
          <div className="flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">
            <div>
              <p className="text-sm uppercase tracking-[0.26em] text-blue-300">Built to sell</p>
              <h3 className="mt-3 text-3xl font-bold text-white">Turn shipping into a premium digital product.</h3>
            </div>
            <Link
              href="/signup"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500 px-6 py-3 font-semibold text-white shadow-glow"
            >
              Launch your product
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}








																																																																																																																																																
