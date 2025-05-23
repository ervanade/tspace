"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import {
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
  FaWhatsapp,
} from "react-icons/fa";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
const HTMLDecoderEncoder = require("html-encoder-decoder");
import "swiper/css";

const ServicesDetails = ({ service, data }) => {
  const [isLoading, setIsLoading] = useState(true);
  const lang = useSelector((state) => state.lang.lang); // Get language from Redux store
  const removeTags = (html) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    return tempDiv.textContent || tempDiv.innerText || "";
  };
  const translations = {
    id: {
      monday: "Senin",
      tuesday: "Selasa",
      wednesday: "Rabu",
      thursday: "Kamis",
      friday: "Jumat",
      saturday: "Sabtu",
      sunday: "Minggu",
      by_appointment: "Berdasarkan Janji",
    },
    en: {
      monday: "Monday",
      tuesday: "Tuesday",
      wednesday: "Wednesday",
      thursday: "Thursday",
      friday: "Friday",
      saturday: "Saturday",
      sunday: "Sunday",
      by_appointment: "By Appointment",
    },
  };

  const translateSchedule = (schedule, lang) => {
    return schedule.map((item) => {
      if (item.toLowerCase() === "by appointment") {
        return translations[lang]?.by_appointment || item;
      }
  
      return item
        .replace(/Senin/g, translations[lang]?.monday)
        .replace(/Selasa/g, translations[lang]?.tuesday)
        .replace(/Rabu/g, translations[lang]?.wednesday)
        .replace(/Kamis/g, translations[lang]?.thursday)
        .replace(/Jumat/g, translations[lang]?.friday)
        .replace(/Sabtu/g, translations[lang]?.saturday)
        .replace(/Minggu/g, translations[lang]?.sunday);
    });
  };
  

  const dataSpace = [
    {
      id: "41",
      name: "Blepharoplasty Bagian Atas - 2",
      image_mid:
        "/assets/beyoutiful/services/before/Blepharoplasty Bagian Atas - 2.png",
    },

    {
      id: "42",
      name: "Blepharoplasty Bagian Bawah",
      image_mid:
        "/assets/beyoutiful/services/before/Blepharoplasty Bagian Bawah.png",
    },
    {
      id: "43",
      name: "Sedot Lemak Leher",

      image_mid: "/assets/beyoutiful/services/before/Sedot Lemak Leher.png",
    },
    {
      id: "43",
      name: "Sedot Lemak Badan",

      image_mid: "/assets/beyoutiful/services/before/Sedot Lemak Badan.png",
    },
    {
      id: "43",
      name: "Lip Filler",

      image_mid: "/assets/beyoutiful/services/before/Lip Filler.jpg",
    },
    {
      id: "44",
      name: "Nevus",
      image_mid: "/assets/beyoutiful/services/before/Nevus.png",
    },
    {
      id: "43",
      name: "Pembesaran Payudara",
      image_mid: "/assets/beyoutiful/services/before/Pembesaran Payudara.png",
    },
    {
      id: "40",
      name: "Pengecilan Payudara",
      image_mid: "/assets/beyoutiful/services/before/Pengecilan Payudara.png",
    },
    {
      id: "40",
      name: "Pengencangan Wajah Bagian Tengah",
      image_mid:
        "/assets/beyoutiful/services/before/Pengencangan Wajah Bagian Tengah.png",
    },
    {
      id: "40",
      name: "Penghilangan Lemak Pipi",
      image_mid:
        "/assets/beyoutiful/services/before/Penghilangan Lemak Pipi.png",
    },
    {
      id: "40",
      name: "Rhinoplasty Tulang Rusuk",
      image_mid:
        "/assets/beyoutiful/services/before/Rhinoplasty Tulang Rusuk.png",
    },
    {
      id: "40",
      name: "Upper Blepharoplasty 3",
      image_mid:
        "/assets/beyoutiful/services/before/Upper Blepharoplasty 3.png",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 10); // 2 detik simulasi delay
    return () => clearTimeout(timer);
  }, []);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  return (
    <section className="py-12 bg-white">
      <div className="w-full max-w-7xl px-4 md:px-6 lg:px-8 mx-auto">
        {/* Judul Layanan */}
        {
          data ? 
          <h2 className="text-center text-2xl !font-bold !text-secondary lg:!mb-6 title-beyoutiful">
          {lang === "en" ? data.title_en : data.title_id}
        </h2>
        :
        <h2 className="text-center text-2xl !font-bold !text-secondary lg:!mb-6 title-beyoutiful">
        {lang === "en" ? service.name_en : service.name}
      </h2>
        }

        <div className="grid lg:grid-cols-2 gap-6 ">
          {/* Area Deskripsi */}
          <div className="bg-white rounded-lg p-6 text-dark">
            <h2 className="text-2xl font-medium mb-5 text-center">
              {lang === "en" ? "Service Details" : "Rincian Layanan"}
            </h2>
            <div className="aspect-[16/9] w-full overflow-hidden rounded-lg relative mb-4">
              <Image
                src={data?.image_default || service.image}
                alt={data?.alt_img || service?.name || "Beyoutiful Service"}
                sizes="100vw"
                fill
                className="object-cover"
              />
            </div>
            <div className="text-sm leading-relaxed">
              {" "}
              {data?.content_id && data?.content_en ? (
            lang === "en" ? (
              parse(HTMLDecoderEncoder.decode(data?.content_en))
            ) : (
              parse(HTMLDecoderEncoder.decode(data?.content_id))
            )
          ) : (
            service?.description && lang === "en"
                ? parse(HTMLDecoderEncoder.decode(service?.description_en))
                : parse(HTMLDecoderEncoder.decode(service?.description))
          )}
            </div>
          </div>

          {/* Area Dokter */}
          {
            data?.dataDokter ?
            <div className="bg-white rounded-lg p-6 text-dark">
            <h2 className="text-2xl font-medium mb-4 text-center">
              {lang === "en" ? "Doctors" : "Dokter"}
            </h2>
            <div
              className={`grid ${
                data?.dataDokter?.length > 6
                  ? "sm:grid-cols-3"
                  : data?.dataDokter?.length >= 4
                  ? "sm:grid-cols-2"
                  : "sm:grid-cols-1"
              } gap-2`}
            >
              {data?.dataDokter.map((dokter, index) => (
                <div
                  key={index}
                  className="text-center p-4 border-2  bg-secondary rounded-lg text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-36 h-36 mx-auto overflow-hidden rounded-full relative">
                    <Image
                      src={dokter?.image_default || "/assets/user-default.jpg"}
                      onError={({ currentTarget }) => {
                        currentTarget.onerror = null; // prevents looping
                        currentTarget.src = "/assets/user-default.jpg";
                      }}
                      alt={dokter?.alt_img || dokter?.name}
                      sizes="100vw"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="font-bold text-sm mt-2">{dokter.name}</p>
                  {dokter?.content_id && dokter?.content_en ? (
                    <p className="text-xs text-white mt-1">
                      {lang === "en"
                        ? removeTags(
                            HTMLDecoderEncoder.decode(dokter?.content_en)
                          )
                        : removeTags(
                            HTMLDecoderEncoder.decode(dokter?.content_id)
                          )}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
              ))}
            </div>
          </div>
            :
            <div className="bg-white rounded-lg p-6 text-dark">
            <h2 className="text-2xl font-medium mb-4 text-center">
              {lang === "en" ? "Doctors" : "Dokter"}
            </h2>
            <div
              className={`grid ${
                service?.dokter?.length > 6
                  ? "sm:grid-cols-3"
                  : service?.dokter?.length >= 4
                  ? "sm:grid-cols-2"
                  : "sm:grid-cols-1"
              } gap-2`}
            >
              {service?.dokter?.map((dokter, index) => (
                <div
                  key={index}
                  className="text-center p-4 border-2  bg-secondary rounded-lg text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-36 h-36 mx-auto overflow-hidden rounded-full relative">
                    <Image
                      src={dokter.dokter_foto}
                      alt={dokter.nama_dokter}
                      sizes="100vw"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="font-bold text-sm mt-2">{dokter.nama_dokter}</p>
                  <ul className="mt-1 text-xs">
  {translateSchedule(dokter.jadwal_dokter, lang).map((jadwal, i) => (
    <li key={i}>{jadwal}</li>
  ))}
</ul>
                </div>
              ))}
            </div>
          </div>
          }
         
        </div>

        {/* Area Foto Before-After */}
        {
          data && data?.beforeAfter?.length > 0 ? 
<div className="mt-6">
            <div className="bg-white rounded-lg p-6 text-dark">
              <h2 className="text-2xl font-medium mb-5 text-center">
                Before After
              </h2>
              <div className="max-w-[1280px] mx-auto w-full overflow-hidden pb-6">
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
                      navigation={{
                        nextEl: ".gallery-button-next",
                        prevEl: ".gallery-button-prev",
                      }}
                      // navigation={true}
                      // onSwiper={(swiper) => console.log(swiper)}
                      // onSlideChange={() => console.log("slide change")}
                    >
                      {data?.beforeAfter
                        ? data?.beforeAfter?.map((item, index) => (
                            <SwiperSlide className="mr-2" key={index}>
                              <div className="recomended-card flex flex-col justify-center gap-2">
                                {/* <div className="recomended-image w-full object-cover lg:h-[250px] overflow-hidden"> */}
                                <div className="aspect-[16/16] w-full overflow-hidden rounded-lg relative">
                                  <Image
                                    src={item.image_mid}
                                    alt={item?.name || "Before After"}
                                    sizes="100vw"
                                    fill
                                    className="object-cover"
                                    priority={index === 0} // Prioritize first image
                                  />
                                </div>
                                {/* <Image
                                        src={item.image_mid}
                                        width={0}
                                        height={0}
                                        // className='aspect-square'
                                        alt={item?.name || "T-Space Gallery"}
                                        sizes="100vw"
                                        className="rounded-xl"
                                        style={{ width: "100%", height: "auto" }} // optional
                                      /> */}
                                <div className="mt-2 flex flex-col items-center gap-4 px-1">
                                  <h3 className="recomended-title font-montserrat text-[16px] lg:text-[24px] font-medium text-dark text-center line-clamp-3 mt-4">
                                    {lang === "en" ? HTMLDecoderEncoder.decode(item?.name_en) : HTMLDecoderEncoder.decode(item?.name)}
                                  </h3>
                                </div>
                              </div>
                            </SwiperSlide>
                          ))
                        : ""}
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
              {/* <div className="grid grid-cols-1 gap-4">
                {service.before_after_foto?.map((foto, index) => (
                  <div
                    key={index}
                    className="aspect-[1070/364] w-full overflow-hidden rounded-lg relative"
                  >
                    <Image
                      src={foto}
                      alt={`Before After ${index + 1}`}
                      sizes="100vw"
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div> */}
            </div>
          </div>
          : service.before_after_foto?.length > 0 && (
            <div className="mt-6">
              <div className="bg-white rounded-lg p-6 text-dark">
                <h2 className="text-2xl font-medium mb-5 text-center">
                  Before After
                </h2>
                <div className="max-w-[1280px] mx-auto w-full overflow-hidden pb-6">
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
                        navigation={{
                          nextEl: ".gallery-button-next",
                          prevEl: ".gallery-button-prev",
                        }}
                        // navigation={true}
                        // onSwiper={(swiper) => console.log(swiper)}
                        // onSlideChange={() => console.log("slide change")}
                      >
                        {service.before_after_foto
                          ? service.before_after_foto?.map((item, index) => (
                              <SwiperSlide className="mr-2" key={index}>
                                <div className="recomended-card flex flex-col justify-center gap-2">
                                  {/* <div className="recomended-image w-full object-cover lg:h-[250px] overflow-hidden"> */}
                                  <div className="aspect-[16/16] w-full overflow-hidden rounded-lg relative">
                                    <Image
                                      src={item.image_mid}
                                      alt={item?.name || "Before After"}
                                      sizes="100vw"
                                      fill
                                      className="object-cover"
                                      priority={index === 0} // Prioritize first image
                                    />
                                  </div>
                                  {/* <Image
                                          src={item.image_mid}
                                          width={0}
                                          height={0}
                                          // className='aspect-square'
                                          alt={item?.name || "T-Space Gallery"}
                                          sizes="100vw"
                                          className="rounded-xl"
                                          style={{ width: "100%", height: "auto" }} // optional
                                        /> */}
                                  <div className="mt-2 flex flex-col items-center gap-4 px-1">
                                    <h3 className="recomended-title font-montserrat text-[16px] lg:text-[24px] font-medium text-dark text-center line-clamp-3 mt-4">
                                      {lang === "en" ? HTMLDecoderEncoder.decode(item?.name_en) : HTMLDecoderEncoder.decode(item?.name)}
                                    </h3>
                                  </div>
                                </div>
                              </SwiperSlide>
                            ))
                          : ""}
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
                {/* <div className="grid grid-cols-1 gap-4">
                  {service.before_after_foto?.map((foto, index) => (
                    <div
                      key={index}
                      className="aspect-[1070/364] w-full overflow-hidden rounded-lg relative"
                    >
                      <Image
                        src={foto}
                        alt={`Before After ${index + 1}`}
                        sizes="100vw"
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div> */}
              </div>
            </div>
          )
        
        }

      </div>
      <a
        href="https://wa.me/+628119790556
            "
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg transition duration-300 flex items-center gap-2 md:gap-3"
      >
        <FaWhatsapp className="h-6 w-6" />
        <span className="hidden md:inline font-medium">
          {lang === "en" ? "Contact Us" : "Hubungi Kami"}
        </span>
      </a>
    </section>
  );
};

export default ServicesDetails;
