import React from "react";
import "./Slider.css";

const images = [
  "slider1_1.png",
  "slider1_2.png",
  "slider1_3.png",
  "slider1_4.png",
  "slider1_5.png",
  "slider1_6.png",
  "slider1_7.png",
  "slider1_8.png",
];

const Slider = () => {
  // Dupliramo niz slika da napravimo beskrajnu petlju
  const fullImageList = [...images, ...images];

  return (
    <div className="logos">
      <div className="logos-slide">
        {fullImageList.map((img, index) => (
          <img key={index} src={`/slider1/${img}`} alt="" />
        ))}
      </div>
    </div>
  );
};

export default Slider;
