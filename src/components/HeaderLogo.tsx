import Link from 'next/link';
import React from 'react';
import Image from "next/image";

const HeaderLogo = () => {
  return (
    <div className="flex-shrink-0 flex items-center">
      <Link href="/" className="flex items-center">
        <Image className="h-16 w-auto" src="/logo.svg" alt="Logo" width={256} height={256} />
        {/* <span className="ml-2 text-xl font-bold text-gray-900">Brand</span> */}
      </Link>
    </div>
  );
};

export default HeaderLogo;
