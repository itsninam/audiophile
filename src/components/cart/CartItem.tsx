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
    <li>
      <div className={styles.flexContainer}>
        <div className={styles.flexContainer}>
          <img src={item.image} alt={item.name} />
          <div>
            <p>{item.name}</p>
            <p>${item.price}</p>
          </div>
        </div>
        <div>
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
