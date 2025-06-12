import React, { useEffect, useRef } from "react";
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
  const slideRef = useRef(null);
  const requestRef = useRef();
  const startTimeRef = useRef();
  const speed = 100; // px/s - možete podesiti brzinu

  const animate = (timestamp) => {
    if (!startTimeRef.current) startTimeRef.current = timestamp;
    const elapsed = timestamp - startTimeRef.current;
    const translateX =
      (-(elapsed / 1000) * speed) % (slideRef.current.scrollWidth / 2);

    slideRef.current.style.transform = `translateX(${translateX}px)`;
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  return (
    <div className="logos-wrapper">
      <div className="logos">
        <div className="logos-slide" ref={slideRef}>
          {[...images, ...images].map((img, index) => (
            <img key={index} src={`/slider1/${img}`} alt="" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
