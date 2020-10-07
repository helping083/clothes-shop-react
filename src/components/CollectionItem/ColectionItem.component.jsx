import React from 'react';
import './collection-item.styles.scss';
import Button from '../button/';
import {connect} from 'react-redux';
import {addItemTocart} from '../../store/cart/cart.actions';

const CollectionItem = ({item, addItem}) => {
  const {name, price, imageUrl,} = item;
  return (
    <div className="collection-item">
      <div 
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button inverted onClick={()=> addItem(item)}> add to cart</Button>
    </div>
  )
}

const mapDispatchToPros = dispatch => ({
  addItem: item => {dispatch(addItemTocart(item))}
})

export default connect(null,mapDispatchToPros)(CollectionItem);