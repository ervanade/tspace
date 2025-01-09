"use client";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../store/index.js";
import Loading from "@/components/Loading";
import SyncLangToLocalStorage from "./SyncLangToLocalStorage.jsx";

export default function ClientProvider({ children }) {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <SyncLangToLocalStorage />{" "}
        {/* Sinkronisasi Redux lang ke localStorage */}
        {children}
      </PersistGate>
    </Provider>
  );
}
