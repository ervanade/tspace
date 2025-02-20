"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function CanonicalLinks() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [lang, setLang] = useState("id");

    useEffect(() => {
        setLang(searchParams.get("lang") || "id");
    }, [searchParams]);

    const currentUrl = `https://tspacebintaro.com${pathname}?lang=${lang}`;
    const alternateEn = `https://tspacebintaro.com${pathname}?lang=en`;
    const alternateId = `https://tspacebintaro.com${pathname}?lang=id`;

    return (
        <>
            <link rel="canonical" href={currentUrl} />
            <link rel="alternate" hreflang="id" href={alternateId} />
            <link rel="alternate" hreflang="en" href={alternateEn} />
        </>
    );
}
