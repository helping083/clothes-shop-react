import React from 'react';
import {connect} from 'react-redux';
import {selectCollection} from '../../store/shop/shop.selectors';
import CollectionItem from '../../components/CollectionItem';
import WithBreadcrumps from '../../components/HOC/WithBreadcrumps/WithBreadcrumps';
import { CollectionPageDiv, TitleH2, ItemsContainer} from './collection.styles';

const CollectionPage = ({collection, match}) => {
  const {title, items} = collection;
  return(
    <CollectionPageDiv>
      <TitleH2>{title}</TitleH2>
      <ItemsContainer>
        {
          items.map(item => <CollectionItem key={item.id} item={item}/>)
        }
      </ItemsContainer>
    </CollectionPageDiv>
  )
}

const mapStateToProps = (state, ownProps) => {
  return{
  collection: selectCollection(ownProps.match.params.categoryId)(state)
}}

export default connect(mapStateToProps)(WithBreadcrumps(CollectionPage));