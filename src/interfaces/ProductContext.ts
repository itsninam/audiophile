import { Product } from "./Product";

export interface IProductContext {
  location?: object;
  products: Product[];
  featuredProduct: Product | null;
  locationName: string;
}