"use client";
import React from "react";
import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaBars } from "react-icons/fa6";

import { AiOutlineCloseCircle } from "react-icons/ai";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { setLang } from "@/store/langSlice";
const NavbarServices = () => {
  const [color, setColor] = useState(true);
  const [menuButton, setMenuButton] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);

  const [selectedLang, setSelectedLang] = useState("id");
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  // Load preferensi bahasa dari localStorage
  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     const savedLang = localStorage.getItem("preferredLanguage" || "id");
  //     if (savedLang) {
  //       setSelectedLang(savedLang);
  //     }
  //   }
  // }, []);
  function appendQueryWithHash(url, key, value) {
    const [baseUrl, hash] = url.split("#"); // Pisahkan URL dan hash
    const urlObj = new URL(baseUrl, window.location.origin); // Pastikan parsing URL secara benar
    urlObj.searchParams.set(key, value); // Tambahkan query param
    return hash ? `${urlObj.toString()}#${hash}` : urlObj.toString(); // Gabungkan kembali dengan hash
  }

  const [isClient, setIsClient] = useState(false);

  // Pastikan ini hanya berjalan di sisi klien

  // useEffect(() => {
  //   setIsClient(true);

  //   if (pathname?.includes("/beyoutiful")) {
  //     setColor(true);
  //   } else {
  //     setColor(false);
  //   }
  // }, [pathname]);

  const buttonOnChangeBars = () => setMenuButton((prev) => !prev);
  const buttonOnChangeClose = () => setMenuButton(false);
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.lang.lang); // Get language from Redux store
  const navbarMenu = [
    {
      id: 1,
      name: "Home",
      name_en: "Home",
      link: `/beyoutiful?lang=${lang}#hero`,
    },
    { id: 2, name: "T-Space", name_en: "T-Space", link: "/" },
    {
      id: 3,
      name: "Servis Kami",
      name_en: "Our Services",
      link: `/beyoutiful?lang=${lang}#services`,
    },
    {
      id: 4,
      name: "Jadwal Dokter",
      name_en: "Doctors Schedule",
      link: `/beyoutiful?lang=${lang}#doctor-schedules`,
    },
    {
      id: 5,
      name: "Fasilitas",
      name_en: "Facilities",
      link: `/beyoutiful?lang=${lang}#facility`,
    },
    {
      id: 6,
      name: "Hubungi Kami",
      name_en: "Contact Us",
      link: `/beyoutiful?lang=${lang}#contact`,
    },
  ];
  const subMenu = [
    {
      name: "Bedah Plastik",
      name_en: "Plastic Surgery",
      link: "/beyoutiful/services/bedah-plastik",
    },

    {
      name: "Dermatologi",
      name_en: "Dermatology",
      link: "/beyoutiful/services/dermatologi",
    },
    {
      name: "Externa Genitalia",
      name_en: "Externa Genitalia",
      link: "/beyoutiful/services/externa-genitalia",
    },

    {
      name: "Urologi",
      name_en: "Urology",
      link: "/beyoutiful/services/urologi",
    },
    {
      name: "Vaskular",
      name_en: "Vascular",
      link: "/beyoutiful/services/vaskular",
    },
    { name: "Gizi", name_en: "Nutrition", link: "/beyoutiful/services/gizi" },
    {
      name: "Hyperbaric Oxygen Therapy",
      name_en: "Hyperbaric Oxygen Therapy (HBOT)",
      link: "/beyoutiful/services/hyperbaric-oxygen-therapy",
    },
    // {
    //   name: "Radiologi",
    //   name_en: "Radiology",
    //   link: "/beyoutiful/services/radiologi",
    // },
    {
      name: "Obstetri & Ginekologi",
      name_en: "Obstetrics & Gynecology",
      link: "/beyoutiful/services/obstetri-ginekologi",
    },
    {
      name: "Gigi",
      name_en: "Dental",
      link: "/beyoutiful/services/gigi",
    },
  ];

  const handleChangeLang = (newLang) => {
    dispatch(setLang(newLang)); // Update Redux
    localStorage.setItem("lang", newLang); // Update localStorage

    const params = new URLSearchParams(searchParams);
    params.set("lang", newLang); // Update query parameter
    const href = `${pathname}?${params.toString()}`;
    router.push(href); // Navigasi ke URL dengan parameter lang
  };

  return (
    <div
      className={`
      !bg-white text-textDark !top-0 shadow-md navbar-fixed sticky !left-0 w-full z-50 bg-transparent`}
    >
      <div className="relative mx-auto max-w-7xl px-6 lg:px-12 py-4 flex items-center font-poppins">
        <div className="left-navbar mr-auto py-2 lg:py-0">
          <Link href={`/beyoutiful?lang=${lang}`}>
            <Image
              src="/beyoutiful_orange.png"
              alt="Logo Beyoutiful"
              width={183}
              height={48}
              className="w-[200px] h-[32px] 2xl:w-[200px] 2xl:h-[32px]"
            />
          </Link>
        </div>
        <div className="center-navbar absolute left-1/2 transform -translate-x-1/2 lg:flex space-x-3 xl:space-x-5 hidden items-center">
          {navbarMenu.map((item, index) => (
            <React.Fragment key={index}>
              {item.name === "T-Space" ? (
                <Link
                  key={item.id}
                  href={`/?lang=${lang}`}
                  className={`text-center ${
                    color
                      ? "text-textDark hover:text-black"
                      : "text-[#f1efefce] hover:text-white "
                  } text-sm`}
                >
                  {lang === "en" ? item.name_en : item.name}
                </Link>
              ) : item.name === "Servis Kami" ? (
                <div
                  className="relative"
                  key={item.id}
                  onMouseEnter={() => setMegaMenuOpen(true)}
                  onMouseLeave={() => setMegaMenuOpen(false)}
                >
                  <button
                    aria-label="button"
                    className={`text-center ${
                      color
                        ? "!text-secondary font-semibold"
                        : "text-[#f1efefce] hover:text-white"
                    } text-sm`}
                  >
                    {lang === "en" ? item.name_en : item.name}
                  </button>

                  {/* Mega Menu */}
                  {megaMenuOpen && (
                    <div className="absolute left-2/3 transform -translate-x-1/2 w-[500px] bg-white text-black shadow-lg p-6 grid grid-cols-2 gap-2 z-50">
                      {subMenu.map((menu, index) => (
                        <a
                          key={index}
                          href={`${menu.link}?lang=${lang}`}
                          className="block hover:bg-gray-100 rounded px-3 py-2 text-sm"
                        >
                          {lang === "en" ? menu.name_en : menu.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={`${item.link}`}
                  key={item.id}
                  className={`text-center ${
                    color
                      ? "text-textDark hover:text-black"
                      : "text-[#f1efefce] hover:text-white "
                  } text-sm ${
                    item.name === "Servis Kami"
                      ? "font-semibold !text-secondary"
                      : ""
                  }`}
                >
                  {lang === "en" ? item.name_en : item.name}
                </Link>
              )}
            </React.Fragment>
          ))}

          <div className="relative ">
            <button
              aria-label="button"
              className="flex items-center bg-white text-white rounded px-2 py-2"
              onClick={() => setIsDropdownOpen((prev) => !prev)}
            >
              <Image
                src={`/flag_${lang == "en" ? "us" : "id"}.svg`}
                width={24}
                height={18}
                alt="Current Language"
              />
              {/* <span className="capitalize">{lang}</span> */}
            </button>

            {/* Dropdown */}
            {isDropdownOpen && (
              <div className="absolute mt-2 bg-white text-textDark border rounded shadow-md">
                <button
                  aria-label="button"
                  className="flex items-center gap-2 px-2 py-2 hover:bg-gray-100 w-full text-left"
                  onClick={() => {
                    handleChangeLang("id");
                    setIsDropdownOpen(false);
                  }}
                >
                  <Image
                    src="/flag_id.svg"
                    width={24}
                    height={18}
                    alt="Bahasa Indonesia"
                  />
                </button>
                <button
                  aria-label="button"
                  className="flex items-center gap-2 px-2 py-2 hover:bg-gray-100 w-full text-left"
                  onClick={() => {
                    handleChangeLang("en");
                    setIsDropdownOpen(false);
                  }}
                >
                  <Image
                    src="/flag_us.svg"
                    width={24}
                    height={18}
                    alt="English"
                  />
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="right-navbar lg:flex hidden ml-auto">
          <Link href={`/?lang=${lang}`}>
            <Image
              src="/logo_ori.svg"
              alt="Logo TSpace"
              width={60}
              height={75}
              className="w-[41px] h-[52px] sm:w-[60px] sm:h-[75px]"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            className="lg:hidden"
            onClick={buttonOnChangeBars}
            aria-label="menu bar button"
          >
            <FaBars
              className={`text-2xl font-bold ${
                color
                  ? "text-textDark hover:text-gray-800"
                  : "text-white/85 hover:text-white"
              } `}
            />
          </button>
        </div>
        <div
          className={`right-navbar z-50 space-y-6 flex flex-col items-center fixed top-0 ${
            menuButton ? "right-0" : "-right-[999px]"
          } lg:hidden w-full max-w-[320px] py-12 px-8 bg-[#fff] text-dark h-full duration-300 transition-all ease-in-out shadow-lg`}
        >
          <button
            aria-label="button"
            className="absolute top-5 right-6"
            onClick={buttonOnChangeClose}
          >
            <FaBars
              className="text-3xl text-dark hover:text-secondary transition duration-200"
              aria-label="close menu bar button"
            />
          </button>
          {navbarMenu.map((item, index) => (
            <React.Fragment key={index}>
              {item.name === "T-Space" ? (
                <Link
                  key={item.id}
                  href={`/?lang=${lang}`}
                  className="text-lg text-dark hover:text-orange-500 font-medium flex items-center transition duration-200"
                >
                  {lang === "en" ? item.name_en : item.name}
                </Link>
              ) : item.name === "Servis Kami" ? (
                <div className="relative" key={item.id}>
                  <button
                    aria-label="button"
                    onClick={() => setMegaMenuOpen((prev) => !prev)}
                    className="text-lg text-dark hover:text-orange-500 font-medium flex items-center transition duration-200"
                  >
                    {lang === "en" ? item.name_en : item.name}
                  </button>
                  {megaMenuOpen && (
                    <div
                      className="absolute top-full mt-2 bg-white text-textDark border rounded shadow-md p-4 space-y-1 z-50 min-w-[200px] max-w-screen-sm"
                      key={item.id}
                    >
                      {subMenu.map((menu, index) => (
                        <a
                          key={index}
                          href={`${menu.link}?lang=${lang}`}
                          className="block hover:bg-gray-100 rounded px-3 py-2 text-sm"
                        >
                          {lang === "en" ? menu.name_en : menu.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={`${item.link}`}
                  key={item.id}
                  className="text-lg text-dark hover:text-orange-500 font-medium flex items-center transition duration-200"
                >
                  {lang === "en" ? item.name_en : item.name}
                </Link>
              )}
            </React.Fragment>
          ))}
          <div className="relative">
            <button
              aria-label="button"
              className="flex items-center gap-2 bg-gray-200 rounded px-3 py-2 hover:bg-orange-500 hover:text-white"
              onClick={() => setIsDropdownOpen((prev) => !prev)}
            >
              <Image
                src={`/flag_${lang == "en" ? "us" : "id"}.svg`}
                width={24}
                height={18}
                alt="Current Language"
              />
            </button>
            {isDropdownOpen && (
              <div className="absolute mt-2 bg-white border rounded shadow-md text-dark z-10">
                <button
                  aria-label="button"
                  className="flex items-center gap-2 px-3 py-2 hover:bg-orange-500 hover:text-white w-full text-left"
                  onClick={() => {
                    handleChangeLang("id");
                    setIsDropdownOpen(false);
                  }}
                >
                  <Image
                    src="/flag_id.svg"
                    width={24}
                    height={18}
                    alt="Bahasa Indonesia"
                  />
                </button>
                <button
                  aria-label="button"
                  className="flex items-center gap-2 px-3 py-2 hover:bg-orange-500 hover:text-white w-full text-left"
                  onClick={() => {
                    handleChangeLang("en");
                    setIsDropdownOpen(false);
                  }}
                >
                  <Image
                    src="/flag_us.svg"
                    width={24}
                    height={18}
                    alt="English"
                  />
                </button>
              </div>
            )}
          </div>
          <Link href={`/?lang=${lang}`}>
            <Image
              src="/logo_ori.svg"
              alt="Logo TSpace"
              width={60}
              height={75}
              className="w-[60px] h-[75px]"
            />
          </Link>
        </div>
      </div>
      <div
        className={`overlay w-screen h-screen absolute top-0 left-0 bg-black bg-opacity-20 z-[2] transition-all duration-300 lg:hidden ${
          menuButton ? "block" : "hidden"
        } `}
        onClick={() => setMenuButton(false)}
      ></div>
    </div>
  );
};

export default NavbarServices;
