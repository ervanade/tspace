import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function SyncLangToLocalStorage() {
  const lang = useSelector((state) => state.lang.lang);

  useEffect(() => {
    if (lang) {
      localStorage.setItem("lang", lang); // Simpan bahasa ke localStorage
    }
  }, [lang]);

  return null; // Tidak perlu merender apa pun
}
