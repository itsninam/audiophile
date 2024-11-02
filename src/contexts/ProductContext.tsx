import React, { createContext, useContext, useEffect, useState } from "react";
import data from "../data.json";

import { IProductContext } from "../interfaces/ProductContext";
import { Product } from "../interfaces/Product";
import { useLocation } from "react-router";

const ProductContext = createContext<IProductContext>({} as IProductContext);

function ProductProvider({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const locationName = location.pathname.split("/")[1];
  const [products, setProducts] = useState<Product[]>([]);
  const [featuredProduct, setFeaturedProduct] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(data);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <ProductContext.Provider
      value={{
        location,
        featuredProduct,
        products,
        locationName,
        setFeaturedProduct,
      }}
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
