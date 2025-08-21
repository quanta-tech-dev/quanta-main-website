import React from 'react';
import ContactSection from "@/sections/ContactSection/ContactSection";
import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import "./contact.css";

const Contact = () => {
    const breadCrumbsItems = [
        {
            href: "/",
            label: "Home",
        },
        {
            href: "/contact",
            label: "Contact",
        },
    ]
    return (
        <main className="mt-[1.8rem]">
            <BreadCrumbs items={breadCrumbsItems}/>
            <section className="w-full flex justify-center items-center text-center">
                <div
                    className="flex flex-col items-center justify-center gap-[1rem] sm:gap-[0.5rem] lg:gap-[1rem] xl:gap-[1.4rem]">
                    <h1 className="custom-page-title">We&apos;re just a call away.</h1>
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-[1.5rem] mx-auto">
                        <div className="col-span-12 sm:col-span-1 flex gap-4 group">
                            <div className="flex items-start gap-4 sm:gap-0 sm:flex-col">
                                <span
                                    className="text-customGray-600 text-[1rem] leading-6 font-normal">Call us at:</span>
                                <a className="text-[#101112] text-[1rem] leading-6 font-normal"
                                   href="tel:>+919979738578">+91 997 973 8578</a>
                            </div>
                            <svg className="hidden sm:block group-last:hidden" width="52" height="52"
                                 viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M22.0231 5.04691C22.8259 4.64555 23.802 4.97092 24.2033 5.77363L33.9533 25.2736C34.1821 25.7311 34.1821 26.2696 33.9533 26.7271L24.2033 46.2271C23.802 47.0298 22.8259 47.3552 22.0231 46.9538C21.2204 46.5524 20.8951 45.5763 21.2964 44.7736L30.6831 26.0004L21.2964 7.22708C20.8951 6.42436 21.2204 5.44827 22.0231 5.04691Z"
                                      fill="#D1D7DC"></path>
                            </svg>
                        </div>
                        <div className="col-span-12 sm:col-span-1 flex gap-4 group">
                            <div className="flex items-start gap-4 sm:gap-0 sm:flex-col">
                                <span className="text-customGray-600 text-[1rem] leading-6 font-normal">Email us:</span>
                                <a className="text-[#101112] text-[1rem] leading-6 font-normal"
                                   href="mailto:info@quanta.com">info@quanta.com</a>
                            </div>
                            <svg className="hidden sm:block group-last:hidden" width="52" height="52"
                                 viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M22.0231 5.04691C22.8259 4.64555 23.802 4.97092 24.2033 5.77363L33.9533 25.2736C34.1821 25.7311 34.1821 26.2696 33.9533 26.7271L24.2033 46.2271C23.802 47.0298 22.8259 47.3552 22.0231 46.9538C21.2204 46.5524 20.8951 45.5763 21.2964 44.7736L30.6831 26.0004L21.2964 7.22708C20.8951 6.42436 21.2204 5.44827 22.0231 5.04691Z"
                                      fill="#D1D7DC"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </section>
            <ContactSection/>

            <section className="w-full">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 bg-[#F7F9FA] mb-10">
                        <div className="p-4 md:p-10 md:ps-20 ">
                            <div className="flex items-center gap-3 mb-8">
                                <svg xmlns="http://www.w3.org/2000/svg" width={50} height={36} shape-rendering="geometricPrecision"
                                     text-rendering="geometricPrecision" image-rendering="optimizeQuality"
                                     fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 356.18">
                                    <g fill-rule="nonzero">
                                        <path fill="#509E2F"
                                              d="M28.137 0H483.86C499.337 0 512 12.663 512 28.14v299.9c0 15.477-12.663 28.14-28.14 28.14H28.137C12.663 356.18 0 343.517 0 328.04V28.14C0 12.663 12.663 0 28.137 0z"/>
                                        <path fill="#EF3340"
                                              d="M0 237.454h512V28.14C512 12.663 499.337 0 483.86 0H28.137C12.663 0 0 12.663 0 28.14v209.314z"/>
                                        <path fill="#00B5E2"
                                              d="M0 118.726h512V28.14C512 12.663 499.337 0 483.86 0H28.137C12.663 0 0 12.663 0 28.14v90.586z"/>
                                        <path fill="#fff"
                                              d="M280.867 145.944c-9.751-12.925-25.238-21.282-42.677-21.282-29.507 0-53.427 23.92-53.427 53.428 0 29.507 23.92 53.428 53.427 53.428 17.44 0 32.926-8.357 42.677-21.282-7.997 7.665-18.85 12.377-30.803 12.377-24.59 0-44.524-19.934-44.524-44.523 0-24.589 19.934-44.523 44.524-44.523 11.953 0 22.804 4.712 30.803 12.377z"/>
                                        <path fill="#fff"
                                              d="M297.555 148.408l5.68 15.971 15.309-7.277-7.278 15.308 15.971 5.68-15.971 5.68 7.278 15.308-15.309-7.277-5.68 15.971-5.679-15.971-15.309 7.277 7.276-15.308-15.971-5.68 15.971-5.68-7.276-15.308 15.309 7.277z"/>
                                    </g>
                                </svg>
                                <h3 className=" text-xl md:text-[1.75rem] font-semibold md:leading-[2.275rem]">
                                    Azerbaijan Office
                                </h3>
                            </div>
                            <p className="font-semibold text-lg mb-2">Baku</p>
                            <p className="font-normal text-lg text-customGray-600">Heydar Aliyev Avenue, <br/>Heydar Aliyev Center,
                                Baku 1033 </p>
                            <div className="flex gap-2 flex-col  sm:flex-row flex-wrap mt-1 font-normal text-lg">
                                <a href="mailto:sales@quanta.com">sales@quanta.com</a>
                                <p className="hidden sm:block">|</p>
                                <a href="tel:+19734356491" className="font-normal">+1 973 435 6491</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Contact;
