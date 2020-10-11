import {connect} from 'react-redux';
import {compose} from 'redux';
import {createStructuredSelector} from 'reselect';
import {selectIsCollectionFetching} from '../../store/shop/shop.selectors';
import {WithSpinner} from '../../components/HOC/';
import CollectionPageComponent from './collection.component';

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => selectIsCollectionFetching(state)
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPageComponent);

export default CollectionPageContainer;