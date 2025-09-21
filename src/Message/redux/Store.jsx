import { createStore } from "redux";
import MessageReducer from "./MessageReducer";

const store = createStore(MessageReducer);

export default store;
