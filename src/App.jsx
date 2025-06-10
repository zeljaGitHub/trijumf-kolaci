import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import Products from "./Products/Products";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

const App = () => {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Proizvodi" element={<Products />} />
        <Route path="/O-nama" element={<About />} />
        <Route path="/Kontakt" element={<Contact />} />
      </Routes>
      {location.pathname !== "/Kontakt" && <Footer />}
    </>
  );
};

export default App;
