import * as cartTypes from './cart.types';
import {addMultipleItemsTocart, removeItemFromCart} from './cart.helpers';

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
}
const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case(cartTypes.TOGGLE_cart_HIDDEN):
      return {
        ...state,
        hidden: !state.hidden
      }
    case(cartTypes.ADD_ITEM):
      return {
        ...state,
        cartItems: addMultipleItemsTocart(state.cartItems, action.payload)
      }

    case(cartTypes.REMOVE_ITEM):
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      }

    case(cartTypes.CLEAR_ITEM_FROM_cart):
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== action.payload.id
        )
      }
    case(cartTypes.CLOSE_cart):
      return {
        ...state,
        hidden:  true
      }
    default:
      return state;
  }
}

export default cartReducer;