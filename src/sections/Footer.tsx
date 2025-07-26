import React from 'react';
import './Footer.css';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="text-white w-full">
      <section className="bg-[rgb(6,16,51)] bg-opacity-80">
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
          <div className="w-full flex flex-col lg:flex-row justify-between gap-[3rem] lg:gap-[4rem] pb-8">
            <div>
              <div className="w-full flex flex-wrap md:flex-nowrap lg:flex-col gap-8 xl:gap-10">
                <div className="w-full flex flex-col gap-[0.5rem] xl:gap-[0.75rem]">
                  <div className=" flex gap-4">
                    {/* <img
                      alt="USA Flag"
                      loading="lazy"
                      width="37"
                      height="25"
                      decoding="async"
                      data-nimg="1"
                      src="/_next/static/media/usa-flag.b13795ab.svg"
                    /> */}
                    <span className="text-lg font-medium">
                      Azerbaijan Office
                    </span>
                  </div>
                  <div className="text-sm font-normal">
                    Baku, <br /> AZ 00000
                  </div>
                  <div className="text-lg font-normal">
                    <a href="mailto:sales@atliq.com">sales@atliq.com</a> |{' '}
                    <a href="tel:+19734356491">+1 973 435 6491</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-wrap sm:flex-nowrap gap-[3rem] justify-between xl:pl-[8rem]">
              <div>
                <div className="text-2xl font-semibold mb-6">Company</div>
                <div className="text-sm text-customGray-300 font-normal mb-4 last:mb-0">
                  <Link href="/about-us">About Us</Link>
                </div>
                <div className="text-sm text-customGray-300 font-normal mb-4 last:mb-0">
                  <Link href="/case-studies">Case Studies</Link>
                </div>
                <div className="text-sm text-customGray-300 font-normal mb-4 last:mb-0">
                  <Link href="/resources">Resources</Link>
                </div>
                <div className="text-sm text-customGray-300 font-normal mb-4 last:mb-0">
                  <Link href="/career">Careers</Link>
                </div>
                <div className="text-sm text-customGray-300 font-normal mb-4 last:mb-0">
                  <Link href="/contact">Contact us</Link>
                </div>
              </div>
              <div>
                <div className="text-2xl font-semibold mb-6">Products</div>
                <div className="text-sm text-customGray-300 font-normal mb-4 last:mb-0">
                  <Link href="/products/quanta-bi">Quanta BI</Link>
                </div>
                <div className="text-sm text-customGray-300 font-normal mb-4 last:mb-0">
                  <Link href="/products/quanta-erp">Quanta ERP</Link>
                </div>
                <div className="text-sm text-customGray-300 font-normal mb-4 last:mb-0">
                  <Link href="/products/quanta-lms">Quanta LMS</Link>
                </div>
                <div className="text-sm text-customGray-300 font-normal mb-4 last:mb-0">
                  <Link href="/solutions/helthcare">Helthcare</Link>
                </div>
                <div className="text-sm text-customGray-300 font-normal mb-4 last:mb-0">
                  <Link href="/solutions/manufacturing">Manufacturing</Link>
                </div>
                <div className="text-sm text-customGray-300 font-normal mb-4 last:mb-0">
                  <Link href="/solutions/retail">Retail</Link>
                </div>
              </div>
              <div className="w-full sm:w-auto">
                <div className="text-2xl font-semibold mb-6">Technologies</div>
                <div className="flex flex-row gap-[3rem] xl:gap-[5rem]">
                  <div>
                    <div className="text-sm text-customGray-300 font-normal mb-4 last:mb-0">
                      TensorFlow
                    </div>
                    <div className="text-sm text-customGray-300 font-normal mb-4 last:mb-0">
                      LangChain
                    </div>
                    <div className="text-sm text-customGray-300 font-normal mb-4 last:mb-0">
                      spaCy
                    </div>
                    <div className="text-sm text-customGray-300 font-normal mb-4 last:mb-0">
                      sklearn
                    </div>
                    <div className="text-sm text-customGray-300 font-normal mb-4 last:mb-0">
                      PyTorch
                    </div>
                  </div>
                  <div className="sm:pl-[2rem] pl-0">
                    <div className="text-sm text-customGray-300 font-normal mb-4 last:mb-0">
                      React Native
                    </div>
                    <div className="text-sm text-customGray-300 font-normal mb-4 last:mb-0">
                      React.js
                    </div>
                    <div className="text-sm text-customGray-300 font-normal mb-4 last:mb-0">
                      Node.js
                    </div>
                    <div className="text-sm text-customGray-300 font-normal mb-4 last:mb-0">
                      Laravel
                    </div>
                    <div className="text-sm text-customGray-300 font-normal mb-4 last:mb-0">
                      Vue.js
                    </div>
                  </div>
                  <div className="sm:pl-[2rem] pl-0">
                    <div className="text-sm text-customGray-300 font-normal mb-4 last:mb-0">
                      Python
                    </div>
                    <div className="text-sm text-customGray-300 font-normal mb-4 last:mb-0">
                      Flutter
                    </div>
                    <div className="text-sm text-customGray-300 font-normal mb-4 last:mb-0">
                      Next.js
                    </div>
                    <div className="text-sm text-customGray-300 font-normal mb-4 last:mb-0">
                      Kotlin
                    </div>
                    <div className="text-sm text-customGray-300 font-normal mb-4 last:mb-0">
                      .NET Core
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
