import { NextResponse } from "next/server";
import { parseCookies, setCookie } from "nookies";

export function middleware(request) {
  const cookies = parseCookies({ req: request });
  let lang = cookies.lang || "id"; // Default lang

  const url = request.nextUrl.clone();
  const queryLang = url.searchParams.get("lang");

  if (queryLang) {
    lang = queryLang;
    setCookie({ res: request }, "lang", lang, { path: "/" }); // Simpan ke cookie
  } else {
    url.searchParams.set("lang", lang); // Tambahkan lang ke URL jika tidak ada
    return NextResponse.redirect(url); // Redirect untuk SEO
  }

  return NextResponse.next(); // Lanjutkan ke page
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}
