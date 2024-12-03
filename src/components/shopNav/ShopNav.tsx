import styles from "./ShopNav.module.scss";
import NavList from "../navigation/NavList";

function ShopNav({
  secondaryClass,
  setIsMobileMenuOpen,
}: {
  secondaryClass?: string;
  setIsMobileMenuOpen?:
    | React.Dispatch<React.SetStateAction<boolean>>
    | undefined;
}) {
  const additionalClass = secondaryClass ? styles[secondaryClass] : "";

  return (
    <section className={`${styles.shopNavSection} ${additionalClass}`}>
      <NavList
        isShopNav={true}
        onHandleClick={() => setIsMobileMenuOpen && setIsMobileMenuOpen(false)}
      />
    </section>
  );
}

export default ShopNav;
