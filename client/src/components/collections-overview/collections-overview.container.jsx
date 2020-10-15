import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectIsCollectionFetching} from '../../store/shop/shop.selectors';
import {compose} from 'redux';
import WithSpiner from '../HOC/WithSpinner/';
import CollectionsOverview from './collections-overview.component';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
})

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpiner
)(CollectionsOverview);

export default CollectionsOverviewContainer;