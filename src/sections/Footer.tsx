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
      <section className="text-black">
        <div className="custom-layout">
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-between my-5 ">
            <div className="flex sm:flex-row flex-col justify-center items-center py-4 gap-3  sm:gap-12">
              <div className="text-base text-brandDark">
                Copyright © 2025{' '}
                <span className="text-[#602BE9]">Quanta Tech.</span>
              </div>
              <div className="text-base text-brandDark">
                <a target="_blank" href="#">
                  <span>Terms &amp; Conditions</span>
                </a>
              </div>
              <div className="text-base text-brandDark">
                <a target="_blank" href="#">
                  <span>Privacy Policy</span>
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4 sm:gap-8 mx-auto sm:mx-0">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-2 items-center text-xs sm:text-sm text-customGray-500"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  className="w-7 h-7 text-customGray-800 iconify iconify--mdi"
                  fontSize=""
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
                  ></path>
                </svg>
                LinkedIn{' '}
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-2 items-center text-xs sm:text-sm text-customGray-500"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  className="w-7 h-7 text-customGray-800 iconify iconify--mdi"
                  fontSize=""
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
                  ></path>
                </svg>
                Instagram{' '}
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-2 items-center text-xs sm:text-sm text-customGray-500"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  className="w-7 h-7 text-customGray-800 iconify iconify--mdi"
                  fontSize=""
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 2.04c-5.5 0-10 4.49-10 10.02c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89c1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02"
                  ></path>
                </svg>
                Facebook{' '}
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-2 items-center text-xs sm:text-sm text-customGray-500"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  className="w-7 h-7 text-customGray-800 iconify iconify--ri"
                  fontSize=""
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M10.488 14.651L15.25 21h7l-7.858-10.478L20.93 3h-2.65l-5.117 5.886L8.75 3h-7l7.51 10.015L2.32 21h2.65zM16.25 19L5.75 5h2l10.5 14z"
                  ></path>
                </svg>
                Twitter{' '}
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-2 items-center text-xs sm:text-sm text-customGray-500"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  className="w-7 h-7 text-customGray-800 iconify iconify--mdi"
                  fontSize=""
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73"
                  ></path>
                </svg>
                You tube{' '}
              </a>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
