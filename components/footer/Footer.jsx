import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaBuilding, FaHome, FaMapMarker, FaPhone, FaPhoneAlt } from "react-icons/fa";
import { FaMessage, FaPhoneFlip } from "react-icons/fa6";

const Footer = () => {
  const data = {
    facebook: "",
    instagram: "",
    twitter: "",
    tiktok: "",
    tokopedia: "",
    shopee: "",
  };
  return (
    <div className="footer">
      <section className="footer bg-[#1B1D1C] text-white/80 ">
        <div className="container mx-auto max-w-[1200px] px-8  py-12 space-x-3 overflow-hidden">
          <div className="flex justify-around gap-7 flex-col lg:flex-row">
            <div className="center flex-[2_2_0%] space-y-4">
              <ul className="space-y-4">
                <a href="#hero" className="">
                  {/* <p className="font-bebas text-[40px] text-white">T-SPACE</p> */}
                  <Image
                    src="/logo_ori_white.svg"
                    alt="Logo TSpace"
                    width={60}
                    height={75}
                    className="w-[41px] h-[52px] sm:w-[60px] sm:h-[75px]"
                  />
                </a>
                <li className="flex items-center gap-2">
                  <FaBuilding size={24} className="!text-2xl" />
                  <span className="text-sm">
                    PT AESTHETICA INDAH GEMILANG , Jl. Jombang Raya No.32, Parigi, Pondok Aren,
                    Kota Tangerang Selatan, Banten 15229
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <FaMapMarker size={24} className="!text-2xl" />
                  <span className="text-sm">
                    T Space Bintaro 9, Jl. Jombang Raya No.32, Parigi, Pondok Aren,
                    Kota Tangerang Selatan, Banten 15229
                  </span>
                </li>
                <div className="flex lg:items-center lg:flex-row flex-col gap-4 mt-2">
                  <div>
                    <h2 className="text-white/80 font-bold text-sm my-2">
                      T-Space
                    </h2>
                    <li className="flex items-center gap-2">
                      <FaPhoneAlt />
                      <span className="text-sm">+62 811-8111-0556</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <FaMessage />
                      <span className="text-sm">
                        marketing@tspacebintaro.com
                      </span>
                    </li>
                  </div>
                  <div>
                    <h2 className="text-white/80 font-bold text-sm my-2">
                      Beyoutiful
                    </h2>
                    <li className="flex items-center gap-2">
                      <FaPhoneAlt />
                      <span className="text-sm">+62 811-8111-0559</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <FaMessage />
                      <span className="text-sm">
                        marketing@tspacebintaro.com
                      </span>
                    </li>
                  </div>
                </div>
              </ul>
            </div>
            <div className="center flex-1 space-y-4">
              <ul className="space-y-4 lg:pt-8">
                <li>
                  <a
                    href="#hero"
                    className="text-sm font-semibold hover:text-white"
                  >
                    HOME
                  </a>
                </li>
                <li>
                  <a
                    href="#rent-space"
                    className="text-sm font-semibold hover:text-white"
                  >
                    RENT SPACE
                  </a>
                </li>
                <li>
                  <a
                    href="/beyoutiful"
                    className="text-sm font-semibold hover:text-white"
                  >
                    BEYOUTIFUL
                  </a>
                </li>
                <li>
                  <a
                    href="#event"
                    className="text-sm font-semibold hover:text-white"
                  >
                    EVENT
                  </a>
                </li>
              </ul>
            </div>
            <div className="center flex-1 space-y-4">
              <ul className="space-y-4 lg:pt-8">
                <li>
                  <a
                    href="#gallery"
                    className="text-sm font-semibold hover:text-white"
                  >
                    GALLERY
                  </a>
                </li>
                <li>
                  <a
                    href="/articles"
                    className="text-sm font-semibold hover:text-white"
                  >
                    ARTICLES
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-sm font-semibold hover:text-white"
                  >
                    CONTACT
                  </a>
                </li>
              </ul>
            </div>
            <div className="right flex-1 space-y-4 flex flex-col lg:pt-8">
              <h2 className="text-white/80 font-bold text-sm">
                SOCIAL MEDIA T-SPACE
              </h2>
              <div className="flex items-center gap-4 pb-5 w-max">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={data.facebook || "https://facebook.com"}
                >
                  <Image
                    src="/assets/icon/facebook-icon.png"
                    width={24}
                    height={24}
                    alt="Social Media Icons"
                  />{" "}
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={data.instagram || "https://instagram.com"}
                >
                  <Image
                    src="/assets/icon/ig-icon.png"
                    width={24}
                    height={24}
                    alt="Social Media Icons"
                  />{" "}
                </a>
                {/* <a target="_blank" rel="noopener noreferrer" href={data.threads || "https://threads.com"} ><Image src="/assets/icon/threads-icon.png" width={24} height={24} alt='Social Media Icons' /> </a>
                        <a target="_blank" rel="noopener noreferrer" href={data.twitter || "https://twitter.com"} ><Image src="/assets/icon/x-icon.png" width={24} height={24} alt='Social Media Icons' /> </a> */}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={data.tiktok || "https://tiktok.com"}
                >
                  <Image
                    src="/assets/icon/tiktok-icon.png"
                    width={24}
                    height={24}
                    alt="Social Media Icons"
                  />{" "}
                </a>
              </div>

              <h2 className="text-white/80 font-bold text-sm mt-2">
                SOCIAL MEDIA BEYOUTIFUL
              </h2>
              <div className="flex items-center gap-4 pb-5 w-max">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={data.facebook || "https://facebook.com"}
                >
                  <Image
                    src="/assets/icon/facebook-icon.png"
                    width={24}
                    height={24}
                    alt="Social Media Icons"
                  />{" "}
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={data.instagram || "https://instagram.com"}
                >
                  <Image
                    src="/assets/icon/ig-icon.png"
                    width={24}
                    height={24}
                    alt="Social Media Icons"
                  />{" "}
                </a>
                {/* <a target="_blank" rel="noopener noreferrer" href={data.threads || "https://threads.com"} ><Image src="/assets/icon/threads-icon.png" width={24} height={24} alt='Social Media Icons' /> </a>
                        <a target="_blank" rel="noopener noreferrer" href={data.twitter || "https://twitter.com"} ><Image src="/assets/icon/x-icon.png" width={24} height={24} alt='Social Media Icons' /> </a> */}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={data.tiktok || "https://tiktok.com"}
                >
                  <Image
                    src="/assets/icon/tiktok-icon.png"
                    width={24}
                    height={24}
                    alt="Social Media Icons"
                  />{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
