import Button from "./Button";
import styles from "./ProductDescription.module.scss";
import { useProduct } from "../contexts/ProductContext";
import { ProductDescriptionProps } from "../interfaces/ProductDescriptionProps";

function ProductDescription({
  modifierClass,
  productDescription,
  isFeaturedProduct,
}: ProductDescriptionProps) {
  const { featuredProduct } = useProduct();

  return (
    <div className={`${styles.productDescription} wrapper`}>
      <div className={styles.featuredProductTag}>
        {featuredProduct?.new && (
          <p
            className={`${styles.productTag} ${
              modifierClass === "secondary" && styles.secondary
            }`}
          >
            New Product
          </p>
        )}
        <p
          className={`${styles.productName} ${
            modifierClass === "secondary" && styles.secondary
          }`}
        >
          {featuredProduct?.name}
        </p>
        <p
          className={`${styles.productDescription} ${
            modifierClass === "secondary" && styles.secondary
          }`}
        >
          {isFeaturedProduct
            ? productDescription
            : featuredProduct?.description}
        </p>
      </div>
      <Button buttonClass="primary" buttonLabel="See product"></Button>
    </div>
  );
}

export default ProductDescription;
