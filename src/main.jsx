import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { GlobalStorage } from "./GlobalContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GlobalStorage>
    <App />
  </GlobalStorage>
);
