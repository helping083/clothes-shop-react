import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './rootReducer';
import { persistStore } from 'redux-persist';
import {fetchCollectionsStart} from './shop/shop.sagas';
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()

const middlewares = [logger, sagaMiddleware];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(fetchCollectionsStart)

const persistor = persistStore(store);

export {store, persistor};