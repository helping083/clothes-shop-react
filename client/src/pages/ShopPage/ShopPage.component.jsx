import React, { useEffect } from 'react';
import {Route} from 'react-router-dom';
import CollectionPageContainer from '../collection/';
import CollectionOverview from '../../components/collections-overview';
import { connect } from 'react-redux';
import {fetchCollectionsStart} from '../../store/shop/shop.actions';
import {ShopPageContainer} from './shopPage.styles';
import PropTypes from 'prop-types';
// todo: create pages folder into shop module and put collection
const ShopPage = ({match, fetchCollectionsStart}) => {
  useEffect(() => {
    fetchCollectionsStart()
  },[fetchCollectionsStart]);

  return (
    <ShopPageContainer>
      <Route 
        exact 
        path={`${match.path}`} 
        component={CollectionOverview}
      />
      <Route 
        path={`${match.path}/:categoryId`} 
        component={CollectionPageContainer}
      />
    </ShopPageContainer>
  );
}

const mapDispatchToProps = dispatch =>({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

ShopPage.propTypes = {
  match: PropTypes.object.isRequired,
  fetchCollectionsStart: PropTypes.func.isRequired
}

export default connect(null, mapDispatchToProps)(ShopPage);