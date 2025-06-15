
const Hero = () => {
  return (
    <section className="relative w-full h-[52vw] max-h-[720px] flex items-center justify-start bg-gray-200 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=1600&q=80" // Basketball court
        alt="Sports collection"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
        draggable={false}
      />
      <div className="relative z-10 max-w-2xl mx-12 flex flex-col gap-6">
        <h1 className="font-extrabold text-4xl sm:text-6xl tracking-tight text-white drop-shadow-lg">
          PERFORMANCE SPORTS GEAR<br /> ENGINEERED FOR ATHLETES.
        </h1>
        <p className="text-2xl text-white/90 font-medium max-w-xl mb-2">
          Everything you need to reach your goals — shop our sports collections now.
        </p>
        <div className="flex gap-4 mt-2">
          <a
            href="#shop-men"
            className="bg-white font-bold px-8 py-3 rounded-full shadow-lg uppercase text-lg text-black hover:bg-gray-100 transition-colors hover:scale-105"
          >
            Shop Men
          </a>
          <a
            href="#shop-women"
            className="bg-primary text-white font-bold px-8 py-3 rounded-full shadow-lg uppercase text-lg ml-2 hover:bg-black transition-colors hover:scale-105"
          >
            Shop Women
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
          <path d="M12 5v14m0 0-7-7m7 7 7-7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      {/* overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/30 pointer-events-none"></div>
    </section>
  );
};

export default Hero;
