import React, { useState } from "react";
import Button from "./components/Button";
import numberWithCommas from "./utils/numberWithCommas";
import "./App.css";

const App = () => {
  const [value, setValue] = useState("0");
  const [memory, setMemory] = useState(null);
  const [operator, setOperator] = useState(null);


  const handleButtonPress = content => () => {
    const num = parseFloat(value);

    if (content === "AC") {
      setValue("0");
      setMemory(null);
      setOperator(null);
      return;
    }

    if (content === "±") {
      setValue((num * -1).toString());
      return;
    }

    if (content === "%") {
      setValue((num / 100).toString());
      setMemory(null);
      setOperator(null);
      return;
    }

    if (content === ".") {
      if (value.includes(".")) return;

      setValue(value + ".");
      return;
    }

    const calculation=()=>{
      if (operator !== null) {
        if (operator === "+") {
          setMemory(memory + num);
        } else if (operator === "−") {
          setMemory(memory - num);
        } else if (operator === "×") {
          setMemory(memory * num);
        } else if (operator === "÷") {
          setMemory(memory / num);
        }
      } else {
        setMemory(num);
      }
    }

    if (content=== "+") {
      calculation();
      setValue("0");
      setOperator(content);
      return;
    }

    if (content === "−") {
      calculation();
      setValue("0");
      setOperator(content);
      return;
    }
    if (content === "×") {
      calculation();
      setValue("0");
      setOperator(content);
      return;
    }
    if (content === "÷") {
      calculation();
      setValue("0");
      setOperator(content);
      return;
    }

    if (content === "=") {
      if (!operator) return;

      if (operator === "+") {
        setValue((memory + num).toString());
      } else if (operator === "−") {
        setValue((memory - num).toString());
      } else if (operator === "×") {
        setValue((memory * num).toString());
      } else if (operator === "÷") {
        setValue((memory / num).toString());
      }
      setMemory(null);
      setOperator(null);
      return;
    }

    if (value[value.length - 1] === ".") {
      setValue(value + content);
    } else {
      setValue(parseFloat(num + content).toString());
    }
  };

  return (
    <div className="App">
      <div className="display">{numberWithCommas(value)}</div>
      <div className="buttons">
        <Button onButtonClick={handleButtonPress} content='(' mode="scientific" />
        <Button onButtonClick={handleButtonPress} content=")" mode="scientific" />
        <Button onButtonClick={handleButtonPress} content="mc" mode="scientific" />
        <Button onButtonClick={handleButtonPress} content="m+" mode="scientific" />
        <Button onButtonClick={handleButtonPress} content="m-" mode="scientific" />
        <Button onButtonClick={handleButtonPress} content="mr" mode="scientific" />
        <Button onButtonClick={handleButtonPress} content="AC" type="function" />
        <Button onButtonClick={handleButtonPress} content="±" type="function" />
        <Button onButtonClick={handleButtonPress} content="%" type="function" />
        <Button onButtonClick={handleButtonPress} content="÷" type="operator" />
        <Button onButtonClick={handleButtonPress} content="2nd" mode="scientific" />
        <Button onButtonClick={handleButtonPress} content="x^2" mode="scientific" />
        <Button onButtonClick={handleButtonPress} content="x^3" mode="scientific" />
        <Button onButtonClick={handleButtonPress} content="x^y" mode="scientific" />
        <Button onButtonClick={handleButtonPress} content="e^x" mode="scientific" />
        <Button onButtonClick={handleButtonPress} content="10^x" mode="scientific" />
        <Button onButtonClick={handleButtonPress} content="7" />
        <Button onButtonClick={handleButtonPress} content="8" />
        <Button onButtonClick={handleButtonPress} content="9" />
        <Button onButtonClick={handleButtonPress} content="×" type="operator" />
        <Button onButtonClick={handleButtonPress} content="1/x" mode="scientific" />
        <Button onButtonClick={handleButtonPress} content="√x" mode="scientific" />
        <Button onButtonClick={handleButtonPress} content="∛x" mode="scientific" />
        <Button onButtonClick={handleButtonPress} content="y√x" mode="scientific" />
        <Button onButtonClick={handleButtonPress} content="ln" mode="scientific" />
        <Button onButtonClick={handleButtonPress} content="Log10" mode="scientific" />
        <Button onButtonClick={handleButtonPress} content="4" />
        <Button onButtonClick={handleButtonPress} content="5" />
        <Button onButtonClick={handleButtonPress} content="6" />
        <Button onButtonClick={handleButtonPress} content="−" type="operator" />
        <Button onButtonClick={handleButtonPress} content="x!" mode="scientific" />
        <Button onButtonClick={handleButtonPress} content="sin" mode="scientific" />
        <Button onButtonClick={handleButtonPress} content="cos" mode="scientific" />
        <Button onButtonClick={handleButtonPress} content="tan" mode="scientific" />
        <Button onButtonClick={handleButtonPress} content="e" mode="scientific" />
        <Button onButtonClick={handleButtonPress} content="EE" mode="scientific" />
        <Button onButtonClick={handleButtonPress} content="1" />
        <Button onButtonClick={handleButtonPress} content="2" />
        <Button onButtonClick={handleButtonPress} content="3" />
        <Button onButtonClick={handleButtonPress} content="+" type="operator" />
        <Button onButtonClick={handleButtonPress} content="Rad" mode="scientific" />
        <Button onButtonClick={handleButtonPress} content="sinh" mode="scientific" />
        <Button onButtonClick={handleButtonPress} content="cosh" mode="scientific" />
        <Button onButtonClick={handleButtonPress} content="tanh" mode="scientific" />
        <Button onButtonClick={handleButtonPress} content="π" mode="scientific" />
        <Button onButtonClick={handleButtonPress} content="Rand" mode="scientific" />
        <Button onButtonClick={handleButtonPress} content="0" />
        <Button onButtonClick={handleButtonPress} content="." />
        <Button onButtonClick={handleButtonPress} content="=" type="operator" />
      </div>
    </div>
  );
};

export default App;