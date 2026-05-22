import Image from 'next/image';
import { Star, MessageCircle } from 'lucide-react';

interface BookCardProps {
  book: {
    id: number;
    title: string;
    author: string;
    cover: string;
    price: number;
    originalPrice?: number;
    discount?: number;
    rating: number;
    reviews?: number;
  };
}

export default function BookCard({ book }: BookCardProps) {
  return (
    <div className="min-w-[160px] md:min-w-[200px] bg-white rounded-2xl  shadow-md hover:shadow-lg transition-shadow cursor-pointer">
      {/* Cover */}
      <div className='flex bg-gray-200 mx-auto p-4 relative items-center justify-center rounded-t-xl'>
        <div className=" aspect-[3/4]   rounded-xl overflow-hidden  mb-3">
        <Image
          src={book.cover}
          alt={book.title}
          width={125}
          height={198}
          className=" object-cover rounded-xl"
        />
        {book.discount && (
          <span className="absolute top-4 right-0 bg-red-500 text-white text-xs px-2 py-1 rounded-l-lg font-bold">
            {book.discount}%
          </span>
        )}
      </div>
      <div className='flex justify-center px-2 py-1 w-fit absolute bottom-2 left-0 bg-[#787878] rounded-r-2xl'>
              <Image src="/images/books/Icon‌BookCard.png" width={10} height={8} alt='icon book card' className=''/>

      </div>
      </div>
      

      {/* Info */}
      <div className="w-full mt-3 space-y-1 flex flex-col gap-2 px-3">
        <h3 className="text-sm font-semibold text-black line-clamp-2">
          {book.title}
        </h3>
        <p className="text-xs text-gray-500">{book.author}</p>
        
        {/* Rating */}
        <div className="flex items-center gap-2 text-amber-500">
          <Star className="w-3 h-3 fill-current" />
          <span className="text-xs text-gray-600">{book.rating}</span>
          {book.reviews && (
            <span className="text-xs text-gray-400">({book.reviews})</span>
          )}
        </div>

<hr className="my-1 border-t-2 border-gray-300" />

        <div dir='ltr' className="flex items-center justify-between pb-5">
          <span className="text-[10px] font-bold text-[#8e4596]">
            {book.price.toLocaleString('fa-IR')} تومان
          </span>
          {book.originalPrice && (
            <span className="text-xs text-gray-400 line-through">
              {book.originalPrice.toLocaleString('fa-IR')}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}