
import ProductCard from "./ProductCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const products = [
  {
    name: "Black T-Shirt",
    img: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=500&q=80",
    price: "$25.00"
  },
  {
    name: "Black Shorts",
    img: "https://images.unsplash.com/photo-1588289387214-99a0937452a3?auto=format&fit=crop&w=500&q=80",
    price: "$40.00"
  },
  {
    name: "Black & White Jacket",
    img: "https://images.unsplash.com/photo-1594235489782-ce9a7a6a7457?auto=format&fit=crop&w=500&q=80",
    price: "$75.00"
  },
  {
    name: "Black Sweatpants",
    img: "https://images.unsplash.com/photo-1624323282223-9994a501e479?auto=format&fit=crop&w=500&q=80",
    price: "$60.00"
  },
  {
    name: "Grey Hoodie",
    img: "https://images.unsplash.com/photo-1620799140408-7c62b0955855?auto=format&fit=crop&w=500&q=80",
    price: "$65.00"
  },
  {
    name: "White T-Shirt",
    img: "https://images.unsplash.com/photo-1618354691219-880e60370354?auto=format&fit=crop&w=500&q=80",
    price: "$25.00"
  },
];

const ProductGrid = () => (
  <section id="bestsellers" className="container py-16">
    <div className="flex justify-between items-center mb-8">
      <h2 className="font-orbitron font-black text-3xl md:text-4xl tracking-tight uppercase">Best Sellers</h2>
      <a
        href="#catalog"
        className="bg-white border border-black font-bold px-8 py-2 rounded-full shadow-sm uppercase text-xs text-black hover:bg-black hover:text-white transition-colors hidden md:block"
      >
        To Catalog
      </a>
    </div>
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent>
        {products.map((product, idx) => (
          <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/4">
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
      <button className="bg-gray-200 text-black px-10 py-3 rounded-full uppercase font-bold shadow-md hover:bg-gray-300 transition">
        Shop Stylish Designs!
      </button>
    </div>
  </section>
);

export default ProductGrid;
