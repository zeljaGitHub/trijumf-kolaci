import React, { useState, useRef } from "react";
import "./About_four.css";

const valueData = [
  {
    img: "./11.png",
    title: "Visoki standardi",
    desc: "Nikada ne pravimo kompromise kada je kvalitet u pitanju. Svaki proizvod se priprema sa posebnom pažnjom, preciznošću i ljubavlju, kako bismo ispunili najviše standarde.",
  },
  {
    img: "./22.png",
    title: "Predan rad",
    desc: "Od ranog jutra do kasno uveče, naš tim posvećeno radi kako bi svaki zalogaj bio savršen i govorio više od reči.",
  },
  {
    img: "./33.png",
    title: "Vešti poslastičari",
    desc: "Naši iskusni poslastičari u svaki klač unose znanje, ljubav i tradiciju. Zato su naši proizvodi puni ukusa i topline domaće kuhinje.",
  },
  {
    img: "./44.png",
    title: "Odgovornost",
    desc: "Odgovorno pristupamo svakom koraku. Od nabavke sastojaka do isporuke, jer nam je vaše zadovoljstvo na prvom mestu.",
  },
];

const About_four = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const carouselRef = useRef(null);

  // Update isMobile on window resize
  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const goPrev = (e) => {
    e?.preventDefault();
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + valueData.length) % valueData.length);
  };

  const goNext = (e) => {
    e?.preventDefault();
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % valueData.length);
  };

  // Swipe handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const difference = touchStartX.current - touchEndX.current;
    if (difference > 50) {
      // Swipe left - go next
      goNext();
    } else if (difference < -50) {
      // Swipe right - go prev
      goPrev();
    }

    // Reset values
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <div className="values-section">
      <div
        className="values-content"
        ref={carouselRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {isMobile ? (
          <>
            <div className="value-box" key={currentIndex}>
              <img
                src={valueData[currentIndex].img}
                alt={`Ikonica ${currentIndex + 1}`}
              />
              <h3>{valueData[currentIndex].title}</h3>
              <p>{valueData[currentIndex].desc}</p>
            </div>
            <button
              type="button"
              className="arrow-button-a4 prev"
              onClick={goPrev}
              aria-label="Previous"
            >
              <img src="left-arrow.png" alt="Previous" className="arrow-img" />
            </button>
            <button
              type="button"
              className="arrow-button-a4 next"
              onClick={goNext}
              aria-label="Next"
            >
              <img src="right-arrow.png" alt="Next" className="arrow-img" />
            </button>
          </>
        ) : (
          valueData.map((item, i) => (
            <div className="value-box" key={i}>
              <img src={item.img} alt={`Ikonica ${i + 1}`} />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default About_four;
