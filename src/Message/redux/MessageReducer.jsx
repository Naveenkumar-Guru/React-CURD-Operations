// Reducer
const initialState = {
  message: "Hello",
};

const MessageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GM":
      return { message: "Good Morning" };
    case "GA":
      return { message: "Good Afternoon" };
    default:
      return state;
  }
};

export default MessageReducer;
