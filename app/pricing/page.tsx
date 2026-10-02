import Link from 'next/link';
import { ArrowRight, Check, ShieldCheck, Sparkles, TrendingUp } from 'lucide-react';

const features = [
  'Unlimited parcel tracking pages',
  'Shipment management dashboard',
  'Smart delivery status updates',
  'Priority support and onboarding'
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#050b16] px-6 py-10 text-white lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.22em] text-blue-100">
            <Sparkles size={12} />
            Premium pricing
          </div>
          <h1 className="mt-5 text-4xl font-black text-white sm:text-5xl">Simple plans built for growth.</h1>
          <p className="mt-4 text-lg text-slate-300">Choose the plan that fits the size of your shipping operation.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {[
            { name: 'Starter', price: '$29', description: 'For small teams getting organized.', features: ['Unlimited tracking pages', 'Shipment dashboard', 'Email notifications', 'Standard support'] },
            { name: 'Growth', price: '$79', description: 'For scaling logistics operations.', features: ['Everything in Starter', 'Advanced analytics', 'Custom labels', 'Priority support'], featured: true },
            { name: 'Enterprise', price: '$199', description: 'For high-volume shipping operations.', features: ['Everything in Growth', 'Team permissions', 'Dedicated onboarding', 'White-glove support'] }
          ].map((plan) => (
            <div key={plan.name} className={`${plan.featured ? 'border-blue-400/50 bg-gradient-to-b from-blue-500/10 to-slate-900/90 shadow-glow' : 'border-slate-800 bg-slate-900/70'} rounded-[28px] border p-6`}>
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <div className="text-xl font-bold text-white">{plan.name}</div>
                  <div className="mt-2 text-sm text-slate-300">{plan.description}</div>
                </div>
                {plan.featured && (
                  <div className="rounded-full border border-blue-400/40 bg-blue-500/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-blue-200">
                    Most popular
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

              <Link href="/signup" className={`mt-7 inline-flex w-full items-center justify-center rounded-full px-5 py-3 font-semibold ${plan.featured ? 'bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-glow' : 'border border-slate-700 bg-slate-950/60 text-slate-100'}`}>
                Choose plan
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-[30px] border border-slate-800 bg-slate-900/70 p-8 shadow-panel">
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              { icon: ShieldCheck, title: 'Secure foundation', text: 'Built for shipping teams that need trust and reliability.' },
              { icon: TrendingUp, title: 'Scale-ready', text: 'From a few orders to a large national fulfillment operation.' },
              { icon: Sparkles, title: 'Premium experience', text: 'Clean design, better UX, and stronger brand perception.' }
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-300">
                  <Icon size={18} />
                </div>
                <h3 className="text-lg font-bold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Link href="/signup" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500 px-6 py-3 font-semibold text-white shadow-glow">
            Launch your product
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </main>
  );
}
