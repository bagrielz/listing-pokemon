import React from "react";

// Gifs
import Bulbasaur from "./assets/bulbasaur.gif";
import Blastoise from "./assets/blastoise.gif";
import Caterpie from "./assets/caterpie.gif";
import Charizard from "./assets/charizard.gif";
import Charmander from "./assets/charmander.gif";
import Charmeleon from "./assets/charmeleon.gif";
import Ivysaur from "./assets/ivysaur.gif";
import Squirtle from "./assets/squirtle.gif";
import Venusaur from "./assets/venusaur.gif";
import Wartortle from "./assets/wartortle.gif";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  // Array dos gifs
  const gifs = [
    Bulbasaur,
    Ivysaur,
    Venusaur,
    Charmander,
    Charmeleon,
    Charizard,
    Squirtle,
    Wartortle,
    Blastoise,
    Caterpie,
  ];

  // Informações do pokémon
  const list = [
    {
      name: "Bulbasaur",
      number: "#001",
      types: ["Grama", "Veneno"],
      description:
        "Há uma semente de planta em suas costas desde o dia que este Pókemon nasce. A semente cresce lentamente.",
    },
    {
      name: "Ivysaur",
      number: "#002",
      types: ["Grama", "Veneno"],
      description:
        "Quando o bulbo em suas costas cresce, parece perder a capacidade de ficar de pé em suas patas traseiras.",
    },
  ];

  return (
    <GlobalContext.Provider value={{ list, gifs }}>
      {children}
    </GlobalContext.Provider>
  );
};
