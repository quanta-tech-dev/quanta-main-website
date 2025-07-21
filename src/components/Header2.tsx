'use client';

import { useState } from 'react';
import Dropdown from './Dropdown';

export default function Header2({
  logo = 'https://example.com/logo.svg',
  navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    {
      label: 'Services',
      href: '/services',
      dropdown: [
        { label: 'Consulting', href: '/services/consulting' },
        { label: 'AI Development', href: '/services/ai-development' },
        { label: 'Data Analytics', href: '/services/data-analytics' },
        {
          label: 'Software Development',
          href: '/services/software-development',
        },
        {
          label: 'Mobile App Development',
          href: '/services/mobile-app-development',
        },
        { label: 'Digital Marketing', href: '/services/digital-marketing' },
      ],
    },
    { label: 'Contact', href: '/contact' },
  ],
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="flex items-center">
              <img className="h-8 w-auto" src={logo} alt="Logo" />
              <span className="ml-2 text-xl font-bold text-gray-900">
                Brand
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(index)}
                onMouseLeave={() => item.dropdown && setActiveDropdown(null)}
              >
                {item.dropdown ? (
                  <>
                    <button className="flex items-center text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors focus:outline-none">
                      {item.label}
                      <svg
                        className="ml-1 h-4 w-4 transition-transform duration-200"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>

                    {activeDropdown === index && (
                      <div className="absolute left-0 mt-2 w-56 bg-white border rounded-md shadow-lg z-50">
                        {item.dropdown.map((dropdownItem) => (
                          <a
                            key={dropdownItem.label}
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            {dropdownItem.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={item.href}
                    className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors"
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <a href="/" className="flex items-center">
              <img className="h-8 w-auto" src={logo} alt="Logo" />
              <span className="ml-2 text-xl font-bold text-gray-900">
                Brand
              </span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-purple-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              <svg
                className={`${mobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Icon when menu is open */}
              <svg
                className={`${mobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
          {navItems.map((item, index) => (
            <div key={item.label}>
              {item.dropdown ? (
                <div className="w-full">
                  <button
                    onClick={() =>
                      setActiveDropdown(activeDropdown === index ? null : index)
                    }
                    className="flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50"
                  >
                    {item.label}
                    <svg
                      className={`ml-1 h-5 w-5 transition-transform duration-200 ${
                        activeDropdown === index ? 'transform rotate-180' : ''
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  {activeDropdown === index && (
                    <div className="pl-4 pr-2 py-1 space-y-1 bg-gray-50 rounded-md mt-1 mb-2">
                      {item.dropdown.map((dropdownItem) => (
                        <a
                          key={dropdownItem.label}
                          href={dropdownItem.href}
                          className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-100"
                        >
                          {dropdownItem.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50"
                >
                  {item.label}
                </a>
              )}
            </div>
          ))}
          <div className="px-3 py-2">
            <button className="w-full">Get Started</button>
          </div>
        </div>
      </div>
    </header>
  );
}
