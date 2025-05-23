"use client";

import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useSelector } from "react-redux";
import parse from "html-react-parser";
const HTMLDecoderEncoder = require("html-encoder-decoder");
const Space = ({ title, subTitle, data }) => {
  const [isLoading, setIsLoading] = useState(true);
  const dataRentSpace = data?.data || null;
  const metaData = data?.metadata || null;
  const dataSpace = [
    {
      id: "41",
      name: "T-HALL",
      price: "Rp. 140.000",
      opsi_acara: "Live Music, Art Exhibition Talkshow, Wedding Ceremony, etc",
      fasilitas: "Toilet, Sound System, Tables & Chairs, AC",
      spesifikasi: "Indoor, 200m2, Non smoking, No pet allowed",
      image_mid: "/assets/hall.png",
      image_map: "/assets/denah-hall.png",
    },
    {
      id: "40",
      name: "T-GARDEN",
      price: "Rp. 120.000",
      opsi_acara: "Live Music, Garden Party, Celebration, Gathering etc",
      fasilitas: "Toilet, Sound System, Tables & Chairs",
      spesifikasi: "Outdoor, 1.000m2, Smoking area, Pet Friendly",
      image_mid: "/assets/garden.png",
      image_map: "/assets/denah-garden.png",
    },
    {
      id: "42",
      name: "T-STUDIO",
      price: "Rp. 60.000",
      opsi_acara:
        "Tenant Yearly Rent, Yoga, Pilates, Intimate Event, Talkshow, Photo Studio, etc",
      fasilitas: "Toilet, Sound System, Tables & Chairs, AC",
      spesifikasi: "Indoor, 200m2 + 2 Rooms, Non smoking ",
      image_mid: "/assets/studio.png",
      image_map: "/assets/denah-studio.png",
    },
    {
      id: "43",
      name: "T-ROOFTOP",
      price: "Rp. 120.000",
      opsi_acara:
        "Tenant Yearly Rent, Live Music, Gathering, Intimate Event, etc",
      fasilitas: "Toilet, Sound System, Tables & Chairs",
      spesifikasi: "Outdoor, 725m2, Smoking area, No pet allowed",
      image_mid: "/assets/rooftop-1.png",
      image_map: "/assets/denah-rooftop.png",
    },
    {
      id: "43",
      name: "OPERATING ROOM",
      price: "Rp. 120.000",
      opsi_acara:
        "Tenant Yearly Rent, Live Music, Gathering, Intimate Event, etc",
      fasilitas:
        "Up to 15 pax, 4 - 5 hours, 1 OK room, 1 bed Post OP-area, 1 Nurse OK, 1 Nurse Post OP",
      spesifikasi: "Parking Area, Toilet, WiFi",
      content: `   <div>
                  <h3 className="text-lg font-bold mt-3 text-textDark">
                   Opsi Acara
                  </h3>
                  <p className="text-textDark mt-2">
                    Live Surgery, Workshop, Product Demo, other medical purposes
                  </p>
                  <h3 className="text-lg font-bold mt-6 text-textDark ">
                  Lokasi, Beyoutiful Aesthetic Clinic
                  </h3>
                  <p className="text-textDark mt-2">
                    Jl. Pakubuwono VI No.5A 3, RT.3/RW.3, Gunung, Kec. Kby. Baru, Kota Jakarta Selatan
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold mt-3 text-textDark">
                    Fasilitas
                  </h3>
                  <p className="text-textDark mt-2">
                 Up to 15 pax, 4 - 5 hours, 1 OK room, 1 bed Post OP-area, 1 Nurse OK, 1 Nurse Post OP, Parking Area, Toilet, WiFi
                  </p>
                </div>
                
                <div class="mt-6">
                 <h3 className="text-lg font-bold mt-3 text-textDark">
                  Lokasi, Beyoutiful Aesthetic Center
                  </h3>
                     <p className="text-textDark mt-2">
                at T-Space Bintaro 9, Jl. Jombang Raya No.32, Parigi, Jombang, Kota Tangerang Selatan
                  </p>
                </div>
                 <div>
                  <h3 className="text-lg font-bold mt-3 text-textDark">
                    Fasilitas
                  </h3>
                  <p className="text-textDark mt-2">
                 Up to 20-25 pax, 4 - 6 hours, 1 OK room, 1 bed Post OP-area, 1 Nurse OK, 1 Nurse Post OP, Parking Area, Toilet, Mushola, WiFi
                  </p>
                </div>
                `,
      content_en: `   <div>
                <h3 className="text-lg font-bold mt-3 text-textDark">
                Event Options
                </h3>
                <p className="text-textDark mt-2">
                  Live Surgery, Workshop, Product Demo, other medical purposes
                </p>
                <h3 className="text-lg font-bold mt-6 text-textDark ">
                Location, Beyoutiful Aesthetic Clinic
                </h3>
                <p className="text-textDark mt-2">
                  Jl. Pakubuwono VI No.5A 3, RT.3/RW.3, Gunung, Kec. Kby. Baru, Kota Jakarta Selatan
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold mt-3 text-textDark">
                  Facilities

                </h3>
                <p className="text-textDark mt-2">
               Up to 15 pax, 4 - 5 hours, 1 OK room, 1 bed Post OP-area, 1 Nurse OK, 1 Nurse Post OP, Parking Area, Toilet, WiFi
                </p>
              </div>
              
              <div class="mt-6">
               <h3 className="text-lg font-bold mt-3 text-textDark">
                Location, Beyoutiful Aesthetic Center
                </h3>
                   <p className="text-textDark mt-2">
              at T-Space Bintaro 9, Jl. Jombang Raya No.32, Parigi, Jombang, Kota Tangerang Selatan
                </p>
              </div>
               <div>
                <h3 className="text-lg font-bold mt-3 text-textDark">
                  Facilities
                </h3>
                <p className="text-textDark mt-2">
               Up to 20-25 pax, 4 - 6 hours, 1 OK room, 1 bed Post OP-area, 1 Nurse OK, 1 Nurse Post OP, Parking Area, Toilet, Mushola, WiFi
                </p>
              </div>
              `,
      image_mid: "/assets/operating-room.png",
      image_map: "/assets/denah-operating.jpg",
    },
    {
      id: "44",
      name: "ALL T-SPACE AREA",
      price: "Rp. 120.000",
      opsi_acara:
        "Music Festival, Wedding Ceremony & Receptions, Exhibition Event, etc",
      fasilitas: "All T-SPACE AREA",
      spesifikasi: "Indoor & Outdoor, 3.500m2 ",
      image_mid: "/assets/tspace-area.png",
      image_map: "/assets/denah-all.png",
    },
  ];
  const lang = useSelector((state) => state.lang.lang); // Get language from Redux store

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
      className="w-full bg-cover bg-center py-12 md:py-16 xl:py-20 px-6 text-textDark scroll-mt-12"
      id="rent-space"
    >
      <div className="mb-12">
        <h2 className="header-title !text-textDark">
          {lang === "en" ? "RenT-Space" : "RenT-Space"}
        </h2>
        {metaData ? (
          lang === "en" ? (
            parse(HTMLDecoderEncoder.decode(metaData?.subtitle_en))
          ) : (
            parse(HTMLDecoderEncoder.decode(metaData?.subtitle_id))
          )
        ) : (
          <p className="!text-textDark/80 sub-title">
            {lang === "en"
              ? "Suitable for your dream events and occasions. Browse through our available spaces and book a tour today!"
              : "Telusuri ruang yang tersedia dan jelajahi opsi penyewaan fleksibel kami di T-Space."}
          </p>
        )}
        {/* <p className="!text-textDark/80 sub-title">
          {lang === "en"
            ? "Suitable for your dream events and occasions. Browse through our available spaces and book a tour today!"
            : "Telusuri ruang yang tersedia dan jelajahi opsi penyewaan fleksibel kami di T-Space."}
        </p> */}
      </div>

      {dataRentSpace && dataRentSpace.length > 0 ? (
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
                navigation={{
                  nextEl: ".gallery-button-next",
                  prevEl: ".gallery-button-prev",
                }}
                // navigation={true}
                // onSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={() => console.log("slide change")}
              >
                {dataRentSpace
                  ? dataRentSpace.map((item, index) => (
                      <SwiperSlide className="mr-2" key={index}>
                        <div className="recomended-card flex flex-col justify-center gap-2">
                          {/* <div className="recomended-image w-full object-cover lg:h-[250px] overflow-hidden"> */}
                          <div className="aspect-[16/13] w-full overflow-hidden rounded-lg relative">
                            <Image
                              src={item.image_default}
                              alt={item?.alt_img || "Rent Space"}
                              sizes="100vw"
                              fill
                              className="object-cover"
                              priority={index === 0} // Prioritize first image
                            />
                          </div>

                          <div className="mt-2 flex flex-col items-center gap-4">
                            <h3 className="recomended-title font-bebas text-[20px] lg:text-[28px] leading-tight font-normal text-textDark text-center line-clamp-3 mt-4">
                              {HTMLDecoderEncoder.decode(item?.name)}
                            </h3>
                            <button
                              aria-label="button"
                              className="align-middle select-none font-poppins font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2.5 uppercase px-6 rounded-full bg-[#303638] text-[#fff] shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
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
                  className="relative max-w-4xl w-[80%] bg-white p-6 rounded-md m-4 overflow-y-auto max-h-[85vh]"
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
                      src={selectedItem.image_default}
                      width={0}
                      height={0}
                      alt={selectedItem?.alt_img || "Image Space"}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                    />
                    <Image
                      src={selectedItem.image_m_default}
                      width={0}
                      height={0}
                      alt={selectedItem?.alt_img || "Image Map Space"}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                  <h2 className="text-2xl font-bold mt-4 text-textDark">
                    {selectedItem?.name}
                  </h2>
                  {selectedItem?.content_id && selectedItem?.content_en ? (
                    lang === "en" ? (
                      parse(HTMLDecoderEncoder.decode(selectedItem?.content_en))
                    ) : (
                      parse(HTMLDecoderEncoder.decode(selectedItem?.content_id))
                    )
                  ) : (
                    <p className="!text-black/80 sub-title whitespace-pre-line">
                      Konten Tidak Tersedia
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
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
                navigation={{
                  nextEl: ".gallery-button-next",
                  prevEl: ".gallery-button-prev",
                }}
                // navigation={true}
                // onSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={() => console.log("slide change")}
              >
                {dataSpace
                  ? dataSpace.map((item, index) => (
                      <SwiperSlide className="mr-2" key={index}>
                        <div className="recomended-card flex flex-col justify-center gap-2">
                          {/* <div className="recomended-image w-full object-cover lg:h-[250px] overflow-hidden"> */}
                          <div className="aspect-[16/13] w-full overflow-hidden rounded-lg relative">
                            <Image
                              src={item.image_mid}
                              alt={item?.name || "Rent Space"}
                              sizes="100vw"
                              fill
                              className="object-cover"
                              priority={index === 0} // Prioritize first image
                            />
                          </div>

                          <div className="mt-2 flex flex-col items-center gap-4">
                            <h3 className="recomended-title font-bebas text-[20px] lg:text-[28px] leading-tight font-normal text-textDark text-center line-clamp-3 mt-4">
                              {HTMLDecoderEncoder.decode(item?.name)}
                            </h3>
                            <button
                              aria-label="button"
                              className="align-middle select-none font-poppins font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2.5 uppercase px-6 rounded-full bg-[#303638] text-[#fff] shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
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
                  className="relative max-w-4xl w-[80%] bg-white p-6 rounded-md m-4 overflow-y-auto max-h-[85vh]"
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
                  {selectedItem?.name === "OPERATING ROOM" ? (
                    <div>
                      {lang === "en"
                        ? parse(
                            HTMLDecoderEncoder.decode(selectedItem?.content_en)
                          )
                        : parse(
                            HTMLDecoderEncoder.decode(selectedItem?.content)
                          )}
                    </div>
                  ) : (
                    <div>
                      <div>
                        <h3 className="text-lg font-bold mt-3 text-textDark">
                          {lang === "en" ? "Event Options" : "Opsi Acara"}
                        </h3>
                        <p className="text-textDark mt-2">
                          {selectedItem?.opsi_acara}
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold mt-3 text-textDark">
                          {lang === "en" ? "Facilities" : "Fasilitas"}
                        </h3>
                        <p className="text-textDark mt-2">
                          {selectedItem?.fasilitas}
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold mt-3 text-textDark">
                          {lang === "en"
                            ? "Area Specifications"
                            : "Spesifikasi Area"}
                        </h3>
                        <p className="text-textDark mt-2">
                          {selectedItem?.spesifikasi}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Space;
