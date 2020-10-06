import React from 'react'
import './cart-icon.styles.scss';
import {connect} from 'react-redux';
import {toggleCardHidden} from '../../store/card/card.actions.js';
import {selectCartItemsCount} from '../../store/card/card.selectors.js';
import {ReactComponent as ShoppingIcon} from '../../global/shopping-bag.svg';

const cartIcon = ({toggleCardHidden, itemCount}) => {
  console.log('render cart icon')
  return(
  <div className='cart-icon' onClick={toggleCardHidden}>
    <ShoppingIcon className="shopping-icon"/>
    <span className="item-count">{itemCount}</span>
  </div>
)}

const mapStateToProps = state => ({
  itemCount: selectCartItemsCount(state)
})

const mapDispatchToProps = dispatch => ({
  toggleCardHidden: () => dispatch(toggleCardHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(cartIcon);