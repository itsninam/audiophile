import styles from "./Cart.module.scss";
import { useProduct } from "../../contexts/ProductContext";
import CartItem from "./CartItem";

function CartList({ showCartModal }: { showCartModal: boolean }) {
  const { cartItems } = useProduct();

  return (
    <ul className={styles.cartList}>
      {cartItems.map((item) => (
        <CartItem item={item} key={item.id} showCartModal={showCartModal} />
      ))}
    </ul>
  );
}

export default CartList;
