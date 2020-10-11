import React, { useEffect } from 'react';
import {Route} from 'react-router-dom';
import CollectionPage from '../collection/';
import CollectionOverview from '../../components/collections-overview';
import {WithSpinner} from '../../components/HOC/';
import { connect } from 'react-redux';
import {fetchCollectionsStartAsync} from '../../store/shop/shop.thunk';
import {selectIsCollectionFetching} from '../../store/shop/shop.selectors';
import {createStructuredSelector} from 'reselect';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({match, isCollectionFetching, fetchCollectionsStartAsync}) => {
  useEffect(() => {
    fetchCollectionsStartAsync()
  },[]);

  return (
    <div className="shopPage">
      <Route 
        exact 
        path={`${match.path}`} 
        render={props => (
          <CollectionOverviewWithSpinner isLoading={isCollectionFetching} {...props}/>
        )}
      />
      <Route 
        path={`${match.path}/:categoryId`} 
        render={props => (
          <CollectionPageWithSpinner isLoading={isCollectionFetching} {...props}/>
        )}
      />
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching
})

const mapDispatchToProps = dispatch =>({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);