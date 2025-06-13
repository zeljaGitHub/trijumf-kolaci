import React from "react";
import { Link } from "react-router-dom";
import "./About_two.css";

const About_two = () => {
  return (
    <div className="about-two">
      <img src="./linija-lj.png" alt="" className="linija-lj-about-two" />
      <h4>Naša priča</h4>
      <p>
        Sve je počelo iz ljubavi prema domaćim kolačima, onim pravim -
        mirišljavim, mekim, ručno pravljenim, baš kao iz bakine kuhinje. Vođeni
        idejom da spojimo tradiciju i kvalitet, godinama unapređujemo naše
        recepte, čuvamo ono što valja, i dodajemo pažljivo ono novo što
        obogaćuje ukus.
      </p>
      <p>
        Naši kolači nastaju u porodičnoj atmosferi, sa pažnjom prema svakom
        detalju - od izbora sastojaka do načina pakovanja. Upravo zato nas
        prepoznaju oni koji znaju da kvalitet nema prečicu.
      </p>
      <p>
        Danas, naše poslastičarnice ulepšavaju trpeze širom Srbije, a naš cilj
        ostaje isti - da vam pružimo autentičan, domaći ukus koji vraća osmeh na
        lice.
      </p>
      <Link to="/Proizvodi">
        <button>Naši proizvodi</button>
      </Link>
    </div>
  );
};

export default About_two;
