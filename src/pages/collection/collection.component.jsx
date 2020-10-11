import React from 'react';
import {connect} from 'react-redux';
import {selectCollection} from '../../store/shop/shop.selectors';
import CollectionItem from '../../components/CollectionItem';
import WithBreadcrumps from '../../components/HOC/WithBreadcrumps/WithBreadcrumps';
import './collection.styles.scss';

const CollectionPage = ({collection, match}) => {
  const {title, items} = collection;
  return(
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {
          items.map(item => <CollectionItem key={item.id} item={item}/>)
        }
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return{
  collection: selectCollection(ownProps.match.params.categoryId)(state)
}}

export default connect(mapStateToProps)(WithBreadcrumps(CollectionPage));