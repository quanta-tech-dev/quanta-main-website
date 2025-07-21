'use client';

import { useState, useRef, useEffect, ReactNode, MouseEvent } from 'react';

type DropdownItem = {
  label: string;
  href: string;
  onClick?: () => void;
};

type DropdownProps = {
  trigger: ReactNode;
  items: DropdownItem[];
  align?: 'left' | 'right' | 'center';
  width?: string;
  className?: string;
};

export default function Dropdown({
  trigger,
  items,
  align = 'left',
  width = 'w-56',
  className = '',
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent | any) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle escape key press
  useEffect(() => {
    function handleEscapeKey(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen]);

  const alignmentClasses: Record<string, string> = {
    left: 'left-0',
    right: 'right-0',
    center: 'left-1/2 transform -translate-x-1/2',
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <div onClick={() => setIsOpen(!isOpen)}>{trigger}</div>

      {isOpen && (
        <div
          className={`absolute z-10 mt-2 ${width} rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none ${alignmentClasses[align]}`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="dropdown-button"
        >
          <div className="py-1">
            {items.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-purple-600"
                role="menuitem"
                onClick={() => {
                  if (item.onClick) item.onClick();
                  setIsOpen(false);
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
