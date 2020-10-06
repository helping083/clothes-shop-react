import {createSelector} from 'reselect';

const selectCard = state => state.card;

export const selectCardItems = createSelector(
  [selectCard],
  card => card.cardItems
)

export const selectCartItemsCount = createSelector(
  [selectCardItems],
  cardItems =>cardItems.reduce((prev, curr) => prev + curr.quantity, 0)
)