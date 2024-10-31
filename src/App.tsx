import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { useProduct } from "./contexts/ProductContext";

import Footer from "./components/Footer";
import Home from "./pages/Home";
import SelectedProduct from "./pages/SelectedProduct";
import ShopNav from "./components/shopNav/ShopNav";
import About from "./pages/About";
import NavBar from "./components/navigation/NavBar";

function App() {
  const { locationName } = useProduct();

  return (
    <>
      <NavBar />
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
