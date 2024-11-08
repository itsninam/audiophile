import React from "react";
import { CartItems } from "../../interfaces/CartItems";
import { useProduct } from "../../contexts/ProductContext";

function RemoveCartItem({
  item,
  itemQuantity,
  showCartModal,
}: {
  item: CartItems;
  itemQuantity: number;
  showCartModal: boolean;
}) {
  const { setCartItems, cartItems } = useProduct();

  const handleRemoveProduct = (item: CartItems) => {
    if (showCartModal) {
      if (itemQuantity! < 2) {
        setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
      }
    }
  };
  return (
    <button onClick={() => handleRemoveProduct(item)}>
      <img
        src="/starter-code/assets/shared/desktop/delete-icon.svg"
        alt="delete"
      />
    </button>
  );
}

export default RemoveCartItem;
