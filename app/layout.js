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
  title: "TSpace Home Page",
  description: "Discover a space to create, connect, and collaborate in the heart of Bintaro",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${bebasNeue.variable} ${poppins.variable} ${montserrat.variable} antialiased`}
      >
        <ClientProvider>
          <Suspense fallback={<Loading />}>
            <Navbar />
            {children}
          </Suspense>
        </ClientProvider>
      </body>
    </html>
  );
}
