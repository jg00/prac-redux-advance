## Simple Counter Using React and Redux - Dive into redux-thunk, dispatch asynchronous code.

Dive into appropriately handling dispatching asynchronous code utilizing redux-thunk middleware and action creators. Also organize reducers and actions into folder and file structures.

:coffee: **_React_**
<br>
:coffee: **_Redux_**
<br>
:coffee: **_Redux-Thunk (Middleware)_**

<a href="https://imgflip.com/gif/2q1vgn"><img src="https://i.imgflip.com/2q1vgn.gif" title="made at imgflip.com"/></a>

###### Sample asynchronous code dispatched (Actions > results.js)

```javascript
export const storeResult = res => {
  return (dispatch, getState) => {
    setTimeout(() => {
      dispatch(saveResult(res));
    }, 2000);
  };
};
```
