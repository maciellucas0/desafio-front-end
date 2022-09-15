import { createContext } from "react";
import { useState } from "react";
import { api } from "../services/api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

interface DadosCadastrais {
  name: string;
  cpf: string;
  birth_date: string;
  email: string;
  password: string;
  password_confirmation: string;
  allow_emails: boolean;
}

interface Context {
  cadastrar: any;
  senhaPrimaria: string;
  senhaSecundaria: string;
  VerSenhaPrimaria: () => void;
  VerSenhaSecundaria: () => void;
}

export const ContextCadastro = createContext({} as Context);

export const ContexProvider = ({ children }: any) => {
  const [senhaPrimaria, setSenhaPrimaria] = useState("password");
  const [senhaSecundaria, setSenhaSecundaria] = useState("password");
  const navigate = useNavigate();

  const cadastrar = (data: DadosCadastrais) => {
    api
      .post(
        "/auth",
        {
          institution_id: 22,
          name: data.name,
          email: data.email,
          username: data.email,
          password: data.password,
          password_confirmation: data.password_confirmation,
          cpf: data.cpf,
          birth_date: data.birth_date,
          allow_emails: data.allow_emails,
          confirm_success_url: "https://dev.blox.education/public/22/offerings",
        },
        {
          headers: {
            Accept: "application/json, text/plain, */*",
          },
        }
      )
      .then((response) => {
        toast.success("Cadastro Realizado com sucesso!");
        navigate("/login", { replace: true });
      })
      .catch((error) => {
        toast.error("Ops! tente novamente");
        console.error(error);
      });
  };

  function VerSenhaPrimaria() {
    if (senhaPrimaria === "password") {
      setSenhaPrimaria("text");
    } else {
      setSenhaPrimaria("password");
    }
  }
  function VerSenhaSecundaria() {
    if (senhaSecundaria === "password") {
      setSenhaSecundaria("text");
    } else {
      setSenhaSecundaria("password");
    }
  }

  return (
    <>
      <ContextCadastro.Provider
        value={{
          cadastrar,
          senhaPrimaria,
          senhaSecundaria,
          VerSenhaPrimaria,
          VerSenhaSecundaria,
        }}
      >
        {children}
      </ContextCadastro.Provider>
    </>
  );
};
