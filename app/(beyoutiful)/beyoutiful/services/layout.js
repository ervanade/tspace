import NavbarBeyoutiful from "@/components/navbar/NavbarBeyoutiful";



export const metadata = {
  title: "Beyoutiful Home Page",
  description: "Discover a space to create, connect, and collaborate in the heart of Bintaro",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        <NavbarBeyoutiful />
        {children}

      </body>
    </html>
  );
}
