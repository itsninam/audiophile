import navRoutes from "../routes/navRoutes";
import { NavLink } from "react-router-dom";

import styles from "./Nav.module.scss";

function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={`${styles.wrapper} wrapper`}>
        <button className={styles.mobileMenu}>
          <img
            src="starter-code/assets/shared/tablet/icon-hamburger.svg"
            alt="mobile menu"
          />
        </button>
        <h1>
          <NavLink to="/">
            <img
              src="starter-code/assets/shared/desktop/logo.svg"
              alt="audiophile"
            />
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
        <img
          src="starter-code/assets/shared/desktop/icon-cart.svg"
          alt="cart"
        />
      </div>
    </nav>
  );
}

export default Nav;
