export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-28">
      <div className="absolute inset-x-0 top-0 -z-0 h-48 bg-gradient-to-b from-blue-100/50 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">About Me</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              I’m a product-focused frontend engineer with a love for motion and 3D. I turn complex ideas into smooth, intuitive interfaces, balancing aesthetics with performance. I enjoy shipping polished experiences that feel alive and purposeful.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-slate-500">Core Stack</p>
                <p className="mt-1 font-semibold text-slate-800">React, TypeScript, Tailwind</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-slate-500">Motion</p>
                <p className="mt-1 font-semibold text-slate-800">Framer Motion, GSAP, Spline</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-slate-500">3D</p>
                <p className="mt-1 font-semibold text-slate-800">Three.js, Spline</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-slate-500">Tools</p>
                <p className="mt-1 font-semibold text-slate-800">Figma, GitHub, Vite</p>
              </div>
            </div>
          </div>
          <div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 bg-gradient-to-br from-slate-50 to-white shadow">
              <div className="absolute inset-0 grid place-items-center">
                <div className="text-center px-6">
                  <p className="text-6xl">👋</p>
                  <p className="mt-3 text-slate-600">Based anywhere internet exists. Coffee-fueled, pixel-obsessed.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
