// ==========================================
// KONFIGURASI FIREBASE
// ==========================================
const firebaseConfig = {
  apiKey: "AIzaSyCzzUqEgP_xSFO1Kht1PPPSuF7v2k0r8DI",
  authDomain: "museumbahari-10de3.firebaseapp.com",
  databaseURL: "https://museumbahari-10de3-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "museumbahari-10de3",
  storageBucket: "museumbahari-10de3.firebasestorage.app",
  messagingSenderId: "1094004459031",
  appId: "1:1094004459031:web:82f4fe8875b247294cbe52",
  measurementId: "G-B1XZBF2YS2"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
const chatRef = db.ref('chat_messages');

// ============ DATA KOLEKSI ============
const koleksiData = {
    bifalfia: [
        { id: 1, nama: "Bifalfia Raksasa", kategori: "Bifalfia", asal: "Pantai Selatan Nggela", periode: "Miosen (23-5 juta tahun lalu)", deskripsi: "Fosil kerang bifalfia berukuran besar dengan ciri khas dua katup simetris. Ditemukan di formasi batuan kapur yang menyimpan kekayaan paleontologi luar biasa dari era Miosen.", ciri: "Dua katup sejajar, permukaan bergaris radial dengan detail yang masih terlihat jelas", nilaiEdukasi: "Bifalfia termasuk kelas Bivalvia. Siswa dapat mengamati simetri bilateral pada fosil ini dan mempelajari evolusi moluska laut dangkal.", icon: "🐚" },
        { id: 2, nama: "Bifalfia Tridacna", kategori: "Bifalfia", asal: "Perairan Ende", periode: "Pliosen (5-2.5 juta tahun lalu)", deskripsi: "Kerang raksasa purba, nenek moyang kima raksasa yang masih hidup hingga kini.", ciri: "Katup tebal dengan lekukan seperti huruf V yang khas", nilaiEdukasi: "Bandingkan dengan kima modern! Fosil ini menunjukkan evolusi moluska laut dangkal dan adaptasi terhadap lingkungan tropis.", icon: "🐚" }
    ],
    gastropoda: [
        { id: 3, nama: "Gastropoda Turritella", kategori: "Gastropoda", asal: "Formasi Citalang, Barai", periode: "Miosen Awal", deskripsi: "Fosil siput dengan cangkang memanjang seperti menara. Sangat melimpah di batuan lempung.", ciri: "Cangkang panjang berputar spiral, 10-12 lilitan", nilaiEdukasi: "Contoh sempurna untuk mempelajari adaptasi moluska terhadap arus laut.", icon: "🐌" },
        { id: 4, nama: "Gastropoda Natica", kategori: "Gastropoda", asal: "Pulau Mbu'u", periode: "Plistosen", deskripsi: "Siput pemangsa kerang lain dengan lubang bor pada cangkang mangsanya.", ciri: "Cangkang bulat, umbilicus lebar", nilaiEdukasi: "Belajar tentang rantai makanan di laut purba melalui jejak predasi.", icon: "🐌" }
    ],
    sepalopoda: [
        { id: 5, nama: "Sepalopoda Nautilus", kategori: "Sepalopoda", asal: "Perairan Sulawesi Utara", periode: "Resen hingga Miosen", deskripsi: "Nenek moyang cumi-cumi modern dengan cangkang luar yang indah.", ciri: "Cangkang berbilik dengan ruang udara", nilaiEdukasi: "Nautilus adalah 'fosil hidup'! Struktur biliknya menginspirasi kapal selam.", icon: "🦑" },
        { id: 6, nama: "Ammonit Sepalopoda", kategori: "Sepalopoda", asal: "Papua", periode: "Kapur Akhir (100-66 juta tahun lalu)", deskripsi: "Fosil ammonit dengan garis sutra yang rumit.", ciri: "Cangkang melingkar dengan garis sekat berkerut", nilaiEdukasi: "Ammonit adalah indeks fosil global untuk menentukan umur batuan.", icon: "🦑" }
    ],
    astropoda: [
        { id: 7, nama: "Astropoda Ophiura", kategori: "Astropoda", asal: "Bukit Kapur, Sulawesi Tenggara", periode: "Miosen Tengah", deskripsi: "Fosil bintang ular laut dengan lengan panjang dan ramping.", ciri: "Lima lengan seperti cambuk", nilaiEdukasi: "Contoh echinodermata yang masih ada kerabatnya di laut Indonesia.", icon: "⭐" },
        { id: 8, nama: "Astropoda Cidaris", kategori: "Astropoda", asal: "Nusa Tenggara Timur", periode: "Plistosen Awal", deskripsi: "Fosil bulu babi dengan duri besar dan tebal.", ciri: "Tubuh bulat dengan duri panjang", nilaiEdukasi: "Mempelajari simetri radial pada hewan laut purba.", icon: "⭐" }
    ]
};

// ============ DATA PROFIL (FOTO SUDAH DISESUAIKAN) ============
const profilData = {
    paterGabriel: {
        nama: "Alm. Pater Gabriel Goran, SVD",
        jabatan: "Pendiri Museum Bahari Ende",
        foto: "https://i.ibb.co.com/PswL5WGh/Chat-GPT-Image-Jun-15-2026-07-26-46-PM-removebg-preview.png",
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
            <p>Pasca terserang penyakit stroke, ruang gerak Pater Gabriel terbatas di kamar dan tempat tidur hingga dipindahkan ke Biara Jompo Simeon Ledalero - Maumere. Pada tanggal <strong>11 November 2012</strong>, Pater Gabriel meminta bertemu dan menyerahkan Surat Kuasa kepada Kalianus Nusa Nipa untuk melanjutkan segala usaha yang telah dirintisnya.</p>
        `
    },
    kalianus: {
        nama: "Kalianus Nusa Nipa",
        jabatan: "Pengelola Museum Bahari Ende",
        foto: "https://i.ibb.co.com/1JjmL40c/Chat-GPT-Image-Jun-15-2026-07-24-33-PM-removebg-preview-1.png",
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

// ============ DATA GALERI ============
const galeriData = {
    semua: [
        { id: 1, kategori: "ekspedisi", judul: "Ekspedisi Pantai Selatan Nggela", tanggal: "15 Maret 2026", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800" },
        { id: 2, kategori: "edukasi", judul: "Workshop Fosil untuk Siswa SMA", tanggal: "20 Maret 2026", img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800" },
        { id: 3, kategori: "penelitian", judul: "Penelitian Formasi Batuan Kapur", tanggal: "5 April 2026", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800" },
        { id: 4, kategori: "ekspedisi", judul: "Penemuan Fosil Bifalfia Baru", tanggal: "12 April 2026", img: "https://images.unsplash.com/photo-1518182170546-0766bc6dd02d?w=800" },
        { id: 5, kategori: "edukasi", judul: "Kunjungan Sekolah SMP Ende", tanggal: "25 April 2026", img: "https://images.unsplash.com/photo-1427504740703-45b2d9f9009b?w=800" },
        { id: 6, kategori: "pelestarian", judul: "Konservasi Fosil Kerang Purba", tanggal: "3 Mei 2026", img: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800" },
        { id: 7, kategori: "ekspedisi", judul: "Survei Lokasi Bukit Kapur", tanggal: "18 Mei 2026", img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800" },
        { id: 8, kategori: "edukasi", judul: "Seminar Paleontologi NTT", tanggal: "10 Juni 2026", img: "https://images.unsplash.com/photo-1544531585-9847b68c8c86?w=800" },
        { id: 9, kategori: "penelitian", judul: "Analisis Laboratorium Fosil", tanggal: "15 Mei 2026", img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800" },
        { id: 10, kategori: "pelestarian", judul: "Restorasi Artefak Bahari", tanggal: "22 Mei 2026", img: "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=800" }
    ],
    ekspedisi: [
        { id: 1, kategori: "ekspedisi", judul: "Ekspedisi Pantai Selatan Nggela", tanggal: "15 Maret 2026", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800" },
        { id: 4, kategori: "ekspedisi", judul: "Penemuan Fosil Bifalfia Baru", tanggal: "12 April 2026", img: "https://images.unsplash.com/photo-1518182170546-0766bc6dd02d?w=800" },
        { id: 7, kategori: "ekspedisi", judul: "Survei Lokasi Bukit Kapur", tanggal: "18 Mei 2026", img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800" }
    ],
    edukasi: [
        { id: 2, kategori: "edukasi", judul: "Workshop Fosil untuk Siswa SMA", tanggal: "20 Maret 2026", img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800" },
        { id: 5, kategori: "edukasi", judul: "Kunjungan Sekolah SMP Ende", tanggal: "25 April 2026", img: "https://images.unsplash.com/photo-1427504740703-45b2d9f9009b?w=800" },
        { id: 8, kategori: "edukasi", judul: "Seminar Paleontologi NTT", tanggal: "10 Juni 2026", img: "https://images.unsplash.com/photo-1544531585-9847b68c8c86?w=800" }
    ],
    penelitian: [
        { id: 3, kategori: "penelitian", judul: "Penelitian Formasi Batuan Kapur", tanggal: "5 April 2026", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800" },
        { id: 9, kategori: "penelitian", judul: "Analisis Laboratorium Fosil", tanggal: "15 Mei 2026", img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800" }
    ],
    pelestarian: [
        { id: 6, kategori: "pelestarian", judul: "Konservasi Fosil Kerang Purba", tanggal: "3 Mei 2026", img: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800" },
        { id: 10, kategori: "pelestarian", judul: "Restorasi Artefak Bahari", tanggal: "22 Mei 2026", img: "https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=800" }
    ]
};

// ============ DATA VIDEO YOUTUBE ============
const videoData = [
    { id: 1, judul: "Profil Museum Bahari Ngera Shells", deskripsi: "Mengenal lebih dekat Museum Bahari Ende, sejarah berdirinya, dan koleksi fosil langka yang menjadi warisan Nusantara.", youtubeId: "dQw4w9WgXcQ", kategori: "Profil", tanggal: "15 Juni 2026", durasi: "10:45" },
    { id: 2, judul: "Ekspedisi Pencarian Fosil di Ende", deskripsi: "Dokumentasi perjalanan tim Museum Bahari dalam mencari dan mengumpulkan fosil di berbagai lokasi di Kabupaten Ende.", youtubeId: "dQw4w9WgXcQ", kategori: "Ekspedisi", tanggal: "20 April 2026", durasi: "15:30" },
    { id: 3, judul: "Workshop Edukasi Fosil untuk Siswa", deskripsi: "Kegiatan pembelajaran tentang fosil dan paleontologi untuk siswa-siswi SMA di Kabupaten Ende.", youtubeId: "dQw4w9WgXcQ", kategori: "Edukasi", tanggal: "5 Mei 2026", durasi: "12:20" },
    { id: 4, judul: "Proses Konservasi Fosil Kerang Purba", deskripsi: "Cara merawat, membersihkan, dan melestarikan fosil kerang purba untuk generasi mendatang.", youtubeId: "dQw4w9WgXcQ", kategori: "Pelestarian", tanggal: "12 Mei 2026", durasi: "08:15" },
    { id: 5, judul: "Sejarah Pater Gabriel Goran SVD", deskripsi: "Kisah inspiratif Alm. Pater Gabriel Goran, SVD sebagai pendiri Museum Bahari Ende pada tahun 1996.", youtubeId: "dQw4w9WgXcQ", kategori: "Sejarah", tanggal: "1 Juni 2026", durasi: "18:50" },
    { id: 6, judul: "Mengenal Bifalfia - Kerang Purba", deskripsi: "Penjelasan lengkap tentang fosil Bifalfia, jenis kerang purba dengan dua katup simetris yang menjadi koleksi unggulan.", youtubeId: "dQw4w9WgXcQ", kategori: "Edukasi", tanggal: "8 Juni 2026", durasi: "09:30" }
];

// ============ NARASI KONTEN ============
const narasi = {
    profil: {
        judul: "Profil Museum",
        subjudul: "Mengenal lebih dekat Ngera Shells",
        konten: `
            <div class="section-header reveal">
                <span class="section-label">Profil Museum</span>
                <h2 class="section-title">Mengenal Lebih Dekat <span class="accent">Ngera Shells</span></h2>
                <p class="section-desc">
                <strong>"Ngera Shells"</strong> diambil dari nama <strong>Ngera</strong>, seorang leluhur dalam tradisi masyarakat Lio yang dihormati dan diyakini memiliki kekuatan supranatural. Secara etimologis, <strong>Ngera</strong> berasal dari ungkapan <strong>Nge Leka Ra</strong>, yang berarti <strong>"berasal dari darah yang sama"</strong>, melambangkan persaudaraan, kebersamaan, dan ikatan kekerabatan dalam satu garis keturunan.
                </p>
            </div>

            <div class="profil-card reveal">
                <div class="profil-card-inner">
                    <div class="profil-photo">
                        <div class="profil-photo-wrapper">
                            <img src="${profilData.paterGabriel.foto}" alt="${profilData.paterGabriel.nama}" onerror="this.src='https://via.placeholder.com/300x300/006994/ffffff?text=Pater+Gabriel'">
                        </div>
                        <div class="profil-badge"><i class="fas fa-crown"></i> Pendiri</div>
                    </div>
                    <div class="profil-info">
                        <h3>${profilData.paterGabriel.nama}</h3>
                        <p class="profil-jabatan"><i class="fas fa-cross"></i> ${profilData.paterGabriel.jabatan}</p>
                        <div class="profil-meta">
                            <span><i class="fas fa-birthday-cake"></i> ${profilData.paterGabriel.tanggalLahir}</span>
                            <span><i class="fas fa-map-marker-alt"></i> ${profilData.paterGabriel.lahir}</span>
                            <span><i class="fas fa-cross"></i> Wafat ${profilData.paterGabriel.wafat}</span>
                        </div>
                        <div class="profil-biodata">${profilData.paterGabriel.biodata}</div>
                    </div>
                </div>
            </div>

            <div class="profil-card reveal profil-card-reverse">
                <div class="profil-card-inner">
                    <div class="profil-photo">
                        <div class="profil-photo-wrapper">
                            <img src="${profilData.kalianus.foto}" alt="${profilData.kalianus.nama}" onerror="this.src='https://via.placeholder.com/300x300/006994/ffffff?text=Kalianus'">
                        </div>
                        <div class="profil-badge"><i class="fas fa-user-tie"></i> Pengelola</div>
                    </div>
                    <div class="profil-info">
                        <h3>${profilData.kalianus.nama}</h3>
                        <p class="profil-jabatan"><i class="fas fa-user"></i> ${profilData.kalianus.jabatan}</p>
                        <div class="profil-meta">
                            <span><i class="fas fa-birthday-cake"></i> ${profilData.kalianus.tanggalLahir}</span>
                            <span><i class="fas fa-map-marker-alt"></i> ${profilData.kalianus.lahir}</span>
                        </div>
                        <div class="profil-biodata">${profilData.kalianus.biodata}</div>
                    </div>
                </div>
            </div>

            <div class="quote-section" style="margin-top: 4rem; border-radius: 20px;">
                <div class="quote-content">
                    <p class="quote-text">"Museum Bahari Ende 'Ngera Shells' adalah museum virtual yang melestarikan warisan fosil dan kehidupan laut Nusantara untuk generasi mendatang."</p>
                    <p class="quote-author">— Visi Museum Ngera Shells</p>
                </div>
            </div>
        `
    },
    sejarah: {
        konten: `
            <div class="section-header reveal">
                <span class="section-label">Sejarah</span>
                <h2 class="section-title">Perjalanan <span class="accent">Ngera Shells</span></h2>
                <p class="section-desc">Dari museum fisik yang dibongkar hingga lahirnya museum virtual untuk seluruh Nusantara.</p>
            </div>
            <div class="timeline">
                <div class="timeline-item reveal"><div class="timeline-content"><div class="timeline-year">1996</div><h4>Berdirinya Museum Bahari</h4><p>Diresmikan oleh Bupati Ende, Bapak Frans Gedowolo, pada 14 Agustus 1996 di Taman Renungan Bung Karno.</p></div></div>
                <div class="timeline-item reveal"><div class="timeline-content"><div class="timeline-year">2010</div><h4>Penerus Estafet</h4><p>Kalianus Nusa Nipa dipanggil kembali oleh Pater Gabriel untuk melanjutkan usaha Museum Bahari.</p></div></div>
                <div class="timeline-item reveal"><div class="timeline-content"><div class="timeline-year">2012</div><h4>Surat Mandat Bersejarah</h4><p>11 November 2012, Pater Gabriel menyerahkan Surat Kuasa kepada Kalianus Nusa Nipa.</p></div></div>
                <div class="timeline-item reveal"><div class="timeline-content"><div class="timeline-year">2013</div><h4>Museum Dibongkar</h4><p>Januari 2013, Museum Bahari dibongkar oleh Yayasan Ende Flores. Koleksi diselamatkan di asrama Biara St. Yoseph.</p></div></div>
                <div class="timeline-item reveal"><div class="timeline-content"><div class="timeline-year">2016</div><h4>Pengakuan Resmi</h4><p>SK Bupati Ende sebagai Pengelola Museum Bahari pada Dinas Pariwisata.</p></div></div>
                <div class="timeline-item reveal"><div class="timeline-content"><div class="timeline-year">2026</div><h4>Lahirnya Museum Virtual</h4><p>15 Juni 2026, perancangan Museum Bahari daring "Ngera Shells" dimulai bersama Bapak Markus Paru.</p></div></div>
            </div>
        `
    },
    tujuan: {
        konten: `
            <div class="section-header reveal">
                <span class="section-label">Tujuan</span>
                <h2 class="section-title">Tiga Pilar <span class="accent">Ngera Shells</span></h2>
            </div>
            <div class="goals-grid">
                <div class="goal-card reveal"><div class="goal-icon"><i class="fas fa-graduation-cap"></i></div><h3>Edukasi Siswa</h3><p>Menyediakan materi pembelajaran biologi dan geologi yang aplikatif untuk guru dan siswa.</p></div>
                <div class="goal-card reveal"><div class="goal-icon"><i class="fas fa-landmark"></i></div><h3>Promosi Koleksi</h3><p>Mempromosikan pentingnya koleksi pribadi yang legal dan terdokumentasi.</p></div>
                <div class="goal-card reveal"><div class="goal-icon"><i class="fas fa-globe-asia"></i></div><h3>Pelestarian Budaya</h3><p>Melestarikan pengetahuan lokal tentang fosil dan geologi Nusantara.</p></div>
            </div>
        `
    },
    donasi: {
        konten: `
            <div class="section-header reveal">
                <span class="section-label">Donasi</span>
                <h2 class="section-title">Dukung <span class="accent">Ngera Shells</span></h2>
                <p class="section-desc">Dukungan Anda sangat berarti untuk mewujudkan Museum Fisik kembali di Kabupaten Ende.</p>
            </div>
            <div class="donate-container">
                <div class="donate-info reveal">
                    <h3>Mengapa Donasi Anda Penting?</h3>
                    <ul class="donate-list">
                        <li><i class="fas fa-camera"></i><div><strong>Digitalisasi Koleksi</strong></div></li>
                        <li><i class="fas fa-video"></i><div><strong>Video Edukasi 3D</strong></div></li>
                        <li><i class="fas fa-book"></i><div><strong>Modul Pembelajaran</strong></div></li>
                        <li><i class="fas fa-building"></i><div><strong>Pembangunan Museum Fisik</strong></div></li>
                    </ul>
                </div>
                <div class="donate-form reveal">
                    <h3>Salurkan Donasi</h3>
                    <div class="payment-method">
                        <div class="payment-header">
                            <div class="payment-icon"><i class="fas fa-university"></i></div>
                            <div><h4>Transfer Bank BNI</h4><small>a.n. Kalianus Nusa Nipa</small></div>
                        </div>
                        <div class="account-number">
                            <span>1234-5678-9012</span>
                            <button class="copy-btn" onclick="copyToClipboard('123456789012', this)"><i class="fas fa-copy"></i> Salin</button>
                        </div>
                    </div>
                    <div class="payment-method">
                        <div class="payment-header">
                            <div class="payment-icon"><i class="fas fa-qrcode"></i></div>
                            <div><h4>QRIS</h4><small>Scan dengan e-wallet</small></div>
                        </div>
                        <div class="qris-box">
                            <div class="qris-placeholder"><i class="fas fa-qrcode"></i></div>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
};

// ============ STATE MANAGEMENT ============
let currentPage = "home";
let currentSubmenu = null;
let currentGaleriKategori = "semua";
let currentLightboxIndex = 0;
let currentLightboxItems = [];

// Chat state
let chatListener = null;
let chatUserName = localStorage.getItem('chatUserName') || '';
let unreadMessages = 0;
let isChatOpen = false;

const mainContainer = document.getElementById("mainContainer");
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modalBody");
const modalClose = document.getElementById("modalClose");
const navbar = document.getElementById("navbar");
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");
const backToTop = document.getElementById("backToTop");
const lightbox = document.getElementById("lightbox");
const lightboxClose = document.getElementById("lightboxClose");
const lightboxPrev = document.getElementById("lightboxPrev");
const lightboxNext = document.getElementById("lightboxNext");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxCaption = document.getElementById("lightboxCaption");

// Chat elements
const chatFab = document.getElementById("chatFab");
const chatWindow = document.getElementById("chatWindow");
const chatMessages = document.getElementById("chatMessages");
const chatInput = document.getElementById("chatInput");
const chatName = document.getElementById("chatName");
const chatSend = document.getElementById("chatSend");
const chatCloseBtn = document.getElementById("chatCloseBtn");
const chatBadge = document.getElementById("chatBadge");

if (chatUserName) chatName.value = chatUserName;

// ============ RENDER FUNCTIONS ============
function render() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    if (currentPage === "home") renderHome();
    else if (currentPage === "profil") renderProfil();
    else if (currentPage === "sejarah") renderSejarah();
    else if (currentPage === "tujuan") renderTujuan();
    else if (currentPage === "donasi") renderDonasi();
    else if (currentPage === "galeri") renderGaleri();
    else if (currentPage === "youtube") renderYoutube();
    else if (currentPage === "chat") renderChat();
    else if (currentPage === "koleksi" && currentSubmenu) renderKoleksiSubmenu(currentSubmenu);
    
    updateActiveNav();
    initRevealAnimations();
    navMenu.classList.remove('active');
}

function renderHome() {
    mainContainer.innerHTML = `
        <section class="hero">
            <div class="hero-content">
                <div class="hero-badge">
                    <i class="fas fa-water"></i>
                    <span>Museum Virtual Bahari Ende</span>
                </div>
                <h1>Selamat Datang di <span class="accent">Ngera Shells</span></h1>
                <p class="hero-subtitle">Museum Bahari Ende — "Rumah Kita"</p>
                <p class="hero-desc">Melestarikan warisan fosil dan kehidupan laut Nusantara. Mengumpulkan, mendokumentasikan, dan menarasikan kekayaan paleontologi untuk tujuan edukasi, perlindungan, dan pelestarian alam.</p>
                <div class="hero-buttons">
                    <a href="#" class="btn btn-primary" data-submenu="bifalfia">
                        <i class="fas fa-compass"></i> Jelajahi Koleksi
                    </a>
                    <a href="#" class="btn btn-outline" data-page="galeri">
                        <i class="fas fa-images"></i> Lihat Galeri
                    </a>
                </div>
            </div>
            <div class="hero-scroll">
                <span>Scroll</span>
                <i class="fas fa-chevron-down"></i>
            </div>
        </section>

        <section class="stats">
            <div class="stats-grid">
                <div class="stat-item"><div class="stat-number" data-target="50">0</div><div class="stat-label">Koleksi Fosil</div></div>
                <div class="stat-item"><div class="stat-number" data-target="4">0</div><div class="stat-label">Kelas Utama</div></div>
                <div class="stat-item"><div class="stat-number" data-target="15">0</div><div class="stat-label">Lokasi Temuan</div></div>
                <div class="stat-item"><div class="stat-number" data-target="10000">0</div><div class="stat-label">Target Siswa</div></div>
            </div>
        </section>

        <section class="section">
            <div class="section-header reveal">
                <span class="section-label">Koleksi Unggulan</span>
                <h2 class="section-title">Empat Kelas <span class="accent">Fosil Utama</span></h2>
                <p class="section-desc">Jelajahi kekayaan paleontologi Nusantara melalui empat kelas fosil invertebrata.</p>
            </div>
            <div class="collection-grid">
                ${Object.entries(koleksiData).map(([key, items]) => {
                    const infoMap = {
                        bifalfia: { title: "Bifalfia", desc: "Kerang purba dua katup", icon: "🐚", color: "#006994" },
                        gastropoda: { title: "Gastropoda", desc: "Siput laut purba", icon: "🐌", color: "#4099c7" },
                        sepalopoda: { title: "Sepalopoda", desc: "Cumi & Nautilus purba", icon: "🦑", color: "#003366" },
                        astropoda: { title: "Astropoda", desc: "Bintang laut purba", icon: "⭐", color: "#001f3f" }
                    };
                    const info = infoMap[key];
                    return `
                        <div class="collection-card reveal" data-submenu="${key}">
                            <div class="collection-img" style="background: linear-gradient(135deg, ${info.color}22, ${info.color}44);">
                                <span class="collection-category">${info.title}</span>
                                ${info.icon}
                            </div>
                            <div class="collection-info">
                                <h3>${info.title}</h3>
                                <div class="collection-meta">
                                    <span><i class="fas fa-cube"></i> ${items.length} Spesimen</span>
                                    <span><i class="fas fa-map-marker-alt"></i> Nusantara</span>
                                </div>
                                <p class="collection-desc">${info.desc}.</p>
                                <a href="#" class="collection-link" data-submenu="${key}">
                                    Lihat Koleksi <i class="fas fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        </section>

        <section class="section" style="text-align:center;">
            <div class="reveal">
                <h2 class="section-title">Jelajahi <span class="accent">Media Kami</span></h2>
                <p class="section-desc" style="max-width:700px; margin:1rem auto 2rem;">Saksikan dokumentasi kegiatan dan video edukasi melalui galeri foto dan channel YouTube resmi Museum Bahari Ngera Shells.</p>
                <div style="display:flex; gap:1rem; justify-content:center; flex-wrap:wrap;">
                    <a href="#" class="btn btn-primary" data-page="galeri">
                        <i class="fas fa-images"></i> Galeri Foto
                    </a>
                    <a href="#" class="btn btn-outline" data-page="youtube" style="color:var(--ocean-dark); border-color:var(--ocean-primary);">
                        <i class="fab fa-youtube" style="color:#ff0000;"></i> Video Youtube
                    </a>
                    <a href="#" class="btn btn-outline" data-page="chat" style="color:var(--ocean-dark); border-color:var(--ocean-primary);">
                        <i class="fas fa-comments"></i> Chat Publik
                    </a>
                </div>
            </div>
        </section>

        <section class="quote-section">
            <div class="quote-content">
                <p class="quote-text">"Setiap fosil adalah saksi bisu perjalanan bumi Nusantara. Melestarikannya adalah tugas kita bersama untuk generasi mendatang."</p>
                <p class="quote-author">— Museum Bahari Ende "Ngera Shells"</p>
            </div>
        </section>

        <section class="section" style="text-align:center;">
            <div class="reveal">
                <h2 class="section-title">Bantu Wujudkan <span class="accent">Museum Fisik</span> Kembali</h2>
                <p class="section-desc" style="max-width:700px; margin:1rem auto 2rem;">Melalui aplikasi daring ini, kami mengumpulkan donasi dari dukungan masyarakat luas dalam mewujudkan pembangunan Museum secara fisik nyata di Kabupaten Ende - Nusa Tenggara Timur - Indonesia.</p>
                <a href="#" class="btn btn-primary" data-page="donasi">
                    <i class="fas fa-hand-holding-heart"></i> Dukung Kami
                </a>
            </div>
        </section>
    `;
    
    attachHomeEvents();
    animateStats();
}

function renderProfil() {
    mainContainer.innerHTML = `
        <section class="section" style="padding-top: 8rem;">
            ${narasi.profil.konten}
        </section>
    `;
}

function renderSejarah() {
    mainContainer.innerHTML = `
        <section class="section" style="padding-top: 8rem;">
            ${narasi.sejarah.konten}
        </section>
    `;
}

function renderTujuan() {
    mainContainer.innerHTML = `
        <section class="section" style="padding-top: 8rem;">
            ${narasi.tujuan.konten}
        </section>
    `;
}

function renderDonasi() {
    mainContainer.innerHTML = `
        <section class="section" style="padding-top: 8rem;">
            ${narasi.donasi.konten}
        </section>
    `;
}

// ============ RENDER GALERI ============
function renderGaleri() {
    mainContainer.innerHTML = `
        <section class="section" style="padding-top: 8rem;">
            <div class="section-header reveal">
                <span class="section-label">Dokumentasi</span>
                <h2 class="section-title">Galeri <span class="accent">Kegiatan Museum</span></h2>
                <p class="section-desc">Momen-momen berharga dari berbagai kegiatan Museum Bahari Ngera Shells. Klik foto untuk melihat lebih detail.</p>
            </div>
            
            <div class="galeri-tabs reveal">
                <button class="galeri-tab ${currentGaleriKategori === 'semua' ? 'active' : ''}" data-kategori="semua">
                    <i class="fas fa-th"></i> Semua Kegiatan
                </button>
                <button class="galeri-tab ${currentGaleriKategori === 'ekspedisi' ? 'active' : ''}" data-kategori="ekspedisi">
                    <i class="fas fa-compass"></i> Ekspedisi
                </button>
                <button class="galeri-tab ${currentGaleriKategori === 'edukasi' ? 'active' : ''}" data-kategori="edukasi">
                    <i class="fas fa-graduation-cap"></i> Edukasi
                </button>
                <button class="galeri-tab ${currentGaleriKategori === 'penelitian' ? 'active' : ''}" data-kategori="penelitian">
                    <i class="fas fa-microscope"></i> Penelitian
                </button>
                <button class="galeri-tab ${currentGaleriKategori === 'pelestarian' ? 'active' : ''}" data-kategori="pelestarian">
                    <i class="fas fa-leaf"></i> Pelestarian
                </button>
            </div>
            
            <div class="galeri-container">
                <div class="galeri-grid reveal" id="galeriGrid">
                    ${renderGaleriItems(currentGaleriKategori)}
                </div>
            </div>
        </section>
    `;
    
    attachGaleriEvents();
    attachLightboxEvents();
    initRevealAnimations();
}

function renderGaleriItems(kategori) {
    const items = kategori === 'semua' ? galeriData.semua : galeriData[kategori] || [];
    if (items.length === 0) {
        return '<div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-light);"><i class="fas fa-images" style="font-size: 3rem; margin-bottom: 1rem; display: block;"></i>Belum ada foto untuk kategori ini</div>';
    }
    return items.map(item => `
        <div class="galeri-item" data-id="${item.id}" data-kategori="${item.kategori}">
            <img src="${item.img}" alt="${item.judul}" loading="lazy">
            <div class="galeri-icon">
                <i class="fas fa-search-plus"></i>
            </div>
            <div class="galeri-overlay">
                <div class="galeri-title">${item.judul}</div>
                <div class="galeri-date"><i class="fas fa-calendar"></i> ${item.tanggal}</div>
            </div>
        </div>
    `).join('');
}

function attachGaleriEvents() {
    document.querySelectorAll('.galeri-tab').forEach(tab => {
        tab.onclick = () => {
            document.querySelectorAll('.galeri-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentGaleriKategori = tab.dataset.kategori;
            const grid = document.getElementById('galeriGrid');
            grid.innerHTML = renderGaleriItems(currentGaleriKategori);
            attachLightboxEvents();
        };
    });
}

// ============ RENDER YOUTUBE ============
function renderYoutube() {
    mainContainer.innerHTML = `
        <section class="section" style="padding-top: 8rem;">
            <div class="section-header reveal">
                <span class="section-label">Video Edukasi</span>
                <h2 class="section-title">Channel <span class="accent">Youtube Resmi</span></h2>
                <p class="section-desc">Tonton video dokumentasi kegiatan, edukasi fosil, dan profil Museum Bahari Ngera Shells.</p>
            </div>
            
            <div class="youtube-intro reveal">
                <h3><i class="fab fa-youtube"></i> Subscribe Channel Kami</h3>
                <p>Dapatkan update video terbaru seputar dunia fosil, paleontologi, dan kehidupan laut Nusantara.</p>
                <a href="https://www.youtube.com/channel/UCxxx" target="_blank" class="btn btn-primary" style="margin-top:1rem; background: linear-gradient(135deg, #ff0000, #cc0000);">
                    <i class="fab fa-youtube"></i> Subscribe Sekarang
                </a>
            </div>
            
            <div class="youtube-container">
                <div class="video-grid">
                    ${videoData.map(video => `
                        <div class="video-item reveal">
                            <div class="video-wrapper">
                                <iframe 
                                    src="https://www.youtube.com/embed/${video.youtubeId}" 
                                    title="${video.judul}"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowfullscreen>
                                </iframe>
                            </div>
                            <div class="video-info">
                                <h4><i class="fab fa-youtube"></i> ${video.judul}</h4>
                                <p>${video.deskripsi}</p>
                                <div class="video-meta">
                                    <span><i class="fas fa-tag"></i> ${video.kategori}</span>
                                    <span><i class="fas fa-calendar"></i> ${video.tanggal}</span>
                                    <span><i class="fas fa-clock"></i> ${video.durasi}</span>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
    `;
    
    initRevealAnimations();
}

// ============ RENDER CHAT PAGE ============
function renderChat() {
    mainContainer.innerHTML = `
        <section class="section" style="padding-top: 8rem;">
            <div class="chat-page-container reveal">
                <div class="chat-page-header">
                    <h2><i class="fas fa-comments"></i> Chat Publik Ngera Shells</h2>
                    <p>Diskusi santai seputar fosil, museum, dan kehidupan laut Nusantara</p>
                </div>
                <div class="chat-page-messages" id="chatPageMessages">
                    <div class="chat-empty">
                        <i class="fas fa-comments"></i>
                        <p>Memuat pesan...</p>
                    </div>
                </div>
                <div class="chat-page-input-area">
                    <form class="chat-page-form" id="chatPageForm">
                        <input type="text" id="chatPageName" placeholder="Nama Anda" maxlength="30" value="${chatUserName}" required>
                        <textarea id="chatPageInput" placeholder="Tulis pesan Anda di sini..." rows="1" maxlength="500" required></textarea>
                        <button type="submit"><i class="fas fa-paper-plane"></i> Kirim</button>
                    </form>
                </div>
            </div>
        </section>
    `;
    
    const chatPageForm = document.getElementById('chatPageForm');
    const chatPageInput = document.getElementById('chatPageInput');
    const chatPageName = document.getElementById('chatPageName');
    const chatPageMessages = document.getElementById('chatPageMessages');
    
    chatPageForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const nama = chatPageName.value.trim();
        const pesan = chatPageInput.value.trim();
        if (!nama || !pesan) return;
        
        sendMessage(nama, pesan);
        chatPageInput.value = '';
        chatUserName = nama;
        localStorage.setItem('chatUserName', nama);
    });
    
    loadChatMessages(chatPageMessages);
}

// ============ FIREBASE CHAT FUNCTIONS ============
function sendMessage(nama, pesan) {
    const kataKasar = ['anjing', 'bajingan', 'kontol', 'memek', 'bangsat', 'goblok', 'tolol', 'asu'];
    const pesanLower = pesan.toLowerCase();
    let filteredPesan = pesan;
    kataKasar.forEach(kata => {
        if (pesanLower.includes(kata)) {
            filteredPesan = filteredPesan.replace(new RegExp(kata, 'gi'), '***');
        }
    });
    
    const newMessage = {
        nama: nama,
        pesan: filteredPesan,
        timestamp: firebase.database.ServerValue.TIMESTAMP
    };
    
    chatRef.push(newMessage)
        .then(() => console.log('Pesan terkirim'))
        .catch((error) => {
            console.error('Error mengirim pesan:', error);
            alert('Gagal mengirim pesan. Silakan coba lagi.');
        });
}

function loadChatMessages(container) {
    if (chatListener) chatListener.off();
    
    chatListener = chatRef.orderByChild('timestamp').limitToLast(50);
    
    chatListener.on('value', (snapshot) => {
        const data = snapshot.val();
        if (!data) {
            container.innerHTML = `
                <div class="chat-empty">
                    <i class="fas fa-comments"></i>
                    <p>Belum ada pesan.<br>Jadilah yang pertama memulai percakapan!</p>
                </div>
            `;
            return;
        }
        
        const messages = Object.values(data).sort((a, b) => a.timestamp - b.timestamp);
        container.innerHTML = messages.map(msg => createMessageHTML(msg)).join('');
        container.scrollTop = container.scrollHeight;
    });
}

function createMessageHTML(msg) {
    const isMine = msg.nama === chatUserName;
    const time = new Date(msg.timestamp).toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
    const initial = msg.nama.charAt(0).toUpperCase();
    const escapedPesan = escapeHTML(msg.pesan);
    
    return `
        <div class="chat-message ${isMine ? 'mine' : ''}">
            <div class="chat-avatar">${initial}</div>
            <div class="chat-bubble">
                <span class="chat-bubble-name">${escapeHTML(msg.nama)}</span>
                <div class="chat-bubble-text">${escapedPesan}</div>
                <span class="chat-bubble-time">${time}</span>
            </div>
        </div>
    `;
}

function escapeHTML(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

function initChatWidget() {
    const widgetListener = chatRef.orderByChild('timestamp').limitToLast(20);
    
    widgetListener.on('value', (snapshot) => {
        const data = snapshot.val();
        if (!data) {
            chatMessages.innerHTML = `
                <div class="chat-empty">
                    <i class="fas fa-comments"></i>
                    <p>Belum ada pesan.<br>Jadilah yang pertama memulai percakapan!</p>
                </div>
            `;
            return;
        }
        
        const messages = Object.values(data).sort((a, b) => a.timestamp - b.timestamp);
        chatMessages.innerHTML = messages.map(msg => createMessageHTML(msg)).join('');
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        if (!isChatOpen) {
            const lastMsg = messages[messages.length - 1];
            if (lastMsg && lastMsg.nama !== chatUserName) {
                unreadMessages++;
                chatBadge.textContent = unreadMessages > 99 ? '99+' : unreadMessages;
                chatBadge.classList.remove('hidden');
            }
        }
    });
}

function toggleChat() {
    isChatOpen = !isChatOpen;
    chatWindow.classList.toggle('active', isChatOpen);
    chatFab.classList.toggle('active', isChatOpen);
    
    if (isChatOpen) {
        unreadMessages = 0;
        chatBadge.classList.add('hidden');
        chatInput.focus();
        setTimeout(() => {
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 300);
    }
}

// ============ LIGHTBOX FUNCTIONS ============
function attachLightboxEvents() {
    currentLightboxItems = currentGaleriKategori === 'semua' ? galeriData.semua : galeriData[currentGaleriKategori] || [];
    
    document.querySelectorAll('.galeri-item').forEach((item, index) => {
        item.onclick = () => {
            currentLightboxIndex = index;
            openLightbox();
        };
    });
}

function openLightbox() {
    const data = currentLightboxItems[currentLightboxIndex];
    lightboxImg.src = data.img;
    lightboxCaption.innerHTML = `<strong>${data.judul}</strong><br><small><i class="fas fa-calendar"></i> ${data.tanggal}</small>`;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

lightboxClose.onclick = closeLightbox;
lightbox.onclick = (e) => { if (e.target === lightbox) closeLightbox(); };

lightboxPrev.onclick = () => {
    currentLightboxIndex = (currentLightboxIndex - 1 + currentLightboxItems.length) % currentLightboxItems.length;
    openLightbox();
};

lightboxNext.onclick = () => {
    currentLightboxIndex = (currentLightboxIndex + 1) % currentLightboxItems.length;
    openLightbox();
};

// ============ RENDER KOLEKSI ============
function renderKoleksiSubmenu(submenu) {
    const items = koleksiData[submenu];
    if (!items) return;
    
    const judulMap = { bifalfia: "Bifalfia", gastropoda: "Gastropoda", sepalopoda: "Sepalopoda", astropoda: "Astropoda" };
    const descMap = { bifalfia: "Kerang purba dengan dua katup simetris", gastropoda: "Siput laut purba dengan cangkang spiral", sepalopoda: "Nenek moyang cumi-cumi dan nautilus", astropoda: "Bintang laut dan bulu babi dari era purba" };
    
    mainContainer.innerHTML = `
        <section class="section" style="padding-top: 8rem;">
            <div class="section-header reveal">
                <span class="section-label">Koleksi</span>
                <h2 class="section-title">Koleksi <span class="accent">${judulMap[submenu]}</span></h2>
                <p class="section-desc">${descMap[submenu]}</p>
            </div>
            <div class="category-tabs">
                ${Object.keys(koleksiData).map(key => `
                    <button class="category-tab ${key === submenu ? 'active' : ''}" data-submenu="${key}">
                        ${koleksiData[key][0].icon} ${judulMap[key]}
                    </button>
                `).join('')}
            </div>
            <div class="collection-grid">
                ${items.map(item => `
                    <div class="collection-card reveal" data-id="${item.id}" data-submenu="${submenu}">
                        <div class="collection-img">
                            <span class="collection-category">${item.kategori}</span>
                            ${item.icon}
                        </div>
                        <div class="collection-info">
                            <h3>${item.nama}</h3>
                            <div class="collection-meta">
                                <span><i class="fas fa-map-marker-alt"></i> ${item.asal}</span>
                                <span><i class="fas fa-clock"></i> ${item.periode}</span>
                            </div>
                            <p class="collection-desc">${item.deskripsi.substring(0, 120)}...</p>
                            <a href="#" class="collection-link">Lihat Detail <i class="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                `).join('')}
            </div>
        </section>
    `;
    
    attachCollectionEvents(submenu);
}

// ============ MODAL FUNCTIONS ============
function showDetail(submenu, id) {
    const item = koleksiData[submenu].find(i => i.id === id);
    if (!item) return;
    
    modalBody.innerHTML = `
        <div class="modal-hero">${item.icon}</div>
        <div class="modal-body">
            <span class="modal-category">${item.kategori}</span>
            <h2>${item.nama}</h2>
            <div class="modal-info-grid">
                <div class="modal-info-item"><small>Lokasi</small><strong><i class="fas fa-map-marker-alt"></i> ${item.asal}</strong></div>
                <div class="modal-info-item"><small>Periode</small><strong><i class="fas fa-clock"></i> ${item.periode}</strong></div>
                <div class="modal-info-item"><small>Ciri Khas</small><strong><i class="fas fa-fingerprint"></i> ${item.ciri}</strong></div>
            </div>
            <div class="modal-section"><h4><i class="fas fa-book-open"></i> Deskripsi</h4><p>${item.deskripsi}</p></div>
            <div class="modal-section"><div class="education-box"><h4><i class="fas fa-graduation-cap"></i> Nilai Edukasi</h4><p>${item.nilaiEdukasi}</p></div></div>
        </div>
    `;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// ============ EVENT HANDLERS ============
function attachHomeEvents() {
    document.querySelectorAll('[data-page]').forEach(el => {
        el.onclick = (e) => {
            e.preventDefault();
            currentPage = el.dataset.page;
            currentSubmenu = null;
            render();
        };
    });
    document.querySelectorAll('[data-submenu]').forEach(el => {
        el.onclick = (e) => {
            e.preventDefault();
            currentPage = "koleksi";
            currentSubmenu = el.dataset.submenu;
            render();
        };
    });
}

function attachCollectionEvents(submenu) {
    document.querySelectorAll('.category-tab').forEach(tab => {
        tab.onclick = () => {
            currentSubmenu = tab.dataset.submenu;
            render();
        };
    });
    document.querySelectorAll('.collection-card').forEach(card => {
        card.onclick = () => {
            const id = parseInt(card.dataset.id);
            showDetail(submenu, id);
        };
    });
}

function updateActiveNav() {
    document.querySelectorAll('.nav-menu > li > a').forEach(link => link.classList.remove('active'));
    
    let selector = '';
    if (currentPage === "home") selector = '.nav-menu a[data-page="home"]';
    else if (currentPage === "profil") selector = '.nav-menu a[data-page="profil"]';
    else if (currentPage === "sejarah") selector = '.nav-menu a[data-page="sejarah"]';
    else if (currentPage === "tujuan") selector = '.nav-menu a[data-page="tujuan"]';
    else if (currentPage === "donasi") selector = '.nav-menu a[data-page="donasi"]';
    else if (currentPage === "galeri") selector = '.nav-menu a[data-page="galeri"]';
    else if (currentPage === "youtube") selector = '.nav-menu a[data-page="youtube"]';
    else if (currentPage === "chat") selector = '.nav-menu a[data-page="chat"]';
    else if (currentPage === "koleksi") selector = '.nav-menu .dropbtn';
    
    if (selector) {
        const el = document.querySelector(selector);
        if (el) el.classList.add('active');
    }
}

// Navigation events
document.querySelectorAll('nav a[data-page]').forEach(link => {
    link.onclick = (e) => {
        e.preventDefault();
        currentPage = link.dataset.page;
        currentSubmenu = null;
        render();
    };
});

document.querySelectorAll('.dropdown-content a[data-submenu]').forEach(sub => {
    sub.onclick = (e) => {
        e.preventDefault();
        currentPage = "koleksi";
        currentSubmenu = sub.dataset.submenu;
        render();
    };
});

document.querySelectorAll('footer a[data-page]').forEach(link => {
    link.onclick = (e) => {
        e.preventDefault();
        currentPage = link.dataset.page;
        currentSubmenu = null;
        render();
    };
});

document.querySelectorAll('footer a[data-submenu]').forEach(link => {
    link.onclick = (e) => {
        e.preventDefault();
        currentPage = "koleksi";
        currentSubmenu = link.dataset.submenu;
        render();
    };
});

navToggle.onclick = () => {
    navMenu.classList.toggle('active');
    const icon = navToggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
};

document.querySelector('.dropbtn').onclick = (e) => {
    if (window.innerWidth <= 768) {
        e.preventDefault();
        document.querySelector('.dropdown').classList.toggle('active');
    }
};

modalClose.onclick = closeModal;
modal.onclick = (e) => { if (e.target === modal) closeModal(); };

// Chat events
chatFab.onclick = toggleChat;
chatCloseBtn.onclick = toggleChat;

chatSend.onclick = () => {
    const nama = chatName.value.trim();
    const pesan = chatInput.value.trim();
    if (!nama) {
        chatName.focus();
        chatName.style.borderColor = 'var(--coral)';
        setTimeout(() => chatName.style.borderColor = '', 2000);
        return;
    }
    if (!pesan) return;
    sendMessage(nama, pesan);
    chatInput.value = '';
    chatUserName = nama;
    localStorage.setItem('chatUserName', nama);
};

chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        chatSend.click();
    }
});

chatName.addEventListener('input', () => {
    chatUserName = chatName.value.trim();
    localStorage.setItem('chatUserName', chatUserName);
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (modal.classList.contains('active')) closeModal();
        if (lightbox.classList.contains('active')) closeLightbox();
    }
    if (lightbox.classList.contains('active')) {
        if (e.key === 'ArrowLeft') lightboxPrev.onclick();
        if (e.key === 'ArrowRight') lightboxNext.onclick();
    }
});

// Scroll effects
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
    backToTop.classList.toggle('visible', window.scrollY > 500);
});

backToTop.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

// Animations
function initRevealAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

function animateStats() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.dataset.target);
                let current = 0;
                const increment = target / 50;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        el.textContent = target.toLocaleString('id-ID');
                        clearInterval(timer);
                    } else {
                        el.textContent = Math.floor(current).toLocaleString('id-ID');
                    }
                }, 30);
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.5 });
    document.querySelectorAll('.stat-number').forEach(el => observer.observe(el));
}

function copyToClipboard(text, btn) {
    navigator.clipboard.writeText(text).then(() => {
        const originalHTML = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check"></i> Tersalin!';
        btn.style.background = 'var(--ocean-primary)';
        btn.style.color = 'white';
        setTimeout(() => {
            btn.innerHTML = originalHTML;
            btn.style.background = '';
            btn.style.color = '';
        }, 2000);
    });
}

// Preloader
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('preloader').classList.add('hidden');
    }, 800);
    initChatWidget();
});

// Initial render
render();
