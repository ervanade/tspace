import AboutBeyoutiful from "@/components/beyoutiful/AboutBeyoutiful";
import ContactBeyoutiful from "@/components/contact/ContactBeyoutiful";
import DoctorSchedule from "@/components/event/DoctorSchedule";
import Facility from "@/components/facility/Facility";
import Footer from "@/components/footer/Footer";
import HeroBeyoutiful from "@/components/hero/HeroBeyoutiful";
import NavbarBeyoutiful from "@/components/navbar/NavbarBeyoutiful";
import Services from "@/components/services/Services";
import React from "react";
import { FaIcons, FaWhatsapp } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const page = () => {
  return (
    <div className="font-montserrat">
      <NavbarBeyoutiful />
      <HeroBeyoutiful />
      <AboutBeyoutiful />
      <Services />
      <Facility />
      <DoctorSchedule />
      <ContactBeyoutiful />
      <Footer />
      <a
        href="https://wa.me/+621181110556
"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-white text-textDark p-4 rounded-full shadow-lg transition duration-300 flex items-center gap-2 md:gap-3"
      >
        <FaWhatsapp className="h-6 w-6" />
        <span className="hidden md:inline font-medium">Hubungi Kami</span>
      </a>
    </div>
  );
};

export default page;
