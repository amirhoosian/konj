import { AuthorBannerData } from "@/components/author-banner/AuthorBannerCard";
import BookSection from "@/components/BookSection/BookSection";
import AuthorBannerSlider from "@/components/carousels/AuthorBannersCarousel";
import HeroSection from "@/components/HeroSection";
import PromoBanner from "@/components/PromoBanner";
import CategorySlider from "@/components/ui/CategorySlider";
import { newBooks } from "@/data/books";

export const authorBanners: AuthorBannerData[] = [
  {
    id: "1",

    title:
      "تعصب سعی دارد حقیقت را صحیح و سالم در دست خود نگاه دارد‌؛ اما چنان می‌فشاردش که حقیقت می‌میرد.",

    authorName: "رابیندرانات تاگور (۱۹۴۱ – ۱۸۶۱)",

    backgroundImage: {
      mobile: "/images/mobile-Banner-auther4.png",
      desktop: "/images/desktop-Banner-auther4.png",
    },

    buttonText: "دیدن تمام آثار این نویسنده >",
    buttonHref: "#",
  },

  {
    id: "2",

    title:
      "مشکل این جهان  این است که ابلهان پر از اطمینان  اند و عاقلان پر از تردید",

    authorName: "بتراند راسل (۱۹۷۵ -۱۸۷۲))",

    backgroundImage: {
      mobile: "/images/mobile-Banner-auther2.png",
      desktop: "/images/desktop-Banner-auther2.png",
    },

    buttonText: "دیدن تمام آثار این نویسنده >",
    buttonHref: "#",
  },

  {
    id: "3",

    title:
      "پول نمی‌تواند برایتان خوشبختی بخرد، اما مسلماشکل خوشایندی از مصبیت برایتان میخرد",

    authorName: "اسپایک میلیگان (۲۰۰۲ - ۱۹۱۸)",

    backgroundImage: {
      mobile: "/images/mobile-Banner-auther3.png",
      desktop: "/images/desktop-Banner-auther3.png",
    },

    buttonText: "دیدن تمام آثار این نویسنده >",
    buttonHref: "",
  },
  {
    id: "4",

    title:
      "تعصب سعی دارد حقیقت را صحیح و سالم در دست خود نگاه دارد؛اما چنان می فشاردش که حقیقت میمرد.",

    authorName: "رابیندرانات تاگور (۱۹۴۱ - ۱۸۴۱)",

    backgroundImage: {
      mobile: "/images/mobile-Banner-auther1.png",
      desktop: "/images/desktop-Banner-auther1.png",
    },

    buttonText: "دیدن تمام آثار این نویسنده >",
    buttonHref: "",
  },
];

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
      <BookSection
        title="محبوب ترین های روانشناسی"
        viewMoreLink="#"
        books={newBooks}
      />
      <BookSection
        title="تازه های رمان خارجی"
        viewMoreLink="#"
        books={newBooks}
      />
      <BookSection title="بهترین های صوتی" viewMoreLink="#" books={newBooks} />
      <AuthorBannerSlider banners={authorBanners} />
      <BookSection
        title="مهارت های توسعه فردی"
        viewMoreLink="#"
        books={newBooks}
      />
    </div>
  );
}
