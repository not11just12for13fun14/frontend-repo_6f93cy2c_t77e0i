import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] md:min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/90 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-40 pb-24 md:pt-48 md:pb-36">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /> Open to work
          </p>
          <h1 className="mt-5 text-4xl sm:text-6xl font-black tracking-tight text-slate-900 leading-tight">
            I build modern, playful, interactive web experiences.
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-600">
            Frontend engineer crafting delightful UIs with React, animations, and 3D. Let’s create something memorable.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="inline-flex items-center rounded-lg bg-slate-900 text-white px-5 py-3 text-sm font-semibold shadow hover:bg-slate-800 transition-colors">
              View Projects
            </a>
            <a href="#contact" className="inline-flex items-center rounded-lg bg-white text-slate-900 px-5 py-3 text-sm font-semibold shadow ring-1 ring-slate-200 hover:bg-slate-50 transition-colors">
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
