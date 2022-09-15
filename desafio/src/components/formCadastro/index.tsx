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
    name: yup.string().required("Nome obrigatório"),
    cpf: yup
      .string()
      .required("CPF obrigatório")
      .min(11, "Minimo 11 números")
      .max(11, "Máximo 11 números"),
    birth_date: yup.string().required("Data de nascimento obrigatória"),
    email: yup.string().required("email obrigatório").email(),
    password: yup.string().required("Senha obrigatória"),
    password_confirmation: yup
      .string()
      .oneOf([yup.ref("password"), null], "As senhas precisam ser iguais."),
    allow_emails: yup.boolean().notRequired(),
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
    cadastrar,
    senhaPrimaria,
    senhaSecundaria,
    VerSenhaPrimaria,
    VerSenhaSecundaria,
  } = useContext(ContextCadastro);

  return (
    <>
      <Formulario onSubmit={handleSubmit(cadastrar)}>
        <h1>Quero me cadastrar</h1>

        <input type="text" placeholder="Nome" {...register("name")} />
        <span className="error">
          {errors.name?.message as unknown as string}
        </span>

        <div className="row">
          <input
            type="number"
            placeholder="CPF Somente números"
            {...register("cpf")}
          />
          <span className="error">
            {errors.cpf?.message as unknown as string}
          </span>
          <fieldset>
            <legend>Data de nascimento</legend>
            <input type="date" id="noBorder" {...register("birth_date")} />
            <span className="error">
              {errors.birth_date?.message as unknown as string}
            </span>
          </fieldset>
        </div>
        <input type="email" placeholder="E-mail" {...register("email")} />

        <div className="senha">
          <input
            type={senhaPrimaria}
            placeholder="Crie sua senha"
            {...register("password")}
          />

          <button type="button" onClick={() => VerSenhaPrimaria()}>
            <BsFillEyeSlashFill />
          </button>
        </div>
        <div className="senha">
          <input
            type={senhaSecundaria}
            placeholder="Confirme sua senha"
            {...register("password_confirmation")}
          />

          <button onClick={() => VerSenhaSecundaria()} type="button">
            <BsFillEyeSlashFill />
          </button>
        </div>
        <div className="rowCheckbox">
          <input
            type="checkbox"
            id="checkbox"
            {...register("allow_emails")}
          ></input>
          <span>Voce aceita receber comunicações por e-mail?</span>
        </div>

        <button type="submit" id="cadastrar">
          <RiFileList2Fill />
          CADASTRAR
        </button>
        <div>
          <span className="error">
            {errors.password_confirmation?.message as unknown as string}
          </span>
          <span className="error">
            {errors.password?.message as unknown as string}
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
