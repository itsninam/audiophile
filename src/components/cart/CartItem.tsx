import styles from "./Cart.module.scss";
import { CartItems } from "../../interfaces/CartItems";
import QuantitySelector from "../QuantitySelector";
import RemoveCartItem from "./RemoveCartItem";

function CartItem({
  item,
  showCartModal,
}: {
  item: CartItems;
  showCartModal: boolean;
}) {
  return (
    <li className={styles.cartItem}>
      <div className={styles.flexContainer}>
        <div className={styles.flexContainer}>
          <img src={item.image} alt={item.name} className={styles.cartImage} />
          <div>
            <p className={styles.itemName}>{item.name}</p>
            <p className={styles.itemPrice}>${item.price.toLocaleString()}</p>
          </div>
        </div>
        <div className={styles.flexContainer}>
          <QuantitySelector
            showCartModal={showCartModal}
            itemQuantity={item.quantity}
            item={item}
          />
          <RemoveCartItem
            item={item}
            showCartModal={showCartModal}
            itemQuantity={item.quantity}
          />
        </div>
      </div>
    </li>
  );
}

export default CartItem;
