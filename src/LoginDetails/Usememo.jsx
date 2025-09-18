import React, { useState } from "react";

const Usememo = () => {
  let [count, setCount] = useState(0);
  let [number, setNumber] = useState(5);
  
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Counter
      </button>
      <button>Factorial</button>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        Factorial
      </button>
      <h1>Count:{count}</h1>
      <h4>factorial of {number} is:{factn}</h4>
    </div>
  );
};

export default Usememo;
