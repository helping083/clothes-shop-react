import {createSelector} from 'reselect';

const selectShop = state => state.shop;

export const selectShopItems = createSelector(
  [selectShop],
  shop => shop.shopItems
)

export const selectCollectionsFromPreview = createSelector(
  [selectShopItems],
  collections => Object.keys(collections).map(key => collections[key])
)

export const selectCollection = collectionUrlParam =>
createSelector(
  [selectShopItems],
  collections => collections[collectionUrlParam]
);