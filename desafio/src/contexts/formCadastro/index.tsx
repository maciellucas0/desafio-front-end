import { BsFillEyeSlashFill } from "react-icons/bs";
import { RiFileList2Fill } from "react-icons/ri";
import { Formulario } from "./style";

const FormCadastro = () => {
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
          <input type="password" placeholder="Crie sua senha" />
          <button type="button">
            <BsFillEyeSlashFill />
          </button>
        </div>
        <div className="senha">
          <input type="password" placeholder="Confirme sua senha" />
          <button type="button">
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
