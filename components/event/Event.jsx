"use client";
import React, { useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaCalendar,
  FaClock,
  FaMap,
  FaWhatsapp,
} from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { useSelector } from "react-redux";
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
  const [selectedDate, setSelectedDate] = useState(null);
  const lang = useSelector((state) => state.lang.lang); // Get language from Redux store

  const daysInMonth = 28; // Jumlah hari dalam bulan
  const startDay = 5; // Hari pertama bulan (0: Minggu, 1: Senin, dst.)

  const events = [
    {
      date: "2025-02-12",
      title: "Vocal Clinic with Bertha",
      time: "16:00 - 18:00",
    },
    { date: "2025-02-12", title: "Jazzed Up Wednesday", time: "20:00 - 22:00" },
    {
      date: "2025-02-19",
      title: "Vocal Clinic with Bertha",
      time: "16:00 - 18:00",
    },
    { date: "2025-02-19", title: "Jazzed Up Wednesday", time: "20:00 - 22:00" },
    {
      date: "2025-02-26",
      title: "Vocal Clinic with Bertha",
      time: "16:00 - 18:00",
    },
    { date: "2025-02-26", title: "Jazzed Up Wednesday", time: "20:00 - 22:00" },
    {
      date: "2025-02-13",
      title: "Jajal Panggung - Aquarius Nite",
      time: "19:00 - 21:00",
    },
    {
      date: "2025-02-20",
      title: "Jajal Panggung - Highschool Nite",
      time: "19:00 - 21:00",
    },
    {
      date: "2025-02-27",
      title: "Jajal Panggung Special - Voxxes",
      time: "19:00 - 21:00",
    },
    {
      date: "2025-02-14",
      title: "KAMASOGI - Love Songs",
      time: "19:00 - 21:00",
    },
    { date: "2025-02-21", title: "KAMASOGI", time: "19:00 - 21:00" },
    {
      date: "2025-02-23",
      title: "BSJ Bands & Soloist Live Music Performance",
      time: "14.00",
    },
    {
      date: "2025-02-28",
      title: "Home Concert Talenta Svara Bertha",
      time: "19:00 - 21:00",
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
  const hariOfWeek = [
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat",
    "Sabtu",
  ];

  const getEventByDate = (day) => {
    const date = `2025-02-${String(day).padStart(2, "0")}`;
    return events.filter((event) => event.date === date);
  };

  const getDayName = (day) => {
    const date = new Date(`2025-02-${String(day).padStart(2, "0")}`);
    return lang === "en"
      ? daysOfWeek[date.getDay()]
      : hariOfWeek[date.getDay()];
  };

  const handleMouseEnter = (day) => {
    setHoveredDate(day);
  };

  const handleMouseLeave = () => {
    setHoveredDate(null);
  };

  const handleClick = (day) => {
    setSelectedDate(day);
  };

  return (
    <section className="w-full bg-[#EE5A2A] bg-cover bg-center py-12 md:py-16 xl:py-20 px-6 text-[#fff] scroll-mt-12">
      <div className="mb-12">
        <h1 className="header-title !text-[#fff]">
          {lang === "en" ? "Event Schedule" : "Jadwal Acara"}
        </h1>
        <p className="!text-white/80 sub-title">
          {lang === "en"
            ? "Event at T-Space Bintaro this month:"
            : "Acara di T-Space Bintaro selama bulan ini:"}
        </p>
      </div>
      <div className="max-w-[1280px] mx-auto w-full overflow-hidden">
        {/* Calendar */}
        <div className="bg-white rounded-xl p-4">
          <div className="flex justify-between items-center mb-4">
            <button
              aria-label="button"
              className="text-gray-500 hover:text-gray-700"
            >
              <FaArrowLeft />
            </button>
            <h2 className="text-xl font-semibold text-textDark">
              Februari 2025
            </h2>
            <button
              aria-label="button"
              className="text-gray-500 hover:text-gray-700"
            >
              <FaArrowRight />
            </button>
          </div>
          <div className="grid grid-cols-7 gap-2">
            {Array.from({ length: startDay }).map((_, i) => (
              <div key={`empty-${i}`} className="h-16"></div>
            ))}
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const day = i + 1;
              const event = getEventByDate(day).length > 0;
              const isActive = selectedDate === day || hoveredDate === day;
              const hasEvent = !!event;

              return (
                <div
                  key={`day-${day}`}
                  className={`h-16 flex justify-center items-center rounded-lg cursor-pointer transition-all 
                    ${
                      hasEvent
                        ? "bg-orange-500 text-white"
                        : "bg-gray-200 text-gray-700"
                    } 
                    ${
                      isActive ? "bg-orange-600 text-white" : ""
                    } hover:shadow-md`}
                  onMouseEnter={() => handleMouseEnter(day)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleClick(day)}
                >
                  {day}
                </div>
              );
            })}
          </div>

          {/* Event Detail Section */}
          {selectedDate || hoveredDate ? (
            <div className="mt-4 p-4 bg-white text-textDark border rounded-lg shadow-lg">
              {getEventByDate(hoveredDate || selectedDate).length > 0 ? (
                getEventByDate(hoveredDate || selectedDate).map(
                  (event, index) => (
                    <div key={index} className="mb-2">
                      <h3 className="text-lg font-semibold text-orange-500">
                        {event.title}
                      </h3>
                      <p className="flex items-center">
                        <FaCalendar className="h-5 w-5 text-textDark mr-2" />
                        {`${getDayName(
                          hoveredDate || selectedDate
                        )}, 2025-02-${String(
                          hoveredDate || selectedDate
                        ).padStart(2, "0")}`}
                      </p>
                      <p className="flex items-center">
                        <FaClock className="h-5 w-5 text-textDark mr-2" />
                        {event.time}
                      </p>
                      {index ==
                        getEventByDate(hoveredDate || selectedDate).length -
                          1 && (
                        <a
                          href="https://wa.me/+621181110556"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2 text-sm bg-green-500 text-white py-3 px-4 rounded-full shadow-lg transition duration-300 inline-flex items-center gap-2"
                        >
                          <FaWhatsapp className="h-6 w-6" />
                          <span className="hidden md:inline font-medium">
                            {lang === "en" ? "Contact Us" : "Hubungi Kami"}
                          </span>
                        </a>
                      )}
                    </div>
                  )
                )
              ) : (
                <p className="text-center">No Event</p>
              )}
            </div>
          ) : (
            <div className="mt-4 p-4 bg-white text-textDark border rounded-lg shadow-lg h-20">
              <p className="text-center">Hover Date to see upcoming events</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Event;
