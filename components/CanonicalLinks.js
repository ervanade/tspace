"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { Suspense } from "react";

function CanonicalContent() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const lang = searchParams.get("lang") || "id";

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

export default function CanonicalLinks() {
    return (
        <Suspense fallback={null}>
            <CanonicalContent />
        </Suspense>
    );
}
