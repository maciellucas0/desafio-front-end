import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { BsFillEyeSlashFill } from "react-icons/bs";
import { RiFileList2Fill } from "react-icons/ri";
import { Formulario } from "./style";

import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ContextCadastro } from "../../contexts/contextCadastro";
import { useContext } from "react";

const FormCadastro = () => {
  const navigate = useNavigate();

  const formSchema = yup.object().shape({
    nome: yup.string().required("Nome obrigatório"),
    cpf: yup
      .string()
      .required("CPF obrigatório")
      .min(11, "Minimo 11 números")
      .max(11, "Máximo 11 números"),
    nascimento: yup.string().required("Data de nascimento obrigatória"),
    email: yup.string().required("email obrigatório").email(),
    senha: yup.string().required("Senha obrigatória"),
    confirmarSenha: yup
      .string()
      .oneOf([yup.ref("senha"), null], "As senhas precisam ser iguais."),
    checkbox: yup.boolean().notRequired(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  /*------CONTEXTO--------*/
  const {
    onSubmit,
    senhaPrimaria,
    senhaSecundaria,
    VerSenhaPrimaria,
    VerSenhaSecundaria,
  } = useContext(ContextCadastro);

  return (
    <>
      <Formulario onSubmit={handleSubmit(onSubmit)}>
        <h1>Quero me cadastrar</h1>

        <input type="text" placeholder="Nome" {...register("nome")} />
        <span className="error">
          {errors.nome?.message as unknown as string}
        </span>

        <div className="row">
          <input type="number" placeholder="CPF" {...register("cpf")} />
          <span className="error">
            {errors.cpf?.message as unknown as string}
          </span>
          <fieldset>
            <legend>Data de nascimento</legend>
            <input type="date" id="noBorder" {...register("nascimento")} />
            <span className="error">
              {errors.nascimento?.message as unknown as string}
            </span>
          </fieldset>
        </div>
        <input type="email" placeholder="E-mail" {...register("email")} />

        <div className="senha">
          <input
            type={senhaPrimaria}
            placeholder="Crie sua senha"
            {...register("senha")}
          />

          <button type="button" onClick={() => VerSenhaPrimaria()}>
            <BsFillEyeSlashFill />
          </button>
        </div>
        <div className="senha">
          <input
            type={senhaSecundaria}
            placeholder="Confirme sua senha"
            {...register("confirmarSenha")}
          />

          <button onClick={() => VerSenhaSecundaria()} type="button">
            <BsFillEyeSlashFill />
          </button>
        </div>
        <div className="rowCheckbox">
          <input
            type="checkbox"
            id="checkbox"
            {...register("checkbox")}
          ></input>
          <span>Voce aceita receber comunicações por e-mail?</span>
        </div>

        <button type="submit" id="cadastrar">
          <RiFileList2Fill />
          CADASTRAR
        </button>
        <div>
          <span className="error">
            {errors.confirmarSenha?.message as unknown as string}
          </span>
          <span className="error">
            {errors.senha?.message as unknown as string}
          </span>
          <span className="error">
            {errors.email?.message as unknown as string}
          </span>
        </div>
      </Formulario>
    </>
  );
};

export default FormCadastro;
