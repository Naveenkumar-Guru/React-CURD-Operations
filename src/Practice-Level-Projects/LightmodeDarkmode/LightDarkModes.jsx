// import React from "react";
// import "./LightDarkmodes.css";

// import { useState } from "react";
// const LightDarkModes = () => {
//   const [darkMode, setdarkmode] = useState(false);

//   const handle = () => {
//     setdarkmode(!darkMode);
//   };
//   return (
//     <div className={darkMode ? "dark" : "light"}>
//       <h1>{darkMode ? "Dark Mode" : "Light Mode"}</h1>
//       <button onClick={handle}>Toggle them</button>
//     </div>
//   );
// };

// export default LightDarkModes;

//class component
import React, { Component } from "react";
import "./LightDarkmodes.css";

class LightDarkModes extends Component {
  constructor(props) {
    super(props);

    // state in class component
    this.state = {
      darkMode: false,
    };
  }

  // method to toggle
  handleToggle = () => {
    this.setState((prevState) => ({
      darkMode: !prevState.darkMode,
    }));
  };

  render() {
    const { darkMode } = this.state;

    return (
      <div className={darkMode ? "dark" : "light"}>
        <h1>{darkMode ? "Dark Mode" : "Light Mode"}</h1>
        <button onClick={this.handleToggle}>Toggle Theme</button>
      </div>
    );
  }
}

export default LightDarkModes;
