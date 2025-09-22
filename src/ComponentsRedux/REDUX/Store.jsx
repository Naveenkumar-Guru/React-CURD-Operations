//what is store
//what store contains ->collection of state

import { createStore } from "redux";
import messageReducer from "./Message/MessageReducer";
let store = createStore(messageReducer);

export default store;
