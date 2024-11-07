import styles from "./Cart.module.scss";

function EmptyCart() {
  return (
    <div className={styles.emptyCartContainer}>
      <p className={styles.emptyCartLabel}>Your cart is empty</p>
      <img
        className={styles.emptyCartImage}
        src="/starter-code/assets/shared/desktop/icon-cart.svg"
        alt="Empty cart"
      />
    </div>
  );
}

export default EmptyCart;
