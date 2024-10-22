import { useEffect } from "react";
import styles from "./Header.module.scss";
import ProductDescription from "./ProductDescription";

function Header() {
  useEffect(() => {
    // console.log(window.innerHeight);
    // const header = document.querySelector("header");
    // header!.style.height = window.innerHeight + 90 + "px";
  }, []);

  return (
    <header className={styles.header}>
      <ProductDescription
        isNewProduct={false}
        productName="XX99 Mark II Headphones"
        productDescription="Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast."
      />
    </header>
  );
}

export default Header;
