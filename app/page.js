import About from "@/components/beyoutiful/About";
import Event from "@/components/event/Event";
import Gallery from "@/components/gallery/Gallery";
import Hero from "@/components/hero/Hero";
import RecomendedArticles from "@/components/recomended/RecomendedArticles";
import Space from "@/components/space/Space";
import Tenants from "@/components/tenants/Tenants";
import Image from "next/image";
import { FaIcons, FaWhatsapp } from "react-icons/fa";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Event />
      <Space />
      <Tenants />
      <Gallery />
      <RecomendedArticles />
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
    </>
  );
}
