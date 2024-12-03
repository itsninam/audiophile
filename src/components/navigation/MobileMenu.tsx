import { useEffect, useState } from "react";
import Button from "../buttons/Button";
import styles from "./Nav.module.scss";
import ShopNav from "../shopNav/ShopNav";

function MobileMenu() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("overlay");
    } else {
      document.body.classList.remove("overlay");
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <Button
        buttonClass={`${styles.mobileMenu} btn icon`}
        onHandleClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? (
          <img
            src="/starter-code/assets/shared/desktop/close-icon.svg"
            alt="mobile menu"
          />
        ) : (
          <img
            src="/starter-code/assets/shared/tablet/icon-hamburger.svg"
            alt="mobile menu"
          />
        )}
      </Button>
      {isMobileMenuOpen && (
        <ShopNav
          secondaryClass="shopNavMobile"
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
      )}
    </>
  );
}

export default MobileMenu;
