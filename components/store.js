import counterReducer from "./reducers";

const logger = (store) => (next) => (action) => {
  const result = next(action);
  console.log("Current state:", store.getState());
  return result;
};

const store = configureStore(counterReducer);

export default store;
