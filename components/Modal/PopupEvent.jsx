"use client";
import React, { useEffect, useState } from "react";
import {
  FaCalendar,
  FaClock,
  FaEye,
  FaEyeSlash,
  FaTimes,
} from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import Image from "next/image"; // Import Image dari Next.js

const PopupEvent = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const events = [
    {
      id: 1,
      day: "Rabu",
      date: "",
      title: "Vocal Clinic",
      subtitle: "Music",
      location: "T-Studio",
      time: "16.00 - 18.00",
      image: "/assets/event/vocal-clinic.jpg",
    },
    {
      id: 2,
      day: "Rabu",
      date: "",
      title: "Jazzed Up Wednesday",
      subtitle: "Music",
      location: "T-Hall",
      time: "20.00 - 22.00",
      image: "/assets/event/jazzed.jpg",
    },
    {
      id: 3,
      day: "Kamis",
      date: "",
      title: "Jajal Panggung",
      subtitle: "Music",
      location: "T-Hall",
      time: "19.00 - 22.00",
      image: "/assets/event/jajal-panggung.jpg",
    },
    {
      id: 4,
      day: "Jumat",
      date: "",
      title: "KAMASOGI",
      subtitle: "Music",
      location: "T-Hall",
      time: "19.00 - 22.00",
      image: "/assets/event/kamasogi.jpg",
    },
    // {
    //   id: 5,
    //   day: "Fri",
    //   date: "26 Jan 2025",
    //   title: "Tech Meetup",
    //   subtitle: "Future of Tech",
    //   location: "T-Studio",
    //   time: "09:00 - 16:00",
    //   image: "/hero-1.png",
    // },
    // {
    //   id: 6,
    //   day: "Fri",
    //   date: "26 Jan 2025",
    //   title: "Music & Event",
    //   subtitle: "Future of Tech",
    //   location: "T-Studio",
    //   time: "09:00 - 16:00",
    //   image: "/hero-4.png",
    // },
  ];

  useEffect(() => {
    // Set drawer open only after the component has mounted
    setIsDrawerOpen(true);
  }, []);

  if (!isDrawerOpen) {
    return null;
  }

  return (
    <>
      {isDrawerOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 overflow-y-auto"
          onClick={() => setIsDrawerOpen(false)}
        >
          <div
            className="relative max-w-3xl 2xl:max-w-4xl w-[80%] bg-white p-6 rounded-md m-4 overflow-y-auto max-h-[85vh] sm:max-h-[90vh] shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              aria-label="button"
              className="absolute top-4 right-4 text-gray-600 text-2xl z-[51] bg-gray-200 hover:bg-gray-300 rounded-full p-2"
              onClick={() => setIsDrawerOpen(false)}
            >
              ✖
            </button>
            <h2 className="header-title !text-secondary">EVENTS THIS WEEK</h2>

            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
                >
                  {/* Gambar */}
                  <div className="w-full aspect-square overflow-hidden">
                    <Image
                      src={event.image} // URL gambar event
                      alt={event.title}
                      width={500}
                      height={500}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Deskripsi */}
                  <div className="p-4">
                    <h3 className="text-sm font-semibold text-orange-600 mb-2">
                      {event.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      {event.subtitle}
                    </p>
                    <div className="text-gray-800 text-sm space-y-2">
                      <p className="flex items-center">
                        <FaCalendar className="h-5 w-5 text-gray-500 mr-2" />
                        {event.day}, {event.date}
                      </p>
                      <p className="flex items-center">
                        <FaLocationPin className="h-5 w-5 text-gray-500 mr-2" />
                        {event.location}
                      </p>
                      <p className="flex items-center">
                        <FaClock className="h-5 w-5 text-gray-500 mr-2" />
                        {event.time}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupEvent;
