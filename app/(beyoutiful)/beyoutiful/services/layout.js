import NavbarServices from "@/components/navbar/NavbarServices";



export const metadata = {
  title: "Beyoutiful Home Page",
  description: "Discover a space to create, connect, and collaborate in the heart of Bintaro",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        <NavbarServices />
        {children}

      </body>
    </html>
  );
}
