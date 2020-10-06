import React from 'react'
import './cart-icon.styles.scss';
import {connect} from 'react-redux';
import {toggleCardHidden} from '../../store/card/card.actions.js';
import {ReactComponent as ShoppingIcon} from '../../global/shopping-bag.svg'
const cartIcon = ({toggleCardHidden}) => (
  <div className='cart-icon' onClick={toggleCardHidden}>
    <ShoppingIcon className="shopping-icon"/>
    <span className="item-count">0</span>
  </div>
)

const mapDispatchToProps = dispatch => ({
  toggleCardHidden: () => dispatch(toggleCardHidden())
})

export default connect(null,mapDispatchToProps)(cartIcon);