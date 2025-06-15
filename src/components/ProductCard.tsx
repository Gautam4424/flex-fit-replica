
type ProductCardProps = {
  product: {
    name: string;
    img: string;
    price: string;
  };
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="bg-gray-100 border border-gray-200 rounded-lg group overflow-hidden aspect-[4/5] flex items-center justify-center p-2">
      <img
        src={product.img}
        alt={product.name}
        className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-105"
      />
    </div>
  );
};

export default ProductCard;
