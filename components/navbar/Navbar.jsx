"use client";
import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa6";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { setLang } from "@/store/langSlice";

const Navbar = () => {
  const [color, setColor] = useState(false);
  const [menuButton, setMenuButton] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const buttonOnChangeClose = () => setMenuButton(false);

  const dispatch = useDispatch();
  const lang = useSelector((state) => state.lang.lang); // Get language from Redux store

  const handleChangeLang = (newLang) => {
    dispatch(setLang(newLang)); // Update language in Redux store
    const params = new URLSearchParams(searchParams);
    params.set("lang", newLang); // Update query parameter
    const href = `${pathname}?${params.toString()}`;
    router.push(href);
  };

  // Perubahan warna navbar saat scroll
  useEffect(() => {
    const changeColor = () => setColor(window.scrollY > 5);
    window.addEventListener("scroll", changeColor);
    return () => window.removeEventListener("scroll", changeColor);
  }, []);

  const navbarMenu = [
    { id: 1, name: "Home", link: "/#hero" },
    { id: 4, name: "Gallery", link: "/#gallery" },
    { id: 2, name: "Rent Space", link: "/#rent-space" },
    { id: 6, name: "Our Tenant", link: "/#our-tenant" },
    { id: 3, name: "Articles", link: "/#articles" },
    { id: 5, name: "Contact Us", link: "/#contact" },
  ];

  return (
    <div
      className={`${
        color ? "!bg-white text-textDark !top-0 shadow-md" : ""
      } navbar-fixed fixed top-5 left-0 w-full z-50 bg-transparent`}
    >
      <div className="relative mx-auto max-w-7xl px-6 lg:px-12 py-4 flex items-center">
        <div className="left-navbar mr-auto">
          {color ? (
            <Link href="/#hero">
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
        <div className="center-navbar absolute left-1/2 transform -translate-x-1/2 lg:flex space-x-6 hidden items-center">
          {navbarMenu.map((item) => (
            <button
              key={item.id}
              onClick={(e) => {
                e.preventDefault();
                handleChangeLang(lang); // Update language in query params
                const elementId = item.link.replace("/#", ""); // Extract ID from link
                const element = document.getElementById(elementId);
                if (element) {
                  const headerHeight =
                    document.querySelector("header")?.offsetHeight || 0;
                  const elementPosition =
                    element.getBoundingClientRect().top + window.scrollY; // Use window.scrollY instead of pageYOffset
                  const adjustedPosition = elementPosition - headerHeight - 100; // Adjust offset by reducing 100px
                  window.scrollTo({
                    top: adjustedPosition,
                    behavior: "smooth",
                  });
                  history.replaceState(null, "", `#${elementId}`); // Prevent URL hash reload
                } else {
                  console.warn(`Element with ID ${elementId} not found`);
                }
              }}
              className={`text-center ${
                color
                  ? "text-textDark hover:text-black"
                  : "text-[#f1efefce] hover:text-white "
              } text-base`}
            >
              {item.name}
            </button>
          ))}

          <div className="relative">
            <button
              className="flex items-center bg-white text-white rounded px-2 py-2"
              onClick={() => setIsDropdownOpen((prev) => !prev)}
            >
              <Image
                src={`/assets/icon/flag_${lang === "en" ? "us" : "id"}.svg`}
                width={24}
                height={18}
                alt="Current Language"
              />
            </button>
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
        {/* Menu Mobile */}
        <button
          className="lg:hidden text-2xl"
          onClick={() => setMenuButton((prev) => !prev)}
        >
          <FaBars className={color ? "text-textDark" : "text-white"} />
        </button>
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
            <button
              key={item.id}
              onClick={(e) => {
                e.preventDefault();
                handleChangeLang(lang); // Update language in query params
                const elementId = item.link.replace("/#", ""); // Extract ID from link
                const element = document.getElementById(elementId);
                if (element) {
                  const headerHeight =
                    document.querySelector("header")?.offsetHeight || 0;
                  const elementPosition =
                    element.getBoundingClientRect().top + window.scrollY; // Use window.scrollY instead of pageYOffset
                  const adjustedPosition = elementPosition - headerHeight - 100; // Adjust offset by reducing 100px
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
          ))}
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

export default Navbar;
