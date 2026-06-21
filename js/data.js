/* =====================================================
   DATA.js - SEMUA DATA STATIS
   Museum Bahari Ngera Shells
   
   ISI FILE:
   - koleksiData    → Data fosil per kategori (8 spesimen)
   - profilData     → Data profil tokoh (Pater Gabriel & Kalianus)
   - galeriData     → Data foto galeri per kategori (10 foto)
   - videoData      → Data video (YouTube + Lokal MP4)
   - dokumenData    → Data dokumen PDF legalitas
   - audioData      → Data audio guide
   
   CATATAN PENTING:
   - Semua path mengarah ke folder assets/
   - Pastikan file foto/video sudah diupload ke folder yang sesuai
   - Ada fallback system jika foto tidak ditemukan (di render.js)
   - Naming convention: [kategori]-[nama]-[###].[ext]
   
   DEPENDENCIES:
   - Tidak ada (file ini berdiri sendiri)
   - Dipakai oleh: narasi.js, render.js, app.js
   ===================================================== */

// =====================================================
// 1. DATA KOLEKSI FOSIL
// =====================================================
// 8 spesimen fosil dalam 4 kategori
// Path foto: assets/images/koleksi/[kategori]/[nama].png

const koleksiData = {
    // ---------- BIFALFIA (Kerang Dua Katup) ----------
    bifalfia: [
        { 
            id: 1, 
            nama: "Bifalfia Raksasa", 
            kategori: "Bifalfia", 
            asal: "Pantai Selatan Nggela", 
            periode: "Miosen (23-5 juta tahun lalu)", 
            deskripsi: "Fosil kerang bifalfia berukuran besar dengan ciri khas dua katup simetris. Ditemukan di formasi batuan kapur yang menyimpan kekayaan paleontologi luar biasa dari era Miosen.", 
            ciri: "Dua katup sejajar, permukaan bergaris radial dengan detail yang masih terlihat jelas", 
            nilaiEdukasi: "Bifalfia termasuk kelas Bivalvia. Siswa dapat mengamati simetri bilateral pada fosil ini dan mempelajari evolusi moluska laut dangkal.", 
            icon: "🐚",
            iconSvg: "assets/images/icons/icon-bifalfia.svg",
            img: "assets/images/koleksi/bifalfia/bifalfia-raksasa.png"
        },
        { 
            id: 2, 
            nama: "Bifalfia Tridacna", 
            kategori: "Bifalfia", 
            asal: "Perairan Ende", 
            periode: "Pliosen (5-2.5 juta tahun lalu)", 
            deskripsi: "Kerang raksasa purba, nenek moyang kima raksasa yang masih hidup hingga kini. Spesimen ini menunjukkan bagaimana kehidupan laut dalam telah beradaptasi selama jutaan tahun.", 
            ciri: "Katup tebal dengan lekukan seperti huruf V yang khas", 
            nilaiEdukasi: "Bandingkan dengan kima modern! Fosil ini menunjukkan evolusi moluska laut dangkal dan adaptasi terhadap lingkungan tropis.", 
            icon: "🐚",
            iconSvg: "assets/images/icons/icon-bifalfia.svg",
            img: "assets/images/koleksi/bifalfia/bifalfia-tridacna.png"
        }
    ],
    
    // ---------- GASTROPODA (Siput Laut) ----------
    gastropoda: [
        { 
            id: 3, 
            nama: "Gastropoda Turritella", 
            kategori: "Gastropoda", 
            asal: "Formasi Citalang, Barai", 
            periode: "Miosen Awal", 
            deskripsi: "Fosil siput dengan cangkang memanjang seperti menara. Sangat melimpah di batuan lempung dan menjadi indikator penting lingkungan laut purba.", 
            ciri: "Cangkang panjang berputar spiral, 10-12 lilitan dengan detail yang terjaga", 
            nilaiEdukasi: "Contoh sempurna untuk mempelajari adaptasi moluska terhadap arus laut dan perubahan lingkungan geologi.", 
            icon: "🐌",
            iconSvg: "assets/images/icons/icon-gastropoda.svg",
            img: "assets/images/koleksi/gastropoda/turritella.png"
        },
        { 
            id: 4, 
            nama: "Gastropoda Natica", 
            kategori: "Gastropoda", 
            asal: "Pulau Mbu'u", 
            periode: "Plistosen", 
            deskripsi: "Siput pemangsa kerang lain. Fosil ini menunjukkan lubang bor pada cangkang mangsanya, bukti langka perilaku predator di masa purba.", 
            ciri: "Cangkang bulat, umbilicus lebar dengan permukaan halus", 
            nilaiEdukasi: "Belajar tentang rantai makanan di laut purba melalui jejak predasi yang terawetkan sempurna.", 
            icon: "🐌",
            iconSvg: "assets/images/icons/icon-gastropoda.svg",
            img: "assets/images/koleksi/gastropoda/natica.png"
        }
    ],
    
    // ---------- SEPALOPODA (Cumi & Nautilus) ----------
    sepalopoda: [
        { 
            id: 5, 
            nama: "Sepalopoda Nautilus", 
            kategori: "Sepalopoda", 
            asal: "Perairan Sulawesi Utara", 
            periode: "Resen hingga Miosen", 
            deskripsi: "Nenek moyang cumi-cumi modern dengan cangkang luar yang indah. Nautilus adalah fosil hidup yang masih ada hingga hari ini.", 
            ciri: "Cangkang berbilik dengan ruang udara yang kompleks", 
            nilaiEdukasi: "Nautilus adalah 'fosil hidup'! Struktur biliknya menginspirasi desain kapal selam modern.", 
            icon: "🦑",
            iconSvg: "assets/images/icons/icon-museum.svg",
            img: "assets/images/koleksi/sepalopoda/nautilus.png"
        },
        { 
            id: 6, 
            nama: "Ammonit Sepalopoda", 
            kategori: "Sepalopoda", 
            asal: "Papua", 
            periode: "Kapur Akhir (100-66 juta tahun lalu)", 
            deskripsi: "Fosil ammonit dengan garis sutra yang rumit. Pemandu fosil untuk menentukan umur batuan dan memahami kepunahan massal.", 
            ciri: "Cangkang melingkar penuh dengan garis sekat berkerut yang indah", 
            nilaiEdukasi: "Ammonit adalah indeks fosil global. Siswa bisa belajar tentang kepunahan massal dan perubahan iklim purba.", 
            icon: "🦑",
            iconSvg: "assets/images/icons/icon-museum.svg",
            img: "assets/images/koleksi/sepalopoda/ammonit.png"
        }
    ],
    
    // ---------- ASTROPODA (Bintang Laut & Bulu Babi) ----------
    astropoda: [
        { 
            id: 7, 
            nama: "Astropoda Ophiura", 
            kategori: "Astropoda", 
            asal: "Bukit Kapur, Sulawesi Tenggara", 
            periode: "Miosen Tengah", 
            deskripsi: "Fosil bintang ular laut dengan lengan panjang dan ramping. Menunjukkan keragaman echinodermata di perairan Nusantara purba.", 
            ciri: "Lima lengan seperti cambuk, tubuh pusat kecil dengan struktur yang kompleks", 
            nilaiEdukasi: "Contoh echinodermata yang masih ada kerabatnya di laut Indonesia saat ini.", 
            icon: "⭐",
            iconSvg: "assets/images/icons/icon-museum.svg",
            img: "assets/images/koleksi/astropoda/ophiura.png"
        },
        { 
            id: 8, 
            nama: "Astropoda Cidaris", 
            kategori: "Astropoda", 
            asal: "Nusa Tenggara Timur", 
            periode: "Plistosen Awal", 
            deskripsi: "Fosil bulu babi dengan duri besar dan tebal. Spesimen ini memberikan wawasan tentang ekosistem laut dangkal di masa lalu.", 
            ciri: "Tubuh bulat dengan duri panjang yang terawetkan dengan baik", 
            nilaiEdukasi: "Mempelajari simetri radial pada hewan laut purba dan evolusi echinodermata.", 
            icon: "⭐",
            iconSvg: "assets/images/icons/icon-museum.svg",
            img: "assets/images/koleksi/astropoda/cidaris.png"
        }
    ]
};

// =====================================================
// 2. DATA PROFIL TOKOH
// =====================================================
// Path foto: assets/images/profil/[nama].png

const profilData = {
    paterGabriel: {
        nama: "Alm. Pater Gabriel Goran, SVD",
        jabatan: "Pendiri Museum Bahari Ende",
        foto: "assets/images/profil/pater-gabriel.png",
        lahir: "Tagawiti - Tobiwutung - Ile Ape, Lembata",
        tanggalLahir: "14 April 1941",
        wafat: "2012",
        biodata: `
            <p>Alm. Pater Gabriel Goran, SVD lahir di Tagawiti - Tobiwutung - Ile Ape, Lembata pada tanggal <strong>14 April 1941</strong>. Beliau merupakan anak kedua dari enam bersaudara dari pasangan Alm. Bapak Yohakim Lasan dan Alm. Mama Anna Bengang.</p>
            
            <h5><i class="fas fa-graduation-cap"></i> Perjalanan Pendidikan</h5>
            <ul>
                <li><strong>1949 - 1955:</strong> Sekolah Rakyat Katolik (SRK) Tobiwutung (Kelas I - III) dan SRK Lewotolo (Kelas IV - VI)</li>
                <li><strong>1955 - 1963:</strong> Seminari San Dominggo Hokeng (SMP & SMA)</li>
                <li><strong>1963 - 1965:</strong> Masa Novisiat di Seminari Tinggi St. Paulus Ledalero</li>
                <li><strong>1965 - 1970:</strong> Studi Filsafat dan Teologi, serta mengikrarkan kaul pertama dalam SVD</li>
                <li><strong>12 Desember 1970:</strong> Mengikrarkan kaul kekal di Seminari Tinggi St. Paulus Ledalero</li>
                <li><strong>31 Juli 1971:</strong> Ditahbiskan menjadi Imam di kampung halamannya, Tobiwutung</li>
            </ul>
            
            <h5><i class="fas fa-briefcase"></i> Perjalanan Pelayanan</h5>
            <ul>
                <li><strong>1 November 1971:</strong> Penempatan pertama untuk Regio SVD Ende</li>
                <li><strong>27 Desember 1971:</strong> Pastor Pembantu Paroki St. Yoseph Maumere</li>
                <li><strong>28 Juni 1975:</strong> Pastor Paroki St. Yoseph Maumere</li>
                <li><strong>17 Januari 1977:</strong> Pastor Pembantu di Paroki Mater Boni Concili Bajawa</li>
                <li><strong>17 April - 17 Juni 1978:</strong> Kursus Imam di Yogyakarta</li>
                <li><strong>3 Juni 1980:</strong> Membantu mengajar di SMAK Syuradikara, Biara St. Mikhael</li>
                <li><strong>Juli 1982:</strong> Belajar bahasa Inggris di London</li>
                <li><strong>Januari - Mei 1983:</strong> Tersiat Nemi di Nemi - Roma</li>
                <li><strong>1983:</strong> Pimpinan Umum Dua Mingguan DIAN dan Bulanan KUNANG-KUNANG</li>
                <li><strong>Januari 1985:</strong> Wakil Ketua Komisi Keadilan dan Perdamaian Provinsi SVD Ende</li>
            </ul>
            
            <h5><i class="fas fa-landmark"></i> Pendiri Museum Bahari</h5>
            <p>Selepas dari kegiatan membantu orang kecil, Pater Gabriel kembali memusatkan perhatian untuk membangun sebuah Museum. Gagasan ini mendapat respon positif dari Pemerintah Kabupaten Ende, dan akhirnya <strong>Museum Bahari berhasil dibangun dan diresmikan oleh Bupati Ende, Bapak Frans Gedowolo, pada tanggal 14 Agustus 1996</strong> dan terbuka untuk umum.</p>
            
            <h5><i class="fas fa-heart"></i> Masa Akhir Hayat</h5>
            <p>Pasca terserang penyakit stroke, ruang gerak Pater Gabriel terbatas di kamar dan tempat tidur hingga dipindahkan ke Biara Jompo Simeon Ledalero - Maumere. Pada tanggal <strong>11 November 2012</strong>, Pater Gabriel meminta bertemu dan menyerahkan Surat Kuasa kepada saya untuk melanjutkan segala usaha yang telah dirintisnya.</p>
        `
    },
    
    kalianus: {
        nama: "Kalianus Nusa Nipa",
        jabatan: "Pengelola Museum Bahari Ende",
        foto: "assets/images/profil/kalianus-nusa-nipa.png",
        lahir: "Fendo, Kecamatan Lio Timur, Kabupaten Ende, NTT",
        tanggalLahir: "2 Mei 1977",
        biodata: `
            <p>Kalianus Nusa Nipa lahir di <strong>Fendo, Kecamatan Lio Timur, Kabupaten Ende, Nusa Tenggara Timur</strong> pada tanggal <strong>2 Mei 1977</strong>, dari pasangan Alm. Bapak Yosep Woda dan Alm. Ibu Margareta Seno. Sejak kecil menjadi Anak Yatim dan diasuh oleh Alm. Bapak Karolus Keli, Mama Maria Deke, Mama Kristina Lero, dan Mama Theresia Eka.</p>
            
            <h5><i class="fas fa-graduation-cap"></i> Riwayat Pendidikan</h5>
            <ul>
                <li><strong>1983 - 1984:</strong> TK. ST Hellen Wolowaru - Ende</li>
                <li><strong>1984 - 1987:</strong> SD Katolik Ruteng 1</li>
                <li><strong>1987 - 1989:</strong> SD Katolik Fendo Ende</li>
                <li><strong>1989 - 1990:</strong> SD Impres Boanawa 1 Ende</li>
                <li><strong>1990 - 1993:</strong> SD Impres Tenda Ruteng</li>
                <li><strong>1993 - 1996:</strong> SMPN 1 Ruteng</li>
                <li><strong>1996 - 1999:</strong> SMK Yos Soedarso Ende</li>
            </ul>
            
            <h5><i class="fas fa-briefcase"></i> Perjalanan Karir</h5>
            <ul>
                <li><strong>1996 - 2003:</strong> Tenaga sukarela di Museum Bahari Ende (Taman Renungan Bung Karno)</li>
                <li><strong>2003 - 2010:</strong> Bekerja di UD. Bukit Cemara Jaya, Denpasar - Bali</li>
                <li><strong>Akhir 2010:</strong> Dipanggil kembali oleh Alm. Pater Gabriel Goran, SVD untuk melanjutkan usaha Museum Bahari</li>
                <li><strong>Januari 2013:</strong> Museum Bahari Ende dibongkar oleh Yayasan Ende Flores saat revitalisasi Taman Renungan Bung Karno</li>
                <li><strong>2016:</strong> Mendapat SK Bupati Ende sebagai Pengelola Museum Bahari (Dinas Pariwisata)</li>
                <li><strong>2017 - 2023:</strong> SK Kepala Dinas Pendidikan dan Kebudayaan Kabupaten Ende sebagai Staf Kebersihan Taman Renungan Bung Karno</li>
            </ul>
            
            <h5><i class="fas fa-book"></i> Karya Tulis</h5>
            <p>Buku yang pernah ditulis: <em>"DIALOG BERSAMA GAIB BUNG KARNO DIBAWAH POHON SUKUN"</em>, diterbitkan oleh Yayasan Tana Nua Ende, dicetak oleh Opu Printing pada <strong>Mei 2023</strong>.</p>
            
            <h5><i class="fas fa-lightbulb"></i> Inisiator Museum Virtual</h5>
            <p>Karena vakum dalam kurun waktu yang tidak menentu serta ketiadaan lahan dan biaya, muncul ide untuk merancang Museum secara Daring. Setelah berdiskusi dengan Bapak Markus Paru, sejak <strong>15 Juni 2026</strong> perancangan aplikasi khusus untuk Museum Bahari Ende "Ngera Shells" dimulai.</p>
        `
    }
};

// =====================================================
// 3. DATA GALERI FOTO
// =====================================================
// Path foto: assets/images/galeri/[kategori]/[nama]-[###].png
// Setiap foto masuk ke 2 array: 'semua' + kategori spesifik

const galeriData = {
    // ---------- SEMUA KEGIATAN (10 foto) ----------
    semua: [
        { id: 1, kategori: "ekspedisi", judul: "Ekspedisi Pantai Selatan Nggela", tanggal: "15 Maret 2026", img: "assets/images/galeri/ekspedisi/ekspedisi-nggela-001.png" },
        { id: 2, kategori: "ekspedisi", judul: "Tim Ekspedisi di Lapangan", tanggal: "15 Maret 2026", img: "assets/images/galeri/ekspedisi/ekspedisi-nggela-002.png" },
        { id: 3, kategori: "edukasi", judul: "Workshop Fosil untuk Siswa SMA", tanggal: "20 Maret 2026", img: "assets/images/galeri/edukasi/workshop-sma-001.png" },
        { id: 4, kategori: "edukasi", judul: "Sesi Praktik Workshop Fosil", tanggal: "20 Maret 2026", img: "assets/images/galeri/edukasi/workshop-sma-002.png" },
        { id: 5, kategori: "penelitian", judul: "Penelitian Formasi Batuan Kapur", tanggal: "5 April 2026", img: "assets/images/galeri/penelitian/riset-batuan-001.png" },
        { id: 6, kategori: "ekspedisi", judul: "Penemuan Fosil Bifalfia Baru", tanggal: "12 April 2026", img: "assets/images/galeri/ekspedisi/penemuan-baru-001.png" },
        { id: 7, kategori: "edukasi", judul: "Kunjungan Sekolah SMP Ende", tanggal: "25 April 2026", img: "assets/images/galeri/edukasi/kunjungan-smp-001.png" },
        { id: 8, kategori: "pelestarian", judul: "Konservasi Fosil Kerang Purba", tanggal: "3 Mei 2026", img: "assets/images/galeri/pelestarian/konservasi-001.png" },
        { id: 9, kategori: "penelitian", judul: "Analisis Laboratorium Fosil", tanggal: "15 Mei 2026", img: "assets/images/galeri/penelitian/lab-analysis-001.png" },
        { id: 10, kategori: "pelestarian", judul: "Restorasi Artefak Bahari", tanggal: "22 Mei 2026", img: "assets/images/galeri/pelestarian/restorasi-001.png" }
    ],
    
    // ---------- EKSPEDISI (3 foto) ----------
    ekspedisi: [
        { id: 1, kategori: "ekspedisi", judul: "Ekspedisi Pantai Selatan Nggela", tanggal: "15 Maret 2026", img: "assets/images/galeri/ekspedisi/ekspedisi-nggela-001.png" },
        { id: 2, kategori: "ekspedisi", judul: "Tim Ekspedisi di Lapangan", tanggal: "15 Maret 2026", img: "assets/images/galeri/ekspedisi/ekspedisi-nggela-002.png" },
        { id: 6, kategori: "ekspedisi", judul: "Penemuan Fosil Bifalfia Baru", tanggal: "12 April 2026", img: "assets/images/galeri/ekspedisi/penemuan-baru-001.png" }
    ],
    
    // ---------- EDUKASI (3 foto) ----------
    edukasi: [
        { id: 3, kategori: "edukasi", judul: "Workshop Fosil untuk Siswa SMA", tanggal: "20 Maret 2026", img: "assets/images/galeri/edukasi/workshop-sma-001.png" },
        { id: 4, kategori: "edukasi", judul: "Sesi Praktik Workshop Fosil", tanggal: "20 Maret 2026", img: "assets/images/galeri/edukasi/workshop-sma-002.png" },
        { id: 7, kategori: "edukasi", judul: "Kunjungan Sekolah SMP Ende", tanggal: "25 April 2026", img: "assets/images/galeri/edukasi/kunjungan-smp-001.png" }
    ],
    
    // ---------- PENELITIAN (2 foto) ----------
    penelitian: [
        { id: 5, kategori: "penelitian", judul: "Penelitian Formasi Batuan Kapur", tanggal: "5 April 2026", img: "assets/images/galeri/penelitian/riset-batuan-001.png" },
        { id: 9, kategori: "penelitian", judul: "Analisis Laboratorium Fosil", tanggal: "15 Mei 2026", img: "assets/images/galeri/penelitian/lab-analysis-001.png" }
    ],
    
    // ---------- PELESTARIAN (2 foto) ----------
    pelestarian: [
        { id: 8, kategori: "pelestarian", judul: "Konservasi Fosil Kerang Purba", tanggal: "3 Mei 2026", img: "assets/images/galeri/pelestarian/konservasi-001.png" },
        { id: 10, kategori: "pelestarian", judul: "Restorasi Artefak Bahari", tanggal: "22 Mei 2026", img: "assets/images/galeri/pelestarian/restorasi-001.png" }
    ]
};

// =====================================================
// 4. DATA VIDEO
// =====================================================
// Support 2 tipe video:
// - 'youtube' → pakai youtubeId (embed YouTube)
// - 'lokal'   → pakai lokalSrc (video MP4 di folder assets/videos/lokal/)
// Thumbnail: assets/images/video-thumbnails/[nama].png

const videoData = [
    { 
        id: 1, 
        judul: "Profil Museum Bahari Ngera Shells", 
        deskripsi: "Mengenal lebih dekat Museum Bahari Ende, sejarah berdirinya, dan koleksi fosil langka yang menjadi warisan Nusantara.", 
        type: "youtube",
        youtubeId: "dQw4w9WgXcQ",
        lokalSrc: "",
        kategori: "Profil", 
        tanggal: "15 Juni 2026", 
        durasi: "10:45",
        thumbnail: "assets/images/video-thumbnails/thumb-profil.png"
    },
    { 
        id: 2, 
        judul: "Ekspedisi Pencarian Fosil di Ende", 
        deskripsi: "Dokumentasi perjalanan tim Museum Bahari dalam mencari dan mengumpulkan fosil di berbagai lokasi di Kabupaten Ende.", 
        type: "lokal",
        youtubeId: "",
        lokalSrc: "assets/videos/lokal/ekspedisi-ende.mp4",
        kategori: "Ekspedisi", 
        tanggal: "20 April 2026", 
        durasi: "15:30",
        thumbnail: "assets/images/video-thumbnails/thumb-ekspedisi.png"
    },
    { 
        id: 3, 
        judul: "Workshop Edukasi Fosil untuk Siswa", 
        deskripsi: "Kegiatan pembelajaran tentang fosil dan paleontologi untuk siswa-siswi SMA di Kabupaten Ende.", 
        type: "lokal",
        youtubeId: "",
        lokalSrc: "assets/videos/lokal/workshop-fosil.mp4",
        kategori: "Edukasi", 
        tanggal: "5 Mei 2026", 
        durasi: "12:20",
        thumbnail: "assets/images/video-thumbnails/thumb-workshop.png"
    },
    { 
        id: 4, 
        judul: "Proses Konservasi Fosil Kerang Purba", 
        deskripsi: "Cara merawat, membersihkan, dan melestarikan fosil kerang purba untuk generasi mendatang.", 
        type: "youtube",
        youtubeId: "dQw4w9WgXcQ",
        lokalSrc: "",
        kategori: "Pelestarian", 
        tanggal: "12 Mei 2026", 
        durasi: "08:15",
        thumbnail: "assets/images/video-thumbnails/thumb-konservasi.png"
    },
    { 
        id: 5, 
        judul: "Sejarah Pater Gabriel Goran SVD", 
        deskripsi: "Kisah inspiratif Alm. Pater Gabriel Goran, SVD sebagai pendiri Museum Bahari Ende pada tahun 1996.", 
        type: "youtube",
        youtubeId: "dQw4w9WgXcQ",
        lokalSrc: "",
        kategori: "Sejarah", 
        tanggal: "1 Juni 2026", 
        durasi: "18:50",
        thumbnail: "assets/images/video-thumbnails/thumb-pater-gabriel.png"
    },
    { 
        id: 6, 
        judul: "Mengenal Bifalfia - Kerang Purba", 
        deskripsi: "Penjelasan lengkap tentang fosil Bifalfia, jenis kerang purba dengan dua katup simetris yang menjadi koleksi unggulan.", 
        type: "lokal",
        youtubeId: "",
        lokalSrc: "assets/videos/lokal/profil-museum.mp4",
        kategori: "Edukasi", 
        tanggal: "8 Juni 2026", 
        durasi: "09:30",
        thumbnail: "assets/images/video-thumbnails/thumb-bifalfia.png"
    }
];

// =====================================================
// 5. DATA DOKUMEN PDF
// =====================================================
// Path file: assets/documents/[nama].pdf
// Icon dari Font Awesome (fa-certificate, fa-file-signature, dll)

const dokumenData = [
    {
        id: 1,
        judul: "SK Pengelola Museum 2016",
        deskripsi: "Surat Keputusan Bupati Ende tentang Penunjukan Pengelola Museum Bahari pada Dinas Pariwisata Kabupaten Ende.",
        kategori: "Legalitas",
        icon: "fa-certificate",
        file: "assets/documents/SK-Pengelola-2016.pdf",
        ukuran: "1.2 MB",
        tanggal: "2016"
    },
    {
        id: 2,
        judul: "Surat Kuasa 2012",
        deskripsi: "Surat Kuasa dari Alm. Pater Gabriel Goran, SVD kepada Kalianus Nusa Nipa untuk melanjutkan usaha Museum Bahari.",
        kategori: "Legalitas",
        icon: "fa-file-signature",
        file: "assets/documents/Surat-Kuasa-2012.pdf",
        ukuran: "850 KB",
        tanggal: "11 November 2012"
    },
    {
        id: 3,
        judul: "Laporan Donasi 2026",
        deskripsi: "Laporan transparansi penggunaan dana donasi untuk pelestarian dan digitalisasi koleksi Museum Bahari.",
        kategori: "Laporan",
        icon: "fa-chart-bar",
        file: "assets/documents/Laporan-Donasi-2026.pdf",
        ukuran: "2.1 MB",
        tanggal: "Juni 2026"
    },
    {
        id: 4,
        judul: "Brosur Museum",
        deskripsi: "Brosur informasi lengkap Museum Bahari Ngera Shells: sejarah, koleksi, visi-misi, dan kontak.",
        kategori: "Informasi",
        icon: "fa-book-open",
        file: "assets/documents/Brosur-Museum.pdf",
        ukuran: "3.5 MB",
        tanggal: "2026"
    },
    {
        id: 5,
        judul: "Proposal Kerjasama",
        deskripsi: "Template proposal kerjasama untuk sekolah, universitas, dan instansi yang ingin bermitra dengan museum.",
        kategori: "Kerjasama",
        icon: "fa-handshake",
        file: "assets/documents/Proposal-Kerjasama.pdf",
        ukuran: "1.8 MB",
        tanggal: "2026"
    }
];

// =====================================================
// 6. DATA AUDIO GUIDE
// =====================================================
// Path file: assets/audio/[nama].mp3

const audioData = {
    museumTour: {
        judul: "Museum Tour Guide",
        deskripsi: "Audio panduan wisata virtual Museum Bahari Ngera Shells - jelajahi museum dari mana saja.",
        file: "assets/audio/museum-tour-guide.mp3",
        durasi: "15:30",
        icon: "fa-headphones"
    }
};

// =====================================================
// 7. DATA TAMBAHAN (OPSIONAL)
// =====================================================

// Info kontak museum
const kontakData = {
    admin: {
        nama: "Admin Utama",
        role: "Informasi Umum & Donasi",
        whatsapp: "6281353810065",
        display: "+62 813-5381-0065",
        fitur: ["Informasi Museum", "Donasi & Kerjasama", "Kunjungan Grup", "Respon Cepat"]
    },
    pengelola: {
        nama: "Pengelola Museum",
        role: "Koleksi & Edukasi",
        whatsapp: "6281338607300",
        display: "+62 813-3860-7300",
        fitur: ["Detail Koleksi Fosil", "Program Edukasi", "Riset & Penelitian", "Konsultasi Akademik"]
    },
    email: "info@ngerashells.id",
    alamat: "Ende, Nusa Tenggara Timur - Indonesia"
};

// Info rekening donasi
const donasiData = {
    bank: "Bank BNI",
    nomorRekening: "1234-5678-9012",
    atasNama: "Kalianus Nusa Nipa",
    qris: "assets/images/logo/qris-museum.png"
};

// Statistik museum (untuk counter di halaman Beranda)
const statsData = {
    koleksiFosil: 50,
    kelasUtama: 4,
    lokasiTemuan: 15,
    targetSiswa: 10000
};

// =====================================================
// LOGGING & EXPORT
// =====================================================

console.log('✅ Data loaded successfully');
console.log('📊 Data Summary:');
console.log('   - koleksiData:', Object.keys(koleksiData).length, 'categories,', 
            Object.values(koleksiData).reduce((sum, arr) => sum + arr.length, 0), 'items');
console.log('   - profilData:', Object.keys(profilData).length, 'profiles');
console.log('   - galeriData:', Object.keys(galeriData).length, 'categories,', galeriData.semua.length, 'photos');
console.log('   - videoData:', videoData.length, 'videos');
console.log('   - dokumenData:', dokumenData.length, 'documents');
console.log('   - audioData:', Object.keys(audioData).length, 'audio files');
console.log('   - kontakData:', Object.keys(kontakData).length, 'contacts');
console.log('   - donasiData: loaded');
console.log('   - statsData: loaded');

// Expose to global scope (untuk akses dari file JS lain)
window.koleksiData = koleksiData;
window.profilData = profilData;
window.galeriData = galeriData;
window.videoData = videoData;
window.dokumenData = dokumenData;
window.audioData = audioData;
window.kontakData = kontakData;
window.donasiData = donasiData;
window.statsData = statsData;