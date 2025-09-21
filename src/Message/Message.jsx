import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { gmAction, gaAction } from "../redux/MessageAction";


const Message = () => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.message);

  return (
    <div>
      <pre>Message Component</pre>
      <h1>Value: {message}</h1>

      <button onClick={() => dispatch(gmAction())}>GM</button>
      <button onClick={() => dispatch(gaAction())}>GA</button>
    </div>
  );
};

export default Message;
