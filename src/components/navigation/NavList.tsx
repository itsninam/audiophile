import styles from "./Nav.module.scss";
import stylesShopNav from "../shopNav/ShopNav.module.scss";
import stylesFooter from "../navigation/Nav.module.scss";

import navigationRoutes from "../../routes/navRoutes";
import { NavLink } from "react-router-dom";
import ShopNavMenu from "../shopNav/ShopNavMenu";

function NavList({
  isShopNav,
  isFooterNav,
}: {
  isShopNav?: boolean;
  isFooterNav?: boolean;
}) {
  const navRoutes = isShopNav ? navigationRoutes.slice(1) : navigationRoutes;

  const shopNav = isShopNav ? `${stylesShopNav.shopNav} wrapper` : "";
  const footerNav = isFooterNav ? `${stylesFooter.footer} ${styles.nav}` : "";

  return (
    <nav className={`${shopNav} ${footerNav}`}>
      <ul
        className={`${isShopNav ? stylesShopNav.shopNavList : styles.navList}`}
      >
        {navRoutes.map((route) => {
          return (
            <li
              key={route.routeName}
              className={`${isShopNav ? stylesShopNav.shopNavItem : ""}`}
            >
              <NavLink
                className={`${
                  isShopNav ? stylesShopNav.shopNavLink : styles.navLink
                }`}
                to={route.routeLink}
              >
                {isShopNav ? <ShopNavMenu route={route} /> : route.routeName}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default NavList;
