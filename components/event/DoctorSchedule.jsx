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
const doctorSchedules = [
  {
    id: 1,
    day: "Mon",
    date: "01 Jan 2025",
    title: "Bedah Plastik",
    subtitle: "Consultation & Surgery",
    location: "T-Space Clinic",
    time: "09:00 - 12:00",
  },
  {
    id: 2,
    day: "Tue",
    date: "02 Jan 2025",
    title: "Perawatan Estetika",
    subtitle: "Facial & Skin Care",
    location: "T-Space Aesthetic Center",
    time: "10:00 - 14:00",
  },
  {
    id: 3,
    day: "Wed",
    date: "03 Jan 2025",
    title: "Bedah Vaskular",
    subtitle: "Vascular Surgery Consultation",
    location: "T-Space Medical Center",
    time: "08:00 - 11:00",
  },
  {
    id: 4,
    day: "Thu",
    date: "04 Jan 2025",
    title: "Urologi",
    subtitle: "Men's Health Consultation",
    location: "T-Space Health Clinic",
    time: "13:00 - 16:00",
  },
  {
    id: 5,
    day: "Fri",
    date: "05 Jan 2025",
    title: "Ortopedi",
    subtitle: "Bone & Joint Consultation",
    location: "T-Space Orthopedic Center",
    time: "09:00 - 12:00",
  },
  {
    id: 6,
    day: "Sat",
    date: "06 Jan 2025",
    title: "Klinik Gigi",
    subtitle: "Dental Check-up & Treatment",
    location: "T-Space Dental Clinic",
    time: "10:00 - 13:00",
  },
  {
    id: 7,
    day: "Mon",
    date: "08 Jan 2025",
    title: "Sleep Therapy",
    subtitle: "Consultation for Sleep Disorders",
    location: "T-Space Wellness Center",
    time: "14:00 - 17:00",
  },
  {
    id: 8,
    day: "Tue",
    date: "09 Jan 2025",
    title: "Hyperbaric Oxygen Therapy",
    subtitle: "Oxygen Therapy Sessions",
    location: "T-Space Hyperbaric Center",
    time: "08:00 - 12:00",
  },
  {
    id: 9,
    day: "Wed",
    date: "10 Jan 2025",
    title: "Slimming & Obesity Centre",
    subtitle: "Weight Loss Consultation",
    location: "T-Space Slimming Clinic",
    time: "10:00 - 14:00",
  },
];

const DoctorSchedule = () => {
  const [hoveredDate, setHoveredDate] = useState(null);

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
  return (
    <section className="w-full bg-[#EE5A2A] bg-cover bg-center py-12 md:py-16 xl:py-20 px-6 text-[#fff] scroll-mt-12">
      <div className="mb-12">
        <h1 className="title-beyoutiful !text-[#fff]">Doctor Schedule</h1>
        <p className="!text-white/80 sub-title">
          Find Out When Your Preferred Specialist Is Available
        </p>
      </div>
      <div className="max-w-[1280px] mx-auto w-full overflow-hidden">
        {/* Calendar */}

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {paginatedEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-orange-600">
                {event.title}
              </h3>
              <p className="text-sm text-gray-600">{event.subtitle}</p>
              <div className="mt-2 text-gray-800 text-sm space-y-2">
                <p className="flex items-center">
                  <FaCalendar className="h-5 w-5 text-[#303638] mr-2" />
                  {event.day}, {event.date}
                </p>
                <p className="flex items-center">
                  <FaLocationPin className="h-5 w-5 text-[#303638] mr-2" />
                  {event.location}
                </p>
                <p className="flex items-center">
                  <FaClock className="h-5 w-5 text-[#303638] mr-2" />
                  {event.time}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-4">
          {currentPage > 0 && (
            <button
              className="px-4 py-2 bg-[#fff] text-[#303638] rounded-lg shadow font-bold"
              onClick={handlePrevious}
            >
              Previous
            </button>
          )}
          {startIndex + eventsPerPage < doctorSchedules.length && (
            <button
              className="px-4 py-2 bg-[#fff] text-[#303638] rounded-lg shadow font-bold"
              onClick={handleNext}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default DoctorSchedule;
