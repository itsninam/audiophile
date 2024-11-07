import styles from "./Cart.module.scss";
import { useProduct } from "../../contexts/ProductContext";

function CartTotal() {
  const { cartItems } = useProduct();

  return (
    <div className={`${styles.flexContainer} ${styles.totalPrice}`}>
      <p>Total</p>
      <p>
        $
        {cartItems.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        )}
      </p>
    </div>
  );
}

export default CartTotal;
