"use client";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { articles } from "@/public/data";
import Image from "next/image";
import Link from "next/link";

const Articles = () => {
  const lang = useSelector((state) => state.lang.lang); // Get language from Redux store
  const [visibleCount, setVisibleCount] = useState(6); // Jumlah artikel yang terlihat

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 6); // Tambahkan 6 artikel lagi
  };

  const visibleArticles = articles.slice(0, visibleCount); // Artikel yang akan ditampilkan

  return (
    <div
      className="w-full bg-cover bg-center py-12 px-6 text-textDark scroll-mt-12"
      id="articles"
    >
      <div className="mb-12">
        <h1 className="header-title !text-textDark">
          {lang === "en" ? "Articles" : "Artikel"}
        </h1>
      </div>

      <div className="max-w-[1280px] mx-auto w-full overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleArticles.map((article, index) => (
            <div
              key={index}
              className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl"
            >
              <div className="relative h-56 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-t-lg bg-blue-gray-500 shadow-blue-gray-500/40">
                <Image
                  src={article.image}
                  alt={lang === "en" ? article.title_en : article.title}
                  fill
                  className="object-cover"
                  priority={index === 0} // Prioritas pada slide pertama untuk performance
                />
              </div>
              <div className="p-6">
                <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  {lang === "en" ? article.title_en : article.title}
                </h5>
                <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                  The place is close to Barceloneta Beach and bus stop just 2
                  min by walk and near to "Naviglio" where you can enjoy the
                  main night life in Barcelona.
                </p>
              </div>
              <div className="p-6 pt-0">
                <Link
                  href={`/articles/${article.slug}?lang=${lang}`}
                  className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-full bg-[#303638] text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                  type="button"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Tombol Load More */}
        {visibleCount < articles.length && (
          <div className="mt-8 text-center">
            <button
              aria-label="button"
              onClick={loadMore}
              className="px-6 py-3 bg-dark text-white rounded-full focus:outline-none font-medium"
            >
              {lang === "en" ? "Load More" : "Tampilkan Lebih Banyak"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Articles;
