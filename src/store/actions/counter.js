import * as actionTypes from "./actionTypes";

// Action creators - just a function that returns an action
// Below are for synchronous code but is okay to use to be consistent
export const increment = () => {
  return {
    type: actionTypes.INCREMENT
  };
};

export const decrement = () => {
  return {
    type: actionTypes.DECREMENT
  };
};

export const add = value => {
  return {
    type: actionTypes.ADD,
    val: value
  };
};

export const subtract = value => {
  return {
    type: actionTypes.SUBTRACT,
    val: value
  };
};
