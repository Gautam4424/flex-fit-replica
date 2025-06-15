
import ProductCard from "./ProductCard";

const products = [
  {
    name: "Official Match Soccer Ball",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=80",
    price: "$35.00"
  },
  {
    name: "Pro Tennis Racket",
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=500&q=80",
    price: "$50.00"
  },
  {
    name: "Performance Running Shoes",
    img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=500&q=80",
    price: "$89.00"
  },
  {
    name: "Adjustable Dumbbells Set",
    img: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=500&q=80",
    price: "$120.00"
  },
  {
    name: "Basketball Jersey",
    img: "https://images.unsplash.com/photo-1508766206392-8bd5cf550d1d?auto=format&fit=crop&w=500&q=80",
    price: "$55.00"
  },
  {
    name: "Sports Water Bottle",
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=500&q=80",
    price: "$18.00"
  },
  {
    name: "Professional Boxing Gloves",
    img: "https://images.unsplash.com/photo-1457972729784-dc26133c7e86?auto=format&fit=crop&w=500&q=80",
    price: "$60.00"
  },
  {
    name: "Yoga Mat",
    img: "https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?auto=format&fit=crop&w=500&q=80",
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
