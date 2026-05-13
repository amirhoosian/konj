import HeroSection from "@/components/HeroSection";
import CategorySlider from "@/components/ui/CategorySlider";


export default function Home() {
  return <div className="w-full flex flex-col">
    <HeroSection/>
     <CategorySlider />
  </div>;
}
