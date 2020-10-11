import React, { useEffect } from 'react';
import {Route} from 'react-router-dom';
import CollectionPageContainer from '../collection/';
import CollectionOverview from '../../components/collections-overview';
import { connect } from 'react-redux';
import {fetchCollectionsStartAsync} from '../../store/shop/shop.thunk';

const ShopPage = ({match, fetchCollectionsStartAsync}) => {
  useEffect(() => {
    fetchCollectionsStartAsync()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <div className="shopPage">
      <Route 
        exact 
        path={`${match.path}`} 
        component={CollectionOverview}
      />
      <Route 
        path={`${match.path}/:categoryId`} 
        component={CollectionPageContainer}
      />
    </div>
  );
}

const mapDispatchToProps = dispatch =>({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(null, mapDispatchToProps)(ShopPage);