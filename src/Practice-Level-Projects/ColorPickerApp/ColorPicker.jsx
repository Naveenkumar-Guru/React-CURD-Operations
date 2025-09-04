import React, { useState } from "react";

const ColorPicker = () => {
  const [color, setColor] = useState("#ffffff"); // default white

  const colorHandler = (event) => {
    setColor(event.target.value);
  };

  return (
    <div className="colorPicker-container">
      <h1>Color Picker App</h1>

      <div className="color-display">Selected Color: {color}</div>
      <label>Pick a color:</label>
      <br />
      <input type="color" value={color} onChange={colorHandler} />
    </div>
  );
};

export default ColorPicker;
