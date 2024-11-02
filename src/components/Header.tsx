import { useEffect } from "react";
import { useProduct } from "../contexts/ProductContext";
import styles from "./Header.module.scss";
import ProductDescription from "./product/ProductDescription";

function Header() {
  const { products, location, setFeaturedProduct } = useProduct();

  useEffect(() => {
    if (location!.pathname === "/") {
      const featuredProduct = products
        .filter((product) => product.category === "headphones")
        .filter((headphones) => headphones.new);
      setFeaturedProduct(featuredProduct);
    }
  }, [products, location, setFeaturedProduct]);

  return (
    <header className={styles.header}>
      <ProductDescription
        isFeaturedProduct={true}
        productDescription="Experience natural, life like audio and exceptional build quality made
          for the passionate music enthusiast."
        modifierClass="secondary"
      />
    </header>
  );
}

export default Header;
