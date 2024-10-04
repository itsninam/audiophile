import "./App.css";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import Speakers from "./pages/Speakers";
import Earphones from "./pages/Earphones";
import Headphones from "./pages/Headphones";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/headphones" element={<Headphones />} />
        <Route path="/earphones" element={<Earphones />} />
        <Route path="/speakers" element={<Speakers />} />
      </Routes>
    </>
  );
}

export default App;
