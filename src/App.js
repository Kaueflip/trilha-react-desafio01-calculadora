import { CalculatorWrapper, Display, Button, Section } from "./styles";
import { useState } from "react";

function App() {
  const [expression, setExpression] = useState("");

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        setExpression(eval(expression).toString());
      } catch (error) {
        setExpression("Error");
      }
    } else if (value === "C") {
      setExpression("");
    } else {
      setExpression(expression + value);
    }
  };

  return (
    <Section>
      <h1>
        <svg
          width="26"
          height="26"
          viewBox="-10.5 -9.45 21 18.9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="svg"
        >
          <circle cx="0" cy="0" r="2" fill="#61dafb"></circle>
          <g stroke="#61dafb" stroke-width="1" fill="none">
            <ellipse rx="10" ry="4.5"></ellipse>
            <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
            <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
          </g>
        </svg>
        Calculadora React
      </h1>
      <CalculatorWrapper>
        <Display value={expression} readOnly />
        <div>
          <Button onClick={() => handleButtonClick("7")}>7</Button>
          <Button onClick={() => handleButtonClick("8")}>8</Button>
          <Button onClick={() => handleButtonClick("9")}>9</Button>
          <Button onClick={() => handleButtonClick("+")}>+</Button>
        </div>
        <div>
          <Button onClick={() => handleButtonClick("4")}>4</Button>
          <Button onClick={() => handleButtonClick("5")}>5</Button>
          <Button onClick={() => handleButtonClick("6")}>6</Button>
          <Button onClick={() => handleButtonClick("-")}>-</Button>
        </div>
        <div>
          <Button onClick={() => handleButtonClick("1")}>1</Button>
          <Button onClick={() => handleButtonClick("2")}>2</Button>
          <Button onClick={() => handleButtonClick("3")}>3</Button>
          <Button onClick={() => handleButtonClick("*")}>*</Button>
        </div>
        <div>
          <Button onClick={() => handleButtonClick("0")}>0</Button>
          <Button onClick={() => handleButtonClick("C")}>C</Button>
          <Button onClick={() => handleButtonClick("=")}>=</Button>
          <Button onClick={() => handleButtonClick("/")}>/</Button>
        </div>
      </CalculatorWrapper>
    </Section>
  );
}

export default App;
