import styles from "./Cart.module.scss";

function CartHeader({ cartItemsTotal }: { cartItemsTotal: number }) {
  return (
    <div className={styles.flexContainer}>
      <p>Cart ({`${cartItemsTotal}`})</p>
      <button>Remove All</button>
    </div>
  );
}

export default CartHeader;
