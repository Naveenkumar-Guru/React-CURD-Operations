import { GM, GN } from "./MessageAction";

let initialstate = {
  msg: "Hello",
};
let messageReducer = (state = initialstate, action) => {
  //based on action we are updating/creact new store.
  switch (action.type) {
    case GM:
      return { msg: "Good Morning" };
    case GN:
      return { msg: "Good Night" };
    default:
      return state;
  }
};
export default messageReducer;
