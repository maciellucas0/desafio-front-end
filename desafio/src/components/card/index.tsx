import { AiOutlineMore } from "react-icons/ai";
import { BsCheck2Circle } from "react-icons/bs";
import { useContext } from "react";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { StyledContainer } from "./style";
import { ContextHome } from "../../contexts/contextHome";

function stringAvatar(name: string) {
  return {
    sx: {
      bgcolor: "red",
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

export const Card = () => {
  const { dados } = useContext(ContextHome);

  console.log(dados);
  return (
    <>
      <StyledContainer>
        <div className="superior">
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
        </div>
        <div className="center">
          <div id="hexagono">
            <img src="" alt="Blox imagem" />
          </div>
          <p id="titulo">{}</p>

          <div className="modalidade">
            <div className="column">
              <p>ID</p>
              <span>numero do id</span>
            </div>
            <div className="column">
              <p>Modalidade</p>
              <span>nossa modalidade</span>
            </div>
          </div>
        </div>
        <div className="inferior">
          <Stack direction="row" spacing={2}>
            <Avatar {...stringAvatar("Kent Dodds")} />
          </Stack>
        </div>
      </StyledContainer>
    </>
  );
};
