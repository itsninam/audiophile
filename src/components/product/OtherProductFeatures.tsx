import { Product } from "../../interfaces/Product";
import Button from "../buttons/Button";
import styles from "./ProductDescription.module.scss";

function OtherProductFeatures({
  product,
  index,
}: {
  product: Product;
  index: number;
}) {
  const images = [
    "/starter-code/assets/home/mobile/image-earphones-yx1.jpg",
    "/starter-code/assets//home/desktop/image-speaker-zx7.jpg",
    "/starter-code/assets/home/mobile/image-speaker-zx9.png",
  ];

  return (
    <li className={`${styles.productItem} ${styles.otherFeaturedProducts}`}>
      <div>
        <h2>{product.name}</h2>
        {product.category === "speakers" && product.new && (
          <p>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
        )}
        <Button buttonClass="btn tertiary" buttonLabel="See product" />
      </div>
      <img
        src={images[index]}
        alt={product.name}
        className={styles.productImage}
      />
    </li>
  );
}

export default OtherProductFeatures;
