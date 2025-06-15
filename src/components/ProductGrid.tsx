
import ProductCard from "./ProductCard";

const products = [
  {
    name: "Vital Seamless 2.0 T-Shirt",
    img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=500&q=80",
    price: "$35.00"
  },
  {
    name: "Apex Seamless Leggings",
    img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=500&q=80",
    price: "$50.00"
  },
  {
    name: "Arrival Shorts",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=500&q=80",
    price: "$25.00"
  },
  {
    name: "Adapt Fleck Sports Bra",
    img: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=500&q=80",
    price: "$30.00"
  },
  {
    name: "Studio Hoodie",
    img: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=500&q=80",
    price: "$55.00"
  },
  {
    name: "Crest Joggers",
    img: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=500&q=80",
    price: "$60.00"
  },
  {
    name: "Legacy Stringer",
    img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=500&q=80",
    price: "$22.00"
  },
  {
    name: "Training Crop Vest",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=500&q=80",
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
