import About from "@/components/beyoutiful/About";
import Gallery from "@/components/gallery/Gallery";
import Hero from "@/components/hero/Hero";
import RecomendedArticles from "@/components/recomended/RecomendedArticles";
import Space from "@/components/space/Space";
import Tenants from "@/components/tenants/Tenants";
import Image from "next/image";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Space />
      <Tenants />
      <Gallery />
      <RecomendedArticles />
    </>
  );
}
