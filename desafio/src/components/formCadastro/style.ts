import styled from "styled-components";

export const Formulario = styled.form`
  width: 50%;
  height: 60vh;
  margin: 0 auto;
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: solid 1px rgba(58, 65, 74, 0.5);
  border-radius: 10px;
  h1 {
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    color: #3a414a;
  }
  input {
    padding: 10px;
    border: solid 0.3px gray;
    border-radius: 5px;

    width: 80%;

    margin-top: 10px;
  }

  .row {
    width: 82.5%;
    margin-left: 1px;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 50px;

    input {
      width: 50%;
      height: 16px;
    }
    fieldset {
      width: 50%;
      height: 16px;
      border-radius: 5px;
      border: solid 0.3px gray;
      display: flex;
      align-items: center;
      padding: 10px 12px 13px 12px;
      margin-bottom: 4px;
      margin-top: 10px;

      legend {
        font-size: 10px;
        color: #757575;
      }
    }
    #noBorder {
      border: none;
      padding: 0;
      margin: 0;
    }
  }

  .rowCheckbox {
    width: 82%;
    height: 50px;

    margin-left: 1px;
    display: flex;
    flex-direction: row;
    align-items: center;
    span {
      margin-top: 5px;
      font-family: "Roboto", sans-serif;
    }
    #checkbox {
      width: auto;
    }
  }

  .senha {
    position: relative;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    input {
      width: 80%;
    }
    button {
      position: absolute;
      right: 10%;
      top: 40%;
      font-size: 20px;

      cursor: pointer;
      color: #757575;
      background-color: transparent;
      border: none;
    }
  }

  #cadastrar {
    background-color: #448aff;
    border: none;
    border-radius: 5px;
    padding: 8px;
    width: 82%;
    color: white;
    font-family: "Roboto", sans-serif;
    cursor: pointer;
  }

  @media (max-width: 500px) {
    width: 90%;
    .row {
      input {
        min-width: 50%;
      }
      fieldset {
        min-width: 30%;
      }
    }
    .rowCheckbox {
      span {
        font-size: 0.8rem;
      }
    }
  }
`;
