import React, { useState, useEffect } from 'react';
import {Route} from 'react-router-dom';
import {fireStore} from '../../config/firebase.config';
import CollectionPage from '../collection/';
import {convertCollectionsSnapshotToMap} from '../../shared/services/Firebase.service';
import CollectionOverview from '../../components/collections-overview';
import {updateCollections} from '../../store/shop/shop.actions';
import { connect } from 'react-redux';

const ShopPage = ({match, updateCollections}) => {
  const [collestions, setCollections] = useState({});
  let unsubscribeFromSnapshot = null;

  useEffect(() => {
    const collectionRef = fireStore.collection('shop');
    collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
    })
  },[]);

  return (
    <div className="shopPage">
      <Route exact path={`${match.path}`} component={CollectionOverview}/>
      <Route path={`${match.path}/:categoryId`} component={CollectionPage}/>
    </div>
  );
}

const mapDispatchToProps = dispatch =>({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null,mapDispatchToProps)(ShopPage);