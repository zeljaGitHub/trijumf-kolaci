import React, { useEffect, useState } from "react";
import "./About_three.css";

const About_three = () => {
  const [imageSrc, setImageSrc] = useState("./about-three-1.png");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setImageSrc("./about-three-1-mobile.png"); // ← mobilna verzija
      } else {
        setImageSrc("./about-three-1.png");
      }
    };

    handleResize(); // pozovi odmah da postavi sliku
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="about-three-container">
      <img src={imageSrc} alt="about" className="about-image" />
      <div className="text-overlay">
        <h4>Naša misija</h4>
        <p>
          Naša misija je da ukus tradicije donesemo na svaku trpezu, praveći
          poslastice po domaćoj recepturi, od najkvalitetnijih sastojaka.
          Posvećeni smo stvaranju ukusa koji se pamte i koji bude emocije.
        </p>
      </div>
    </div>
  );
};

export default About_three;
