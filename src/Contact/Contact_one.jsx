import React, { useEffect, useState } from "react";
import "./Contact_one.css";

const Contact_one = () => {
  const [imageSrc, setImageSrc] = useState("./contact-bg.png");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setImageSrc("./contact-bg-mobile.png"); // tvoja mobilna verzija
      } else {
        setImageSrc("./contact-bg.png");
      }
    };

    handleResize(); // pozovi odmah na mount
    window.addEventListener("resize", handleResize); // i kada se menja veličina

    return () => window.removeEventListener("resize", handleResize); // cleanup
  }, []);

  return (
    <div className="Products_one">
      <img src={imageSrc} alt="Kontakt pozadina" className="contact-img" />
      <h1 className="products_one_text">Kontakt</h1>
    </div>
  );
};

export default Contact_one;
