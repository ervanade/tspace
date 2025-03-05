"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { setLang } from "../store/langSlice";

export default function SyncLangToLocalStorage() {
  const pathname = usePathname(); // Mendapatkan path dari URL
  const searchParams = useSearchParams(); // Mendapatkan search params
  const dispatch = useDispatch();
  const router = useRouter(); // Hook untuk melakukan redirect

  useEffect(() => {
    const queryLang = searchParams.get("lang"); // Ambil query parameter lang
    const savedLang = localStorage.getItem("lang"); // Ambil dari localStorage

    if (queryLang) {
      // Jika ada parameter lang di URL, gunakan itu
      if (queryLang !== savedLang) {
        localStorage.setItem("lang", queryLang); // Simpan ke localStorage
        dispatch(setLang(queryLang)); // Ubah di Redux
      }
    } else if (savedLang) {
      // Jika tidak ada query lang, gunakan nilai dari localStorage
      const currentUrl = new URL(window.location.href);
      currentUrl.searchParams.set("lang", savedLang);
      window.history.replaceState(null, "", currentUrl.toString()); // Update URL tanpa reload
      dispatch(setLang(savedLang)); // Ubah Redux
    } else {
      // Jika tidak ada lang di URL atau localStorage, redirect ke lang default (id)
      const defaultLang = "id";
      const currentUrl = new URL(window.location.href);
      currentUrl.searchParams.set("lang", defaultLang);
      localStorage.setItem("lang", defaultLang); // Simpan ke localStorage
      dispatch(setLang(defaultLang)); // Ubah di Redux
      router.replace(currentUrl.toString()); // Redirect ke URL dengan lang default
    }
  }, [pathname, searchParams, dispatch, router]); // Jalan setiap kali pathname atau query berubah

  return null;
}