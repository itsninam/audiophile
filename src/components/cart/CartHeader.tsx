import styles from "./Cart.module.scss";
import { useProduct } from "../../contexts/ProductContext";

function CartHeader({ cartItemsTotal }: { cartItemsTotal: number }) {
  const { setCartItems } = useProduct();

  return (
    <div className={styles.flexContainer}>
      <p>Cart ({`${cartItemsTotal}`})</p>
      <button onClick={() => setCartItems([])}>Remove All</button>
    </div>
  );
}

export default CartHeader;
