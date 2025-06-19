import "./Footer.css";
import logo from "/logo.png"; // zameni sa pravom putanjom ako treba
import facebookIcon from "/facebook.png";
import instagramIcon from "/instagram.png";
import youtubeIcon from "/youtube.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wave">
        <picture>
          <source media="(max-width: 768px)" srcSet="/footer2.png" />
          <img src="/footer-bg.png" alt="footer dekoracija" />
        </picture>
      </div>

      <div className="footer-content">
        {/* Leva kolona */}
        <div className="footer-section footer-section-left">
          <img src={logo} alt="Logo" className="footer-logo" />
          <p>
            Pravljenje domaćih kolača po najboljim receptima, sa pažnjom na
            svaki detalj i korišćenjem samo najkvalitetnijih sastojaka.
          </p>
          <p>
            Naša tradicija i ljubav prema slatkišima garantuju vrhunski ukus u
            svakom zalogaju.
          </p>
        </div>

        {/* Srednja kolona */}
        <div className="footer-section">
          <h3>Kontakt</h3>
          <p>Kovačkih Boraca 34 V</p>
          <p>36101 Kraljevo</p>
          <p>060/64-13-665</p>
          <p>info@trijumfstanic.rs</p>
          <div className="footer-socials">
            <a
              href="https://www.facebook.com/people/Trijumf-Stani%C4%87/61577086255509/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebookIcon} alt="Facebook" />
            </a>

            <a
              href="https://www.instagram.com/trijumfstanic"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagramIcon} alt="Instagram" />
            </a>

            {/* <img src={youtubeIcon} alt="YouTube" /> */}
          </div>
        </div>

        {/* Desna kolona */}
        <div className="footer-section">
          <h3>Naruči sada</h3>
          <form className="footer-form">
            <input type="email" placeholder="Vaša email adresa" />
            <textarea placeholder="Napiši poruku"></textarea>
            <button type="submit">Pošalji</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
