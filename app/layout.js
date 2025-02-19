import { Geist, Poppins, Bebas_Neue, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { Suspense } from "react";
import Loading from "@/components/Loading";
import ClientProvider from "@/components/ClientProvider";
import parse from 'html-react-parser';
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

export const metadata = {
  title: 'T-Space Bintaro | Rent Space, Event, Dermatologi, & Bedah Plastik', // More descriptive title
  description: 'T-Space Bintaro, ruang multifungsi untuk event, galeri seni, rent space, serta layanan dermatologi dan bedah plastik terbaik di Jakarta.', // Expanded and keyword-rich description
  keywords: ['Ruang Kreatif Bintaro', 'Coworking Space Bintaro', 'Sewa Ruang Meeting Bintaro', 'Event Space Bintaro', 'Ruang Kolaborasi Bintaro', 'Kantor Bintaro', 'Sewa Tempat Bintaro', 'T-Space Bintaro'], // More relevant and specific keywords
  applicationName: 'T-Space Bintaro',
  authors: [{ name: 'T-Space Bintaro', url: 'https://tspacebintaro.com' }], // Combined author info
  creator: 'T-Space Bintaro',
  publisher: 'T-Space Bintaro',
  metadataBase: new URL('https://tspacebintaro.com'),
  alternates: {
    canonical: '/', // Correct canonical URL
    languages: {
      'en-US': '/en-US', // If you have English content
      'id-ID': '/id-ID', // If you have Indonesian content
    },
  },
  openGraph: {
    title: 'T-Space Bintaro | Rent Space, Event, Dermatologi, & Bedah Plastik', // Consistent title
    description: 'T-Space Bintaro, ruang multifungsi untuk event, galeri seni, rent space, serta layanan dermatologi dan bedah plastik terbaik di Jakarta.', // Consistent description
    url: 'https://tspacebintaro.com', // Correct URL
    siteName: 'T-Space Bintaro',
    images: [
      {
        url: 'https://tspacebintaro.com/logo_ori.svg', // Use a high-quality image
        width: 1200, // Recommended minimum width for OG images
        height: 630, // Recommended aspect ratio for OG images (1.91:1)
        alt: 'Logo T-Space Bintaro', // Descriptive alt text
      },
    ],
    locale: 'id-ID', // Correct locale
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};



export default function RootLayout({ children }) {
  const headScript = `<!-- Google tag (gtag.js) --><script async src="https://www.googletagmanager.com/gtag/js?id=G-CTBCY618GW"></script><script>window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-CTBCY618GW');</script>`;

  return (
    <html lang="en">
      <head>
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
        </ClientProvider>
      </body>
    </html>
  );
}
