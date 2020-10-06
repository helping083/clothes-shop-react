import React from 'react';
import Button from '../button/';
import CardItem from '../cart-item/';
import {connect} from 'react-redux'
import './cart-dropdown.styles.scss';


const cartDropdown = ({cardItems}) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cardItems.map(item => <CardItem key={item.id} item={item}/>)}
    </div>
    <Button>go to checkout</Button>
  </div>
)
const mapStateToProps = ({card: {cardItems}}) => ({
  cardItems
});

export default connect(mapStateToProps, null)(cartDropdown);