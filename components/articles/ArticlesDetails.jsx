"use client";
import React from "react";
import { useSelector } from "react-redux";
import { articles } from "@/public/data";
import Image from "next/image";

const ArticlesDetails = ({ article }) => {
  const lang = useSelector((state) => state.lang.lang); // Get language from Redux store

  return (
    <div className="w-full bg-gray-50 py-12 px-6 text-textDark">
      <div className="max-w-[1280px] mx-auto w-full overflow-hidden">
        {/* Article Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            {lang === "en" ? article.title_en : article.title}
          </h1>
          <p className="text-sm text-gray-500">
            Published on: {new Date().toLocaleDateString()}
          </p>
        </div>

        {/* Article Image */}
        <div className="relative w-full h-64 lg:h-96 mb-8">
          <Image
            src={article.image}
            alt={lang === "en" ? article.title_en : article.title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Article Content */}
        <div
          className="prose prose-lg max-w-none text-justify"
          dangerouslySetInnerHTML={{
            __html: lang === "en" ? article.content_en : article.content,
          }}
        />

        {/* Back to Articles Button */}
        <div className="mt-12 text-center">
          <a
            href="/articles"
            className="inline-block bg-dark text-white px-6 py-3 rounded-lg shadow-md transition-all"
          >
            Back to Articles
          </a>
        </div>
      </div>
    </div>
  );
};

export default ArticlesDetails;
