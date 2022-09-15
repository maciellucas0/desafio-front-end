import { StyledHeader } from "./style";

export const Header = () => {
  return (
    <>
      <StyledHeader>
        <h1>Gerenciar unidades curriculares</h1>
        <div>
          <button>LISTA</button>
          <button>CRIAR NOVO</button>
        </div>
      </StyledHeader>
    </>
  );
};
