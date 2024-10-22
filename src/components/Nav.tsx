import navRoutes from "../routes/navRoutes";
import { NavLink } from "react-router-dom";

import styles from "./Nav.module.scss";
import logo from "../assets/shared/desktop/logo.svg";
import cart from "../assets/shared/desktop/icon-cart.svg";
import mobileMenu from "../assets/shared/tablet/icon-hamburger.svg";

function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={`${styles.wrapper} wrapper`}>
        <button className={styles.mobileMenu}>
          <img src={mobileMenu} alt="mobile menu" />
        </button>
        <h1>
          <NavLink to="/">
            <img src={logo} alt="audiophile" />
            <span className="sr-only">audiophile</span>
          </NavLink>
        </h1>
        <ul className={styles.navList}>
          {navRoutes.map((route) => {
            return (
              <li key={route.routeName}>
                <NavLink className={styles.navLink} to={route.routeLink}>
                  {route.routeName}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <img src={cart} alt="cart" />
      </div>
    </nav>
  );
}

export default Nav;
