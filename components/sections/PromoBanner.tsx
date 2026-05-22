import React from "react";

interface PromoBannerProps {
  backgroundImage: string;
  desktopBg: string;
  title: string;
  subtitle: string;
  discountText: string;
  buttonText: string;
  buttonLink: string;
}

export default function PromoBanner({
  backgroundImage,
  desktopBg,

  title,
  subtitle,
  discountText,
  buttonText,
  buttonLink,
}: PromoBannerProps) {
  return (
    <>
      <style>{`
        .promo-banner {
          background-image: url(${backgroundImage});
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
        @media (min-width: 768px) {
          .promo-banner {
            background-image: url(${desktopBg || backgroundImage});
             background-position: top;
          }
        }
      `}</style>

      <section
        className={`promo-banner w-auto rounded-xl overflow-hidden relative min-h-[300px] flex flex-col md:flex-row bg-no- mx-3 items-center md:items-start py-5 md:py-15  px-4 md:px-2 md:p-0 md:min-h-[466px]`}
      >
        {/* متن‌ها */}
        <div className="w-full text-right px-10">
          <h2 className="text-[16px]  md:text-6xl font-bold md:font-normal text-white mb-3">
            {title}
          </h2>

          <p className="text-[16px] md:text-6xl text-white opacity-90 mb-4">
            {subtitle}
          </p>

          <p className="text-[10px] md:text-4xl md:mt-14 text-white mb-4 md:mb-10 opacity-80">
            {discountText}
          </p>

          <a href={buttonLink} target="_blank" rel="noopener noreferrer">
            <button className="text-[13px] md:text-2xl bg-black text-white px-6 md:px-12 py-3 md:py-5 rounded-lg hover:bg-gray-800 transition">
              {buttonText}
            </button>
          </a>
        </div>
      </section>
    </>
  );
}
