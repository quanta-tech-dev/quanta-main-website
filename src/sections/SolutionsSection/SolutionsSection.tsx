import React from 'react';
import "./Solutionssection.css";
import Link from "next/link";

const SolutionsSection = () => {
    return (
        <div className="w-full py-[2rem] mt-[1.5rem] sm:mt-[2rem] xl:mt-[3rem]">
            <div className="relative flex-1 h-full w-full flex custom-layout">
                <div className="sm:py-[1.5rem] w-full">
                    <div className="flex w-full justify-between items-start">
                        <div>
                            <p className="text-sm text-brandDark">HOW WE DO</p>
                            <div className="custom-secondary-title mb-[2rem]">Solutions</div>
                        </div>
                        <Link href="/contact">
                            <button
                                type="button"
                                className="inline-flex w-full disabled:opacity-80 hover:opacity-95 items-center justify-center text-sm text-white bg-primary rounded-md py-[0.4rem] px-[0.8rem] lg:py-[0.5rem] lg:px-[1.2rem] xl:py-[0.7rem] xl:px-[1.75rem] focus:outline-none whitespace-nowrap transition-colors duration-300 transform "
                            >
                                Get Free Consultation
                            </button>
                        </Link>
                    </div>
                    <div className="grid grid-cols-12 gap-3 xl:gap-6 w-full">
                        <Link
                            className="col-span-12 sm:col-span-4 relative justify-center p-[1rem] xl:p-[3rem] rounded-[1rem] hover:bg-[#faf8ff] transition-colors duration-300 transform"
                            href="/solutions/retail">
                            <div className="relative text-center flex flex-col gap-2 lg:gap-4 items-center">
                                <img alt="Banner addon" loading="lazy" width="254" height="254" decoding="async"
                                     data-nimg="1" className="absolute w-[200px] scale-125 opacity-100 top-[-2rem]"
                                     src="/images/solutions/shadow.png"/>
                                <div className="relative">
                                    <img alt="AI Awareness Program" loading="lazy" width="100" height="100"
                                         decoding="async" data-nimg="1" className="w-[140px] object-cover"
                                         src="/images/solutions/retail.svg"/>
                                </div>
                                <h4 className="text-brandDark text-lg lg:text-[1.5rem] font-semibold whitespace-nowrap">Retail</h4>
                                <p className="flex items-center gap-2">Learn more
                                    <span>
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M8.46975 12.9697L9.53025 14.0302L14.5605 8.99998L9.53025 3.96973L8.46975 5.03023L11.6895 8.24998H4.5V9.74998H11.6895L8.46975 12.9697Z"
                                                fill="#602BE9">
                                            </path>
                                        </svg>
                                    </span>
                                </p>
                            </div>
                        </Link>
                        <Link
                            className="col-span-12 sm:col-span-4 relative justify-center p-[1rem] xl:p-[3rem] rounded-[1rem] hover:bg-[#faf8ff] transition-colors duration-300 transform"
                            href="/solutions/healthcare">
                            <div className="relative text-center flex flex-col gap-2 lg:gap-4 items-center"><img
                                alt="Banner addon" loading="lazy" width="254" height="254" decoding="async"
                                data-nimg="1" className="absolute w-[200px] scale-125 opacity-100 top-[-2rem]"
                                src="/images/solutions/shadow.png"/>
                                <div className="relative">
                                    <img alt="Business Operating System" loading="lazy"
                                         width="100" height="100" decoding="async" data-nimg="1"
                                         className="w-[140px] object-cover"
                                         src="/images/solutions/helthcare.svg"
                                    />
                                </div>
                                <h4 className="text-brandDark text-lg lg:text-[1.5rem] font-semibold whitespace-nowrap">Healthcare</h4>
                                <p className="flex items-center gap-2">Learn more <span>
                                    <svg width="18" height="18"
                                         viewBox="0 0 18 18"
                                         fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M8.46975 12.9697L9.53025 14.0302L14.5605 8.99998L9.53025 3.96973L8.46975 5.03023L11.6895 8.24998H4.5V9.74998H11.6895L8.46975 12.9697Z"
                                            fill="#602BE9"></path>
                                    </svg>
                                </span>
                                </p>
                            </div>
                        </Link>
                        <Link href={"/solutions/manufacturing"}
                              className="col-span-12 sm:col-span-4 relative justify-center p-[1rem] xl:p-[3rem] rounded-[1rem] hover:bg-[#faf8ff] transition-colors duration-300 transform">
                            <div className="relative text-center flex flex-col gap-2 lg:gap-4 items-center"><img
                                alt="Banner addon" loading="lazy" width="254" height="254" decoding="async"
                                data-nimg="1" className="absolute w-[200px] scale-125 opacity-100 top-[-2rem]"
                                src="/images/solutions/shadow.png"/>
                                <div className="relative">
                                    <img alt="AI Executive Program" loading="lazy" width="100"
                                         height="100" decoding="async" data-nimg="1"
                                         className="w-[140px] object-cover"
                                         src="/images/solutions/manufacturing.svg"
                                    /></div>
                                <h4 className="text-brandDark text-lg lg:text-[1.5rem] font-semibold whitespace-nowrap">Manufacturing</h4></div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SolutionsSection;
