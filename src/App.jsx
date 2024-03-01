import React from "react";

// Componentes
import Header from "./Components/Header";
import PokemonList from "./Components/PokemonList";
import { GlobalStorage } from "./GlobalContext";

function App() {
  return (
    <GlobalStorage>
      <div className="App">
        <Header />
        <PokemonList />
      </div>
    </GlobalStorage>
  );
}

export default App;
