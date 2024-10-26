import styles from "./Nav.module.scss";
import navRoutes from "../routes/navRoutes";
import { NavLink } from "react-router-dom";


function Nav({ isFooterNav }: { isFooterNav?: boolean }) {
  return (
    <nav className={`${styles.nav} ${isFooterNav ? styles.footer : ""}`}>
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
          className={styles.cartIcon}
          src="starter-code/assets/shared/desktop/icon-cart.svg"
          alt="cart"
        />
      </div>
    </nav>
  );
}

export default Nav;
