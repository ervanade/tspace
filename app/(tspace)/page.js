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
import { headers } from 'next/headers';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export async function generateMetadata({searchParams}) {
  const {lang} = await searchParams || "id"; 
  const isEnglish = lang?.includes('en'); 

  return {
    title: isEnglish
      ? 'T-Space Bintaro | Rent Space, Event, Dermatology, & Plastic Surgery'
      : 'T-Space Bintaro | Rent Space, Event, Dermatologi, & Bedah Plastik',
    description: isEnglish
      ? 'T-Space Bintaro, a multifunctional space for events, art galleries, rental space, and the best dermatology and plastic surgery services in Jakarta.'
      : 'T-Space Bintaro, ruang multifungsi untuk event, galeri seni, rent space, serta layanan dermatologi dan bedah plastik terbaik di Jakarta.',
    keywords: isEnglish
      ? ['Creative Space Bintaro', 'Coworking Space Bintaro', 'Meeting Room Rental Bintaro', 'Event Space Bintaro', 'Collaboration Space Bintaro', 'Office Bintaro', 'Space Rental Bintaro', 'T-Space Bintaro']
      : ['Ruang Kreatif Bintaro', 'Coworking Space Bintaro', 'Sewa Ruang Meeting Bintaro', 'Event Space Bintaro', 'Ruang Kolaborasi Bintaro', 'Kantor Bintaro', 'Sewa Tempat Bintaro', 'T-Space Bintaro'],
    applicationName: 'T-Space Bintaro',
    authors: [{ name: 'T-Space Bintaro', url: 'https://tspacebintaro.com' }],
    creator: 'T-Space Bintaro',
    publisher: 'T-Space Bintaro',
    metadataBase: new URL('https://tspacebintaro.com'),
    alternates: {
      canonical: '/',
      languages: {
        'en-US': '/en-US',
        'id-ID': '/id-ID',
      },
    },
    openGraph: {
      title: isEnglish
      ? 'T-Space Bintaro | Rent Space, Event, Dermatology, & Plastic Surgery'
      : 'T-Space Bintaro | Rent Space, Event, Dermatologi, & Bedah Plastik',
      description: isEnglish
      ? 'T-Space Bintaro, a multifunctional space for events, art galleries, rental space, and the best dermatology and plastic surgery services in Jakarta.'
      : 'T-Space Bintaro, ruang multifungsi untuk event, galeri seni, rent space, serta layanan dermatologi dan bedah plastik terbaik di Jakarta.',
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
    robots: {
      index: true,
      follow: true,
    },
  };
}
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
  // const { data } = await getData()
  const data = {data: ""}
  if (!data) return <p>Error Data Not Found</p>
  return (
    <>
      <Navbar className="" />
      <Hero dataHero={data["1"]?.banner || null}/>
      <About data={data["2"] || null}/>
      <Gallery data={data["3"] || null} />
      <Space data={data["4"] || null}/>
      <Event />
      <Tenants />
      <RecomendedArticles />
      <Contact />
      <PopupEvent />
      

    </>
  );
}
