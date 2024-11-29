import ProductDescription from "./product/ProductDescription";
import { useProduct } from "../contexts/ProductContext";

function OtherFeaturedProducts() {
  const { location } = useProduct();

  return (
    <>
      {location!.pathname === "/" && (
        <div className="flex-container">
          <ProductDescription
            isFeaturedProduct={true}
            isOtherFeaturedProducts={true}
            productDescription="Experience natural, life like audio and exceptional build quality made
          for the passionate music enthusiast."
            modifierClass="secondary"
          />
        </div>
      )}
    </>
  );
}

export default OtherFeaturedProducts;
