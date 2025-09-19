import React from 'react';
import "./ProductsSection.css";
import Link from "next/link";
import Image from "next/image";

const ProductsSection = () => {
    return (
        <div className="w-full py-[2rem] mt-[1.5rem] sm:mt-[2rem] xl:mt-[3rem]">
            <div className="relative flex-1 h-full w-full flex custom-layout">
                <div className="sm:py-[1.5rem] w-full">
                    <div className="grid grid-cols-12 gap-3 xl:gap-6 w-full">
                        <Link
                            className="col-span-12 sm:col-span-4 relative justify-center p-[1rem] xl:p-[3rem] rounded-[1rem] hover:bg-[#e7f6fe] transition-colors duration-300 transform"
                            href="/products/quanta-erp">
                            <div className="relative text-center flex flex-col gap-2 lg:gap-4 items-center">
                                <Image
                                    src="/images/solutions/shadow.png"
                                    alt="Banner addon"
                                    width={254}
                                    height={254}
                                    className="absolute w-[200px] scale-125 opacity-100 top-[-2rem]"
                                />
                                <div className="relative">
                                    <Image
                                        src="/images/products/erp.svg"
                                        alt="Quanta ERP"
                                        width={100}
                                        height={100}
                                        className="w-[140px] object-cover"
                                    />
                                </div>
                                <h4 className="text-brandDark text-lg lg:text-[1.5rem] font-semibold whitespace-nowrap">Quanta
                                    ERP</h4>
                                <p className="flex items-center gap-2">Learn more
                                    <span>
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M8.46975 12.9697L9.53025 14.0302L14.5605 8.99998L9.53025 3.96973L8.46975 5.03023L11.6895 8.24998H4.5V9.74998H11.6895L8.46975 12.9697Z"
                                                fill="#098FD7">
                                            </path>
                                        </svg>
                                    </span>
                                </p>
                            </div>
                        </Link>
                        <Link
                            className="col-span-12 sm:col-span-4 relative justify-center p-[1rem] xl:p-[3rem] rounded-[1rem] hover:bg-[#e7f6fe] transition-colors duration-300 transform"
                            href="/products/quanta-bi">
                            <div className="relative text-center flex flex-col gap-2 lg:gap-4 items-center">
                                <Image
                                    src="/images/solutions/shadow.png"
                                    alt="Banner addon"
                                    width={254}
                                    height={254}
                                    className="absolute w-[200px] scale-125 opacity-100 top-[-2rem]"
                                />
                                <div className="relative">
                                    <Image
                                        src="/images/products/bi.svg"
                                        alt="Quanta BI"
                                        width={100}
                                        height={100}
                                        className="w-[140px] object-cover"
                                    />
                                </div>
                                <h4 className="text-brandDark text-lg lg:text-[1.5rem] font-semibold whitespace-nowrap">Quanta BI</h4>
                                <p className="flex items-center gap-2">Learn more <span>
                                    <svg width="18" height="18"
                                         viewBox="0 0 18 18"
                                         fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M8.46975 12.9697L9.53025 14.0302L14.5605 8.99998L9.53025 3.96973L8.46975 5.03023L11.6895 8.24998H4.5V9.74998H11.6895L8.46975 12.9697Z"
                                            fill="#098FD7"></path>
                                    </svg>
                                </span>
                                </p>
                            </div>
                        </Link>
                        <Link href={"/products/quanta-lms"}
                              className="col-span-12 sm:col-span-4 relative justify-center p-[1rem] xl:p-[3rem] rounded-[1rem] hover:bg-[#e7f6fe] transition-colors duration-300 transform">
                            <div className="relative text-center flex flex-col gap-2 lg:gap-4 items-center">
                                <Image
                                    src="/images/solutions/shadow.png"
                                    alt="Banner addon"
                                    width={254}
                                    height={254}
                                    className="absolute w-[200px] scale-125 opacity-100 top-[-2rem]"
                                />
                                <div className="relative">
                                    <Image
                                        src="/images/products/lms.svg"
                                        alt="Quanta LMS"
                                        loading="lazy"
                                        width={100}
                                        height={100}
                                        className="w-[140px] object-cover"
                                    />
                                </div>
                                <h4 className="text-brandDark text-lg lg:text-[1.5rem] font-semibold whitespace-nowrap">Quanta
                                    LMS</h4>
                                <p className="flex items-center gap-2">Learn more <span>
                                    <svg width="18" height="18"
                                         viewBox="0 0 18 18"
                                         fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M8.46975 12.9697L9.53025 14.0302L14.5605 8.99998L9.53025 3.96973L8.46975 5.03023L11.6895 8.24998H4.5V9.74998H11.6895L8.46975 12.9697Z"
                                            fill="#098FD7"></path>
                                    </svg>
                                </span>
                                </p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsSection;
