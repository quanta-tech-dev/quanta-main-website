import React from 'react';
import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";
import Image from "next/image";
import Link from "next/link";
import {blogs} from "@/app/data/blogItems";
import BlogSideBar from "@/components/BlogSideBar";

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
                    <BlogSideBar/>
                </div>
            </section>

        </main>
    );
};

export default Blogs;
