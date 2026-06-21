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
                            <img src="${profilData.kalianus.foto}" 
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
    // 2. HALAMAN SEJARAH
    // =====================================================
    sejarah: {
        judul: "Perjalanan Kami",
        subjudul: "Dari museum fisik ke museum virtual",
        konten: `
            <div class="section-header reveal">
                <span class="section-label">Sejarah</span>
                <h2 class="section-title">Perjalanan <span class="accent">Ngera Shells</span></h2>
                <p class="section-desc">Dari museum fisik yang dibongkar hingga lahirnya museum virtual untuk seluruh Nusantara.</p>
            </div>
            
            <div class="timeline">
                <div class="timeline-item reveal">
                    <div class="timeline-content">
                        <div class="timeline-year">1996</div>
                        <h4>Berdirinya Museum Bahari</h4>
                        <p>Museum Bahari Ende dibangun dan diresmikan oleh Bupati Ende, Bapak Frans Gedowolo, pada tanggal <strong>14 Agustus 1996</strong>. Museum terletak di kawasan Taman Renungan Bung Karno dan terbuka untuk umum.</p>
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
                        <p>Pada tanggal <strong>11 November 2012</strong>, Pater Gabriel Goran menyerahkan Surat Kuasa kepada Kalianus Nusa Nipa untuk melanjutkan segala usaha yang telah dirintisnya. Dokumen ini tersimpan di arsip museum.</p>
                    </div>
                </div>
                
                <div class="timeline-item reveal">
                    <div class="timeline-content">
                        <div class="timeline-year">2013</div>
                        <h4>Museum Dibongkar</h4>
                        <p>Pada bulan <strong>Januari 2013</strong>, Museum Bahari Ende dibongkar oleh Yayasan Ende Flores dalam rangka revitalisasi Taman Renungan Bung Karno. Koleksi diselamatkan dan diamankan di asrama milik Biara St. Yoseph.</p>
                    </div>
                </div>
                
                <div class="timeline-item reveal">
                    <div class="timeline-content">
                        <div class="timeline-year">2016</div>
                        <h4>Pengakuan Resmi</h4>
                        <p>Kalianus Nusa Nipa mendapat <strong>SK Bupati Ende</strong> sebagai Pengelola Museum Bahari pada Dinas Pariwisata Kabupaten Ende. Museum mulai diakui secara resmi oleh pemerintah daerah.</p>
                    </div>
                </div>
                
                <div class="timeline-item reveal">
                    <div class="timeline-content">
                        <div class="timeline-year">2023</div>
                        <h4>Karya Tulis Pertama</h4>
                        <p>Kalianus Nusa Nipa menerbitkan buku <em>"DIALOG BERSAMA GAIB BUNG KARNO DIBAWAH POHON SUKUN"</em> pada Mei 2023, mendokumentasikan sejarah dan cerita di balik museum.</p>
                    </div>
                </div>
                
                <div class="timeline-item reveal">
                    <div class="timeline-content">
                        <div class="timeline-year">2026</div>
                        <h4>Lahirnya Museum Virtual</h4>
                        <p>Pada tanggal <strong>15 Juni 2026</strong>, dimulailah perancangan Museum Bahari secara daring "Ngera Shells" bersama Bapak Markus Paru, sebagai solusi atas keterbatasan lahan dan biaya untuk membangun museum fisik.</p>
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

    // =====================================================
    // 3. HALAMAN TUJUAN
    // =====================================================
    tujuan: {
        judul: "Misi Kami",
        subjudul: "Tiga pilar utama yang menjadi pedoman",
        konten: `
            <div class="section-header reveal">
                <span class="section-label">Tujuan</span>
                <h2 class="section-title">Tiga Pilar <span class="accent">Ngera Shells</span></h2>
                <p class="section-desc">Museum ini didirikan dengan tiga pilar utama yang menjadi pedoman seluruh aktivitas kami dalam melestarikan warisan bahari Nusantara.</p>
            </div>
            
            <div class="goals-grid">
                <div class="goal-card reveal">
                    <div class="goal-icon">
                        <i class="fas fa-graduation-cap"></i>
                    </div>
                    <h3>Edukasi Siswa</h3>
                    <p>Menyediakan materi pembelajaran biologi dan geologi yang aplikatif. Setiap koleksi dilengkapi dengan nilai edukasi yang dapat digunakan guru dalam kegiatan belajar mengajar di kelas. Target: 10.000 siswa mengakses museum virtual.</p>
                </div>
                
                <div class="goal-card reveal">
                    <div class="goal-icon">
                        <i class="fas fa-landmark"></i>
                    </div>
                    <h3>Promosi Koleksi</h3>
                    <p>Mempromosikan pentingnya koleksi pribadi yang legal dan terdokumentasi sebagai aset ilmu pengetahuan. Kolektor swasta dapat belajar cara memamerkan koleksi secara bertanggung jawab dan beretika.</p>
                </div>
                
                <div class="goal-card reveal">
                    <div class="goal-icon">
                        <i class="fas fa-globe-asia"></i>
                    </div>
                    <h3>Pelestarian Budaya</h3>
                    <p>Melestarikan pengetahuan lokal tentang fosil dan geologi Nusantara. Museum ini menjadi jembatan antara ilmuwan, masyarakat lokal, dan generasi muda dalam menjaga warisan bahari.</p>
                </div>
            </div>
            
            <!-- Target Capaian -->
            <div class="section" style="padding: 4rem 2rem;">
                <div class="section-header reveal">
                    <span class="section-label">Target 2026</span>
                    <h2 class="section-title">Capaian yang <span class="accent">Ditargetkan</span></h2>
                </div>
                
                <div class="stats" style="border-radius: 20px; margin-top: 2rem;">
                    <div class="stats-grid">
                        <div class="stat-item">
                            <div class="stat-number" data-target="${statsData.koleksiFosil}">0</div>
                            <div class="stat-label">Koleksi Fosil Terdokumentasi</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-number" data-target="${statsData.kelasUtama}">0</div>
                            <div class="stat-label">Kelas Utama Fosil</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-number" data-target="${statsData.lokasiTemuan}">0</div>
                            <div class="stat-label">Lokasi Temuan</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-number" data-target="${statsData.targetSiswa}">0</div>
                            <div class="stat-label">Target Siswa</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="quote-section" style="margin-top: 2rem; border-radius: 20px;">
                <div class="quote-content">
                    <p class="quote-text">"5 sekolah mitra akan menjadikan Museum Bahari Ngera Shells sebagai sumber pembelajaran utama untuk mata pelajaran biologi dan geologi."</p>
                    <p class="quote-author">— Target Kerjasama 2026</p>
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
                <!-- Info Donasi -->
                <div class="donate-info reveal">
                    <h3>Mengapa Donasi Anda Penting?</h3>
                    <p>Setiap kontribusi membantu kami melanjutkan misi pelestarian dan edukasi untuk generasi mendatang. Museum Bahari yang pernah ada di Taman Renungan Bung Karno akan kami bangun kembali dengan dukungan Anda.</p>
                    
                    <ul class="donate-list">
                        <li>
                            <i class="fas fa-camera"></i>
                            <div>
                                <strong>Digitalisasi Koleksi</strong>
                                <p style="opacity:0.8; font-size:0.88rem; margin-top:0.3rem;">Memotret dan mendokumentasikan lebih banyak spesimen fosil untuk arsip digital</p>
                            </div>
                        </li>
                        <li>
                            <i class="fas fa-video"></i>
                            <div>
                                <strong>Video Edukasi 3D</strong>
                                <p style="opacity:0.8; font-size:0.88rem; margin-top:0.3rem;">Produksi konten visual interaktif untuk pembelajaran yang lebih menarik</p>
                            </div>
                        </li>
                        <li>
                            <i class="fas fa-book"></i>
                            <div>
                                <strong>Modul Pembelajaran</strong>
                                <p style="opacity:0.8; font-size:0.88rem; margin-top:0.3rem;">Pembuatan materi ajar untuk guru dan siswa di seluruh Indonesia</p>
                            </div>
                        </li>
                        <li>
                            <i class="fas fa-building"></i>
                            <div>
                                <strong>Pembangunan Museum Fisik</strong>
                                <p style="opacity:0.8; font-size:0.88rem; margin-top:0.3rem;">Mewujudkan kembali Museum Bahari di Kabupaten Ende, NTT</p>
                            </div>
                        </li>
                        <li>
                            <i class="fas fa-flask"></i>
                            <div>
                                <strong>Penelitian Fosil</strong>
                                <p style="opacity:0.8; font-size:0.88rem; margin-top:0.3rem;">Identifikasi dan penelitian spesimen baru bersama ahli paleontologi</p>
                            </div>
                        </li>
                    </ul>
                    
                    <p style="font-size:0.85rem; opacity:0.7; margin-top:2rem;">
                        <i class="fas fa-shield-alt"></i> Setiap donasi akan dilaporkan secara transparan di website ini dan dokumen laporan tersedia untuk diunduh.
                    </p>
                </div>
                
                <!-- Form Donasi -->
                <div class="donate-form reveal">
                    <h3>Salurkan Donasi</h3>
                    <p>Pilih metode pembayaran yang paling nyaman untuk Anda</p>
                    
                    <!-- Transfer Bank -->
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
                    
                    <!-- QRIS -->
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
                    
                    <!-- WhatsApp Konfirmasi -->
                    <div style="background: linear-gradient(135deg, rgba(37, 211, 102, 0.1), rgba(18, 140, 126, 0.1)); padding:1.2rem; border-radius:12px; margin-top:1rem; border: 1px solid rgba(37, 211, 102, 0.3);">
                        <p style="font-size:0.88rem; color:var(--text-dark); margin:0 0 0.8rem 0;">
                            <i class="fab fa-whatsapp" style="color:#25D366;"></i>
                            <strong>Konfirmasi Donasi via WhatsApp</strong>
                        </p>
                        <p style="font-size:0.82rem; color:var(--text-light); margin:0 0 0.8rem 0;">
                            Setelah transfer, silakan konfirmasi melalui WhatsApp dengan menyertakan bukti transfer.
                        </p>
                        <a href="https://wa.me/${kontakData.admin.whatsapp}?text=Halo%20Admin%20Museum%20Bahari%2C%20saya%20baru%20saja%20mentransfer%20donasi.%20Berikut%20bukti%20transfer%3A" 
                           target="_blank" 
                           class="btn" 
                           style="background: linear-gradient(135deg, #25D366, #128C7E); color: white; padding: 0.6rem 1.2rem; font-size: 0.85rem; display: inline-flex;">
                            <i class="fab fa-whatsapp"></i> Konfirmasi Donasi
                        </a>
                    </div>
                    
                    <!-- Thank You -->
                    <div style="background:#f5f6fa; padding:1.2rem; border-radius:12px; margin-top:1rem; text-align:center; border:1px solid rgba(0,105,148,0.1);">
                        <p style="font-size:0.88rem; color:var(--text-light); margin:0;">
                            <i class="fas fa-heart" style="color:var(--coral);"></i>
                            Terima kasih atas dukungan Anda untuk pelestarian warisan bumi Nusantara!
                        </p>
                    </div>
                </div>
            </div>
            
            <!-- Dokumen Transparansi -->
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