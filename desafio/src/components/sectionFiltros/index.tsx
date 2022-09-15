import { FcSearch } from "react-icons/fc";
import { StyledSection } from "./style";
export const SectionFilter = () => {
  return (
    <>
      <StyledSection>
        <div id="container">
          <h1>Arquivados</h1>
          <div>
            <input id="title" type="text" placeholder="Título ou ID" />
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
