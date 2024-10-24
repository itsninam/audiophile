import styles from "./Header.module.scss";
import ProductDescription from "./ProductDescription";

function Header() {
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
