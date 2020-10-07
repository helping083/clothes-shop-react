import React from 'react';
import {connect} from 'react-redux';
import PreviewCollection from '../PreviewCollection/';
import {createStructuredSelector} from 'reselect';
import {selectShopItems} from '../../store/shop/shop.selectors';
import './collections-overview.styles.scss';

const collectionsOverview = ({collections}) => (
  <div className="collections-overview">
    {
      collections.map(({id, ...props}) => (
        <PreviewCollection key={id} {...props}/>
      ))
    }
  </div>
)

const mapStateToProps = createStructuredSelector({
  collections: selectShopItems
})

export default connect(mapStateToProps, null)(collectionsOverview);
