import React from "react";
import { useState } from "react";
import "./CounterApp.css";

const CounterApp = () => {
  let [count, setCount] = useState(0);
  let decrement = () => {
    setCount(count - 1);
  };

  let Reset = () => {
    setCount(count > 0);
  };

  let Increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>CounterApp</h1>
      <p>{count}</p>
      <div className="container">
        <button className="btn btn-primary " onClick={decrement}>
          Decrement
        </button>
        <button className="btn btn-danger" onClick={Reset}>
          Reset
        </button>
        <button className="btn btn-primary " onClick={Increment}>
          Increment
        </button>
      </div>
    </div>
  );
};

export default CounterApp;
