export const dataGallery = [
    {
        id: "1",
        name: "CASCADE OF SOUL #1",
        price: "IDR 35.000.000",
        description: "Lukisan pemandangan alam dengan warna yang menenangkan.",
        dimensions: "Acrylic, Ink, Tirtha Water on Canvas 110 cm x 150 cm",
        image_mid: "/gallery/FOTO KARYA-01.jpg", // Ganti dengan URL gambar lukisan yang sesuai
    },
    {
        id: "2",
        name: "CASCADE OF SOUL #2 ",
        price: "IDR 35.000.000",
        description: "Lukisan abstrak yang penuh dengan warna dan emosi.",
        dimensions: "Acrylic, Ink, Tirtha Water on Canvas 110 cm x 150 cm",
        image_mid: "/gallery/FOTO KARYA-02.jpg", // Ganti dengan URL gambar lukisan yang sesuai
    },
    {
        id: "3",
        name: "CASCADE OF SOUL #3 ",
        price: "IDR 35.000.000",
        description: "Lukisan abstrak yang penuh dengan warna dan emosi.",
        dimensions: "Acrylic, Ink, Tirtha Water on Canvas 110 cm x 150 cm",
        image_mid: "/gallery/FOTO KARYA-03.jpg", // Ganti dengan URL gambar lukisan yang sesuai
    },
    {
        id: "4",
        name: " FLOW OF REDEMPTION #1",
        price: "IDR 25.000.000",
        description: "Lukisan abstrak yang penuh dengan warna dan emosi.",
        dimensions: "Acrylic, Ink, Tirtha Water on Canvas 110 cm x 150 cm",
        image_mid: "/gallery/FOTO KARYA-07.jpg", // Ganti dengan URL gambar lukisan yang sesuai
    },
    {
        id: "5",
        name: " FLOW OF REDEMPTION #2",
        price: "IDR 25.000.000",
        description: "Lukisan abstrak yang penuh dengan warna dan emosi.",
        dimensions: "Acrylic, Ink, Tirtha Water on Canvas 110 cm x 150 cm",
        image_mid: "/gallery/FOTO KARYA-09.jpg", // Ganti dengan URL gambar lukisan yang sesuai
    },
    // Tambahkan data lainnya sesuai kebutuhan
];

export const dataServices = [
    { name: "Bedah Plastik", name_en: "Plastic Surgery", link: "/beyoutiful/services/bedah-plastik", image: "/assets/beyoutiful/bedah-plastik.jpg" },
    { name: "Treatment Estetika", name_en: "Aesthetic Treatment", link: "/beyoutiful/services/treatment-estetika", image: "/assets/beyoutiful/estetika.png" },
    {
        name: "Hyperbaric Oxygen Therapy",
        name_en: "Hyperbaric Oxygen Therapy (HBOT)",
        link: "/beyoutiful/services/hyperbaric-oxygen-therapy", image: "/assets/beyoutiful/faciliy-5.png",
    },
    { name: "Urologi", name_en: "Urology", link: "/beyoutiful/services/urologi", image: "/assets/beyoutiful/urologi.png" },
    { name: "Vaskular", name_en: "Vascular", link: "/beyoutiful/services/vaskular", image: "/assets/beyoutiful/services-1.png" },
    { name: "Gizi", name_en: "Nutrition", link: "/beyoutiful/services/gizi", image: "/assets/beyoutiful/services-4.png" },
    { name: "Radiologi", name_en: "Radiology", link: "/beyoutiful/services/radiologi", image: "/assets/beyoutiful/services-3.png" },
];

export const serviceDetails = [
    {
        id: 1,
        name: "Bedah Plastik",
        name_en: "Plastic Surgery",
        description: `
   <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
            <div>
               <ul style="list-style-type: disc; padding-left: 24px; font-size: 13px;">
                    <li>Transfer Lemak Wajah/Facial Fat Transfer</li>
                    <li>Facelift</li>
                    <li>Implan Dagu/Chin Implant</li>
                    <li>Pengencangan Wajah Bagian Tengah/Mid Face Lifting</li>
                    <li>Pengecilan Bibir/Lip Reduction</li>
                    <li>Rhinoplasty Tulang Rawan Wajah/Rhinoplasty Cartilage</li>
                    <li>Rhinoplasty Tulang Rawan Rusuk/Rhinoplasty Rib Cartilage</li>
                    <li>Penghilangan Lemak Pipi/Buccal Fat Removal</li>
                    <li>Blepharoplasty Bagian Atas/Upper Blepharoplasty</li>
                    <li>Sedot Lemak Leher/Neck Liposuction</li>
                    <li>Sedot Lemak Paha/Thigh Liposuction</li>
                    <li>Tummy Tuck/Tummy Tuck</li>
                </ul>
            </div>

            <div>
               <ul style="list-style-type: disc; padding-left: 24px; font-size: 13px;">
                    <li>Sedot Lemak Kontur Tubuh/Body Contouring Liposuction</li>
                    <li>Pembesaran Payudara/Breast Augmentation</li>
                    <li>Pengencangan Payudara/Breast Lifting</li>
                    <li>Pengecilan Payudara/Breast Reduction</li>
                    <li>Ginekomastia/Gynecomastia</li>
                    <li>Brakioplasti/Brachioplasty</li>
                    <li>Sunat/Genital Circumcision</li>
                    <li>Vulvoplasti/Vulvoplasty</li>
                    <li>Hymenoplasti/Hymenoplasty</li>
                    <li>Labiaplasti/Labiaplasty</li>
                    <li>Vaginoplasti/Vaginoplasty</li>
                    <li>Pengecilan Tudung Klitoris/Clitoral Hood Reduction</li>
                    <li>Pembesaran Penis/Penis Enlargement</li>
                    <li>Skrotoplasti/Scrotoplasty</li>
                    <li>Ligamentolisis/Ligamentolisis</li>
                </ul>
            </div>
        </div>`,
        description_en: `
        <h3 class="text-lg font-semibold mb-2">Services:</h3>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div>
               <ul style="list-style-type: disc; padding-left: 24px; font-size: 13px;">
                    <li>Facial Fat Transfer</li>
                    <li>Facelift</li>
                    <li>Chin Implant</li>
                    <li>Mid Face Lifting</li>
                    <li>Lip Reduction</li>
                    <li>Rhinoplasty Cartilage</li>
                    <li>Rhinoplasty Rib Cartilage</li>
                    <li>Buccal Fat Removal</li>
                    <li>Upper Blepharoplasty</li>
                    <li>Neck Liposuction</li>
                    <li>Thigh Liposuction</li>
                    <li>Tummy Tuck</li>
                </ul>
            </div>

            <div>
                          <ul style="list-style-type: disc; padding-left: 24px; font-size: 13px;">

                    <li>Body Contouring Liposuction</li>
                    <li>Breast Augmentation</li>
                    <li>Breast Lifting</li>
                    <li>Breast Reduction</li>
                    <li>Gynecomastia</li>
                    <li>Brachioplasty</li>
                    <li>Genital Circumcision</li>
                    <li>Vulvoplasty</li>
                    <li>Hymenoplasty</li>
                    <li>Labiaplasty</li>
                    <li>Vaginoplasty</li>
                    <li>Clitoral Hood Reduction</li>
                    <li>Penis Enlargement</li>
                    <li>Scrotoplasty</li>
                    <li>Ligamentolysis</li>
                </ul>
            </div>
        </div>
    `,
        slug: "bedah-plastik",
        link: "/",
        image: "/assets/beyoutiful/bedah-plastik.jpg",
        before_after_foto: ["/assets/beyoutiful/services/before-after.png"],
        dokter: [
            {
                nama_dokter: "dr. Teuku Adifitrian, Sp.B.P.R.E, Subsp. E.L.(K)",
                dokter_foto: "/assets/beyoutiful/services/dokter-1.jpg",
                jadwal_dokter: ["Senin, Rabu & Jumat (09.00-15.00)", "Selasa, Kamis & Sabtu (09.00-17.00)"],
            },
            {
                nama_dokter: "dr. Eko Herihadi, Sp.B.P.R.E",
                dokter_foto: "/assets/beyoutiful/services/dokter-2.jpg",
                jadwal_dokter: ["Selasa - Kamis (09.00-15.00)"],
            },
            {
                nama_dokter: "dr. Teuku Adifitrian, Sp.B.P.R.E, Subsp. E.L.(K)",
                dokter_foto: "/assets/beyoutiful/services/dokter-1.jpg",
                jadwal_dokter: ["Senin, Rabu & Jumat (09.00-15.00)", "Selasa, Kamis & Sabtu (09.00-17.00)"],
            },
            {
                nama_dokter: "dr. Eko Herihadi, Sp.B.P.R.E",
                dokter_foto: "/assets/beyoutiful/services/dokter-2.jpg",
                jadwal_dokter: ["Selasa - Kamis (09.00-15.00)"],
            },
        ],
    },
    {
        id: 2,
        name: "Treatment Estetika",
        name_en: "Aesthetic Treatment",
        description: "Perawatan estetika untuk kulit dan wajah yang lebih sehat.",
        description_en: "Aesthetic treatments for healthier skin and face.",
        slug: "treatment-estetika",
        link: "/",
        image: "/assets/beyoutiful/estetika.png",
        before_after_foto: ["/assets/beyoutiful/services/before-after.png"],
        dokter: [
            {
                nama_dokter: "dr. Teuku Adifitrian, Sp.B.P.R.E, Subsp. E.L.(K)",
                dokter_foto: "/assets/beyoutiful/services/dokter-1.jpg",
                jadwal_dokter: ["Rabu 10:00 - 12:00", "Sabtu 16:00 - 18:00"],
            },
        ],
    },
    {
        id: 3,
        name: "Hyperbaric Oxygen Therapy",
        name_en: "Hyperbaric Oxygen Therapy (HBOT)",
        description: "Terapi oksigen hiperbarik untuk penyembuhan luka dan kesehatan optimal.",
        description_en: "Hyperbaric oxygen therapy for wound healing and optimal health.",
        slug: "hyperbaric-oxygen-therapy",
        link: "/",
        image: "/assets/beyoutiful/faciliy-5.png",
        before_after_foto: ["/assets/beyoutiful/services/before-after.png"],
        dokter: [
            {
                nama_dokter: "dr. Teuku Adifitrian, Sp.B.P.R.E, Subsp. E.L.(K)",
                dokter_foto: "/assets/beyoutiful/services/dokter-1.jpg",
                jadwal_dokter: ["Rabu 10:00 - 12:00", "Sabtu 16:00 - 18:00"],
            },
        ],
    },
    {
        id: 4,
        name: "Urologi",
        name_en: "Urology",
        description: "Perawatan untuk sistem kemih dan kesehatan reproduksi pria.",
        description_en: "Care for urinary system and men's reproductive health.",
        slug: "urologi",
        link: "/",
        image: "/assets/beyoutiful/urologi.png",
        before_after_foto: ["/assets/beyoutiful/services/before-after.png"],
        dokter: [
            {
                nama_dokter: "dr. Teuku Adifitrian, Sp.B.P.R.E, Subsp. E.L.(K)",
                dokter_foto: "/assets/beyoutiful/services/dokter-1.jpg",
                jadwal_dokter: ["Rabu 10:00 - 12:00", "Sabtu 16:00 - 18:00"],
            },
        ],
    },
    {
        id: 5,
        name: "Vaskular",
        name_en: "Vascular",
        description: "Layanan untuk perawatan pembuluh darah dan sistem peredaran darah.",
        description_en: "Services for vascular and circulatory system care.",
        slug: "vaskular",
        link: "/",
        image: "/assets/beyoutiful/services-1.png",
        before_after_foto: ["/assets/beyoutiful/services/before-after.png"],
        dokter: [
            {
                nama_dokter: "dr. Teuku Adifitrian, Sp.B.P.R.E, Subsp. E.L.(K)",
                dokter_foto: "/assets/beyoutiful/services/dokter-1.jpg",
                jadwal_dokter: ["Rabu 10:00 - 12:00", "Sabtu 16:00 - 18:00"],
            },
        ],
    },
    {
        id: 6,
        name: "Gizi",
        name_en: "Nutrition",
        description: "Konsultasi dan layanan untuk perbaikan pola makan dan kesehatan gizi.",
        description_en: "Consultations and services for better diet and nutrition health.",
        slug: "gizi",
        link: "/",
        image: "/assets/beyoutiful/services-4.png",
        before_after_foto: ["/assets/beyoutiful/services/before-after.png"],
        dokter: [
            {
                nama_dokter: "dr. Teuku Adifitrian, Sp.B.P.R.E, Subsp. E.L.(K)",
                dokter_foto: "/assets/beyoutiful/services/dokter-1.jpg",
                jadwal_dokter: ["Rabu 10:00 - 12:00", "Sabtu 16:00 - 18:00"],
            },
        ],
    },
    {
        id: 7,
        name: "Radiologi",
        name_en: "Radiology",
        description: "Layanan radiologi untuk diagnosis yang lebih akurat.",
        description_en: "Radiology services for more accurate diagnosis.",
        slug: "radiologi",
        link: "/",
        image: "/assets/beyoutiful/services-3.png",
        before_after_foto: ["/assets/beyoutiful/services/before-after.png"],
        dokter: [
            {
                nama_dokter: "dr. Teuku Adifitrian, Sp.B.P.R.E, Subsp. E.L.(K)",
                dokter_foto: "/assets/beyoutiful/services/dokter-1.jpg",
                jadwal_dokter: ["Rabu 10:00 - 12:00", "Sabtu 16:00 - 18:00"],
            },
        ],
    },
];

export const doctors = [
    {
        id: 1,
        kategori: 'Surgery',
        subKategori: 'Face',
        nama: 'dr. Teuku Adifitrian, Sp.B.P.R.E, Subsp. E.L.(K)',
        jadwal: 'Senin, Rabu & Jumat (09.00-15.00) / Selasa, Kamis & Sabtu (09.00-17.00)',
        tanggalLahir: '22-Sep-1978',
        agama: 'Islam'
    },
    {
        id: 2,
        kategori: 'Surgery',
        subKategori: 'Face',
        nama: 'dr. Eko Herihadi, Sp.B.P.R.E',
        jadwal: 'Selasa - Kamis (09.00-15.00)',
        tanggalLahir: '9-Oct-1969',
        agama: 'Islam'
    },
    {
        id: 3,
        kategori: 'Surgery',
        subKategori: 'Face',
        nama: 'dr. Hendra Tri Hartono, Sp.B.P.R.E',
        jadwal: 'Selasa, Rabu & Jumat (09.00-16.00) / Sabtu (09.00-13.00)',
        tanggalLahir: '19-Jan-1989',
        agama: 'Kristen'
    },
    {
        id: 4,
        kategori: 'Surgery',
        subKategori: 'Face',
        nama: 'dr. Puti Adla Runisa, B.Med.Sc, Sp.B.P.R.E',
        jadwal: 'Senin, Selasa & Kamis (13.00-16.00)',
        tanggalLahir: '22-Feb-1981',
        agama: ''
    },
    {
        id: 5,
        kategori: 'Surgery',
        subKategori: 'General',
        nama: 'dr. Ali Sundoro, Sp.B.P.R.E, SubSp.KM (K)',
        jadwal: 'Jumat & Sabtu (08.00-12.00)',
        tanggalLahir: 'Feb-2',
        agama: 'Islam'
    },
    {
        id: 6,
        kategori: 'Surgery',
        subKategori: 'General',
        nama: 'dr. Linawati Makmur, Sp.B.P.R.E',
        jadwal: 'Senin & Kamis (09.00-15.00)',
        tanggalLahir: '15-Aug-1966',
        agama: 'Kristen'
    },
    {
        id: 7,
        kategori: 'Surgery',
        subKategori: 'General',
        nama: 'dr. Huntal Napoleon, Sp.BP-RE, Subsp-LBL (K), FIHFAA',
        jadwal: 'Selasa (12.00-15.00) / Sabtu (09.00-12.00)',
        tanggalLahir: '',
        agama: ''
    },
    {
        id: 8,
        kategori: 'Surgery',
        subKategori: 'EXTERNAL GENITALIA',
        nama: 'dr. Indri Aulia, Sp.B.P.R.E, Subsp.GE(K), MPd.Ked',
        jadwal: 'Senin, Rabu, Kamis & Sabtu (By Appointment)',
        tanggalLahir: '15-Oct-1986',
        agama: 'Islam'
    },
    {
        id: 9,
        kategori: 'Surgery',
        subKategori: 'Breast & Body',
        nama: 'dr. Jeihan Nabila, B.Med.Sc, Sp.B.P.R.E',
        jadwal: 'Senin, Selasa, Kamis (09.00-15.00) / Rabu (09.00-15.00) / Sabtu (By Appointment)',
        tanggalLahir: 'Mar-29',
        agama: 'Islam'
    },
    {
        id: 10,
        kategori: 'Surgery',
        subKategori: 'Breast & Body',
        nama: 'dr. Risa Crisanti, Sp.B.P.R.E',
        jadwal: 'Senin - Sabtu (09.00-15.00)',
        tanggalLahir: '14-May-1981',
        agama: 'Islam'
    },
    {
        id: 11,
        kategori: 'Surgery',
        subKategori: 'Breast & Body',
        nama: 'dr. Ruth F. M. Lumbuun, Sp.B.P.R.E',
        jadwal: 'Selasa & Kamis (14.00-17.00) / Jumat & Sabtu (9.00-15.00)',
        tanggalLahir: 'Apr-26',
        agama: 'Kristen'
    },
    {
        id: 12,
        kategori: 'Surgery',
        subKategori: 'Breast & Body',
        nama: 'dr. Laurent L Supit, Sp.B.P.R.E',
        jadwal: 'By Appointment',
        tanggalLahir: '30-Sep-1984',
        agama: 'Kristen'
    },
    {
        id: 13,
        kategori: 'Dermatology',
        subKategori: 'Dermatology',
        nama: 'dr. Catharina Ari Wilandani Sp.D.V.E FINSDV',
        jadwal: 'Selasa (09.00-17.00) / Jumat (13.00-17.00) / Sabtu (09.00-13.00, By Appointment)',
        tanggalLahir: '5-Nov-1981',
        agama: 'Kristen'
    },
    {
        id: 14,
        kategori: 'Dermatology',
        subKategori: 'Dermatology',
        nama: 'dr. Marsha Bianti, Sp.D.V.E',
        jadwal: 'Senin & Rabu (09.00-15.00)',
        tanggalLahir: '15-Mar-1989',
        agama: 'Kristen'
    },
    {
        id: 15,
        kategori: 'Dermatology',
        subKategori: 'Dermatology',
        nama: 'dr. Danar Wicaksono, M.Sc Sp.D.V.E',
        jadwal: 'Senin (By Appointment) / Kamis, Jumat & Sabtu (09.00-15.00)',
        tanggalLahir: '19-Jan-1990',
        agama: 'Islam'
    },
    {
        id: 16,
        kategori: 'Anesthesiology',
        subKategori: 'Anesthesiology',
        nama: 'dr. Betardi Aktara, Sp.An',
        jadwal: 'Senin, Selasa, Jumat (09.00-17.00)',
        tanggalLahir: '22-May-1981',
        agama: 'Kristen'
    },
    {
        id: 17,
        kategori: 'Anesthesiology',
        subKategori: 'Anesthesiology',
        nama: 'dr. Michael Mandagi, Sp.An',
        jadwal: 'Rabu, Kamis, Sabtu (09.00-17.00)',
        tanggalLahir: 'Jul-19',
        agama: 'Kristen'
    },
    {
        id: 18,
        kategori: 'Gizi',
        subKategori: 'Gizi',
        nama: 'dr. Arti Indira, M.Gizi, Sp.GK, FINEM',
        jadwal: 'Senin - Sabtu (09.00-17.00)',
        tanggalLahir: '9-Jul-1979',
        agama: 'Islam'
    },
    {
        id: 19,
        kategori: 'Vascular',
        subKategori: 'Vascular',
        nama: 'dr. Yuliardy Limengka, B.Med.Sc, Sp.B, Subsp.BVE(K)',
        jadwal: 'Senin, Rabu, Jumat & Sabtu (09.00-12.00)',
        tanggalLahir: '18-Jul-1982',
        agama: 'Islam'
    },
    {
        id: 20,
        kategori: 'Urology',
        subKategori: 'Urogology',
        nama: 'dr. Anggie Novaldy R, Sp.U',
        jadwal: 'Selasa, Kamis & Sabtu (09.00-10.30)',
        tanggalLahir: 'Jun-10',
        agama: 'Islam'
    },
    {
        id: 21,
        kategori: 'Hyperbaric',
        subKategori: 'Hyperbaric',
        nama: 'dr. Vidiarti Rahayu',
        jadwal: 'Senin - Sabtu (09.00-17.00)',
        tanggalLahir: '8-Feb-1995',
        agama: 'Islam'
    },
    {
        id: 22,
        kategori: 'Dental',
        subKategori: 'Dental',
        nama: 'drg. Anna Karerina Tanjung',
        jadwal: 'Senin (09.00-13.00) / Kamis (13.00-17.00)',
        tanggalLahir: 'Aug-26',
        agama: 'Islam'
    },
    {
        id: 23,
        kategori: 'Dental',
        subKategori: 'Dental',
        nama: 'drg. Melissa Delania, Sp.Pros',
        jadwal: 'Selasa & Kamis (13.00-17.00)',
        tanggalLahir: 'Dec-31',
        agama: 'Islam'
    },
    {
        id: 24,
        kategori: 'Dental',
        subKategori: 'Dental',
        nama: 'drg. Stefani Astari Dewi, Sp.KG',
        jadwal: 'Selasa & Jumat (09.00-13.00)',
        tanggalLahir: 'Dec-26',
        agama: ''
    },
    {
        id: 25,
        kategori: 'Dental',
        subKategori: 'Dental',
        nama: 'drg. Hirania Soraya, Sp.KG',
        jadwal: 'Selasa & Jumat (13.00-17.00)',
        tanggalLahir: 'Dec-23',
        agama: 'Islam'
    },
    {
        id: 26,
        kategori: 'Dental',
        subKategori: 'Dental',
        nama: 'drg. Eldyra Bela Bangsa',
        jadwal: 'Rabu & Jumat (09.00-13.00)',
        tanggalLahir: 'Oct-19',
        agama: ''
    },
    {
        id: 27,
        kategori: 'Dental',
        subKategori: 'Dental',
        nama: 'drg. Helsa Ramelya, Sp.KGA',
        jadwal: 'Rabu (13.00-17.00) / Sabtu (09.00-13.00)',
        tanggalLahir: 'Mar-31',
        agama: 'Islam'
    },
    {
        id: 30,
        kategori: 'Dental',
        subKategori: 'Dental',
        nama: 'drg. Adhyana S Novanto, Sp.Ort',
        jadwal: 'Kamis (09.00-13.00)',
        tanggalLahir: '15-Nov-1979',
        agama: 'Islam'
    },
    {
        id: 31,
        kategori: 'Dental',
        subKategori: 'Dental',
        nama: 'drg. Adhinara, Sp.Pros',
        jadwal: 'By Appointment',
        tanggalLahir: 'Mar-1',
        agama: 'Islam'
    },
    {
        id: 32,
        kategori: 'Dermatology',
        subKategori: 'Dermatology',
        nama: 'dr. Dita Mutia F. Budhiarta, MD',
        jadwal: '',
        tanggalLahir: 'Mar-2',
        agama: 'Budha'
    },
    {
        id: 33,
        kategori: 'Anesthesiology',
        subKategori: 'Anesthesiology',
        nama: 'dr. Muhammad Iqbal, Sp-An',
        jadwal: '',
        tanggalLahir: '',
        agama: 'Islam'
    },
    {
        id: 34,
        kategori: 'Anesthesiology',
        subKategori: 'Anesthesiology',
        nama: 'dr. Mega Halida, Sp-An',
        jadwal: '',
        tanggalLahir: '',
        agama: 'Islam'
    },
    {
        id: 35,
        kategori: 'Anesthesiology',
        subKategori: 'Anesthesiology',
        nama: 'dr. Mega Ayu Marina S.A, Sp-An',
        jadwal: '',
        tanggalLahir: '',
        agama: 'Islam'
    },
    {
        id: 36,
        kategori: 'Surgery',
        subKategori: 'General',
        nama: 'dr. Patricia Marcellina Sadikin, SpBP-RE',
        jadwal: '',
        tanggalLahir: '',
        agama: 'Kristen'
    },
    {
        id: 37,
        kategori: 'Dental',
        subKategori: 'Dental',
        nama: 'drg. Syah Yossy',
        jadwal: '',
        tanggalLahir: '',
        agama: ''
    }

];


