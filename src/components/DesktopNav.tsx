import React from 'react';
import Dropdown from './Dropdown';
import Link from 'next/link';

interface DesktopNavrops {
  navItems: (
    | {
        label: string;
        href: string;
        dropdown?: undefined;
      }
    | {
        label: string;
        href: string;
        dropdown: {
          label: string;
          href: string;
        }[];
      }
  )[];
}

const DesktopNav: React.FC<DesktopNavrops> = ({ navItems }) => {
  return (
    <nav className="hidden lg:flex space-x-8">
      {navItems.map((item) => (
        <div key={item.label} className="relative">
          {item.dropdown ? (
            <Dropdown label={item.label} items={item.dropdown} />
          ) : (
            <Link
              href={item.href}
              className=" hover:cursor-pointer py-2 font-medium transition-colors"
            >
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
};

export default DesktopNav;
