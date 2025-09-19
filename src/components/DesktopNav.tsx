'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
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
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="hidden lg:flex space-x-8">
      {navItems.map((item, index) => (
        <motion.div
          key={item.label}
          className="relative"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          {item.dropdown ? (
            <Dropdown label={item.label} items={item.dropdown} pathname={pathname} />
          ) : (
            <motion.div
              className="relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={item.href}
                className={`relative hover:cursor-pointer py-2 font-medium transition-colors duration-300 block ${
                  isActive(item.href)
                    ? 'text-[#098FD7] font-semibold'
                    : 'text-gray-700 hover:text-[#098FD7]'
                }`}
              >
                {item.label}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#098FD7] to-[#40d4f7] origin-left"
                  initial={{ scaleX: isActive(item.href) ? 1 : 0 }}
                  whileHover={{ scaleX: 1 }}
                  animate={{ scaleX: isActive(item.href) ? 1 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              </Link>
            </motion.div>
          )}
        </motion.div>
      ))}
    </nav>
  );
};

export default DesktopNav;
