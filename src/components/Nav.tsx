import navRoutes from "../routes/navRoutes";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul>
        {navRoutes.map((route) => {
          return (
            <li key={route.routeName}>
              <NavLink to={route.routeLink}> {route.routeName}</NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Nav;
