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
const events = [
  {
    id: 1,
    day: "Sat",
    date: "23 Dec 2024",
    title: "Christmas Celebration",
    subtitle: "Night of Joy",
    location: "T-Space Hall",
    time: "18:00 - 22:00",
  },
  {
    id: 2,
    day: "Sun",
    date: "31 Dec 2024",
    title: "New Year Eve Party",
    subtitle: "Countdown 2025",
    location: "T-Space Rooftop",
    time: "20:00 - 00:30",
  },
  {
    id: 3,
    day: "Sat",
    date: "13 Jan 2025",
    title: "Art Festival",
    subtitle: "Art & Music",
    location: "T-Garden",
    time: "14:00 - 22:00",
  },
  {
    id: 4,
    day: "Fri",
    date: "26 Jan 2025",
    title: "Tech Meetup",
    subtitle: "Future of Tech",
    location: "T-Studio",
    time: "09:00 - 16:00",
  },
  {
    id: 5,
    day: "Thu",
    date: "02 Feb 2025",
    title: "Cultural Night",
    subtitle: "Local Culture",
    location: "T-Hall",
    time: "19:00 - 23:00",
  },
  {
    id: 6,
    day: "Wed",
    date: "10 Feb 2025",
    title: "Startup Expo",
    subtitle: "Tech Showcase",
    location: "T-Space",
    time: "10:00 - 18:00",
  },
  {
    id: 7,
    day: "Wed",
    date: "10 Feb 2025",
    title: "Startup Expo",
    subtitle: "Tech Showcase",
    location: "T-Space",
    time: "10:00 - 18:00",
  },
  {
    id: 8,
    day: "Wed",
    date: "10 Feb 2025",
    title: "Startup Expo",
    subtitle: "Tech Showcase",
    location: "T-Space",
    time: "10:00 - 18:00",
  },
];

const Event = () => {
  const [hoveredDate, setHoveredDate] = useState(null);

  const daysInMonth = 31; // Sesuaikan dengan jumlah hari di bulan
  const startDay = 5; // Hari pertama bulan (0: Minggu, 1: Senin, dst.)
  const events = [
    { date: "2024-12-01", title: "Rock Fest 2024", time: "10:00 - 18:00" },
    { date: "2024-12-05", title: "Jazz Night Live", time: "10:00 - 18:00" },
    {
      date: "2024-12-10",
      title: "Indie Music Showcase",
      time: "10:00 - 18:00",
    },
    {
      date: "2024-12-15",
      title: "Electronic Dance Party",
      time: "10:00 - 18:00",
    },
    {
      date: "2024-12-20",
      title: "Classical Symphony Gala",
      time: "10:00 - 18:00",
    },
    {
      date: "2024-12-25",
      title: "Christmas Acoustic Night",
      time: "10:00 - 18:00",
    },
  ];
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
  const paginatedEvents = events.slice(startIndex, startIndex + eventsPerPage);

  return (
    <section className="w-full bg-[#EE5A2A] bg-cover bg-center py-12 md:py-16 xl:py-20 px-6 text-[#fff] scroll-mt-12">
      <div className="mb-12">
        <h1 className="header-title !text-[#fff]">Upcoming Events</h1>
        <p className="!text-white/80 sub-title">
          Here are some upcoming events in T-Space, Bintaro:
        </p>
      </div>
      <div className="max-w-[1280px] mx-auto w-full overflow-hidden">
        {/* Calendar */}
        <div className="bg-white rounded-xl p-4">
          <div className="flex justify-between items-center mb-4">
            <button className="text-gray-500 hover:text-gray-700">
              <FaArrowLeft />
            </button>
            <h2 className="text-xl font-semibold text-textDark">
              December 2024
            </h2>
            <button className="text-gray-500 hover:text-gray-700">
              <FaArrowRight />
            </button>
          </div>
          <div className="grid grid-cols-7 gap-2">
            {Array.from({ length: startDay }).map((_, i) => (
              <div key={`empty-${i}`} className="h-16"></div>
            ))}
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const day = i + 1;
              const event = getEventByDate(day);

              return (
                <div
                  key={`day-${day}`}
                  className={`h-16 flex justify-center items-center rounded-lg cursor-pointer transition-all ${
                    event
                      ? "bg-orange-500 text-white"
                      : "bg-gray-200 text-gray-700"
                  } hover:shadow-md`}
                  onMouseEnter={() => setHoveredDate(day)}
                  onMouseLeave={() => setHoveredDate(null)}
                >
                  {day}
                </div>
              );
            })}
          </div>
          {hoveredDate ? (
            <div className="mt-4 p-4 bg-white text-textDark border rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-orange-500">
                {getEventByDate(hoveredDate)?.title || "No Event"}
              </h3>
              <p className="flex items-center">
                <FaCalendar className="h-5 w-5 text-textDark mr-2" />
                {`${getDayName(hoveredDate)}, 2024-12-${String(
                  hoveredDate
                ).padStart(2, "0")}`}{" "}
                {/* Menampilkan Hari, Tanggal */}
              </p>
              <p className="flex items-center">
                <FaClock className="h-5 w-5 text-textDark mr-2" />
                {getEventByDate(hoveredDate)?.time || "No Event"}
              </p>
            </div>
          ) : (
            <div className="mt-4 p-4 bg-white text-textDark border rounded-lg shadow-lg h-20">
              {" "}
              <p className="text-center">Hover Date to see upcoming events</p>
            </div>
          )}
        </div>
        {/* <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
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
          {startIndex + eventsPerPage < events.length && (
            <button
              className="px-4 py-2 bg-[#fff] text-[#303638] rounded-lg shadow font-bold"
              onClick={handleNext}
            >
              Next
            </button>
          )}
        </div> */}
      </div>
    </section>
  );
};

export default Event;
