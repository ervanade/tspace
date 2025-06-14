import { Geist, Poppins, Bebas_Neue, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { Suspense } from "react";
import Loading from "@/components/Loading";
import ClientProvider from "@/components/ClientProvider";
import parse from 'html-react-parser';
import Footer from "@/components/footer/Footer";
import CanonicalLinks from "@/components/CanonicalLinks";
const HTMLDecoderEncoder = require("html-encoder-decoder");

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});
const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: ["400"],
});
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export async function generateMetadata({ searchParams }) {
  const { lang } = await searchParams || "id";
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
    // alternates: {
    //   canonical: `/?lang=${lang}`,
    //   languages: {
    //     'en': '/?lang=en',
    //     'id': '/?lang-id',
    //   },
    // },
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

// export const metadata = {
//   title: 'T-Space Bintaro | Rent Space, Event, Dermatologi, & Bedah Plastik', // More descriptive title
//   description: 'T-Space Bintaro, ruang multifungsi untuk event, galeri seni, rent space, serta layanan dermatologi dan bedah plastik terbaik di Jakarta.', // Expanded and keyword-rich description
//   keywords: ['Ruang Kreatif Bintaro', 'Coworking Space Bintaro', 'Sewa Ruang Meeting Bintaro', 'Event Space Bintaro', 'Ruang Kolaborasi Bintaro', 'Kantor Bintaro', 'Sewa Tempat Bintaro', 'T-Space Bintaro'], // More relevant and specific keywords
//   applicationName: 'T-Space Bintaro',
//   authors: [{ name: 'T-Space Bintaro', url: 'https://tspacebintaro.com' }], // Combined author info
//   creator: 'T-Space Bintaro',
//   publisher: 'T-Space Bintaro',
//   metadataBase: new URL('https://tspacebintaro.com'),
//   alternates: {
//     canonical: '/', // Correct canonical URL
//     languages: {
//       'en-US': '/en-US', // If you have English content
//       'id-ID': '/id-ID', // If you have Indonesian content
//     },
//   },
//   openGraph: {
//     title: 'T-Space Bintaro | Rent Space, Event, Dermatologi, & Bedah Plastik', // Consistent title
//     description: 'T-Space Bintaro, ruang multifungsi untuk event, galeri seni, rent space, serta layanan dermatologi dan bedah plastik terbaik di Jakarta.', // Consistent description
//     url: 'https://tspacebintaro.com', // Correct URL
//     siteName: 'T-Space Bintaro',
//     images: [
//       {
//         url: 'https://tspacebintaro.com/logo_ori.svg', // Use a high-quality image
//         width: 1200, // Recommended minimum width for OG images
//         height: 630, // Recommended aspect ratio for OG images (1.91:1)
//         alt: 'Logo T-Space Bintaro', // Descriptive alt text
//       },
//     ],
//     locale: 'id-ID', // Correct locale
//     type: 'website',
//   },
//   robots: {
//     index: true,
//     follow: true,
//   },
// };

async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_KEY}/api/settings`, {
    // cache: 'no-store',
    next: { revalidate: 3600 * 24 },
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



export default async function RootLayout({ children }) {
  const { data } = await getData()
  // const data = { data: "" }
  if (!data) return <p>Server sedang sibuk, harap coba beberapa saat lagi!</p>
  const headScript = data?.head_script || `<!-- Google tag (gtag.js) --><script async src="https://www.googletagmanager.com/gtag/js?id=G-CTBCY618GW"></script><script>window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-CTBCY618GW');</script>`;
  const bodyScript = data?.body_script || `<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5PT9NFKC"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
`

  return (
    <html lang="en">
      <head>
        <CanonicalLinks />
        <>
          {parse(HTMLDecoderEncoder.decode(headScript))}
        </>
      </head>
      <body
        className={`${bebasNeue.variable} ${poppins.variable} ${montserrat.variable} antialiased`}
      >
        <ClientProvider>
          {/* <Suspense fallback={<Loading />}> */}
          {children}
          {/* </Suspense> */}
          <Footer dataSettings={data || null} />
        </ClientProvider>
        <>
          {parse(HTMLDecoderEncoder.decode(bodyScript))}
        </>

      </body>
    </html>
  );
}
