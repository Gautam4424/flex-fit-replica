
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const Shop = () => {
  return (
    <div className="bg-background text-foreground font-inter min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="container py-12">
          <h1 className="font-orbitron font-black text-4xl md:text-5xl mb-12 text-center tracking-tight uppercase">
            All Products
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
