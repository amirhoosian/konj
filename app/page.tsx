import { AuthorBannerData } from "@/components/author-banner/AuthorBannerCard";
import BookBannerSlider from "@/components/BookSection/BookBannerSlider";
import BookSection from "@/components/BookSection/BookSection";
import AuthorBannerSlider from "@/components/carousels/AuthorBannersCarousel";
import HeroSection from "@/components/HeroSection";
import PromoBanner from "@/components/PromoBanner";
import CategorySlider from "@/components/ui/CategorySlider";
import { newBooks } from "@/data/books";
import NarratorsSection from "../components/NarratorsSection/NarratorsSection";
export const authorBanners: AuthorBannerData[] = [
  {
    id: "1",

    title:
      "تعصب سعی دارد حقیقت را صحیح و سالم در دست خود نگاه دارد؛ اما چنان میفشاردش که حقیقت میمیرد.",

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
      "پول نمیتواند برایتان خوشبختی بخرد، اما مسلماشکل خوشایندی از مصبیت برایتان میخرد",

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

export interface BookType {
  id: number | string;
  title: string;

  description: string;
  cover: string;
}

const mockBooks: BookType[] = [
  {
    id: 1,
    title: "وقتی بدن نه میگوید",

    description:
      " پژواکیست از دردهای ناگفته، جایی که تن، بیآنکه زبان بگشاید، فریاد زخمهای روان را در سکوتی پرطنین به نمایش میگذارد و پرده از پیوند شگرف میان رنجهای پنهان در جان و بیماریهای آشکار در جسم برمیدارد.",
    cover: "/images/booksbanner/1a07d925-4a2f-40e8-8b19-1747c475c55f%201.png",
  },
  {
    id: 2,
    title: "عادت های اتمی",

    description:
      "چونان نقشهای دقیق و الهامبخش است برای ساختن دگرگونیهای بزرگ از دل تغییراتی کوچک، که با نگاهی موشکافانه و زبانی روشن، نشان میدهد چگونه قطرهقطره رفتارهای خرد میتوانند سیلی از موفقیت و رشد را در زندگی جاری سازند.",
    cover: "/images/booksbanner/Book%20Image.png",
  },

  {
    id: 3,
    title: "مسئله اسپینوزا",

    description:
      "روایتی خیالانگیز و ژرفنگر از تلاقی دو ذهن متضاد است؛ جاییکه فیلسوفی تبعیدشده با اندیشههایی رهاییبخش، در برابر روانپریشی گرفتار در تاریکی ایدئولوژی قرار میگیرد، و داستانی فلسفیروانی میسازد از جدال نور و سایه در بستر تاریخ.",
    cover: "/images/booksbanner/Book%20Image2.png",
  },
];

const narrators = [
  {
    id: 1,
    name: "هوتن شکیبا",
    image: "/images/Speakers/Hotan-shakiba.png",
  },
  {
    id: 2,
    name: "آرمان سوده",
    image: "/images/Speakers/Arman-soltanzadeh.png",
  },
  {
    id: 3,
    name: "پیام دهکردی",
    image: "/images/Speakers/Payam-dehkordi.png",
  },
  {
    id: 4,
    name: "رضا کیانیان",
    image: "/images/Speakers/Reza-kianian.png",
  },
  {
    id: 5,
    name: "رضا عمرانی",
    image: "/images/Speakers/Reza-omrani.png",
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
      <BookSection
        title="پرفروش ترین کتاب های روانشناسی"
        viewMoreLink="#"
        books={newBooks}
      />
      <AuthorBannerSlider banners={authorBanners} />
      <BookSection title="بهترین های صوتی" viewMoreLink="#" books={newBooks} />
      <BookSection
        title="جدید ترین کتاب های صوتی"
        viewMoreLink="#"
        books={newBooks}
      />
      <BookBannerSlider books={mockBooks} />
      <BookSection
        title="جدید ترین کتاب های صوتی"
        viewMoreLink="#"
        books={newBooks}
      />
      <BookSection
        title="جدید ترین کتاب های صوتی"
        viewMoreLink="#"
        books={newBooks}
      />
      <NarratorsSection narrators={narrators} />

      <BookSection
        title="تا ۹۰ درصد تخفیف:"
        viewMoreLink="#"
        books={newBooks}
      />
      <BookSection
        title="تا ۹۰ درصد تخفیف:"
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
        title="تازه های رمان های خارجی:"
        viewMoreLink="#"
        books={newBooks}
      />
      <BookSection
        title="پرفروشترین کتاب های روانشناسی:"
        viewMoreLink="#"
        books={newBooks}
      />
    </div>
  );
}
