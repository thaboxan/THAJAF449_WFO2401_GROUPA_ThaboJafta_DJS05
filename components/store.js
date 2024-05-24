import counterReducer from "./reducers";

const logger = (store) => (next) => (action) => {
  const { getState } = store;
  const result = next(action);
  console.log("Current state:", getState());
  return result;
};

const store = configureStore(counterReducer);

export default store;
