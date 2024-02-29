import React from "react";
import Pokebola from "../assets/pokeball.png";
import Sun from "../assets/sun.png";

const Header = () => {
  return (
    <header>
      <a href="/">
        <img className="pokebola" src={Pokebola} alt="Pokébola" />
      </a>
      <button>
        <img className="theme" src={Sun} alt="Sol" />
      </button>
    </header>
  );
};

export default Header;
