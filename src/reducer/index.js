import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import loginReducer from './loginReducer';
import feedsReducer from './feedsReducer';

const rootReducer = combineReducers({
  loginReducer,
  feedsReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['loginReducer', 'feedsReducer'],
};

export default persistReducer(persistConfig, rootReducer);
