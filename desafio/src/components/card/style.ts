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
    background-color: green;
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
    }
  }

  .center {
    width: 100%;
    background-color: blue;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100px;
    position: relative;
    color: white;
    padding: 5px;

    #titulo {
      margin-left: 20px;
    }

    #hexagono {
      width: 50px;
      height: 27.5px;
      background: red;
      position: relative;
      margin-top: 1rem;
      margin-bottom: 2rem;
    }
    #hexagono:before {
      content: "";
      position: absolute;

      top: -12.5px;
      left: 0;
      width: 0;
      height: 0;
      border-left: 25px solid transparent;
      border-right: 25px solid transparent;
      border-bottom: 12.5px solid red;
    }
    #hexagono:after {
      content: "";
      position: absolute;
      bottom: -12.5px;
      left: 0;
      width: 0;
      height: 0;
      border-left: 25px solid transparent;
      border-right: 25px solid transparent;
      border-top: 12.5px solid red;
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
    background-color: green;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    padding: 5px;
    border-radius: 0 0 10px 10px;
  }
`;
