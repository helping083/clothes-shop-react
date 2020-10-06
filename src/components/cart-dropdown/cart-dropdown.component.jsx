import React from 'react';
import Button from '../button/';
import CardItem from '../cart-item/';
import {selectCardItems} from '../../store/card/card.selectors.js';
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
const mapStateToProps = state => ({
  cardItems: selectCardItems(state)
});

export default connect(mapStateToProps, null)(cartDropdown);