"use client";

import { useState } from 'react';
import { ArrowRight, Building2, ShieldCheck, Sparkles, TrendingUp } from 'lucide-react';
import Link from 'next/link';

const features = [
  { icon: ShieldCheck, label: 'Secure shipment data' },
  { icon: TrendingUp, label: 'Clear delivery insights' },
  { icon: Building2, label: 'Built for shipping teams' }
];

export default function SignUpPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    company: ''
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert('Signup ready — connect backend to persist users.');
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050b16] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(90,169,255,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(125,92,255,0.16),transparent_30%)]" />
      <div className="absolute left-1/2 top-10 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[100px]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl items-center justify-center px-6 py-10 lg:px-10">
        <div className="grid w-full max-w-5xl overflow-hidden rounded-[30px] border border-slate-800 bg-slate-950/70 shadow-panel backdrop-blur-xl lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative hidden overflow-hidden border-r border-slate-800 bg-[linear-gradient(135deg,rgba(11,18,29,0.96),rgba(19,32,52,0.84))] p-10 lg:flex lg:flex-col lg:justify-between">
            <div>
              <Link href="/" className="mb-8 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-400 to-violet-500 text-lg font-black shadow-glow">
                  T
                </div>
                <div className="text-xl font-bold">TrackNova</div>
              </Link>

              <div className="mt-14 space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-100">
                  <Sparkles size={12} />
                  Join the next generation of shipping
                </div>

                <h1 className="max-w-md text-4xl font-black leading-tight text-white">
                  Launch smarter shipping operations.
                </h1>
                <p className="max-w-md text-base leading-7 text-slate-300">
                  Create your account to manage shipments, customers, routes, and realtime delivery visibility from one premium workspace.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {features.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900/50 px-4 py-3 text-sm text-slate-200">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-300">
                    <Icon size={16} />
                  </div>
                  {label}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center p-6 sm:p-10">
            <div className="w-full max-w-md">
              <div className="mb-8">
                <div className="text-sm uppercase tracking-[0.28em] text-slate-400">Create account</div>
                <h2 className="mt-3 text-3xl font-black text-white">Get started</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="rounded-2xl border border-slate-700 bg-slate-900/90 px-4 py-3">
                    <label className="mb-1 block text-xs uppercase tracking-[0.2em] text-slate-400">Full name</label>
                    <input
                      value={form.name}
                      onChange={(event) => setForm({ ...form, name: event.target.value })}
                      type="text"
                      placeholder="Aiden Cole"
                      className="w-full bg-transparent text-base text-white outline-none placeholder:text-slate-500"
                    />
                  </div>

                  <div className="rounded-2xl border border-slate-700 bg-slate-900/90 px-4 py-3">
                    <label className="mb-1 block text-xs uppercase tracking-[0.2em] text-slate-400">Company</label>
                    <input
                      value={form.company}
                      onChange={(event) => setForm({ ...form, company: event.target.value })}
                      type="text"
                      placeholder="TrackNova customer"
                      className="w-full bg-transparent text-base text-white outline-none placeholder:text-slate-500"
                    />
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-700 bg-slate-900/90 px-4 py-3">
                  <label className="mb-1 block text-xs uppercase tracking-[0.2em] text-slate-400">Work email</label>
                  <input
                    value={form.email}
                    onChange={(event) => setForm({ ...form, email: event.target.value })}
                    type="email"
                    placeholder="you@company.com"
                    className="w-full bg-transparent text-base text-white outline-none placeholder:text-slate-500"
                  />
                </div>

                <div className="rounded-2xl border border-slate-700 bg-slate-900/90 px-4 py-3">
                  <label className="mb-1 block text-xs uppercase tracking-[0.2em] text-slate-400">Password</label>
                  <input
                    value={form.password}
                    onChange={(event) => setForm({ ...form, password: event.target.value })}
                    type="password"
                    placeholder="Create a strong password"
                    className="w-full bg-transparent text-base text-white outline-none placeholder:text-slate-500"
                  />
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500 px-6 py-3.5 font-semibold text-white shadow-glow transition hover:brightness-110"
                >
                  Create account
                  <ArrowRight size={18} />
                </button>

                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-slate-500">
                  <div className="h-px flex-1 bg-slate-700" />
                  or sign up with
                  <div className="h-px flex-1 bg-slate-700" />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <button type="button" className="rounded-full border border-slate-700 bg-slate-900 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-slate-500">
                    Google
                  </button>
                  <button type="button" className="rounded-full border border-slate-700 bg-slate-900 px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-slate-500">
                    Apple
                  </button>
                </div>
              </form>

              <p className="mt-6 text-center text-sm text-slate-400">
                Already have an account?{' '}
                <Link href="/login" className="font-medium text-cyan-300 hover:text-cyan-200">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
