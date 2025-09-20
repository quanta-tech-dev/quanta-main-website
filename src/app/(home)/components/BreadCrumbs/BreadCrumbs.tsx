import React from 'react';
import Link from "next/link";

interface BreadCrumbsItem {
    href: string;
    label: string;
}

interface BreadCrumbsProps {
    items: BreadCrumbsItem[];
}

const BreadCrumbs: React.FC<BreadCrumbsProps> = ({items}) => {
    return (
        <section className="w-full flex justify-center items-center text-center">
            <nav className="flex bg-transparent mt-1 mb-4" aria-label="Breadcrumb">
                <ol className="flex items-center gap-2">
                    {items.map(({href, label}, index) => (
                        <li key={href} className="flex items-center justify-center sm:gap-2">
                            {index != 0 && (
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     aria-hidden="true" role="img"
                                     className="text-[#D1D7DC] iconify iconify--icon-park-outline"
                                     fontSize="" width="1em" height="1em" viewBox="0 0 48 48">
                                    <path fill="currentColor" stroke="currentColor" strokeWidth="4"
                                          d="M24 33a9 9 0 1 0 0-18a9 9 0 0 0 0 18Z"></path>
                                </svg>
                            )}
                            {
                                index === items.length - 1 ? (
                                        <p className="text-xs font-normal line-clamp-1 text-customGray-900">{label}</p>
                                    ) :
                                    <Link className="flex" href={href}>
                                        <p className="text-xs font-normal line-clamp-1 text-customGray-900">{label}</p>
                                    </Link>
                            }
                        </li>

                    ))}
                </ol>
            </nav>
        </section>
    );
};

export default BreadCrumbs;