import React from 'react';
import Button from '../button/';
import CardItem from '../cart-item/';
import {selectCardItems} from '../../store/card/card.selectors.js';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {createStructuredSelector} from 'reselect';
import './cart-dropdown.styles.scss';


const cartDropdown = ({cardItems, history}) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {
        cardItems.length ? 
        cardItems.map(item => <CardItem key={item.id} item={item}/>)
        :<span className="empty-message">your cart is empty</span>
      }
    </div>
    <Button onClick={() => history.push('/checkout')}>go to checkout</Button>
  </div>
)
const mapStateToProps = createStructuredSelector({
  cardItems: selectCardItems
});

export default withRouter(connect(mapStateToProps, null)(cartDropdown));