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
    font-size: 2rem;
    font-weight: 200;
    color: #3a414a;
  }

  fieldset {
    text-align: center;
    font-family: "Roboto", sans-serif;
    color: #b5b8c4;
    width: 80%;
    border-bottom: none;
    border-left: none;
    border-right: none;

    legend {
      padding: 40px;
    }
  }

  input {
    padding: 10px;
    border: solid 0.3px gray;

    border-top: none;
    border-left: none;
    border-right: none;

    width: 80%;

    margin-top: 10px;
  }

  .senha {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    position: relative;

    input {
      width: 80%;
    }

    button {
      border: none;
      background: transparent;
      position: absolute;
      top: 15px;
      right: 10%;
      font-size: 20px;
      color: #b5b8c4;
      cursor: pointer;
    }
  }

  .divButton {
    display: flex;
    justify-content: center;
    width: 80%;
    margin-top: 2rem;
    gap: 1rem;

    .button {
      background-color: #0097ee;
      color: white;
      text-align: center;
      padding: 10px;
      border: none;
      border-radius: 5px;
      width: 200px;
      cursor: pointer;
      box-shadow: 2px 23px 100px 0px #b5b8c4;
    }
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

  .error {
    color: red;
    margin-left: 10px;
  }
`;
