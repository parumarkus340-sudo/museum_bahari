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


// ============ DATA KOLEKSI ============
const koleksiData = {
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
            icon: "🐚"
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
            icon: "🐚"
        }
    ],
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
            icon: "🐌"
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
            icon: "🐌"
        }
    ],
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
            icon: "🦑"
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
            icon: "🦑"
        }
    ],
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
            icon: "⭐"
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
            icon: "⭐"
        }
    ]
};

// ============ DATA PROFIL (dengan foto) ============
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
            <p>Pasca terserang penyakit stroke, ruang gerak Pater Gabriel terbatas di kamar dan tempat tidur hingga dipindahkan ke Biara Jompo Simeon Ledalero - Maumere. Pada tanggal <strong>11 November 2012</strong>, Pater Gabriel meminta bertemu dan menyerahkan Surat Kuasa kepada saya untuk melanjutkan segala usaha yang telah dirintisnya.</p>
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
                <strong>"Ngera Shells"</strong> diambil dari nama <strong>Ngera</strong>, seorang leluhur dalam tradisi masyarakat Lio yang dihormati dan diyakini memiliki kekuatan supranatural. Secara etimologis, <strong>Ngera</strong> berasal dari ungkapan <strong>Nge Leka Ra</strong>, yang berarti <strong>"berasal dari darah yang sama"</strong>, melambangkan persaudaraan, kebersamaan, dan ikatan kekerabatan dalam satu garis keturunan. Filosofi ini menjadi landasan <strong>Museum Bahari Ende</strong> sebagai ruang bersama untuk belajar, melestarikan, dan mewariskan pengetahuan tentang biota laut, sejarah maritim, serta budaya pesisir kepada generasi masa kini dan masa depan.
                </p>
            </div>

            <!-- Profil Pendiri -->
            <div class="profil-card reveal">
                <div class="profil-card-inner">
                    <div class="profil-photo">
                        <img src="${profilData.paterGabriel.foto}" alt="${profilData.paterGabriel.nama}" onerror="this.src='https://via.placeholder.com/300x300/006994/ffffff?text=Pater+Gabriel'">
                        <div class="profil-badge">
                            <i class="fas fa-crown"></i> Pendiri
                        </div>
                    </div>
                    <div class="profil-info">
                        <h3>${profilData.paterGabriel.nama}</h3>
                        <p class="profil-jabatan"><i class="fas fa-cross"></i> ${profilData.paterGabriel.jabatan}</p>
                        <div class="profil-meta">
                            <span><i class="fas fa-birthday-cake"></i> ${profilData.paterGabriel.tanggalLahir}</span>
                            <span><i class="fas fa-map-marker-alt"></i> ${profilData.paterGabriel.lahir}</span>
                        </div>
                        <div class="profil-biodata">
                            ${profilData.paterGabriel.biodata}
                        </div>
                    </div>
                </div>
            </div>

            <!-- Profil Pengelola -->
            <div class="profil-card reveal profil-card-reverse">
                <div class="profil-card-inner">
                    <div class="profil-photo">
                        <img src="${profilData.kalianus.foto}" alt="${profilData.kalianus.nama}" onerror="this.src='https://via.placeholder.com/300x300/006994/ffffff?text=Kalianus'">
                        <div class="profil-badge">
                            <i class="fas fa-user-tie"></i> Pengelola
                        </div>
                    </div>
                    <div class="profil-info">
                        <h3>${profilData.kalianus.nama}</h3>
                        <p class="profil-jabatan"><i class="fas fa-user"></i> ${profilData.kalianus.jabatan}</p>
                        <div class="profil-meta">
                            <span><i class="fas fa-birthday-cake"></i> ${profilData.kalianus.tanggalLahir}</span>
                            <span><i class="fas fa-map-marker-alt"></i> ${profilData.kalianus.lahir}</span>
                        </div>
                        <div class="profil-biodata">
                            ${profilData.kalianus.biodata}
                        </div>
                    </div>
                </div>
            </div>

            <!-- Visi & Misi -->
            <div class="quote-section" style="margin-top: 4rem; border-radius: 20px;">
                <div class="quote-content">
                    <p class="quote-text">"Museum Bahari Ende 'Ngera Shells' adalah museum virtual yang melestarikan warisan fosil dan kehidupan laut Nusantara untuk generasi mendatang."</p>
                    <p class="quote-author">— Visi Museum Ngera Shells</p>
                </div>
            </div>
        `
    },
    sejarah: {
        judul: "Perjalanan Kami",
        subjudul: "Dari koleksi pribadi menjadi rumah bersama",
        konten: `
            <div class="section-header reveal">
                <span class="section-label">Sejarah</span>
                <h2 class="section-title">Perjalanan <span class="accent">Ngera Shells</span></h2>
                <p class="section-desc">Dari sebuah koleksi pribadi yang tumbuh menjadi museum virtual untuk seluruh Nusantara.</p>
            </div>
            
            <div class="timeline">
                <div class="timeline-item reveal">
                    <div class="timeline-content">
                        <div class="timeline-year">1996</div>
                        <h4>Berdirinya Museum Bahari</h4>
                        <p>Museum Bahari Ende dibangun dan diresmikan oleh Bupati Ende, Bapak Frans Gedowolo, pada tanggal 14 Agustus 1996. Museum terletak di kawasan Taman Renungan Bung Karno dan terbuka untuk umum.</p>
                    </div>
                </div>
                
                <div class="timeline-item reveal">
                    <div class="timeline-content">
                        <div class="timeline-year">2010</div>
                        <h4>Penerus Estafet Perjuangan</h4>
                        <p>Kalianus Nusa Nipa dipanggil kembali oleh Alm. Pater Gabriel Goran, SVD yang sedang menderita stroke, untuk melanjutkan usaha Museum Bahari yang telah dirintis sejak 1996.</p>
                    </div>
                </div>
                
                <div class="timeline-item reveal">
                    <div class="timeline-content">
                        <div class="timeline-year">2012</div>
                        <h4>Surat Mandat Bersejarah</h4>
                        <p>Pada tanggal 11 November 2012, Pater Gabriel Goran menyerahkan Surat Kuasa kepada Kalianus Nusa Nipa untuk melanjutkan segala usaha yang telah dirintisnya.</p>
                    </div>
                </div>
                
                <div class="timeline-item reveal">
                    <div class="timeline-content">
                        <div class="timeline-year">2013</div>
                        <h4>Museum Dibongkar</h4>
                        <p>Pada bulan Januari 2013, Museum Bahari Ende dibongkar oleh Yayasan Ende Flores dalam rangka revitalisasi Taman Renungan Bung Karno. Koleksi diselamatkan dan diamankan di asrama milik Biara St. Yoseph.</p>
                    </div>
                </div>
                
                <div class="timeline-item reveal">
                    <div class="timeline-content">
                        <div class="timeline-year">2016</div>
                        <h4>Pengakuan Resmi</h4>
                        <p>Kalianus Nusa Nipa mendapat SK Bupati Ende sebagai Pengelola Museum Bahari pada Dinas Pariwisata Kabupaten Ende.</p>
                    </div>
                </div>
                
                <div class="timeline-item reveal">
                    <div class="timeline-content">
                        <div class="timeline-year">2026</div>
                        <h4>Lahirnya Museum Virtual</h4>
                        <p>Pada tanggal 15 Juni 2026, dimulailah perancangan Museum Bahari secara daring "Ngera Shells" bersama Bapak Markus Paru, sebagai solusi atas keterbatasan lahan dan biaya untuk membangun museum fisik.</p>
                    </div>
                </div>
            </div>
            
            <div class="quote-section" style="margin-top: 4rem; border-radius: 20px;">
                <div class="quote-content">
                    <p class="quote-text">"Ngera Shells berasal dari bahasa Mbojo (Bima) yang berarti 'tempat kita' atau 'rumah kita'. Nama ini melambangkan bahwa museum ini bukan milik perorangan, tetapi milik seluruh masyarakat Nusantara."</p>
                    <p class="quote-author">— Tokoh Adat Bima</p>
                </div>
            </div>
        `
    },
    tujuan: {
        judul: "Misi Kami",
        subjudul: "Tiga pilar utama yang menjadi pedoman",
        konten: `
            <div class="section-header reveal">
                <span class="section-label">Tujuan</span>
                <h2 class="section-title">Tiga Pilar <span class="accent">Ngera Shells</span></h2>
                <p class="section-desc">Museum ini didirikan dengan tiga pilar utama yang menjadi pedoman seluruh aktivitas kami.</p>
            </div>
            
            <div class="goals-grid">
                <div class="goal-card reveal">
                    <div class="goal-icon">
                        <i class="fas fa-graduation-cap"></i>
                    </div>
                    <h3>Edukasi Siswa</h3>
                    <p>Menyediakan materi pembelajaran biologi dan geologi yang aplikatif. Setiap koleksi dilengkapi dengan nilai edukasi yang dapat digunakan guru dalam kegiatan belajar mengajar di kelas.</p>
                </div>
                
                <div class="goal-card reveal">
                    <div class="goal-icon">
                        <i class="fas fa-landmark"></i>
                    </div>
                    <h3>Promosi Koleksi</h3>
                    <p>Mempromosikan pentingnya koleksi pribadi yang legal dan terdokumentasi sebagai aset ilmu pengetahuan. Kolektor swasta dapat belajar cara memamerkan koleksi secara bertanggung jawab.</p>
                </div>
                
                <div class="goal-card reveal">
                    <div class="goal-icon">
                        <i class="fas fa-globe-asia"></i>
                    </div>
                    <h3>Pelestarian Budaya</h3>
                    <p>Melestarikan pengetahuan lokal tentang fosil dan geologi Nusantara. Museum ini menjadi jembatan antara ilmuwan, masyarakat lokal, dan generasi muda.</p>
                </div>
            </div>
            
            <div class="quote-section" style="margin-top: 4rem; border-radius: 20px;">
                <div class="quote-content">
                    <p class="quote-text">"Target capaian 2026: 10.000 siswa mengakses museum, 50 koleksi fosil terdokumentasi, dan 5 sekolah menjadikan museum sebagai mitra pembelajaran."</p>
                    <p class="quote-author">— Visi Museum Ngera Shells</p>
                </div>
            </div>
        `
    },
    donasi: {
        judul: "Dukung Kami",
        subjudul: "Bersama melestarikan warisan Nusantara",
        konten: `
            <div class="section-header reveal">
                <span class="section-label">Donasi</span>
                <h2 class="section-title">Dukung <span class="accent">Ngera Shells</span></h2>
                <p class="section-desc">Museum ini dikelola secara mandiri oleh kolektor dan pegiat budaya. Dukungan Anda sangat berarti untuk keberlangsungan pelestarian warisan bumi Nusantara.</p>
            </div>
            
            <div class="donate-container">
                <div class="donate-info reveal">
                    <h3>Mengapa Donasi Anda Penting?</h3>
                    <p>Setiap kontribusi membantu kami melanjutkan misi pelestarian dan edukasi untuk generasi mendatang.</p>
                    
                    <ul class="donate-list">
                        <li>
                            <i class="fas fa-camera"></i>
                            <div>
                                <strong>Digitalisasi Koleksi</strong>
                                <p style="opacity:0.8; font-size:0.88rem; margin-top:0.3rem;">Memotret dan mendokumentasikan lebih banyak spesimen fosil</p>
                            </div>
                        </li>
                        <li>
                            <i class="fas fa-video"></i>
                            <div>
                                <strong>Video Edukasi 3D</strong>
                                <p style="opacity:0.8; font-size:0.88rem; margin-top:0.3rem;">Produksi konten visual interaktif untuk pembelajaran</p>
                            </div>
                        </li>
                        <li>
                            <i class="fas fa-book"></i>
                            <div>
                                <strong>Modul Pembelajaran</strong>
                                <p style="opacity:0.8; font-size:0.88rem; margin-top:0.3rem;">Pembuatan materi ajar untuk guru dan siswa</p>
                            </div>
                        </li>
                        <li>
                            <i class="fas fa-flask"></i>
                            <div>
                                <strong>Penelitian Fosil</strong>
                                <p style="opacity:0.8; font-size:0.88rem; margin-top:0.3rem;">Identifikasi dan penelitian spesimen baru</p>
                            </div>
                        </li>
                    </ul>
                    
                    <p style="font-size:0.85rem; opacity:0.7; margin-top:2rem;">
                        <i class="fas fa-shield-alt"></i> Setiap donasi akan dilaporkan transparan di website ini.
                    </p>
                </div>
                
                <div class="donate-form reveal">
                    <h3>Salurkan Donasi</h3>
                    <p>Pilih metode pembayaran yang paling nyaman untuk Anda</p>
                    
                    <div class="payment-method">
                        <div class="payment-header">
                            <div class="payment-icon">
                                <i class="fas fa-university"></i>
                            </div>
                            <div>
                                <h4>Transfer Bank BNI</h4>
                                <small>a.n. Kalianus Nusa Nipa</small>
                            </div>
                        </div>
                        <div class="account-number">
                            <span>1234-5678-9012</span>
                            <button class="copy-btn" onclick="copyToClipboard('123456789012', this)">
                                <i class="fas fa-copy"></i> Salin
                            </button>
                        </div>
                    </div>
                    
                    <div class="payment-method">
                        <div class="payment-header">
                            <div class="payment-icon">
                                <i class="fas fa-qrcode"></i>
                            </div>
                            <div>
                                <h4>QRIS</h4>
                                <small>Scan dengan aplikasi e-wallet</small>
                            </div>
                        </div>
                        <div class="qris-box">
                            <div class="qris-placeholder">
                                <i class="fas fa-qrcode"></i>
                            </div>
                            <p style="font-size:0.85rem; color:var(--text-muted); margin-top:0.5rem;">Scan QR Code di atas</p>
                        </div>
                    </div>
                    
                    <div style="background:var(--warm-white); padding:1.2rem; border-radius:12px; margin-top:1rem; text-align:center; border:1px solid var(--border);">
                        <p style="font-size:0.88rem; color:var(--text-muted); margin:0;">
                            <i class="fas fa-heart" style="color:var(--accent-dark);"></i>
                            Terima kasih atas dukungan Anda untuk pelestarian warisan bumi Nusantara!
                        </p>
                    </div>
                </div>
            </div>
        `
    }
};

// ============ STATE MANAGEMENT ============
let currentPage = "home";
let currentSubmenu = null;

const mainContainer = document.getElementById("mainContainer");
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modalBody");
const modalClose = document.getElementById("modalClose");
const navbar = document.getElementById("navbar");
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");
const backToTop = document.getElementById("backToTop");

// ============ RENDER FUNCTIONS ============
function render() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    if (currentPage === "home") renderHome();
    else if (currentPage === "profil") renderProfil();
    else if (currentPage === "sejarah") renderSejarah();
    else if (currentPage === "tujuan") renderTujuan();
    else if (currentPage === "donasi") renderDonasi();
    else if (currentPage === "koleksi" && currentSubmenu) renderKoleksiSubmenu(currentSubmenu);
    
    updateActiveNav();
    initRevealAnimations();
    
    // Close mobile menu
    navMenu.classList.remove('active');
}

function renderHome() {
    mainContainer.innerHTML = `
        <!-- Hero Section -->
        <section class="hero">
            <div class="hero-content">
                <div class="hero-badge">
                    <i class="fas fa-water"></i>
                    <span>Museum Virtual Bahari Ende</span>
                </div>
                <h1>Selamat Datang di <span class="accent">Ngera Shells</span></h1>
                <p class="hero-subtitle">Museum Bahari Ende — "Rumah Kita"</p>
                <p class="hero-desc">Melestarikan warisan fosil dan kehidupan laut Nusantara. Mengumpulkan, mendokumentasikan, dan menarasikan kekayaan paleontologi untuk tujuan edukasi, perlindungan, dan pelestarian alam kepada masyarakat luas, khususnya pelajar dan mahasiswa.</p>
                <div class="hero-buttons">
                    <a href="#" class="btn btn-primary" data-submenu="bifalfia">
                        <i class="fas fa-compass"></i> Jelajahi Koleksi
                    </a>
                    <a href="#" class="btn btn-outline" data-page="profil">
                        <i class="fas fa-info-circle"></i> Tentang Kami
                    </a>
                </div>
            </div>
            <div class="hero-scroll">
                <span>Scroll</span>
                <i class="fas fa-chevron-down"></i>
            </div>
        </section>

        <!-- Stats Section -->
        <section class="stats">
            <div class="stats-grid">
                <div class="stat-item">
                    <div class="stat-number" data-target="50">0</div>
                    <div class="stat-label">Koleksi Fosil</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number" data-target="4">0</div>
                    <div class="stat-label">Kelas Utama</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number" data-target="15">0</div>
                    <div class="stat-label">Lokasi Temuan</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number" data-target="10000">0</div>
                    <div class="stat-label">Target Siswa</div>
                </div>
            </div>
        </section>

        <!-- About Section -->
        <section class="section">
            <div class="section-header reveal">
                <span class="section-label">Tentang Museum</span>
                <h2 class="section-title">Mengapa <span class="accent">Museum Bahari?</span></h2>
                <p class="section-desc">Salah satu indikator peradaban maju adalah keberadaan museum. Museum tidak hanya menyimpan artefak kuno, tetapi juga menjadi sarana informasi dan objek wisata bahari.</p>
            </div>
            
            <div class="goals-grid">
                <div class="goal-card reveal">
                    <div class="goal-icon">
                        <i class="fas fa-shield-alt"></i>
                    </div>
                    <h3>Perlindungan</h3>
                    <p>Menyelamatkan benda, artefak, dan biota laut dari kepunahan dan kerusakan secara alami. Museum Bahari yang pernah ada dibangun tahun 1996 menjadi indikator penting pembangunan kebudayaan daerah.</p>
                </div>
                
                <div class="goal-card reveal">
                    <div class="goal-icon">
                        <i class="fas fa-book-reader"></i>
                    </div>
                    <h3>Edukasi</h3>
                    <p>Mengumpulkan, mendokumentasikan, dan menarasikan koleksi untuk tujuan edukasi tentang perlindungan dan pelestarian alam kepada masyarakat luas, khususnya pelajar dan mahasiswa.</p>
                </div>
                
                <div class="goal-card reveal">
                    <div class="goal-icon">
                        <i class="fas fa-sync-alt"></i>
                    </div>
                    <h3>Pelestarian</h3>
                    <p>Melestarikan kembali warisan budaya yang hampir punah dalam berbagai bidang kehidupan, terkhususnya siput, kerang, dan biota laut lainnya dari wilayah Nusantara.</p>
                </div>
            </div>
        </section>

        <!-- Sejarah Singkat -->
        <section class="section about" style="background: linear-gradient(135deg, #e3f2fd, #f5f6fa);">
            <div class="about-grid">
                <div class="about-image reveal">
                    🏛️
                </div>
                <div class="about-content reveal">
                    <span class="section-label">Sejarah Singkat</span>
                    <h2>Dari Museum Fisik ke <span class="accent">Museum Virtual</span></h2>
                    <p>Museum Bahari Ende dibangun tahun 1996 oleh Alm. Pater Gabriel Goran, SVD dan diresmikan oleh Bupati Ende. Namun pada Januari 2013, museum dibongkar oleh Yayasan Ende Flores saat revitalisasi Taman Renungan Bung Karno.</p>
                    <p>Karena vakum dalam kurun waktu yang tidak menentu serta ketiadaan lahan dan biaya, muncul ide untuk merancang Museum secara Daring "Ngera Shells" agar dapat dipublikasikan kembali kepada masyarakat luas.</p>
                    <a href="#" class="btn btn-primary" data-page="sejarah" style="margin-top:1.5rem;">
                        Baca Sejarah Lengkap <i class="fas fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        </section>

        <!-- Featured Collection -->
        <section class="section">
            <div class="section-header reveal">
                <span class="section-label">Koleksi Unggulan</span>
                <h2 class="section-title">Empat Kelas <span class="accent">Fosil Utama</span></h2>
                <p class="section-desc">Jelajahi kekayaan paleontologi Nusantara melalui empat kelas fosil invertebrata yang terdokumentasi dengan baik.</p>
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
                                <p class="collection-desc">${info.desc}. Temukan fosil-fosil langka dari berbagai formasi geologi Indonesia.</p>
                                <a href="#" class="collection-link" data-submenu="${key}">
                                    Lihat Koleksi <i class="fas fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        </section>

        <!-- Quote Section -->
        <section class="quote-section">
            <div class="quote-content">
                <p class="quote-text">"Setiap fosil adalah saksi bisu perjalanan bumi Nusantara. Melestarikannya adalah tugas kita bersama untuk generasi mendatang."</p>
                <p class="quote-author">— Museum Bahari Ende "Ngera Shells"</p>
            </div>
        </section>

        <!-- Call to Action -->
        <section class="section" style="text-align:center;">
            <div class="reveal">
                <h2 class="section-title">Bantu Wujudkan <span class="accent">Museum Fisik</span> Kembali</h2>
                <p class="section-desc" style="max-width:700px; margin:1rem auto 2rem;">Besar harapan dan niat baik kami membawa manfaat bagi masyarakat luas. Melalui aplikasi daring ini, kami mengumpulkan donasi dari dukungan masyarakat luas dalam mewujudkan pembangunan Museum secara fisik nyata di Kabupaten Ende - Nusa Tenggara Timur - Indonesia.</p>
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

function renderKoleksiSubmenu(submenu) {
    const items = koleksiData[submenu];
    if (!items) return;
    
    const judulMap = {
        bifalfia: "Bifalfia",
        gastropoda: "Gastropoda",
        sepalopoda: "Sepalopoda",
        astropoda: "Astropoda"
    };
    
    const descMap = {
        bifalfia: "Kerang purba dengan dua katup simetris yang mengagumkan",
        gastropoda: "Siput laut purba dengan cangkang spiral yang indah",
        sepalopoda: "Nenek moyang cumi-cumi dan nautilus modern",
        astropoda: "Bintang laut dan bulu babi dari era purba"
    };
    
    mainContainer.innerHTML = `
        <section class="section" style="padding-top: 8rem;">
            <div class="section-header reveal">
                <span class="section-label">Koleksi</span>
                <h2 class="section-title">Koleksi <span class="accent">${judulMap[submenu]}</span></h2>
                <p class="section-desc">${descMap[submenu]}. Temukan fosil-fosil langka dari berbagai formasi geologi Indonesia.</p>
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
                            <a href="#" class="collection-link">
                                Lihat Detail <i class="fas fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                `).join('')}
            </div>
            
            <div class="quote-section" style="margin-top: 4rem; border-radius: 20px;">
                <div class="quote-content">
                    <p class="quote-text">"Setiap fosil adalah saksi bisu perjalanan bumi Nusantara. Klik untuk belajar lebih dalam tentang setiap spesimen."</p>
                    <p class="quote-author">— Museum Bahari Ende "Ngera Shells"</p>
                </div>
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
        <div class="modal-hero">
            ${item.icon}
        </div>
        <div class="modal-body">
            <span class="modal-category">${item.kategori}</span>
            <h2>${item.nama}</h2>
            
            <div class="modal-info-grid">
                <div class="modal-info-item">
                    <small>Lokasi Penemuan</small>
                    <strong><i class="fas fa-map-marker-alt"></i> ${item.asal}</strong>
                </div>
                <div class="modal-info-item">
                    <small>Periode Geologi</small>
                    <strong><i class="fas fa-clock"></i> ${item.periode}</strong>
                </div>
                <div class="modal-info-item">
                    <small>Ciri Khas</small>
                    <strong><i class="fas fa-fingerprint"></i> ${item.ciri}</strong>
                </div>
            </div>
            
            <div class="modal-section">
                <h4><i class="fas fa-book-open"></i> Deskripsi Lengkap</h4>
                <p>${item.deskripsi}</p>
            </div>
            
            <div class="modal-section">
                <div class="education-box">
                    <h4><i class="fas fa-graduation-cap"></i> Nilai Edukasi</h4>
                    <p>${item.nilaiEdukasi}</p>
                </div>
            </div>
            
            <p style="margin-top:1.5rem; font-size:0.85rem; color:var(--text-muted); text-align:center; padding-top:1.5rem; border-top:1px solid var(--border);">
                <i class="fas fa-shield-alt"></i> Koleksi ini adalah bagian dari upaya pelestarian warisan fosil Nusantara.
            </p>
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
    
    document.querySelectorAll('[data-page]').forEach(el => {
        el.onclick = (e) => {
            e.preventDefault();
            currentPage = el.dataset.page;
            currentSubmenu = null;
            render();
        };
    });
}

function updateActiveNav() {
    document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'));
    
    let selector = '';
    if (currentPage === "home") selector = 'nav a[data-page="home"]';
    else if (currentPage === "profil") selector = 'nav a[data-page="profil"]';
    else if (currentPage === "sejarah") selector = 'nav a[data-page="sejarah"]';
    else if (currentPage === "tujuan") selector = 'nav a[data-page="tujuan"]';
    else if (currentPage === "donasi") selector = 'nav a[data-page="donasi"]';
    else if (currentPage === "koleksi") selector = '.dropbtn';
    
    if (selector) {
        const el = document.querySelector(selector);
        if (el) el.classList.add('active');
    }
}

// ============ NAVIGATION EVENTS ============
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

// Mobile menu toggle
navToggle.onclick = () => {
    navMenu.classList.toggle('active');
    const icon = navToggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
};

// Mobile dropdown
document.querySelector('.dropbtn').onclick = (e) => {
    if (window.innerWidth <= 768) {
        e.preventDefault();
        document.querySelector('.dropdown').classList.toggle('active');
    }
};

// Modal events
modalClose.onclick = closeModal;
modal.onclick = (e) => {
    if (e.target === modal) closeModal();
};
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// ============ SCROLL EFFECTS ============
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY > 50;
    navbar.classList.toggle('scrolled', scrolled);
    backToTop.classList.toggle('visible', window.scrollY > 500);
});

backToTop.onclick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// ============ ANIMATIONS ============
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

// ============ UTILITY FUNCTIONS ============
function copyToClipboard(text, btn) {
    navigator.clipboard.writeText(text).then(() => {
        const originalHTML = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check"></i> Tersalin!';
        btn.style.background = 'var(--primary)';
        btn.style.color = 'white';
        setTimeout(() => {
            btn.innerHTML = originalHTML;
            btn.style.background = '';
            btn.style.color = '';
        }, 2000);
    });
}

// ============ PRELOADER ============
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('preloader').classList.add('hidden');
    }, 800);
});

// ============ INITIAL RENDER ============
render();
