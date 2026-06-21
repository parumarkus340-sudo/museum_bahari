// ==========================================
// NARASI.js - TEMPLATE HTML HALAMAN STATIS
// Museum Bahari Ngera Shells
// Version: 2.0 (dengan Sejarah Lengkap)
// ==========================================

const narasi = {
    
    // ==========================================
    // 1. HALAMAN PROFIL
    // ==========================================
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

            <!-- Profil Pendiri -->
            <div class="profil-card reveal">
                <div class="profil-card-inner">
                    <div class="profil-photo">
                        <div class="profil-photo-wrapper">
                            <img src="assets/images/profil/pater-gabriel.jpg" 
                                 alt="${profilData.paterGabriel.nama}"
                                 onerror="this.src='assets/images/logo/og-image.jpg'">
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

            <!-- Profil Pengelola -->
            <div class="profil-card reveal profil-card-reverse">
                <div class="profil-card-inner">
                    <div class="profil-photo">
                        <div class="profil-photo-wrapper">
                            <img src="assets/images/profil/kalianus-nusa-nipa.jpg" 
                                 alt="${profilData.kalianus.nama}"
                                 onerror="this.src='assets/images/logo/og-image.jpg'">
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

    // ==========================================
    // 2. HALAMAN SEJARAH (VERSI LENGKAP BARU!)
    // ==========================================
    sejarah: {
        judul: "Sejarah Museum Bahari",
        subjudul: "Perjalanan panjang pelestarian warisan bahari Nusantara",
        konten: `
            <!-- HEADER SECTION -->
            <div class="section-header reveal">
                <span class="section-label">Sejarah Lengkap</span>
                <h2 class="section-title">Sejarah <span class="accent">Museum Bahari Ende</span></h2>
                <p class="section-desc">Perjalanan panjang dari koleksi pribadi menjadi museum yang melestarikan warisan fosil dan kehidupan laut Nusantara.</p>
            </div>

            <!-- ==========================================
                 BAGIAN 1: LATAR BELAKANG
                 ========================================== -->
            <div class="sejarah-section reveal">
                <div class="sejarah-section-header">
                    <div class="sejarah-section-icon">
                        <i class="fas fa-book-open"></i>
                    </div>
                    <h3 class="sejarah-section-title">Latar Belakang Didirikan Museum Bahari</h3>
                </div>

                <div class="sejarah-two-columns">
                    <!-- Kolom UMUM -->
                    <div class="sejarah-column-card">
                        <div class="column-badge badge-umum">
                            <i class="fas fa-globe-asia"></i> UMUM
                        </div>
                        <p>Propinsi Nusa Tenggara Timur sebagai daerah kepulauan sebagian besar terdiri dari wilayah perairan (laut), memiliki kandungan laut yang beraneka ragam, bentuk ukuran, warna serta jenisnya, perlu dilestarikan dengan penanganan yang profesional dalam rangka menunjang bidang kepariwisataan dan ilmu pengetahuan.</p>
                        <p>Propinsi Nusa Tenggara Timur pada umumnya dan Kabupaten Ende khususnya <strong>belum memiliki Museum Bahari</strong> atau sejenisnya sebagai tempat yang menyimpan atau koleksi barang-barang laut, ikan-ikan dan lain sebagainya.</p>
                    </div>

                    <!-- Kolom KHUSUS -->
                    <div class="sejarah-column-card">
                        <div class="column-badge badge-khusus">
                            <i class="fas fa-user"></i> KHUSUS
                        </div>
                        <p>Secara pribadi, <strong>sejak tahun 1981 hingga hari ini</strong> telah mengumpulkan atau mengoleksi barang-barang laut dan bahan-bahan dari laut lainnya dari berbagai jenis, bentuk, ukuran dan warna yang beraneka ragam dalam jumlah yang banyak dan dianggap lebih dari cukup untuk koleksi sebuah museum.</p>
                        <p>Telah memiliki sejumlah buku mengenai kerang-kerang laut dan ikan-ikan dalam beberapa bahasa diantaranya; <strong>BAHASA INDONESIA, BAHASA BELANDA, BAHASA INGGRIS</strong> dan sebuah <strong>ENSIKLOPEDIA</strong> tentang kerang-kerang laut.</p>
                    </div>
                </div>
            </div>

            <!-- ==========================================
                 BAGIAN 2: TUJUAN DIDIRIKAN
                 ========================================== -->
            <div class="sejarah-section reveal">
                <div class="sejarah-section-header">
                    <div class="sejarah-section-icon">
                        <i class="fas fa-bullseye"></i>
                    </div>
                    <h3 class="sejarah-section-title">Tujuan Didirikan Museum Bahari</h3>
                </div>

                <!-- Tujuan UMUM -->
                <div class="tujuan-subsection">
                    <div class="column-badge badge-umum" style="margin-bottom: 1.5rem;">
                        <i class="fas fa-globe-asia"></i> TUJUAN UMUM
                    </div>
                    <div class="tujuan-grid">
                        <div class="tujuan-item">
                            <div class="tujuan-number">01</div>
                            <div class="tujuan-content">
                                <h4><i class="fas fa-fish"></i> Pelestarian Spesies</h4>
                                <p>Melestarikan sumber daya alam kelautan yang sudah tersedia kurang lebih <strong>750 species</strong>, hasil koleksi Pater Gabriel Goran.</p>
                            </div>
                        </div>
                        <div class="tujuan-item">
                            <div class="tujuan-number">02</div>
                            <div class="tujuan-content">
                                <h4><i class="fas fa-book-reader"></i> Sumber Informasi & Study</h4>
                                <p>Menjadi sumber informasi dan study kelautan bagi generasi muda dalam hal ini, ilmu pengetahuan <strong>Concologi dan Malacologi</strong>.</p>
                            </div>
                        </div>
                        <div class="tujuan-item">
                            <div class="tujuan-number">03</div>
                            <div class="tujuan-content">
                                <h4><i class="fas fa-umbrella-beach"></i> Obyek Wisata</h4>
                                <p>Menjadi obyek wisata (tempat rekreasi) yang edukatif bagi masyarakat lokal maupun wisatawan.</p>
                            </div>
                        </div>
                        <div class="tujuan-item">
                            <div class="tujuan-number">04</div>
                            <div class="tujuan-content">
                                <h4><i class="fas fa-briefcase"></i> Lapangan Kerja</h4>
                                <p>Membuka lapangan kerja bagi masyarakat sekitar melalui pengelolaan museum.</p>
                            </div>
                        </div>
                        <div class="tujuan-item">
                            <div class="tujuan-number">05</div>
                            <div class="tujuan-content">
                                <h4><i class="fas fa-chart-line"></i> Pendapatan Daerah</h4>
                                <p>Menjadi salah satu sumber pendapatan daerah melalui sektor pariwisata.</p>
                            </div>
                        </div>
                        <div class="tujuan-item">
                            <div class="tujuan-number">06</div>
                            <div class="tujuan-content">
                                <h4><i class="fas fa-hands"></i> Pemberdayaan Pengrajin</h4>
                                <p>Mendorong pengrajin untuk memproduksi bahan kerajinan tangan dari siput dan kerang sebagai souvenir atau cendramata.</p>
                            </div>
                        </div>
                        <div class="tujuan-item tujuan-item-wide">
                            <div class="tujuan-number">07</div>
                            <div class="tujuan-content">
                                <h4><i class="fas fa-leaf"></i> Pelestarian Lingkungan</h4>
                                <p>Mendorong menjaga, memelihara keutuhan ciptaan Tuhan dan keindahan alam laut dalam usaha melestarikan lingkungan laut.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Tujuan KHUSUS -->
                <div class="tujuan-subsection" style="margin-top: 2rem;">
                    <div class="column-badge badge-khusus" style="margin-bottom: 1.5rem;">
                        <i class="fas fa-heart"></i> TUJUAN KHUSUS
                    </div>
                    <div class="highlight-box">
                        <i class="fas fa-hands-helping highlight-icon"></i>
                        <p>Sebagai sumber pendapatan untuk membantu <strong>anak-anak Panti Asuhan Naungan Kasih</strong> dan anak-anak terlantar dalam rangka menunjang program Pemerintah dalam menangani anak-anak terlantar.</p>
                    </div>
                </div>
            </div>

            <!-- ==========================================
                 BAGIAN 3: SEJARAH BERDIRINYA
                 ========================================== -->
            <div class="sejarah-section reveal">
                <div class="sejarah-section-header">
                    <div class="sejarah-section-icon">
                        <i class="fas fa-landmark"></i>
                    </div>
                    <h3 class="sejarah-section-title">Sejarah Berdirinya Museum Bahari Ende</h3>
                </div>

                <div class="story-intro">
                    <p>Ide untuk membangun sebuah museum, pertama kali muncul dalam benak <strong>Pater Gabriel Goran, SVD</strong>, pada tahun <strong>1990</strong>. Ide ini muncul setelah melihat hasil koleksi biota-biota laut seperti; MOLLUSCA, PISCES, CRUSTACEA, ECHINODERMATA, REPTILIA, ALGA DAN CORAL. Sebagai inisiatif pribadi sejak tahun 1981. Bahan-bahan koleksi ini semakin bertambah dari tahun ke tahun baik dalam jumlah maupun jenis, bentuk dan warna yang semuanya mempunyai daya pikat tersendiri.</p>
                </div>

                <!-- Timeline Detail -->
                <div class="timeline-detail">
                    
                    <!-- 1981 - Awal Koleksi -->
                    <div class="timeline-detail-item">
                        <div class="timeline-detail-year">1981</div>
                        <div class="timeline-detail-content">
                            <h4><i class="fas fa-seedling"></i> Awal Koleksi Pribadi</h4>
                            <p>Pater Gabriel Goran, SVD mulai mengumpulkan koleksi biota laut secara pribadi. Bahan-bahan koleksi ini semakin bertambah dari tahun ke tahun baik dalam jumlah maupun jenis, bentuk dan warna yang semuanya mempunyai daya pikat tersendiri.</p>
                        </div>
                    </div>

                    <!-- 1990 - Ide Awal -->
                    <div class="timeline-detail-item">
                        <div class="timeline-detail-year">1990</div>
                        <div class="timeline-detail-content">
                            <h4><i class="fas fa-lightbulb"></i> Ide Pertama Membangun Museum</h4>
                            <p>Ide untuk membangun sebuah museum pertama kali muncul dalam benak Pater Gabriel Goran, SVD, setelah melihat hasil koleksi biota-biota laut seperti; <strong>MOLLUSCA, PISCES, CRUSTACEA, ECHINODERMATA, REPTILIA, ALGA DAN CORAL</strong>.</p>
                        </div>
                    </div>

                    <!-- 1993 - Pertemuan Bersejarah -->
                    <div class="timeline-detail-item timeline-highlight">
                        <div class="timeline-detail-year">1993</div>
                        <div class="timeline-detail-content">
                            <h4><i class="fas fa-handshake"></i> Pertemuan Bersejarah dengan Bagia Suwira</h4>
                            <p>Pada tahun 1993 ide untuk membangun suatu museum itu lebih tajam dan spesifik, yaitu <strong>Museum Bahari</strong> dengan tujuan umum sebagai sumber informasi dan study kelautan, serta tujuan khususnya untuk membantu Panti Asuhan Naungan Kasih Ende.</p>
                            <p>Ide ini diperkenalkan kepada <strong>Bagia Suwira</strong>, mahasiswa teknik pada <strong>Universitas Teknik Delft Belanda</strong>, yang sedang mengadakan KKN di Flores untuk meneliti kerusakan akibat gempa bumi tanggal <strong>12 Desember 1992</strong>.</p>
                            <p>Dalam pertemuan antara P. Gabriel dan Bagia Suwira di <strong>Biara St. Yosef di jalan Katedral no. 5 Ende</strong>, ia begitu mengagumi koleksi Pater yang begitu banyak yang telah terhimpun dalam sebuah ruangan <strong>kamar no. 26 di rumah tinggi bawah Biara St. Yosef Ende</strong>.</p>
                            
                            <div class="quote-inline">
                                <i class="fas fa-quote-left"></i>
                                <p>"Dari mana dan untuk apa semua koleksi ini?"</p>
                                <span>— Bagia Suwira bertanya kepada Pater</span>
                            </div>
                            
                            <div class="quote-inline">
                                <i class="fas fa-quote-right"></i>
                                <p>"Semua bahan ini berasal dari Lembata dan ada ide untuk membangun sebuah 'Museum' andai kata ada pemasukan, maka hasil dari pemasukan tersebut akan membantu Panti Asuhan Naungan Kasih Ende."</p>
                                <span>— Pater Gabriel menjawab</span>
                            </div>
                            
                            <p>Bagia Suwira langsung menyambung:</p>
                            <div class="quote-inline">
                                <i class="fas fa-quote-left"></i>
                                <p>"Apakah saya bisa membantu mewujudkan ide itu?"</p>
                                <span>— Bagia Suwira</span>
                            </div>
                            <p>Pater menjawab: "Bagaimana caranya?"</p>
                            <p>Bagia Suwira langsung mengumpulkan <strong>250 buah siput "OLIVA" bibir merah</strong> dan meminta Pater agar dibuatkan gantungan kunci untuk dibawa ke Belanda mengikuti pameran. Dalam tempo beberapa hari saja gantungan kunci yang dibuat dari siput oliva itu telah siap untuk dibawa serta.</p>
                            <p>Ketika hendak berangkat, Bagia Suwira mendapat hadiah <strong>3 lembar dasi yang terbuat dari kain tenun Ende Lio</strong> dan mendapat foto anak-anak Panti Asuhan Naungan Kasih.</p>
                            <p>Setelah tiba di Belanda, Bagia Suwira mengirim berita agar dikirimkan lagi <strong>30 lembar dasi</strong> yang dibuat dari kain tenun Ende Lio. Setelah menerima berita tersebut, Pater meminta kesediaan <strong>"Suster Benedikta CIJ"</strong> di Panti Asuhan Naungan Kasih untuk menyiapkan pesanan tersebut. Dalam tempo satu minggu, pesanan itu telah selesai dibuat. Dasi-dasi tersebut dikirim melalui pos udara kepada orang tua dari Bagia Suwira di Jakarta dan selanjutnya dihantar sendiri oleh ayah dari Bagia Suwira ke Belanda.</p>
                        </div>
                    </div>

                    <!-- 1994 - Hasil Pameran -->
                    <div class="timeline-detail-item timeline-success">
                        <div class="timeline-detail-year">1994</div>
                        <div class="timeline-detail-content">
                            <h4><i class="fas fa-trophy"></i> Sukses Pameran di Belanda</h4>
                            <p>Dalam sebuah pameran di Belanda, ternyata <strong>250 buah gantungan kunci dari siput oliva</strong> dan <strong>30 lembar dasi dari kain tenun Ende Lio</strong> itu habis terjual dengan hasil sebesar:</p>
                            <div class="amount-highlight">
                                <span class="amount-label">Total Penjualan</span>
                                <span class="amount-value">Rp. 1.650.000,-</span>
                                <span class="amount-text">(satu juta enam ratus lima puluh ribu rupiah)</span>
                            </div>
                            <p>Pada tahun 1994, uang itu dibawa ke Ende oleh Bagia Suwira dan ditemani oleh salah seorang kawannya yang bernama <strong>"Andreas Visser"</strong>. Di Ende, mereka berdua menginap di Panti Asuhan Naungan Kasih.</p>
                            <p>Dalam pertemuan di Panti Asuhan Naungan Kasih, uang itu diserahkan kepada Pater dan sambil menyerahkan uang sebesar Rp. 1.650.000,- itu, Bagia Suwira mengatakan kepada Pater:</p>
                            <div class="quote-inline">
                                <i class="fas fa-quote-left"></i>
                                <p>"Pater, masih ada orang-perorangan dan organisasi yang ingin membantu, hanya mereka melihat dulu apakah kita sendiri sudah mampu menghasilkan sesuatu?"</p>
                                <span>— Bagia Suwira</span>
                            </div>
                            <p>Dalam pertemuan itu pula diusulkan supaya uang itu dibawa kembali ke Belanda untuk menunjukkan bahwa uang itu adalah hasil usaha kami sendiri, tetapi karena uang itu sudah ada di Ende, Pater mengambil kebijaksanaan:</p>
                            <ul class="distribution-list">
                                <li><strong>Rp. 650.000,-</strong> diserahkan untuk membantu anak-anak Panti Asuhan</li>
                                <li><strong>Rp. 1.000.000,-</strong> dibawa kembali ke Belanda dan diserahkan kepada salah satu organisasi sosial di Belanda supaya dijadikan sebagai saham</li>
                            </ul>
                            <p>Uang tersebut diserahkan kepada salah satu organisasi yang bernama <strong>'WILDE ANZEN'</strong> dan lewat organisasi inilah ide untuk membangun sebuah museum dipromosikan dan dari hasil promosi itu mendapat dana sebesar:</p>
                            <div class="amount-highlight amount-large">
                                <span class="amount-label">Modal Awal Pembangunan</span>
                                <span class="amount-value">Rp. 26.000.000,-</span>
                                <span class="amount-text">(dua puluh enam juta rupiah)</span>
                            </div>
                            <p><strong>Dengan modal inilah Museum Bahari dibangun.</strong></p>
                        </div>
                    </div>

                    <!-- 1995 - Perencanaan -->
                    <div class="timeline-detail-item">
                        <div class="timeline-detail-year">1995</div>
                        <div class="timeline-detail-content">
                            <h4><i class="fas fa-drafting-compass"></i> Perencanaan & Pendekatan Pemerintah</h4>
                            <p>Setelah mendapat dana sebesar Rp. 26.000.000,- Pater mulai menyusun suatu rencana untuk membangun sebuah gedung Museum Bahari. Setelah mendekati banyak orang untuk meminta nasehat dan petunjuk, mereka meresponnya secara positif, Pater mulai mengadakan pendekatan secara pribadi dengan pejabat-pejabat pemerintah daerah untuk menawarkan kepada Pemda Ende untuk membangun sebuah gedung Museum Bahari di Ende dan bukan di tempat lain.</p>
                            <p>Pada bulan <strong>April 1995</strong>, ide pembangunan Museum Bahari ini dibahas dalam pertemuan <strong>Dewan Provinsi SVD Ende di Ledalero</strong>. Dalam pertemuan itu dibahas juga kemungkinan untuk bekerja sama dengan Pemerintah Daerah Ende.</p>
                            <p>Setelah disepakati pembangunan gedung Museum Bahari itu dilakukan dalam kerja sama dengan Pemerintah Daerah Ende, Pater mulai mengadakan pendekatan dengan banyak instansi pemerintah antara lain:</p>
                            <div class="instansi-grid">
                                <div class="instansi-item"><i class="fas fa-building"></i> Bupati Ende</div>
                                <div class="instansi-item"><i class="fas fa-graduation-cap"></i> Depdikbud</div>
                                <div class="instansi-item"><i class="fas fa-umbrella-beach"></i> Dinas Pariwisata</div>
                                <div class="instansi-item"><i class="fas fa-landmark"></i> DPRD</div>
                                <div class="instansi-item"><i class="fas fa-users"></i> Tokoh Masyarakat</div>
                            </div>
                            <p>Setelah mendapat dukungan dari banyak orang, Pater mengajukan permohonan resmi kepada Pemerintah Daerah agar pemerintah menyiapkan sebuah lokasi dan di atas lokasi tersebut SVD membangun gedung dan menanggung semua isi gedung tersebut.</p>
                            <p>Permohonan dibahas secara resmi dalam sidang DPRD pada bulan <strong>Maret 1995</strong>. Dalam sidang ini disetujui pembangunan Museum Bahari di tempat sekarang yang berlokasi di <strong>jalan Moh. Hatta, Kelurahan Kota Raja, Kecamatan Ende Selatan, Kabupaten Ende</strong>.</p>
                        </div>
                    </div>

                    <!-- 1996 - Peresmian -->
                    <div class="timeline-detail-item timeline-milestone">
                        <div class="timeline-detail-year">1996</div>
                        <div class="timeline-detail-content">
                            <h4><i class="fas fa-flag"></i> Peresmian Museum Bahari</h4>
                            <div class="milestone-dates">
                                <div class="milestone-date">
                                    <div class="date-day">12</div>
                                    <div class="date-month">Maret 1996</div>
                                    <div class="date-desc">Upacara peletakan batu pertama oleh Bupati Ende</div>
                                </div>
                                <div class="milestone-date milestone-main">
                                    <div class="date-day">14</div>
                                    <div class="date-month">Agustus 1996</div>
                                    <div class="date-desc">Upacara peresmian oleh Bupati Ende, Bapak <strong>Frans Gedowolo</strong>, yang dihadiri pula oleh kepala-kepala dinas dan Jawatan Kabupaten Ende</div>
                                </div>
                            </div>
                            <p><strong>Sejak saat itulah Museum Bahari resmi dibuka untuk umum.</strong></p>
                        </div>
                    </div>

                    <!-- 1996-Nov - Kalianus Mulai Bekerja -->
                    <div class="timeline-detail-item timeline-personal">
                        <div class="timeline-detail-year">1996</div>
                        <div class="timeline-detail-content">
                            <h4><i class="fas fa-user-plus"></i> Kalianus Nusa Nipa Mulai Bekerja</h4>
                            <p>Sejak tahun 1996 tepatnya bulan <strong>November</strong>, Kalianus Nusa Nipa mulai bekerja di Museum Bahari yang didirikan oleh Pater Gabriel Goran SVD, yang juga pemilik dan pengelola Museum tersebut.</p>
                            <p>Awal pertemuan dengan beliau difasilitasi oleh <strong>Mama Sisilia</strong> yang masih ada kekerabatan keluarga dengan Pater Gabriel.</p>
                            <div class="story-highlight">
                                <p>Waktu itu Kalianus putus sekolah karena masih memiliki tunggakan uang sekolah maka diskors dari sekolah sampai melunasi uang sekolah baru diperbolehkan untuk sekolah kembali.</p>
                                <p>Pertama kali Kalianus mendapat upah dari Pater Gabriel sebesar <strong>Rp. 2.500,-</strong>. Pater juga membantu pelunasan uang sekolah Kalianus hingga kembali bersekolah seperti semula. Jika hari libur dan setiap sore setelah pulang sekolah, Kalianus membantu pekerjaan Pater di Museum Bahari.</p>
                            </div>
                        </div>
                    </div>

                    <!-- 1999-2003 - Bekerja & Kuliah Gagal -->
                    <div class="timeline-detail-item">
                        <div class="timeline-detail-year">1999-2003</div>
                        <div class="timeline-detail-content">
                            <h4><i class="fas fa-briefcase"></i> Periode Bekerja Penuh Waktu</h4>
                            <p>Setelah Kalianus menyelesaikan pendidikan di SLTA tahun 1999, Pater pun meminta Kalianus untuk tetap bekerja bersama beliau, karena kecintaan dan hobi pada pekerjaan ini maka Kalianus pun menerima tawaran dengan upah yang seadanya, bahkan jika Pater belum memiliki uang Kalianus dan kawan-kawan pun tidak mendapatkan uang, kami hanya dicukupkan dengan makan dan minum seadanya. Banyak anak-anak panti asuhan yang bekerja secara sukarela bersama beliau.</p>
                            <p>Setelah sekian lama bekerja dalam benak Kalianus berpikir harus kuliah atau merantau untuk merubah hidup. Kalianus berkonsultasi dengan keluarga dan juga berdiskusi dengan Pater soal keinginan untuk melanjutkan study di perguruan tinggi.</p>
                            <div class="story-highlight">
                                <p>Di bulan <strong>Agustus tahun 2003</strong> Kalianus sempat mendaftar pada salah satu universitas dan mengambil jurusan <strong>Sastra Inggris</strong> namun kembali gagal karena kurangnya dana dan biaya masuk awal.</p>
                                <p>Kalianus sempat hilang dari pekerjaan dan tidak mengabari Pater karena merasa kecewa akibat gagal melanjutkan study di perguruan tinggi. Karena gagal masuk perguruan tinggi, Kalianus memutuskan secara pribadi tanpa berkonsultasi dengan siapapun untuk hijrah ke Bali.</p>
                                <p>Tepat di bulan <strong>Desember 2003</strong> Kalianus pun berangkat ke Bali dengan bermodalkan uang di tangan untuk biaya tiket dan makan minum dalam perjalanan sebesar <strong>Rp. 1.000.000,-</strong>, tanpa bertemu dan berpamitan dengan Pater, Kalianus hanya menitipkan sehelai surat di <strong>kamar no. 24</strong> milik Pater Gabriel Goran SVD di Biara St. Yoseph Ende.</p>
                            </div>
                        </div>
                    </div>

                    <!-- 2010 - Kembali dari Bali -->
                    <div class="timeline-detail-item timeline-emotional">
                        <div class="timeline-detail-year">2010</div>
                        <div class="timeline-detail-content">
                            <h4><i class="fas fa-phone-alt"></i> Panggilan Kembali dari Pater</h4>
                            <p>Pada tahun 2010 ketika Kalianus masih berada di pulau Bali untuk menimba pengalaman, Kalianus mendapat berita tentang keadaan Pater yang saat itu <strong>terserang stroke yang berkepanjangan</strong>.</p>
                            <p>Waktu itu Pater sempat menelpon Kalianus dalam keadaan sakit untuk meminta Kalianus kembali agar dapat melanjutkan usaha yang telah dirintisnya.</p>
                            <div class="quote-inline">
                                <i class="fas fa-quote-left"></i>
                                <p>Pater menelpon dalam keadaan sakit untuk meminta Kalianus kembali agar dapat melanjutkan usaha yang telah dirintisnya.</p>
                            </div>
                            <p>Maka di akhir bulan <strong>Desember 2010</strong> Kalianus pun kembali dari Bali dan menemui Pater di <strong>Biara St. Yoseph Ende</strong> yang sedang terbaring tak berdaya karena stroke.</p>
                        </div>
                    </div>

                    <!-- 2011-2013 - Pengelolaan -->
                    <div class="timeline-detail-item">
                        <div class="timeline-detail-year">2011-2013</div>
                        <div class="timeline-detail-content">
                            <h4><i class="fas fa-key"></i> Penyerahan Kunci & Surat Kuasa</h4>
                            <p>Pada bulan <strong>Januari 2011 hingga 2013</strong>, ketika Pater menyerahkan kunci Museum, pada saat itu pula Kalianus membuka kembali dan memberi pelayanan pada masyarakat luas.</p>
                            <div class="milestone-single">
                                <div class="milestone-icon"><i class="fas fa-file-signature"></i></div>
                                <div class="milestone-text">
                                    <strong>11 November 2012</strong>
                                    <p>Kalianus mendapat <strong>Surat Kuasa</strong> dari Alm. Pater Gabriel Goran, SVD dalam menjalankan pengelolaan Museum Bahari baik secara Internal maupun Eksternal.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- 2023 - Legalitas -->
                    <div class="timeline-detail-item timeline-legal">
                        <div class="timeline-detail-year">2023</div>
                        <div class="timeline-detail-content">
                            <h4><i class="fas fa-gavel"></i> Legalitas Kepemilikan Museum</h4>
                            <p>Pada masa kepemimpinan awal Pater Provinsial yang baru yakni <strong>Pater Jose Emanuel Embu, SVD</strong>, Kalianus merasa sangat perlu mendapatkan legalitas secara kelembagaan, sebab Alm. Pater Gabriel Goran, SVD adalah Konfrater Serikat Sabda Allah, maka saat itu Kalianus berusaha mendekatkan diri dan berkomunikasi secara pribadi bersama beliau dan menjelaskan kronologi keberadaan Museum Bahari dan Kalianus sebagai ahli waris yang mendapatkan wasiat langsung dari Alm. Pater Gabriel Goran, SVD.</p>
                            <p>Maka Kalianus memandang perlu mendapatkan pernyataan resmi secara tertulis, sebelum Kalianus diminta keluar dari asrama untuk mencari tempat tinggal yang baru.</p>
                            <div class="legal-timeline">
                                <div class="legal-item">
                                    <div class="legal-date">15 Juli 2023</div>
                                    <div class="legal-desc">Dari pertemuan pribadi bersama beliau di ruang kerjanya pada pukul <strong>09.30 WIT</strong>, Pater Provinsial meminta Kalianus untuk menyiapkan beberapa dokumen untuk melengkapi sidang dewan provinsial SVD Ende, sebelum beliau memutuskan untuk membuat surat pernyataan kepemilikan Museum Bahari.</div>
                                </div>
                                <div class="legal-item legal-main">
                                    <div class="legal-date">5 Agustus 2023</div>
                                    <div class="legal-desc">Di hari Sabtu, Kalianus menandatangani <strong>Surat Pernyataan Kepemilikan Aset Museum Bahari</strong> yang diberikan oleh Provinsial SVD Ende atas nama Kalianus.</div>
                                </div>
                            </div>
                            <p>Sebelumnya Kalianus mengontrak salah satu ruangan di asrama putra Biara St. Yoseph Ende, maka setelah penandatanganan Surat Pernyataan tersebut Kalianus diminta untuk segera memindahkan dan mencari kontrakan yang baru hingga saat ini.</p>
                        </div>
                    </div>

                    <!-- 2016-2025 - SK & Karir -->
                    <div class="timeline-detail-item">
                        <div class="timeline-detail-year">2016-2025</div>
                        <div class="timeline-detail-content">
                            <h4><i class="fas fa-certificate"></i> Pengakuan Resmi Pemerintah</h4>
                            <p>Kurun waktu <strong>1996 sampai 2013</strong> Museum dengan segala kemandiriannya berusaha untuk menghidupkan dirinya sendiri, termasuk Kalianus secara pribadi bekerja secara sukarela dan digaji berdasarkan hasil penjualan tiket masuk dan penjualan souvenir yang kami kerjakan sendiri.</p>
                            <p>Baru di tahun <strong>2016</strong> pada masa kepemimpinan Bapak <strong>Derson Duka</strong> selaku Kepala Dinas Pariwisata, Kalianus diupayakan untuk mendapatkan SK Bupati Ende sebagai Pengelola Museum Bahari.</p>
                            <p>Karena Museum Bahari belum memiliki lahan dan bangunan sendiri maka semua koleksi yang menjadi isi Museum Bahari Kalianus kemas secara rapi dan teratur agar tidak tercecer di bawah pengawasan dan perawatan Kalianus sendiri.</p>
                            <p>Pada sejak bulan <strong>Januari tahun 2017</strong>, ketika Bidang Kebudayaan berpindah dibawah naungan Pendidikan maka ketika itu Kalianus diberi SK oleh Kepala Dinas Pendidikan dan Kebudayaan sebagai petugas keamanan dan kebersihan pada Situs Taman Renungan Bung Karno.</p>
                            
                            <div class="sk-list">
                                <div class="sk-item">
                                    <div class="sk-year">2016</div>
                                    <div class="sk-content">
                                        <strong>SK Bupati Ende</strong>
                                        <p>No. SK: <code>343 / KEP / HK / 2016</code></p>
                                        <p>Sebagai Pengelola Museum Bahari pada masa kepemimpinan Bapak <strong>Derson Duka</strong> selaku Kepala Dinas Pariwisata.</p>
                                    </div>
                                </div>
                                <div class="sk-item">
                                    <div class="sk-year">2017</div>
                                    <div class="sk-content">
                                        <strong>SK Kepala Dinas Pendidikan dan Kebudayaan</strong>
                                        <p>No. SK: <code>PK.420.V.01/268/II/2017</code></p>
                                        <p>Sebagai petugas keamanan dan kebersihan pada Situs Taman Renungan Bung Karno.</p>
                                    </div>
                                </div>
                                <div class="sk-item">
                                    <div class="sk-year">2023</div>
                                    <div class="sk-content">
                                        <strong>SK Perpanjangan</strong>
                                        <p>No. SK: <code>SPK.01/PPK/DINAS PK/1009/V/2023</code></p>
                                        <p>Berlaku sampai tahun 2026.</p>
                                    </div>
                                </div>
                                <div class="sk-item sk-main">
                                    <div class="sk-year">2025</div>
                                    <div class="sk-content">
                                        <strong>Pegawai Pemerintah dengan Perjanjian Kerja (P3K) Paruh Waktu</strong>
                                        <p>No. SK: <code>KEP.968.1.800/9400.422/PP/IX/2025</code></p>
                                        <p>Terhitung tanggal <strong>01 Oktober 2025 sampai 30 September 2026</strong>, diangkat oleh Bupati Ende pada Unit kerja Bidang Pembinaan Ketenagaan – Dinas Pendidikan dan Kebudayaan.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <!-- ==========================================
                 BAGIAN 4: ASAL MULA BIOTA LAUT
                 ========================================== -->
            <div class="sejarah-section reveal">
                <div class="sejarah-section-header">
                    <div class="sejarah-section-icon">
                        <i class="fas fa-fish"></i>
                    </div>
                    <h3 class="sejarah-section-title">Asal Mula Biota Laut</h3>
                </div>

                <div class="biota-intro">
                    <p>Koleksi dari berbagai jenis biota laut yang terhimpun di Museum Bahari berasal dari <strong>hasil koleksi dan penelitian yang dilakukan oleh P. Gabriel Goran, SVD</strong>. Kerang-kerang laut serta biota laut lainnya berasal dari:</p>
                    <div class="biota-sources">
                        <div class="source-item">
                            <i class="fas fa-map-marker-alt"></i>
                            <div>
                                <strong>Kabupaten Lembata</strong>
                                <span>Khususnya dari Kecamatan Ile Ape - Lembata</span>
                            </div>
                        </div>
                        <div class="source-item">
                            <i class="fas fa-map-marker-alt"></i>
                            <div>
                                <strong>Kabupaten Ende, Ngada, Sikka</strong>
                                <span>Wilayah NTT lainnya</span>
                            </div>
                        </div>
                        <div class="source-item">
                            <i class="fas fa-globe"></i>
                            <div>
                                <strong>Luar Negeri</strong>
                                <span>Filipina, Canada, dan Selandia Baru</span>
                            </div>
                        </div>
                    </div>
                    <p style="margin-top: 1.5rem;">Partisipasi masyarakat setempat dengan menyumbangkan limbah biota laut yang ditemukan kepada pengelola Museum Bahari, dalam hal ini Pater Gabriel Goran, SVD, baik secara langsung maupun melalui perantara.</p>
                </div>

                <h4 style="text-align: center; margin: 2rem 0 1.5rem; color: var(--ocean-dark);">
                    <i class="fas fa-star" style="color: var(--coral);"></i> 
                    Biota Laut yang Menjadi Daya Tarik Museum
                </h4>

                <div class="biota-grid">
                    <div class="biota-card">
                        <div class="biota-icon"><i class="fas fa-fish"></i></div>
                        <h4>MOLLUSCA</h4>
                        <p>Kerang-kerang, Tiram, Gurita, Cumi-cumi, Sotong dan sebangsanya.</p>
                    </div>
                    <div class="biota-card">
                        <div class="biota-icon"><i class="fas fa-fish"></i></div>
                        <h4>PISCES</h4>
                        <p>Ikan bersirip (berbagai jenis Ikan).</p>
                    </div>
                    <div class="biota-card">
                        <div class="biota-icon"><i class="fas fa-shrimp"></i></div>
                        <h4>CRUSTACEA</h4>
                        <p>Udang, Rajungan, Kepiting dan sebangsanya.</p>
                    </div>
                    <div class="biota-card">
                        <div class="biota-icon"><i class="fas fa-circle"></i></div>
                        <h4>ECHINODERMATA</h4>
                        <p>Teripang, Bulu babi, dan sebangsanya.</p>
                    </div>
                    <div class="biota-card">
                        <div class="biota-icon"><i class="fas fa-dragon"></i></div>
                        <h4>REPTILIA</h4>
                        <p>Penyu, Kura-kura, Naga Laut, Biawak, dan sebangsanya.</p>
                    </div>
                    <div class="biota-card">
                        <div class="biota-icon"><i class="fas fa-leaf"></i></div>
                        <h4>ALGA</h4>
                        <p>Rumput laut dan tumbuhan laut lainnya yang hidup dalam air.</p>
                    </div>
                    <div class="biota-card biota-card-highlight">
                        <div class="biota-icon"><i class="fas fa-gem"></i></div>
                        <h4>CORAL</h4>
                        <p>Karang laut dari berbagai jenis yang dikoleksi merupakan kumpulan dari karang-karang laut yang terbongkar akibat dari penangkapan ikan dengan cara <strong>"membom"</strong> menggunakan bahan peledak.</p>
                        <p style="margin-top: 0.8rem; font-size: 0.85rem; color: var(--coral);">
                            <i class="fas fa-exclamation-triangle"></i> Tindakan yang tidak terpuji ini justru membongkar terumbu karang dari keutuhannya dan juga terumbu karang sebagai tempat hidupnya dan berkembang biak ikan-ikan serta biota laut lainnya.
                        </p>
                    </div>
                </div>
            </div>

            <!-- ==========================================
                 BAGIAN 5: PENGGAGAS & DOKUMENTASI
                 ========================================== -->
            <div class="sejarah-section reveal">
                <div class="sejarah-section-header">
                    <div class="sejarah-section-icon">
                        <i class="fas fa-award"></i>
                    </div>
                    <h3 class="sejarah-section-title">Penggagas & Dokumentasi</h3>
                </div>

                <!-- Penggagas -->
                <div class="penggagas-card">
                    <div class="penggagas-photo">
                        <img src="assets/images/profil/pater-gabriel.jpg" 
                             alt="Alm. Pater Gabriel Goran, SVD"
                             onerror="this.src='assets/images/logo/og-image.jpg'">
                    </div>
                    <div class="penggagas-info">
                        <div class="penggagas-badge">
                            <i class="fas fa-crown"></i> PENGGAGAS, PENDIRI & PEMILIK
                        </div>
                        <h3>Alm. Pater Gabriel Goran, SVD</h3>
                        <p class="penggagas-role">Sebagai Penggagas, Pendiri, dan Pemilik Museum Bahari Ende</p>
                        <p>Beliau adalah sosok yang dengan penuh dedikasi mengumpulkan koleksi biota laut sejak tahun 1981, membangun Museum Bahari dengan perjuangan panjang, dan mewakafkan hidupnya untuk pelestarian warisan fosil dan kehidupan laut Nusantara.</p>
                    </div>
                </div>

                <!-- Dokumentasi -->
                <div class="dokumentasi-grid">
                    <div class="dokumentasi-card">
                        <div class="dokumentasi-icon">
                            <i class="fas fa-certificate"></i>
                        </div>
                        <h4>Sertifikat Hak Merek</h4>
                        <p>Dokumen resmi kepemilikan merek Museum Bahari yang telah terdaftar secara hukum.</p>
                        <div class="dokumentasi-placeholder">
                            <i class="fas fa-image"></i>
                            <span>Image: Sertifikat Hak Merek</span>
                        </div>
                    </div>
                    <div class="dokumentasi-card">
                        <div class="dokumentasi-icon">
                            <i class="fas fa-camera"></i>
                        </div>
                        <h4>Dokumentasi Karya Kerajinan</h4>
                        <p>Foto hasil karya kerajinan siput dan kerang laut.</p>
                        <div class="dokumentasi-placeholder">
                            <i class="fas fa-image"></i>
                            <span>Image: Karya Kerajinan</span>
                        </div>
                    </div>
                    <div class="dokumentasi-card dokumentasi-card-special">
                        <div class="dokumentasi-icon">
                            <i class="fas fa-dove"></i>
                        </div>
                        <h4>Lambang Garuda</h4>
                        <p>Lambang Garuda yang terbuat dari limbah cangkang Siput dan Kerang Laut.</p>
                        <p class="karya-credit"><strong>Karya: Kalianus Nusa Nipa</strong></p>
                        <div class="dokumentasi-placeholder">
                            <i class="fas fa-image"></i>
                            <span>Image: Lambang Garuda</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Quote Penutup -->
            <div class="quote-section" style="margin-top: 4rem; border-radius: 20px;">
                <div class="quote-content">
                    <p class="quote-text">"Dari koleksi pribadi di kamar Biara St. Yoseph, menjadi Museum Bahari yang melestarikan 750 species biota laut untuk generasi mendatang."</p>
                    <p class="quote-author">— Warisan Alm. Pater Gabriel Goran, SVD</p>
                </div>
            </div>
        `
    },

    // ==========================================
    // 3. HALAMAN TUJUAN
    // ==========================================
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
                    <div class="goal-icon"><i class="fas fa-graduation-cap"></i></div>
                    <h3>Edukasi Siswa</h3>
                    <p>Menyediakan materi pembelajaran biologi dan geologi yang aplikatif untuk guru dan siswa.</p>
                </div>
                <div class="goal-card reveal">
                    <div class="goal-icon"><i class="fas fa-landmark"></i></div>
                    <h3>Promosi Koleksi</h3>
                    <p>Mempromosikan pentingnya koleksi pribadi yang legal dan terdokumentasi.</p>
                </div>
                <div class="goal-card reveal">
                    <div class="goal-icon"><i class="fas fa-globe-asia"></i></div>
                    <h3>Pelestarian Budaya</h3>
                    <p>Melestarikan pengetahuan lokal tentang fosil dan geologi Nusantara.</p>
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

    // ==========================================
    // 4. HALAMAN DONASI
    // ==========================================
    donasi: {
        judul: "Dukung Kami",
        subjudul: "Bersama melestarikan warisan Nusantara",
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

console.log('✅ Narasi.js loaded successfully (Version 2.0)');
