import styled from "styled-components";

export const StyledSection = styled.section`
  #selector {
    margin-left: 8%;
    margin-top: 1rem;
  }
`;

export const StyledUl = styled.ul`
  display: flex;
  flex-direction: ${(props) => props.color};
  flex-wrap: wrap;
  justify-content: center;
  width: 100vw;
  height: auto;
  margin: 0 auto;
  margin-top: 1rem;
  gap: 3rem;

  @media (max-width: 380px) {
    width: 90vw;

    li {
      width: 100%;
      justify-content: center;

      main {
        margin: 0 auto;
      }
    }
  }
`;
