import { useState, useRef } from "react";
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
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const sliderRef = useRef(null);

  // Minimum swipe distance to trigger slide change
  const minSwipeDistance = 50;

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

  const handleTouchStart = (e) => {
    setTouchEnd(0); // Reset touch end position
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
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
    <div
      className="slider-wrapper"
      ref={sliderRef}
      onTouchStart={isMobile ? handleTouchStart : null}
      onTouchMove={isMobile ? handleTouchMove : null}
      onTouchEnd={isMobile ? handleTouchEnd : null}
    >
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
