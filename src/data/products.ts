
export type Product = {
  id: number;
  name: string;
  img: string;
  price: number;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Black T-Shirt",
    img: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=500&q=80",
    price: 25.00
  },
  {
    id: 2,
    name: "Black Shorts",
    img: "https://images.unsplash.com/photo-1591195846794-257b4de88c83?auto=format&fit=crop&w=500&q=80",
    price: 40.00
  },
  {
    id: 3,
    name: "Black & White Jacket",
    img: "https://images.unsplash.com/photo-1591047139829-d91620644a3a?auto=format&fit=crop&w=500&q=80",
    price: 75.00
  },
  {
    id: 4,
    name: "Black Sweatpants",
    img: "https://images.unsplash.com/photo-1603570590338-3491b422616c?auto=format&fit=crop&w=500&q=80",
    price: 60.00
  },
  {
    id: 5,
    name: "Grey Hoodie",
    img: "https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?auto=format&fit=crop&w=500&q=80",
    price: 65.00
  },
  {
    id: 6,
    name: "White T-Shirt",
    img: "https://images.unsplash.com/photo-1622445283909-a46c1f4e86e4?auto=format&fit=crop&w=500&q=80",
    price: 25.00
  },
];
