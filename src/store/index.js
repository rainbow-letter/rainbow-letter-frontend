import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import user from './user';
import modal from './modal';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'modal'],
};

const rootReducer = combineReducers({ user, modal });

export default persistReducer(persistConfig, rootReducer);
