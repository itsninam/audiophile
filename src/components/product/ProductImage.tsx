import styles from "./ProductDescription.module.scss";

import { Product } from "../../interfaces/Product";

function ProductImage({ product }: { product: Product }) {
  return (
    <div className={styles.imageContainer}>
      <img src={product.gallery.first.desktop} alt={product.name} />
      <img src={product.gallery.second.desktop} alt={product.name} />
      <img src={product.gallery.third.desktop} alt={product.name} />
    </div>
  );
}

export default ProductImage;
