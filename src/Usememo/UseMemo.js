// import React, { useCallback, useMemo, useState } from "react";

// const UseMemo = () => {
//   const [count, setCount] = useState(0);
//   const [number, setNumber] = useState(0);
//   const inc = useCallback(() => setCount((c) => c + 1), []);
//   const dec = useCallback(() => setCount((c) => c - 1), []);
//   //
//   const squared = useMemo(() => {
//     console.log("show the value", number);
//     return number * number;
//   }, [number]);
//   return (
//     <div>
//       <h1>Usememo</h1>
//       <p>CouterValue:{count}</p>
//       <button onClick={inc}>increment</button>
//       <button onClick={dec}>Decurement</button>
//       <hr></hr>
//       <h1>square the number</h1>
//       <input
//         type="number"
//         value={number}
//         onChange={(e) => setNumber(Number(e.target.value))}
//       />
//       <p>square {squared}</p>
//     </div>
//   );
// };

// export default UseMemo;

import React, { useState, useMemo } from "react";

const UseMemoExample = () => {
  const [number, setNumber] = useState(0);

  //useMemo caches the squared value
  const squared = useMemo(() => {
    console.log("Calculating square...");
    return number * number;
  }, [number]); // recalculates only when number changes

  return (
    <div>
      <h1>UseMemo Example</h1>
      <input
        type="tect"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <p>Square: {squared}</p>
    </div>
  );
};

export default UseMemoExample;
