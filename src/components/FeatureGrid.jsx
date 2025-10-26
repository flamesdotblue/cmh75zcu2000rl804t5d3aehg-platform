import React from 'react'
import { motion } from 'framer-motion'
import { Cpu, Activity, Shield, Gauge, Zap } from 'lucide-react'

const features = [
  {
    icon: Cpu,
    title: 'Tech-Driven Materials',
    desc: 'AI-mapped knit patterns and responsive midsoles adapt to your stride in real time.',
  },
  {
    icon: Activity,
    title: 'Performance Engineered',
    desc: 'Energy return foam with carbon-reinforced stability for explosive transitions.',
  },
  {
    icon: Shield,
    title: 'Durability & Control',
    desc: 'Micro-tread outsole and abrasion guards keep grip and form over thousands of miles.',
  },
  {
    icon: Gauge,
    title: 'Lightweight Speed',
    desc: 'Sub-200g class with optimized balance for tempo runs and race day peak output.',
  },
]

export default function FeatureGrid() {
  return (
    <section id="features" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-100 sm:text-3xl">
              Innovation that moves you
            </h2>
            <p className="mt-2 text-sm text-slate-400 max-w-2xl">
              Minimalist, immersive design meets advanced biomechanics. Built for speed, stability, and effortless flow.
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-emerald-300/90 text-sm">
            <Zap className="size-4" />
            AI-enhanced visuals
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, idx) => (
            <motion.div
              key={f.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/60 to-black/60 p-5 shadow-lg shadow-black/30 backdrop-blur-md"
            >
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.04),transparent_30%,transparent_70%,rgba(255,255,255,0.04))]" />
              <div className="mb-4 inline-flex items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-500/10 p-2 text-emerald-300">
                <f.icon className="size-5" />
              </div>
              <h3 className="text-lg font-medium text-slate-100">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-400">{f.desc}</p>
              <div className="mt-6 h-1 w-1/2 rounded-full bg-gradient-to-r from-emerald-400/40 to-cyan-400/40" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
