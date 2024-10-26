import styles from "./ProductDescription.module.scss";
import Button from "./Button";
import { useProduct } from "../contexts/ProductContext";
import { ProductDescriptionProps } from "../interfaces/ProductDescriptionProps";

function ProductDescription({
  modifierClass,
  productDescription,
  isFeaturedProduct,
}: ProductDescriptionProps) {
  const { featuredProduct } = useProduct();

  return (
    <div className={`${styles.productContainer} wrapper`}>
      <ul className={styles.productList}>
        {featuredProduct.map((product) => (
          <li
            key={product.id}
            className={`${styles.productItem} ${
              modifierClass === "secondary" ? styles.secondary : ""
            }`}
          >
            <div className={styles.productInfo}>
              {product.new && (
                <p
                  className={`${styles.productTag} ${
                    modifierClass === "secondary" ? styles.secondary : ""
                  }`}
                >
                  New Product
                </p>
              )}
              <p
                className={`${styles.productName} ${
                  modifierClass === "secondary" ? styles.secondary : ""
                }`}
              >
                {product?.name}
              </p>
              <p
                className={`${styles.productDescription} ${
                  modifierClass === "secondary" ? styles.secondary : ""
                }`}
              >
                {isFeaturedProduct ? productDescription : product?.description}
              </p>
              <Button buttonClass="primary" buttonLabel="See product"></Button>
            </div>
            {!isFeaturedProduct && (
              <img
                className={styles.productImage}
                src={product.image.desktop}
                alt={product.image.desktop}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductDescription;
