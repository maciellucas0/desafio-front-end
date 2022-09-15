import styled from "styled-components";

export const StyledSection = styled.section`
  width: 100vw;
  margin-top: 2rem;

  h1 {
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    font-weight: 600;
    color: #586072;
  }
  #container {
    padding: 10px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    width: 82.5%;
    border-bottom: 1px solid #b5b8c4;
    align-items: center;
  }

  input {
    border-top: none;
    border-left: none;
    border-right: none;
    padding: 5px;
    margin-left: 30px;
  }

  span {
    position: relative;
    right: 5%;
  }

  #filter {
    width: 300px;
  }

  @media (max-width: 500px) {
    #container {
      align-items: center;
    }
    input {
      width: 100px;
    }
    #filter {
      width: 100px;
    }
  }
`;
