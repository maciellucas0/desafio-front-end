import { createContext } from "react";
import { useState } from "react";
import { api } from "../services/api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
interface Context {
  verSenha: string;
  VerSenha: () => void;
  Logar: any;
}

interface Dados {
  name: string;
  password: string;
}

export const ContextLogin = createContext({} as Context);
export const ContextLoginProvider = ({ children }: any) => {
  const navigate = useNavigate();
  const [verSenha, setVerSenha] = useState("password");

  function VerSenha() {
    if (verSenha === "password") {
      setVerSenha("text");
    } else {
      setVerSenha("password");
    }
  }

  const Logar = (data: Dados) => {
    api
      .post(
        "/v2/authentication/login",
        {
          username: data.name,
          password: data.password,
          institution_id: 22,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        toast.success("Logado com sucesso!");
        navigate("/cadastro", { replace: true });
      })
      .catch((error) => {
        toast.error("Ops! Confira seu usuário ou senha");
      });
  };

  return (
    <>
      <ContextLogin.Provider value={{ verSenha, VerSenha, Logar }}>
        {children}
      </ContextLogin.Provider>
    </>
  );
};
