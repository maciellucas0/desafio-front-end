import styled from "styled-components";

export const StyledContainer = styled.main`
  width: 400px;
  border-radius: 10px;
  p {
    font-family: "Roboto", sans-serif;
  }
  span {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 200;
    font-size: 12px;
  }
  .superior {
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    color: white;
    border-radius: 10px 10px 0 0;
    padding: 5px;

    button {
      background-color: transparent;
      border: none;
      cursor: pointer;
      color: white;
    }
  }

  .center {
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100px;
    position: relative;
    color: white;
    padding: 5px;

    #titulo {
      max-width: 280px;
      font-size: 18px;
      margin-left: 30px;
    }

    .modalidade {
      display: flex;
      flex-direction: row;
      position: absolute;
      bottom: 0;
      width: 100%;
      margin-left: 10px;
    }

    .column {
      display: flex;
      flex-direction: column;
      margin-right: 20px;
    }
  }

  .inferior {
    width: 100%;
    height: 50px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    padding: 5px;
    border-radius: 0 0 10px 10px;
  }
`;

export const DivSuperior = styled.div`
  background-color: ${(props) => props.color};
`;

export const DivCentral = styled.div`
  background-color: ${(props) => props.color};
`;

export const DivInferior = styled.div`
  background-color: ${(props) => props.color};
`;

export const DivHexagono = styled.div`
  background-color: ${(props) => props.color};

  width: 50px;
  height: 50px;
  position: relative;
  margin-top: 1rem;
  margin-bottom: 2.5rem;

  img {
    width: 100%;
    height: 100%;
  }
`;
