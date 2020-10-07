import {createSelector} from 'reselect';

const selectCard = state => state.card;

export const selectCardItems = createSelector(
  [selectCard],
  card => card.cardItems
)

export const selectCardHidden = createSelector(
  [selectCard],
  card => card.hidden
)

export const selectCartItemsCount = createSelector(
  [selectCardItems],
  cardItems => cardItems.reduce((prev, curr) => prev + curr.quantity, 0)
)

export const selectCardTotal = createSelector(
  [selectCardItems],
  cardItems => cardItems.reduce((prev, curr) => prev + curr.quantity * curr.price, 0)
)