'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './HeroSlider.css';

import { Pagination, Autoplay } from 'swiper/modules';

const HeroSlider = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '" name="' + index + '"></span>';
    },
  };
  return (
    <div className="swiper-w container">
      <Swiper
        pagination={pagination}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        <SwiperSlide>
          <div className="slide-box">
            <div className="flex flex-col-reverse lg:flex-row lg:flex items-center gap-5">
              <div className="slide-text lg:w-6/12 md:w-full">
                <div className="text-[1.5rem] xl:text-[2.8rem] lg:text-[2.75rem] md:text-[2.25rem] leading-[130%] font-semibold mb-[1.875rem] lg:pr-10 md:p-0">
                  Our AI consulting helps you save time and money.
                </div>
                <p className="mb-[1rem] sm:mb-[1.875rem] ">
                  AI isn’t a one-size-fits-all fix. Get our free AI consultation
                  to understand the need for AI to solve your problem.
                </p>
                <a href="#get-free-consult">
                  <button
                    type="button"
                    className="inline-flex w-full disabled:opacity-80 hover:opacity-95 items-center justify-center text-sm text-white bg-primary rounded-md py-[0.4rem] px-[0.8rem] lg:py-[0.5rem] lg:px-[1.2rem] xl:py-[0.7rem] xl:px-[1.75rem] focus:outline-none whitespace-nowrap transition-colors duration-300 transform !w-auto mx-auto mb-[0.25rem] font-semibold bg-[#602BE9] text-[#FFF] hover:bg-black"
                  >
                    Get Free Consultation
                  </button>
                </a>
                <p className="text-[0.575rem] sm:text-[0.9rem] text-gray-600 font-semibold italic mb-[1rem] sm:mb-0">
                  No tricks, just friendly advice.
                </p>
              </div>
              <div className="slide-img lg:w-6/12 md:w-full">
                <img
                  alt="cover image"
                  loading="lazy"
                  width="1540"
                  height="1016"
                  decoding="async"
                  data-nimg="1"
                  src="/images/slider/home_banner3.jpg"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-box">
            <div className="flex flex-col-reverse lg:flex-row lg:flex items-center gap-5">
              <div className="slide-text lg:w-6/12 md:w-full">
                <div className="text-[1.5rem] xl:text-[2.8rem] lg:text-[2.75rem] md:text-[2.25rem] leading-[130%] font-semibold mb-[1.875rem] lg:pr-10 md:p-0">
                  Breathe Easy - We Helped{' '}
                  <span className="text-[#602BE9]">FreshAir</span> Cut False
                  Alarms by{' '}
                  <span className="text-[#602BE9]">
                    <br /> 80%
                  </span>
                </div>
                <p className="mb-[1rem] sm:mb-[1.875rem] ">
                  <span className="text-[#602BE9]">AI-powered</span> anomaly
                  detection turned noisy
                  <span className="text-[#602BE9]">IoT data</span> into clear,
                  actionable insight — unlocking faster response times, smarter
                  scaling, and real peace of mind.
                </p>
                <a href="/case-study/freshair">
                  <button
                    type="button"
                    className="inline-flex w-full disabled:opacity-80 hover:opacity-95 items-center justify-center text-sm text-white bg-primary rounded-md py-[0.4rem] px-[0.8rem] lg:py-[0.5rem] lg:px-[1.2rem] xl:py-[0.7rem] xl:px-[1.75rem] focus:outline-none whitespace-nowrap transition-colors duration-300 transform !w-auto mx-auto mb-[0.25rem] font-semibold bg-[#602BE9] text-[#FFF] hover:bg-black"
                  >
                    Read More
                  </button>
                </a>
              </div>
              <div className="slide-img lg:w-6/12 md:w-full">
                <img
                  alt="cover image"
                  loading="lazy"
                  width="1540"
                  height="1016"
                  decoding="async"
                  data-nimg="1"
                  src="/images/slider/home_banner1.jpg"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-box">
            <div className="flex flex-col-reverse lg:flex-row lg:flex items-center gap-5">
              <div className="slide-text lg:w-6/12 md:w-full">
                <div className="text-[1.5rem] xl:text-[2.8rem] lg:text-[2.75rem] md:text-[2.25rem] leading-[130%] font-semibold mb-[1.875rem] lg:pr-10 md:p-0">
                  <span className="text-[#602BE9]">1M+</span> YouTube
                  Subscribers
                  <span className="text-[#602BE9]">200+</span> Businesses
                  Consulted
                  <span className="text-[#602BE9]">15+</span> Years in Data
                  &amp; Product
                </div>
                <p className="mb-[1rem] sm:mb-[1.875rem] ">
                  Work with a team led by Dhaval Patel, AtliQ’s co-founder and
                  data industry veteran with 15+ years of transformative
                  experience.
                </p>
                <a href="#get-free-consult">
                  <button
                    type="button"
                    className="inline-flex w-full disabled:opacity-80 hover:opacity-95 items-center justify-center text-sm text-white bg-primary rounded-md py-[0.4rem] px-[0.8rem] lg:py-[0.5rem] lg:px-[1.2rem] xl:py-[0.7rem] xl:px-[1.75rem] focus:outline-none whitespace-nowrap transition-colors duration-300 transform !w-auto mx-auto mb-[0.25rem] font-semibold bg-[#602BE9] text-[#FFF] hover:bg-black"
                  >
                    Get Free Consultation
                  </button>
                </a>
                <p className="text-[0.575rem] sm:text-[0.9rem] text-gray-600 font-semibold italic mb-[1rem] sm:mb-0">
                  No tricks, just friendly advice.
                </p>
              </div>
              <div className="slide-img lg:w-6/12 md:w-full">
                <img
                  alt="cover image"
                  loading="lazy"
                  width="770"
                  height="508"
                  decoding="async"
                  data-nimg="1"
                  src="/images/slider/home_banner2.png"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSlider;
