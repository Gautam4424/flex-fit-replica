
const Hero = () => {
  return (
    <section className="relative w-full h-[52vw] max-h-[720px] flex items-center justify-start bg-gray-200 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1517836357463-d25769a63512?auto=format&fit=crop&w=1600&q=80" // person working out
        alt="Sports collection"
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none"
        draggable={false}
      />
      <div className="relative z-10 max-w-2xl mx-12 flex flex-col gap-6">
        <h1 className="font-extrabold text-4xl sm:text-6xl tracking-tight text-white drop-shadow-lg uppercase">
          DOLENGA, <br /> SPORTSWEAR FOR YOU
        </h1>
        <div className="flex gap-4 mt-2">
          <a
            href="#discover"
            className="bg-transparent border-2 border-white font-bold px-8 py-3 rounded-full shadow-lg uppercase text-lg text-white hover:bg-white hover:text-black transition-colors hover:scale-105"
          >
            Discover
          </a>
        </div>
      </div>
      {/* overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/30 pointer-events-none"></div>
    </section>
  );
};

export default Hero;
