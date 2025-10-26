import React from 'react'
import { Github, Twitter, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <div className="text-xl font-semibold bg-clip-text text-transparent bg-[linear-gradient(120deg,white,theme(colors.zinc.300),white)]">
              NOVA Athletics
            </div>
            <p className="mt-2 text-sm text-slate-400">
              Innovative sportswear crafted for peak performance and minimalist luxury.
            </p>
          </div>
          <div className="md:col-span-2 flex flex-col items-start md:flex-row md:items-center md:justify-between gap-4">
            <form className="flex w-full max-w-md items-center gap-2">
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-2 text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
              />
              <button className="rounded-xl bg-emerald-500 px-4 py-2 text-sm font-medium text-black hover:brightness-110">Subscribe</button>
            </form>
            <div className="flex items-center gap-3 text-slate-400">
              <a href="#" className="rounded-lg border border-white/10 bg-black/30 p-2 hover:text-slate-200"><Twitter className="size-4" /></a>
              <a href="#" className="rounded-lg border border-white/10 bg-black/30 p-2 hover:text-slate-200"><Github className="size-4" /></a>
              <a href="#" className="rounded-lg border border-white/10 bg-black/30 p-2 hover:text-slate-200"><Youtube className="size-4" /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Nova Athletics. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-300">Privacy</a>
            <a href="#" className="hover:text-slate-300">Terms</a>
            <a href="#" className="hover:text-slate-300">Support</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
