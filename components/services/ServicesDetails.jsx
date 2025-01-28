"use client";
import Image from "next/image";
import React from "react";
import parse from "html-react-parser";
const HTMLDecoderEncoder = require("html-encoder-decoder");

const ServicesDetails = ({ service }) => {
  return (
    <section className="py-12 bg-orange-50">
      <div className="w-full max-w-7xl px-4 md:px-6 lg:px-8 mx-auto">
        {/* Judul Layanan */}
        <h2 className="text-center text-2xl !font-bold !text-secondary  lg:!mb-12 title-beyoutiful">
          {service.name}
        </h2>

        <div className="grid lg:grid-cols-2 gap-8 ">
          {/* Area Deskripsi */}
          <div className="bg-orange-400 rounded-lg p-6 text-white">
            <h2 className="text-2xl font-semibold mb-5 text-center">
              Service Details
            </h2>
            <div className="aspect-[16/9] w-full overflow-hidden rounded-lg relative mb-4">
              <Image
                src={service.image}
                alt={service?.name || "Beyoutiful Service"}
                sizes="100vw"
                fill
                className="object-cover"
              />
            </div>
            <div className="text-sm leading-relaxed">
              {" "}
              {service?.description &&
                parse(HTMLDecoderEncoder.decode(service?.description))}
            </div>
          </div>

          {/* Area Dokter */}
          <div className="bg-orange-400 rounded-lg p-6 text-white">
            <h2 className="text-2xl font-semibold mb-4 text-center">Dokter</h2>
            <div
              className={`grid ${
                service?.dokter?.length >= 4
                  ? "sm:grid-cols-2"
                  : "sm:grid-cols-1"
              } gap-2`}
            >
              {service?.dokter?.map((dokter, index) => (
                <div
                  key={index}
                  className="text-center p-4 border-2 border-orange-400 bg-slate-50 rounded-lg text-textDark shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-36 h-36 mx-auto overflow-hidden rounded-full relative">
                    <Image
                      src={dokter.dokter_foto}
                      alt={dokter.nama_dokter}
                      sizes="100vw"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="font-bold text-sm mt-2">{dokter.nama_dokter}</p>
                  <ul className="mt-1 text-xs">
                    {dokter.jadwal_dokter?.map((jadwal, i) => (
                      <li key={i}>{jadwal}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Area Foto Before-After */}
        {service.before_after_foto?.length > 0 && (
          <div className="mt-10">
            <div className="bg-orange-400 rounded-lg p-6 text-white">
              <h2 className="text-2xl font-semibold mb-5 text-center">
                Before After
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {service.before_after_foto?.map((foto, index) => (
                  <div
                    key={index}
                    className="aspect-[1070/364] w-full overflow-hidden rounded-lg relative"
                  >
                    <Image
                      src={foto}
                      alt={`Before After ${index + 1}`}
                      sizes="100vw"
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesDetails;
