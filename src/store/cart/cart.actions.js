import * as cartTypes from './cart.types';
export const togglecartHidden = () =>({
  type: cartTypes.TOGGLE_cart_HIDDEN
})

export const addItemTocart = item => ({
  type: cartTypes.ADD_ITEM,
  payload: item
})

export const closecart = () => ({
  type: cartTypes.CLOSE_cart
})

export const removeItem = item => ({
  type: cartTypes.REMOVE_ITEM,
  payload: item
})

export const clearItemFromCart = item => ({
  type: cartTypes.CLEAR_ITEM_FROM_cart,
  payload: item
})

export const clearCart = () => ({
  type: cartTypes.CLEAR_CART
})