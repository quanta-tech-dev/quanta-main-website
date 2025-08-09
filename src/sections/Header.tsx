'use client';

import { useState } from 'react';
import DesktopNav from '@/components/DesktopNav';
import HeaderLogo from '@/components/HeaderLogo';
import HeaderButtons from '../components/HeaderButtons';
import MobileMenuButton from '@/components/MobileMenuButton';
import MobileMenu from '@/components/MobileMenu';
import { navItems } from '@/app/data/navItems';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [lang, setLang] = useState('en');

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-20 pt-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <HeaderLogo />

          {/* Desktop Navigation */}
          <DesktopNav navItems={navItems} />

          {/* Header buttons */}
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
