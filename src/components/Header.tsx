'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const Header = () => {
  const [lang, setLang] = useState('en');

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'az' : 'en'));
  };

  const menuItems = [
    {
      title: 'Products',
      submenu: [
        { label: 'Quanta ERP', href: '/products/quanta-erp' },
        { label: 'Quanta BI', href: '/products/quanta-bi' },
        { label: 'Quanta LMS', href: '/products/quanta-lms' },
      ],
    },
    {
      title: 'Solutions',
      href: '/solutions',
      submenu: [
        { label: 'Retail', href: '/solutions/retail' },
        { label: 'Helthcare', href: '/solutions/helthcare' },
        { label: 'Manufacturing', href: '/solutions/manufacturing' },
      ],
    },
    {
      title: 'Pricing',
      href: '/pricing',
    },
    {
      title: 'Resources',
      href: '/resources',
      submenu: [
        { label: 'Blogs', href: '/resources/blogs' },
        { label: 'Case Studies', href: '/resources/case-studies' },
        { label: 'Guides', href: '/resources/guides' },
      ],
    },
    {
      title: 'Company',
      submenu: [
        { label: 'About Us', href: '/company/about-us' },
        { label: 'Team', href: '/company/team' },
        { label: 'Careers', href: '/company/careers' },
      ],
    },
    {
      title: 'Contact',
      href: '/#contact',
    },
  ];

  return (
    <header className="flex justify-between items-center p-4 border-b">
      {/* Logo */}
      <Link href="/">
        <Image src="/logo.png" alt="Logo" width={120} height={40} />
      </Link>

      {/* Menü */}
      <nav className="flex gap-6 items-center">
        {menuItems.map((item, idx) => (
          <div key={idx} className="relative inline-block text-left">
            {item.submenu ? (
              <>
                <button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50">
                  {item.title}
                  <i>icon</i>
                  {/* <ChevronDown className="w-4 h-4" /> */}
                </button>
                <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in">
                  {item.submenu.map((subItem, i) => (
                    <Link
                      key={i}
                      href={subItem.href}
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              </>
            ) : (
              <Link
                href={item.href!}
                scroll={item.href?.startsWith('/#') ? false : true}
                className="hover:text-blue-600 transition-colors duration-200"
              >
                {item.title}
              </Link>
            )}
          </div>
        ))}
      </nav>

      {/* Sağ düymələr */}
      <div className="flex items-center gap-4">
        <a
          href="https://wa.me/994xxxxxxxx"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-600 text-2xl"
        >
          {/* <FaWhatsapp /> */}
          <i>whats</i>
        </a>
        <button
          onClick={toggleLanguage}
          className="px-2 py-1 border rounded text-sm"
        >
          {lang.toUpperCase()}
        </button>
      </div>
    </header>
  );
};

export default Header;
