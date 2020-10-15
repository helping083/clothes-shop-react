import axios from 'axios';

class CollectionsService {
  constructor() {
    this.PROJECT_ID = 'react-clothes-db-17250'
    this.FIREBASE_URL = 
      `https://firestore.googleapis.com/v1/projects/${this.PROJECT_ID}/databases/(default)/documents`
  }

  getCollections = async () => {
    try {
      const collectionData = await axios.get(`${this.FIREBASE_URL}/shop`);
      return collectionData.data;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new CollectionsService();