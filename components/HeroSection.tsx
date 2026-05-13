import { ArrowLeft } from "lucide-react";

export default function HeroSection() {
 
  return (
    <section dir="rtl" className={`min-h-150
    bg-[url('/images/Banner5.png')]
        md:bg-[url('/images/Banner-desktop.png')]
    bg-cover bg-no-repeat`}>
      <div className="flex flex-col gap-8 px-8 md:px-20 md:py-20 py-16">
        <h1 className="text-3xl md:text-6xl font-bold text-white">
          کنج؛ کتابخانه شخصی شما
        </h1>
        <p className="text-white text-[17px] md:text-[25px]">باز بیش از ده هزار کتاب الکترونیک در موضوعات مختلف</p>
        <button 
      className="w-fit inline-flex items-center gap-3 bg-[#8e4596] md:bg-black text-white md:py-5  py-3 md:px-8 px-4 text-sm rounded-xl border border-[#8e4596]"
    >
      
      <span>همین حالا بشنوید</span>
      <ArrowLeft className="w-5 h-5" />
    </button>
      </div>
    </section>
  );
}
