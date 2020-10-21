import React from 'react';
import {connect} from 'react-redux';
import {addItemTocart} from '../../store/cart/cart.actions';
import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer
} from './collection-item.styles';
/**
 * todo:
 *  & .collection-item {
      margin-bottom: 30px;
    } 
 */
const CollectionItem = ({item, addItem}) => {
  const {name, price, imageUrl,} = item;
  return (
    <CollectionItemContainer>
      <BackgroundImage className='image' imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={() => addItem(item)} inverted={true}>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  )
}

const mapDispatchToPros = dispatch => ({
  addItem: item => {dispatch(addItemTocart(item))}
})

export default connect(null,mapDispatchToPros)(CollectionItem);