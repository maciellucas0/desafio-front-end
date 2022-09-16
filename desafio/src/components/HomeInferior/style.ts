import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 100vw;
  height: 90px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border-top: 1px solid #ebebeb;
  box-shadow: -1px -5px 15px -7px #ebebeb;
  position: relative;
  bottom: 0;

  span {
    font-family: "Roboto", sans-serif;
    font-size: 12px;
  }
  .cards {
    border: solid 1px #ebebeb;
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    gap: 25px;

    padding: 5px;
    width: 230px;
    height: 65px;
  }
  .cards-blue {
    border: solid 1px #ebebeb;
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    gap: 25px;

    padding: 5px;
    width: 230px;
    height: 65px;
    background-color: #2196f3;
    color: white;

    .icon-white {
      background-color: white;
      padding: 5px;
      border-radius: 50%;
      color: #2196f3;
    }
  }
  .icon {
    background-color: #2196f3;
    padding: 5px;
    border-radius: 50%;
    color: white;
  }
`;

export const StyledBotoes = styled.div`
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 2rem;

  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 4rem;
  .botaoInferior {
    background-color: rgb(188, 188, 188);
    font-weight: 400;
    color: rgb(120, 120, 120);
    padding: 7px;
    border-radius: 5px;
    width: 200px;
    border: none;
    cursor: pointer;
  }
`;
