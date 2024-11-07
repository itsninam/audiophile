import styles from "./Cart.module.scss";
import { CartItems } from "../../interfaces/CartItems";
import QuantitySelector from "../QuantitySelector";

function CartItem({
  item,
  showCartModal,
}: {
  item: CartItems;
  showCartModal: boolean;
}) {
  return (
    <li>
      <div className={styles.flexContainer}>
        <div className={styles.flexContainer}>
          <img src={item.image} alt={item.name} />
          <div>
            <p>{item.name}</p>
            <p>${item.price}</p>
          </div>
        </div>
        <QuantitySelector
          showCartModal={showCartModal}
          itemQuantity={item.quantity}
          item={item}
        />
      </div>
    </li>
  );
}

export default CartItem;
