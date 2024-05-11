import React, { useState } from 'react';
import './App.css'; 

function App() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState(0);
  const [operation, setOperation] = useState('+');

  const handleCalculate = () => {
    let calcResult = 0;
    switch (operation) {
      case '+':
        calcResult = number1 + number2;
        break;
      case '-':
        calcResult = number1 - number2;
        break;
      case '*':
        calcResult = number1 * number2;
        break;
      case '/':
        if (number2 !== 0) {
          calcResult = number1 / number2;
        } else {
          alert('Division by zero is not allowed.');
          return;
        }
        break;
      default:
        return;
    }
    setResult(calcResult);
  };

  return (
    <div className="calculator">
      <h1>Adding Two Numbers</h1>
      <input
        type="number"
        value={number1}
        onChange={(e) => setNumber1(+e.target.value)}
      />
      <input
        type="number"
        value={number2}
        onChange={(e) => setNumber2(+e.target.value)}
      />
      <select value={operation} onChange={(e) => setOperation(e.target.value)}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <button onClick={handleCalculate}>Calculate</button>
      <h2>Result: {result}</h2>
    </div>
  );
}

export default App;
