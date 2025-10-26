import React, { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { Rocket, Zap } from 'lucide-react'

export default function Hero() {
  const containerRef = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-150, 150], [12, -12])
  const rotateY = useTransform(x, [-150, 150], [-18, 18])

  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      const px = e.clientX - (rect.left + rect.width / 2)
      const py = e.clientY - (rect.top + rect.height / 2)
      animate(x, Math.max(-150, Math.min(150, px)), { type: 'spring', stiffness: 120, damping: 20 })
      animate(y, Math.max(-150, Math.min(150, py)), { type: 'spring', stiffness: 120, damping: 20 })
    }
    const onLeave = () => {
      animate(x, 0, { type: 'spring', stiffness: 120, damping: 18 })
      animate(y, 0, { type: 'spring', stiffness: 120, damping: 18 })
    }
    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, [x, y])

  const metallicText = 'bg-clip-text text-transparent bg-[conic-gradient(at_top_left,theme(colors.slate.100),theme(colors.zinc.300),theme(colors.slate.100),theme(colors.zinc.200))]'

  return (
    <section ref={containerRef} className="relative isolate overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pt-10 pb-24 md:pt-16 md:pb-32">
        {/* Top bar */}
        <div className="flex items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-sm text-slate-300/80">
            <div className="size-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>AI-enhanced visuals</span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-xs text-slate-400">
            <button onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-slate-200">Features</button>
            <button onClick={() => document.getElementById('showcase')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-slate-200">Showcase</button>
            <a href="#buy" className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-emerald-300 hover:bg-emerald-500/15">Preorder</a>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 items-center gap-12 md:mt-16 md:grid-cols-2">
          <div className="relative z-10">
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
              <div className={`text-5xl leading-tight font-semibold tracking-tight sm:text-6xl md:text-7xl ${metallicText}`}>
                Luxury Athletic. Futuristic Performance.
              </div>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300/80">
                Premium sports shoes engineered with tech-driven materials and AI-shaped comfort. Minimalist design, bold typography, metallic gradients, and an immersive dark mode aesthetic.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <button onClick={() => document.getElementById('showcase')?.scrollIntoView({ behavior: 'smooth' })} className="group inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-medium text-black shadow-[0_0_0_1px_rgba(16,185,129,0.3)] shadow-emerald-400/30 transition hover:translate-y-[-1px]">
                  <Rocket className="size-4 group-hover:translate-x-0.5 transition" />
                  Explore Models
                </button>
                <button onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })} className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-black/20 px-5 py-2.5 text-sm text-slate-200 hover:bg-black/30">
                  <Zap className="size-4 text-emerald-300" />
                  See Tech Specs
                </button>
              </div>
              <div className="mt-6 text-xs text-slate-400 flex items-center gap-3">
                <span className="rounded-full border border-slate-700/60 bg-black/30 px-3 py-1">Dark mode</span>
                <span className="rounded-full border border-slate-700/60 bg-black/30 px-3 py-1">3D Parallax</span>
                <span className="rounded-full border border-slate-700/60 bg-black/30 px-3 py-1">Responsive</span>
              </div>
            </motion.div>
          </div>

          {/* 3D Interactive Shoe */}
          <div className="relative h-[420px] md:h-[520px]">
            {/* Parallax glows */}
            <motion.div style={{ x: useTransform(x, v => v * -0.02), y: useTransform(y, v => v * -0.02) }} className="absolute -top-8 -right-6 h-40 w-40 rounded-full bg-emerald-400/20 blur-3xl" />
            <motion.div style={{ x: useTransform(x, v => v * 0.03), y: useTransform(y, v => v * 0.03) }} className="absolute -bottom-10 -left-10 h-52 w-52 rounded-full bg-cyan-400/20 blur-3xl" />

            <motion.div
              style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
              className="relative mx-auto h-full w-full rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/60 to-black/60 p-2 shadow-2xl shadow-black/40 backdrop-blur-md"
            >
              <div className="relative flex h-full w-full items-center justify-center rounded-2xl bg-[radial-gradient(ellipse_at_center,rgba(20,20,25,0.8),rgba(0,0,0,0.6))]">
                {/* Metallic rim */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
                {/* Shoe image */}
                <motion.img
                  src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop"
                  alt="Premium sports shoe"
                  className="relative z-10 w-[88%] max-w-[680px] drop-shadow-[0_40px_80px_rgba(16,185,129,0.25)]"
                  style={{ translateZ: 40 }}
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 120, damping: 18, delay: 0.1 }}
                />
                {/* Floating spec chips */}
                {mounted && (
                  <>
                    <motion.div style={{ translateZ: 60 }} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="absolute -left-3 top-10 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300 shadow-[0_0_40px_rgba(16,185,129,0.15)]">
                      Carbon plate
                    </motion.div>
                    <motion.div style={{ translateZ: 60 }} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="absolute -right-3 bottom-12 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-xs text-cyan-300">
                      AI fit mesh
                    </motion.div>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
