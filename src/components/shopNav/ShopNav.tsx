import styles from "./ShopNav.module.scss";
import NavList from "../navigation/NavList";

function ShopNav() {
  return (
    <section className={`${styles.shopNavSection}`}>
      <NavList isShopNav={true} />
    </section>
  );
}

export default ShopNav;
