
const FeaturedCollections = () => (
  <section className="container py-16">
    <h2 className="font-orbitron font-black text-3xl md:text-4xl mb-8 text-center tracking-tight uppercase">
      Summer Collection
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-[60vh]">
      <div className="relative group rounded-lg overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1576871335928-694208453383?auto=format&fit=crop&w=900&q=80"
          alt="Collection 1"
          className="object-cover h-full w-full transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-8 left-8 text-white uppercase font-semibold text-lg flex flex-col gap-1">
            <span>T-shirts</span>
            <span>Hoodies</span>
            <span>Sweatshirts</span>
            <span>Bombers</span>
            <span>Windbreakers</span>
        </div>
      </div>
      <div className="relative group rounded-lg overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1621200373338-093719045543?auto=format&fit=crop&w=900&q=80"
          alt="Collection 2"
          className="object-cover h-full w-full transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute bottom-8 right-8 text-right">
            <h3 className="text-white font-orbitron font-black text-4xl uppercase">Summer</h3>
            <h3 className="text-white font-orbitron font-black text-4xl uppercase">Collection</h3>
            <p className="text-white text-lg mt-1">2025</p>
        </div>
      </div>
    </div>
  </section>
);

export default FeaturedCollections;
