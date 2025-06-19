import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./KontaktForma.css";

const KontaktForma = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // zameni
        "YOUR_TEMPLATE_ID", // zameni
        form.current,
        "YOUR_USER_ID" // zameni
      )
      .then(
        (result) => {
          console.log(result.text);
          setSent(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="kontakt-container">
      <div className="kontakt-info-text">
        <img src="./linija-lj.png" alt="" className="linija-lj-forma" />
        <p className="kontakt-info-text">
          Za sve dodatne informacije, personalizovane ponude ili dogovor oko
          porudžbina, naš tim vam stoji na raspolaganju – pišite nam ili nas
          pozovite, tu smo da zajedno kreiramo savršene slatke trenutke.
        </p>
      </div>
      <div className="kontakt-content">
        <div className="kontakt-levo">
          <p>Kovačkih Boraca 34 V</p>
          <p>36101 Kraljevo</p>
          <p>060/441 36 68</p>
          <p>info@trijumfstanic.rs</p>
        </div>
        <form ref={form} onSubmit={sendEmail} className="kontakt-forma">
          <input
            type="text"
            name="user_name"
            placeholder="Ime i prezime"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Email adresa"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Naslov poruke"
            required
          />
          <textarea name="message" placeholder="Text poruke" required />
          <button type="submit">Pošalji poruku</button>
          {sent && (
            <p className="success-message">Poruka je uspešno poslata!</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default KontaktForma;
