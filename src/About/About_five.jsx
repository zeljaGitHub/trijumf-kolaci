import React, { useState, useEffect } from "react";
import "./About_five.css";

const slides = [
  {
    bigImage: "/carousel/Aleksandar.png",
    mobileImage: "/carousel/Aleksandar-mobile.png",
    title: "Aleksandar Stanić",
    subtitle: "Osnivač",
    text: "Naša priča počela je 2015. godine, kada smo sa strašću prema domaćim kolačima i keksevima odlučili da delimo te ukuse sa drugima. Danas, sa timom od 70 radnika, ponosno proizvodimo više od dve tone kolača i keksa dnevno. <br> <br> Naš asortiman broji oko 60 različitih proizvoda, a svi naši kolači napravljeni su sa pažljivo odabranim sastojcima i puno ljubavi. I dalje se trudimo da zadržimo autentičan domaći ukus, koji će svakom našem kupcu doneti osmeh.",
  },
  {
    bigImage: "/carousel/Jovana.png",
    mobileImage: "/carousel/jovana-mobile.png",
    title: "Zimnica",
    subtitle: "Ukus detinjstva",
    text: "Domaća zimnica spremljena sa ljubavlju.",
  },
  {
    bigImage: "/carousel/Marko.png",
    mobileImage: "/carousel/marko-mobile.png",
    title: "Smrznuti proizvodi",
    subtitle: "Zdravi i praktični",
    text: "Uživajte u kvalitetu tokom cele godine.",
  },
  {
    bigImage: "/carousel/Jelena.png",
    mobileImage: "/carousel/jelena-mobile.png",
    title: "Smrznuti proizvodi",
    subtitle: "Zdravi i praktični",
    text: "Uživajte u kvalitetu tokom cele godine.",
  },
  {
    bigImage: "/carousel/Bratislav.png",
    mobileImage: "/carousel/bratislav-mobile.png",
    title: "Zimnica",
    subtitle: "Ukus detinjstva",
    text: "Domaća zimnica spremljena sa ljubavlju.",
  },
  {
    bigImage: "/carousel/Joja.png",
    mobileImage: "/carousel/joja-mobile.png",
    title: "Aleksandar Stanić",
    subtitle: "Osnivač",
    text: "Naša priča počela je 2015. godine, kada smo sa strašću prema domaćim kolačima i keksevima odlučili da delimo te ukuse sa drugima. Danas, sa timom od 70 radnika, ponosno proizvodimo više od dve tone kolača i keksa dnevno. <br> <br> Naš asortiman broji oko 60 različitih proizvoda, a svi naši kolači napravljeni su sa pažljivo odabranim sastojcima i puno ljubavi. I dalje se trudimo da zadržimo autentičan domaći ukus, koji će svakom našem kupcu doneti osmeh.",
  },
  {
    bigImage: "/carousel/Jeka.png",
    mobileImage: "/carousel/jeka-mobile.png",
    title: "Zimnica",
    subtitle: "Ukus detinjstva",
    text: "Domaća zimnica spremljena sa ljubavlju.",
  },
];

const About_five = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const goPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="carousel-container about-five-overlap">
      {slides.map((slide, index) => (
        <div
          className={`slide ${index === currentSlide ? "active" : ""}`}
          key={index}
        >
          <div className="left">
            <img
              src={isMobile ? slide.mobileImage : slide.bigImage}
              alt={slide.title}
            />
          </div>
          <div className="right">
            <h2>{slide.title}</h2>
            <h4>{slide.subtitle}</h4>
            {!isMobile && (
              <p dangerouslySetInnerHTML={{ __html: slide.text }} />
            )}
          </div>
        </div>
      ))}

      <div className="arrow-controls">
        <button className="arrow-button prev" onClick={goPrev}>
          <img src="/left-arrow.png" alt="Previous" />
        </button>
        <button className="arrow-button next" onClick={goNext}>
          <img src="/right-arrow.png" alt="Next" />
        </button>
      </div>
    </div>
  );
};

export default About_five;
