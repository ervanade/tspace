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

const Hero = () => {
  const data = [
    {
      link: "/",
      image_default: "/hero-2.png",
      title: "",
    },
    {
      link: "/",
      image_default: "/hero-1.png",
      title: "",
    },
  ];
  return (
    <div className="mx-auto w-full text-black">
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
                    alt={item.title || "Toshiba TV Indonesia"}
                    layout="fill" // Membuat gambar memenuhi kontainer
                    objectFit="cover" // Menjaga rasio aspek dan memotong bagian luar
                    objectPosition="center" // Memusatkan gambar
                    priority={index === 0} // Memuat gambar pertama lebih awal
                  />
                  {/* <Image
                    src={item.image_default}
                    width={0}
                    height={0}
                    alt={item.title || "Toshiba TV Indonesia"}
                    sizes="(min-width: 640px) 100vw"
                    media="(min-width: 640px)"
                    style={{ width: "100%", height: "auto" }}
                    priority={index === 0} // Muat gambar pertama lebih awal
                  /> */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-black/50" />

                  <div className="absolute flex flex-col gap-2 items-center justify-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white space-y-4 lg:space-y-8">
                    <p className="font-bebas text-4xl md:text-5xl lg:text-[60px] text-center leading-tight">
                      A Place Where Community Thrives
                    </p>
                    <p className="text-base sm:text-lg lg:text-xl text-white/85 text-center leading-relaxed">
                      Discover a space to create, connect, and collaborate in
                      the heart of Bintaro
                    </p>
                    <button className="bg-white text-textDark px-6 py-3 lg:px-8 lg:py-4 rounded-full font-semibold">
                      Hubungi Kami
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
