import React, { useState, useEffect } from 'react';
import {Route} from 'react-router-dom';
import {fireStore} from '../../config/firebase.config';
import CollectionPage from '../collection/';
import {convertCollectionsSnapshotToMap} from '../../shared/services/Firebase.service';
import CollectionOverview from '../../components/collections-overview';
import {updateCollections} from '../../store/shop/shop.actions';
import {WithSpinner} from '../../components/HOC/';
import { connect } from 'react-redux';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({match,  updateCollections}) => {
  const [loading, setLoading] = useState(true);
  let unsubscribeFromSnapshot = null;

  useEffect(() => {
    const collectionRef = fireStore.collection('shop');
    collectionRef.get()
      .then((shapshot)=>{
        const collectionsMap = convertCollectionsSnapshotToMap(shapshot);
        updateCollections(collectionsMap);
        setLoading(false);
      })
  },[]);

  return (
    <div className="shopPage">
      <Route 
        exact 
        path={`${match.path}`} 
        render={props => (
          <CollectionOverviewWithSpinner isLoading={loading} {...props}/>
        )}
      />
      <Route 
        path={`${match.path}/:categoryId`} 
        render={props => (
          <CollectionPageWithSpinner isLoading={loading} {...props}/>
        )}
      />
    </div>
  );
}

const mapDispatchToProps = dispatch =>({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null,mapDispatchToProps)(ShopPage);