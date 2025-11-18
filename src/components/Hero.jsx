import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      {/* Gradient overlay for grainy purple/blue vibe */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(100%_50%_at_50%_0%,rgba(124,58,237,0.35)_0%,rgba(59,130,246,0.35)_35%,transparent_60%)] mix-blend-screen"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 flex flex-col items-center text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-4 py-1 text-xs uppercase tracking-widest text-violet-200 backdrop-blur-md">SE Blog • Futuristic</span>
        <h1 className="mt-6 text-5xl md:text-7xl font-extrabold leading-tight bg-gradient-to-br from-violet-300 via-white to-blue-300 text-transparent bg-clip-text drop-shadow-[0_0_30px_rgba(139,92,246,0.25)]">
          Write. Ship. Share.
        </h1>
        <p className="mt-5 max-w-2xl text-base md:text-lg text-violet-100/90">
          A software engineering blog system with a stunning, interactive 3D hero, built for speed and clarity.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a href="#create" className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-tr from-violet-600 to-indigo-500 text-white px-5 py-3 shadow-lg shadow-violet-900/40 transition-transform hover:scale-[1.02] active:scale-[0.99]">
            Start Writing
            <svg className="size-4 opacity-90 group-hover:translate-x-0.5 transition" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <a href="#posts" className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-3 text-violet-100 border border-white/15 backdrop-blur-md hover:bg-white/15">
            Explore Posts
          </a>
        </div>
      </div>
    </section>
  )
}
