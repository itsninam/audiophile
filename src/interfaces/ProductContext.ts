import { Location } from "react-router-dom";
import { Product } from "./Product";
import { CartItems } from "./CartItems";

export interface IProductContext {
  location?: Location;
  products: Product[];
  featuredProduct: Product[];
  locationName: string;
  setFeaturedProduct: React.Dispatch<React.SetStateAction<Product[]>>;
  cartItems: CartItems[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItems[]>>;
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}
