import { Geist, Poppins, Bebas_Neue, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { Suspense } from "react";
import Loading from "@/components/Loading";
import ClientProvider from "@/components/ClientProvider";

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
  title: 'T-Space Bintaro: Ruang Kreatif & Kolaborasi di Jantung Bintaro', // More descriptive title
  description: 'Cari ruang inspiratif untuk berkarya dan berkolaborasi di Bintaro? T-Space menyediakan tempat yang nyaman dan modern untuk berbagai kegiatan. Sewa ruang meeting, co-working space, atau event space di lokasi strategis.', // Expanded and keyword-rich description
  keywords: ['Ruang Kreatif Bintaro', 'Coworking Space Bintaro', 'Sewa Ruang Meeting Bintaro', 'Event Space Bintaro', 'Ruang Kolaborasi Bintaro', 'Kantor Bintaro', 'Sewa Tempat Bintaro', 'T-Space Bintaro'], // More relevant and specific keywords
  applicationName: 'T-Space Bintaro',
  authors: [{ name: 'T-Space Bintaro', url: 'https://tspacebintaro.web.id' }], // Combined author info
  creator: 'T-Space Bintaro',
  publisher: 'T-Space Bintaro',
  metadataBase: new URL('https://tspacebintaro.web.id'),
  alternates: {
    canonical: '/', // Correct canonical URL
    languages: {
      'en-US': '/en-US', // If you have English content
      'id-ID': '/id-ID', // If you have Indonesian content
    },
  },
  openGraph: {
    title: 'T-Space Bintaro: Ruang Kreatif & Kolaborasi di Jantung Bintaro', // Consistent title
    description: 'Cari ruang inspiratif untuk berkarya dan berkolaborasi di Bintaro? T-Space menyediakan tempat yang nyaman dan modern untuk berbagai kegiatan. Sewa ruang meeting, co-working space, atau event space di lokasi strategis.', // Consistent description
    url: 'https://tspacebintaro.web.id', // Correct URL
    siteName: 'T-Space Bintaro',
    images: [
      {
        url: 'https://tspacebintaro.web.id/logo_ori.svg', // Use a high-quality image
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
  return (
    <html lang="en">
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
