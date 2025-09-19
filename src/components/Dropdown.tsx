'use client';
import Link from 'next/link';
import React, {useState} from 'react';
import {AnimatePresence, motion} from 'framer-motion';

interface DropProps {
  label: string;
  items: { label: string; href: string }[];
  pathname: string;
}

const Dropdown: React.FC<DropProps> = ({ label, items, pathname }) => {
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  const isDropdownActive = items.some(item => isActive(item.href));

  return (
    <div
      className="dropdown inline-block relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <motion.button
        className={`rounded inline-flex items-center hover:cursor-pointer py-2 font-medium group ${
          isDropdownActive
            ? 'text-[#098FD7] font-semibold'
            : 'text-gray-700'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className={`mr-2 transition-colors duration-300 ${
          isDropdownActive
            ? 'text-[#098FD7]'
            : 'group-hover:text-[#098FD7]'
        }`}>
          {label}
        </span>
        <motion.svg
          aria-hidden="true"
          role="img"
          className={`w-4 h-4 transition-colors duration-300 ${
            isDropdownActive
              ? 'text-[#098FD7]'
              : 'group-hover:text-[#098FD7]'
          }`}
          viewBox="0 0 48 48"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <path
            fill="currentColor"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="4"
            d="M36 19L24 31L12 19z"
          />
        </motion.svg>
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#098FD7] to-[#40d4f7] origin-left"
          initial={{ scaleX: isDropdownActive ? 1 : 0 }}
          animate={{ scaleX: isOpen || isDropdownActive ? 1 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className="dropdown-menu absolute z-50 flex flex-col text-gray-700 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            {items?.map((item, index) => (
              <motion.li
                key={item.label}
                className="border-b border-gray-100 last:border-none"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
              >
                <Link href={item.href}>
                  <motion.div
                    className={`py-3 px-4 block whitespace-nowrap relative group cursor-pointer ${
                      isActive(item.href) ? 'bg-[#098FD7]/10' : ''
                    }`}
                    whileHover={{ x: 5, backgroundColor: "rgba(9, 143, 215, 0.05)" }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className={`transition-colors duration-300 font-medium ${
                      isActive(item.href)
                        ? 'text-[#098FD7] font-semibold'
                        : 'group-hover:text-[#098FD7]'
                    }`}>
                      {item.label}
                    </span>
                    <motion.div
                      className={`absolute right-3 top-1/2 transform -translate-y-1/2 transition-opacity duration-200 ${
                        isActive(item.href) ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                      }`}
                      initial={{ x: isActive(item.href) ? 0 : -10 }}
                      whileHover={{ x: 0 }}
                      animate={{ x: isActive(item.href) ? 0 : -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <svg
                        className="w-4 h-4 text-[#098FD7]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </motion.div>
                  </motion.div>
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;
