"use client";

import React from "react";
import Image from "next/image";

// تعریف تایپ کتاب
export interface BookType {
  id: number | string;
  title: string;

  description: string;
  cover: string;
}
// تعریف پراپ‌های کامپوننت
interface BookBannerCardProps {
  book: BookType;
}

const BookBannerCard: React.FC<BookBannerCardProps> = ({ book }) => {
  return (
    // چیدمان بنر (RTL)
    <div
      className=" flex flex-col md:flex-row  gap-2  md:gap-10 bg-white rounded-2xl items-center  shadow-lg p-6 m-4 md:px-8 md:py-4  md:w-[590px] md:h-[233px]"
      dir="rtl"
    >
      <div className="w-48 md:w-auto  rounded-lg overflow-hidden">
        <div className="relative aspect-[1/1.5] md:h-[200px] md:aspect-[2/1.7] ">
          <Image
            src={book.cover}
            alt={book.title}
            fill
            className="object-cover md:object-contain"
            priority
          />
        </div>
      </div>

      <div className="flex-1 text-right flex flex-col justify-center md:items-start items-center ">
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-2">
          {book.title}
        </h2>

        <p className="text-gray-600 leading-relaxed mb-8 md:mb-2 text-justify line-clamp-3">
          {book.description}
        </p>

        <button className="w-full  bg-[#744D7E]  text-white font-bold py-3 px-8 rounded-xl transition-colors duration-300 shadow-md hover:shadow-lg">
          مطالعه کتاب
        </button>
      </div>
    </div>
  );
};

export default BookBannerCard;
