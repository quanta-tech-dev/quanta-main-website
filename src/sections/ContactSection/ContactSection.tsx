import React from 'react';
import "./contactSection.css"

const ContactSection = () => {
    return (
        <section>
            <div className="relative  h-full w-full  custom-layout">
                <div className="pt-[1.5rem] mb-[3rem]" id="get-free-consult">
                    <div
                        className="w-full grid grid-cols-12 bg-gradient-to-br from-[#E3F5FC] to-[#A6DDF5] ] relative lg:pb-0 rounded-lg">
                        <div
                            className="w-full h-[260px] sm:h-[250px] lg:h-[270px] absolute top-0 z-1 left-0 bg-brandDark flex flex-col justify-center p-6">
                        </div>
                        <div className="col-span-1"></div>
                        <div
                            className="lg:z-[30] col-span-12 lg:col-span-10 w-full text-white h-full p-4 pt-[80px] sm:pt-[100px] lg:pt-[80px] lg:pb-[4.5rem] z-1">
                            <div className="bg-white  rounded-lg">
                                <div className="p-6 text-center text-black font-semibold text-[1.5rem]">Get Free
                                    Consultation
                                </div>
                                <hr/>
                                <form>
                                    <div className="w-full grid grid-cols-12 gap-4 sm:gap-5 p-6">
                                        <div className="col-span-12 sm:col-span-6">
                                            <div className="text-[#5A5A5D] dark:text-white relative">
                                                <label
                                                    className="mb-2 block text-sm md:text-base dark:text-[#CACACA]"
                                                    htmlFor="name"
                                                >
                                                    Name *
                                                </label>
                                                <input
                                                    autoComplete="off"
                                                    type="text"
                                                    className="w-full p-2 dark:bg-transparent border rounded-lg outline-none text-sm md:text-base"
                                                    id="name"
                                                    name="name"
                                                />

                                            </div>
                                        </div>
                                        <div className="col-span-12 sm:col-span-6">
                                            <div className="text-[#5A5A5D] dark:text-white relative">
                                                <label
                                                    className="mb-2 block text-sm md:text-base dark:text-[#CACACA]"
                                                    htmlFor="email">Email *</label>
                                                <input
                                                    autoComplete="off"
                                                    type="email"
                                                    className="w-full p-2 dark:bg-transparent border rounded-lg outline-none text-sm md:text-base"
                                                    id="email"
                                                    name="email"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-span-12 sm:col-span-6">
                                            <div className="text-[#5A5A5D] dark:text-white relative w-full">
                                                <label
                                                    className="mb-2 block text-sm md:text-base dark:text-[#CACACA]"
                                                    htmlFor="cleanedPhone">Phone Number *</label>
                                                <input
                                                    autoComplete="off"
                                                    type="tel"
                                                    className="w-full p-2 dark:bg-transparent border rounded-lg outline-none text-sm md:text-base"
                                                    id="phone"
                                                    name="phone"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-span-12 sm:col-span-6">
                                            <div className="text-[#5A5A5D] dark:text-white relative">
                                                <label
                                                    className="mb-2 block text-sm md:text-base dark:text-[#CACACA]"
                                                    htmlFor="companyName">Company Name *</label>
                                                <input
                                                    autoComplete="off"
                                                    type="text"
                                                    className="w-full p-2 dark:bg-transparent border rounded-lg outline-none text-sm md:text-base"
                                                    id="companyName"
                                                    name="companyName"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-span-12 sm:col-span-6">
                                            <div className="text-[#5A5A5D] dark:text-white relative">
                                                <label
                                                    className="mb-2 block text-sm md:text-base dark:text-[#CACACA]"
                                                    htmlFor="websiteURL">Website URL</label>
                                                <input autoComplete="off"
                                                       type="text"
                                                       className="w-full p-2 dark:bg-transparent border rounded-lg outline-none text-sm md:text-base"
                                                       id="websiteURL"
                                                       name="websiteURL"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-span-12 sm:col-span-6">
                                            <div className="text-[#5A5A5D] dark:text-white relative">
                                                <label
                                                    className="mb-2 block text-sm md:text-base dark:text-[#CACACA]"
                                                    htmlFor="subject">
                                                    Subject
                                                </label>
                                                <input
                                                    autoComplete="off"
                                                    type="text"
                                                    className="w-full p-2 dark:bg-transparent border rounded-lg outline-none text-sm md:text-base"
                                                    id="subject"
                                                    name="subject"/>

                                            </div>
                                        </div>
                                        <div className="col-span-12">
                                            <div>
                                                <label
                                                    className="mb-2 block text-sm md:text-base text-[#5A5A5D]"
                                                    htmlFor="message">Message *</label>
                                                <textarea
                                                    placeholder="Message"
                                                    name="message"
                                                    rows={3}
                                                    className="w-full resize-none p-3 bg-white text-black dark:bg-gray-800 dark:text-gray-100 border border-darkBorder-300 focus:border-darkBorder-400 rounded-lg outline-none text-sm md:text-base"
                                                    id="message"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-span-12 flex justify-center">
                                            <button type="submit"
                                                    className="inline-flex max-w-xs w-full disabled:opacity-80 hover:opacity-95 items-center justify-center text-sm text-white bg-primary rounded-md py-[0.4rem] px-[0.8rem] lg:py-[0.5rem] lg:px-[1.2rem] xl:py-[0.7rem] xl:px-[1.75rem] focus:outline-none whitespace-nowrap transition-colors duration-300 transform disabled:opacity-70">Submit
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;