"use client";

import React, { useEffect, useState } from "react";

const HTMLDecoderEncoder = require("html-encoder-decoder");

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { FaArrowRight } from "react-icons/fa";
const Gallery = ({ title, subTitle }) => {
  const [isLoading, setIsLoading] = useState(true);
  const dataSpace = [
    {
      id: "41",
      model: "100Z670M",
      name: "T-HALL",
      series: "Rp. 140.000",
      image_default: "/assets/hall.png",
      image_big: "/assets/hall.png",
      image_slider: "/assets/hall.png",
      image_mid: "/assets/hall.png",
      image_small: "/assets/hall.png",
    },
    {
      id: "40",
      model: "85M450N",
      name: "T-GARDEN",
      series: "Pr. 120.000",
      image_default: "/assets/garden.png",
      image_big: "/assets/garden.png",
      image_slider: "/assets/garden.png",
      image_mid: "/assets/garden.png",
      image_small: "/assets/garden.png",
    },
    {
      id: "40",
      model: "85M450N",
      name: "T-STUDIO",
      series: "Rp. 60.000",
      image_default: "/assets/studio.png",
      image_big: "/assets/studio.png",
      image_slider: "/assets/studio.png",
      image_mid: "/assets/studio.png",
      image_small: "/assets/studio.png",
    },
    {
      id: "40",
      model: "85M450N",
      name: "T-ROOFTOP",
      series: "Rp. 120.000",
      image_default: "/assets/rooftop.png",
      image_big: "/assets/rooftop.png",
      image_slider: "/assets/rooftop.png",
      image_mid: "/assets/rooftop.png",
      image_small: "/assets/rooftop.png",
    },
    {
      id: "40",
      model: "85M450N",
      name: "ALL T-SPACE AREA",
      series: "Rp. 120.000",
      image_default: "/assets/tspace-area.png",
      image_big: "/assets/tspace-area.png",
      image_slider: "/assets/tspace-area.png",
      image_mid: "/assets/tspace-area.png",
      image_small: "/assets/tspace-area.png",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 10); // 2 detik simulasi delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="w-full bg-bg-dark bg-cover bg-center py-20 px-6 text-white scroll-mt-12"
      id="gallery"
    >
      <div className="mb-6">
        <h1 className="header-title">T-GALLERY</h1>
        <p className="!text-white/80 sub-title">
          Discover a space to create, connect, and collaborate in the heart of
          Bintaro.
        </p>
      </div>

      <div className="max-w-[1280px] mx-auto w-full py-8 overflow-hidden xl:py-16 px-6">
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
              className="h-auto md:!h-400px overflow-hidden relative"
              slidesPerView={2.2}
              breakpoints={{
                768: {
                  // width: 768,
                  slidesPerView: 3.2,
                },
              }}
              spaceBetween={10}
              modules={[Navigation]}
              navigation={true}
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
                          alt={item?.name || "Toshiba Tv Indonesia"}
                          sizes="100vw"
                          style={{ width: "100%", height: "auto" }} // optional
                        />
                        <div className="mt-2 flex flex-col items-center gap-4">
                          <h3 className="recomended-title font-bebas text-[20px] lg:text-[28px] leading-tight font-normal text-white text-center line-clamp-3 mt-4">
                            {HTMLDecoderEncoder.decode(item?.name)}
                          </h3>
                          {/* <button
                            className="align-middle select-none font-sans font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2.5 uppercase px-6 rounded-full bg-[#fff] text-[#303638] shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                            type="button"
                          >
                            View Detail
                          </button> */}
                        </div>
                      </div>
                    </SwiperSlide>
                  ))
                : ""}
            </Swiper>
          )}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
