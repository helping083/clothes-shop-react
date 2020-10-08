import {createSelector} from 'reselect';

const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  men: 5
}
const selectShop = state => state.shop;

export const selectShopItems = createSelector(
  [selectShop],
  shop => shop.shopItems
)

export const selectCollection = collectionUrlParam =>
createSelector(
  [selectShopItems],
  collections => {
    return collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
  }
);