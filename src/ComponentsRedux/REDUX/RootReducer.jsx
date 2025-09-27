import { combineReducers } from "redux";
import { messageReducer } from "./message/message.reducer";
import { prductReducer } from "./product/product.reducer";
let rootReducer = combineReducers({
  message: messageReducer,
  product: prductReducer,
});

export { rootReducer };
