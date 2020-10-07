import {createSelector} from 'reselect';

const selectcart = state => state.user;


export const selectCurrentUser = createSelector(
  [selectcart],
  (user) => user.currentUser
)