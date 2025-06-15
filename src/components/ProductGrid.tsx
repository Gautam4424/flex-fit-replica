
import ProductCard from "./ProductCard";

const products = [
  {
    name: "Official Match Soccer Ball",
    img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=500&q=80", // Soccer ball
    price: "$35.00"
  },
  {
    name: "Pro Tennis Racket",
    img: "https://images.unsplash.com/photo-1517971071642-34a2d3ecc0b0?auto=format&fit=crop&w=500&q=80", // Tennis racket
    price: "$50.00"
  },
  {
    name: "Performance Running Shoes",
    img: "https://images.unsplash.com/photo-1580846681049-4522b355b107?auto=format&fit=crop&w=500&q=80", // Running shoes
    price: "$89.00"
  },
  {
    name: "Adjustable Dumbbells Set",
    img: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=500&q=80", // Dumbbells
    price: "$120.00"
  },
  {
    name: "Basketball Jersey",
    img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=500&q=80", // Basketball jersey
    price: "$55.00"
  },
  {
    name: "Sports Water Bottle",
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=500&q=80", // Water bottle
    price: "$18.00"
  },
  {
    name: "Professional Boxing Gloves",
    img: "https://images.unsplash.com/photo-1519865522146-c5838458b730?auto=format&fit=crop&w=500&q=80", // Boxing gloves
    price: "$60.00"
  },
  {
    name: "Yoga Mat",
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=500&q=80", // Yoga mat
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

