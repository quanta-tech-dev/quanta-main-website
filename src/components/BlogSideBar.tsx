import React from 'react';
import {tagItems} from "@/app/data/tagItems";

const BlogSideBar = () => {
    return (
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
                        {name: "Company Profile", count: 2},
                        {name: "Construction", count: 1},
                        {name: "General", count: 1},
                        {name: "Projects", count: 1},
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
                    {tagItems.map((tag) => (
                        <a
                            key={tag.id}
                            href="#"
                            className="px-3 py-1 text-sm border border-[#098FD7] rounded-lg text-gray-600 hover:bg-[#098FD7]  hover:text-white transition duration-300"
                        >
                            {tag.name}
                        </a>
                    ))}
                </nav>
            </div>
        </aside>
    );
};

export default BlogSideBar;