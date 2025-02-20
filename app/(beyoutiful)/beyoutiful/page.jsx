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
import { headers } from "next/headers";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export async function generateMetadata({ searchParams }) {
  const { lang } = (await searchParams) || "id";
  const isEnglish = lang?.includes("en");

  return {
    title: isEnglish
      ? "Beyoutiful Aesthetic | Dermatology & Plastic Surgery"
      : "Beyoutiful | Klinik Dermatologi & Bedah Plastik Bintaro",
    description: isEnglish
      ? "Beyoutiful Aesthetic offers premium beauty solution with professional dermatology and plastic surgery in Bintaro, Jakarta."
      : "Beyoutiful Aesthetic, solusi kecantikan premium dengan layanan dermatologi dan bedah plastik profesional di Bintaro, Jakarta.",
    keywords: isEnglish
      ? [
          "Creative Space Bintaro",
          "Coworking Space Bintaro",
          "Meeting Room Rental Bintaro",
          "Event Space Bintaro",
          "Collaboration Space Bintaro",
          "Office Bintaro",
          "Space Rental Bintaro",
          "T-Space Bintaro",
        ]
      : [
          "Ruang Kreatif Bintaro",
          "Coworking Space Bintaro",
          "Sewa Ruang Meeting Bintaro",
          "Event Space Bintaro",
          "Ruang Kolaborasi Bintaro",
          "Kantor Bintaro",
          "Sewa Tempat Bintaro",
          "T-Space Bintaro",
        ],
    applicationName: "T-Space Bintaro",
    authors: [{ name: "T-Space Bintaro", url: "https://tspacebintaro.com" }],
    creator: "T-Space Bintaro",
    publisher: "T-Space Bintaro",
    metadataBase: new URL("https://tspacebintaro.com"),
    openGraph: {
      title: isEnglish
        ? "Beyoutiful Aesthetic | Dermatology & Plastic Surgery"
        : "Beyoutiful | Klinik Dermatologi & Bedah Plastik Bintaro",
      description: isEnglish
        ? "Beyoutiful Aesthetic offers premium beauty solution with professional dermatology and plastic surgery in Bintaro, Jakarta."
        : "Beyoutiful Aesthetic, solusi kecantikan premium dengan layanan dermatologi dan bedah plastik profesional di Bintaro, Jakarta.",
      url: "https://tspacebintaro.com",
      siteName: "T-Space Bintaro",
      images: [
        {
          url: "https://tspacebintaro.com/beyoutiful_orange.png",
          width: 1200,
          height: 630,
          alt: "Logo T-Space Bintaro",
        },
      ],
      locale: isEnglish ? "en-US" : "id-ID",
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

const page = () => {
  return (
    <div className="font-montserrat">
      <NavbarBeyoutiful />
      <HeroBeyoutiful />
      <AboutBeyoutiful />
      <Services bg="light" />
      <Facility />
      <DoctorSchedule bg="light" />
      <ContactBeyoutiful />
      {/* <Footer /> */}
    </div>
  );
};

export default page;
