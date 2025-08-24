import React from "react";
import "./MouseEvents.css";
const MouseEvents = () => {
  const handleClick = (e) => {
    e.target.textContent = "Clicked!.....";
    e.target.style.background = "black";
  };

  const DoubleClick = (e) => {
    e.target.textContent = "Double Clicked!....";
    e.target.style.background = "red";
  };
  const handleMouseOver = (e) => {
    e.target.textContent = " Mouse Over!";
    e.target.style.background = "yellow";
  };
  const onMouseOut = (e) => {
    e.target.textContent = "Hover Over Me Again";
    e.target.style.color = "white";
    e.target.style.background = "black";
  };
  let Mousemove = (e) => {
    e.target.style.background = "pink";
    alert("Mouse Moving!");
  };
  return (
    <div style={{ padding: "20px", margin: "150px" }}>
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
