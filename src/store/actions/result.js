import * as actionsTypes from "./actionTypes";

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
    type: actionsTypes.STORE_RESULT,
    result: res
  };
};

/* 
  getState() another redux-thunk method argument to get the current state
  however better to pass old state from calling container
*/
export const storeResult = res => {
  return (dispatch, getState) => {
    setTimeout(() => {
      // const oldCounter = getState().ctr.counter;
      // console.log(oldCounter);
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
    type: actionsTypes.DELETE_RESULT,
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
