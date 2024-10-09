import navRoutes from "../routes/navRoutes";
import { NavLink } from "react-router-dom";

import styles from "./Nav.module.scss";
import logo from "../assets/shared/desktop/logo.svg";

function Nav() {
  return (
    <nav className={`${styles.nav} wrapper`}>
      <NavLink to="/">
        <img src={logo} alt="logo" />
      </NavLink>
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
