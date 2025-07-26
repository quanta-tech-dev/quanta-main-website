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
          <div className="w-full flex flex-col lg:flex-row justify-between gap-[3rem] lg:gap-[4rem] pb-8">
            <div>
              <div className="w-full flex flex-wrap md:flex-nowrap lg:flex-col gap-8 xl:gap-10">
                <div className="w-full flex flex-col gap-[0.5rem] xl:gap-[0.75rem]">
                  <div className=" flex gap-4">
                    <img
                      alt="USA Flag"
                      loading="lazy"
                      width="37"
                      height="25"
                      decoding="async"
                      data-nimg="1"
                      src="/_next/static/media/usa-flag.b13795ab.svg"
                    />
                    <span className="text-lg font-medium">USA Office</span>
                  </div>
                  <div className="text-sm font-normal">
                    27 Narrows Way, Monroe Township, <br /> NJ 08831
                  </div>
                  <div className="text-lg font-normal">
                    <a href="mailto:sales@atliq.com">sales@atliq.com</a>
                    <a href="tel:+19734356491">+1 973 435 6491</a>
                  </div>
                </div>
                <div className="w-full flex flex-col gap-[0.5rem] xl:gap-[0.75rem]">
                  <div className=" flex gap-4">
                    <img
                      alt="India Flag"
                      loading="lazy"
                      width="37"
                      height="25"
                      decoding="async"
                      data-nimg="1"
                      src="/_next/static/media/india-flag.a5e99dee.svg"
                    />
                    <span className="text-lg font-medium">India Office</span>
                  </div>
                  <div className="text-sm font-normal">
                    301/6/7, Ocean Complex, Nr Genda Circle, <br /> Vadiwadi,
                    Vadodara – 390023
                  </div>
                  <div>
                    <div className="text-lg font-normal">
                      <a href="mailto:info@atliq.com">info@atliq.com</a>
                      <a href="tel:+919979738578">+91 997 973 8578</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-wrap sm:flex-nowrap gap-[3rem] justify-between xl:pl-[8rem]">
              <div>
                <div className="text-2xl font-semibold mb-6">Company</div>
                <div className="text-sm text-customGray-300 font-normal mb-4 last:mb-0">
                  <a href="/about-us">About</a>
                </div>
                <div className="text-sm text-customGray-300 font-normal mb-4 last:mb-0">
                  <a href="/case-studies">Case Studies</a>
                </div>
                <div className="text-sm text-customGray-300 font-normal mb-4 last:mb-0">
                  <a href="/resources">Resources</a>
                </div>
                <div className="text-sm text-customGray-300 font-normal mb-4 last:mb-0">
                  <a href="/career">Careers</a>
                </div>
                <div className="text-sm text-customGray-300 font-normal mb-4 last:mb-0">
                  <a href="/contact-us">Contact us</a>
                </div>
              </div>
              <div>
                <div className="text-2xl font-semibold mb-6">Services</div>
                <div className="text-sm text-customGray-300 font-normal mb-4 last:mb-0">
                  <a href="/service/ai-service">AI Development</a>
                </div>
                <div className="text-sm text-customGray-300 font-normal mb-4 last:mb-0">
                  <a href="/service/data-analytics-service">Data Analytics</a>
                </div>
                <div className="text-sm text-customGray-300 font-normal mb-4 last:mb-0">
                  <a href="/service/mobile-app-development-service">
                    Mobile App Development
                  </a>
                </div>
                <div className="text-sm text-customGray-300 font-normal mb-4 last:mb-0">
                  <a href="/service/software-development">
                    Software Development
                  </a>
                </div>
                <div className="text-sm text-customGray-300 font-normal mb-4 last:mb-0">
                  <a href="/service/digital-marketing">Digital Marketing</a>
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
