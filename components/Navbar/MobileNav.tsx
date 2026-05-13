"use client";

import { Search, ShoppingCart } from "lucide-react";
import NavIcon from "../../public/images/Logo@2x.png";
import Image from "next/image";
export default function MobileNav() {
  return (
    <div className="md:hidden flex w-full items-center gap-3 px-2 py-3 ">
      <div className="relative inline-flex border border-[#744D7E] p-1 rounded-xl">
        <ShoppingCart size={20} strokeWidth={1.5} className="text-purple-500" />
        <span className="absolute -top-3 -right-3 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
          4
        </span>
      </div>

      <div className="flex flex-1 items-center pl-2 pr-1 bg-white border border-[#744D7E] rounded-xl ">
        <Search size={20} className=" text-gray-400" strokeWidth={1} />
        <input
          type="text"
          placeholder="جستجو در کنج"
          className="w-full h-9 border-none outline-none text-right text-gray-700 placeholder-gray-400 focus:outline-none "
          dir="rtl"
        />
      </div>
      <Image
        src={NavIcon}
        alt="icon"
        width={40}
        height={40}
        className="w-auto h-auto"
      />
    </div>
  );
}
