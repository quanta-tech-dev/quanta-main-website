import HeroSlider from '@/sections/HeroSlider/HeroSlider';
import SolutionsSection from '@/sections/SolutionsSection/SolutionsSection';
import {ServeSection} from "@/sections/ServeSection/ServeSection";

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <SolutionsSection />
        <ServeSection/>
    </main>
  );
}
