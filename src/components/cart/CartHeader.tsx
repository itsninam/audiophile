import styles from "./Cart.module.scss";
import { useProduct } from "../../contexts/ProductContext";
import Button from "../buttons/Button";

function CartHeader({ cartItemsTotal }: { cartItemsTotal: number }) {
  const { setCartItems } = useProduct();

  return (
    <div className={styles.flexContainer}>
      <p>Cart ({`${cartItemsTotal}`})</p>
      <Button
        onHandleClick={() => setCartItems([])}
        buttonClass="btn"
        buttonLabel="Remove All"
      />
    </div>
  );
}

export default CartHeader;
