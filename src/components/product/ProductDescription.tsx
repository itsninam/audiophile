import styles from "./ProductDescription.module.scss";
import { Fragment, useEffect } from "react";
import { ProductDescriptionProps } from "../../interfaces/ProductDescriptionProps";
import { useProduct } from "../../contexts/ProductContext";
import { useNavigate } from "react-router-dom";
import { Product } from "../../interfaces/Product";

import ProductImage from "./ProductImage";
import ProductFeatures from "./ProductFeatures";
import RelatedProducts from "./RelatedProducts";
import QuantitySelector from "../QuantitySelector";
import Button from "../buttons/Button";

function ProductDescription({
  modifierClass,
  productDescription,
  isFeaturedProduct,
  isProductDescription,
}: ProductDescriptionProps) {
  const {
    featuredProduct,
    products,
    setFeaturedProduct,
    locationName,
    setCartItems,
    cartItems,
    quantity,
  } = useProduct();
  const nav = useNavigate();

  const handleAddToCart = (
    product: Product,
    event: React.MouseEvent<Element, MouseEvent>
  ) => {
    event.preventDefault();

    const cartItem = {
      id: product.id,
      name: product.subName,
      image: product.image.desktop,
      price: product.price,
      quantity: quantity,
    };

    const cartItemExists = cartItems.some((item) => item.id === product.id);

    if (!cartItemExists) {
      setCartItems([...cartItems, cartItem]);
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: quantity } : item
        )
      );
    }
  };

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
                <p className={styles.productPrice}>
                  $ {product.price.toLocaleString()}
                </p>
              )}

              <div className={isProductDescription ? styles.flexContainer : ""}>
                {isProductDescription && <QuantitySelector />}

                <Button
                  onHandleClick={(event) => {
                    isProductDescription
                      ? handleAddToCart(product, event)
                      : nav(
                          isFeaturedProduct
                            ? `${product.category}/${product.slug}`
                            : product.slug
                        );
                  }}
                  buttonLabel={
                    isProductDescription ? "Add to cart" : "See product"
                  }
                  buttonClass="primary btn"
                  isDisabled={isProductDescription && quantity < 1 && true}
                ></Button>
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

      {isProductDescription &&
        featuredProduct.map((product) => (
          <Fragment key={product.id}>
            <ProductFeatures product={product} />
            <ProductImage product={product} />
            <RelatedProducts product={product} />
          </Fragment>
        ))}
    </main>
  );
}

export default ProductDescription;
