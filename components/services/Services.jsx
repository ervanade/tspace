"use client";

import React, { useEffect, useState } from "react";

const HTMLDecoderEncoder = require("html-encoder-decoder");

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { FaArrowRight } from "react-icons/fa";
import { useSelector } from "react-redux";
const Services = ({ title, subTitle, bg }) => {
  const [isLoading, setIsLoading] = useState(true);
  const lang = useSelector((state) => state.lang.lang); // Get language from Redux store

  const dataSpace = [
    {
      id: "41",
      name: "Bedah Plastik",
      price: "Rp. 140.000",
      opsi_acara: "Live Music, Art Exhibition Talkshow, Wedding Ceremony, etc…",
      fasilitas: "Toilet, Sound System, Tables & Chairs, AC",
      spesifikasi: "Indoor, 200m2 Non smoking No pet allowed",
      image_mid: "/assets/beyoutiful/services-1.png",
      image_map: "/assets/map-hall.png",
    },
    {
      id: "40",
      name: "Perawatan Estetika",
      price: "Rp. 120.000",
      opsi_acara: "Live Music, Garden Party, Celebration, Gathering etc…",
      fasilitas: "Toilet, Sound System, Tables & Chairs",
      spesifikasi: "Outdoor, 1.000m2 Smoking area Pet Friendly",
      image_mid: "/assets/beyoutiful/services-2.png",
      image_map: "/assets/map-hall.png",
    },
    {
      id: "42",
      name: "Bedah Vaskular",
      price: "Rp. 60.000",
      opsi_acara:
        "Tenant Yearly Rent, Yoga, Pilates, Intimate Event, Talkshow, Photo Studio, etc…",
      fasilitas: "Toilet, Sound System, Tables & Chairs, AC",
      spesifikasi: "Indoor, 200m2 + 2 RoomsNon smoking ",
      image_mid: "/assets/beyoutiful/services-3.png",
      image_map: "/assets/map-hall.png",
    },
    {
      id: "43",
      name: "Ortopedi",
      price: "Rp. 120.000",
      opsi_acara:
        "Tenant Yearly Rent, Live Music, Gathering, Intimate Event, etc…",
      fasilitas: "Toilet, Sound System, Tables & Chairs",
      spesifikasi: "Outdoor, 725m2 Smoking area No pet allowed",
      image_mid: "/assets/beyoutiful/services-4.png",
      image_map: "/assets/map-hall.png",
    },
    {
      id: "44",
      name: "Klinik Gigi",
      price: "Rp. 120.000",
      opsi_acara:
        "Music Festival, Wedding Ceremony & Receptions, Exhibition Event, etc…",
      fasilitas: "All T-SPACE AREA",
      spesifikasi: "Indoor & Outdoor, 3.500m2 ",
      image_mid: "/assets/beyoutiful/services-5.png",
      image_map: "/assets/map-hall.png",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 10); // 2 detik simulasi delay
    return () => clearTimeout(timer);
  }, []);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div
      className={`w-full ${
        bg === "light" ? "bg-white text-textDark" : "bg-secondary text-white"
      } bg-cover bg-center py-12 md:py-16 xl:py-20 px-6 scroll-mt-12`}
      id="rent-space"
    >
      <div className="max-w-[1280px] mx-auto w-full overflow-hidden ">
        <div className="mb-12">
          <h1
            className={`title-beyoutiful ${
              bg === "light" ? "!text-secondary" : "!text-white"
            }  !font-semibold !text-start`}
          >
            {lang === "en" ? "Our Services" : "Servis Kami"}
          </h1>
          <p
            className={`${
              bg === "light" ? "!text-textDark/80" : "!text-white/80"
            } sub-title  !text-start`}
          >
            {lang === "en"
              ? "Experience transformative results with our specialized services"
              : "Dapatkan hasil transformatif terbaik dengan layanan khusus kami"}
          </p>
        </div>
        <div className="">
          {isLoading ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {[...Array(3)].map((_, index) => (
                <div
                  key={index}
                  className="animate-pulse flex flex-col gap-2 bg-gray-200 p-4 rounded-md"
                >
                  <div className="h-[250px] bg-gray-300 rounded"></div>
                  <div className="h-6 bg-gray-300 rounded mt-2"></div>
                </div>
              ))}
            </div>
          ) : (
            <Swiper
              className="h-auto md:!h-400px overflow-hidden relative cursor-grab"
              slidesPerView={2.2}
              breakpoints={{
                768: {
                  slidesPerView: 3.2,
                },
                500: {
                  slidesPerView: 2.2,
                },
              }}
              spaceBetween={8}
              modules={[Navigation, Autoplay]} // Add Autoplay module
              autoplay={{
                delay: 3000, // 3 seconds
                disableOnInteraction: false, // Keeps autoplay running after user interaction
              }}
            >
              {dataSpace
                ? dataSpace.map((item, index) => (
                    <SwiperSlide className="" key={index}>
                      <div className="flex flex-col justify-between gap-4 bg-transparent rounded-xl p-2 lg:p-4 h-full">
                        {/* Image Section */}
                        <div className="aspect-[16/12] w-full overflow-hidden rounded-lg relative">
                          <Image
                            src={item.image_mid}
                            alt={item?.name || "T-Space Gallery"}
                            sizes="100vw"
                            fill
                            className="object-cover"
                            priority={index === 0} // Prioritize first image
                          />
                        </div>

                        {/* Text Section */}
                        <div className="flex flex-col items-center">
                          <h3
                            className={`font-montserrat text-[16px] lg:text-[24px] font-medium ${
                              bg === "light"
                                ? "!text-secondary/80"
                                : "!text-white/80"
                            } text-center line-clamp-3 min-h-9 lg:min-h-[56px]`}
                          >
                            {HTMLDecoderEncoder.decode(item?.name)}
                          </h3>
                          <button
                            className="mt-4 py-2.5 px-6 text-xs font-bold uppercase rounded-full bg-white text-secondary shadow-md hover:shadow-lg hover:opacity-90 transition-all"
                            type="button"
                          >
                            <a
                              href="https://wa.me/+621181110556"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Konsultasi Sekarang
                            </a>
                          </button>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))
                : ""}
            </Swiper>
          )}
          {isPopupOpen && selectedItem && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 overflow-y-auto"
              onClick={() => setIsPopupOpen(false)}
            >
              <div
                className="relative max-w-4xl w-full bg-white p-6 rounded-md m-4 overflow-y-auto max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-4 right-4 text-textDark text-2xl z-[51] bg-black/20 rounded-full p-2"
                  onClick={() => setIsPopupOpen(false)}
                >
                  ✖
                </button>
                <div className="w-full justify-start items-center gap-4 grid md:grid-cols-2 grid-cols-1">
                  <Image
                    src={selectedItem.image_mid}
                    width={0}
                    height={0}
                    alt={selectedItem?.name || "Image"}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                  />
                  <Image
                    src={selectedItem.image_map}
                    width={0}
                    height={0}
                    alt={selectedItem?.name || "Image"}
                    sizes="100vw"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
                <h2 className="text-2xl font-bold mt-4 text-textDark">
                  {selectedItem?.name}
                </h2>

                <div>
                  <h3 className="text-lg font-bold mt-3 text-textDark">
                    Opsi Acara
                  </h3>
                  <p className="text-textDark mt-2">
                    {selectedItem?.opsi_acara}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold mt-3 text-textDark">
                    Fasilitas
                  </h3>
                  <p className="text-textDark mt-2">
                    {selectedItem?.fasilitas}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold mt-3 text-textDark">
                    Spesifikasi Area
                  </h3>
                  <p className="text-textDark mt-2">
                    {selectedItem?.spesifikasi}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Services;
