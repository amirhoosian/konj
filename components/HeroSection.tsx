

export default function HeroSection() {
 
  return (
    <section dir="rtl" className={`pb-55 md:rounded-2xl
    bg-[url('/images/Banner5.png')]
        md:bg-[url('/images/Banner-desktop.png')]
    bg-cover bg-no-repeat`}>
      <div className="flex flex-col gap-4 md:gap-8 px-5 md:px-20 md:py-20 py-5">
        <h1 className="text-2xl md:text-6xl font-bold text-white">
          کنج؛ کتابخانه شخصی شما
        </h1>
        <p className="text-white text-[15px] md:text-[30px]">باز بیش از ده هزار کتاب الکترونیک در موضوعات مختلف</p>
        <button 
      className="w-32.75 md:w-fit flex items-center justify-center bg-[#8e4596] md:bg-black text-white md:py-5  py-2 md:px-15 px-2 md:text-xl text-[10px] rounded-xl border border-[#8e4596]"
    >
      
      <span>همین حالا بشنوید</span>
      
    </button>
      </div>
    </section>
  );
}
