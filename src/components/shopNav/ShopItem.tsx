import React from "react";
import styles from "./ShopNav.module.scss";
import { NavLink } from "react-router-dom";
import { NavRoute } from "../../routes/navRoutes";

function ShopItem({ route }: { route: NavRoute }) {
  return (
    <li className={styles.shopNavItem}>
      <NavLink to={route.routeLink} className={styles.shopNavLink}>
        <img
          src={route.routeImage}
          alt={route.routeName}
          className={styles.shopItemImage}
        />
        <p className={styles.itemName}>{route.routeName}</p>
        <div className={styles.shopContainer}>
          <p className={styles.shop}>shop</p>
          <img
            src="starter-code/assets/shared/desktop/icon-arrow-right.svg"
            alt="arrow right"
          />
        </div>
      </NavLink>
    </li>
  );
}

export default ShopItem;
