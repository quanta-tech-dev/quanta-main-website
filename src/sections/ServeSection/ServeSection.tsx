'use client';
import "./ServeSection.css"
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import "./ServeSection.css";

import {Navigation, Autoplay} from 'swiper/modules';
import Link from "next/link";

export const ServeSection = () => {
    return (
        <div className="w-full bg-brandDark py-[2rem] sm:py-[4rem]">
            <div className="custom-layout mb-[2rem]"><p className="text-sm text-white">The Latest in Tech</p>
                <div className="custom-secondary-title text-white mb-[1.5rem]">Inspiration Through Intelligent Writing
                </div>
                {/*<p className="text-sm text-white">Steal away our ideas even if we don’t work together.</p>*/}
            </div>
            <div className="w-full">
                <div className="flex  items-center  sm:items-center  w-full justify-center">
                    <div
                        className="flex flex-row gap-4 sm:gap-8 items-center justify-center rounded-lg bg-[#040B24] p-4 sm:min-w-[480px]">
                        <div
                            className="swiper-button image-swiper-button-prev_REVIEWS bg-[#030715] dark:bg-[#030715] p-2 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 aria-hidden="true" role="img" className="text-white iconify iconify--tabler"
                                 width="3rem" height="3rem" viewBox="0 0 24 24">
                                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                      strokeWidth="2" d="M5 12h14M5 12l6 6m-6-6l6-6"></path>
                            </svg>
                        </div>
                        <div className="text-center text-white">
                            <div className="text-[1.4rem] xl:text-[1.6rem] font-semibold">Latest Articles</div>
                            <Link href={"/resources/blogs"} className="text-sm sm:text-base font-normal relative inline-block text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                            >Read all articles</Link></div>
                        <div
                            className="swiper-button image-swiper-button-next_REVIEWS bg-[#030715] dark:bg-[#030715] p-2 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 aria-hidden="true" role="img" className="text-white iconify iconify--tabler"
                                 width="3rem" height="3rem" viewBox="0 0 24 24">
                                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                      strokeWidth="2" d="M5 12h14m-6 6l6-6m-6-6l6 6"></path>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <div className="w-full h-[8px] bg-[#040B24] dark:bg-darkMode-800"></div>
                </div>
                <div className="relative REVIEWS container custom-layout flex items-start justify-center">
                    <div className="w-full h-full">
                        <Swiper
                            modules={[Navigation, Autoplay]}
                            // autoplay={{
                            //     delay: 3000,
                            //     disableOnInteraction: false,
                            // }}
                            navigation={{
                                nextEl: ".image-swiper-button-next_REVIEWS",
                                prevEl: ".image-swiper-button-prev_REVIEWS",
                            }}
                            slidesPerView={3}
                            loop={true}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                },
                                768: {
                                    slidesPerView: 2,
                                },
                                1024: {
                                    slidesPerView: 3,
                                },
                            }}
                        >
                            <SwiperSlide>
                                <div className="flex flex-col relative sm:items-start">
                                    <div
                                        className="h-full w-6 absolute top-0 left-[50%] flex justify-start">
                                        <div className="h-full w-[8px] bg-[#040B24] pointer-events-none"></div>
                                    </div>
                                    <div
                                        className="flex-grow relative md:px-4 md:py-4 px-3 py-4 mt-8 mx-5 flex sm:items-start items-start flex-col sm:flex-row bg-[#040B24] text-white rounded-xl ">
                                        <article
                                            className="relative isolate flex flex-col justify-end overflow-hidden rounded-xl bg-gray-900 dark:bg-gray-700 px-4 py-8 pb-8 pt-80 sm:pt-48 lg:pt-80 min-h-[270px]">
                                            <img
                                                src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                                alt="" className="absolute inset-0 -z-10 h-full w-full object-cover"/>
                                            <div
                                                className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                                            <div
                                                className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
                                            <div
                                                className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                                                <time
                                                    dateTime="2023-09-25" className="mr-8">Sept 25, 2023
                                                </time>
                                                <div className="-ml-4 flex items-center gap-x-4">
                                                    <svg viewBox="0 0 2 2"
                                                         className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                                                        <circle cx="1" cy="1" r="1"></circle>
                                                    </svg>
                                                    <div className="flex gap-x-2.5 author-img">
                                                        <img src="https://randomuser.me/api/portraits/men/2.jpg" alt="" className="h-6 w-6 flex-none rounded-full bg-white/10" />John
                                                    </div>
                                                </div>
                                            </div>
                                            <h3 className="mt-3 text-base text-left font-semibold leading-6 text-white">
                                                <a href="#" className={"hover:text-blue-400 transition-colors duration-300"}><span className="absolute inset-0"></span>The
                                                    Rise of
                                                    Blockchain Technology:
                                                    A Comprehensive Guide</a>
                                            </h3>
                                        </article>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex flex-col relative sm:items-start">
                                    <div
                                        className="h-full w-6 absolute top-0 left-[50%] flex justify-start">
                                        <div className="h-full w-[8px] bg-[#040B24] pointer-events-none"></div>
                                    </div>
                                    <div
                                        className="flex-grow relative md:px-4 md:py-4 px-3 py-4 mt-8 mx-5 flex sm:items-start items-start flex-col sm:flex-row bg-[#040B24] text-white rounded-xl ">
                                        <article
                                            className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 dark:bg-gray-700 px-4 py-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
                                            <img
                                                src="https://images.unsplash.com/photo-1688560952189-ef386cea744e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                                alt="" className="absolute inset-0 -z-10 h-full w-full object-cover"/>
                                            <div
                                                className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                                            <div
                                                className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
                                            <div
                                                className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                                                <time
                                                    dateTime="2023-09-25" className="mr-8">Sept 25, 2023
                                                </time>
                                                <div className="-ml-4 flex items-center gap-x-4">
                                                    <svg viewBox="0 0 2 2"
                                                         className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                                                        <circle cx="1" cy="1" r="1"></circle>
                                                    </svg>
                                                    <div className="flex gap-x-2.5 author-img">
                                                        <img src="https://randomuser.me/api/portraits/men/4.jpg" alt="" className="h-6 w-6 flex-none rounded-full bg-white/10" />Michael
                                                    </div>
                                                </div>
                                            </div>
                                            <h3 className="mt-3 text-base text-left font-semibold leading-6 text-white">
                                                <a
                                                    href="#"
                                                    className="text-white hover:text-blue-400 transition-colors duration-300"
                                                >
                                                    The Rise of Blockchain Technology: A Comprehensive Guide
                                                </a>
                                            </h3>
                                        </article>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex flex-col relative sm:items-start">
                                    <div
                                        className="h-full w-6 absolute top-0 left-[50%] flex justify-start">
                                        <div className="h-full w-[8px] bg-[#040B24] pointer-events-none"></div>
                                    </div>
                                    <div
                                        className="flex-grow relative md:px-4 md:py-4 px-3 py-4 mt-8 mx-5 flex sm:items-start items-start flex-col sm:flex-row bg-[#040B24] text-white rounded-xl min-h-[270px]">
                                        <article
                                            className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 dark:bg-gray-700 px-4 py-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
                                            <img
                                                src="https://images.unsplash.com/photo-1553469945-2adfe230284d?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                                alt="" className="absolute inset-0 -z-10 h-full w-full object-cover"/>
                                            <div
                                                className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                                            <div
                                                className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
                                            <div
                                                className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                                                <time
                                                    dateTime="2023-09-25" className="mr-8">Sept 25, 2023
                                                </time>
                                                <div className="-ml-4 flex items-center gap-x-4">
                                                    <svg viewBox="0 0 2 2"
                                                         className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                                                        <circle cx="1" cy="1" r="1"></circle>
                                                    </svg>
                                                    <div className="flex gap-x-2.5 author-img">
                                                        <img src="https://randomuser.me/api/portraits/women/2.jpg"
                                                             alt=""
                                                             className="h-6 w-6 flex-none rounded-full bg-white/10"/>Jane
                                                    </div>
                                                </div>
                                            </div>
                                            <h3 className="mt-3 text-base text-left font-semibold leading-6 text-white">
                                                <a href="#" className="text-white hover:text-blue-400 transition-colors duration-300"><span className="absolute inset-0"></span>The
                                                    Rise of
                                                    Blockchain Technology:
                                                    A Comprehensive Guide</a>
                                            </h3>
                                        </article>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex flex-col relative sm:items-start">
                                    <div
                                        className="h-full w-6 absolute top-0 left-[50%] flex justify-start">
                                        <div className="h-full w-[8px] bg-[#040B24] pointer-events-none"></div>
                                    </div>
                                    <div
                                        className="flex-grow relative md:px-4 md:py-4 px-3 py-4 mt-8 mx-5 flex sm:items-start items-start flex-col sm:flex-row bg-[#040B24] text-white rounded-xl min-h-[270px]">
                                        <article
                                            className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 dark:bg-gray-700 px-4 py-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
                                            <img
                                                src="https://plus.unsplash.com/premium_photo-1739275163164-7afbce535926?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8"
                                                alt="" className="absolute inset-0 -z-10 h-full w-full object-cover"/>
                                            <div
                                                className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                                            <div
                                                className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
                                            <div
                                                className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                                                <time
                                                    dateTime="2023-09-25" className="mr-8">Sept 25, 2023
                                                </time>
                                                <div className="-ml-4 flex items-center gap-x-4">
                                                    <svg viewBox="0 0 2 2"
                                                         className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                                                        <circle cx="1" cy="1" r="1"></circle>
                                                    </svg>
                                                    <div className="flex gap-x-2.5 author-img">
                                                        <img src="https://randomuser.me/api/portraits/women/2.jpg"
                                                             alt=""
                                                             className="h-6 w-6 flex-none rounded-full bg-white/10"/>Jane
                                                    </div>
                                                </div>
                                            </div>
                                            <h3 className="mt-3 text-base text-left font-semibold leading-6 text-white">
                                                <a href="#" className="text-white hover:text-blue-400 transition-colors duration-300"><span className="absolute inset-0"></span>The
                                                    Rise of
                                                    Blockchain Technology:
                                                    A Comprehensive Guide</a>
                                            </h3>
                                        </article>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex flex-col relative sm:items-start">
                                    <div
                                        className="h-full w-6 absolute top-0 left-[50%] flex justify-start">
                                        <div className="h-full w-[8px] bg-[#040B24] pointer-events-none"></div>
                                    </div>
                                    <div
                                        className="flex-grow relative md:px-4 md:py-4 px-3 py-4 mt-8 mx-5 flex sm:items-start items-start flex-col sm:flex-row bg-[#040B24] text-white rounded-xl min-h-[270px]">
                                        <article
                                            className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 dark:bg-gray-700 px-4 py-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
                                            <img
                                                src="https://cdn.pixabay.com/photo/2017/03/12/16/00/blue-2137334_1280.jpg"
                                                alt="" className="absolute inset-0 -z-10 h-full w-full object-cover"/>
                                            <div
                                                className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                                            <div
                                                className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
                                            <div
                                                className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                                                <time
                                                    dateTime="2023-09-25" className="mr-8">Sept 25, 2023
                                                </time>
                                                <div className="-ml-4 flex items-center gap-x-4">
                                                    <svg viewBox="0 0 2 2"
                                                         className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                                                        <circle cx="1" cy="1" r="1"></circle>
                                                    </svg>
                                                    <div className="flex gap-x-2.5 author-img">
                                                        <img src="https://randomuser.me/api/portraits/women/2.jpg"
                                                             alt=""
                                                             className="h-6 w-6 flex-none rounded-full bg-white/10"/>Jane
                                                    </div>
                                                </div>
                                            </div>
                                            <h3 className="mt-3 text-base text-left font-semibold leading-6 text-white">
                                                <a href="#" className="text-white hover:text-blue-400 transition-colors duration-300"><span className="absolute inset-0"></span>The
                                                    Rise of
                                                    Blockchain Technology:
                                                    A Comprehensive Guide</a>
                                            </h3>
                                        </article>
                                    </div>
                                </div>
                            </SwiperSlide>

                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};


<div className="flex flex-col relative sm:items-start  ">
    <div
        className="h-full w-6 absolute top-0 left-[50%] flex items-center justify-start">
        <div className="h-full w-[8px] bg-[#040B24] pointer-events-none"></div>
    </div>
    <div
        className="flex-grow relative md:px-6 md:py-6 px-3 py-4 mt-8 mx-5 flex sm:items-start items-start flex-col sm:flex-row bg-[#040B24] text-white rounded-xl min-h-[270px]">
        <article
            className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 dark:bg-gray-700 px-8 py-8 pb-8 pt-80 sm:pt-48 lg:pt-80">
            <img
                src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxhaXxlbnwwfDB8fHwxNzEyNzUzMTQ4fDA&ixlib=rb-4.0.3&q=80&w=1080"
                alt="" className="absolute inset-0 -z-10 h-full w-full object-cover"/>
            <div
                className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
            <div
                className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>
            <div
                className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                <time
                    dateTime="2023-10-11" className="mr-8">Oct 11, 2023
                </time>
                <div className="-ml-4 flex items-center gap-x-4">
                    <svg viewBox="0 0 2 2"
                         className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
                        <circle cx="1" cy="1" r="1"></circle>
                    </svg>
                    <div className="flex gap-x-2.5">
                        <img src="https://randomuser.me/api/portraits/men/2.jpg" alt=""
                             className="h-6 w-6 flex-none rounded-full bg-white/10"/>John
                    </div>
                </div>
            </div>
            <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                <a href="/tech-blog/post1"><span className="absolute inset-0"></span>The Future
                    of Artificial
                    Intelligence: Trends and Challenges</a>
            </h3>
        </article>
    </div>
</div>


// 2
// <div className="flex flex-col relative sm:items-start  ">
//     <div
//         className="h-full w-6 absolute top-0 left-[50%] flex items-center justify-start">
//         <div className="h-full w-[8px] bg-[#040B24] pointer-events-none"></div>
//     </div>
//     <div
//         className="flex-grow relative md:px-6 md:py-6 px-3 py-4 mt-8 mx-5 flex sm:items-start items-start flex-col sm:flex-row bg-[#040B24] text-white rounded-xl min-h-[270px]">
//         <div className="flex-grow gap-2">
//             <div
//                 className="text-[1rem] xl:text-[1.25rem] xl:leading-[2rem] leading-6 font-semibold">More
//                 data always leads to better AI.
//             </div>
//             <p className="leading-relaxed mt-2 text-[#D1D7DC] text-[1rem]">
//                 <b>Reality: </b>AI models are more effective when the data is
//                 accurate and relevant; incorrect or biased data can produce poor
//                 results.</p></div>
//     </div>
// </div>

/**
 * <div className="flex flex-col relative sm:items-start  ">
 *                                     <div
 *                                         className="h-full w-6 absolute top-0 left-[50%] flex items-center justify-start">
 *                                         <div className="h-full w-[8px] bg-[#040B24] pointer-events-none"></div>
 *                                     </div>
 *                                     <div
 *                                         className="flex-grow relative md:px-6 md:py-6 px-3 py-4 mt-8 mx-5 flex sm:items-start items-start flex-col sm:flex-row bg-[#040B24] text-white rounded-xl min-h-[270px]">
 *                                         <div className="flex-grow gap-2">
 *                                             <div
 *                                                 className="text-[1rem] xl:text-[1.25rem] xl:leading-[2rem] leading-6 font-semibold">AI
 *                                                 is a one-size-fits-all solution.
 *                                             </div>
 *                                             <p className="leading-relaxed mt-2 text-[#D1D7DC] text-[1rem]">
 *                                                 <b>Reality: </b>AI solutions vary widely and need to be customized.
 *                                                 The AI tools companies use vary by industry and specific goals.</p>
 *                                         </div>
 *                                     </div>
 *                                 </div>
 *
 *                                                             <SwiperSlide>
 *                                 <div className="flex flex-col relative sm:items-start  ">
 *                                 <div
 *                                         className="h-full w-6 absolute top-0 left-[50%] flex items-center justify-start">
 *                                         <div className="h-full w-[8px] bg-[#040B24] pointer-events-none"></div>
 *                                     </div>
 *                                     <div
 *                                         className="flex-grow relative md:px-6 md:py-6 px-3 py-4 mt-8 mx-5 flex sm:items-start items-start flex-col sm:flex-row bg-[#040B24] text-white rounded-xl min-h-[270px]">
 *                                         <div className="flex-grow gap-2">
 *                                             <div
 *                                                 className="text-[1rem] xl:text-[1.25rem] xl:leading-[2rem] leading-6 font-semibold">Only
 *                                                 large enterprises benefit from data analytics.
 *                                             </div>
 *                                             <p className="leading-relaxed mt-2 text-[#D1D7DC] text-[1rem]">
 *                                                 <b>Reality: </b>Businesses of all sizes can use data analytics to
 *                                                 pivot their business goals with data-driven decisions, which can be
 *                                                 a turning point in their business.</p></div>
 *                                     </div>
 *                                 </div>
 *                             </SwiperSlide>
 *                             <SwiperSlide>
 *                                 <div className="flex flex-col relative sm:items-start  ">
 *                                     <div
 *                                         className="h-full w-6 absolute top-0 left-[50%] flex items-center justify-start">
 *                                         <div className="h-full w-[8px] bg-[#040B24] pointer-events-none"></div>
 *                                     </div>
 *                                     <div
 *                                         className="flex-grow relative md:px-6 md:py-6 px-3 py-4 mt-8 mx-5 flex sm:items-start items-start flex-col sm:flex-row bg-[#040B24] text-white rounded-xl min-h-[270px]">
 *                                         <div className="flex-grow gap-2">
 *                                             <div
 *                                                 className="text-[1rem] xl:text-[1.25rem] xl:leading-[2rem] leading-6 font-semibold">AI
 *                                                 is only useful for tech companies.
 *                                             </div>
 *                                             <p className="leading-relaxed mt-2 text-[#D1D7DC] text-[1rem]">
 *                                                 <b>Reality: </b>AI applications span industries, including
 *                                                 healthcare, agriculture, finance, and education, offering benefits
 *                                                 to all sectors.</p>
 *                                         </div>
 *                                     </div>
 *                                 </div>
 *                             </SwiperSlide>
 */