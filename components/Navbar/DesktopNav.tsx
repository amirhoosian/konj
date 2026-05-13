import {
  Book,
  BookOpen,
  ChevronDown,
  Search,
  ShoppingCart,
  User,
} from "lucide-react";
import NavIcon from "../../public/images/Logo@2x.png";
import Image from "next/image";
export default function DesktopNav() {
  return (
    <div
      dir="rtl"
      className="hidden md:flex items-center gap-3 px-4 py-3 bg-white border-b border-gray-100"
    >
      <Image
        src={NavIcon}
        alt="icon"
        width={70}
        height={70}
        className="w-auto h-auto"
      />

      <div className="flex-1 relative">
        <Search
          size={20}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-400"
          strokeWidth={1.5}
        />
        <input
          type="text"
          placeholder="کتاب؛ نویسنده یا موضوع را بنویس"
          className="w-full h-10 pl-4 pr-5 bg-white border border-purple-200 rounded-xl text-right text-gray-700 placeholder-purple-300 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-200 transition"
          dir="rtl"
        />
      </div>

      <button className="flex items-center gap-1.5 px-3 py-2 border border-purple-300 rounded-xl hover:bg-purple-50 transition">
        <span className="text-purple-600 text-sm font-medium">کتابخانه من</span>
        <Book size={18} strokeWidth={1.5} className="text-purple-500" />
      </button>

      <div className="relative p-2 border border-purple-300 rounded-xl hover:bg-purple-50 transition cursor-pointer">
        <ShoppingCart size={20} strokeWidth={1.5} className="text-purple-500" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[10px] rounded-full flex items-center justify-center">
          4
        </span>
      </div>

      <button className="flex items-center gap-1 py-1.5 px-2.5 border border-purple-300  rounded-[10px] hover:bg-purple-50 transition">
        <User size={20} strokeWidth={1.5} className="text-purple-500" />
        <ChevronDown size={16} strokeWidth={1.5} className="text-purple-500" />
      </button>
    </div>
  );
}
