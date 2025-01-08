"use client";

import { Provider } from 'react-redux';
import { store, persistor } from '../store/index.js';
import { PersistGate } from 'redux-persist/integration/react';
import Loading from "@/components/Loading";
import { useEffect } from 'react';
import Cookies from 'js-cookie';
import { setLang } from '@/store/langSlice.js';

export default function ClientProvider({ children }) {
    useEffect(() => {
        // Ambil lang dari cookie dan perbarui Redux
        const lang = Cookies.get("lang") || "id";
        store.dispatch(setLang(lang));
      }, []);
  return (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
