import {fireStore} from '../../config/firebase.config';
class ShopService {
  constructor() {
    this.collection = fireStore.collection('shop');
  }
  getShopCollection = async () => {
    try {
      const response = await this.collection.get();
      return response
    } catch(e) {
      throw(e);
    }
  }
}

export default ShopService