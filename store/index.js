import { configureStore } from '@reduxjs/toolkit';
import langSlice from './langSlice';  // import langSlice
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

const persistLangConfig = {
  key: 'lang',
  storage,
  whitelist: ['lang'], // Only persist lang
};

const persistedLang = persistReducer(persistLangConfig, langSlice);

export const store = configureStore({
  reducer: {
    lang: persistedLang,
  },
  devTools: true,
});

export const persistor = persistStore(store);
