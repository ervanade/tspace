// middleware.js
import { NextResponse } from "next/server";

export function middleware(request) {
  // 1. Baca preferensi bahasa dari cookie pengguna
  //    Jika cookie 'lang' tidak ada, gunakan 'id' sebagai default.
  let lang = request.cookies.get("lang")?.value;
  if (!lang) {
    lang = "id"; // Default bahasa ke 'id' jika belum ada di cookie
  }

  // Clone URL saat ini untuk dimodifikasi
  const url = request.nextUrl.clone();

  // Periksa apakah parameter 'lang' sudah ada di URL
  const queryLang = url.searchParams.get("lang");

  // Siapkan objek Response. Kita akan memodifikasi cookies di sini jika diperlukan.
  const response = NextResponse.next();

  // --- Logika Penanganan Bahasa ---
  // A. Jika ada parameter 'lang' di URL (misal: /halaman?lang=en)
  if (queryLang) {
    // Gunakan bahasa dari URL query
    lang = queryLang;
    // Set/perbarui cookie dengan bahasa dari URL query
    response.cookies.set("lang", lang, { path: "/" });
    // Tidak perlu redirect di sini, karena URL sudah memiliki param 'lang' yang diinginkan.
  }
  // B. Jika TIDAK ada parameter 'lang' di URL
  else {
    // Jika URL saat ini belum memiliki parameter 'lang'
    // ATAU parameter 'lang' yang ada berbeda dari bahasa yang terdeteksi/diinginkan
    if (!url.searchParams.has("lang") || url.searchParams.get("lang") !== lang) {
      // Tambahkan parameter 'lang' ke URL
      url.searchParams.set("lang", lang);
      // Lakukan redirect ke URL baru dengan parameter 'lang'.
      // Ini penting untuk SEO dan konsistensi URL.
      return NextResponse.redirect(url);
    }
  }

  // Jika tidak ada redirect yang terjadi (misalnya, URL sudah benar atau sudah ada cookie),
  // cukup lanjutkan permintaan dengan objek response yang mungkin telah dimodifikasi (cookies).
  return response;
}

export const config = {
  // Matcher ini mengecualikan API routes, Next.js internal files, dan semua file statis (.png, .jpg, .svg)
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$|.*\\.jpg$|.*\\.svg$).*)"]
};