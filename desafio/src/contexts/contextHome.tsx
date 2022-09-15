import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface Context {
  dados: any;
}

export const ContextHome = createContext({} as Context);

export const ContextHomeProvider = ({ children }: any) => {
  const [dados, setDados] = useState({});
  useEffect(() => {
    api
      .get("/v1/public/institutions/22/blox_offerings?page=1&per=5", {
        headers: {
          Accept: "application/json, text/plain, */*",
        },
      })
      .then((response) => {
        setDados(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <ContextHome.Provider value={{ dados }}>{children}</ContextHome.Provider>
    </>
  );
};
