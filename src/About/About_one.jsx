import React, { useEffect, useState } from "react";
import "./About_one.css";

const About_one = () => {
  const [imageSrc, setImageSrc] = useState("./about-bg.png");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setImageSrc("./about-bg-mobile.png"); // ← mobilna verzija
      } else {
        setImageSrc("./about-bg.png");
      }
    };

    handleResize(); // pozovi odmah
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="Products_one">
      <img src={imageSrc} alt="Pozadina O nama" className="about-img" />
      <h1 className="products_one_text">O nama</h1>
    </div>
  );
};

export default About_one;
