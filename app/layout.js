import { Geist, Geist_Mono, Poppins, Bebas_Neue } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

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

export const metadata = {
  title: "TSpace Home Page",
  description: "  Discover a space to create, connect, and collaborate in the heart of Bintaro",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${bebasNeue.variable} ${poppins.variable} antialiased`}
      >
        <Navbar className="" />
        {children}
      </body>
    </html>
  );
}
