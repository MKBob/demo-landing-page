import { useState } from 'react'
import Button from './Button'

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Product', href: '#' },
  { label: 'FAQ', href: '#' },
  { label: 'Blog', href: '#' },
  { label: 'About Us', href: '#' }
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header>
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-6 sm:px-6 lg:px-0">
        <div className="flex items-center gap-2">
          <span className="text-3xl font-bold text-[#52BDAA] sm:text-4xl">Bicaas</span>
        </div>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-700 transition-colors hover:bg-gray-50 lg:hidden"
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

        <div className="hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-6 text-base font-medium text-gray-500">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a className="text-lg transition-colors hover:text-gray-900" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <Button variant="secondary" size="md" className="text-base">
              Login
            </Button>
            <Button size="md" className="text-base">
              Sign up
            </Button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="border-t border-gray-100 bg-white lg:hidden">
          <ul className="flex flex-col gap-2 px-4 py-4 text-gray-700">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a className="block rounded-lg px-3 py-2 text-base font-medium hover:bg-gray-50" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-2 px-4 pb-4">
            <Button variant="secondary" className="w-full rounded-lg text-base">
              Login
            </Button>
            <Button className="w-full rounded-lg text-base">
              Sign up
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

