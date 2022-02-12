import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  
  const persistedReducer = persistReducer({
    key: 'random-users',
    storage,
    whitelist: [],
  }, reducers);

  return persistedReducer;
};
