import { NextResponse } from "next/server";

export function middleware(request) {
  const url = request.nextUrl;
  const lang = url.searchParams.get("lang") || "id"; // default ke 'id'

  // Validasi lang
  const validLocales = ["id", "en"];
  const defaultLocale = "id";

  if (!validLocales.includes(lang)) {
    url.searchParams.set("lang", defaultLocale);
    return NextResponse.redirect(url);
  }

  // Simpan lang di cookie untuk persistensi
  const response = NextResponse.next();
  response.cookies.set("lang", lang);
  return response;
}

export const config = {
  matcher: "/((?!_next|favicon.ico).*)",
};
