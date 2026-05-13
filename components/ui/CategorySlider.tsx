"use client"

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import Image from 'next/image'

const categories = [
  { id: 1, icon: '🎧', label: 'کتاب صوتی', img: '/images/mobile-category-icone.png' },
  { id: 2, icon: '📖', label: 'کتاب متنی', img: '/images/mobile-category-icone2.png' },
  { id: 3, icon: '📜', label: 'تاریخی', img: '/images/mobile-category-icone3.png' },
  { id: 4, icon: '🌍', label: 'رمان خارجی', img: '/images/mobile-category-icone6.png' },
  { id: 5, icon: '💡', label: 'علمی', img: '/images/mobile-category-icone4.png' },
  { id: 6, icon: '🎭', label: 'داستان', img: '/images/mobile-category-icone5.png' },
]

// موبایل — اسلایدر
const CategorySliderMobile = () => {
  return (
    <div className="px-4 md:hidden">
      <Swiper
        spaceBetween={16}
        slidesPerView="auto"
        freeMode={true}
        grabCursor={true}
        watchSlidesProgress={true}
        className="!py-2"
      >
        {categories.map((cat) => (
          <SwiperSlide key={cat.id} className="!w-auto my-5">
            <div className="w-32 flex flex-col items-center py-5 px-2 gap-2 border-7 rounded-3xl border-dotted border-gray-300 cursor-pointer group">
              <div className="relative flex flex-col gap-2 w-32 items-center rounded-xl overflow-hidden">
                {cat.img ? (
                  <Image
                    src={cat.img}
                    alt={cat.label}
                    width={60}
                    height={60}
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-200">
                    <span className="text-4xl">{cat.icon}</span>
                  </div>
                )}
              </div>
              <span className="text-sm font-medium">{cat.label}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

const CategoryGridDesktop = () => {
  return (
    <div className="hidden md:grid w-fit grid-cols-6 gap-4 px-3 py-6 mx-auto">
      {categories.map((cat) => (
        <div 
        dir='rtl'
          key={cat.id} 
          className="flex items-center gap-6 py-3 px-4 pl-5 border-2 border-dotted border-gray-300 rounded-xl cursor-pointer hover:border-[#8e4596] transition-colors"
        >
          {cat.img ? (
            <Image
              src={cat.img}
              alt={cat.label}
              width={40}
              height={40}
              className="object-cover"
            />
          ) : (
            <span className="text-6xl">{cat.icon}</span>
          )}
          <span className="text-xl font-medium whitespace-nowrap">{cat.label}</span>
        </div>
      ))}
    </div>
  )
}

const CategorySlider = () => {
  return (
    <div>
      <CategorySliderMobile />
      <CategoryGridDesktop />
    </div>
  )
}

export default CategorySlider
