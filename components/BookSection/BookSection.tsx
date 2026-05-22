'use client';

import { useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import BookCard from './BookCard/BookCard';


interface Book {
  id: number;
  title: string;
  author: string;
  cover: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  reviews?: number;
}

interface BookSectionProps {
  title: string;
  viewMoreLink: string;
  books: Book[];
}

export default function BookSection({ title, viewMoreLink, books }: BookSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 220;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section dir="rtl" className="py-3 md:py-8 px-4 md:px-8">
      {/* Header */}
      <div className="w-full flex items-center justify-between mb-6">
        <h2 className="text-[15px] md:text-2xl font-bold text-black">{title}</h2>
        <a 
          href={viewMoreLink}
          className="text-sm text-[#8e4596] hover:underline"
        >
          مشاهده بیشتر
        </a>
      </div>

      {/* Slider */}
      <div className="relative">
        {/* Scroll Buttons - Only on Desktop */}
        <button
          onClick={() => scroll('right')}
          className="md:flex hidden absolute -right-5 top-[50%] -translate-y-1/2 z-10 w-10 h-10 items-center justify-center bg-white shadow-lg rounded-full hover:bg-gray-50"
        >
          <ArrowRight className="w-5 h-5 text-gray-600" />
        </button>
        
        <button
          onClick={() => scroll('left')}
          className="md:flex hidden absolute -left-5 top-[50%] -translate-y-1/2 z-10 w-10 h-10 items-center justify-center bg-white shadow-lg rounded-full hover:bg-gray-50"
        >
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </button>

        {/* Cards Container */}
        <div 
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide pb-2 px-2"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
}
