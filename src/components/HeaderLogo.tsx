import React from 'react';

const HeaderLogo = () => {
  return (
    <div className="flex-shrink-0 flex items-center">
      <a href="/" className="flex items-center">
        <img className="h-16 w-auto" src="/logo.svg" alt="Logo" />
        {/* <span className="ml-2 text-xl font-bold text-gray-900">Brand</span> */}
      </a>
    </div>
  );
};

export default HeaderLogo;
