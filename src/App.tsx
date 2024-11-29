import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { useProduct } from "./contexts/ProductContext";

import Footer from "./components/Footer";
import Home from "./pages/Home";
import SelectedProduct from "./pages/SelectedProduct";
import ShopNav from "./components/shopNav/ShopNav";
import About from "./pages/About";
import NavBar from "./components/navigation/NavBar";
import ProductDetails from "./pages/ProductDetails";
import OtherFeaturedProducts from "./components/OtherFeaturedProducts";
import MainWrapper from "./components/MainWrapper";

function App() {
  const { locationName } = useProduct();

  return (
    <>
      <NavBar />
      <MainWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={locationName} element={<SelectedProduct />} />
          <Route
            path={`${locationName}/:productId`}
            element={<ProductDetails />}
          />
        </Routes>
        <ShopNav />
        <OtherFeaturedProducts />
        <About />
      </MainWrapper>
      <Footer />
    </>
  );
}

export default App;
