
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="w-full bg-[#f2f2f2] py-20">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col items-start px-4">
          <h1 className="font-orbitron font-black text-6xl md:text-8xl tracking-tighter text-black uppercase leading-none">
            DOLENGA
            <br />
            WEAR
          </h1>
          <p className="mt-4 text-base text-gray-700 max-w-sm">
            Brand of functional clothing for an active lifestyle.
          </p>
           <Link
            to="/shop"
            className="mt-8 bg-white border border-black font-bold px-8 py-3 rounded-full shadow-lg uppercase text-sm text-black hover:bg-black hover:text-white transition-colors"
          >
            To Catalog
          </Link>
        </div>
        <div className="flex justify-center md:justify-end px-4">
           <img
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80"
            alt="DOLENGA WEAR model"
            className="max-h-[60vh] w-auto object-contain"
           />
        </div>
      </div>
    </section>
  );
};

export default Hero;
