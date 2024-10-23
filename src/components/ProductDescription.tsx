import Button from "./Button";
import styles from "./ProductDescription.module.scss";
import { Product } from "./Header";

interface ProductDescriptionProps {
  modifierClass?: string;
  products: Product[];
  productDescription?: string;
  isFeaturedProduct: boolean;
}

function ProductDescription({
  modifierClass,
  products,
  productDescription,
  isFeaturedProduct,
}: ProductDescriptionProps) {
  const featuredProduct = products
    .filter((product) => product.category === "headphones")
    .find((headphones) => headphones.new);

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
        <p className={styles.productName}>{featuredProduct?.name}</p>
        <p className={styles.productDescription}>
          {isFeaturedProduct
            ? productDescription
            : featuredProduct?.description}
        </p>
      </div>
      <Button buttonClass="primary" buttonLabel="See products"></Button>
    </div>
  );
}

export default ProductDescription;
