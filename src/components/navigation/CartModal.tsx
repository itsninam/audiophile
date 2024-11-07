import styles from "./Nav.module.scss";
import { useProduct } from "../../contexts/ProductContext";
import QuantitySelector from "../QuantitySelector";
import Button from "../buttons/Button";
import { Fragment } from "react/jsx-runtime";

function CartModal({ cartItemsTotal }: { cartItemsTotal: number }) {
  const { cartItems } = useProduct();

  return (
    <div className={styles.cartModalOverlay} id="cart-modal">
      <div className={styles.cartModal}>
        {cartItems.length === 0 ? (
          <p>Cart is empty</p>
        ) : (
          <>
            <div className={styles.flexContainer}>
              <p>Cart ({`${cartItemsTotal}`})</p>
              <button>Remove All</button>
            </div>
            <ul className={styles.cartList}>
              {cartItems.map((item, index) => (
                <li key={index}>
                  <div className={styles.flexContainer}>
                    <div className={styles.flexContainer}>
                      <img src={item.image} alt={item.name} />
                      <div>
                        <p>{item.name}</p>
                        <p>${item.price}</p>
                      </div>
                    </div>
                    <QuantitySelector />
                  </div>
                </li>
              ))}
            </ul>
            <div className={`${styles.flexContainer} ${styles.totalPrice}`}>
              <p>Total</p>
              <p>
                $
                {cartItems.reduce(
                  (total, item) => total + item.price * item.quantity,
                  0
                )}
              </p>
            </div>
            <Button buttonClass="primary" buttonLabel="Check out" />
          </>
        )}
      </div>
    </div>
  );
}

export default CartModal;
