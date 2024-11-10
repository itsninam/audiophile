import styles from "./Cart.module.scss";
import { useProduct } from "../../contexts/ProductContext";

function CartTotal() {
  const { cartItems } = useProduct();

  return (
    <div className={`${styles.flexContainer} ${styles.totalPriceContainer}`}>
      <p className={styles.totalLabel}>Total</p>
      <p className={styles.totalPrice}>
        $
        {cartItems
          .reduce((total, item) => total + item.price * item.quantity, 0)
          .toLocaleString()}
      </p>
    </div>
  );
}

export default CartTotal;
