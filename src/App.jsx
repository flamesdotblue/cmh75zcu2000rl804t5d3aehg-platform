import React from 'react'
import Hero from './components/Hero'
import FeatureGrid from './components/FeatureGrid'
import ProductShowcase from './components/ProductShowcase'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen w-full bg-neutral-950 text-slate-100 antialiased selection:bg-emerald-400/20 selection:text-emerald-300">
      {/* Background accents */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 -right-24 h-[46rem] w-[46rem] rounded-full bg-gradient-to-br from-zinc-700/10 via-emerald-500/10 to-cyan-500/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-[40rem] w-[40rem] rounded-full bg-gradient-to-tr from-cyan-500/10 via-fuchsia-500/10 to-emerald-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_60%)]" />
      </div>

      <Hero />
      <FeatureGrid />
      <ProductShowcase />
      <Footer />
    </div>
  )
}
