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
import { headers } from 'next/headers';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export async function generateMetadata({ searchParams }) {
  const { lang } = await searchParams || "id";
  const isEnglish = lang?.includes('en');

  return {
    title: isEnglish
      ? 'Articles & Insights | T-Space Bintaro'
      : 'Artikel & Insight | T-Space Bintaro',
    description: isEnglish
      ? 'Explore articles about events, arts, rental space, and dermatology at T-Space Bintaro. Get the latest insights here!'
      : 'Temukan artikel menarik tentang event, seni, rent space, dan dermatologi di T-Space Bintaro. Dapatkan wawasan terbaru di sini!',
    keywords: isEnglish
      ? ['Creative Space Bintaro', 'Coworking Space Bintaro', 'Meeting Room Rental Bintaro', 'Event Space Bintaro', 'Collaboration Space Bintaro', 'Office Bintaro', 'Space Rental Bintaro', 'T-Space Bintaro']
      : ['Ruang Kreatif Bintaro', 'Coworking Space Bintaro', 'Sewa Ruang Meeting Bintaro', 'Event Space Bintaro', 'Ruang Kolaborasi Bintaro', 'Kantor Bintaro', 'Sewa Tempat Bintaro', 'T-Space Bintaro'],
    applicationName: 'T-Space Bintaro',
    authors: [{ name: 'T-Space Bintaro', url: 'https://tspacebintaro.com' }],
    creator: 'T-Space Bintaro',
    publisher: 'T-Space Bintaro',
    metadataBase: new URL('https://tspacebintaro.com'),
    openGraph: {
      title: isEnglish
        ? 'Articles & Insights | T-Space Bintaro'
        : 'Artikel & Insight | T-Space Bintaro',
      description: isEnglish
        ? 'Explore articles about events, arts, rental space, and dermatology at T-Space Bintaro. Get the latest insights here!'
        : 'Temukan artikel menarik tentang event, seni, rent space, dan dermatologi di T-Space Bintaro. Dapatkan wawasan terbaru di sini!',
      url: 'https://tspacebintaro.com',
      siteName: 'T-Space Bintaro',
      images: [
        {
          url: 'https://tspacebintaro.com/logo_ori.svg',
          width: 1200,
          height: 630,
          alt: 'Logo T-Space Bintaro',
        },
      ],
      locale: isEnglish ? 'en-US' : 'id-ID',
      type: 'website',
    },
  };
}

async function getDataCategory() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_KEY}/api/news/category`, {
      cache: 'no-store', method: 'GET',
      headers: {
        'X-Api-Key': process.env.NEXT_PUBLIC_APP_X_API_KEY,
      },
    })
    const response = await res.json()
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export default async function Home() {
  const listCategory = await getDataCategory()

  return (
    <>
      <NavbarArticles className="" />
      <Articles listCategory={listCategory} />
      {/* <Footer /> */}

    </>
  );
}
