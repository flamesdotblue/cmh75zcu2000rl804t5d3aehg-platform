import React from 'react'
import { motion } from 'framer-motion'

const products = [
  {
    name: 'VOLT X Carbon',
    color: 'Onyx / Neon',
    img: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1200&auto=format&fit=crop',
    price: '$229',
  },
  {
    name: 'AERO Knit Pro',
    color: 'Graphite / Ice',
    img: 'https://images.unsplash.com/photo-1543508282-6319a3e2621f?q=80&w=1200&auto=format&fit=crop',
    price: '$199',
  },
  {
    name: 'QUANTUM Pace',
    color: 'Shadow / Lime',
    img: 'https://images.unsplash.com/photo-1542291022-2f94b3e1d08b?q=80&w=1200&auto=format&fit=crop',
    price: '$249',
  },
]

export default function ProductShowcase() {
  return (
    <section id="showcase" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-100 sm:text-3xl">Flagship lineup</h2>
            <p className="mt-2 text-sm text-slate-400 max-w-2xl">
              Sleek silhouettes with metallic gradients and parallax motion for an immersive, futuristic shopping flow.
            </p>
          </div>
          <a id="buy" href="#" className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-emerald-300 hover:bg-emerald-500/15 text-sm">Join waitlist</a>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {products.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900/60 to-black/60 shadow-2xl shadow-black/30 backdrop-blur-md"
            >
              <div className="absolute inset-x-0 -top-40 h-64 bg-[conic-gradient(at_top_left,rgba(226,232,240,0.15),transparent_30%,transparent_70%,rgba(226,232,240,0.15))] blur-2xl" />
              <div className="relative p-5">
                <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-black/30">
                  <motion.img
                    src={p.img}
                    alt={p.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    whileHover={{ rotateZ: 0.2 }}
                  />
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-slate-100">{p.name}</h3>
                    <p className="text-xs text-slate-400">{p.color}</p>
                  </div>
                  <div className="rounded-full bg-gradient-to-br from-emerald-400/15 to-cyan-400/15 px-3 py-1 text-sm text-slate-200 ring-1 ring-inset ring-white/10">
                    {p.price}
                  </div>
                </div>
                <div className="mt-5 flex items-center gap-2">
                  <button className="flex-1 rounded-xl border border-slate-700 bg-black/30 px-4 py-2 text-sm text-slate-200 hover:bg-black/40">Details</button>
                  <button className="flex-1 rounded-xl bg-emerald-500 px-4 py-2 text-sm font-medium text-black hover:brightness-110">Add to bag</button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
