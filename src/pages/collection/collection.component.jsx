import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'
import {selectCollection} from '../../store/shop/shop.selectors';
import CollectionItem from '../../components/CollectionItem';
import './collection.styles.scss';

const CollectionPage = ({collection}) => (
  <div className='category'>
    {console.log('collection', collection)}
    <h2>CATEGORY PAGE</h2>
  </div>
)

const mapStateToProps = (state, ownProps) => {
  return{
  collection: selectCollection(ownProps.match.params.categoryId)(state)
}}

export default connect(mapStateToProps)(CollectionPage);