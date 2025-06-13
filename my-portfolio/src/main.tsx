import React from "react";
import ReactDOM from "react-dom/client";
import Portfolio from "./Portfolio";
import "./index.css"; // Import your global styles
import "./portfolio-html-styles.css"; // Importando o novo CSS global com os estilos do HTML original para aplicar em toda a aplicação
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Portfolio />
  </React.StrictMode>
);
