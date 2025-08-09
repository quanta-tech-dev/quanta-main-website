import HeroSlider from '@/sections/HeroSlider/HeroSlider';
import SolutionsSection from '@/sections/SolutionsSection/SolutionsSection';
import {BlogsSection} from "@/sections/BlogsSection/BlogsSection";
import ProductsSection from "@/sections/ProductsSection/ProductsSection";

export default function Home() {
    return (
        <main>
            <HeroSlider/>
            <ProductsSection/>
            <SolutionsSection/>
            <BlogsSection/>
        </main>
    );
}
