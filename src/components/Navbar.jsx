import { useState } from 'react'
import { Menu, X } from 'lucide-react'

function NavLink({ href, children, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-white/60 rounded-md transition-colors"
    >
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const toggle = () => setOpen(!open)
  const close = () => setOpen(false)

  const links = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-2xl bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50 border border-white/70 shadow-sm">
          <a href="#" className="pl-4 py-3 flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-blue-600 to-violet-500" />
            <span className="font-semibold tracking-tight text-slate-800">My Portfolio</span>
          </a>

          <nav className="hidden md:flex items-center pr-2">
            {links.map((l) => (
              <NavLink key={l.href} href={l.href}>{l.label}</NavLink>
            ))}
            <a href="#contact" className="ml-2 inline-flex items-center gap-2 rounded-md bg-slate-900 text-white px-4 py-2 text-sm font-medium hover:bg-slate-800 transition-colors">
              Let’s talk
            </a>
          </nav>

          <button aria-label="Open menu" className="md:hidden p-3" onClick={toggle}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mt-2 rounded-xl bg-white/90 backdrop-blur border border-white/70 shadow-sm p-2 flex flex-col">
            {links.map((l) => (
              <NavLink key={l.href} href={l.href} onClick={close}>{l.label}</NavLink>
            ))}
            <a href="#contact" onClick={close} className="mt-1 inline-flex items-center justify-center gap-2 rounded-md bg-slate-900 text-white px-4 py-2 text-sm font-medium hover:bg-slate-800 transition-colors">
              Let’s talk
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
