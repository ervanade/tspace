import React from "react";
import { serviceDetails } from "@/public/data";
import ServicesDetails from "@/components/services/ServicesDetails";
import NavbarServices from "@/components/navbar/NavbarServices";
import Footer from "@/components/footer/Footer";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  // Menghasilkan parameter dinamis berdasarkan data
  return serviceDetails.map((service) => ({ id: service.slug }));
}

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
      <Footer />
    </div>
  );
};

export default ServicePage;
