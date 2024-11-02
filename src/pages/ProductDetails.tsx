import { useParams } from "react-router-dom";
import ProductDescription from "../components/product/ProductDescription";
import { useEffect } from "react";
import { useProduct } from "../contexts/ProductContext";

function ProductDetails() {
  const { productId } = useParams();

  const { products, setFeaturedProduct, location, locationName } = useProduct();

  useEffect(() => {
    if (location!.pathname.includes(productId!)) {
      setFeaturedProduct(
        products
          .filter((product) => product.category === locationName)
          .filter((product) => product.slug === productId)
      );
    }
  }, [productId, setFeaturedProduct, location, products, locationName]);

  return (
    <section>
      <ProductDescription isProductDescription={true} />
    </section>
  );
}

export default ProductDetails;
