import { useNavigate } from "react-router-dom";
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

  const nav = useNavigate();

  const handleClick = (category: string, slug: string): void => {
    nav(`/${category}/${slug}`);
  };

  return (
    <li className={`${styles.productItem} ${styles.otherFeaturedProducts}`}>
      <div className={styles.productInfoContainer}>
        <h2>{product.name}</h2>
        {product.category === "speakers" && product.new && (
          <p>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
        )}
        <Button
          buttonClass={`${
            product.category === "speakers" && product.new
              ? "secondary"
              : "secondary-outline"
          } btn`}
          buttonLabel="See product"
          onHandleClick={() => handleClick(product.category, product.slug)}
        />
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
