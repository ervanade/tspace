import React from "react";
import { articles } from "@/public/data";
import NavbarArticles from "@/components/navbar/NavbarArticles";
import ArticlesDetails from "@/components/articles/ArticlesDetails";
import { notFound } from "next/navigation";
const HTMLDecoderEncoder = require("html-encoder-decoder");

export async function generateMetadata({ params, searchParams }) {
    const { id } = await params;
    const {data} = await fetchNews(id)
    const news = data?.news || undefined
    if (!news) {
        return notFound()
    }
    const { lang } = await searchParams || "id";
    const isEnglish = lang?.includes('en');
    const newsData = news[0];

    return {
        title: `${newsData?.meta_title_id ? (isEnglish ? HTMLDecoderEncoder.decode(newsData?.meta_title_en) + " | T-Space Bintaro" : HTMLDecoderEncoder.decode(newsData?.meta_title_id)) + " | T-Space Bintaro" : "Article Not Found"}`,
        description: `${newsData?.meta_description_id ? (isEnglish ? HTMLDecoderEncoder.decode(newsData?.meta_description_en) : HTMLDecoderEncoder.decode(newsData?.meta_description_id)) : "Article Not Found"}`,
        keywords: `${newsData?.meta_keywords_id ? (isEnglish ? HTMLDecoderEncoder.decode(newsData?.meta_keywords_en) : HTMLDecoderEncoder.decode(newsData?.meta_keywords_id)) : "Article Not Found"}`,
        openGraph: {
            title: `${newsData?.meta_title_id ? (isEnglish ? HTMLDecoderEncoder.decode(newsData?.meta_title_en) + " | T-Space Bintaro" : HTMLDecoderEncoder.decode(newsData?.meta_title_id)) + " | T-Space Bintaro" : "Article Not Found"}`,
            description: `${newsData?.meta_description_id ? (isEnglish ? HTMLDecoderEncoder.decode(newsData?.meta_description_en) : HTMLDecoderEncoder.decode(newsData?.meta_description_id)) : "Article Not Found"}`,
            url: 'https://tspacebintaro.com',
            siteName: 'T-Space Bintaro',
            images: [
                {
                    url: `${newsData.image_slider}`,
                    width: 800,
                    height: 600,
                },
                {
                    url: `${newsData.image_slider}`,
                    width: 1800,
                    height: 1600,
                    alt: `${newsData?.img_alt ? HTMLDecoderEncoder.decode(newsData?.img_alt) : "Article Not Found"}`,
                },
            ],
        },
    }
}
const fetchNews = async (slug) => {

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_KEY}/api/news/slug/${slug}`, {
            // cache: 'no-store',
            method: 'GET',
            headers: {
              'X-Api-Key': process.env.NEXT_PUBLIC_APP_X_API_KEY,
            },
          })

        if (!res.ok) {
            // This will activate the closest `error.js` Error Boundary
            throw new Error('Failed to fetch data')
          }
        
          return res.json()
};

const ArticlePage = async ({ params }) => {
    const { id } = await params;

    // Fetch data
    const {data} = await fetchNews(id);

    // Jika data tidak ada atau news kosong, redirect ke notFound
    if (!data || !data.news || data.news.length === 0) {
        notFound();
    }

    // Ambil data yang diperlukan
    const { news, recomended, related } = data;
    const newsData = news[0];

    return (
        <div>
            <NavbarArticles />
            <ArticlesDetails article={newsData} related={related} />
            {/* <Footer /> */}
        </div>
    );
};

export default ArticlePage;
