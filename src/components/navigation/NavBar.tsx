import styles from "./Nav.module.scss";

import MobileMenu from "./MobileMenu";
import Logo from "./Logo";
import Cart from "./Cart";
import NavList from "./NavList";

function NavBar() {
  return (
    <nav className={styles.nav}>
      <div className={`${styles.wrapper} wrapper`}>
        <MobileMenu />

        <Logo />
        <NavList />

        <Cart />
      </div>
    </nav>
  );
}

export default NavBar;
