
const collections = [
  {
    title: "New Arrivals",
    img: "https://images.unsplash.com/photo-1530054675519-3a27e21e6ee8?auto=format&fit=crop&w=900&q=80", // Running on track
    cta: "Shop New",
    link: "#",
  },
  {
    title: "Men's Sportswear",
    img: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=900&q=80", // Basketball/Men's wear
    cta: "Shop Men",
    link: "#shop-men",
  },
  {
    title: "Women's Sportswear",
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=900&q=80", // Yoga mat/women sportswear
    cta: "Shop Women",
    link: "#shop-women",
  },
];

const FeaturedCollections = () => (
  <section className="container py-14">
    <h2 className="font-black text-3xl md:text-4xl mb-8 text-center tracking-tight uppercase">
      Featured Collections
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {collections.map((col) => (
        <a
          key={col.title}
          href={col.link}
          className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl bg-white transition-shadow duration-200 relative flex flex-col"
        >
          <img
            src={col.img}
            alt={col.title}
            className="object-cover h-64 w-full group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-transparent to-transparent p-6 flex flex-col justify-end min-h-32">
            <div className="text-white font-extrabold text-2xl mb-2">{col.title}</div>
            <button className="bg-white text-black px-6 py-2 rounded-full uppercase font-bold shadow-md hover:bg-gray-100 transition group-hover:scale-105">
              {col.cta}
            </button>
          </div>
        </a>
      ))}
    </div>
  </section>
);

export default FeaturedCollections;
