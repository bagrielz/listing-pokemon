import React from "react";
import { GlobalContext } from "../GlobalContext";

const PokemonList = () => {
  const { list, gifs } = React.useContext(GlobalContext);
  console.log(list);

  return (
    <main>
      <ul>
        {list.map((pokemon, index) => (
          <li key={index}>
            <div>
              <span>{pokemon.name}</span>
              <span>{pokemon.number}</span>
            </div>

            <img src={gifs[index]} alt={pokemon.name} />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default PokemonList;
