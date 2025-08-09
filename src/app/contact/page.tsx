import React from 'react';
import ContactSection from "@/sections/ContactSection/ContactSection";
import BreadCrumbs from "@/components/BreadCrumbs/BreadCrumbs";

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
            <ContactSection/>
        </main>
    );
};

export default Contact;
