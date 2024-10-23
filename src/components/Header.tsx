import { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import ProductDescription from "./ProductDescription";
import data from "../data.json";

export interface Product {
  id: number;
  slug: string;
  name: string;
  subName: string;
  image: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  category: string;
  categoryImage: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  new: boolean;
  price: number;
  description: string;
  features: string;
  others: {
    slug: string;
    name: string;
    image: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  }[];
}

function Header() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(data);
  }, []);

  return (
    <header className={styles.header}>
      <ProductDescription
        products={products}
        isFeaturedProduct={true}
        productDescription="Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast."
      />
    </header>
  );
}

export default Header;
