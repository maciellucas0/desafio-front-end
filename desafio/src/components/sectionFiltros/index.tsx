import { useState } from "react";
import { FcSearch } from "react-icons/fc";
import { StyledSection } from "./style";

export const SectionFilter = () => {
  const [busca, setBusca] = useState("");
  return (
    <>
      <StyledSection>
        <div id="container">
          <h1>Arquivados</h1>
          <div>
            <input
              value={busca}
              onChange={(event) => setBusca(event.target.value)}
              id="title"
              type="text"
              placeholder="Título ou ID"
            />
            <span>
              <FcSearch />
            </span>
            <input id="filter" type="text" placeholder="Filtrar" />
          </div>
        </div>
      </StyledSection>
    </>
  );
};
