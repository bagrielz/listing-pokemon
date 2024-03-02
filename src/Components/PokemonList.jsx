import React from "react";
import { GlobalContext } from "../GlobalContext";

const PokemonList = () => {
  const { pokemons, gifs } = React.useContext(GlobalContext);
  console.log(pokemons);

  return (
    <main>
      <ul className="pokemon-listing">
        {pokemons.map((pokemon, index) => (
          <li className="card" key={index}>
            <div>
              <span>{pokemon.name}</span>
              <span>{pokemon.number}</span>
            </div>

            <img src={gifs[index]} alt={pokemon.name} />

            <ul className="types">
              <li className={pokemon.types[0]}>{pokemon.types[0]}</li>
              <li className={pokemon.types[1]}>{pokemon.types[1]}</li>
            </ul>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default PokemonList;
