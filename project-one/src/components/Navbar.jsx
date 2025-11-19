import { useState } from 'react'

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Features', href: '#' },
  { label: 'Pricing', href: '#' },
  { label: 'Contact', href: '#' }
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-8">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white font-semibold">
            L
          </div>
          <span className="text-xl font-semibold tracking-tight">Bicaas</span>
        </div>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-700 transition-colors hover:bg-gray-50 md:hidden"
          aria-label="Toggle navigation"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span className="sr-only">Open menu</span>
          <div className="flex flex-col gap-1">
            <span
              className={`block h-0.5 w-6 bg-current transition-transform ${isMenuOpen ? 'translate-y-1.5 rotate-45' : ''}`}
            ></span>
            <span className={`block h-0.5 w-6 bg-current ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span
              className={`block h-0.5 w-6 bg-current transition-transform ${isMenuOpen ? '-translate-y-1.5 -rotate-45' : ''}`}
            ></span>
          </div>
        </button>

        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-6 text-sm font-medium text-gray-600">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a className="transition-colors hover:text-gray-900" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <button className="rounded-full border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-300">
              Login
            </button>
            <button className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700">
              Sign up
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="border-t border-gray-100 bg-white md:hidden">
          <ul className="flex flex-col gap-2 px-4 py-4 text-gray-700">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a className="block rounded-lg px-3 py-2 text-sm font-medium hover:bg-gray-50" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-2 px-4 pb-4">
            <button className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 transition-colors hover:border-gray-300">
              Login
            </button>
            <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700">
              Sign up
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

