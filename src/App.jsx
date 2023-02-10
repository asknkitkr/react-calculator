import { useState } from "react";
import "./App.css";
import Keypad from "./Components/Keypad";

function App() {
  const [input, setInput] = useState("");
  const handleClick = (value) => {
    setInput(input + value);
  };
  const handleEqual = () => {
    setInput(eval(input).toString());
  };
  const handleClear = () => {
    setInput("");
  };
  return (
    <div className="App">
      <h1 class="title">Calculator</h1>
      <div className="calculator">
        <input className="display" type="text" value={input} />
        <Keypad
          handleClear={handleClear}
          handleClick={handleClick}
          handleEqual={handleEqual}
        />
      </div>
    </div>
  );
}

export default App;
