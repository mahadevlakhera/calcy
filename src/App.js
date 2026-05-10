import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const calculate = () => {
    try {
      // Safe evaluation using Function constructor alternatives
      // Replace operators and evaluate with JavaScript's built-in eval-like behavior
      // Here we use "mathjs" library for safety
      // 👉 Install once: npm install mathjs
      const math = require("mathjs");
      const result = math.evaluate(input);
      setInput(result.toString());
    } catch {
      setInput("Error");
    }
  };

  const clear = () => {
    setInput("");
  };

  return (
    <div className="calculator">
      <h1>🧮 React Calculator</h1>
      <div className="display">{input || "0"}</div>
      <div className="buttons">
        <button onClick={clear}>C</button>
        <button onClick={() => handleClick("/")}>÷</button>
        <button onClick={() => handleClick("*")}>×</button>
        <button onClick={() => handleClick("-")}>−</button>
        <button onClick={() => handleClick("+")}>+</button>
        <button onClick={calculate}>=</button>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
          <button key={num} onClick={() => handleClick(num.toString())}>
            {num}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
