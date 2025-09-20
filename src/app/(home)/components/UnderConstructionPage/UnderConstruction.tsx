import React from 'react';
import Link from "next/link";
import Image from "next/image";

const UnderConstruction = () => {
    return (
        <section>
            <div className="min-h-screen flex flex-col  items-center pt-8">
                <Link href="/public">
                    <Image
                        src="/logo.svg"
                        alt="Quanta Logo"
                        width={260}
                        height={260}
                        className="mb-6"
                    />
                </Link>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-800 mb-4">We&apos;ll
                    be back soon!</h1>
                <p className="text-center text-gray-600  text-lg md:text-xl lg:text-2xl mb-8">Sorry
                    for the inconvenience. We’re performing some maintenance at the moment.</p>
                <div className="flex space-x-4">
                    <Link href="/public"
                       className="inline-flex items-center border border-indigo-300 px-3 py-1.5 rounded-md hover:bg-indigo-50"
                          style={{ color: "#027bbd", borderColor: "#027bbd" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                             className="h-6 w-6" style={{ color: "#027bbd" }}>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M7 16l-4-4m0 0l4-4m-4 4h18">
                            </path>
                        </svg>
                        <span className="ml-1 font-bold text-lg">Back</span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default UnderConstruction;