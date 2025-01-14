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
    </div>
  );
};

export default page;
