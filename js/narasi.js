/* =====================================================
   NARASI.js - TEMPLATE HTML HALAMAN STATIS
   Museum Bahari Ngera Shells
   
   ISI FILE:
   - narasi.profil.konten    → Template halaman Profil
   - narasi.sejarah.konten   → Template halaman Sejarah
   - narasi.tujuan.konten    → Template halaman Tujuan
   - narasi.donasi.konten    → Template halaman Donasi
   
   DEPENDENCIES:
   - data.js → profilData, donasiData
   
   DIGUNAKAN OLEH:
   - render.js → renderProfil(), renderSejarah(), 
                 renderTujuan(), renderDonasi()
   
   CATATAN:
   - Menggunakan template literals (backtick `)
   - Data dinamis diambil dari data.js
   - HTML harus valid dan sesuai dengan CSS classes
   ===================================================== */

// =====================================================
// OBJECT NARASI - SEMUA TEMPLATE HTML
// =====================================================
const narasi = {
    
    // =====================================================
    // 1. HALAMAN PROFIL
    // =====================================================
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
                            <img src="${profilData.paterGabriel.foto}" 
                                 alt="${profilData.paterGabriel.nama}"
                                 onerror="this.src='assets/images/logo/og-image.png'">
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
                            <img src="${profilData.kalianus.foto}" 
                                 alt="${profilData.kalianus.nama}"
                                 onerror="this.src='assets/images/logo/og-image.png'">
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

            <!-- Visi Museum -->
            <div class="quote-section" style="margin-top: 4rem; border-radius: 20px;">
                <div class="quote-content">
                    <p class="quote-text">"Museum Bahari Ende 'Ngera Shells' adalah museum virtual yang melestarikan warisan fosil dan kehidupan laut Nusantara untuk generasi mendatang."</p>
                    <p class="quote-author">— Visi Museum Ngera Shells</p>
                </div>
            </div>
        `
    },

    // =====================================================
    // 2. HALAMAN SEJARAH (LENGKAP - Semua Detail Cerita)
    // =====================================================
    sejarah: {
        judul: "Sejarah Museum Bahari",
        subjudul: "Perjalanan panjang pelestarian warisan bahari Nusantara",
        konten: `
            <!-- HEADER SECTION -->
            <div class="section-header reveal">
                <span class="section-label">Sejarah Lengkap</span>
                <h2 class="section-title">Sejarah <span class="accent">Museum Bahari Ende</span></h2>
                <p class="section-desc">Perjalanan panjang dari koleksi pribadi menjadi museum yang melestarikan warisan bahari Nusantara untuk generasi mendatang.</p>
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
                    <div class="sejarah-column-card">
                        <div class="column-badge badge-umum">
                            <i class="fas fa-globe-asia"></i> UMUM
                        </div>
                        <p>Propinsi Nusa Tenggara Timur sebagai daerah kepulauan sebagian besar terdiri dari wilayah perairan (laut), memiliki kandungan laut yang beraneka ragam, bentuk ukuran, warna serta jenisnya, perlu dilestarikan dengan penanganan yang profesional dalam rangka menunjang bidang kepariwisataan dan ilmu pengetahuan.</p>
                        <p>Propinsi Nusa Tenggara Timur pada umumnya dan Kabupaten Ende khususnya <strong>belum memiliki Museum Bahari</strong> atau sejenisnya sebagai tempat yang menyimpan atau koleksi barang-barang laut, ikan-ikan dan lain sebagainya.</p>
                    </div>

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
                 BAGIAN 2: SEJARAH BERDIRINYA (TIMELINE)
                 ========================================== -->
            <div class="sejarah-section reveal">
                <div class="sejarah-section-header">
                    <div class="sejarah-section-icon">
                        <i class="fas fa-landmark"></i>
                    </div>
                    <h3 class="sejarah-section-title">Sejarah Berdirinya Museum Bahari Ende</h3>
                </div>

                <div class="story-intro reveal">
                    <p>Ide untuk membangun sebuah museum, pertama kali muncul dalam benak <strong>Pater Gabriel Goran, SVD</strong>, pada tahun <strong>1990</strong>. Ide ini muncul setelah melihat hasil koleksi biota-biota laut seperti; <strong>MOLLUSCA, PISCES, CRUSTACEA, ECHINODERMATA, REPTILIA, ALGA DAN CORAL</strong>. Sebagai inisiatif pribadi sejak tahun 1981. Bahan-bahan koleksi ini semakin bertambah dari tahun ke tahun baik dalam jumlah maupun jenis, bentuk dan warna yang semuanya mempunyai daya pikat tersendiri.</p>
                </div>

                <div class="timeline-detail">
                    <!-- 1981 -->
                    <div class="timeline-detail-item">
                        <div class="timeline-detail-year">1981</div>
                        <div class="timeline-detail-content">
                            <h4><i class="fas fa-seedling"></i> Awal Koleksi Pribadi</h4>
                            <p>Pater Gabriel Goran, SVD mulai mengumpulkan koleksi biota laut secara pribadi. Bahan-bahan koleksi ini semakin bertambah dari tahun ke tahun baik dalam jumlah maupun jenis, bentuk dan warna.</p>
                        </div>
                    </div>

                    <!-- 1990 -->
                    <div class="timeline-detail-item">
                        <div class="timeline-detail-year">1990</div>
                        <div class="timeline-detail-content">
                            <h4><i class="fas fa-lightbulb"></i> Ide Pertama Membangun Museum</h4>
                            <p>Ide untuk membangun sebuah museum pertama kali muncul dalam benak Pater Gabriel Goran, SVD, setelah melihat hasil koleksi biota-biota laut yang telah terkumpul.</p>
                        </div>
                    </div>

                    <!-- 1993 -->
                    <div class="timeline-detail-item timeline-highlight">
                        <div class="timeline-detail-year">1993</div>
                        <div class="timeline-detail-content">
                            <h4><i class="fas fa-handshake"></i> Pertemuan Bersejarah dengan Bagia Suwira</h4>
                            <p>Pada tahun 1993 ide untuk membangun suatu museum itu lebih tajam dan spesifik, yaitu <strong>Museum Bahari</strong> dengan tujuan umum sebagai sumber informasi dan study kelautan, serta tujuan khususnya untuk membantu Panti Asuhan Naungan Kasih Ende.</p>
                            <p>Ide ini diperkenalkan kepada <strong>Bagia Suwira</strong>, mahasiswa teknik pada <strong>Universitas Teknik Delft Belanda</strong>, yang pada tahun 1993 mengadakan KKN di Flores untuk meneliti kerusakan-kerusakan akibat gempa bumi tanggal <strong>12 Desember 1992</strong>.</p>
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
                            <p>Bagia Suwira mengumpulkan <strong>250 buah siput "OLIVA" bibir merah</strong> untuk dibuatkan gantungan kunci yang akan dibawa ke Belanda untuk mengikuti pameran.</p>
                        </div>
                    </div>

                    <!-- 1994 -->
                    <div class="timeline-detail-item timeline-success">
                        <div class="timeline-detail-year">1994</div>
                        <div class="timeline-detail-content">
                            <h4><i class="fas fa-trophy"></i> Sukses Pameran di Belanda</h4>
                            <p>Dalam sebuah pameran di Belanda, <strong>250 buah gantungan kunci dari siput oliva</strong> dan <strong>30 lembar dasi dari kain tenun Ende Lio</strong> habis terjual dan hasilnya sebesar:</p>
                            <div class="amount-highlight">
                                <span class="amount-label">Total Penjualan</span>
                                <span class="amount-value">Rp. 1.650.000,-</span>
                            </div>
                            <p>Pada tahun 1994, uang itu dibawa ke Ende oleh Bagia Suwira. Dari hasil ini, didapat dana sebesar <strong>Rp. 26.000.000,-</strong> dari organisasi 'WILDE ANZEN' di Belanda sebagai modal awal pembangunan Museum Bahari.</p>
                        </div>
                    </div>

                    <!-- 1995 -->
                    <div class="timeline-detail-item">
                        <div class="timeline-detail-year">1995</div>
                        <div class="timeline-detail-content">
                            <h4><i class="fas fa-drafting-compass"></i> Perencanaan & Pendekatan Pemerintah</h4>
                            <p>Pater mulai menyusun rencana untuk membangun gedung Museum Bahari dan mengadakan pendekatan dengan pejabat-pejabat pemerintah daerah. Permohonan dibahas dalam sidang DPRD pada bulan <strong>Maret 1995</strong> dan disetujui pembangunan Museum Bahari di lokasi sekarang: <strong>Jl. Moh. Hatta, Kelurahan Kota Raja, Kecamatan Ende Selatan, Kabupaten Ende</strong>.</p>
                        </div>
                    </div>

                    <!-- 1996 -->
                    <div class="timeline-detail-item timeline-milestone">
                        <div class="timeline-detail-year">1996</div>
                        <div class="timeline-detail-content">
                            <h4><i class="fas fa-flag"></i> Peresmian Museum Bahari</h4>
                            <div class="milestone-dates">
                                <div class="milestone-date">
                                    <div class="date-day">12</div>
                                    <div class="date-month">Maret 1996</div>
                                    <div class="date-desc">Peletakan batu pertama oleh Bupati Ende</div>
                                </div>
                                <div class="milestone-date milestone-main">
                                    <div class="date-day">14</div>
                                    <div class="date-month">Agustus 1996</div>
                                    <div class="date-desc">Peresmian oleh Bupati Ende, Bapak <strong>Frans Gedowolo</strong></div>
                                </div>
                            </div>
                            <p><strong>Sejak saat itulah Museum Bahari resmi dibuka untuk umum.</strong></p>
                        </div>
                    </div>

                    <!-- 2010-2013 -->
                    <div class="timeline-detail-item timeline-emotional">
                        <div class="timeline-detail-year">2010-2013</div>
                        <div class="timeline-detail-content">
                            <h4><i class="fas fa-key"></i> Pengelolaan & Surat Kuasa</h4>
                            <p>Pada tahun 2010, Pater Gabriel yang terserang stroke meminta Kalianus Nusa Nipa kembali dari Bali untuk melanjutkan usaha yang telah dirintisnya.</p>
                            <div class="milestone-single">
                                <div class="milestone-icon"><i class="fas fa-file-signature"></i></div>
                                <div class="milestone-text">
                                    <strong>11 November 2012</strong>
                                    <p>Kalianus mendapat <strong>Surat Kuasa</strong> dari Alm. Pater Gabriel Goran, SVD dalam menjalankan pengelolaan Museum Bahari.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- 2023 -->
                    <div class="timeline-detail-item timeline-legal">
                        <div class="timeline-detail-year">2023</div>
                        <div class="timeline-detail-content">
                            <h4><i class="fas fa-gavel"></i> Legalitas Kepemilikan Museum</h4>
                            <div class="legal-timeline">
                                <div class="legal-item">
                                    <div class="legal-date">15 Juli 2023</div>
                                    <div class="legal-desc">Pertemuan dengan Pater Provinsial SVD Ende untuk mempersiapkan dokumen kepemilikan Museum Bahari.</div>
                                </div>
                                <div class="legal-item legal-main">
                                    <div class="legal-date">5 Agustus 2023</div>
                                    <div class="legal-desc">Penandatanganan <strong>Surat Pernyataan Kepemilikan Aset Museum Bahari</strong> oleh Provinsial SVD Ende atas nama Kalianus Nusa Nipa.</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- SK & Karir -->
                    <div class="timeline-detail-item">
                        <div class="timeline-detail-year">2016-2025</div>
                        <div class="timeline-detail-content">
                            <h4><i class="fas fa-certificate"></i> Pengakuan Resmi Pemerintah</h4>
                            <div class="sk-list">
                                <div class="sk-item">
                                    <div class="sk-year">2016</div>
                                    <div class="sk-content">
                                        <strong>SK Bupati Ende</strong>
                                        <p>No. SK: <code>343 / KEP / HK / 2016</code></p>
                                        <p>Sebagai Pengelola Museum Bahari</p>
                                    </div>
                                </div>
                                <div class="sk-item">
                                    <div class="sk-year">2017</div>
                                    <div class="sk-content">
                                        <strong>SK Kepala Dinas Pendidikan dan Kebudayaan</strong>
                                        <p>No. SK: <code>PK.420.V.01/268/II/2017</code></p>
                                        <p>Petugas keamanan dan kebersihan Situs Taman Renungan Bung Karno</p>
                                    </div>
                                </div>
                                <div class="sk-item sk-main">
                                    <div class="sk-year">2025</div>
                                    <div class="sk-content">
                                        <strong>P3K Paruh Waktu</strong>
                                        <p>No. SK: <code>KEP.968.1.800/9400.422/PP/IX/2025</code></p>
                                        <p>Unit kerja Bidang Pembinaan Ketenagaan – Dinas Pendidikan dan Kebudayaan</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- ==========================================
                 BAGIAN 3: ASAL MULA BIOTA LAUT
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
                 BAGIAN 4: PENGGAGAS & DOKUMENTASI
                 ========================================== -->
            <div class="sejarah-section reveal">
                <div class="sejarah-section-header">
                    <div class="sejarah-section-icon">
                        <i class="fas fa-award"></i>
                    </div>
                    <h3 class="sejarah-section-title">Penggagas & Dokumentasi</h3>
                </div>

                <div class="penggagas-card">
                    <div class="penggagas-photo">
                        <img src="assets/images/profil/pater-gabriel.png" 
                             alt="Alm. Pater Gabriel Goran, SVD"
                             onerror="this.src='assets/images/logo/og-image.png'">
                    </div>
                    <div class="penggagas-info">
                        <div class="penggagas-badge">
                            <i class="fas fa-crown"></i> PENGGAGAS, PENDIRI & PEMILIK
                        </div>
                        <h3>Alm. Pater Gabriel Goran, SVD</h3>
                        <p class="penggagas-role">Sebagai Penggagas, Pendiri, dan Pemilik Museum Bahari Ende</p>
                        <p>Beliau adalah sosok yang dengan penuh dedikasi mengumpulkan koleksi biota laut sejak tahun 1981, membangun Museum Bahari dengan perjuangan panjang, dan mewakafkan hidupnya untuk pelestarian warisan bahari Nusantara.</p>
                    </div>
                </div>

                <div class="dokumentasi-grid">
                    <div class="dokumentasi-card">
                        <div class="dokumentasi-icon">
                            <i class="fas fa-certificate"></i>
                        </div>
                        <h4>Sertifikat Hak Merek</h4>
                        <p>Dokumen resmi kepemilikan merek Museum Bahari yang telah terdaftar secara hukum.</p>
                        <div class="dokumentasi-image">
                            <img src="assets/images/dokumentasi/sertifikat-hak-merek.png" 
                                alt="Sertifikat Hak Merek Museum Bahari"
                                onerror="this.src='data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 400 300\'%3E%3Crect width=\'400\' height=\'300\' fill=\'%23f0f5fa\'/%3E%3Ctext x=\'50%25\' y=\'50%25\' font-family=\'Arial\' font-size=\'16\' fill=\'%2394a3b8\' text-anchor=\'middle\'%3ESertifikat Hak Merek%3C/text%3E%3C/svg%3E'">
                        </div>
                    </div>
                    
                    <div class="dokumentasi-card">
                        <div class="dokumentasi-icon">
                            <i class="fas fa-camera"></i>
                        </div>
                        <h4>Dokumentasi Karya Kerajinan</h4>
                        <p>Foto hasil karya kerajinan siput dan kerang laut yang dibuat oleh tim Museum Bahari.</p>
                        <div class="dokumentasi-image">
                            <img src="assets/images/dokumentasi/karya-kerajinan.png" 
                                alt="Karya Kerajinan dari Kerang"
                                onerror="this.src='data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 400 300\'%3E%3Crect width=\'400\' height=\'300\' fill=\'%23f0f5fa\'/%3E%3Ctext x=\'50%25\' y=\'50%25\' font-family=\'Arial\' font-size=\'16\' fill=\'%2394a3b8\' text-anchor=\'middle\'%3EKarya Kerajinan%3C/text%3E%3C/svg%3E'">
                        </div>
                    </div>
                    
                    <div class="dokumentasi-card dokumentasi-card-special">
                        <div class="dokumentasi-icon">
                            <i class="fas fa-dove"></i>
                        </div>
                        <h4>Lambang Garuda</h4>
                        <p>Lambang Garuda yang terbuat dari limbah cangkang Siput dan Kerang Laut.</p>
                        <p class="karya-credit"><strong>Karya: Kalianus Nusa Nipa</strong></p>
                        <div class="dokumentasi-image">
                            <img src="assets/images/dokumentasi/lambang-garuda.png" 
                                alt="Lambang Garuda dari Kerang"
                                onerror="this.src='data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 400 300\'%3E%3Crect width=\'400\' height=\'300\' fill=\'%23fff0f5\'/%3E%3Ctext x=\'50%25\' y=\'50%25\' font-family=\'Arial\' font-size=\'16\' fill=\'%2394a3b8\' text-anchor=\'middle\'%3ELambang Garuda%3C/text%3E%3C/svg%3E'">
                        </div>
                    </div>
                </div>

            <!-- Quote Penutup -->
            <div class="quote-section reveal" style="margin-top: 4rem; border-radius: 20px;">
                <div class="quote-content">
                    <p class="quote-text">"Dari koleksi pribadi di kamar Biara St. Yoseph, menjadi Museum Bahari yang melestarikan 750 species biota laut untuk generasi mendatang."</p>
                    <p class="quote-author">— Warisan Alm. Pater Gabriel Goran, SVD</p>
                </div>
            </div>
        `
    },

    // =====================================================
    // 3. HALAMAN TUJUAN (UPDATED - Konten Lengkap)
    // =====================================================
    tujuan: {
        judul: "Tujuan Museum Bahari",
        subjudul: "Misi dan visi pelestarian warisan bahari Nusantara",
        konten: `
            <!-- HEADER SECTION -->
            <div class="section-header reveal">
                <span class="section-label">Tujuan & Misi</span>
                <h2 class="section-title">Tujuan Didirikan <span class="accent">Museum Bahari</span></h2>
                <p class="section-desc">Museum Bahari Ende didirikan dengan tujuan mulia untuk melestarikan kekayaan bahari Nusantara dan memberikan manfaat nyata bagi masyarakat, ilmu pengetahuan, dan generasi mendatang.</p>
            </div>

            <!-- VISI & MISI -->
            <div class="tujuan-overview reveal">
                <div class="overview-card overview-visi">
                    <div class="overview-icon">
                        <i class="fas fa-eye"></i>
                    </div>
                    <h3>Visi</h3>
                    <p>Menjadi Museum Bahari terdepan di Indonesia yang melestarikan kekayaan biota laut Nusantara, menjadi pusat informasi dan studi kelautan, serta memberikan kontribusi nyata bagi pengembangan pariwisata, ilmu pengetahuan, dan kesejahteraan masyarakat.</p>
                </div>
                <div class="overview-card overview-misi">
                    <div class="overview-icon">
                        <i class="fas fa-rocket"></i>
                    </div>
                    <h3>Misi</h3>
                    <p>Mengumpulkan, merawat, dan mendokumentasikan koleksi biota laut; menyediakan sarana edukasi dan penelitian; melestarikan lingkungan laut; serta memberdayakan masyarakat lokal melalui pengembangan kerajinan dan pariwisata bahari.</p>
                </div>
            </div>

            <!-- TUJUAN UMUM -->
            <div class="sejarah-section reveal">
                <div class="sejarah-section-header">
                    <div class="sejarah-section-icon">
                        <i class="fas fa-globe-asia"></i>
                    </div>
                    <h3 class="sejarah-section-title">Tujuan Umum</h3>
                </div>

                <p class="tujuan-intro">Museum Bahari didirikan dengan <strong>7 tujuan umum</strong> yang mencakup aspek pelestarian, edukasi, pariwisata, ekonomi, dan lingkungan:</p>

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
                            <p>Menjadi obyek wisata (tempat rekreasi) yang edukatif bagi masyarakat lokal maupun wisatawan domestik dan mancanegara.</p>
                        </div>
                    </div>
                    <div class="tujuan-item">
                        <div class="tujuan-number">04</div>
                        <div class="tujuan-content">
                            <h4><i class="fas fa-briefcase"></i> Lapangan Kerja</h4>
                            <p>Membuka lapangan kerja bagi masyarakat sekitar melalui pengelolaan museum dan pengembangan sektor pariwisata.</p>
                        </div>
                    </div>
                    <div class="tujuan-item">
                        <div class="tujuan-number">05</div>
                        <div class="tujuan-content">
                            <h4><i class="fas fa-chart-line"></i> Pendapatan Daerah</h4>
                            <p>Menjadi salah satu sumber pendapatan daerah melalui sektor pariwisata dan kontribusi terhadap perekonomian lokal.</p>
                        </div>
                    </div>
                    <div class="tujuan-item">
                        <div class="tujuan-number">06</div>
                        <div class="tujuan-content">
                            <h4><i class="fas fa-hands"></i> Pemberdayaan Pengrajin</h4>
                            <p>Mendorong pengrajin untuk memproduksi bahan kerajinan tangan dari siput dan kerang sebagai bahan souvenir atau cendramata dari bahan-bahan yang berasal dari laut.</p>
                        </div>
                    </div>
                    <div class="tujuan-item tujuan-item-wide">
                        <div class="tujuan-number">07</div>
                        <div class="tujuan-content">
                            <h4><i class="fas fa-leaf"></i> Pelestarian Lingkungan</h4>
                            <p>Mendorong menjaga, memelihara keutuhan ciptaan Tuhan dan keindahan alam laut dalam usaha melestarikan lingkungan laut untuk generasi mendatang.</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- TUJUAN KHUSUS -->
            <div class="sejarah-section reveal">
                <div class="sejarah-section-header">
                    <div class="sejarah-section-icon" style="background: linear-gradient(135deg, var(--coral), var(--coral-light));">
                        <i class="fas fa-heart"></i>
                    </div>
                    <h3 class="sejarah-section-title">Tujuan Khusus</h3>
                </div>

                <div class="tujuan-khusus-card">
                    <div class="tujuan-khusus-icon">
                        <i class="fas fa-hands-helping"></i>
                    </div>
                    <div class="tujuan-khusus-content">
                        <h4>Membantu Anak-Anak Panti Asuhan</h4>
                        <p>Sebagai sumber pendapatan untuk membantu <strong>anak-anak Panti Asuhan Naungan Kasih</strong> dan anak-anak terlantar dalam rangka menunjang program Pemerintah dalam menangani anak-anak terlantar.</p>
                        
                        <div class="tujuan-khusus-highlight">
                            <div class="highlight-item">
                                <i class="fas fa-home"></i>
                                <div>
                                    <strong>Panti Asuhan Naungan Kasih Ende</strong>
                                    <span>Lembaga yang menjadi penerima manfaat langsung dari hasil pengelolaan Museum Bahari</span>
                                </div>
                            </div>
                            <div class="highlight-item">
                                <i class="fas fa-child"></i>
                                <div>
                                    <strong>Anak-Anak Terlantar</strong>
                                    <span>Mendukung program Pemerintah dalam menangani anak-anak terlantar di Kabupaten Ende</span>
                                </div>
                            </div>
                            <div class="highlight-item">
                                <i class="fas fa-hand-holding-usd"></i>
                                <div>
                                    <strong>Sumber Pendapatan Sosial</strong>
                                    <span>Hasil penjualan tiket masuk dan souvenir disalurkan untuk kegiatan sosial</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- DAMPAK & KONTRIBUSI -->
            <div class="sejarah-section reveal">
                <div class="sejarah-section-header">
                    <div class="sejarah-section-icon" style="background: linear-gradient(135deg, #4ade80, #22c55e);">
                        <i class="fas fa-chart-pie"></i>
                    </div>
                    <h3 class="sejarah-section-title">Dampak & Kontribusi</h3>
                </div>

                <div class="dampak-grid">
                    <div class="dampak-card">
                        <div class="dampak-number">750+</div>
                        <div class="dampak-label">Species Biota Laut</div>
                        <p>Terkoleksi dan terpelihara dengan baik</p>
                    </div>
                    <div class="dampak-card">
                        <div class="dampak-number">30+</div>
                        <div class="dampak-label">Tahun Berdiri</div>
                        <p>Melayani sejak tahun 1996 hingga kini</p>
                    </div>
                    <div class="dampak-card">
                        <div class="dampak-number">7</div>
                        <div class="dampak-label">Kategori Biota</div>
                        <p>Mollusca, Pisces, Crustacea, dll</p>
                    </div>
                    <div class="dampak-card">
                        <div class="dampak-number">∞</div>
                        <div class="dampak-label">Manfaat Sosial</div>
                        <p>Untuk panti asuhan & masyarakat</p>
                    </div>
                </div>
            </div>

            <!-- TARGET 2026 -->
            <div class="sejarah-section reveal">
                <div class="sejarah-section-header">
                    <div class="sejarah-section-icon" style="background: linear-gradient(135deg, #3b82f6, #1d4ed8);">
                        <i class="fas fa-flag-checkered"></i>
                    </div>
                    <h3 class="sejarah-section-title">Target Capaian 2026</h3>
                </div>

                <div class="target-grid">
                    <div class="target-item">
                        <div class="target-icon"><i class="fas fa-database"></i></div>
                        <div class="target-info">
                            <div class="target-value">50</div>
                            <div class="target-label">Koleksi Fosil Terdokumentasi</div>
                        </div>
                    </div>
                    <div class="target-item">
                        <div class="target-icon"><i class="fas fa-users"></i></div>
                        <div class="target-info">
                            <div class="target-value">10.000</div>
                            <div class="target-label">Siswa Mengakses Museum</div>
                        </div>
                    </div>
                    <div class="target-item">
                        <div class="target-icon"><i class="fas fa-school"></i></div>
                        <div class="target-info">
                            <div class="target-value">5</div>
                            <div class="target-label">Sekolah Mitra Pembelajaran</div>
                        </div>
                    </div>
                    <div class="target-item">
                        <div class="target-icon"><i class="fas fa-globe"></i></div>
                        <div class="target-info">
                            <div class="target-value">4</div>
                            <div class="target-label">Kelas Utama Fosil</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Quote Penutup -->
            <div class="quote-section reveal" style="margin-top: 4rem; border-radius: 20px;">
                <div class="quote-content">
                    <p class="quote-text">"Museum Bahari bukan sekadar tempat menyimpan koleksi, melainkan wadah untuk melestarikan ciptaan Tuhan, memberdayakan masyarakat, dan menginspirasi generasi mendatang untuk mencintai laut Nusantara."</p>
                    <p class="quote-author">— Alm. Pater Gabriel Goran, SVD</p>
                </div>
            </div>
        `
    },

    // =====================================================
    // 4. HALAMAN DONASI
    // =====================================================
    donasi: {
        judul: "Dukung Kami",
        subjudul: "Bersama melestarikan warisan Nusantara",
        konten: `
            <div class="section-header reveal">
                <span class="section-label">Donasi</span>
                <h2 class="section-title">Dukung <span class="accent">Ngera Shells</span></h2>
                <p class="section-desc">Dukungan Anda sangat berarti untuk mewujudkan Museum Fisik kembali di Kabupaten Ende, Nusa Tenggara Timur.</p>
            </div>
            
            <div class="donate-container">
                <div class="donate-info reveal">
                    <h3>Mengapa Donasi Anda Penting?</h3>
                    <p>Setiap kontribusi membantu kami melanjutkan misi pelestarian dan edukasi untuk generasi mendatang. Museum Bahari yang pernah ada di Taman Renungan Bung Karno akan kami bangun kembali dengan dukungan Anda.</p>
                    
                    <ul class="donate-list">
                        <li>
                            <i class="fas fa-camera"></i>
                            <div>
                                <strong>Digitalisasi Koleksi</strong>
                                <p>Memotret dan mendokumentasikan lebih banyak spesimen fosil untuk arsip digital</p>
                            </div>
                        </li>
                        <li>
                            <i class="fas fa-video"></i>
                            <div>
                                <strong>Video Edukasi 3D</strong>
                                <p>Produksi konten visual interaktif untuk pembelajaran yang lebih menarik</p>
                            </div>
                        </li>
                        <li>
                            <i class="fas fa-book"></i>
                            <div>
                                <strong>Modul Pembelajaran</strong>
                                <p>Pembuatan materi ajar untuk guru dan siswa di seluruh Indonesia</p>
                            </div>
                        </li>
                        <li>
                            <i class="fas fa-building"></i>
                            <div>
                                <strong>Pembangunan Museum Fisik</strong>
                                <p>Mewujudkan kembali Museum Bahari di Kabupaten Ende, NTT</p>
                            </div>
                        </li>
                        <li>
                            <i class="fas fa-flask"></i>
                            <div>
                                <strong>Penelitian Fosil</strong>
                                <p>Identifikasi dan penelitian spesimen baru bersama ahli paleontologi</p>
                            </div>
                        </li>
                    </ul>
                    
                    <p><i class="fas fa-shield-alt"></i> Setiap donasi akan dilaporkan secara transparan di website ini dan dokumen laporan tersedia untuk diunduh.</p>
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
                                <h4>Transfer ${donasiData.bank}</h4>
                                <small>a.n. ${donasiData.atasNama}</small>
                            </div>
                        </div>
                        <div class="account-number">
                            <span>${donasiData.nomorRekening}</span>
                            <button class="copy-btn" onclick="copyToClipboard('${donasiData.nomorRekening.replace(/-/g, '')}', this)">
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
                                <small>Scan dengan aplikasi e-wallet atau m-banking</small>
                            </div>
                        </div>
                        <div class="qris-box">
                            <div class="qris-placeholder">
                                <i class="fas fa-qrcode"></i>
                            </div>
                            <p style="font-size:0.85rem; color:var(--text-light); margin-top:0.5rem;">
                                Scan QR Code di atas atau unduh di <a href="${donasiData.qris}" target="_blank" style="color:var(--ocean-primary); font-weight:600;">sini</a>
                            </p>
                        </div>
                    </div>
                    
                    <div style="background: linear-gradient(135deg, rgba(37, 211, 102, 0.1), rgba(18, 140, 126, 0.1)); padding:1.2rem; border-radius:12px; margin-top:1rem; border: 1px solid rgba(37, 211, 102, 0.3);">
                        <p style="font-size:0.88rem; color:var(--text-dark); margin:0 0 0.8rem 0;">
                            <i class="fab fa-whatsapp" style="color:#25D366;"></i>
                            <strong>Konfirmasi Donasi via WhatsApp</strong>
                        </p>
                        <p style="font-size:0.82rem; color:var(--text-light); margin:0 0 0.8rem 0;">
                            Setelah transfer, silakan konfirmasi melalui WhatsApp dengan menyertakan bukti transfer.
                        </p>
                        <a href="https://wa.me/6281353810065?text=Halo%20Admin%20Museum%20Bahari%2C%20saya%20baru%20saja%20mentransfer%20donasi.%20Berikut%20bukti%20transfer%3A" 
                           target="_blank" 
                           class="btn" 
                           style="background: linear-gradient(135deg, #25D366, #128C7E); color: white; padding: 0.6rem 1.2rem; font-size: 0.85rem; display: inline-flex;">
                            <i class="fab fa-whatsapp"></i> Konfirmasi Donasi
                        </a>
                    </div>
                    
                    <div style="background:#f5f6fa; padding:1.2rem; border-radius:12px; margin-top:1rem; text-align:center; border:1px solid rgba(0,105,148,0.1);">
                        <p style="font-size:0.88rem; color:var(--text-light); margin:0;">
                            <i class="fas fa-heart" style="color:var(--coral);"></i>
                            Terima kasih atas dukungan Anda untuk pelestarian warisan bumi Nusantara!
                        </p>
                    </div>
                </div>
            </div>
            
            <div class="section" style="padding: 4rem 2rem 2rem;">
                <div class="section-header reveal">
                    <span class="section-label">Transparansi</span>
                    <h2 class="section-title">Dokumen <span class="accent">Laporan Donasi</span></h2>
                    <p class="section-desc">Kami berkomitmen untuk transparan dalam pengelolaan donasi. Semua laporan dapat diakses dan diunduh oleh publik.</p>
                </div>
                
                <div style="text-align: center; margin-top: 2rem;">
                    <a href="assets/documents/Laporan-Donasi-2026.pdf" 
                       target="_blank" 
                       class="btn btn-primary">
                        <i class="fas fa-file-pdf"></i> Unduh Laporan Donasi 2026
                    </a>
                </div>
            </div>
        `
    }
};

// =====================================================
// LOGGING
// =====================================================
console.log('✅ Narasi templates loaded');
console.log('📝 Templates available:', Object.keys(narasi).join(', '));

// Expose to global scope
window.narasi = narasi;