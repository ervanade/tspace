"use client";
import { useSelector } from "react-redux";
import { articles } from "@/public/data";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const Articles = ({ listCategory }) => {
  const lang = useSelector((state) => state.lang.lang); // Get language from Redux store
  const [visibleCount, setVisibleCount] = useState(6); // Jumlah artikel yang terlihat

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 6); // Tambahkan 6 artikel lagi
  };

  const visibleArticles = articles.slice(0, visibleCount); // Artikel yang akan ditampilkan

  const [newsData, setNewsData] = useState([]);
  const [newsPage, setNewsPage] = useState([]);
  const [page, setPage] = useState(1);

  const fetchApiNews = async () => {
    await axios({
      method: "get",
      url: `${process.env.NEXT_PUBLIC_API_KEY}/api/news`,
      headers: {
        "X-Api-Key": process.env.NEXT_PUBLIC_APP_X_API_KEY,
        "Content-Type": "application/json",
      },
    })
      .then(function (response) {
        setNewsPage(response.data);
        setNewsData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const loadMoreNews = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_KEY}/api/news?page=${page}`,
        {
          headers: {
            "X-Api-Key": process.env.NEXT_PUBLIC_APP_X_API_KEY,
            "Content-Type": "application/json",
          },
        }
      );

      setNewsData((prevData) => [...prevData, ...response.data.data]);
      setNewsPage(response.data);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (page === 1) {
      fetchApiNews();
    }
  }, [page]);

  return (
    <div
      className="w-full bg-cover bg-center py-8 lg:py-12 px-6 text-textDark scroll-mt-12"
      id="articles"
    >
      <div className="mb-6 lg:mb-12">
        <h2 className="header-title !text-textDark">
          {lang === "en" ? "Articles" : "Artikel"}
        </h2>
      </div>

      <div className="max-w-[1280px] mx-auto w-full overflow-hidden">
        <div className="mb-4 overflow-x-auto whitespace-nowrap no-scrollbar">
          <Link
            href={`/articles?lang=${lang}`}
            className="inline-block mr-4 bg-[#303638] text-white px-4 py-2 rounded-full font-sm md:font-base font-semibold"
          >
            All Category
          </Link>
          {listCategory?.length > 0 &&
            listCategory.map((cat, index) => (
              <Link
                key={index}
                href={`/articles/category/${cat.id}-${cat.category_name}?lang=${lang}`}
                className="inline-block mr-4 border border-black/80 text-black/80 px-4 py-2 rounded-full font-sm md:font-base"
              >
                {cat?.category_name}
              </Link>
            ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* {visibleArticles.map((article, index) => (
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
          ))} */}

          {newsData?.length > 0 ? (
            newsData?.map((article, index) => (
              <div
                key={index}
                className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl"
              >
                <div className="relative h-56 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-t-lg bg-blue-gray-500 shadow-blue-gray-500/40">
                  <Image
                    src={article?.image_default}
                    alt={lang === "en" ? article.img_alt : article.img_alt}
                    fill
                    className="object-cover"
                    priority={index === 0} // Prioritas pada slide pertama untuk performance
                  />
                  <div className="px-4 py-2 bg-[#303638] text-white font-medium rounded-full absolute bottom-4 left-2 text-sm ">
                    {article?.category_name}
                  </div>
                </div>
                <div className="p-6">
                  <h5 className="block text-lg md:text-xl mb-2 font-sans antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 line-clamp-3 min-h-[80px]">
                    {lang === "en" ? article?.title_en : article?.title_id}
                  </h5>
                  <p className="line-clamp-3 block font-sans text-sm md:text-base antialiased font-light leading-relaxed text-inherit min-h-[80px]">
                    {lang === "en"
                      ? article?.subtitle_en
                      : article?.subtitle_id}
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
            ))
          ) : (
            <>
              {[...Array(3)].map((_, index) => (
                <div
                  key={index}
                  className="animate-pulse flex flex-col space-y-4 rounded-xl shadow-md p-6 bg-gray-200"
                >
                  <div className="h-56 bg-gray-300 rounded-t-lg"></div>
                  <div className="h-6 w-3/4 bg-gray-300 rounded"></div>
                  <div className="h-4 w-full bg-gray-300 rounded"></div>
                  <div className="h-4 w-5/6 bg-gray-300 rounded"></div>
                </div>
              ))}
            </>
          )}
        </div>

        {/* Tombol Load More */}
        {/* {visibleCount < articles.length && (
          <div className="mt-8 text-center">
            <button
              aria-label="button"
              onClick={loadMore}
              className="px-6 py-3 bg-dark text-white rounded-full focus:outline-none font-medium"
            >
              {lang === "en" ? "Load More" : "Tampilkan Lebih Banyak"}
            </button>
          </div>
        )} */}

        <div className="flex justify-center items-center mt-12 lg:mt-16">
          <div>
            {newsPage?.total > page ? (
              <button
                onClick={loadMoreNews}
                className="bg-[#000] text-white w-full text-center py-3 text-xl lg:text-[24px] font-semibold mt-4 px-8"
              >
                Load More
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
