"use client";

import React, { useEffect, useState } from "react";

const HTMLDecoderEncoder = require("html-encoder-decoder");
import parse from "html-react-parser";

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
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useSelector } from "react-redux";
import { dataServices } from "@/public/data";
const Services = ({ title, subTitle, bg, data }) => {
  const [isLoading, setIsLoading] = useState(true);
  const lang = useSelector((state) => state.lang.lang); // Get language from Redux store
  const dataService = data?.data || null;
  const metaData = data?.metadata || null;

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
      id="services"
    >
      <div className="max-w-[1280px] mx-auto w-full overflow-hidden ">
        <div className="mb-12">
          {metaData?.title_id && metaData?.title_en ? (
            <h1
              className={`title-beyoutiful ${
                bg === "light" ? "!text-secondary" : "!text-white"
              }  !font-semibold !text-start`}
            >
              {lang === "en" ? metaData?.title_en : metaData?.title_id}
            </h1>
          ) : (
            <h1
              className={`title-beyoutiful ${
                bg === "light" ? "!text-secondary" : "!text-white"
              }  !font-semibold !text-start`}
            >
              {lang === "en" ? "Our Services" : "Servis Kami"}
            </h1>
          )}

          {metaData?.subtitle_id && metaData?.subtitle_en ? (
            lang === "en" ? (
              parse(HTMLDecoderEncoder.decode(metaData?.subtitle_en))
            ) : (
              parse(HTMLDecoderEncoder.decode(metaData?.subtitle_id))
            )
          ) : (
            <p
              className={`${
                bg === "light" ? "!text-textDark/80" : "!text-white/80"
              } sub-title  !text-start`}
            >
              {lang === "en"
                ? "Experience transformative results with our specialized services."
                : "Dapatkan hasil transformatif terbaik dengan layanan khusus kami."}
            </p>
          )}
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
              navigation={{
                nextEl: ".gallery-button-next",
                prevEl: ".gallery-button-prev",
              }}
              autoplay={{
                delay: 3000, // 3 seconds
                disableOnInteraction: false, // Keeps autoplay running after user interaction
              }}
            >
              {dataService
                ? dataService.map((item, index) => (
                    <SwiperSlide className="" key={index}>
                      <div className="flex flex-col justify-between gap-4 bg-transparent rounded-xl  h-full">
                        {/* Image Section */}
                        <div className="aspect-[16/12] w-full overflow-hidden rounded-lg relative">
                          <Image
                            src={item.image_default}
                            alt={item?.alt_img || "Beyoutiful Service"}
                            sizes="100vw"
                            fill
                            className="object-cover"
                            priority={index === 0 || index === 1 || index === 2} // Prioritize first image
                          />
                        </div>

                        {/* Text Section */}
                        <div className="flex flex-col  items-center">
                          {item.tipe_name && item.tipe_name_en ? (
                            <h3
                              className={`font-montserrat text-[16px] lg:text-[24px] font-medium ${
                                bg === "light" ? "!text-dark" : "!text-white/80"
                              } text-center line-clamp-3 min-h-9 lg:min-h-[56px]`}
                            >
                              {lang === "en"
                                ? HTMLDecoderEncoder.decode(item?.tipe_name_en)
                                : HTMLDecoderEncoder.decode(item?.tipe_name)}
                            </h3>
                          ) : (
                            ""
                          )}

                          <Link
                            href={`${item.id}?lang=${lang}`}
                            className="mt-2 py-2.5 px-6 text-xs sm:text-base font-bold text-center  rounded-full bg-secondary text-white border shadow-md hover:shadow-lg hover:opacity-90 transition-all"
                          >
                            {lang === "en" ? "More" : "Rincian Layanan"}
                          </Link>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))
                : dataServices.map((item, index) => (
                    <SwiperSlide className="" key={index}>
                      <div className="flex flex-col justify-between gap-4 bg-transparent rounded-xl  h-full">
                        {/* Image Section */}
                        <div className="aspect-[16/12] w-full overflow-hidden rounded-lg relative">
                          <Image
                            src={item.image}
                            alt={item?.name || "Beyoutiful Service"}
                            sizes="100vw"
                            fill
                            className="object-cover"
                            priority={index === 0 || index === 1 || index === 2} // Prioritize first image
                          />
                        </div>

                        {/* Text Section */}
                        <div className="flex flex-col  items-center">
                          <h3
                            className={`font-montserrat text-[16px] lg:text-[24px] font-medium ${
                              bg === "light" ? "!text-dark" : "!text-white/80"
                            } text-center line-clamp-3 min-h-9 lg:min-h-[56px]`}
                          >
                            {lang === "en"
                              ? HTMLDecoderEncoder.decode(item?.name_en)
                              : HTMLDecoderEncoder.decode(item?.name)}
                          </h3>

                          <Link
                            href={`${item.link}?lang=${lang}`}
                            className="mt-2 py-2.5 px-6 text-xs sm:text-base font-bold text-center  rounded-full bg-secondary text-white border shadow-md hover:shadow-lg hover:opacity-90 transition-all"
                          >
                            {lang === "en" ? "More" : "Rincian Layanan"}
                          </Link>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
              <div className="gallery-button-prev absolute left-2 top-[45%] transform -translate-y-1/2 z-10 p-3 bg-black/50 text-white flex items-center justify-center rounded-full cursor-pointer hover:bg-black/80 transition">
                <FaChevronLeft className="text-xl" />
              </div>
              <div className="gallery-button-next absolute right-2 top-[45%] transform -translate-y-1/2 z-10 p-3 bg-black/50 text-white flex items-center justify-center rounded-full cursor-pointer hover:bg-black/80 transition">
                <FaChevronRight className="text-xl" />
              </div>
            </Swiper>
          )}
        </div>
      </div>
    </div>
  );
};

export default Services;
