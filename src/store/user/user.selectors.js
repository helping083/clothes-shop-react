import {createSelector} from 'reselect';

const selectCard = state => state.user;


export const selectCurrentUser = createSelector(
  [selectCard],
  (user) => user.currentUser
)