import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { BsFillEyeSlashFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Formulario } from "./style";
import { ContextLogin } from "../../contexts/contextLogin";

const FormLogin = () => {
  const { verSenha, VerSenha, Logar } = useContext(ContextLogin);
  const navigate = useNavigate();

  const formSchema = yup.object().shape({
    name: yup.string().required("Usuário obrigatório"),
    password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  return (
    <>
      <Formulario onSubmit={handleSubmit(Logar)}>
        <h1>Seja bem vindo!</h1>
        <fieldset>
          <legend>Painel de acesso</legend>
        </fieldset>
        <input
          type="text"
          placeholder="Nome de Usuário"
          {...register("name")}
        />

        <div className="senha">
          <input
            type={verSenha}
            placeholder="Digite sua senha"
            {...register("password")}
          />

          <button type="button" onClick={() => VerSenha()}>
            <BsFillEyeSlashFill />
          </button>
        </div>

        <div className="divButton">
          <button className="button">ACESSAR</button>
          <button
            type="submit"
            className="button"
            onClick={() => navigate("/cadastro", { replace: true })}
          >
            VOLTAR
          </button>
        </div>
        <div>
          <span className="error">
            {errors.senha?.message as unknown as string}
          </span>
          <span className="error">
            {errors.nome?.message as unknown as string}
          </span>
        </div>
      </Formulario>
    </>
  );
};

export default FormLogin;
