import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';
import storage from 'redux-persist/lib/storage';
import authApi from '../auth/api';
import authReducer from '../auth/slice';
import suggestionsApi from '../suggestions/api';

const combinedReducers = combineReducers({
  auth: authReducer,
  [authApi.reducerPath]: authApi.reducer,
  [suggestionsApi.reducerPath]: suggestionsApi.reducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, combinedReducers);

export const store = configureStore({
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }).concat(
    authApi.middleware,
    suggestionsApi.middleware,
  ),
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

// Use `import type { RootState } ...` to supress eslint no-cycle error
export type RootState = ReturnType<typeof combinedReducers>;
