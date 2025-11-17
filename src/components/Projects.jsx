export default function Projects() {
  const items = [
    {
      title: 'Interactive 3D Hero',
      description:
        'Playable 3D experience with Spline, layered with gradients and subtle motion.',
      tags: ['Spline', 'React', 'Tailwind'],
      link: '#',
    },
    {
      title: 'SaaS Dashboard Motion',
      description:
        'Micro-interactions and page transitions for a clean analytics product.',
      tags: ['Framer Motion', 'React'],
      link: '#',
    },
    {
      title: 'Marketing Site Refresh',
      description:
        'Modern, accessible, fast website with a playful tech aesthetic.',
      tags: ['Vite', 'Tailwind'],
      link: '#',
    },
  ]

  return (
    <section id="projects" className="py-24 sm:py-28 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Selected Projects</h2>
          <a href="#contact" className="hidden md:inline-block text-sm font-medium text-slate-700 hover:text-slate-900">Work with me →</a>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((p) => (
            <a key={p.title} href={p.link} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-[16/10] rounded-xl bg-gradient-to-br from-blue-100 via-violet-100 to-pink-100" />
              <h3 className="mt-4 text-lg font-semibold text-slate-900 group-hover:underline underline-offset-4">
                {p.title}
              </h3>
              <p className="mt-1 text-sm text-slate-600">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs rounded-full bg-slate-100 text-slate-700 px-2.5 py-1 ring-1 ring-slate-200">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
