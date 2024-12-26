"use client";
import React from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import "./Hero.css";

const HeroBeyoutiful = () => {
  const data = [
    {
      link: "/beyoutiful",
      image_default: "/assets/beyoutiful/hero-3.png",
      title: "",
    },
  ];
  return (
    <div className="mx-auto w-full text-black font-montserrat" id="hero">
      {/* Hero Desktop */}
      <div className="">
        <Swiper
          className="h-auto overflow-hidden"
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          speed={1000}
          loop={true}
          navigation={true}
          pagination={{ clickable: true }}
        >
          {data?.map((item, index) => (
            <SwiperSlide key={index}>
              {/* <Link href={item?.link}> */}
              <div className="w-full relative h-[calc(100vh-102px)]">
                <Image
                  src={item.image_default}
                  alt={item.title || "T-Space Hero"}
                  layout="fill" // Membuat gambar memenuhi kontainer
                  objectFit="cover" // Menjaga rasio aspek dan memotong bagian luar
                  objectPosition="center" // Memusatkan gambar
                  priority={index === 0} // Memuat gambar pertama lebih awal
                />
                {/* <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-black/20" /> */}

                <div className="absolute inset-0 flex items-center">
                  <div className="mx-auto w-full max-w-7xl px-6 lg:px-24 text-secondary z-10">
                    <div className="w-full lg:w-2/3 space-y-4 lg:space-y-8">
                      <p className="text-4xl lg:text-[48px] text-left leading-tight font-medium">
                        Transform Your Beauty, Embrace Your Best Self
                      </p>
                      <p className="text-base sm:text-lg lg:text-xl text-textDark/85 text-left leading-relaxed">
                        With the finest in cosmetic surgery br and skincare by
                        top specialists.
                      </p>
                      <Link
                        href="/beyoutiful"
                        className="inline-block bg-secondary text-white px-6 py-3 lg:px-8 lg:py-4 rounded-full font-semibold"
                      >
                        Konsultasi Sekarang
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* </Link> */}
            </SwiperSlide>
          ))}
          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
    </div>
  );
};

export default HeroBeyoutiful;
