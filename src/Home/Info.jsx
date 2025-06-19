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
        <p>Trijumf Stanić – Kvalitet na koji možete da računate</p>
        <p>
          Trijumf Stanić se bavi proizvodnjom tradicionalnih domaćih kolača
          namenjenih maloprodaji, uz dosledan kvalitet, proverene recepte i
          pažljivo birane sastojke.
        </p>
        <p>
          Pored proizvodnje, specijalizovani smo i za distribuciju robe široke
          potrošnje, obezbeđujući pouzdanu i efikasnu isporuku širom Srbije.
        </p>
        <p>
          Ako tražite sigurnog partnera za snabdevanje ili proizvođača domaćih
          poslastica, Trijumf Stanić je pravi izbor.
        </p>
        <p>
          📩 Kontaktirajte nas i saznajte više o ponudi i mogućnostima saradnje
        </p>

        <Link to="/O-nama">
          <button>Više o nama</button>
        </Link>
      </div>
    </section>
  );
};

export default Info;
