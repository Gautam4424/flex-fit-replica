
import ProductCard from "./ProductCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { products } from "@/data/products";
import { Link } from "react-router-dom";

const bestSellers = products.slice(0, 6);

const ProductGrid = () => (
  <section id="bestsellers" className="container py-16">
    <div className="flex justify-between items-center mb-8">
      <h2 className="font-orbitron font-black text-3xl md:text-4xl tracking-tight uppercase">Best Sellers</h2>
      <Link
        to="/shop"
        className="bg-white border border-black font-bold px-8 py-2 rounded-full shadow-sm uppercase text-xs text-black hover:bg-black hover:text-white transition-colors hidden md:block"
      >
        To Catalog
      </Link>
    </div>
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent>
        {bestSellers.map((product) => (
          <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/4">
            <div className="p-1">
              <ProductCard product={product} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex"/>
      <CarouselNext className="hidden md:flex"/>
    </Carousel>
    <div className="text-center mt-12">
      <Link to="/shop">
        <button className="bg-gray-200 text-black px-10 py-3 rounded-full uppercase font-bold shadow-md hover:bg-gray-300 transition">
          Shop All Products!
        </button>
      </Link>
    </div>
  </section>
);

export default ProductGrid;
