import React from 'react';
import {connect} from 'react-redux';
import PreviewCollection from '../PreviewCollection/';
import {createStructuredSelector} from 'reselect';
import {selectCollectionsFromPreview} from '../../store/shop/shop.selectors';
import { CollectionsOverviewContainer } from './collections-overview.styles';

const collectionsOverview = ({collections}) => (
  <CollectionsOverviewContainer>
    {
      collections.map(({id, ...props}) => (
        <PreviewCollection key={id} {...props}/>
      ))
    }
  </CollectionsOverviewContainer>
)

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsFromPreview
})

export default connect(mapStateToProps, null)(collectionsOverview);
