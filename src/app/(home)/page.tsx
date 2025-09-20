'use client';
import { motion } from 'framer-motion';
import HeroSlider from '@/app/(home)/sections/HeroSlider/HeroSlider';
import SolutionsSection from '@/app/(home)/sections/SolutionsSection/SolutionsSection';
import {BlogsSection} from "@/app/(home)/sections/BlogsSection/BlogsSection";
import ProductsSection from "@/app/(home)/sections/ProductsSection/ProductsSection";
import ContactSection from "@/app/(home)/sections/ContactSection/ContactSection";

export default function Home() {
    return (
        <main>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <HeroSlider/>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <ProductsSection/>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <SolutionsSection/>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <BlogsSection/>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <ContactSection/>
            </motion.div>
        </main>
    );
}
