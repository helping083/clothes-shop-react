import {createSelector} from 'reselect';

const selectcart = state => state.cart;

export const selectcartItems = createSelector(
  [selectcart],
  cart => cart.cartItems
)

export const selectcartHidden = createSelector(
  [selectcart],
  cart => cart.hidden
)

export const selectCartItemsCount = createSelector(
  [selectcartItems],
  cartItems => cartItems.reduce((prev, curr) => prev + curr.quantity, 0)
)

export const selectcartTotal = createSelector(
  [selectcartItems],
  cartItems => cartItems.reduce((prev, curr) => prev + curr.quantity * curr.price, 0)
)