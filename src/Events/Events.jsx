import React from "react";

const Events = () => {
  let handleClick = (Event) => {
    Event.target.textContent = "Hellooo";
  };
  return (
    <div>
      <button onClick={handleClick}>Clickme</button>
    </div>
  );
};

export default Events;
