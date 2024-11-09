import React from "react";
import { CartItems } from "../../interfaces/CartItems";
import { useProduct } from "../../contexts/ProductContext";
import Button from "../buttons/Button";

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
    <Button
      onHandleClick={() => handleRemoveProduct(item)}
      buttonClass="btn icon"
    >
      <img
        src="/starter-code/assets/shared/desktop/delete-icon.svg"
        alt="delete"
      />
    </Button>
  );
}

export default RemoveCartItem;
