import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ContexProvider } from "./contexts/contextCadastro";
import { ContextLoginProvider } from "./contexts/contextLogin";
import { Toaster } from "react-hot-toast";
import { ContextHomeProvider } from "./contexts/contextHome";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContexProvider>
        <ContextLoginProvider>
          <Toaster />
          <ContextHomeProvider>
            <App />
          </ContextHomeProvider>
        </ContextLoginProvider>
      </ContexProvider>
    </BrowserRouter>
  </React.StrictMode>
);
