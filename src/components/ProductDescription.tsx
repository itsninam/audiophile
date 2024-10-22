import Button from "./Button";
import styles from "./ProductDescription.module.scss";

export interface ProductDescription {
  productName: string;
  productDescription: string;
  isNewProduct?: boolean;
}

function ProductDescription({
  productName,
  productDescription,
  isNewProduct,
}: ProductDescription) {
  return (
    <div className={`${styles.productDescription} wrapper`}>
      <div className={styles.featuredProductTag}>
        {isNewProduct && <p className={styles.productTag}>New Product</p>}
        <p className={styles.productName}>{productName}</p>
        <p className={styles.productDescription}>{productDescription}</p>
      </div>
      <Button buttonClass="primary" buttonLabel="See products"></Button>
    </div>
  );
}

export default ProductDescription;
