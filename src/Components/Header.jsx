import React from "react";
import Pokebola from "../assets/pokeball.png";
import Sun from "../assets/sun.png";
import Moon from "../assets/moon.png";
import { GlobalContext } from "../GlobalContext";

const Header = () => {
  const { theme, toggleTheme } = React.useContext(GlobalContext);

  return (
    <header>
      <a href="/">
        <img className="pokebola" src={Pokebola} alt="Pokébola" />
      </a>
      <button onClick={toggleTheme}>
        <img
          className="theme-icon"
          src={theme === "light" ? Sun : Moon}
          alt={theme === "light" ? "Sol" : "Lua"}
        />
      </button>
    </header>
  );
};

export default Header;
