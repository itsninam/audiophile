import React, { createContext, useContext, useEffect, useState } from "react";
import data from "../data.json";

import { IProductContext } from "../interfaces/ProductContext";
import { Product } from "../interfaces/Product";
import { useLocation } from "react-router";
import { CartItems } from "../interfaces/CartItems";

const ProductContext = createContext<IProductContext>({} as IProductContext);

function ProductProvider({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const locationName = location.pathname.split("/")[1];
  const [products, setProducts] = useState<Product[]>([]);
  const [featuredProduct, setFeaturedProduct] = useState<Product[]>([]);
  const [cartItems, setCartItems] = useState<CartItems[]>(
    JSON.parse(localStorage.getItem("cartItems") || "[]")
  );
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    setProducts(data);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setQuantity(0);
  }, [location]);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <ProductContext.Provider
      value={{
        location,
        featuredProduct,
        products,
        locationName,
        setFeaturedProduct,
        cartItems,
        setCartItems,
        quantity,
        setQuantity,
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
