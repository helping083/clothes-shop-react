import * as cardTypes from './card.types';
export const toggleCardHidden = () =>({
  type: cardTypes.TOGGLE_CARD_HIDDEN
})

export const addItemToCard = item => ({
  type: cardTypes.ADD_ITEM,
  payload: item
})

export const closeCard = () => ({
  type: cardTypes.CLOSE_CARD
})