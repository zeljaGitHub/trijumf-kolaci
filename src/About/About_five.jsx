import React, { useState, useEffect } from "react";
import "./About_five.css";

const slides = [
  {
    bigImage: "/carousel/Aleksandar.png",
    title: "Aleksandar Stanić",
    subtitle: "Osnivač",
    text: "Naša priča počela je 2015. godine, kada smo sa strašću prema domaćim kolačima i keksevima odlučili da delimo te ukuse sa drugima. Danas, sa timom od 70 radnika, ponosno proizvodimo više od dve tone kolača i keksa dnevno. <br> <br> Naš asortiman broji oko 60 različitih proizvoda, a svi naši kolači napravljeni su sa pažljivo odabranim sastojcima i puno ljubavi. I dalje se trudimo da zadržimo autentičan domaći ukus, koji će svakom našem kupcu doneti osmeh.",
  },
  {
    bigImage: "/carousel/Aleksandar.png",
    title: "Zimnica",
    subtitle: "Ukus detinjstva",
    text: "Domaća zimnica spremljena sa ljubavlju.",
  },
  {
    bigImage: "/carousel/Aleksandar.png",
    title: "Smrznuti proizvodi",
    subtitle: "Zdravi i praktični",
    text: "Uživajte u kvalitetu tokom cele godine.",
  },
];

const About_five = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Optional: auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 1110000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      {slides.map((slide, index) => (
        <div
          className={`slide ${index === currentSlide ? "active" : ""}`}
          key={index}
        >
          <div className="left">
            <img src={slide.bigImage} alt="Big" />
          </div>
          <div className="right">
            <h2>{slide.title}</h2>
            <h4>{slide.subtitle}</h4>
            <p dangerouslySetInnerHTML={{ __html: slide.text }} />
          </div>
        </div>
      ))}

      <div className="controls">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === currentSlide ? "active" : ""}`}
            onClick={() => setCurrentSlide(i)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default About_five;
