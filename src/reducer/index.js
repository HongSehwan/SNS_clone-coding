import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import loginReducer from './loginReducer';

const rootReducer = combineReducers({
  loginReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['loginReducer'],
};

export default persistReducer(persistConfig, rootReducer);
