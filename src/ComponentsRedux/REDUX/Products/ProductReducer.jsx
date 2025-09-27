import { INCR, DECR } from "./product.action";
let initialState = {
  product_Name: "Iphone 5s",
  price: 5000,
  qty: 1,
};
let prductReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCR":
      return { ...state, qty: state.qty + 1 };
    case "DECR":
      return { ...state, qty: state.qty - 1 };
    default:
      return state;
  }
};
export { prductReducer };
