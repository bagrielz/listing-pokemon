import React from "react";

// Componentes
import Header from "./Components/Header";
import PokemonList from "./Components/PokemonList";
import { GlobalContext } from "./GlobalContext";

function App() {
  const { theme } = React.useContext(GlobalContext);

  return (
    <div className={`App ${theme === "light" ? "light" : "dark"}`}>
      <Header />
      <PokemonList />
    </div>
  );
}

export default App;
