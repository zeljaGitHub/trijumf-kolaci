import { useState } from "react";
import "./ImageSlider.css";

const ImageSlider = () => {
  // Podaci o slikama - putanja i naziv
  const images = [
    { src: "/slider/slider1.png", title: "Priroda" },
    { src: "/slider/slider2.png", title: "Grad" },
    { src: "/slider/slider3.png", title: "More" },
    { src: "/slider/slider4.png", title: "Planine" },
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

  // Uzimamo 3 slike za prikaz - prethodnu, trenutnu i sledeću
  const visibleImages = [
    images[(currentIndex - 1 + images.length) % images.length],
    images[currentIndex],
    images[(currentIndex + 1) % images.length],
  ];

  return (
    <div className="slider-wrapper">
      <button className="arrow-button left-arrow" onClick={prevSlide}>
        &larr;
      </button>

      <div className="slider-container">
        <div className="slider-images">
          {visibleImages.map((image, index) => (
            <div
              key={index}
              className={`slider ${index === 1 ? "active" : ""}`}
            >
              <img src={image.src} alt={image.title} className="slider-image" />
              <p className="image-title">{image.title}</p>
            </div>
          ))}
        </div>
      </div>

      <button className="arrow-button right-arrow" onClick={nextSlide}>
        &rarr;
      </button>
    </div>
  );
};

export default ImageSlider;
