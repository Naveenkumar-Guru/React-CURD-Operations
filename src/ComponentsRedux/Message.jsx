import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { GmAction, GnAction } from "./REDUX/Message/MessageAction";
import store from "./REDUX/Store";

const Message = () => {
  let dispatch = useDispatch();
  let message = useSelector((state) => state.msg);
  let storeData = useSelector((state) => state);

  let gmHandler = () => {
    dispatch(GmAction());
  };

  return (
    <div>
      <pre>Message Components</pre>
      <pre>{JSON.stringify(storeData)}</pre>
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
