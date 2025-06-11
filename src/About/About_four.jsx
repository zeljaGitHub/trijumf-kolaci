import React, { useState, useEffect, useRef } from "react";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
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
    desc: "Naši iskusni poslastičari u svaki kolač unose znanje, ljubav i tradiciju. Zato su naši proizvodi puni ukusa i topline domaće kuhinje.",
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
  const timerRef = useRef(null);

  // Update isMobile on window resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-advance carousel every 4 seconds on mobile
  useEffect(() => {
    if (!isMobile) {
      clearTimeout(timerRef.current);
      setCurrentIndex(0);
      return;
    }
    timerRef.current = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % valueData.length);
    }, 4000);

    return () => clearTimeout(timerRef.current);
  }, [currentIndex, isMobile]);

  const goPrev = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + valueData.length) % valueData.length);
    resetTimer();
  };

  const goNext = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % valueData.length);
    resetTimer();
  };

  const resetTimer = () => {
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % valueData.length);
    }, 4000);
  };

  return (
    <div className="values-section">
      <div className="values-content">
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
              className="arrow-button"
              onClick={goPrev}
              aria-label="Previous"
            >
              <MdArrowBack size={24} />
            </button>
            <button
              type="button"
              className="arrow-button"
              onClick={goNext}
              aria-label="Next"
            >
              <MdArrowForward size={24} />
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
