import {SHOP_DATA} from './shop.data';
import * as shopActions from './shop.types';

const INITIAL_STATE = {
  shopItems: SHOP_DATA
}

const shopReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case shopActions.UPDATE_COLLECTIONS:
      return {
        ...state,
        shopItems: action.payload
      }
    default:
      return state
  }
}

export default shopReducer;