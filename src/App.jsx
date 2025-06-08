import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import Products from "./Products/Products";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Proizvodi" element={<Products />} />
        <Route path="/O-nama" element={<About />} />
        <Route path="/Kontakt" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
