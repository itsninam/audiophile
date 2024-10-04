import navRoutes from "../routes/navRoutes";
import styles from "./Nav.module.scss";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className={styles.nav}>
      <p>audiophile</p>
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
      <p>cart</p>
    </nav>
  );
}

export default Nav;
