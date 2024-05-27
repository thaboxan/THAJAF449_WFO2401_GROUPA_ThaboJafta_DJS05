/**
 * @fileoverview A state management system inspired by Redux.
 * @description This system includes action types, a reducer function, and a store.
 */

// Define action types
const ADD = "ADD"; // Action type for incrementing the counter
const SUBTRACT = "SUBTRACT"; // Action type for decrementing the counter
const RESET = "RESET"; // Action type for resetting the counter

/**
 * The reducer function manages state changes.
 * @param {Object} state - The current state.
 * @param {Object} action - The action to be performed.
 * @returns {Object} - The new state.
 */
const reducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case ADD:
      return { ...state, count: state.count + 1 }; // Increment the count
    case SUBTRACT:
      return { ...state, count: state.count - 1 }; // Decrement the count
    case RESET:
      return { ...state, count: 0 }; // Reset the count to zero
    default:
      return state; // Return the unchanged state for unknown actions
  }
};

/**
 * Creates a store to manage the state.
 * @param {Function} reducer - The reducer function.
 * @returns {Object} - The store object.
 */
const createStore = (reducer) => {
  let state;
  let listeners = [];

  const getState = () => state; // Returns the current state.

  const dispatch = (action) => {
    // Takes an action, uses the reducer to change the current state.
    state = reducer(state, action);
    listeners.forEach((listener) => listener()); // Notify listeners
  };

  const subscribe = (listener) => {
    // Adds a listener to the listeners array.
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((l) => l !== listener); // Unsubscribe
    };
  };

  // Initialize state
  dispatch({}); // Dispatch an empty action to set the initial state

  return { getState, dispatch, subscribe };
};

// Create a store using the reducer
const store = createStore(reducer);

// Initial State Verification
console.log("Initial state:", store.getState().count);

// Incrementing the Counter
store.dispatch({ type: ADD });
store.dispatch({ type: ADD });
console.log("Count after incrementing twice:", store.getState().count);

// Decrementing the Counter
store.dispatch({ type: SUBTRACT });
console.log("Count after decrementing once:", store.getState().count);

// Resetting the Counter
store.dispatch({ type: RESET });
console.log("Count after resetting:", store.getState().count);
