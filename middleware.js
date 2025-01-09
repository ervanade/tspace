import { NextResponse } from "next/server";
import { parseCookies, setCookie } from "nookies";

export function middleware(request) {
  const cookies = parseCookies({ req: request });
  let lang = cookies.lang || "id";

  const url = request.nextUrl.clone();
  const queryLang = url.searchParams.get("lang");

  if (queryLang) {
    lang = queryLang;
    setCookie({ res: request }, "lang", lang, { path: "/" });
  }

  url.searchParams.set("lang", lang);
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: "/((?!_next|favicon.ico).*)",
};
