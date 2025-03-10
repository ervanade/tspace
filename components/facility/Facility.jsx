"use client";

import React, { useEffect, useState } from "react";

const HTMLDecoderEncoder = require("html-encoder-decoder");
import parse from "html-react-parser";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useSelector } from "react-redux";
const Facility = ({ title, subTitle, data }) => {
  const [isLoading, setIsLoading] = useState(true);
  const lang = useSelector((state) => state.lang.lang); // Get language from Redux store
  const dataFacility = data?.data || null;
  const metaData = data?.metadata || null;
  const dataSpace = [
    {
      id: "41",
      name: "Lobi",
      name_en: "Lobby",
      price: "Rp. 140.000",
      opsi_acara: "Live Music, Art Exhibition Talkshow, Wedding Ceremony, etc…",
      fasilitas: "Toilet, Sound System, Tables & Chairs, AC",
      spesifikasi: "Indoor, 200m2 Non smoking No pet allowed",
      image_mid: "/assets/beyoutiful/faciliy-1.png",
      image_map: "/assets/map-hall.png",
    },

    {
      id: "42",
      name: "Ruang Konsultasi",
      name_en: "Consultation Room",
      price: "Rp. 60.000",
      opsi_acara:
        "Tenant Yearly Rent, Yoga, Pilates, Intimate Event, Talkshow, Photo Studio, etc…",
      fasilitas: "Toilet, Sound System, Tables & Chairs, AC",
      spesifikasi: "Indoor, 200m2 + 2 RoomsNon smoking ",
      image_mid: "/assets/beyoutiful/konsultasi.jpg",
      image_map: "/assets/map-hall.png",
    },
    // {
    //   id: "42",
    //   name: "Obstetri & Ginekologi",
    //   name_en: "Obstetrics & Gynecology",
    //   price: "Rp. 60.000",
    //   opsi_acara:
    //     "Tenant Yearly Rent, Yoga, Pilates, Intimate Event, Talkshow, Photo Studio, etc…",
    //   fasilitas: "Toilet, Sound System, Tables & Chairs, AC",
    //   spesifikasi: "Indoor, 200m2 + 2 RoomsNon smoking ",
    //   image_mid: "/assets/beyoutiful/obstetri.jpg",
    //   image_map: "/assets/map-hall.png",
    // },
    {
      id: "42",
      name: "Ruang VIP",
      name_en: "VIP Room",
      price: "Rp. 60.000",
      opsi_acara:
        "Tenant Yearly Rent, Yoga, Pilates, Intimate Event, Talkshow, Photo Studio, etc…",
      fasilitas: "Toilet, Sound System, Tables & Chairs, AC",
      spesifikasi: "Indoor, 200m2 + 2 RoomsNon smoking ",
      image_mid: "/assets/beyoutiful/vip.png",
      image_map: "/assets/map-hall.png",
    },
    {
      id: "43",
      name: "Ruang Operasi",
      name_en: "Operating Room",
      price: "Rp. 120.000",
      opsi_acara:
        "Tenant Yearly Rent, Live Music, Gathering, Intimate Event, etc…",
      fasilitas: "Toilet, Sound System, Tables & Chairs",
      spesifikasi: "Outdoor, 725m2 Smoking area No pet allowed",
      image_mid: "/assets/beyoutiful/operasi.png",
      image_map: "/assets/map-hall.png",
    },
    {
      id: "44",
      name: "Pusat Dermatologi",
      name_en: "Dermatology Center",
      price: "Rp. 120.000",
      opsi_acara:
        "Music Festival, Wedding Ceremony & Receptions, Exhibition Event, etc…",
      fasilitas: "All T-SPACE AREA",
      spesifikasi: "Indoor & Outdoor, 3.500m2 ",
      image_mid: "/assets/beyoutiful/dermatologi.png",
      image_map: "/assets/map-hall.png",
    },
    {
      id: "43",
      name: "Ruang Hiperbarik",
      name_en: "Hyperbaric Chamber",
      price: "Rp. 120.000",
      opsi_acara:
        "Tenant Yearly Rent, Live Music, Gathering, Intimate Event, etc…",
      fasilitas: "Toilet, Sound System, Tables & Chairs",
      spesifikasi: "Outdoor, 725m2 Smoking area No pet allowed",
      image_mid: "/assets/beyoutiful/hiperbarik.png",
      image_map: "/assets/map-hall.png",
    },
    {
      id: "43",
      name: "Radiologi",
      name_en: "Radiology",
      price: "Rp. 120.000",
      opsi_acara:
        "Tenant Yearly Rent, Live Music, Gathering, Intimate Event, etc…",
      fasilitas: "Toilet, Sound System, Tables & Chairs",
      spesifikasi: "Outdoor, 725m2 Smoking area No pet allowed",
      image_mid: "/assets/beyoutiful/radiologi-1.jpg",
      image_map: "/assets/beyoutiful/radiologi-1.jpg",
    },

    {
      id: "40",
      name: "Klinik Gigi",
      name_en: "Dental Clinic",
      price: "Rp. 120.000",
      opsi_acara: "Live Music, Garden Party, Celebration, Gathering etc…",
      fasilitas: "Toilet, Sound System, Tables & Chairs",
      spesifikasi: "Outdoor, 1.000m2 Smoking area Pet Friendly",
      image_mid: "/assets/beyoutiful/dental-facility.jpg",
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
      className="w-full bg-white bg-cover bg-center py-12 md:py-16 xl:py-20 px-6 text-textDark scroll-mt-12"
      id="facility"
    >
      <div className="max-w-[1280px] mx-auto w-full overflow-hidden ">
        <div className="mb-12">
          {metaData?.title_id && metaData?.title_en ? (
            <h1 className="title-beyoutiful !text-secondary !font-semibold !text-left">
              {lang === "en" ? metaData?.title_en : metaData?.title_id}
            </h1>
          ) : (
            <h1 className="title-beyoutiful !text-secondary !font-semibold !text-left">
              {lang === "en" ? "Our Facility" : "Fasilitas Kami"}
            </h1>
          )}
          {metaData?.subtitle_id && metaData?.subtitle_en ? (
            lang === "en" ? (
              parse(HTMLDecoderEncoder.decode(metaData?.subtitle_en))
            ) : (
              parse(HTMLDecoderEncoder.decode(metaData?.subtitle_id))
            )
          ) : (
            <p className="!text-textDark/80 sub-title !text-left">
              {lang === "en"
                ? "Experience our modern facilities and comfortable environment to ensure your comfort and privacy."
                : "Nikmati pengalaman treatment dengan fasilitas modern dan lingkungan yang nyaman untuk menjamin kenyamanan dan privasi Anda."}
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
            >
              {dataFacility && dataFacility?.length > 0
                ? dataFacility.map((item, index) => (
                    <SwiperSlide className="mr-2" key={index}>
                      <div className="recomended-card flex flex-col justify-center gap-2">
                        {/* <div className="recomended-image w-full object-cover lg:h-[250px] overflow-hidden"> */}
                        <div className="aspect-[16/12] w-full overflow-hidden rounded-lg relative">
                          <Image
                            src={item.image_default}
                            alt={item?.alt_img || "Beyoutiful Facility"}
                            sizes="100vw"
                            fill
                            className="object-cover"
                            priority={index === 0 || index === 1 || index === 2} // Prioritize first image
                          />
                        </div>

                        <div className="mt-2 flex flex-col items-center gap-4">
                          <h3 className="recomended-title font-montserrat text-[20px] lg:text-[24px] font-medium text-textDark text-center line-clamp-3 mt-4">
                            {lang === "en"
                              ? HTMLDecoderEncoder.decode(item?.title_en)
                              : HTMLDecoderEncoder.decode(item?.title_id)}
                          </h3>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))
                : dataSpace.map((item, index) => (
                    <SwiperSlide className="mr-2" key={index}>
                      <div className="recomended-card flex flex-col justify-center gap-2">
                        {/* <div className="recomended-image w-full object-cover lg:h-[250px] overflow-hidden"> */}
                        <div className="aspect-[16/12] w-full overflow-hidden rounded-lg relative">
                          <Image
                            src={item.image_mid}
                            alt={item?.name || "Beyoutiful Facility"}
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
                        <div className="mt-2 flex flex-col items-center gap-4">
                          <h3 className="recomended-title font-montserrat text-[20px] lg:text-[24px] font-medium text-textDark text-center line-clamp-3 mt-4">
                            {lang === "en"
                              ? HTMLDecoderEncoder.decode(item?.name_en)
                              : HTMLDecoderEncoder.decode(item?.name)}
                          </h3>
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
                  aria-label="button"
                  className="absolute top-4 right-4 text-textDark text-2xl z-[51] bg-black/20 rounded-full p-2"
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
                  <h3 className="text-lg font-bold mt-3 text-textDark">
                    Opsi Acara
                  </h3>
                  <p className="text-textDark mt-2">
                    {selectedItem?.opsi_acara}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold mt-3 text-textDark">
                    Fasilitas
                  </h3>
                  <p className="text-textDark mt-2">
                    {selectedItem?.fasilitas}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold mt-3 text-textDark">
                    Spesifikasi Area
                  </h3>
                  <p className="text-textDark mt-2">
                    {selectedItem?.spesifikasi}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Facility;
