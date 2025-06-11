import { useState } from "react";
import "./ImageSlider.css";

const ImageSlider = () => {
  const images = [
    { src: "/slider/slider1.png", title: "Kokos kuglice" },
    { src: "/slider/slider2.png", title: "Breskvice" },
    { src: "/slider/slider3.png", title: "Kokos kiflice" },
    { src: "/slider/slider4.png", title: "Vesele vanilice" },
    { src: "/slider/slider5.png", title: "Keks puslice čokolada" },
    { src: "/slider/slider6.png", title: "Grilijaš štanglice" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Za desktop prikazujemo 3 slike, za mobilne samo trenutnu
  const isMobile = window.innerWidth <= 768;
  const visibleImages = isMobile
    ? [images[currentIndex]]
    : [
        images[(currentIndex - 1 + images.length) % images.length],
        images[currentIndex],
        images[(currentIndex + 1) % images.length],
      ];

  return (
    <div className="slider-wrapper">
      <button className="arrow-button left-arrow" onClick={prevSlide}>
        <img src="/left-arrow.png" alt="Levo" className="arrow-icon" />
      </button>

      <div className="slider-container">
        <div className="slider-images">
          {visibleImages.map((image, index) => (
            <div
              key={index}
              className={`slider ${
                !isMobile && index === 1 ? "active" : "active-mobile"
              }`}
            >
              <img src={image.src} alt={image.title} className="slider-image" />
              <p className="image-title">{image.title}</p>
            </div>
          ))}
        </div>
      </div>

      <button className="arrow-button right-arrow" onClick={nextSlide}>
        <img src="/right-arrow.png" alt="Desno" className="arrow-icon" />
      </button>
    </div>
  );
};

export default ImageSlider;
