import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { useProduct } from "./contexts/ProductContext";

import Footer from "./components/Footer";
import Home from "./pages/Home";
import SelectedProduct from "./pages/SelectedProduct";
import Nav from "./components/Nav";
import ShopNav from "./components/shopNav/ShopNav";
import About from "./pages/About";

function App() {
  const { locationName } = useProduct();

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={`/${locationName}`} element={<SelectedProduct />} />
      </Routes>
      <ShopNav />
      <About />
      <Footer />
    </>
  );
}

export default App;
