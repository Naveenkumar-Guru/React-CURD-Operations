import React from "react";
import "./MouseEvents.css";
const MouseEvents = () => {
  const handleClick = (e) => {
    e.target.classList.add("onclick-btn"); // apply styles on click
    e.target.textContent = "Clicked!....."; // change button text
  };
  const DoubleClick = (e) => {
    e.target.textContent = "Double Clicked!....";
  };
  const handleMouseOver = (e) => {
    e.target.textContent = " Mouse Over!";
  };
  const onMouseOut = (e) => {
    e.target.textContent = "Hover Over Me Again";
  };
  let Mousemove = (e) => {
    alert("Mouse Moving!");
  };
  return (
    <div style={{ padding: "20px",margin:"150px" }}>
      <h2>Mouse Events Demo</h2>

      <button className="onclick-btn" onClick={handleClick}>
        Click me
      </button>
      <br></br>
      <br></br>
      <button className="DoubleClick-btn" onDoubleClick={DoubleClick}>
        DoubleClick
      </button>
      <br></br>
      <br></br>
      <button
        className="MouseOver-btn"
        onMouseOver={handleMouseOver}
        onMouseOut={onMouseOut}
      >
        Hover Over Me
      </button>
      <br></br>
      <br></br>
      <button onMouseMove={Mousemove}>Move Mouse Here</button>
    </div>
  );
};

export default MouseEvents;
