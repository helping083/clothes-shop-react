import React, { useEffect } from 'react';
import {Route} from 'react-router-dom';
import CollectionPageContainer from '../collection/';
import CollectionOverview from '../../components/collections-overview';
import { connect } from 'react-redux';
import {fetchCollectionsStart} from '../../store/shop/shop.actions';
// todo: create pages folder into shop module and put collection
const ShopPage = ({match, fetchCollectionsStart}) => {
  useEffect(() => {
    fetchCollectionsStart()
  },[fetchCollectionsStart]);

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
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(null, mapDispatchToProps)(ShopPage);