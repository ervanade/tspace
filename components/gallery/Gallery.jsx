"use client";

import React, { useEffect, useState } from "react";
const HTMLDecoderEncoder = require("html-encoder-decoder");
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import { useSelector } from "react-redux";
import { dataGallery } from "@/public/data";
import "swiper/css/navigation";
import { FaArrowLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Gallery = ({ title, subTitle }) => {
  const [isLoading, setIsLoading] = useState(true);
  const lang = useSelector((state) => state.lang.lang); // Get language from Redux store

  const dataSpace = [
    {
      id: "1",
      name: "CASCADE OF SOUL #1",
      price: "IDR 35.000.000",
      description: "Lukisan pemandangan alam dengan warna yang menenangkan.",
      dimensions: "Acrylic, Ink, Tirtha Water on Canvas 110 cm x 150 cm",
      image_mid: "/gallery/art-1.png", // Ganti dengan URL gambar lukisan yang sesuai
    },
    {
      id: "2",
      name: "CASCADE OF SOUL #2 ",
      price: "IDR 35.000.000",
      description: "Lukisan abstrak yang penuh dengan warna dan emosi.",
      dimensions: "Acrylic, Ink, Tirtha Water on Canvas 110 cm x 150 cm",
      image_mid: "/gallery/art-2.png", // Ganti dengan URL gambar lukisan yang sesuai
    },
    {
      id: "3",
      name: "CASCADE OF SOUL #3 ",
      price: "IDR 35.000.000",
      description: "Lukisan abstrak yang penuh dengan warna dan emosi.",
      dimensions: "Acrylic, Ink, Tirtha Water on Canvas 110 cm x 150 cm",
      image_mid: "/gallery/art-3.png", // Ganti dengan URL gambar lukisan yang sesuai
    },
    {
      id: "4",
      name: " FLOW OF REDEMPTION #1",
      price: "IDR 25.000.000",
      description: "Lukisan abstrak yang penuh dengan warna dan emosi.",
      dimensions: "Acrylic, Ink, Tirtha Water on Canvas 110 cm x 150 cm",
      image_mid: "/gallery/art-4.png", // Ganti dengan URL gambar lukisan yang sesuai
    },
    {
      id: "5",
      name: " FLOW OF REDEMPTION #2",
      price: "IDR 25.000.000",
      description: "Lukisan abstrak yang penuh dengan warna dan emosi.",
      dimensions: "Acrylic, Ink, Tirtha Water on Canvas 110 cm x 150 cm",
      image_mid: "/gallery/art-5.png", // Ganti dengan URL gambar lukisan yang sesuai
    },
    // Tambahkan data lainnya sesuai kebutuhan
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 10); // Simulasi delay untuk loading
    return () => clearTimeout(timer);
  }, []);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (index) => {
    setCurrentIndex(index);
    setIsPopupOpen(true);
  };

  const content = {
    title: "ArT-Space",
    title_en: "ArT-Space",
    desc: `Ind: PAAX!, dari Kelompok Lima. \n
    Sebuah pameran seni yang menampilkan karya-karya pop art dan abstrak yang unik dan penuh warna dari D.Koestrita, Stacy, RenDam, Masagung Kirasave, dan Ratih.`,
    desc_en: `Ind: PAAX!, dari Kelompok Lima. \n
    Sebuah pameran seni yang menampilkan karya-karya pop art dan abstrak yang unik dan penuh warna dari D.Koestrita, Stacy, RenDam, Masagung Kirasave, dan Ratih.`,
    logo: "/logo_ori.svg",
  };

  const handlePrevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? dataSpace.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === dataSpace.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      className="w-full bg-bg-dark bg-cover bg-center py-12 md:py-16 xl:py-20 px-6 text-white scroll-mt-12"
      id="gallery"
    >
      <div className="max-w-[1280px] mx-auto w-full overflow-hidden">
        <div className="mb-12">
          <h2 className="header-title">
            {lang === "en" ? content.title_en : content.title}
          </h2>
          <p className="!text-white/80 sub-title whitespace-pre-line">
            {lang === "en" ? content.desc_en : content.desc}
          </p>
        </div>
        <div>
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
              spaceBetween={10}
              modules={[Navigation]}
              navigation={{
                nextEl: ".gallery-button-next",
                prevEl: ".gallery-button-prev",
              }}
            >
              {dataGallery.map((item, index) => (
                <SwiperSlide key={index} className="mr-2">
                  <div className="recomended-card flex flex-col justify-center gap-2">
                    <div className="aspect-[16/12] w-full overflow-hidden rounded-lg relative">
                      <Image
                        src={item.image_mid}
                        alt={item?.name || "T-Space Gallery"}
                        sizes="100vw"
                        fill
                        onClick={() => handleImageClick(index)}
                        className="object-cover"
                        priority={index === 0} // Prioritize first image
                      />
                    </div>

                    <div className="mt-2 flex flex-col items-center gap-4">
                      <h3 className="recomended-title font-bebas text-[20px] lg:text-[28px] leading-tight font-normal text-white text-center line-clamp-3 mt-4">
                        {HTMLDecoderEncoder.decode(item.name)}
                      </h3>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              {/* Panah Navigasi */}
              <div className="gallery-button-prev absolute left-2 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-black/50 text-white flex items-center justify-center rounded-full cursor-pointer hover:bg-black/80 transition">
                <FaChevronLeft className="text-xl" />
              </div>
              <div className="gallery-button-next absolute right-2 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-black/50 text-white flex items-center justify-center rounded-full cursor-pointer hover:bg-black/80 transition">
                <FaChevronRight className="text-xl" />
              </div>
            </Swiper>
          )}

          {isPopupOpen && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
              onClick={() => setIsPopupOpen(false)} // Klik area luar untuk menutup
            >
              <div
                className="relative bg-white p-4 rounded-lg w-[80%] max-w-4xl overflow-y-auto"
                onClick={(e) => e.stopPropagation()} // Cegah penutupan saat gambar diklik
                style={{ maxHeight: "80vh" }}
              >
                <button
                  aria-label="button"
                  className="absolute top-4 right-4 text-white text-2xl z-[51] bg-black/20 rounded-full p-2"
                  onClick={() => setIsPopupOpen(false)}
                >
                  ✖
                </button>

                {/* Panah Navigasi */}
                <button
                  aria-label="button"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-2xl text-white bg-black/30 rounded-full p-2"
                  onClick={handlePrevImage}
                >
                  ◀
                </button>
                <button
                  aria-label="button"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-2xl text-white bg-black/30 rounded-full p-2"
                  onClick={handleNextImage}
                >
                  ▶
                </button>

                <div className="flex flex-col items-center">
                  <div className="w-full flex justify-center">
                    <div className="max-h-[500px]">
                      <Image
                        src={dataGallery[currentIndex].image_mid}
                        alt={dataGallery[currentIndex].name}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{
                          width: "auto", // Ukuran gambar disesuaikan
                          height: "auto",
                          maxHeight: "400px", // Gambar tidak melebihi 80% lebar viewport
                        }}
                      />
                    </div>
                  </div>

                  <div className="mt-4 text-center text-textDark">
                    <h2 className="text-xl font-semibold mb-2">
                      {HTMLDecoderEncoder.decode(
                        dataGallery[currentIndex].name
                      )}
                    </h2>
                    <p className="text-sm">
                      {dataGallery[currentIndex].dimensions}
                    </p>
                    <p className="text-lg text-secondary font-medium">
                      {dataGallery[currentIndex].price}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
