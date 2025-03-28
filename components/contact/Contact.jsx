"use client";

import Image from "next/image";
import React from "react";
import {
  FaMapMarked,
  FaMapMarker,
  FaMarker,
  FaRegBuilding,
  FaStar,
} from "react-icons/fa";
import { useSelector } from "react-redux";

const Contact = ({ data }) => {
  const lang = useSelector((state) => state.lang.lang); // Get language from Redux store

  return (
    <section
      className="py-12 md:py-16 xl:py-20 relative scroll-mt-12 bg-[#E9E9E9]"
      id="contact"
    >
      <div className="w-full max-w-6xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-start items-center mt-12 gap-8 grid lg:grid-cols-2 grid-cols-1">
          <div className="order-first lg:order-last relative mx-auto lg:mr-0 w-full h-full rounded-3xl lg:px-4 overflow-hidden">
            <Image
              src="/assets/tspace_building.png"
              alt="about Us image"
              layout="responsive"
              width={960} // Set the actual width of the image
              height={510} // Set the actual height of the image
              className="object-cover rounded-3xl"
            />
          </div>
          <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
            <div className="w-full flex-col justify-start lg:items-start items-center flex">
              <h2 className="!text-textDark header-title">
                {lang === "en"
                  ? "COLLABORATION WITH T-SPACE"
                  : "KOLABORASI DENGAN T-SPACE"}
              </h2>
              <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                {lang === "en"
                  ? "Interested in holding an event, workshop, or other creative activity at T-Space? We provide spaces and facilities that support various types of collaboration. Contact us for more information."
                  : "Tertarik untuk mengadakan acara, workshop, atau kegiatan kreatif lainnya di T-Space? Kami menyediakan ruang dan fasilitas yang mendukung berbagai jenis kolaborasi. Hubungi kami untuk informasi lebih lanjut."}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={
                  data?.wa_chat ? data?.wa_chat : "https://wa.me/+6281181110556"
                }
                target="_blank"
                rel="noopener noreferrer"
                aria-label="button"
                className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-full bg-[#303638] text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                type="button"
              >
                {lang === "en" ? "CONTACT US" : "HUBUNGI KAMI"}
              </a>
            </div>
          </div>
        </div>
        <div className="w-full px-2 py-8 rounded-xl mt-6">
          <div className="">
            {/* <h2 className="header-title !text-textDark">Lokasi Kami</h2> */}

            <div className=" text-textDark p-4 bg-white">
              <h3 className="font-semibold text-lg lg:text-xl mb-2">
                T-Space Bintaro
              </h3>
              <p className="flex items-center gap-2 text-sm lg:text-base ">
                <span>
                  <FaMapMarker className="text-red-500" />
                </span>
                Jl. Jombang Raya No.32, Parigi, Jombang, Kota Tangerang Selatan,
                Banten 15229
              </p>
            </div>
          </div>
          <div className="relative w-full pb-[56.25%] overflow-hidden mb-6">
            <iframe
              title="Map T-Space Bintaro"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute top-0 left-0 w-full h-full border-0"
              src={
                data?.location_map
                  ? data?.location_map
                  : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.9177746361593!2d106.70388011106542!3d-6.27454179368804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fbd85ea7d32f%3A0x4c08c46a849a4ef!2sT-Space%20Bintaro!5e0!3m2!1sid!2sid!4v1735031320171!5m2!1sid!2sid"
              }
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
