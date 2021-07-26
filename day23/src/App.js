import React from "react";
import "./App.css";
import useCounter from "./counter-hook";

function App() {
  const [count, Increment, Decrement] = useCounter(0, 1);
  return (
    <div className="frame">
      <div className="Outer">
        <div className="head">
          <h1>{count}</h1>
        </div>
        <div className="btn">
          <button onClick={Increment}>Increment</button>
          <button onClick={Decrement}>Decrement</button>
        </div>
      </div>
    </div>
  );
}

export default App;
