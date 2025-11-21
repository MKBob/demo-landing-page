import { useState } from 'react'

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
      <nav className="mx-auto flex max-w-[80%] items-center justify-between px-4 py-10 md:px-0">
        {/* Logo */}
        <div>
          <span className="text-4xl text-[#52BDAA] font-bold">Bicaas</span>
        </div>

        {/* Mobile menu button */}
        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-700 transition-colors hover:bg-gray-50 md:hidden"
          aria-label="Toggle navigation"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span className="sr-only">Open menu</span>
          <div className="flex flex-col gap-1">
            <span
              className={`block h-0.5 w-6 bg-current transition-transform ${
                isMenuOpen ? 'translate-y-1.5 rotate-45' : ''
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-current ${isMenuOpen ? 'opacity-0' : ''}`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-current transition-transform ${
                isMenuOpen ? '-translate-y-1.5 -rotate-45' : ''
              }`}
            ></span>
          </div>
        </button>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-6 text-sm font-medium text-gray-400">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a className="text-xl cursor-pointer hover:text-gray-900 transition-colors" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <button className="px-4 py-2 text-xl rounded-2xl text-gray-500 cursor-pointer transition-colors hover:bg-[#52BD94] hover:text-white">
              Login
            </button>
            <button className="rounded-2xl bg-[#52BD94] px-4 py-2 text-xl text-white transition-colors cursor-pointer">
              Sign up
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu dropdown */}
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
            <button className="px-4 py-2 text-xl rounded-lg text-gray-700 cursor-pointer hover:bg-[#52BDAA] transition-colors">
              Login
            </button>
            <button className="rounded-lg bg-[#52BD94] px-4 py-2 text-xl text-white hover:bg-[#52BD94] transition-colors">
              Sign up
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
