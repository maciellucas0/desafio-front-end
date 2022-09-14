import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ContexProvider } from "./contexts/contextCadastro";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContexProvider>
        <App />
      </ContexProvider>
    </BrowserRouter>
  </React.StrictMode>
);
