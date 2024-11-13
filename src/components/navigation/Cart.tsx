import { useEffect, useState } from "react";
import { useProduct } from "../../contexts/ProductContext";
import styles from "./Nav.module.scss";
import CartModal from "../cart/CartModal";
import Button from "../buttons/Button";

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
        <Button buttonClass="btn icon">
          <img
            src="/starter-code/assets/shared/desktop/icon-cart.svg"
            alt="your cart"
          />
        </Button>
        {cartItems.length > 0 && (
          <p className={styles.cartItems}>{cartItemsTotal}</p>
        )}
      </div>
      {showCartModal && (
        <CartModal
          cartItemsTotal={cartItemsTotal}
          showCartModal={showCartModal}
        />
      )}
    </>
  );
}

export default Cart;
