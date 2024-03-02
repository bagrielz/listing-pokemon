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
  const pokemons = [
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
    {
      name: "Venusaur",
      number: "#003",
      types: ["Grama", "Veneno"],
      description:
        "Sua planta floresce quando está absorvendo energia solar. Ele permanece em movimento para buscar a luz solar.",
    },
    {
      name: "Charmander",
      number: "#004",
      types: ["Fogo"],
      description:
        "Tem preferência por coisas quentes. Quando chove, diz-se que o vapor jorra da ponta de sua cauda.",
    },
    {
      name: "Charmeleon",
      number: "#005",
      types: ["Fogo"],
      description:
        "Tem uma natureza bárbara. Na batalha, ele chicoteia sua cauda ardente e corta com garras afiadas.",
    },
    {
      name: "Charizard",
      number: "#006",
      types: ["Fogo"],
      description:
        "Ele cospe fogo que é quente o suficiente para derreter pedregulhos. Pode causar incêndios florestais soprando chamas.",
    },
    {
      name: "Squirtle",
      number: "#007",
      types: ["Água"],
      description:
        "Quando ele retrai seu longo pescoço em sua concha, ele esguicha água com força vigorosa.",
    },
    {
      name: "Wartortle",
      number: "#008",
      types: ["Água"],
      description:
        "É reconhecido como um símbolo de longevidade. Se sua concha tem algas, esse Wartortle é muito antigo.",
    },
    {
      name: "Blastoise",
      number: "#009",
      types: ["Água"],
      description:
        "Ele esmaga seu inimigo sob seu corpo pesado para causar desmaios. Em uma pitada, ele se retirará dentro de sua concha.",
    },
    {
      name: "Caterpie",
      number: "#010",
      types: ["Inseto"],
      description:
        "Para proteção, ele libera um fedor horrível da antena em sua cabeça para afastar os inimigos.",
    },
  ];

  return (
    <GlobalContext.Provider value={{ pokemons, gifs }}>
      {children}
    </GlobalContext.Provider>
  );
};
