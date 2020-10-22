import React, { useReducer } from 'react';

const initialState = {
  status: 'test'
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SHOW':
      return {
        ...state,
        status: action.payload
      }
    default:
      return state;
  }
}

const WithReducer = WrappedComponent => {
  const Reducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
      <>
        <div>{state.status}</div>
        <WrappedComponent {...props} state={state} dispatch={dispatch}/>
      </>
    )
  }
  return Reducer;
}

export default WithReducer;