"use client";
import React, { useState } from "react";
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

const DoctorSchedule = ({ bg }) => {
  const [hoveredDate, setHoveredDate] = useState(null);
  const lang = useSelector((state) => state.lang.lang); // Get language from Redux store

  const daysInMonth = 31; // Sesuaikan dengan jumlah hari di bulan
  const startDay = 5; // Hari pertama bulan (0: Minggu, 1: Senin, dst.)
  //   const events = [
  //     { date: "2024-12-01", title: "Rock Fest 2024", time: "10:00 - 18:00" },
  //     { date: "2024-12-05", title: "Jazz Night Live", time: "10:00 - 18:00" },
  //     {
  //       date: "2024-12-10",
  //       title: "Indie Music Showcase",
  //       time: "10:00 - 18:00",
  //     },
  //     {
  //       date: "2024-12-15",
  //       title: "Electronic Dance Party",
  //       time: "10:00 - 18:00",
  //     },
  //     {
  //       date: "2024-12-20",
  //       title: "Classical Symphony Gala",
  //       time: "10:00 - 18:00",
  //     },
  //     {
  //       date: "2024-12-25",
  //       title: "Christmas Acoustic Night",
  //       time: "10:00 - 18:00",
  //     },
  //   ];
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const getEventByDate = (day) => {
    const date = `2024-12-${String(day).padStart(2, "0")}`;
    return events.find((event) => event.date === date);
  };

  const getDayName = (day) => {
    const date = new Date(`2024-12-${String(day).padStart(2, "0")}`);
    return daysOfWeek[date.getDay()]; // Menggunakan `getDay()` untuk mendapatkan indeks hari dalam minggu
  };
  const [currentPage, setCurrentPage] = useState(0);
  const eventsPerPage = 6;

  const handleNext = () => setCurrentPage((prev) => prev + 1);
  const handlePrevious = () => setCurrentPage((prev) => prev - 1);

  const startIndex = currentPage * eventsPerPage;
  const paginatedEvents = doctorSchedules.slice(
    startIndex,
    startIndex + eventsPerPage
  );
  const [activeTab, setActiveTab] = useState("Dokter Bedah Plastik");

  const categories = [...new Set(doctors.map((doctor) => doctor.kategori))];

  const handleTabClick = (category) => {
    setActiveTab(category);
  };
  const filteredDoctors = doctors.filter(
    (doctor) => doctor.kategori === activeTab
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
          <h1
            className={`title-beyoutiful !text-left ${
              bg === "light" ? "!text-secondary" : "!text-white"
            }  !font-semibold`}
          >
            {lang === "en" ? "Doctor Schedule" : "Jadwal Dokter"}
          </h1>
          <p
            className={`${
              bg === "light" ? "!text-textDark/80" : "!text-white/80"
            } sub-title !text-left`}
          >
            {lang === "en"
              ? "View our doctor's schedules and book your consultation online today."
              : "Lihat jadwal dokter kami dan pesan konsultasi Anda secara online hari ini."}
          </p>
        </div>

        <div className="mb-6">
          <div className="flex space-x-4 overflow-x-auto whitespace-nowrap !no-scrollbar">
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
          {filteredDoctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-secondary rounded-lg shadow-md p-4 hover:shadow-lg transition cursor-pointer"
            >
              <h3 className="text-lg font-semibold text-white mb-2">
                {doctor.nama}
              </h3>
              <p className="text-sm text-white font-semibold">
                {doctor.subKategori}
              </p>
              <p className="text-sm text-white">{doctor.jadwal}</p>
              {/* <div className="mt-2 text-gray-800 text-sm">
                <p>Born: {doctor.tanggalLahir}</p>
                <p>Religion: {doctor.agama}</p>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorSchedule;
