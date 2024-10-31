import { NavRoute } from "../../routes/navRoutes";
import styles from "../shopNav/ShopNav.module.scss";

function ShopNavMenu({ route }: { route: NavRoute }) {
  return (
    <>
      <img
        src={`/${route.routeImage}`}
        alt={route.routeName}
        className={styles.shopItemImage}
      />
      <p className={styles.itemName}>{route.routeName}</p>
      <div className={styles.shopContainer}>
        <p className={styles.shop}>shop</p>
        <img
          src="/starter-code/assets/shared/desktop/icon-arrow-right.svg"
          alt="arrow right"
        />
      </div>
    </>
  );
}

export default ShopNavMenu;
