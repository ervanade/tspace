import { NextResponse } from "next/server";

export function middleware(request) {
  const url = request.nextUrl;
  const lang = url.searchParams.get('lang') || 'id'; // default ke 'id'

  // Default locale jika `lang` tidak valid
  const validLocales = ["id", "en"];
  const defaultLocale = "id";

  // Redirect ke default locale jika lang tidak ada atau invalid
  if (!lang || !validLocales.includes(lang)) {
    url.searchParams.set("lang", defaultLocale);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!_next|favicon.ico).*)", // Middleware hanya diterapkan pada route tertentu
};
