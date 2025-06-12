import React from "react";
import "./Gallery.css";

const Gallery = () => {
  return (
    <div className="container-22">
      <h4 className="galerijah4">Galerija proizvoda</h4>
      <img
        src="isprekidana-linija-lj.png"
        alt=""
        className="isprekidana-linija-lj"
      />
      <div className="gallery">
        <img src="/galleryeigth/1.jpg" alt="Slika 1" />
        <img src="/galleryeigth/2.jpg" alt="Slika 2" />
        <img src="/galleryeigth/3.jpg" alt="Slika 3" />
        <img src="/galleryeigth/4.jpg" alt="Slika 4" />
        <img src="/galleryeigth/5.jpg" alt="Slika 5" />
        <img src="/galleryeigth/6.jpg" alt="Slika 6" />
        <img src="/galleryeigth/7.jpg" alt="Slika 7" />
        <img src="/galleryeigth/8.jpg" alt="Slika 8" />
      </div>
    </div>
  );
};

export default Gallery;
