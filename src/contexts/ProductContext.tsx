import React, { createContext, useContext, useEffect, useState } from "react";
import data from "../data.json";

import { IProductContext } from "../interfaces/ProductContext";
import { Product } from "../interfaces/Product";
import { useLocation } from "react-router";

const ProductContext = createContext<IProductContext>({} as IProductContext);

function ProductProvider({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const locationName = location.pathname.replace(/\//, "");
  const [products, setProducts] = useState<Product[]>([]);
  const [featuredProduct, setFeaturedProduct] = useState<Product | null>(null);

  useEffect(() => {
    setProducts(data);
  }, []);

  useEffect(() => {
    if (location.pathname === "/") {
      const featuredProduct = products
        .filter((product) => product.category === "headphones")
        .find((headphones) => headphones.new);
      setFeaturedProduct(featuredProduct || null);
    } else {
      const featuredProduct = products
        .filter((product) => product.category === locationName)
        .find((headphones) => headphones.new);
      setFeaturedProduct(featuredProduct || null);
    }
  }, [products, location.pathname, locationName]);

  return (
    <ProductContext.Provider
      value={{ location, featuredProduct, products, locationName }}
    >
      {children}
    </ProductContext.Provider>
  );
}

function useProduct() {
  const context = useContext(ProductContext);
  return context;
}
export { ProductProvider, useProduct };
