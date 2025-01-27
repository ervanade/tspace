import React from "react";
import { serviceDetails } from "@/public/data";
import ServicesDetails from "@/components/services/ServicesDetails";

export async function generateStaticParams() {
  // Menghasilkan parameter dinamis berdasarkan data
  return serviceDetails.map((service) => ({ id: service.slug }));
}

const ServicePage = async ({ params }) => {
  // Cari data yang cocok berdasarkan slug
  const service = serviceDetails.find((item) => item.slug === params.id);

  if (!service) {
    return {
      notFound: true, // Menampilkan halaman 404 jika tidak ditemukan
    };
  }

  return (
    <div>
      <ServicesDetails service={service} />
    </div>
  );
};

export default ServicePage;
