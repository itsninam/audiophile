import styles from "../components/QuantitySelector.module.scss";
import { useProduct } from "../contexts/ProductContext";
import { CartItems } from "../interfaces/CartItems";

function QuantitySelector({
  showCartModal,
  itemQuantity,
  item,
}: {
  showCartModal?: boolean;
  itemQuantity?: number;
  item?: CartItems;
}) {
  const { quantity, setQuantity, setCartItems, cartItems } = useProduct();

  const handleAddProduct = () => {
    if (showCartModal) {
      handleSetCartItems(itemQuantity! + 1);
    } else {
      setQuantity((prev) => prev + 1);
    }
  };

  const handleRemoveProduct = () => {
    if (showCartModal) {
      handleSetCartItems(itemQuantity! < 2 ? 1 : itemQuantity! - 1);
    } else {
      if (quantity < 2) {
        return;
      }

      setQuantity((prev) => prev - 1);
    }
  };

  const handleSetCartItems = (quant: number) => {
    setCartItems(
      cartItems.map((cartItem) =>
        cartItem.id === item!.id
          ? {
              ...cartItem,
              quantity: quant,
            }
          : cartItem
      )
    );
  };

  return (
    <div className={styles.quantitySelector}>
      <button onClick={handleRemoveProduct}>&minus;</button>
      <p className={styles.quantity}>
        {showCartModal ? itemQuantity : quantity}
      </p>
      <button onClick={handleAddProduct}>+</button>
    </div>
  );
}

export default QuantitySelector;
