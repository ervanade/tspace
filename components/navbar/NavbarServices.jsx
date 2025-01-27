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
    { id: 1, name: "Home", link: `/beyoutiful?lang=${lang}#hero` },
    { id: 2, name: "T-Space", link: "/" },
    { id: 3, name: "Servis Kami", link: `/beyoutiful?lang=${lang}#services` },
    {
      id: 4,
      name: "Jadwal Dokter",
      link: `/beyoutiful?lang=${lang}#doctor-schedules`,
    },
    { id: 5, name: "Fasilitas", link: `/beyoutiful?lang=${lang}#facility` },
    { id: 6, name: "Contact Us", link: `/beyoutiful?lang=${lang}#contact` },
  ];
  const subMenu = [
    {
      name: "Bedah Plastik",
      name_en: "Plastic Surgery",
      link: "/beyoutiful/services/bedah-plastik",
    },
    {
      name: "Treatment Estetika",
      name_en: "Aesthetic Treatment",
      link: "/beyoutiful/services/treatment-estetika",
    },
    {
      name: "Hyperbaric Oxygen Therapy",
      name_en: "Hyperbaric Oxygen Therapy (HBOT)",
      link: "/beyoutiful/services/hyperbaric-oxygen-therapy",
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
      name: "Radiologi",
      name_en: "Radiology",
      link: "/beyoutiful/services/radiologi",
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
        <div className="left-navbar mr-auto">
          <Link href="/#hero">
            <Image
              src="/logo_ori.svg"
              alt="Logo TSpace"
              width={60}
              height={75}
              className="w-[41px] h-[52px] sm:w-[60px] sm:h-[75px]"
            />
          </Link>
        </div>
        <div className="center-navbar absolute left-1/2 transform -translate-x-1/2 lg:flex space-x-5 hidden items-center">
          {navbarMenu.map((item) => (
            <>
              {item.name === "T-Space" ? (
                <Link
                  href={`/?lang=${lang}`}
                  className={`text-center ${
                    color
                      ? "text-textDark hover:text-black"
                      : "text-[#f1efefce] hover:text-white "
                  } text-sm`}
                >
                  {item.name}
                </Link>
              ) : item.name === "Servis Kami" ? (
                <div
                  className="relative"
                  onMouseEnter={() => setMegaMenuOpen(true)}
                  onMouseLeave={() => setMegaMenuOpen(false)}
                >
                  <button
                    className={`text-center ${
                      color
                        ? "text-black font-semibold"
                        : "text-[#f1efefce] hover:text-white"
                    } text-sm`}
                  >
                    {item.name}
                  </button>

                  {/* Mega Menu */}
                  {megaMenuOpen && (
                    <div className="absolute left-2/3 transform -translate-x-1/2 w-[500px] bg-white text-black shadow-lg p-6 grid grid-cols-2 gap-3 z-50">
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
                      ? "font-semibold text-black"
                      : ""
                  }`}
                >
                  {item.name}
                </Link>
              )}
            </>
          ))}

          <div className="relative ">
            <button
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
          <Link href={`/beyoutiful`}>
            <Image
              src="/beyoutiful_orange.png"
              alt="Logo Beyoutiful"
              width={183}
              height={48}
              className="w-[162.5px] h-[27px] 2xl:w-[183px] 2xl:h-[30px]"
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
          className={`right-navbar z-50 space-y-4 flex flex-col items-center fixed top-0 ${
            menuButton ? "right-0" : "-right-[999px]"
          } lg:hidden w-full max-w-[300px] py-10 xs:py-16 px-8 xs:px-14 bg-[#303638] text-white h-full duration-300 transition-all ease-in-out`}
        >
          <button
            className="absolute top-5 right-6"
            onClick={buttonOnChangeClose}
          >
            <FaBars
              className="text-3xl text-gray-200 hover:text-white "
              aria-label="close menu bar button"
            />
          </button>
          {navbarMenu.map((item) => (
            <>
              {item.name === "T-Space" ? (
                <Link
                  href={`/beyoutiful?lang=${lang}`}
                  className={`text-xl text-gray-200 hover:text-white font-medium flex items-center`}
                >
                  {item.name}
                </Link>
              ) : item.name === "Servis Kami" ? (
                <div className="relative">
                  <button
                    onClick={() => setMegaMenuOpen((prev) => !prev)}
                    className="text-xl text-gray-200 hover:text-white font-medium flex items-center"
                  >
                    {item.name}
                  </button>
                  {megaMenuOpen && (
                    <div className="mt-2 bg-white text-textDark border rounded shadow-md p-4 space-y-2">
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
                <button
                  key={item.id}
                  onClick={(e) => {
                    e.preventDefault();
                    handleChangeLang(lang); // Update language in query params
                    const elementId = item.link.replace("/beyoutiful#", ""); // Extract ID from link
                    const element = document.getElementById(elementId);
                    if (element) {
                      const headerHeight =
                        document.querySelector("header")?.offsetHeight || 0;
                      const elementPosition =
                        element.getBoundingClientRect().top + window.scrollY; // Use window.scrollY instead of pageYOffset
                      const adjustedPosition =
                        elementPosition - headerHeight - 100; // Adjust offset by reducing 100px
                      window.scrollTo({
                        top: adjustedPosition,
                        behavior: "smooth",
                      });
                      history.replaceState(null, "", `#${elementId}`); // Prevent URL hash reload
                    } else {
                      console.warn(`Element with ID ${elementId} not found`);
                    }
                  }}
                  className={`text-xl text-gray-200 hover:text-white font-medium flex items-center`}
                >
                  {item.name}
                </button>
              )}
            </>
          ))}
          <div className="relative">
            <button
              className="flex items-center bg-white text-white rounded px-1 py-2"
              onClick={() => setIsDropdownOpen((prev) => !prev)}
            >
              <Image
                src={`/flag_${lang === "en" ? "us" : "id"}.svg`}
                width={22}
                height={16}
                alt="Current Language"
              />
            </button>
            {isDropdownOpen && (
              <div className="absolute mt-2 bg-white text-textDark border rounded shadow-md">
                <button
                  className="flex items-center gap-2 px-1 py-2 hover:bg-gray-100 w-full text-left"
                  onClick={() => {
                    handleChangeLang("id");
                    setIsDropdownOpen(false);
                  }}
                >
                  <Image
                    src="/flag_id.svg"
                    width={22}
                    height={16}
                    alt="Bahasa Indonesia"
                  />
                </button>
                <button
                  className="flex items-center gap-2 px-1 py-2 hover:bg-gray-100 w-full text-left"
                  onClick={() => {
                    handleChangeLang("en");
                    setIsDropdownOpen(false);
                  }}
                >
                  <Image
                    src="/flag_us.svg"
                    width={22}
                    height={16}
                    alt="English"
                  />
                </button>
              </div>
            )}
          </div>
          <Link href={`/beyoutiful`}>
            <Image
              src="/beyoutiful_orange.png"
              alt="Logo Beyoutiful"
              width={183}
              height={48}
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