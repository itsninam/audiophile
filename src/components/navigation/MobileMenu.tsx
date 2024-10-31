import styles from "./Nav.module.scss";

function MobileMenu() {
  return (
    <button className={styles.mobileMenu}>
      <img
        src="starter-code/assets/shared/tablet/icon-hamburger.svg"
        alt="mobile menu"
      />
    </button>
  );
}

export default MobileMenu;
