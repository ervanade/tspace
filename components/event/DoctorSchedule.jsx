"use client";
import React, { useEffect, useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCalendar,
  FaClock,
  FaMap,
} from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { doctors } from "@/public/data";
import parse from "html-react-parser";
const HTMLDecoderEncoder = require("html-encoder-decoder");

const doctorSchedules = [
  {
    id: 1,
    day: "Monday",
    title: "Bedah Plastik",
    subtitle: "Consultation & Surgery",
    location: "T-Space Clinic",
    time: "09:00 - 12:00",
    doctor: "Dr. John Doe",
  },
  {
    id: 2,
    day: "Tuesday",
    title: "Perawatan Estetika",
    subtitle: "Facial & Skin Care",
    location: "T-Space Aesthetic Center",
    time: "10:00 - 14:00",
    doctor: "Dr. Jane Smith",
  },
  {
    id: 3,
    day: "Wednesday",
    title: "Bedah Vaskular",
    subtitle: "Vascular Surgery Consultation",
    location: "T-Space Medical Center",
    time: "08:00 - 11:00",
    doctor: "Dr. Michael Lee",
  },
  {
    id: 4,
    day: "Thursday",
    title: "Urologi",
    subtitle: "Men's Health Consultation",
    location: "T-Space Health Clinic",
    time: "13:00 - 16:00",
    doctor: "Dr. Sarah White",
  },
  {
    id: 5,
    day: "Friday",
    title: "Ortopedi",
    subtitle: "Bone & Joint Consultation",
    location: "T-Space Orthopedic Center",
    time: "09:00 - 12:00",
    doctor: "Dr. James Brown",
  },
  {
    id: 6,
    day: "Saturday",
    title: "Klinik Gigi",
    subtitle: "Dental Check-up & Treatment",
    location: "T-Space Dental Clinic",
    time: "10:00 - 13:00",
    doctor: "Dr. Emily Green",
  },
  // {
  //   id: 7,
  //   day: "Monday",
  //   title: "Sleep Therapy",
  //   subtitle: "Consultation for Sleep Disorders",
  //   location: "T-Space Wellness Center",
  //   time: "14:00 - 17:00",
  //   doctor: "Dr. Chris Adams",
  // },
  // {
  //   id: 8,
  //   day: "Tuesday",
  //   title: "Hyperbaric Oxygen Therapy",
  //   subtitle: "Oxygen Therapy Sessions",
  //   location: "T-Space Hyperbaric Center",
  //   time: "08:00 - 12:00",
  //   doctor: "Dr. Linda Carter",
  // },
  // {
  //   id: 9,
  //   day: "Wednesday",
  //   title: "Slimming & Obesity Centre",
  //   subtitle: "Weight Loss Consultation",
  //   location: "T-Space Slimming Clinic",
  //   time: "10:00 - 14:00",
  //   doctor: "Dr. Robert King",
  // },
];

const DoctorSchedule = ({ bg, data }) => {
  const lang = useSelector((state) => state.lang.lang); // Get language from Redux store
  const [activeTab, setActiveTab] = useState(
    lang === "en" ? "Plastic Surgeon" : "Bedah Plastik"
  );
  const removeTags = (html) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    return tempDiv.textContent || tempDiv.innerText || "";
  };
  const dataDoctors = data?.data || null;
  const metaData = data?.metadata || null;
  const translateDay = (schedule) => {
    if (lang !== "en") return schedule; // Jika lang bukan 'en', langsung return jadwal asli

    const dayMap = {
      Senin: "Monday",
      Selasa: "Tuesday",
      Rabu: "Wednesday",
      Kamis: "Thursday",
      Jumat: "Friday",
      Sabtu: "Saturday",
      Minggu: "Sunday",
    };

    // Ganti setiap nama hari yang ditemukan
    return schedule?.replace(
      /\b(Senin|Selasa|Rabu|Kamis|Jumat|Sabtu|Minggu)\b/g,
      (match) => dayMap[match]
    );
  };
  // Ambil kategori berdasarkan bahasa
  const doctorsData = dataDoctors ? dataDoctors : doctors;
  const categories = [
    ...new Set(
      doctorsData?.map((doctor) =>
        lang === "en" ? doctor?.kategori_en : doctor?.kategori
      )
    ),
  ];
  useEffect(() => {
    setActiveTab(lang === "en" ? "Plastic Surgeon" : "Bedah Plastik");
  }, [lang]); // Dependency array: jika `lang` berubah, jalankan efek ini

  const handleTabClick = (category) => {
    setActiveTab(category);
  };

  // Filter dokter berdasarkan kategori yang dipilih (sesuai bahasa)
  const filteredDoctors = doctorsData?.filter((doctor) =>
    lang === "en"
      ? doctor?.kategori_en === activeTab
      : doctor?.kategori === activeTab
  );

  return (
    <section
      className={`w-full ${
        bg === "light" ? "bg-white text-textDark" : "bg-secondary text-white"
      } bg-cover bg-center py-12 md:py-16 xl:py-20 px-6 scroll-mt-12`}
      id="doctor-schedules"
    >
      <div className="max-w-[1280px] mx-auto w-full overflow-hidden">
        {/* Calendar */}
        <div className="mb-12">
          {metaData?.title_id && metaData?.title_en ? (
            <h1
              className={`title-beyoutiful !text-left ${
                bg === "light" ? "!text-secondary" : "!text-white"
              }  !font-semibold`}
            >
              {lang === "en" ? metaData?.title_en : metaData?.title_id}
            </h1>
          ) : (
            <h1
              className={`title-beyoutiful !text-left ${
                bg === "light" ? "!text-secondary" : "!text-white"
              }  !font-semibold`}
            >
              {lang === "en" ? "Doctor Schedule" : "Jadwal Dokter"}
            </h1>
          )}
          {metaData?.subtitle_id && metaData?.subtitle_en ? (
            lang === "en" ? (
              parse(HTMLDecoderEncoder.decode(metaData?.subtitle_en))
            ) : (
              parse(HTMLDecoderEncoder.decode(metaData?.subtitle_id))
            )
          ) : (
            <p
              className={`${
                bg === "light" ? "!text-textDark/80" : "!text-white/80"
              } sub-title !text-left`}
            >
              {lang === "en"
                ? "View our doctor's schedules and book your consultation online today."
                : "Lihat jadwal dokter kami dan pesan konsultasi Anda secara online hari ini."}
            </p>
          )}
        </div>

        <div className="mb-6">
          <div className="flex space-x-4 overflow-x-auto whitespace-nowrap no-scrollbar sm:scrollbar sm:overflow-x-scroll">
            {categories.map((category, index) => (
              <button
                aria-label="button"
                key={index}
                className={`px-4 py-2 text-sm font-semibold rounded-lg ${
                  activeTab === category
                    ? "bg-secondary text-white"
                    : "bg-gray-200 text-textDark"
                }`}
                onClick={() => handleTabClick(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredDoctors.map((doctor, index) => (
            <div
              key={index}
              className="bg-secondary rounded-lg shadow-md p-4 hover:shadow-lg transition cursor-pointer"
            >
              {dataDoctors ? (
                <>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {doctor.name}
                  </h3>
                  <p className="text-sm text-white font-semibold">
                    {doctor.subtitle}
                  </p>
                  {doctor.content_id && doctor.content_en ? (
                    <p className="text-sm text-white">
                      {lang === "en"
                        ? removeTags(
                            HTMLDecoderEncoder.decode(doctor?.content_en)
                          )
                        : removeTags(
                            HTMLDecoderEncoder.decode(doctor?.content_id)
                          )}
                    </p>
                  ) : (
                    ""
                  )}
                </>
              ) : (
                <>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {doctor.nama}
                  </h3>
                  <p className="text-sm text-white font-semibold">
                    {doctor.subKategori}
                  </p>
                  <p className="text-sm text-white">
                    {" "}
                    {translateDay(doctor.jadwal)}
                  </p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorSchedule;
