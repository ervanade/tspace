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
const NavbarBeyoutiful = () => {
  const [color, setColor] = useState(true);
  const [menuButton, setMenuButton] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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

  const [isClient, setIsClient] = useState(false);

  // Pastikan ini hanya berjalan di sisi klien

  useEffect(() => {
    setIsClient(true);

    if (pathname?.includes("/beyoutiful")) {
      setColor(true);
    } else {
      setColor(false);
    }
  }, [pathname]);

  const buttonOnChangeBars = () => setMenuButton((prev) => !prev);
  const buttonOnChangeClose = () => setMenuButton(false);

  const navbarMenu = [
    { id: 1, name: "Home", link: "/#hero" },
    { id: 4, name: "Gallery", link: "/#gallery" },
    { id: 2, name: "Rent Space", link: "/#rent-space" },
    { id: 6, name: "Our Tenant", link: "/#our-tenant" },
    { id: 3, name: "Articles", link: "/#articles" },
    { id: 5, name: "Contact Us", link: "/#contact" },
  ];
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.lang.lang); // Get language from Redux store

  const handleChangeLang = (newLang) => {
    dispatch(setLang(newLang)); // Update language in Redux and localStorage
  };
  console.log(lang);
  return (
    <div
      className={`${
        color ? "!bg-white text-textDark !top-0 shadow-md" : ""
      } navbar-fixed sticky top-0 left-0 w-full z-50 bg-transparent`}
    >
      <div className="relative mx-auto max-w-7xl px-6 lg:px-12 py-4 flex items-center font-poppins">
        <div className="left-navbar mr-auto">
          {color ? (
            // <a href="#hero">
            // <p className="font-bebas text-[40px] text-textDark">T-SPACE</p>
            <Link href="/#hero">
              {/* <Image
                src="/logo_tspace_black.png"
                alt="Logo TSpace"
                width={70}
                height={70}
                className="w-[48px] h-[48px] sm:w-[70px] sm:h-[70px]"
              /> */}
              <Image
                src="/logo_ori.svg"
                alt="Logo TSpace"
                width={60}
                height={75}
                className="w-[41px] h-[52px] sm:w-[60px] sm:h-[75px]"
              />
            </Link>
          ) : (
            // </a>
            <Link href="/#hero">
              {/* <p className="font-bebas text-[40px] text-white">T-SPACE</p> */}
              <Image
                src="/logo_tspace_white.png"
                alt="Logo TSpace"
                width={70}
                height={70}
                className="w-[48px] h-[48px] sm:w-[70px] sm:h-[70px]"
              />
            </Link>
          )}
        </div>
        <div className="center-navbar absolute left-1/2 transform -translate-x-1/2 lg:flex space-x-6 hidden items-center">
          {navbarMenu.map((item) => {
            return (
              <a
                key={item.id}
                href={item.link + `?lang=${lang || "id"}`}
                className={`text-center ${
                  color
                    ? "text-textDark hover:text-black"
                    : "text-[#f1efefce] hover:text-white "
                } text-base ${item.name === "Home" ? "font-normal" : ""} ${
                  item.name === "Home" && !color ? "!text-white" : ""
                }`}
              >
                {item.name}
              </a>
            );
          })}
          <div className="relative ">
            <button
              className="flex items-center bg-white text-white rounded px-2 py-2"
              onClick={() => setIsDropdownOpen((prev) => !prev)}
            >
              <Image
                src={`/assets/icon/flag_${lang == "en" ? "us" : "id"}.svg`}
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
                    src="/assets/icon/flag_id.svg"
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
                    src="/assets/icon/flag_us.svg"
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
          {navbarMenu.map((item) => {
            return (
              <a
                key={item.id}
                href={item.link}
                className={`text-xl text-gray-200 hover:text-white font-medium flex items-center`}
              >
                {item.name}
              </a>
            );
          })}
          <div className="relative ">
            <button
              className="flex items-center bg-white text-white rounded px-2 py-2"
              onClick={() => setIsDropdownOpen((prev) => !prev)}
            >
              <Image
                src={`/assets/icon/flag_${lang == "en" ? "us" : "id"}.svg`}
                width={24}
                height={18}
                alt="Current Language"
              />
              {/* <span className="capitalize">{selectedLang}</span> */}
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
                    src="/assets/icon/flag_id.svg"
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
                    src="/assets/icon/flag_us.svg"
                    width={24}
                    height={18}
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

export default NavbarBeyoutiful;
