import styles from "./Cart.module.scss";

import { useProduct } from "../../contexts/ProductContext";
import Button from "../buttons/Button";
import EmptyCart from "./EmptyCart";
import CartTotal from "./CartTotal";
import CartList from "./CartList";
import CartHeader from "./CartHeader";

function CartModal({
  cartItemsTotal,
  showCartModal,
}: {
  cartItemsTotal: number;
  showCartModal: boolean;
}) {
  const { cartItems } = useProduct();

  return (
    <div className={styles.cartModalOverlay} id="cart-modal">
      <div className={styles.cartModal}>
        {cartItems.length === 0 ? (
          <EmptyCart />
        ) : (
          <>
            <CartHeader cartItemsTotal={cartItemsTotal} />
            <CartList showCartModal={showCartModal} />
            <CartTotal />
            <Button buttonClass="primary btn" buttonLabel="Check out" />
          </>
        )}
      </div>
    </div>
  );
}

export default CartModal;
