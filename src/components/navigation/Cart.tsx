import styles from "./Nav.module.scss";

function Cart() {
  return (
    <img
      className={styles.cartIcon}
      src="/starter-code/assets/shared/desktop/icon-cart.svg"
      alt="cart"
    />
  );
}

export default Cart;
