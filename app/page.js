import Hero from "@/components/hero/Hero";
import RecomendedArticles from "@/components/recomended/RecomendedArticles";
import Space from "@/components/space/Space";
import Image from "next/image";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Home() {
  return (
    <>
      <Hero />
      <Space />
      <RecomendedArticles />
    </>
  );
}
