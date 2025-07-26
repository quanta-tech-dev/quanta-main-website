import React from 'react';
import './Footer.css';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="text-white w-full">
      <section className="bg-[rgb(6,16,51)] bg-opacity-80 h-96">
        <div className="custom-layout">
          <div className="w-full flex justify-between items-center py-4 sm:py-8">
            <div className="relative w-[120px] h-[40px] sm:w-[160px] sm:h-[50px]">
              <Image
                src="/logo.svg"
                alt="Quanta logo"
                fill
                className="object-contain"
                priority={false}
              />
            </div>
            <div className="w-fit flex flex-col sm:flex-row gap-2">
              <span className="text-customGray-400 text-sm sm:text-md">
                Our
                <br className="hidden sm:block" /> Ventures
              </span>
              <a
                className="w-[80px] sm:w-[120px] h-auto relative"
                target="_blank"
                href="#"
              >
                <Image
                  src="/logo.svg"
                  alt="quanta logo"
                  fill
                  className="object-contain"
                  priority={false}
                  decoding="async"
                />
              </a>
            </div>
          </div>
          <hr className="w-full pb-8 border-custom-gray" />
        </div>
      </section>
    </footer>
  );
};

export default Footer;
