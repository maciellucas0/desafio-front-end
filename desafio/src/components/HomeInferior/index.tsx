import { FaPen } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import { BsCheck } from "react-icons/bs";
import { MdFolderSpecial } from "react-icons/md";
import { StyledBotoes, StyledFooter } from "./style";

export const HomeInferior = () => {
  return (
    <>
      <StyledBotoes>
        <button className="botaoInferior">ANTERIOR</button>
        <button className="botaoInferior">PRÓXIMO</button>
      </StyledBotoes>
      <StyledFooter>
        <div className="cards">
          <FaPen className="icon" />
          <span>Aberto para edição</span>
        </div>
        <div className="cards">
          <AiFillEye className="icon" />
          <span>Aguardando revisão</span>
        </div>
        <div className="cards">
          <BsCheck className="icon" />
          <span>Aprovado</span>
        </div>
        <div className="cards-blue">
          <MdFolderSpecial className="icon-white" />
          <span>Arquivados</span>
        </div>
      </StyledFooter>
    </>
  );
};
