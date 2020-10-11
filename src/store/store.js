import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';

const middlewares = [logger, thunk];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

const persistor = persistStore(store);

export {store, persistor};