import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Info.css"; // ako koristiš posebni CSS

const Info = () => {
  const [imageSrc, setImageSrc] = useState("/info.png");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setImageSrc("/info-mobile.png"); // mobilna verzija slike
      } else {
        setImageSrc("/info.png"); // desktop verzija slike
      }
    };

    handleResize(); // odmah pokreni pri mount-u
    window.addEventListener("resize", handleResize); // slušaj resize

    return () => window.removeEventListener("resize", handleResize); // cleanup
  }, []);

  return (
    <section className="wave-section">
      <img src={imageSrc} alt="wave" className="wave-bg" />

      <div className="wave-content">
        <p>
          Tražite vrhunske domaće kolače i torte za vaš restoran,
          poslastičarnicu ili hotel? Naša proizvodnja garantuje kvalitet,
          autentičan ukus i savršen izgled svake poslastice! Sa pažljivo
          odabranim sastojcima i dugogodišnjim iskustvom, donosimo vam slatke
          trenutke vredne pamćenja. Kontaktirajte nas danas i obezbedite
          najbolje kolače za svoje kupce! 🍰 📩 Pošaljite nam upit ili nas
          pozovite – spremni smo da kreiramo slatke specijalitete baš po vašoj
          meri!
        </p>
        <Link to="/O-nama">
          <button>Više o nama</button>
        </Link>
      </div>
    </section>
  );
};

export default Info;
