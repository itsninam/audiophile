import React, { useState } from "react";
import styles from "../components/QuantitySelector.module.scss";

function QuantitySelector() {
  const [quantity, setQuantity] = useState(1);

  const handleAddProduct = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleRemoveProduct = () => {
    if (quantity < 2) {
      return;
    }

    setQuantity((prev) => prev - 1);
  };
  return (
    <div className={styles.quantitySelector}>
      <button onClick={handleRemoveProduct}>&minus;</button>
      <p className={styles.quantity}>{quantity}</p>
      <button onClick={handleAddProduct}>+</button>
    </div>
  );
}

export default QuantitySelector;
