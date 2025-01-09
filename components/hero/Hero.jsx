"use client";
import React, { useEffect, useState } from "react";
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
import { useSelector } from "react-redux";

const Hero = () => {
  const lang = useSelector((state) => state.lang.lang); // Get language from Redux store

  const data = [
    {
      link: "/",
      image_default: "/hero-2.png",
      title: "RUANG INSPIRATIF UNTUK BERKARYA DAN BERKOLABORASI DI BINTARO",
      title_en: "INSPIRATIONAL SPACE TO CREATE AND COLLABORATE ",
      desc: "Temukan ruang untuk berkreasi, dan berkolaborasi di jantung Bintaro.",
      desc_en:
        "Experience a space to create, connect, and collaborate in the heart of Bintaro.",
    },
    {
      link: "/",
      image_default: "/hero-1.png",
      title: "RUANG INSPIRATIF UNTUK BERKARYA DAN BERKOLABORASI DI BINTARO",
      title_en: "INSPIRATIONAL SPACE TO CREATE AND COLLABORATE ",
      desc: "Temukan ruang untuk berkreasi, dan berkolaborasi di jantung Bintaro.",
      desc_en:
        "Experience a space to create, connect, and collaborate in the heart of Bintaro.",
    },
  ];
  return (
    <div className="mx-auto w-full text-black" id="hero">
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
              <Link href={item?.link}>
                <div className="w-full relative h-screen">
                  <Image
                    src={item.image_default}
                    alt={item.title || "T-Space Hero"}
                    layout="fill" // Membuat gambar memenuhi kontainer
                    objectFit="cover" // Menjaga rasio aspek dan memotong bagian luar
                    objectPosition="center" // Memusatkan gambar
                    priority={index === 0} // Memuat gambar pertama lebih awal
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-black/50" />

                  <div className="absolute flex flex-col gap-2 items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white space-y-4 lg:space-y-8">
                    <p className="font-bebas text-4xl md:text-5xl lg:text-[54px] 2xl:text-[60px] text-center leading-tight">
                      {lang === "en" ? item.title_en : item.title}
                    </p>
                    <p className="text-base sm:text-lg lg:text-xl text-white/85 text-center leading-relaxed">
                      {lang === "en" ? item.desc_en : item.desc}
                    </p>
                    <button className="bg-white text-textDark px-6 py-3 lg:px-8 lg:py-4 rounded-full font-semibold">
                      {lang === "en" ? "Contact Us" : "Hubungi Kami"}
                    </button>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
