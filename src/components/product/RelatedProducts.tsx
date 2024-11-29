import styles from "./ProductDescription.module.scss";

import { Product } from "../../interfaces/Product";
import Button from "../buttons/Button";
import { useNavigate } from "react-router-dom";

function RelatedProducts({ product }: { product: Product }) {
  const nav = useNavigate();

  const handleClick = (category: string, slug: string): void => {
    nav(`/${category}/${slug}`);
  };

  return (
    <section className={`${styles.relatedProductsSection} wrapper`}>
      <h4>You may also like</h4>
      <ul className={`${styles.relatedProductsList} ${styles.flexContainer}`}>
        {product.others.map((item) => {
          return (
            <li key={item.name}>
              <img src={item.image.desktop} alt={item.name} />
              <h5 className={styles.itemName}>{item.name}</h5>
              <Button
                buttonClass="primary btn"
                buttonLabel="See product"
                onHandleClick={() => handleClick(item.category, item.slug)}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default RelatedProducts;
