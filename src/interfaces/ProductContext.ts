import { Location } from "react-router-dom";
import { Product } from "./Product";

export interface IProductContext {
  location?: Location;
  products: Product[];
  featuredProduct: Product[];
  locationName: string;
  setFeaturedProduct: React.Dispatch<React.SetStateAction<Product[]>>;
}
