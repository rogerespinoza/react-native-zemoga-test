import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './root_reducer';

// -- sagas
import createSagaMiddleware from 'redux-saga';
import rootSaga from './root_sagas';
// --

const persistConfig = {
  key: 'root-01',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  const sagaMiddleware = createSagaMiddleware();
  let store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);
  let persistor = persistStore(store);
  return {store, persistor};
};
