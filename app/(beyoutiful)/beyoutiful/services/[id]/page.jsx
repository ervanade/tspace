import React from "react";
import { serviceDetails } from "@/public/data";
import ServicesDetails from "@/components/services/ServicesDetails";
import NavbarServices from "@/components/navbar/NavbarServices";
import Footer from "@/components/footer/Footer";
import { notFound } from "next/navigation";

export async function generateMetadata({ searchParams, params }) {
  const { id } = await params;
  const service = serviceDetails.find((item) => item.slug === id);
  const { data } = (await fetchServices(id)) || undefined;

  const { lang } = (await searchParams) || "id";
  const isEnglish = lang?.includes("en");
  const serviceData = data[0] || undefined;
  if (!serviceData && !service) {
    return notFound();
  }
  if (!serviceData && service) {
    return {
      title: isEnglish ? service.meta_title_en : service.meta_title,
      description: isEnglish
        ? service.meta_description_en
        : service.meta_description,
    };
  }
  return {
    title: isEnglish ? serviceData?.meta_title_en : serviceData?.meta_title_id,
    description: isEnglish
      ? serviceData?.meta_desc_en
      : serviceData?.meta_desc_id,
  };
}

const fetchServices = async (slug) => {
  // const res = await fetch(`http://10.29.101.99/api/news/slug/${slug}`, {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_KEY}/api/services/slug/${slug}`,
    {
      next: { revalidate: 3600 },
      // cache: 'no-store',
      method: "GET",
      headers: {
        "X-Api-Key": process.env.NEXT_PUBLIC_APP_X_API_KEY,
      },
    }
  );
  if (res?.status === 404) {
    return notFound(); // Pastikan tidak menyebabkan error
  }

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

const ServicePage = async ({ params }) => {
  const { id } = await params;
  // Cari data yang cocok berdasarkan slug
  const { data } = await fetchServices(id);
  const serviceData = data[0] || undefined;
  const service = serviceDetails.find((item) => item.slug === id);

  if ((!data || !serviceData || data?.length === 0) && !service) {
    notFound();
  }

  return (
    <div>
      <NavbarServices />
      <ServicesDetails service={service} data={serviceData} />
      {/* <Footer /> */}
    </div>
  );
};

export default ServicePage;
