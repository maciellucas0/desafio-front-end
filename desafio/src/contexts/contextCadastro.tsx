import { createContext } from "react";
import { useState } from "react";

interface DadosCadastrais {
  nome: string;
  cpf: string;
  nascimento: string;
  email: string;
  senha: string;
  checkbox: boolean;
}

interface Context {
  onSubmit: any;
  senhaPrimaria: string;
  senhaSecundaria: string;
  VerSenhaPrimaria: () => void;
  VerSenhaSecundaria: () => void;
}

export const ContextCadastro = createContext({} as Context);

export const ContexProvider = ({ children }: any) => {
  const [senhaPrimaria, setSenhaPrimaria] = useState("password");
  const [senhaSecundaria, setSenhaSecundaria] = useState("password");

  const onSubmit = (data: DadosCadastrais) => console.log(data);

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
          onSubmit,
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
