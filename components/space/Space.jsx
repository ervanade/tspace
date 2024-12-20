"use client";

import React, { useEffect, useState } from "react";

const HTMLDecoderEncoder = require("html-encoder-decoder");

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { FaArrowRight } from "react-icons/fa";
const Space = ({ title, subTitle }) => {
  const [isLoading, setIsLoading] = useState(true);
  const dataSpace = [
    {
      id: "41",
      name: "T-HALL",
      price: "Rp. 140.000",
      opsi_acara: "Live Music, Art Exhibition Talkshow, Wedding Ceremony, etc…",
      fasilitas: "Toilet, Sound System, Tables & Chairs, AC",
      spesifikasi: "Indoor, 200m2 Non smoking No pet allowed",
      image_mid: "/assets/hall.png",
      image_map: "/assets/map-hall.png",
    },
    {
      id: "40",
      name: "T-GARDEN",
      price: "Rp. 120.000",
      opsi_acara: "Live Music, Garden Party, Celebration, Gathering etc…",
      fasilitas: "Toilet, Sound System, Tables & Chairs",
      spesifikasi: "Outdoor, 1.000m2 Smoking area Pet Friendly",
      image_mid: "/assets/garden.png",
      image_map: "/assets/map-hall.png",
    },
    {
      id: "42",
      name: "T-STUDIO",
      price: "Rp. 60.000",
      opsi_acara:
        "Tenant Yearly Rent, Yoga, Pilates, Intimate Event, Talkshow, Photo Studio, etc…",
      fasilitas: "Toilet, Sound System, Tables & Chairs, AC",
      spesifikasi: "Indoor, 200m2 + 2 RoomsNon smoking ",
      image_mid: "/assets/studio.png",
      image_map: "/assets/map-hall.png",
    },
    {
      id: "43",
      name: "T-ROOFTOP",
      price: "Rp. 120.000",
      opsi_acara:
        "Tenant Yearly Rent, Live Music, Gathering, Intimate Event, etc…",
      fasilitas: "Toilet, Sound System, Tables & Chairs",
      spesifikasi: "Outdoor, 725m2 Smoking area No pet allowed",
      image_mid: "/assets/rooftop.png",
      image_map: "/assets/map-hall.png",
    },
    {
      id: "44",
      name: "ALL T-SPACE AREA",
      price: "Rp. 120.000",
      opsi_acara:
        "Music Festival, Wedding Ceremony & Receptions, Exhibition Event, etc…",
      fasilitas: "All T-SPACE AREA",
      spesifikasi: "Indoor & Outdoor, 3.500m2 ",
      image_mid: "/assets/tspace-area.png",
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
      className="w-full bg-bg-dark bg-cover bg-center py-12 md:py-16 xl:py-20 px-6 text-white scroll-mt-12"
      id="range-space"
    >
      <div className="mb-12">
        <h1 className="header-title">Range Space</h1>
        <p className="!text-white/80 sub-title">
          Discover a space to create, connect, and collaborate in the heart of
          Bintaro.
        </p>
      </div>

      <div className="max-w-[1280px] mx-auto w-full overflow-hidden ">
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
              // install Swiper modules
              className="h-auto md:!h-400px overflow-hidden relative cursor-grab"
              slidesPerView={2.2}
              breakpoints={{
                768: {
                  // width: 768,
                  slidesPerView: 3.2,
                },
                500: {
                  slidesPerView: 2.2,
                },
              }}
              spaceBetween={10}
              modules={[Navigation]}
              // navigation={true}
              // onSwiper={(swiper) => console.log(swiper)}
              // onSlideChange={() => console.log("slide change")}
            >
              {dataSpace
                ? dataSpace.map((item, index) => (
                    <SwiperSlide className="mr-2" key={index}>
                      <div
                        className="recomended-card flex flex-col justify-center gap-2"
                        key={index}
                      >
                        {/* <div className="recomended-image w-full object-cover lg:h-[250px] overflow-hidden"> */}
                        <Image
                          src={item.image_mid}
                          width={0}
                          height={0}
                          // className='aspect-square'
                          alt={item?.name || "T-Space Gallery"}
                          sizes="100vw"
                          style={{ width: "100%", height: "auto" }} // optional
                        />
                        <div className="mt-2 flex flex-col items-center gap-4">
                          <h3 className="recomended-title font-bebas text-[20px] lg:text-[28px] leading-tight font-normal text-white text-center line-clamp-3 mt-4">
                            {HTMLDecoderEncoder.decode(item?.name)}
                          </h3>
                          <button
                            className="align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2.5 uppercase px-6 rounded-full bg-[#fff] text-[#303638] shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                            type="button"
                            onClick={() => {
                              setSelectedItem(item);
                              setIsPopupOpen(true);
                            }}
                          >
                            View Detail
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
        className="absolute top-4 right-4 text-white text-2xl z-[51] bg-black/20 rounded-full p-2"
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
        <h3 className="text-lg font-bold mt-3 text-textDark">Opsi Acara</h3>
        <p className="text-textDark mt-2">{selectedItem?.opsi_acara}</p>
      </div>

      <div>
        <h3 className="text-lg font-bold mt-3 text-textDark">Fasilitas</h3>
        <p className="text-textDark mt-2">{selectedItem?.fasilitas}</p>
      </div>

      <div>
        <h3 className="text-lg font-bold mt-3 text-textDark">Spesifikasi Area</h3>
        <p className="text-textDark mt-2">{selectedItem?.spesifikasi}</p>
      </div>
    </div>
  </div>
)}

        </div>
      </div>
    </div>
  );
};

export default Space;
