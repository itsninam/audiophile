import { useProduct } from "../../contexts/ProductContext";
import styles from "./Nav.module.scss";

function Cart() {
  const { cartItems } = useProduct();
  return (
    <div className={styles.cartContainer}>
      <img src="/starter-code/assets/shared/desktop/icon-cart.svg" alt="cart" />
      <p className={styles.cartItems}>
        {cartItems.length > 0 &&
          cartItems.map((item) => item.quantity).reduce((a, b) => a + b, 0)}
      </p>
    </div>
  );
}

export default Cart;
