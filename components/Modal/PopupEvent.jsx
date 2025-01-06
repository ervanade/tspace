'use client'
import React, { useEffect, useState } from "react";
import { FaCalendar, FaClock, FaEye, FaEyeSlash, FaTimes } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";

const PopupEvent = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

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
                className="relative max-w-4xl w-[80%] bg-slate-50 p-6 rounded-md m-4 overflow-y-auto max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-4 right-4 text-textDark text-2xl z-[51] bg-black/20 rounded-full p-2"
                  onClick={() => setIsDrawerOpen(false)}
                >
                  ✖
                </button>
                <h2 className="text-center header-title !text-secondary">This Week Event</h2>
         <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 w-full">
          {events.map((event) => (
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
        </div>
              </div>
          )}
    </>
  );
};

export default PopupEvent;
