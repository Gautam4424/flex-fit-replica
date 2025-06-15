
import { useCart } from "@/context/CartProvider";
import { Product } from "@/data/products";
import { Button } from "./ui/button";

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  return (
    <div>
      <div className="bg-gray-100 border border-gray-200 rounded-lg group overflow-hidden aspect-[4/5] flex items-center justify-center p-2">
        <img
          src={product.img}
          alt={product.name}
          className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="mt-2 flex flex-col items-center gap-2">
        <h3 className="font-semibold text-base text-center">{product.name}</h3>
        <p className="text-muted-foreground font-bold">${product.price.toFixed(2)}</p>
        <Button onClick={() => addToCart(product)} className="w-full">
            Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
