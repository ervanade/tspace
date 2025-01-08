'use client'
import { usePathname, useSearchParams } from "next/navigation";
import Image from 'next/image';
import { useEffect, useState } from "react";


const LanguageSwitcher = () => {
const [selectedLang, setSelectedLang] = useState("id");
const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Load preferensi bahasa dari localStorage
useEffect(() => {
    const savedLang = localStorage.getItem("preferredLanguage");
    if (savedLang) {
      setSelectedLang(savedLang);
    }
  }, []);

  // Ganti bahasa dan simpan preferensi
  const changeLanguage = (lang) => {
    localStorage.setItem("preferredLanguage", lang);
    setSelectedLang(lang);
    const params = new URLSearchParams(searchParams);
    params.set("lang", lang); // Tambahkan query lang
    window.location.href = `${pathname}?${params.toString()}`;
  };

  return (
    <div className="fixed bottom-8 left-8 z-50 ">
      {/* Trigger button */}
      <button
        className="flex items-center gap-2 bg-secondary text-white px-4 py-2 rounded-full fixed bottom-8 left-12 z-50"
        onClick={() => setIsDropdownOpen((prev) => !prev)}
      >
        <Image
          src={`/assets/icon/flag_${selectedLang == "en"? "us": "id"}.svg`}
          width={24}
          height={18}
          alt="Current Language"
        />
        <span className="capitalize">{selectedLang}</span>
      </button>

      {/* Dropdown */}
      {isDropdownOpen && (
        <div className="absolute mt-2 bg-white text-textDark border rounded shadow-md">
          <button
            className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 w-full text-left"
            onClick={() => {
              changeLanguage("id");
              setIsDropdownOpen(false);
            }}
          >
            <Image src="/assets/icon/flag_id.svg" width={24} height={18} alt="Bahasa Indonesia" />
            ID
          </button>
          <button
            className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 w-full text-left"
            onClick={() => {
              changeLanguage("en");
              setIsDropdownOpen(false);
            }}
          >
            <Image src="/assets/icon/flag_us.svg" width={24} height={18} alt="English" />
            EN
          </button>
        </div>
      )}
    </div>
  )
}

export default LanguageSwitcher
