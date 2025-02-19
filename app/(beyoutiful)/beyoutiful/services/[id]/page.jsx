import React from "react";
import { serviceDetails } from "@/public/data";
import ServicesDetails from "@/components/services/ServicesDetails";
import NavbarServices from "@/components/navbar/NavbarServices";
import Footer from "@/components/footer/Footer";
import { notFound } from "next/navigation";

export async function generateMetadata({searchParams, params}) {
  const { id } = await params;
  const service = serviceDetails.find((item) => item.slug === id);
  const {lang} = await searchParams || "id"; 
  const isEnglish = lang?.includes('en'); 

  return {
    title: isEnglish
      ? service.meta_title_en
      : service.meta_title,
    description: isEnglish
      ? service.meta_description_en
      : service.meta_description,
  };
}

// export async function generateStaticParams() {
//   // Menghasilkan parameter dinamis berdasarkan data
//   return serviceDetails.map((service) => ({ id: service.slug }));
// }

const ServicePage = async ({ params }) => {
  const { id } = await params;
  // Cari data yang cocok berdasarkan slug
  const service = serviceDetails.find((item) => item.slug === id);

  if (!service) {
    notFound();
  }

  return (
    <div>
      <NavbarServices />
      <ServicesDetails service={service} />
      {/* <Footer /> */}
    </div>
  );
};

export default ServicePage;
