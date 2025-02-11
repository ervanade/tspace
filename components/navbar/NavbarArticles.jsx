"use client";
import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa6";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { setLang } from "@/store/langSlice";

const NavbarArticles = () => {
  const [color, setColor] = useState(true);
  const [menuButton, setMenuButton] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const buttonOnChangeClose = () => setMenuButton(false);

  const dispatch = useDispatch();
  const lang = useSelector((state) => state.lang.lang); // Get language from Redux store

  const handleChangeLang = (newLang) => {
    dispatch(setLang(newLang)); // Update Redux
    localStorage.setItem("lang", newLang); // Update localStorage

    const params = new URLSearchParams(searchParams);
    params.set("lang", newLang); // Update query parameter
    const href = `${pathname}?${params.toString()}`;
    router.push(href); // Navigasi ke URL dengan parameter lang
  };

  const navbarMenu = [
    { id: 1, name: "Home", name_en: "Home", link: `/?lang=${lang}#hero` },
    {
      id: 2,
      name: "Beyoutiful",
      name_en: "Beyoutiful",
      link: `/beyoutiful?lang=${lang}`,
    },
    {
      id: 3,
      name: "ArT-Space",
      name_en: "ArT-Space",
      link: `/?lang=${lang}#gallery`,
    },
    {
      id: 4,
      name: "RenT-Space",
      name_en: "RenT-Space",
      link: `/?lang=${lang}#rent-space`,
    },
    {
      id: 5,
      name: "Tenant Kami",
      name_en: "Our Tenants",
      link: `/?lang=${lang}#our-tenant`,
    },
    // { id: 6, name: "Articles",  name_en: "Home", link: `/?lang=${lang}#articles` },
    {
      id: 7,
      name: "Hubungi Kami",
      name_en: "Contact Us",
      link: `/?lang=${lang}#contact`,
    },
  ];

  return (
    <div
      className={`
      !bg-white text-textDark !top-0 shadow-md navbar-fixed sticky !left-0 w-full z-50 bg-transparent`}
    >
      <div className="relative mx-auto max-w-7xl px-6 lg:px-12 py-4 flex items-center">
        <div className="left-navbar mr-auto">
          {color ? (
            <Link href={`/?lang=${lang}#hero`}>
              <Image
                src="/logo_ori.svg"
                alt="Logo TSpace"
                width={60}
                height={75}
                className="w-[41px] h-[52px] sm:w-[60px] sm:h-[75px]"
              />
            </Link>
          ) : (
            <Link href="#hero">
              <Image
                src="/logo_ori_white.svg"
                alt="Logo TSpace"
                width={60}
                height={75}
                className="w-[41px] h-[52px] sm:w-[60px] sm:h-[75px]"
              />
            </Link>
          )}
        </div>
        <div className="center-navbar absolute left-1/2 transform -translate-x-1/2 lg:flex space-x-5 hidden items-center">
          {navbarMenu.map((item, index) => (
            <React.Fragment key={index}>
              {item.name === "Beyoutiful" ? (
                <Link
                  key={item.id}
                  href={`/beyoutiful?lang=${lang}`}
                  className={`text-center ${
                    color
                      ? "text-textDark hover:text-black"
                      : "text-[#f1efefce] hover:text-white "
                  } text-sm`}
                >
                  Beyoutiful{" "}
                </Link>
              ) : (
                <Link
                  href={`${item.link}`}
                  key={item.id}
                  className={`text-center ${
                    color
                      ? "text-textDark hover:text-black"
                      : "text-[#f1efefce] hover:text-white "
                  } text-sm ${
                    item.name === "Articles" ? "font-semibold text-black" : ""
                  }`}
                >
                  {lang === "en" ? item.name_en : item.name}
                </Link>
              )}
            </React.Fragment>
          ))}

          <div className="relative">
            <button
              aria-label="button"
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
                  aria-label="button"
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
                  aria-label="button"
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
        </div>
        <div className="right-navbar lg:flex hidden ml-auto">
          <Link href={`/beyoutiful?lang=${lang}`}>
            <Image
              src="/beyoutiful_orange.png"
              alt="Logo Beyoutiful"
              width={183}
              height={48}
              className="w-[162.5px] h-[27px] 2xl:w-[183px] 2xl:h-[30px]"
            />
          </Link>
        </div>
        {/* Menu Mobile */}
        <button
          aria-label="button"
          className="lg:hidden text-2xl"
          onClick={() => setMenuButton((prev) => !prev)}
        >
          <FaBars className={color ? "text-textDark" : "text-white"} />
        </button>
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
              {item.name === "Beyoutiful" ? (
                <Link
                  key={item.id}
                  href={`/beyoutiful?lang=${lang}`}
                  className="text-lg text-dark hover:text-orange-500 font-medium flex items-center transition duration-200"
                >
                  Beyoutiful{" "}
                </Link>
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
          <Link href={`/beyoutiful?lang=${lang}`}>
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

export default NavbarArticles;
