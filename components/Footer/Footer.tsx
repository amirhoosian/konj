import React from "react";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="w-full bg-[#2D1B33] text-white font-sans dir-rtl">
      {/* کانتینر اصلی */}
      <div className="max-w-7xl md:max-w-none  mx-auto px-6 py-10 md:py-16">
        {/* بخش بالایی فوتر: چیدمان در موبایل عمودی و در دسکتاپ افقی */}
        <div className="flex flex-col md:flex-row md:justify-around md:items-start gap-8  border-b md:border-none border-gray-600/40 pb-8">
          {/* ستون اول (لوگو و لینک‌های اصلی) - در موبایل بالا قرار می‌گیرد */}
          <div className="flex flex-col items-end  md:w-auto shrink-0 order-1 md:order-4 px-2">
            <div className="flex  gap-2 mb-6">
              {/* جایگاه لوگوی گنج */}
              <Image
                src="/images/footer_konj.png"
                alt="لوگو گنج"
                width={80}
                height={70}
                className="md:w-[150px] max-md:h-[130px"
              />
            </div>
            <ul
              dir="rtl"
              className="space-y-3 list-disc text-right text-sm md:text-[20px] text-gray-300 "
            >
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  تماس با ما
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  پشتیبانی و سوالات متداول
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  درباره ی ما
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  حریم خصوصی
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  قوانین استفاده
                </a>
              </li>
            </ul>
          </div>

          {/* ستون دوم (دسته‌بندی پیشنهادی) */}
          {/* در موبایل به شکل یک منوی ساده نمایش داده می‌شود، در دسکتاپ لیست کامل */}
          <div className="flex flex-col md:flex-row md:justify-end gap-8 md:gap-29 order-2 md:order-3">
            <div className="w-full md:flex-1 md:flex md:flex-col md:justify-end md:items-end">
              {/* عنوان در موبایل همراه با فلش (طبق عکس) و در دسکتاپ بدون فلش */}
              <div className="flex justify-end gap-3  items-center  md:block  pb-2 md:pb-0 cursor-pointer md:cursor-default">
                <span className="md:hidden text-gray-400">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </span>
                <h3 className="text-lg whitespace-nowrap md:text-[13px] font-semibold md:mb-4">
                  دسته‌بندی پیشنهادی
                </h3>
              </div>
              {/* لیست آیتم‌ها: در موبایل مخفی (برای سادگی) یا می‌تونی با وضعیت کامپوننت بازش کنی، اینجا طبق دسکتاپ لیست شده */}
              <ul
                dir="rtl"
                className="hidden md:flex list-disc  flex-col space-y-2 text-sm text-gray-300 mt-4 md:mt-0"
              >
                <li>
                  <a href="#" className="hover:text-white">
                    کتاب رایگان
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    کتاب صوتی
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    کتاب کودک
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    کتاب تاریخ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    کتاب شعر
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    کتاب داستان
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    کتاب فلسفه
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    رمان عاشقانه
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    تاریخ ایران
                  </a>
                </li>
              </ul>
            </div>

            {/* ستون سوم (کتاب‌های پیشنهادی) */}
            <div className="w-full md:flex-1 md:flex md:flex-col md:items-end ">
              <div className="flex justify-end gap-3 items-center md:block  pb-3 md:pb-0 cursor-pointer md:cursor-default">
                <span className="md:hidden text-gray-400">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </span>
                <h3 className="text-lg whitespace-nowrap md:text-[14px] font-semibold md:mb-4">
                  کتاب‌های پیشنهادی
                </h3>
              </div>
              <ul
                dir="rtl"
                className="hidden md:flex list-disc flex-col  space-y-2 text-sm text-gray-300 mt-4 md:mt-0"
              >
                <li>
                  <a href="#" className="hover:text-white">
                    وقتی نیچه گریست
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    ملت عشق
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    اثر مرکب
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    نیمه تاریک وجود
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    صد سال تنهایی
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    بیشعوری
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* ستون چهارم (باکس دانلود اپلیکیشن) - در دسکتاپ سمت چپ قرار می‌گیرد */}
          <div className="w-full md:w-auto bg-white text-black rounded-2xl p-6 hidden md:block order-4 md:order-1">
            <div
              dir="rtl"
              className="flex justify-between items-center pb-4 mb-4 border-b border-gray-200"
            >
              <Image
                src="/images/Logo@2x.png"
                alt="لوگو گنج"
                width={78}
                height={33}
                className="h-8 w-auto"
              />
              <a
                href="#"
                className="text-xs text-gray-500 flex items-center gap-1"
              >
                دانلود اپلیکیشن
                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </a>
            </div>

            {/* دانلود موبایل */}
            <p className="text-[16px] font-semibold text-gray-700 mb-3 text-right">
              :دانلود نسخه ی موبایل
            </p>
            <div className="grid grid-cols-2 gap-3 mb-5">
              <a
                href="#"
                className="flex flex-col items-end gap-1.5  px-3 py-2.5 hover:bg-gray-50 transition-colors"
              >
                <p className="text-[10px] text-gray-400 leading-none">
                  :دریافت از
                </p>
                <Image
                  src="/images/icons/GooglePlay.png"
                  alt="Google Play"
                  width={108}
                  height={24}
                  className="h-6 w-auto"
                />
              </a>
              <a
                href="#"
                className="flex flex-col items-end gap-1.5  px-3 py-2.5 hover:bg-gray-50 transition-colors"
              >
                <p className="text-[10px] text-gray-400 leading-none">
                  :دریافت از
                </p>
                <Image
                  src="/images/icons/AppleStore.png"
                  alt="App Store"
                  width={96}
                  height={24}
                  className="h-6 w-auto"
                />
              </a>
            </div>

            {/* دانلود دسکتاپ */}
            <p className="text-[16px] font-semibold text-gray-700 mb-3 text-right">
              :دانلود نسخه ی دسکتاپ
            </p>
            <div className="grid grid-cols-2 gap-3">
              <a
                href="#"
                className="flex flex-col items-end gap-1.5  rounded-lg px-3 py-2.5 hover:bg-gray-50 transition-colors"
              >
                <p className="text-[10px] text-gray-400 leading-none">
                  دریافت نسخه
                </p>
                <Image
                  src="/images/icons/windows.png"
                  alt="Windows"
                  width={93}
                  height={24}
                  className="h-6 w-auto"
                />
              </a>
              <a
                href="#"
                className="flex flex-col items-end gap-1.5  px-3 py-2.5 hover:bg-gray-50 transition-colors"
              >
                <p className="text-[10px] text-gray-400 leading-none">
                  دریافت نسخه
                </p>
                <Image
                  src="/images/icons/msvOs.png"
                  alt="macOS"
                  width={96}
                  height={24}
                  className="h-6 w-auto"
                />
              </a>
            </div>
          </div>
        </div>

        {/* بخش پایینی فوتر (شبکه‌های اجتماعی و تلفن پشتیبانی) */}
        <div className="flex flex-col md:flex-row items-end md:justify-between md:px-13 pt-6 gap-4 text-sm text-gray-300 relative">
          <div className="absolute top-1 right-0 left-0 hidden md:flex w-[90%] h-px bg-white mb-6  md:mx-auto" />
          {/* تلفن پشتیبانی */}
          <div className="text-right order-1 md:order-2">
            <p className="text-[15px] text-white mb-1">: تلفن پشتیبانی</p>
            <p className="font-semibold">
              پشتیبانی ۲۴ ساعته <span className="mx-2">|</span> ۰۲۱-۴۵۶۱۲۰۹۵
            </p>
          </div>

          {/* شبکه‌های اجتماعی */}
          <div className="flex items-center mt-8 md:mt-0 gap-4 order-2 md:order-1">
            <div className="flex items-center gap-4">
              <a
                href="#"
                aria-label="تلگرام"
                className="opacity-90 hover:opacity-100 transition-opacity"
              >
                <Image
                  src="/images/icons/telegram-footer.png"
                  alt="Telegram"
                  width={18}
                  height={16}
                  className="h-4 w-auto"
                />
              </a>
              <a
                href="#"
                aria-label="اینستاگرام"
                className="opacity-90 hover:opacity-100 transition-opacity"
              >
                <Image
                  src="/images/icons/instagram-footer.png"
                  alt="Instagram"
                  width={24}
                  height={20}
                  className="h-5 w-auto"
                />
              </a>
              <a
                href="#"
                aria-label="لینکدین"
                className="opacity-90 hover:opacity-100 transition-opacity"
              >
                <Image
                  src="/images/icons/LinkedIn-footer.png"
                  alt="LinkedIn"
                  width={24}
                  height={20}
                  className="h-5 w-auto"
                />
              </a>
            </div>
            <span className="text-sm text-white whitespace-nowrap">
              :کنج در شبکه‌های اجتماعی
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
