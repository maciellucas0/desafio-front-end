import { BsFillEyeSlashFill } from "react-icons/bs";
import { Formulario } from "./style";
const FormLogin = () => {
  return (
    <>
      <Formulario>
        <h1>Seja bem vindo!</h1>
        <fieldset>
          <legend>Painel de acesso</legend>
        </fieldset>
        <input type="text" placeholder="Nome de Usuário" />

        <div className="senha">
          <input type="password" placeholder="Crie sua senha" />
          <button type="button">
            <BsFillEyeSlashFill />
          </button>
        </div>

        <div className="divButton">
          <button className="button">ACESSAR</button>
          <button className="button">VOLTAR</button>
        </div>
      </Formulario>
    </>
  );
};

export default FormLogin;
