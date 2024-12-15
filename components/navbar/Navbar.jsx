"use client";
import React from "react";
import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaBars } from "react-icons/fa6";

import { AiOutlineCloseCircle } from "react-icons/ai";
import Image from "next/image";
const Navbar = () => {
  const [color, setColor] = useState(false);
  const [menuButton, setMenuButton] = useState(false);

  const buttonOnChangeBars = () => {
    setMenuButton((prev) => !prev);
  };
  const buttonOnChangeClose = () => {
    setMenuButton(false);
  };
  useEffect(() => {
    const changeColor = () => {
      if (typeof window !== "undefined") {
        // Client-side-only code
        if (window.scrollY > 5) {
          setColor(true);
        } else {
          setColor(false);
        }
      }
    };
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", changeColor);
    }
  }, []);

  const changeColor = () => {
    if (typeof window !== "undefined") {
      // Client-side-only code
      if (window.scrollY > 5) {
        setColor(true);
      } else {
        setColor(false);
      }
    }
  };
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeColor);
  }

  const navbarMenu = [
    { id: 1, name: "Home", link: "#hero" },
    { id: 2, name: "Our Space", link: "#our-space" },
    { id: 3, name: "Articles", link: "#articles" },
    { id: 4, name: "Gallery", link: "#gallery" },
    { id: 5, name: "Contact Us", link: "#contact" },
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
            // <a href="#hero">
            <p className="font-bebas text-[40px] text-textDark">T-SPACE</p>
          ) : (
            // </a>
            <a href="#hero">
              <p className="font-bebas text-[40px] text-white">T-SPACE</p>
            </a>
          )}
        </div>
        <div className="center-navbar lg:flex space-x-6 hidden justify-center items-center">
          {navbarMenu.map((item) => {
            return (
              <a
                key={item.id}
                href={item.link}
                className={`${
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
        </div>
        <div className="right-navbar lg:flex hidden ml-auto">
          <Image
            src="/beyoutiful_white.svg"
            alt="Logo Beyoutiful"
            width={183}
            height={48}
          />
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
                  ? "text-textDark hover:text-white"
                  : "text-white/85 hover:text-white"
              } `}
            />
          </button>
        </div>
        <div
          className={`right-navbar z-50 space-y-4 flex flex-col items-center fixed top-0 ${
            menuButton ? "right-0" : "-right-[999px]"
          } lg:hidden w-full max-w-[300px] py-10 xs:py-16 px-8 xs:px-14 bg-gray-600 text-white h-full duration-300 transition-all ease-in-out`}
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
          <Image
            src="/beyoutiful_logo.png"
            alt="Logo Beyoutiful"
            width={102}
            height={48}
          />
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
