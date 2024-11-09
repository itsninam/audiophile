import Button from "../buttons/Button";
import styles from "./Nav.module.scss";

function MobileMenu() {
  return (
    <Button buttonClass={`${styles.mobileMenu} btn`}>
      <img
        src="/starter-code/assets/shared/tablet/icon-hamburger.svg"
        alt="mobile menu"
      />
    </Button>
  );
}

export default MobileMenu;
