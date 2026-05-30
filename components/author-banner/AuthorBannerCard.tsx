"use client";

import Image from "next/image";

export interface AuthorBannerData {
  id: string;

  title: string;

  authorName: string;

  backgroundImage: {
    mobile: string;
    desktop: string;
  };

  authorImage?: string;

  buttonText?: string;
  buttonHref?: string;
}

interface Props {
  data: AuthorBannerData;
}

export default function AuthorBannerCard({ data }: Props) {
  return (
    <>
      <style jsx>{`
        .author-banner {
          background-image: url(${data.backgroundImage.mobile});
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        @media (min-width: 768px) {
          .author-banner {
            background-image: url(${data.backgroundImage.desktop});
            background-position: center;
          }
        }
      `}</style>

      <div className="author-banner relative w-full h-[420px] md:h-[274px] rounded-2xl overflow-hidden flex flex-col">
        <div className="relative z-10 h-full flex flex-col  p-6 md:p-10 md:pr-[230px] text-black">
          <p className="text-bold text-[22px] md:text-base opacity-80 mb-2">
            {data.title}
          </p>

          <div className="mt-3 flex items-center justify-between">
            <span className="text-sm md:text-base text-black font-medium">
              {data.authorName}
            </span>
          </div>
        </div>
        {data.buttonText && (
          <a
            href={data.buttonHref || "#"}
            className="absolute left-5 bottom-10 text-[15px] text-black text-bold md:text-base  oacity-90 hover:opacity-100"
          >
            {data.buttonText}
          </a>
        )}
      </div>
    </>
  );
}
