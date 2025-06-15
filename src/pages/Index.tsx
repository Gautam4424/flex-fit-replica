
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedCollections from "@/components/FeaturedCollections";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="bg-background text-foreground font-inter min-h-screen flex flex-col overflow-x-hidden">
      {/* Promo Banner */}
      <div className="w-full bg-black text-white text-xs py-2 px-4 text-center tracking-wide uppercase font-semibold">
        FREE STANDARD SHIPPING when you spend $75+ on all orders
      </div>
      <Header />
      <main className="flex flex-col flex-1 bg-background ">
        <Hero />
        <FeaturedCollections />
        <ProductGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
