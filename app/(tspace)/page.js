import About from "@/components/beyoutiful/About";
import Contact from "@/components/contact/Contact";
import Event from "@/components/event/Event";
import Footer from "@/components/footer/Footer";
import Gallery from "@/components/gallery/Gallery";
import Hero from "@/components/hero/Hero";
import PopupEvent from "@/components/Modal/PopupEvent";
import Navbar from "@/components/navbar/Navbar";
import RecomendedArticles from "@/components/recomended/RecomendedArticles";
import Space from "@/components/space/Space";
import Tenants from "@/components/tenants/Tenants";
import Image from "next/image";
import { FaIcons, FaWhatsapp } from "react-icons/fa";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_KEY}/api/homepage/0`, {
    // cache: 'no-store',
    method: 'GET',
    headers: {
      'X-Api-Key': process.env.NEXT_PUBLIC_APP_X_API_KEY,
    },
  })
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Home() {
  const { data } = await getData()
  if (!data) return <p>Error Data Not Found</p>
  return (
    <>
      <Navbar className="" />
      <Hero />
      <About />
      <Gallery data={data["3"].gallery || null} />
      <Space />
      <Event />
      <Tenants />
      <RecomendedArticles />
      <Contact />
      <PopupEvent />
      <Footer />

    </>
  );
}
