import styles from "./Cart.module.scss";

import { CartItems } from "../../interfaces/CartItems";
import { useProduct } from "../../contexts/ProductContext";
import Button from "../buttons/Button";

function RemoveCartItem({
  item,
  showCartModal,
}: {
  item: CartItems;
  itemQuantity: number;
  showCartModal: boolean;
}) {
  const { setCartItems, cartItems } = useProduct();

  const handleRemoveProduct = (item: CartItems) => {
    if (showCartModal) {
      setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
    }
  };
  return (
    <Button
      onHandleClick={() => handleRemoveProduct(item)}
      buttonClass={`btn icon ${styles.deleteBtn}`}
    >
      <img
        src="/starter-code/assets/shared/desktop/delete-icon.svg"
        alt="delete cart item"
      />
    </Button>
  );
}

export default RemoveCartItem;
