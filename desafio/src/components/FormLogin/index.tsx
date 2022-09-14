import { BsFillEyeSlashFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Formulario } from "./style";

const FormLogin = () => {
  const navigate = useNavigate();
  const [verSenha, setVerSenha] = useState("password");

  function VerSenha() {
    if (verSenha === "password") {
      setVerSenha("text");
    } else {
      setVerSenha("password");
    }
  }

  return (
    <>
      <Formulario>
        <h1>Seja bem vindo!</h1>
        <fieldset>
          <legend>Painel de acesso</legend>
        </fieldset>
        <input type="text" placeholder="Nome de Usuário" />

        <div className="senha">
          <input type={verSenha} placeholder="Crie sua senha" />
          <button type="button" onClick={() => VerSenha()}>
            <BsFillEyeSlashFill />
          </button>
        </div>

        <div className="divButton">
          <button className="button">ACESSAR</button>
          <button
            className="button"
            onClick={() => navigate("/cadastro", { replace: true })}
          >
            VOLTAR
          </button>
        </div>
      </Formulario>
    </>
  );
};

export default FormLogin;
