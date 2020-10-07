import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import PreviewCollection from '../../components/PreviewCollection/';
import {selectShopItems} from '../../store/shop/shop.selectors';

const shopPage = ({collections}) => {
  return (
    <div className="shopPage">
    {
      collections.map(({id, ...props}) => (
        <PreviewCollection key={id} {...props}/>
      ))
    }
  </div>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectShopItems
})

export default connect(mapStateToProps,null)(shopPage);