"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useSelector } from "react-redux";
import { articles } from "@/public/data";

const RecomendedArticles = ({ data }) => {
  const [isLoading, setIsLoading] = useState(true);
  const lang = useSelector((state) => state.lang.lang); // Get language from Redux store

  const tvPromotions = [
    {
      name: "Promo Good Thing Festival",
      image: "/assets/article-1.png",
      link: "#",
    },
    {
      name: "Promo Celebrating 148 Tahun",
      image: "/assets/article-2.png",
      link: "#",
    },
    {
      name: "Promo Mega Sale 88",
      image: "/assets/article-3.png",
      link: "#",
    },
    {
      name: "Promo Mega Sale 88",
      image: "/assets/article-1.png",
      link: "#",
    },
    {
      name: "Promo Mega Sale 88",
      image: "/assets/article-2.png",
      link: "#",
    },
  ];

  // Simulasi loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 10); // 2 detik simulasi delay
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="promotions bg-[#1B1D1C] scroll-mt-12" id="articles">
      <div className="max-w-[1280px] mx-auto w-full py-8 xl:py-16 px-6 overflow-hidden">
        <h2 className="text-white mb-12 text-3xl xl:text-5xl text-center font-bebas leading-tight">
          ARTICLES
        </h2>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="animate-pulse flex flex-col space-y-4 rounded-xl shadow-md p-6 bg-gray-200"
              >
                <div className="h-56 bg-gray-300 rounded-t-lg"></div>
                <div className="h-6 w-3/4 bg-gray-300 rounded"></div>
                <div className="h-4 w-full bg-gray-300 rounded"></div>
                <div className="h-4 w-5/6 bg-gray-300 rounded"></div>
              </div>
            ))}
          </div>
        ) : (
          <Swiper
            className="h-auto md:!h-400px overflow-hidden"
            slidesPerView={1.15}
            breakpoints={{
              768: {
                slidesPerView: 3.15,
              },
            }}
            spaceBetween={10}
            modules={[Navigation]}
            navigation={{
              nextEl: ".gallery-button-next",
              prevEl: ".gallery-button-prev",
            }}
          >
            {articles.slice(0, 6).map((article, index) => (
              <SwiperSlide className="mr-2" key={index}>
                <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl ">
                  <div className="relative h-56 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-t-lg bg-blue-gray-500 shadow-blue-gray-500/40">
                    <Image
                      src={article.image}
                      alt="card-image"
                      fill
                      className="object-cover"
                      priority={index === 0} // Prioritas pada slide pertama untuk performance
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                      Article T-Space
                    </h3>
                    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                      The place is close to Barceloneta Beach and bus stop just
                      2 min by walk and near to "Naviglio" where you can enjoy
                      the main night life in Barcelona.
                    </p>
                  </div>
                  <div className="p-6 pt-0">
                    <Link
                      aria-label={`Read more about ${article.title}`}
                      href={`/articles/${article.slug}?lang=${lang}`}
                      className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-full bg-[#303638] text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                      type="button"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            <div className="gallery-button-prev absolute left-2 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-black/50 text-white flex items-center justify-center rounded-full cursor-pointer hover:bg-black/80 transition">
              <FaChevronLeft className="text-xl" />
            </div>
            <div className="gallery-button-next absolute right-2 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-black/50 text-white flex items-center justify-center rounded-full cursor-pointer hover:bg-black/80 transition">
              <FaChevronRight className="text-xl" />
            </div>
          </Swiper>
        )}
        <div className="flex justify-end mt-8">
          <Link
            aria-label="Button View More"
            href={`/articles?lang=${lang}`}
            className="bg-[#fff] text-[#303638] px-6 py-3 lg:px-8 lg:py-4 rounded-full font-semibold"
          >
            View More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecomendedArticles;
