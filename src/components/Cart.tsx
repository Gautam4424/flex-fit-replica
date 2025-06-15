
import { useCart } from "@/context/CartProvider";
import { Button } from "./ui/button";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogContent,
} from "@/components/ui/dialog";

export function Cart() {
  const { cartItems, removeFromCart, updateQuantity, cartCount, cartTotal } = useCart();

  const handleCheckout = () => {
    toast.success("Checkout is not implemented yet.", {
      description: "This is a demo feature.",
    });
  };
  
  return (
    <DialogContent className="sm:max-w-[425px] flex flex-col h-full sm:h-auto">
      <DialogHeader>
        <DialogTitle>Shopping Cart ({cartCount})</DialogTitle>
        <DialogDescription>
          Review your items before checkout.
        </DialogDescription>
      </DialogHeader>
      {cartItems.length === 0 ? (
        <div className="flex-1 flex items-center justify-center min-h-[200px]">
          <p className="text-muted-foreground">Your cart is empty.</p>
        </div>
      ) : (
        <div className="flex-1 overflow-y-auto -mx-6 px-6">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center gap-4 py-4 border-b">
                <img src={item.img} alt={item.name} className="w-16 h-20 object-cover rounded" />
                <div className="flex-1">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-muted-foreground">${item.price.toFixed(2)}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                        className="w-16 border rounded px-2 py-1 text-center"
                    />
                  </div>
                </div>
                <Button variant="ghost" size="icon" onClick={() => removeFromCart(item.id)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
        </div>
      )}
      <DialogFooter className="mt-auto pt-4 border-t">
        <div className="w-full flex justify-between items-center">
            <span className="font-bold text-lg">Subtotal:</span>
            <span className="font-bold text-lg">${cartTotal.toFixed(2)}</span>
        </div>
        <Button onClick={handleCheckout} className="w-full mt-2" disabled={cartItems.length === 0}>
            Proceed to Checkout
        </Button>
      </DialogFooter>
    </DialogContent>
  );
}
