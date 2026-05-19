import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={isDarkMode ? "app dark" : "app light"}>
      <div className="counter-box">
        <h1>Counter & Theme Toggle</h1>

        <h2>Counter Value</h2>
        <p className="count">{count}</p>

        <div className="button-group">
          <button onClick={() => setCount(count + 1)}>Increment</button>
          <button onClick={() => setCount(count - 1)}>Decrement</button>
          <button onClick={() => setCount(0)}>Reset</button>
        </div>

        <button className="theme-btn" onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </div>
    </div>
  );
}

export default App;