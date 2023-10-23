import styled from "styled-components";

export const Section = styled.section`
  background-color: #20232a;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  h1 {
    margin-bottom: 1rem;
    color: #f1f1f1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h1 svg {
    margin-right: 0.5rem;
  }
`;

export const CalculatorWrapper = styled.div`
  width: 370px;
  margin: 0 auto;
  background-color: #767676;
  padding: 10px;
  border-radius: 5px;
`;

export const Display = styled.input`
  width: 100%;
  height: 50px;
  font-size: 20px;
  text-align: right;
  border: none;
  outline: none;
  background: #61dafb;
  margin-bottom: 10px;
  border-radius: 5px;
  color: #20232a;
  padding-right: 10px;
`;

export const Button = styled.button`
  width: 25%;
  height: 50px;
  font-size: 18px;
  background: #333;
  color: #f2f2f2;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #555;
  }
`;
