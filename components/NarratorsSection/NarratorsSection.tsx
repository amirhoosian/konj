"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import NarratorCard from "../NarratorsSection/NarratorCard";

type Narrator = {
  id: number;
  name: string;
  image: string;
};

type Props = {
  narrators: Narrator[];
};

export default function NarratorsSection({ narrators }: Props) {
  return (
    <section dir="rtl" className="space-y-4 px-4 md:px-auto">
      <h2 className="text-lg font-bold">صداهای ماندگار</h2>

      <Swiper
        spaceBetween={16}
        slidesPerView={1.4}
        breakpoints={{
          640: {
            slidesPerView: 2.2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {narrators.map((narrator) => (
          <SwiperSlide key={narrator.id}>
            <NarratorCard {...narrator} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
