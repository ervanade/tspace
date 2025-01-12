"use client";
import Image from "next/image";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useSelector } from "react-redux";

const Tenants = () => {
  const lang = useSelector((state) => state.lang.lang); // Get language from Redux store

  const content = {
    elprofessor: {
      title: "El Professor",
      desc: "Menu El Profesor berfokus pada steak daging sapi, daging panggang, dan slider. Bagi yang tidak makan daging, El Profesor menawarkan pilihan Salad Mediterania, Pasta Seafood, Mac & Cheese Parmigiano, dan pilihan Nasi Goreng Indonesia. Minuman disiapkan oleh para barista, yang menawarkan berbagai minuman, mulai dari koktail khas hingga kopi spesial dari Javanegra.",
      desc_en:
        "El Profesor’s menu focuses on beef steaks, grilled meats, and sliders. As for non-meat-eaters, El Profesor offers a selection of Mediterranean Salads, Seafood Pasta, Mac & Cheese Parmigiano, and choices of Indonesian Fried Rice. Drinks are prepared by the baristas, offering a variety of beverages, from signature cocktails to specialty coffee by Javanegra.",
      link_web:
        "https://www.javanegragourmet.com/outlets/el-profesor-steakhouse/",
      link_wa: "https://wa.me/+6281222812023",
    },
    rejuve: {
      title: "RE.JUVE",
      desc: "Re.Juve Cold Pressed Juice menyajikan jus dan smoothie hasil perasan dingin yang segar, sehat, dan lezat untuk T-Space. Siap membuat pengunjung kami tetap bersemangat dan terinspirasi.",
      desc_en:
        "Re.Juve Cold Pressed Juice provides fresh, healthy, and delicious cold-pressed juices and smoothies to T-Space, keeping our community fueled and inspired.",
      link_web: "https://rejuve.co.id/",
      link_wa: "https://wa.me/+6281222812023",
    },
    dental: {
      title: "BEYOUTIFUL DENTAL CLINIC",
      desc: "Berlokasi strategis di dalam T-Space, Beyoutiful Dental Clinic menyediakan akses mudah ke perawatan gigi berkualitas tinggi bagi masyarakat sekitar.",
      desc_en:
        "Conveniently located within T-Space, Beyoutiful Dental Clinic provides easy access to high-quality dental care for our surrounding community.",
      link_web: "https://www.instagram.com/dental.beyoutiful/?hl=en",
      link_wa: "https://wa.me/+6281222812023",
      logo: "/assets/dental_logo.sxv",
    },
  };
  return (
    <section
      className="py-12 md:py-16 xl:py-20 relative scroll-mt-12"
      id="our-tenant"
    >
      <div className="w-full max-w-6xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="mb-16">
          <h1 className="header-title !text-textDark">
            {lang === "en" ? "Our Tenant" : "Tenant Kamu"}
          </h1>
          <p className="sub-title">
            {lang === "en"
              ? "Learn more about variety of services available at T-Space"
              : "Berbagai layanan yang tersedia di T-Space"}
          </p>
        </div>
        <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
          <div className="relative w-2/3 lg:w-4/5 h-full rounded-3xl lg:px-4 overflow-hidden mx-auto lg:ml-0">
            <Image
              src="/assets/elprofesor.png"
              alt="about Us image"
              layout="responsive"
              width={388} // Set the actual width of the image
              height={484} // Set the actual height of the image
              className="object-cover"
            />
          </div>
          <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
            <div className="w-full flex-col justify-start lg:items-start items-center flex">
              <h2 className="!text-textDark header-title">El Professor</h2>
              <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                {lang === "en"
                  ? content.elprofessor.desc_en
                  : content.elprofessor.desc}
              </p>
              {/* <Image
            src="/beyoutiful_logo.png"
            alt="Logo Beyoutiful"
            width={204}
            height={96}
          /> */}
              <Image
                src="/elprofessor_logo.svg"
                alt="Logo Beyoutiful"
                width={120}
                height={80}
                className="mt-4"
              />
            </div>
            {/* <button className="sm:w-fit w-full px-3.5 py-2 bg-orange-600 hover:bg-orange-800 transition-all duration-700 ease-in-out rounded-full shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                        <span className="px-1.5 text-white text-sm font-medium leading-6">View More</span>
                    </button> */}

            <div className="flex items-center gap-2">
              <a
                className="align-middle select-none font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-full bg-[#303638] text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                href={content.elprofessor.link_web}
                target="_blank"
                rel="noopener noreferrer"
              >
                View More
              </a>
              <a
                href={content.elprofessor.link_wa}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-5 rounded-full flex items-center gap-2"
              >
                <FaWhatsapp className="h-5 w-5" />
                <span className="hidden md:inline font-bold">Contact</span>
              </a>
            </div>
          </div>
        </div>

        <div className="w-full justify-start items-center mt-12 gap-8 grid lg:grid-cols-2 grid-cols-1">
          <div className="order-first lg:order-last relative mx-auto lg:mr-0 w-2/3 lg:w-4/5 h-full rounded-3xl lg:px-4 overflow-hidden">
            <Image
              src="/assets/rejuve.png"
              alt="about Us image"
              layout="responsive"
              width={388} // Set the actual width of the image
              height={484} // Set the actual height of the image
              className="object-cover"
            />
          </div>
          <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
            <div className="w-full flex-col justify-start lg:items-start items-center flex">
              <h2 className="!text-textDark header-title">Re.Juve</h2>
              <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                {lang === "en" ? content.rejuve.desc_en : content.rejuve.desc}
              </p>
              {/* <Image
            src="/beyoutiful_logo.png"
            alt="Logo Beyoutiful"
            width={204}
            height={96}
          /> */}
              <Image
                src="/rejuve_logo.svg"
                alt="Logo Rejuve"
                width={120}
                height={80}
                className="mt-4"
              />
            </div>
            {/* <button className="sm:w-fit w-full px-3.5 py-2 bg-orange-600 hover:bg-orange-800 transition-all duration-700 ease-in-out rounded-full shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                        <span className="px-1.5 text-white text-sm font-medium leading-6">View More</span>
                    </button> */}

            <div className="flex items-center gap-2">
              <a
                className="align-middle select-none font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-full bg-[#303638] text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                href={content.rejuve.link_web}
                target="_blank"
                rel="noopener noreferrer"
              >
                View More
              </a>
            </div>
          </div>
        </div>

        <div className="w-full justify-start items-center mt-12 gap-8 grid lg:grid-cols-2 grid-cols-1">
          <div className="relative mx-auto lg:ml-0 w-2/3 lg:w-4/5 h-full rounded-3xl lg:px-4 overflow-hidden">
            <Image
              src="/assets/dental.png"
              alt="about Us image"
              layout="responsive"
              width={388} // Set the actual width of the image
              height={484} // Set the actual height of the image
              className="object-cover"
            />
          </div>
          <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
            <div className="w-full flex-col justify-start lg:items-start items-center flex">
              <h2 className="!text-textDark header-title">
                BEYOUTIFUL DENTAL CLINIC{" "}
              </h2>
              <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                {lang === "en" ? content.dental.desc_en : content.dental.desc}
              </p>
              {/* <Image
            src="/beyoutiful_logo.png"
            alt="Logo Beyoutiful"
            width={204}
            height={96}
          /> */}
              <Image
                src="/assets/dental_logo.svg"
                alt="Logo Beyoutiful Dental"
                width={186}
                height={48}
                className="mt-4"
              />
            </div>
            {/* <button className="sm:w-fit w-full px-3.5 py-2 bg-orange-600 hover:bg-orange-800 transition-all duration-700 ease-in-out rounded-full shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                        <span className="px-1.5 text-white text-sm font-medium leading-6">View More</span>
                    </button> */}

            <div className="flex items-center gap-2">
              <a
                className="align-middle select-none font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-full bg-[#303638] text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                href={content.dental.link_web}
                target="_blank"
                rel="noopener noreferrer"
              >
                View More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tenants;
