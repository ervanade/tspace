"use client";
import React from "react";
import { useSelector } from "react-redux";
import { articles } from "@/public/data";
import Image from "next/image";
import Link from "next/link";

import { format, parseISO } from "date-fns";
import parse from "html-react-parser";
const HTMLDecoderEncoder = require("html-encoder-decoder");
import "./unreset.css";

const ArticlesDetails = ({ article, related }) => {
  const lang = useSelector((state) => state.lang.lang); // Get language from Redux store

  return (
    <div className="w-full bg-gray-50 py-12 px-6 text-textDark">
      <div className="max-w-[1200px] mx-auto w-full overflow-hidden">
        <div className="news-content">
          <h1 className="text-2xl xl:text-[32px] font-bold mb-4 text-center">
            {lang === "en" ? article?.title_en : article?.title_id || ""}
          </h1>
          <div className="flex items-center gap-3">
            <Link
              className="px-4 py-2 bg-[#303638] text-white font-bold rounded-full"
              href={`/articles/category/${article?.category || "1"}-${
                article?.category_name
              }?lang=${lang}`}
            >
              {article?.category_name || ""}
            </Link>
            <p className="font-semibold">
              {article?.publish_at &&
                format(parseISO(article?.publish_at), "yyyy-MMM-dd")}{" "}
            </p>
          </div>

          <div className="flex flex-col lg:flex-row w-full mt-5 gap-8">
            <div className="flex-[3_3_0%]">
              <div className="aspect-[16/8] lg:aspect-[16/6]  w-full overflow-hidden rounded-lg relative">
                <Image
                  src={article.image_default}
                  alt={
                    article?.img_alt ||
                    article?.meta_title_id ||
                    "Article T-Space"
                  }
                  sizes="100vw"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="news-text mt-5">
                {article.content_id && article?.content_en ? (
                  lang === "en" ? (
                    parse(HTMLDecoderEncoder.decode(article?.content_en))
                  ) : (
                    parse(HTMLDecoderEncoder.decode(article?.content_id))
                  )
                ) : (
                  <p className="!text-white/80 sub-title whitespace-pre-line">
                    Article sedang tidak bisa diakses, Coba beberapa saat lagi.
                  </p>
                )}
              </div>
            </div>
            {/* <div className="flex-1">
              <h2 className="font-bold text-2xl mb-5">Related Articles</h2>
              {related &&
                related.map((category, index) => (
                  <Link href={`/articles/${category.slug}`} key={index}>
                    <div className="card-news flex gap-4 h-[100px] sm:h-[150px] lg:h-[100px] items-center mb-4 group hover:cursor-pointer">
                      <div className="card-desc flex-[1.35_1.35_0%]">
                        <p className="text-[#6E6E6E] text-sm">
                          {category?.publish_at &&
                            format(
                              parseISO(category?.publish_at),
                              "yyyy MMM dd"
                            )}
                        </p>
                        <h3 className="font-bold text-sm line-clamp-3 group-hover:underline">
                          {lang === "en"
                            ? category?.title_en
                            : category?.title_id || ""}
                        </h3>
                      </div>
                      <div className="card-news-image flex-1 h-full overflow-hidden rounded-2xl object-cover">
                        <img
                          src={category?.image_default}
                          alt={category.img_alt || "Article Image"}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </Link>
                ))}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlesDetails;
