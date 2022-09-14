import { BsFillEyeSlashFill } from "react-icons/bs";
import { RiFileList2Fill } from "react-icons/ri";
import { Formulario } from "./style";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormCadastro = () => {
  const navigate = useNavigate();

  const [senhaPrimaria, setSenhaPrimaria] = useState("password");
  const [senhaSecundaria, setSenhaSecundaria] = useState("password");

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
      <Formulario>
        <h1>Quero me cadastrar</h1>

        <input type="text" placeholder="Nome" />
        <div className="row">
          <input type="number" placeholder="CPF" />
          <fieldset>
            <legend>Data de nascimento</legend>
            <input type="date" id="noBorder" />
          </fieldset>
        </div>
        <input type="email" placeholder="E-mail" />
        <div className="senha">
          <input type={senhaPrimaria} placeholder="Crie sua senha" />
          <button type="button" onClick={() => VerSenhaPrimaria()}>
            <BsFillEyeSlashFill />
          </button>
        </div>
        <div className="senha">
          <input type={senhaSecundaria} placeholder="Confirme sua senha" />
          <button onClick={() => VerSenhaSecundaria()} type="button">
            <BsFillEyeSlashFill />
          </button>
        </div>
        <div className="rowCheckbox">
          <input type="checkbox" id="checkbox"></input>
          <span>Voce aceita receber comunicações por e-mail?</span>
        </div>

        <button id="cadastrar">
          <RiFileList2Fill />
          CADASTRAR
        </button>
      </Formulario>
    </>
  );
};

export default FormCadastro;
