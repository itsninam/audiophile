import styles from "./ProductDescription.module.scss";

import { Fragment } from "react";
import { Product } from "../../interfaces/Product";

function ProductFeatures({ product }: { product: Product }) {
  return (
    <section className={`${styles.flexContainer} wrapper features`}>
      <Fragment key={product.id}>
        <div className={styles.featuresContainer}>
          <h4>Features</h4>
          <p className={styles.productFeatures}>{product.features}</p>
        </div>
        <div className="box-container">
          <h4>In the box</h4>
          <ul>
            {product.includes.map((item, index) => {
              return (
                <li key={index}>
                  <span className={styles.quantity}>{item.quantity}x</span>
                  <p className={styles.item}>{item.item}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </Fragment>
    </section>
  );
}

export default ProductFeatures;
