import { configureStore, combineReducers } from "@reduxjs/toolkit";
import langSlice from "./langSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const rootReducer = combineReducers({
  lang: langSlice,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["lang"], // Hanya persist lang
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Matikan serializable check untuk redux-persist
    }),
});

export const persistor = persistStore(store);
