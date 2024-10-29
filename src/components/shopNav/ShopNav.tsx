import styles from "./ShopNav.module.scss";
import navRoutes from "../../routes/navRoutes";
import ShopItem from "./ShopItem";

function ShopNav() {
  const shopRoutes = navRoutes.slice(1);

  return (
    <section className={styles.shopNavSection}>
      <nav className={`${styles.shopNav} wrapper`}>
        <ul className={styles.shopNavList}>
          {shopRoutes.map((route) => {
            return <ShopItem route={route} key={route.routeName} />;
          })}
        </ul>
      </nav>
    </section>
  );
}

export default ShopNav;
