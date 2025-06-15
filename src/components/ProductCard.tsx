
type ProductCardProps = {
  product: {
    name: string;
    img: string;
    price: string;
  };
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow group overflow-hidden relative hover:shadow-2xl transition-shadow duration-200 flex flex-col">
      <div className="overflow-hidden aspect-[4/5] relative">
        <img
          src={product.img}
          alt={product.name}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute right-2 top-2 bg-black/70 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Quick Add
        </div>
      </div>
      <div className="flex-1 p-4 flex flex-col gap-2">
        <h3 className="font-bold text-sm md:text-base tracking-tight min-h-[2.5em]">
          {product.name}
        </h3>
        <div className="text-lg font-black">{product.price}</div>
        <button className="mt-auto bg-primary text-white py-2 rounded-full font-bold uppercase w-full shadow hover:bg-black transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
