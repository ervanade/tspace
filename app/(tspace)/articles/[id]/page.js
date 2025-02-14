import React from "react";
import { articles } from "@/public/data";
import ServicesDetails from "@/components/services/ServicesDetails";
import NavbarServices from "@/components/navbar/NavbarServices";
import Footer from "@/components/footer/Footer";
import NavbarArticles from "@/components/navbar/NavbarArticles";
import ArticlesDetails from "@/components/articles/ArticlesDetails";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    // Menghasilkan parameter dinamis berdasarkan data
    return articles.map((article) => ({ id: article.slug }));
}

const ArticlePage = async ({ params }) => {
    // Cari data yang cocok berdasarkan slug
    const { id } = await params;

    const article = articles.find((item) => item.slug === id);

    if (!article) {
        notFound()
    }

    return (
        <div>
            <NavbarArticles />
            <ArticlesDetails article={article} />
            <Footer />
        </div>
    );
};

export default ArticlePage;
