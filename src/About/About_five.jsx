import React, { useState, useEffect, useRef } from "react";
import "./About_five.css";

const slides = [
  {
    bigImage: "/carousel/Aleksandar.png",
    mobileImage: "/carousel/Aleksandar-mobile.png",
    title: "Aleksandar Stanić",
    subtitle: "Vlasnik",
    text: "Broj telefona <br> aleksandar.stanic@trijumfstanic.rs <br><br>Naša priča počela je 2015. godine, kada smo sa strašću prema domaćim kolačima i keksevima odlučili da delimo te ukuse sa drugima. Danas, sa timom od 70 radnika, ponosno proizvodimo više od dve tone kolača i keksa dnevno. <br> <br> Naš asortiman broji oko 60 različitih proizvoda, a svi naši kolači napravljeni su sa pažljivo odabranim sastojcima i puno ljubavi. I dalje se trudimo da zadržimo autentičan domaći ukus, koji će svakom našem kupcu doneti osmeh.",
  },
  {
    bigImage: "/carousel/Jovana.png",
    mobileImage: "/carousel/jovana-mobile.png",
    title: "Aleksandra Kojović",
    subtitle: "Rukovodilac finansija",
    text: "060/441 36 67 <br> aleksandra.kojovic@trijumfstanic.rs",
  },
  {
    bigImage: "/carousel/Marko.png",
    mobileImage: "/carousel/marko-mobile.png",
    title: "Saša Vesić",
    subtitle: "Referent nabavke",
    text: "060/441 36 62 <br> sasa.vesic@trijumfstanic.rs",
  },
  {
    bigImage: "/carousel/Jelena.png",
    mobileImage: "/carousel/jelena-mobile.png",
    title: "Nevena Cvetković",
    subtitle: "Direktor operacija",
    text: "060/441 36 74 <br> nevena.cvetkovic@trijumfstanic.rs",
  },
  {
    bigImage: "/carousel/Bratislav.png",
    mobileImage: "/carousel/bratislav-mobile.png",
    title: "Zoran Janković",
    subtitle: "Direktor prodaje",
    text: "063/328 621 <br> zoran.jankovic@trijumfstanic.rs",
  },
  {
    bigImage: "/carousel/Joja.png",
    mobileImage: "/carousel/joja-mobile.png",
    title: "Jovana Raković",
    subtitle: "Referent logistike",
    text: "060/441 36 68 <br> jovana.rakovic@trijumfstanic.rs",
  },
  {
    bigImage: "/carousel/Jeka.png",
    mobileImage: "/carousel/jeka-mobile.png",
    title: "Nemanja Radosavljević",
    subtitle: "Direktor razvoja poslovanja",
    text: "060/441 36 60 <br> nemanja.radosavljevic@trijumfstanic.rs",
  },
];

const About_five = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const carouselRef = useRef(null);

  // the minimum distance required to trigger a swipe
  const minSwipeDistance = 50;

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

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goNext();
    } else if (isRightSwipe) {
      goPrev();
    }
  };

  return (
    <div
      className="carousel-container about-five-overlap"
      ref={carouselRef}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {slides.map((slide, index) => {
        const mobileText = slide.text.split("<br><br>")[0];
        return (
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
              <p
                dangerouslySetInnerHTML={{
                  __html: isMobile ? mobileText : slide.text,
                }}
              />
            </div>
          </div>
        );
      })}

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
