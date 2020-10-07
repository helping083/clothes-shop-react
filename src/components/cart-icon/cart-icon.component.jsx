import React from 'react'
import './cart-icon.styles.scss';
import {connect} from 'react-redux';
import {togglecartHidden} from '../../store/cart/cart.actions.js';
import {selectCartItemsCount} from '../../store/cart/cart.selectors.js';
import {createStructuredSelector} from 'reselect';
import {ReactComponent as ShoppingIcon} from '../../global/shopping-bag.svg';

const cartIcon = ({togglecartHidden, itemCount}) => {
  return(
  <div className='cart-icon' onClick={togglecartHidden}>
    <ShoppingIcon className="shopping-icon"/>
    <span className="item-count">{itemCount}</span>
  </div>
)}

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
});

const mapDispatchToProps = dispatch => ({
  togglecartHidden: () => dispatch(togglecartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(cartIcon);