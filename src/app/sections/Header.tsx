'use client';

import { useState } from 'react';
import DesktopNav from '@/components/DesktopNav';
import HeaderLogo from '@/components/HeaderLogo';
import HeaderButtons from '../../components/HeaderButtons';
import MobileMenuButton from '@/components/MobileMenuButton';
import MobileMenu from '@/components/MobileMenu';

export default function Header2({
  navItems = [
    { label: 'Home', href: '/' },
    {
      label: 'Products',
      href: '/products',
      dropdown: [
        { label: 'Quanta ERP', href: '/products/quanta-erp' },
        { label: 'Quanta BI', href: '/products/quanta-bi' },
        { label: 'Quanta LMS', href: '/products/quanta-lms' },
      ],
    },
    {
      label: 'Solutions',
      href: '/solutions',
      dropdown: [
        { label: 'Retail', href: '/solutions/retail' },
        { label: 'Helthcare', href: '/solutions/helthcare' },
        { label: 'Manufacturing', href: '/solutions/manufacturing' },
      ],
    },
    { label: 'Pricing', href: '/pricing' },
    {
      label: 'Resources',
      href: '/resources',
      dropdown: [
        { label: 'Blog', href: '/resources/blog' },
        { label: 'Case studies', href: '/resources/case-studies' },
        { label: 'Guides', href: '/resources/guides' },
      ],
    },
    {
      label: 'Company',
      href: '/company',
      dropdown: [
        { label: 'Guides', href: '/resources/guides' },
        { label: 'Careers', href: '/resources/careers' },
        { label: 'Team', href: '/resources/team' },
      ],
    },
    { label: 'Contact', href: '/contact' },
  ],
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [lang, setLang] = useState('en');

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <HeaderLogo />

          {/* Desktop Navigation */}
          <DesktopNav navItems={navItems} />

          <HeaderButtons lang={lang} setLang={setLang} />

          {/* Mobile menu button */}
          <MobileMenuButton
            mobileMenuOpen={mobileMenuOpen}
            setMobileMenuOpen={setMobileMenuOpen}
          />
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <MobileMenu
        activeDropdown={activeDropdown}
        mobileMenuOpen={mobileMenuOpen}
        navItems={navItems}
        setActiveDropdown={setActiveDropdown}
        setMobileMenuOpen={setMobileMenuOpen}
        lang={lang}
        setLang={setLang}
        idPrefix="mobile-"
      />
    </header>
  );
}
