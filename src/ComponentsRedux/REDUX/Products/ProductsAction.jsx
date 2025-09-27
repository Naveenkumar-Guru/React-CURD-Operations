//action types
let INCR = "INCR";
let DECR = "DECR";

//action
let incAction = () => {
  return { type: INCR };
};
let descAction = () => {
  return { type: "DECR" };
};

export { incAction, descAction, INCR, DECR };
