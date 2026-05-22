import BookSection from "@/components/BookSection/BookSection";
import HeroSection from "@/components/HeroSection";
import PromoBanner from "@/components/sections/PromoBanner";
import CategorySlider from "@/components/ui/CategorySlider";
import { newBooks } from "@/data/books";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <HeroSection />
      <CategorySlider />
      <BookSection title="جدیدترین کتاب ها" viewMoreLink="#" books={newBooks} />
      <BookSection
        title="تا 90% درصد تخفیف"
        viewMoreLink="#"
        books={newBooks}
      />
      <PromoBanner
        title="مجموعه اثار جورج اورول"
        backgroundImage="/images/Banner-pro3.png"
        desktopBg="/images/Banner-desktop-promo3.png"
        discountText="فقط تا پایان زمستان 20% تخفیف بیشتر"
        subtitle="نویسنده سرشناس کتاب مزرعه حیوانات"
        buttonText="همین حالا بخوانید"
        buttonLink="#"
      />
    </div>
  );
}
