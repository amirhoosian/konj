// components/author-banner-slider/AuthorBannerSlider.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// فایل‌های CSS رسمی Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import AuthorBannerCard, {
  AuthorBannerData,
} from "../author-banner/AuthorBannerCard";

interface AuthorBannerSliderProps {
  banners: AuthorBannerData[];
  autoPlayDelay?: number;
}

export default function AuthorBannerSlider({
  banners,
}: AuthorBannerSliderProps) {
  if (!banners.length) return null;

  return (
    <div className="w-full">
      <Swiper
        dir="rtl"
        spaceBetween={40}
        breakpoints={{
          0: {
            slidesPerView: 1.2,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
        }}
        className="rounded-xl shadow-2xl"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <AuthorBannerCard data={banner} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
