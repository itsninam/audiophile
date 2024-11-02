import styles from "./ProductDescription.module.scss";
import ButtonLink from "../buttons/ButtonLink";
import { Fragment, useEffect } from "react";
import { ProductDescriptionProps } from "../../interfaces/ProductDescriptionProps";
import { useProduct } from "../../contexts/ProductContext";
import ProductImage from "./ProductImage";
import ProductFeatures from "./ProductFeatures";

function ProductDescription({
  modifierClass,
  productDescription,
  isFeaturedProduct,
  isProductDescription,
}: ProductDescriptionProps) {
  const { featuredProduct, products, setFeaturedProduct, locationName } =
    useProduct();

  useEffect(() => {
    const featuredProduct = products
      .filter((product) => product.category === locationName)
      .sort((a, b) => Number(b.new) - Number(a.new));
    setFeaturedProduct(featuredProduct);
  }, [locationName, products, setFeaturedProduct]);

  return (
    <main className={`${styles.productContainer} wrapper`}>
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
              <h3
                className={`${styles.productName} ${
                  modifierClass === "secondary" ? styles.secondary : ""
                }`}
              >
                {product?.name}
              </h3>
              <p
                className={`${styles.productDescription} ${
                  modifierClass === "secondary" ? styles.secondary : ""
                }`}
              >
                {isFeaturedProduct ? productDescription : product?.description}
              </p>

              {isProductDescription && (
                <p>$ {product.price.toLocaleString()}</p>
              )}

              <div className={isProductDescription ? styles.flexContainer : ""}>
                {isProductDescription && <p>quantity</p>}

                <ButtonLink
                  buttonLabel={
                    isProductDescription ? "Add to cart" : "See product"
                  }
                  buttonClass="primary"
                  linkTo={
                    isFeaturedProduct
                      ? `${product.category}/${product.slug}`
                      : product.slug
                  }
                ></ButtonLink>
              </div>
            </div>
            {!isFeaturedProduct && (
              <img
                className={styles.productImage}
                src={product.image.desktop}
                alt={product.name}
              />
            )}
          </li>
        ))}
      </ul>

      {/* {isFeaturedProduct && (
        <>
          <ProductFeatures featuredProduct={featuredProduct} />
          <ProductImage featuredProduct={featuredProduct} />
        </>
      )} */}
      {isProductDescription &&
        featuredProduct.map((product) => (
          <Fragment key={product.id}>
            <ProductFeatures product={product} />
            <ProductImage product={product} />
          </Fragment>
        ))}
    </main>
  );
}

export default ProductDescription;
