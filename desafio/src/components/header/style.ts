import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100vw;
  height: 100px;

  background-color: #5f8afc;

  display: flex;
  flex-direction: column;

  h1 {
    font-family: "Roboto", sans-serif;
    color: white;
    margin-left: 8%;
    margin-top: 30px;
  }

  div {
    margin-left: 8%;
    margin-top: 36px;
  }

  button {
    background-color: transparent;
    border: none;
    color: white;
    font-size: 0.8rem;
    margin-left: 10px;
  }
  button:hover {
    border-bottom: 1px solid white;
    cursor: pointer;
  }
`;
