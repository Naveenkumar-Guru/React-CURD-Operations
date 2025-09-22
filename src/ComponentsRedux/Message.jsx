import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { GmAction, GnAction } from "./REDUX/Message/MessageAction";

const Message = () => {
  let dispatch = useDispatch();
  let message = useSelector((state) => state.msg);

  let gmHandler = () => {
    dispatch(GmAction());
  };

  return (
    <div>
      <pre>{JSON.stringify(message)}</pre>
      <h1>Message components</h1>
      <h1>Value:Hello naveen {message}</h1>
      <button onClick={gmHandler}>Gm</button>
      <button
        onClick={() => {
          dispatch(GnAction());
        }}
      >
        Gn
      </button>
    </div>
  );
};

export default Message;
