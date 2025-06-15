
import { useState } from "react";
import { Menu, ShoppingCart } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Link } from "react-router-dom";
import { useCart } from "@/context/CartProvider";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Cart } from "./Cart";

const navItems = [
  {
    name: "MEN",
    collections: ["Tops", "Bottoms", "Hoodies & Jackets", "Accessories", "Sale"],
  },
  {
    name: "ACCESSORIES",
    collections: ["Bags", "Hats", "Shakers", "Socks"],
  }
];

const Header = () => {
  const [active, setActive] = useState<string | null>(null);
  const { cartCount } = useCart();

  return (
    <header className="sticky top-0 bg-background z-30 border-b border-border shadow-sm flex flex-col">
      <div className="flex items-center justify-between px-8 py-1 h-16">
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center">
          <Link to="/" className="font-orbitron font-black text-2xl tracking-widest uppercase hover:opacity-80 transition-opacity">
            DOLENGA
          </Link>
        </div>
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-md font-bold uppercase items-center">
          {navItems.map((item) => (
            <Popover key={item.name} open={active === item.name} onOpenChange={(open) => setActive(open ? item.name : null)}>
              <PopoverTrigger className="px-2 py-1 hover:text-primary focus:outline-none transition-colors">
                {item.name}
              </PopoverTrigger>
              <PopoverContent className="min-w-[190px] bg-white shadow-lg border border-border mt-2 z-50 text-black px-6 py-5">
                <ul className="flex flex-col gap-2">
                  {item.collections.map((col, i) => (
                    <li key={i}>
                      <a href="#" className="text-sm font-semibold hover:text-primary-foreground transition-colors">
                        {col}
                      </a>
                    </li>
                  ))}
                </ul>
              </PopoverContent>
            </Popover>
          ))}
          <Link to="/shop" className="px-2 py-1 hover:text-primary focus:outline-none transition-colors">Shop</Link>
        </nav>
        {/* Utility Links */}
        <div className="flex items-center gap-3 text-sm">
          <a href="#" className="hover:underline hidden md:inline">Help</a>
          <a href="#" className="hover:underline hidden md:inline">Find a Store</a>
          <Link to="/login" className="font-semibold text-primary hover:underline hidden md:inline">Sign In</Link>
          <Link to="/signup" className="font-semibold text-primary hover:underline hidden md:inline">Sign Up</Link>
          
          <Dialog>
            <DialogTrigger asChild>
              <button className="relative p-1 text-xl" aria-label="cart">
                <ShoppingCart size={24} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground">
                    {cartCount}
                  </span>
                )}
              </button>
            </DialogTrigger>
            <Cart />
          </Dialog>

          {/* Mobile burger */}
          <button className="md:hidden p-1 text-xl" aria-label="menu">
            <Menu size={28} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
