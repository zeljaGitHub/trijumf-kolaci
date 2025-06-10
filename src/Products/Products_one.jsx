import React, { useEffect, useState } from "react";
import "./Products_one.css";

const Products_one = () => {
  const [imageSrc, setImageSrc] = useState("./products-main.png");
  const [title, setTitle] = useState("Naši proizvodi");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setImageSrc("./products-main-mobile.png");
        setTitle("Proizvodi");
      } else {
        setImageSrc("./products-main.png");
        setTitle("Naši proizvodi");
      }
    };

    handleResize(); // odmah pokreni da setuje početno stanje
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="Products_one">
      <img src={imageSrc} alt="Pozadina proizvodi" className="products-img" />
      <div className="products_one_text">
        <div>
          <h1>{title}</h1>
          <div className="h2-products-margin">
            <h2>Zavirite u našu ponudu i otkrijte</h2>
            <h2>zašto se naši kolači pamte po ukusu.</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products_one;
