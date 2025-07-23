import React from 'react';

interface DropProps {
  label: string;
  items: { label: string; href: string }[];
}

const Dropdown: React.FC<DropProps> = ({ label, items }) => {
  return (
    <div className="dropdown inline-block relative">
      <button className="rounded inline-flex items-center hover:cursor-pointer">
        <span className="mr-1">{label}</span>
        <svg
          aria-hidden="true"
          role="img"
          className="iconify iconify--icon-park-solid"
          width="1em"
          height="1em"
          viewBox="0 0 48 48"
        >
          <path
            fill="currentColor"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="4"
            d="M36 19L24 31L12 19z"
          ></path>
        </svg>
      </button>
      <ul className="dropdown-menu absolute hidden text-gray-700 pt-1 w-64 bg-gray-100 rounded-lg">
        {items?.map((item) => (
          <li
            className="border-b-1 border-gray-200 last:border-none"
            key={item.label}
          >
            <a
              className="rounded-t hover:bg-gray-200 hover:cursor-pointer py-2 px-4 block whitespace-no-wrap"
              href={item.href}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
