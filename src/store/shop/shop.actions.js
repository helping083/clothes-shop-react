import * as shopActions from './shop.types';

export const updateCollections = (collectionsMap) => ({
  type: shopActions.UPDATE_COLLECTIONS,
  payload: collectionsMap
})