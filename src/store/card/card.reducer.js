import * as cardTypes from './card.types';
import {addMultipleItemsToCard} from './card.helpers';

const INITIAL_STATE = {
  hidden: true,
  cardItems: []
}
const cardReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case(cardTypes.TOGGLE_CARD_HIDDEN):
      return {
        ...state,
        hidden: !state.hidden
      }
    case(cardTypes.ADD_ITEM):
      return {
        ...state,
        cardItems: addMultipleItemsToCard(state.cardItems, action.payload)
      }
    case(cardTypes.CLOSE_CARD):
      return {
        ...state,
        hidden: true
      }
    default:
      return state;
  }
}

export default cardReducer;