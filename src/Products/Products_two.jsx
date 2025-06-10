import "./Products_two.css";

const Products_two = () => {
  return (
    <div className="products-two-color">
      <div className="container-3">
        <img src="./linija-lj.png" alt="" className="linija-lj-products-two" />
        <h4>Svi naši proizvodi</h4>
        <p>Preuzmite naše kataloge i otkrijte šta sve imamo u ponudi.</p>
        <p>Kvalitet, tradicija i ukus na jednom mestu.</p>
        <div className="buttons">
          <button className="custom-button">
            Kolači
            <img src="download-icon.png" alt="Ikonica" className="icon" />
          </button>
          <button className="custom-button">
            Smrznuti proizvodi
            <img src="download-icon.png" alt="Ikonica" className="icon" />
          </button>
          <button className="custom-button">
            Zimnica
            <img src="download-icon.png" alt="Ikonica" className="icon" />
          </button>
          <button className="custom-button">
            Sirevi
            <img src="download-icon.png" alt="Ikonica" className="icon" />
          </button>
        </div>
        <img
          src="./isprekidana-linija.png"
          alt=""
          className="isprekidana-linija"
        />

        <h4>Kontaktirajte nas</h4>
        <p>
          Za sve dodatne informacije, personalizovane ponude ili dogovor oko
          porudžbina, naš tim vam stoji na raspolaganju - pišite nam ili nas
          pozovite, tu smo da zajedno kreiramo savršene slatke trenutke.
        </p>
        <button></button>

        <div className="products-gallery">
          <img src="./products1.jpg" alt="" />
          <img src="./products2.jpg" alt="" />
          <img src="./products3.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Products_two;
