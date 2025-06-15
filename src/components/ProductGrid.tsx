
import ProductCard from "./ProductCard";

const products = [
  {
    name: "Official Match Soccer Ball",
    img: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?auto=format&fit=crop&w=500&q=80", // placeholder sports
    price: "$35.00"
  },
  {
    name: "Pro Tennis Racket",
    img: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=500&q=80", // placeholder sports
    price: "$50.00"
  },
  {
    name: "Performance Running Shoes",
    img: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=500&q=80", // placeholder running/sports
    price: "$89.00"
  },
  {
    name: "Adjustable Dumbbells Set",
    img: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=500&q=80", // placeholder fitness
    price: "$120.00"
  },
  {
    name: "Basketball Jersey",
    img: "https://images.unsplash.com/photo-1530054675519-3a27e21e6ee8?auto=format&fit=crop&w=500&q=80", // placeholder basketball
    price: "$55.00"
  },
  {
    name: "Sports Water Bottle",
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=500&q=80", // water bottle
    price: "$18.00"
  },
  {
    name: "Professional Boxing Gloves",
    img: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=500&q=80", // placeholder training
    price: "$60.00"
  },
  {
    name: "Yoga Mat",
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=500&q=80", // yoga mat placeholder
    price: "$28.00"
  }
];

const ProductGrid = () => (
  <section className="container py-16">
    <h2 className="font-black text-3xl md:text-4xl mb-8 text-center tracking-tight uppercase">Best Sellers</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      {products.map((product, idx) => (
        <ProductCard key={idx} product={product} />
      ))}
    </div>
  </section>
);

export default ProductGrid;
