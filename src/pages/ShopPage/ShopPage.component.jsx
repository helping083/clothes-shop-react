import React from 'react';
import {Route} from 'react-router-dom';
import CollectionPage from '../collection/';
import CollectionOverview from '../../components/collections-overview';

const shopPage = ({match}) => {
  return (
    <div className="shopPage">
      <Route exact path={`${match.path}`} component={CollectionOverview}/>
      <Route path={`${match.path}/:categoryId`} component={CollectionPage}/>
    </div>
  )
}



export default shopPage;