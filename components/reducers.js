import { INCREMENT, DECREMENT } from "./actions";
import initialState from "./state";

const counterReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return initialState;
  }
};
