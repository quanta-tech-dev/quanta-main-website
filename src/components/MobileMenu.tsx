import React from 'react';
import HeaderButtons from './HeaderButtons';
import LangButton from './LangButton/LangButton';

interface MenuProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
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
  activeDropdown: number | null;
  setActiveDropdown: React.Dispatch<React.SetStateAction<number | null>>;
  lang: string;
  setLang: (lang: string) => void;
  idPrefix?: string;
}

const MobileMenu: React.FC<MenuProps> = ({
  mobileMenuOpen,
  navItems,
  activeDropdown,
  setActiveDropdown,
  lang,
  setLang,
  idPrefix,
}) => {
  return (
    <div
      className={`
    fixed inset-0 z-40 bg-white shadow-lg transform transition-transform duration-300 ease-in-out md:hidden
    ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} mt-16
  `}
    >
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
        {navItems.map((item, index) => (
          <div key={item.label}>
            {item.dropdown ? (
              <div className="w-full">
                <button
                  onClick={() =>
                    setActiveDropdown(activeDropdown === index ? null : index)
                  }
                  className="flex items-center justify-between w-full px-3 py-2 border-b-1 border-gray-200 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50"
                >
                  {item.label}
                  <svg
                    aria-hidden="true"
                    role="img"
                    className={`ml-1 h-5 w-5 transition-transform duration-200 ${
                      activeDropdown === index ? 'transform rotate-180' : ''
                    }`}
                    width="1em"
                    height="1em"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-linejoin="round"
                      stroke-width="4"
                      d="M36 19L24 31L12 19z"
                    ></path>
                  </svg>
                </button>
                {activeDropdown === index && (
                  <div className="pl-4 pr-2 py-1 space-y-1 rounded-md mt-1 mb-2">
                    {item.dropdown.map((dropdownItem) => (
                      <a
                        key={dropdownItem.label}
                        href={dropdownItem.href}
                        className="block border-b-1 border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-100"
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
                className="block px-3 py-2 border-b-1 border-gray-200 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50"
              >
                {item.label}
              </a>
            )}
          </div>
        ))}
        <div className="px-3 py-2 flex justify-center gap-4 mt-8">
          <a
            href="https://wa.me/994706371716"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/whatsapp.png"
              alt="WhatsApp"
              className="w-8 h-8 cursor-pointer transition-transform duration-300 hover:scale-110"
            />
          </a>
          <LangButton lang={lang} setLang={setLang} idPrefix={idPrefix} />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
