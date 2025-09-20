'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './HeroSlider.css';

import { Pagination, Autoplay } from 'swiper/modules';

interface HeroSlide {
  id: string;
  title: string;
  description: string;
  image: string;
  buttonText: string;
  buttonLink: string;
  subtext?: string;
  order: number;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}

const HeroSlider = () => {
  const [slides, setSlides] = useState<HeroSlide[]>([]);
  const [loading, setLoading] = useState(true);

  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '" name="' + index + '"></span>';
    },
  };

  const fetchSlides = async () => {
    try {
      const response = await fetch('/api/hero-slides');
      const data = await response.json();

      if (data.success) {
        const activeSlides = data.data
          .filter((slide: HeroSlide) => slide.active)
          .sort((a: HeroSlide, b: HeroSlide) => a.order - b.order);
        setSlides(activeSlides);
      }
    } catch (error) {
      console.error('Error fetching slides:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSlides();
  }, []);

  if (loading) {
    return (
      <div className="swiper-w container">
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#098FD7]"></div>
        </div>
      </div>
    );
  }

  if (slides.length === 0) {
    return (
      <div className="swiper-w container">
        <div className="slide-box">
          <div className="flex flex-col-reverse lg:flex-row lg:flex items-center gap-5">
            <div className="slide-text lg:w-6/12 md:w-full">
              <div className="text-[1.5rem] xl:text-[2.8rem] lg:text-[2.75rem] md:text-[2.25rem] leading-[130%] font-semibold mb-[1.875rem] lg:pr-10 md:p-0">
                Welcome to Our Website
              </div>
              <p className="mb-[1rem] sm:mb-[1.875rem]">
                No slides configured yet. Please check back soon.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="swiper-w container">
      <Swiper
        pagination={pagination}
        modules={[Pagination, Autoplay]}
        // autoplay={{
        //   delay: 10000,
        //   disableOnInteraction: false,
        // }}
        loop={slides.length > 1}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="slide-box">
              <div className="flex flex-col-reverse lg:flex-row lg:flex items-center gap-5">
                <div className="slide-text lg:w-6/12 md:w-full">
                  <div className="text-[1.5rem] xl:text-[2.8rem] lg:text-[2.75rem] md:text-[2.25rem] leading-[130%] font-semibold mb-[1.875rem] lg:pr-10 md:p-0">
                    {slide.title}
                  </div>
                  <p className="mb-[1rem] sm:mb-[1.875rem]">
                    {slide.description}
                  </p>
                  <a href={slide.buttonLink}>
                    <button
                      type="button"
                      className="inline-flex disabled:opacity-80 items-center justify-center text-sm text-white rounded-md py-[0.4rem] px-[0.8rem] lg:py-[0.5rem] lg:px-[1.2rem] xl:py-[0.7rem] xl:px-[1.75rem] focus:outline-none whitespace-nowrap transition-all duration-400 transform w-auto mx-auto mb-[0.25rem] font-semibold bg-gradient-to-r from-[#098FD7] via-[#40d4f7] to-[#027bbd] bg-[length:300%_100%] hover:bg-[position:100%_0] shadow-[0_4px_15px_0_rgba(9,143,215,0.75)]"
                    >
                      {slide.buttonText}
                    </button>
                  </a>
                  {slide.subtext && (
                    <p className="text-[0.575rem] sm:text-[0.9rem] text-gray-600 font-semibold italic mb-[1rem] sm:mb-0">
                      {slide.subtext}
                    </p>
                  )}
                </div>
                <div className="slide-img lg:w-6/12 md:w-full">
                  <div className="relative w-full" style={{ width: '638px', height: '421px', maxWidth: '100%' }}>
                    <Image
                      alt={slide.title}
                      fill
                      src={slide.image}
                      className="object-cover rounded"
                      sizes="(max-width: 768px) 100vw, 638px"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
