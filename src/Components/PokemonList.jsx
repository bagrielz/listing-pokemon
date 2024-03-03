import React from "react";
import { GlobalContext } from "../GlobalContext";

const PokemonList = () => {
  const { pokemons, gifs, theme } = React.useContext(GlobalContext);

  return (
    <main>
      <ul className="pokemon-listing">
        {pokemons.map((pokemon, index) => (
          <li
            className={`${theme === "light" ? "light" : "dark"} card`}
            key={index}
          >
            <div>
              <span>{pokemon.name}</span>
              <span>{pokemon.number}</span>
            </div>

            <img src={gifs[index]} alt={pokemon.name} />

            {pokemon.types.length >= 1 ? (
              <ul className="types">
                {pokemon.types.map((type, index) => (
                  <li key={index} className={`${type} type-content`}>
                    {type}
                  </li>
                ))}
              </ul>
            ) : (
              <ul className="type">
                <li className={`${pokemon.types[0]} type-content`}>
                  {pokemon.types[0]}
                </li>
              </ul>
            )}

            <p className="description">{pokemon.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default PokemonList;
