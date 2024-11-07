import { useEffect, useState } from "react";
import { useProduct } from "../../contexts/ProductContext";
import styles from "./Nav.module.scss";
import CartModal from "./CartModal";

function Cart() {
  const { cartItems } = useProduct();
  const [showCartModal, setShowCartModal] = useState(false);
  const cartItemsTotal = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  useEffect(() => {
    document.addEventListener("click", (event) => {
      if ((event.target as Element).id === "cart-modal") {
        setShowCartModal(false);
      }
    });

    if (showCartModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showCartModal]);

  return (
    <>
      <div
        className={styles.cartContainer}
        onClick={() => setShowCartModal(!showCartModal)}
      >
        <img
          src="/starter-code/assets/shared/desktop/icon-cart.svg"
          alt="cart"
        />
        <p className={styles.cartItems}>
          {cartItems.length > 0 && cartItemsTotal}
        </p>
      </div>
      {showCartModal && <CartModal cartItemsTotal={cartItemsTotal} />}
    </>
  );
}

export default Cart;
