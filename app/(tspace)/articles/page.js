import Articles from "@/components/articles/Articles";
import About from "@/components/beyoutiful/About";
import Contact from "@/components/contact/Contact";
import Event from "@/components/event/Event";
import Footer from "@/components/footer/Footer";
import Gallery from "@/components/gallery/Gallery";
import Hero from "@/components/hero/Hero";
import PopupEvent from "@/components/Modal/PopupEvent";
import Navbar from "@/components/navbar/Navbar";
import NavbarArticles from "@/components/navbar/NavbarArticles";
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
            <NavbarArticles className="" />
            <Articles />
            <Footer />

        </>
    );
}
