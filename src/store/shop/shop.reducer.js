import * as shopActions from './shop.types';

const INITIAL_STATE = {
  shopItems: null,
  isFetching: true,
  errorMessage: undefined
}

const shopReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case shopActions.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true
      }
    case shopActions.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        shopItems: action.payload,
        isFetching: false
      }
    case shopActions.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
        isFetching: false
      }
    default:
      return state
  }
}

export default shopReducer;