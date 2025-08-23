import React from "react";

const MouseEvents = () => {
  const handleClick = (e) => {
    e.target.textContent = "Clicked!.....";
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      {""}
    </div>
  );
};

export default MouseEvents;
