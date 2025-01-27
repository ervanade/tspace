"use client";
import Image from "next/image";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useSelector } from "react-redux";

const AboutBeyoutiful = () => {
  const contentAbout = {
    title: "Beyoutiful Aesthetic",
    desc: "Rasakan treatment kesehatan holistik di Beyoutiful Aesthetic. Mulai dari bedah estetika hingga terapi khusus, dirancang untuk meningkatkan penampilan dan kesejahteraan Anda secara menyeluruh.",
    desc_en:
      "Experience the beauty of holistic wellness at Beyoutiful Aesthetic. Our services, ranging from aesthetic surgery to specialized therapies, are designed to enhance your appearance and improve your overall well-being.",
    logo: "/logo_ori.svg",
  };
  const lang = useSelector((state) => state.lang.lang); // Get language from Redux store
  return (
    <section className="py-20 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
          <div className="relative mx-auto w-2/3 lg:w-full h-full rounded-3xl lg:px-4 overflow-hidden">
            <Image
              src="/assets/about.png"
              alt="about Us image"
              layout="responsive"
              width={569} // Set the actual width of the image
              height={484} // Set the actual height of the image
              className="object-cover"
            />
          </div>
          <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
            <div className="w-full flex-col justify-start lg:items-start items-center flex">
              <h2 className="!text-secondary title-beyoutiful lg:!text-left">
                {contentAbout.title}
              </h2>
              <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                {lang === "en" ? contentAbout.desc_en : contentAbout.desc}
              </p>
              {/* <Image
            src="/beyoutiful_logo.png"
            alt="Logo Beyoutiful"
            width={204}
            height={96}
          /> */}
              {/* <Image
                src="/beyoutiful_white.svg"
                alt="Logo Beyoutiful"
                width={183}
                height={48}
                className="mt-4"
              /> */}
            </div>
            {/* <button className="sm:w-fit w-full px-3.5 py-2 bg-orange-600 hover:bg-orange-800 transition-all duration-700 ease-in-out rounded-full shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                        <span className="px-1.5 text-white text-sm font-medium leading-6">View More</span>
                    </button> */}

            <div className="flex items-center gap-2">
              <button
                className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-full bg-secondary text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                type="button"
              >
                Konsultasi Sekarang
              </button>
            </div>
          </div>
        </div>
      </div>
      <a
        href="https://wa.me/+6281519060060
      "
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-white text-textDark p-4 rounded-full shadow-lg transition duration-300 flex items-center gap-2 md:gap-3"
      >
        <FaWhatsapp className="h-6 w-6" />
        <span className="hidden md:inline font-medium">
          {lang === "en" ? "Contact Us" : "Hubungi Kami"}
        </span>
      </a>
    </section>
  );
};

export default AboutBeyoutiful;
