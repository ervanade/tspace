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
const Space = ({ title, subTitle }) => {
  const [isLoading, setIsLoading] = useState(true);
  const dataSpace = [
    {
      id: "41",
      model: "100Z670M",
      name: "Plastic Surgery & Aesthetic Clinic",
      series: "Rp. 140.000",
      image_default: "/assets/space-1.png",
      image_big: "/assets/space-1.png",
      image_slider: "/assets/space-1.png",
      image_mid: "/assets/space-1.png",
      image_small: "/assets/space-1.png",
    },
    {
      id: "40",
      model: "85M450N",
      name: "CULINARY",
      series: "Pr. 120.000",
      image_default: "/assets/space-2.png",
      image_big: "/assets/space-2.png",
      image_slider: "/assets/space-2.png",
      image_mid: "/assets/space-2.png",
      image_small: "/assets/space-2.png",
    },
    {
      id: "40",
      model: "85M450N",
      name: "ART GALERY",
      series: "Rp. 60.000",
      image_default: "/assets/space-3.png",
      image_big: "/assets/space-3.png",
      image_slider: "/assets/space-3.png",
      image_mid: "/assets/space-3.png",
      image_small: "/assets/space-3.png",
    },
    {
      id: "40",
      model: "85M450N",
      name: "EVENT SPACE",
      series: "Rp. 120.000",
      image_default: "/assets/space-4.png",
      image_big: "/assets/space-4.png",
      image_slider: "/assets/space-4.png",
      image_mid: "/assets/space-4.png",
      image_small: "/assets/space-4.png",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 10); // 2 detik simulasi delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full bg-bg-dark bg-cover bg-center py-20 px-6 text-white">
      <h1 className="text-white text-3xl xl:text-5xl text-center font-bebas mb-6 leading-tight">
        Range Space
      </h1>
      <p className="text-white/80 text-center text-lg xl:text-2xl">
        Discover a space to create, connect, and collaborate in the heart of
        Bintaro.
      </p>

      <div className="max-w-[1280px] mx-auto w-full py-8 overflow-hidden">
        <div className="">
        {isLoading ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="animate-pulse flex flex-col gap-2 bg-gray-200 p-4 rounded-md"
              >
                <div className="h-[250px] bg-gray-300 rounded"></div>
                <div className="h-6 bg-gray-300 rounded mt-2"></div>
              </div>
            ))}
          </div>
        ) :
        (
          <Swiper
            // install Swiper modules
            className="h-auto md:!h-400px overflow-hidden relative"
            slidesPerView={2.2}
            breakpoints={{
              768: {
                // width: 768,
                slidesPerView: 4,
              },
            }}
            spaceBetween={10}
            modules={[Navigation]}
            navigation={true}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
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
                      <div className="mt-2">
                        <h3 className="recomended-title font-bebas text-[20px] lg:text-[28px] leading-tight font-normal text-white text-center line-clamp-3 mt-4">
                          {HTMLDecoderEncoder.decode(item?.name)}
                        </h3>
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

export default Space;
