import { AiOutlineMore } from "react-icons/ai";
import { BsCheck2Circle } from "react-icons/bs";
import { useContext } from "react";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import {
  DivCentral,
  DivHexagono,
  DivInferior,
  DivSuperior,
  StyledContainer,
} from "./style";
import { ContextHome } from "../../contexts/contextHome";

interface Props {
  index: number;
}
export const Card = ({ index }: Props) => {
  const { dados } = useContext(ContextHome);
  console.log(dados[index].cached_blox.knowledge_area.color2);
  console.log(dados[index].cached_blox.knowledge_area.color1);
  function stringAvatar(name: string) {
    return {
      sx: {
        bgcolor: dados[index].cached_blox.knowledge_area.color1,
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }

  return (
    <>
      <StyledContainer>
        <DivSuperior
          color={`${dados[index].cached_blox.knowledge_area.color2}`}
          className="superior"
        >
          <div>
            <p>Data limite</p>
          </div>
          <div>
            <button>
              <BsCheck2Circle size={20} />
            </button>
            <button>
              <AiOutlineMore size={20} />
            </button>
          </div>
        </DivSuperior>
        <DivCentral
          color={`${dados[index].cached_blox.knowledge_area.color1}`}
          className="center"
        >
          <DivHexagono
            color={`${dados[index].cached_blox.knowledge_area.color2}`}
            id="hexagono"
          >
            <img
              src={dados[index].cached_blox.functional_area.icon_white_url}
              alt="Blox imagem"
            />
          </DivHexagono>
          <p id="titulo">{dados[index].title}</p>

          <div className="modalidade">
            <div className="column">
              <p>ID</p>
              <span>{dados[index].id}</span>
            </div>
            <div className="column">
              <p>Modalidade</p>
              <span>{dados[index].modality}</span>
            </div>
          </div>
        </DivCentral>
        <DivInferior
          color={`${dados[index].cached_blox.knowledge_area.color2}`}
          className="inferior"
        >
          <Stack direction="row" spacing={2}>
            <Avatar
              {...stringAvatar(dados[index].cached_blox.responsible.name)}
            />
          </Stack>
        </DivInferior>
      </StyledContainer>
    </>
  );
};
