import React from 'react';
import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import Image from "next/image";
import Link from "next/link";
import {blogs} from "@/app/data/blogItems";

const Blogs = () => {
    const breadCrumbsItems = [
        {
            href: "/",
            label: "Home",
        },
        {
            href: "/resources/blogs",
            label: "Blogs",
        },
    ]

    return (
        <main className="mt-[1.8rem]">
            <BreadCrumbs items={breadCrumbsItems}/>
            <section className="w-full flex justify-center items-center text-center mb-5">
                <div
                    className="flex flex-col items-center justify-center gap-[1rem] sm:gap-[0.5rem] lg:gap-[1rem] xl:gap-[1.4rem]">
                    <h1 className="custom-page-title">Our Blog: Ideas, News, and Stories</h1>
                </div>
            </section>
            <section className="py-12 px-4 md:px-8 lg:px-16">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    <div className="space-y-8 lg:col-span-3">
                        {blogs.map((blog) => (
                            <div
                                key={blog.id}
                                className="flex flex-col md:flex-row gap-6 items-start"
                            >
                                <div className="w-full md:w-1/3">
                                    <Image
                                        src={blog.img}
                                        alt={blog.title}
                                        width={600}
                                        height={300}
                                        className="rounded-lg object-cover h-[220px] w-full"
                                    />
                                </div>
                                <div className="w-full md:w-2/3">
                                    <p className="text-sm text-gray-500 uppercase">{blog.date}</p>
                                    <Link href={`/resources/blogs/${blog.id}`}>
                                    <h3
                                        className={`mt-2 font-semibold text-lg md:text-xl text-[#098FD7] hover:text-[#027bbd]`}
                                    >
                                        {blog.title}
                                    </h3>
                                    </Link>
                                    <p className="mt-2 text-gray-600">{blog.description}</p>
                                    <Link href={`/resources/blogs/${blog.id}`}
                                          prefetch={false}
                                          scroll={false}
                                        className={`mt-4 inline-flex items-center px-5 py-2 rounded-lg text-sm font-medium transition bg-[#098FD7] text-white hover:bg-[#027bbd]`}
                                    >
                                        Read more →
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Sidebar */}
                    <aside className="space-y-8 pl-6 border-l border-slate-100">
                        {/* Search */}
                        <div className="flex flex-col gap-4 justify-center items-center">
                            <div className="relative p-2 border border-gray-200 rounded-lg w-full max-w-lg">
                                <input type="text" className="rounded-md p-2 w-full focus:outline-2 focus:outline-[#098FD7]"
                                       placeholder="Search..."/>

                                <button type="submit" className="absolute right-4 top-4 text-[#098FD7] hover:text-[#027bbd] ">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth="1.5"
                                         stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
                                    </svg>
                                </button>

                            </div>
                        </div>

                        {/* Categories */}
                        <div className="max-w-xs">
                            <h2 className="text-xl font-bold mb-5  pb-2 relative">
                                Categories <span className="text-gray-600 absolute right-40 top-1">—</span>
                            </h2>

                            <ul className="space-y-3">
                                {[
                                    { name: "Company Profile", count: 2 },
                                    { name: "Construction", count: 1 },
                                    { name: "General", count: 1 },
                                    { name: "Projects", count: 1 },
                                ].map((cat) => (
                                    <li key={cat.name} className="flex justify-between text-gray-800 cursor-pointer">
                                        <span>{cat.name}</span>
                                        <span className="text-gray-500">({cat.count})</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Tags */}
                        <div className="rounded-lg">
                            <h4 className="font-semibold text-lg mb-3">Tags</h4>
                            <nav className="flex flex-wrap gap-2">
                                {["AI", "Blockchain", "Startup", "Health", "Design"].map((tag) => (
                                    <a
                                        key={tag}
                                        href="#"
                                        className="px-3 py-1 text-sm border border-[#098FD7] rounded-lg text-gray-600 hover:bg-[#098FD7]  hover:text-white transition duration-300"
                                    >
                                        {tag}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </aside>
                </div>
            </section>

        </main>
    );
};

export default Blogs;
