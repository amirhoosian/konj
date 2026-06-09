"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import BookBannerCard, { BookType } from "./BookBannerCard";

interface BookBannerSliderProps {
  books?: BookType[];
}

const BookBannerSlider: React.FC<BookBannerSliderProps> = ({ books }) => {
  return (
    <div
      dir="rtl"
      className="w-full  mx-auto relative [&_.swiper-button-next]:text-purple-600 [&_.swiper-button-prev]:text-purple-600 [&_.swiper-pagination-bullet-active]:bg-purple-600"
    >
      <Swiper
        dir="rtl"
        breakpoints={{
          0: {
            slidesPerView: 1.2,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 2.5,
            spaceBetween: 5,
          },
        }}
        className="book-banner-swiper rounded-2xl"
      >
        {books?.map((book) => (
          <SwiperSlide key={book.id}>
            <BookBannerCard book={book} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BookBannerSlider;
