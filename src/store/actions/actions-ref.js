export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADD = "ADD";
export const SUBTRACT = "SUBTRACT";
export const STORE_RESULT = "STORE_RESULT";
export const DELETE_RESULT = "DELETE_RESULT";

// Action creators - just a function that returns an action
// Below are for synchronous code but is okay to use to be consistent
export const increment = () => {
  return {
    type: INCREMENT
  };
};

export const decrement = () => {
  return {
    type: DECREMENT
  };
};

export const add = value => {
  return {
    type: ADD,
    val: value
  };
};

export const subtract = value => {
  return {
    type: SUBTRACT,
    val: value
  };
};

/*
  With thunk we can perform async code before the reducer state is updated
  because now we have access to store's dispatch function within the action creator
  due to redux-thunk.

  Middleware runs between dispatching of an action and the point of time
  the action reaches the reducer.

  We still dispatch an action but then redux-thunk steps in, has access to the
  action (basically blocks the old action we could say), and dispatches it again
  in the future.

  Now the new action will reach the reducer but in between, redux-thunk is able
  to wait because it can dispatch an action whenever it wants.  This is the
  asynchronous part.

  Now inside of this returned function
    (dispatch) => { 
        *we execute async code and then dispatch whatever we want to dispatch
    }

  In the end we create asynchronous action creators which in the end dispatch 
  actions created by synchronous ones.

  Only synchronous actions may edit the store.
*/

export const saveResult = res => {
  return {
    type: STORE_RESULT,
    result: res
  };
};

export const storeResult = res => {
  return dispatch => {
    setTimeout(() => {
      dispatch(saveResult(res)); // This updates the state in the store. Need to execute as a function.
    }, 2000);
  };
};

/*
// Previously only returned action to be dispatched
export const storeResult = res => {
    return {
      type: STORE_RESULT,
      result: res
    };
};
*/

export const deleteResult = resElId => {
  return {
    type: DELETE_RESULT,
    resultElId: resElId
  };
};

/*
redux-thunk
Library that adds a middleware that allows action creators to 
return (not the action itself like above) a function which will
eventually dispatch an action.  This allows us to run asynchronous 
code.
*/
