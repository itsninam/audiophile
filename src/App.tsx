import "./App.scss";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import Speakers from "./pages/Speakers";
import Earphones from "./pages/Earphones";
import Headphones from "./pages/Headphones";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/headphones" element={<Headphones />} />
        <Route path="/earphones" element={<Earphones />} />
        <Route path="/speakers" element={<Speakers />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
