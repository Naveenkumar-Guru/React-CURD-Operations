// import React from "react";
// import { useState } from "react";

// const LightDarkModes = () => {
//   const [darkMode, setDarkMode] = useState(false);

//   return (
//     <div className={darkMode ? "dark" : "light"}>
//       <h1>{darkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}</h1>
//       <button onClick={() => setDarkMode(!darkMode)}>Toggle Theme</button>
//     </div>
//   );
// };

// export default LightDarkModes;

import React from "react";
import "./LightDarkmodes.css";

import { useState } from "react";
const LightDarkModes = () => {
  const [darkMode, setdarkmode] = useState(false);

  const handle = () => {
    setdarkmode(!darkMode);
  };
  return (
    <div className={darkMode ? "dark" : "light"}>
      <h1>{darkMode ? "Dark Mode" : "Light Mode"}</h1>
      <button onClick={handle}>Toggle them</button>
    </div>
  );
};

export default LightDarkModes;
