//what is store
//what store contains ->collection of state

import { createStore } from "redux";
import { rootReducer } from "./RootReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import messageReducer from "./Message/MessageReducer";
let store = createStore(rootReducer, composeWithDevTools());

export default store;
