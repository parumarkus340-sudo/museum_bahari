/* =====================================================
   RENDER.js
   Semua fungsi render untuk setiap halaman
   
   DEPENDENCIES:
   - data.js     → koleksiData, profilData, galeriData, videoData, dokumenData, audioData
   - narasi.js   → narasi.profil.konten, narasi.sejarah.konten, dll
   - chat.js     → renderChat (sudah ada di chat.js)
   - app.js      → initRevealAnimations, animateStats, attachHomeEvents, dll
   
   CATATAN:
   - renderChat() sudah ada di chat.js, tidak perlu di sini
   - Semua path foto/video mengarah ke folder assets/
   - Ada fallback system jika foto tidak ditemukan
   ===================================================== */

// ============ STATE MANAGEMENT ============
let currentPage = "home";
let currentSubmenu = null;
let currentGaleriKategori = "semua";
let currentLightboxIndex = 0;
let currentLightboxItems = [];

// ============ MAIN RENDER FUNCTION ============
function render() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    if (currentPage === "home") renderHome();
    else if (currentPage === "profil") renderProfil();
    else if (currentPage === "sejarah") renderSejarah();
    else if (currentPage === "tujuan") renderTujuan();
    else if (currentPage === "donasi") renderDonasi();
    else if (currentPage === "galeri") renderGaleri();
    else if (currentPage === "youtube") renderYoutube();
    else if (currentPage === "dokumen") renderDokumen();
    else if (currentPage === "whatsapp") renderWhatsapp();
    else if (currentPage === "koleksi" && currentSubmenu) renderKoleksiSubmenu(currentSubmenu);
    // ⚠️ renderChat() sudah ada di chat.js, tidak perlu di sini
    
    updateActiveNav();
    initRevealAnimations();
    navMenu.classList.remove('active');
}

// =====================================================
// RENDER HOME
// =====================================================
function renderHome() {
    mainContainer.innerHTML = `
        <section class="hero" style="background-image: linear-gradient(135deg, rgba(0, 31, 63, 0.85) 0%, rgba(0, 51, 102, 0.75) 30%, rgba(0, 105, 148, 0.7) 70%, rgba(64, 153, 199, 0.8) 100%), url('assets/images/hero/hero-bg.jpg'); background-size: cover; background-position: center;">
            <div class="hero-content">
                <div class="hero-badge">
                    <i class="fas fa-water"></i>
                    <span>Museum Virtual Bahari Ende</span>
                </div>
                <h1>Selamat Datang di <span class="accent">Ngera Shells</span></h1>
                <p class="hero-subtitle">Museum Bahari Ende — "Rumah Kita"</p>
                
                <!-- Audio Guide Button -->
                <div class="audio-guide-mini reveal">
                    <button class="audio-mini-btn" onclick="toggleAudioGuide()">
                        <i class="fas fa-headphones"></i>
                        <span>Audio Guide</span>
                        <span class="audio-duration">${audioData.museumTour.durasi}</span>
                    </button>
                </div>
                
                <div class="hero-welcome-box">
                    <div class="welcome-header">
                        <i class="fas fa-feather-alt"></i>
                        <span>Kata Pengantar</span>
                    </div>
                    <div class="welcome-content">
                        <p class="first-paragraph">Salah satu indikator peradaban maju dan berkembang di suatu wilayah adalah keberadaan museum. Museum tidak hanya menyimpan benda-benda kuno atau artefak dari berbagai aspek kehidupan, tetapi juga menjadi sarana informasi dan objek wisata, khususnya wisata bahari.</p>
                        <p>Kehadiran museum di suatu wilayah dapat menyelamatkan benda dan artefak dari kepunahan serta kerusakan alami. Sesuai dengan tujuan dan latar belakangnya, museum berfungsi untuk mengumpulkan, mendokumentasikan, dan menarasikan koleksi guna edukasi tentang perlindungan dan pelestarian alam kepada masyarakat luas, khususnya pelajar dan mahasiswa.</p>
                        <p>Museum ini berupaya melestarikan kembali warisan budaya yang hampir dan akan punah di berbagai bidang kehidupan, terkhususnya siput, kerang, serta biota laut lainnya. Keberadaan Museum Bahari yang dibangun tahun 1996 menjadi salah satu indikator penting pembangunan kebudayaan daerah dalam mendukung Kebudayaan Nasional.</p>
                        <p class="highlight-paragraph">Namun sayang, Museum Bahari yang terletak di dalam kawasan Taman Renungan telah dibongkar pada Januari 2013 oleh Yayasan Ende Flores, seiring revitalisasi Taman Renungan Bung Karno.</p>
                        <p>Karena vakum dalam kurun waktu yang tidak menentu, serta ketiadaan lahan dan biaya, muncullah ide untuk merancang Museum secara Daring agar dapat dipublikasikan kembali kepada masyarakat luas. Dalam upaya tersebut, saya menyampaikan niat yang selama ini saya pendam untuk mewujudkan museum virtual.</p>
                        <p>Mengingat banyaknya kendala yang saya hadapi, khususnya dari sisi biaya dan lahan, saya berinisiatif berdiskusi dengan <strong>Bapak Markus Paru</strong>—sahabat dan rekan kerja yang sangat profesional di bidangnya—untuk mewujudkan ide dan pemikiran saya. Setelah menyampaikan pandangan saya dan beliau menyatakan siap membantu, maka sejak tanggal <strong>15 Juni 2026</strong> beliau langsung memulai merancang aplikasi khusus untuk Museum Bahari Ende "Ngera Shells".</p>
                        <p>Besar harapan dan niat baik kami agar kehadiran museum ini membawa manfaat bagi masyarakat luas, khususnya pelajar dan mahasiswa yang haus akan seni dan pengetahuan baru. Melalui aplikasi daring ini, kami juga berharap dapat mengumpulkan <strong>DONASI</strong> dari dukungan masyarakat luas dalam mewujudkan niat kami, yakni pembangunan Museum secara fisik nyata di Kabupaten Ende, Nusa Tenggara Timur, Indonesia.</p>
                        <div class="welcome-signature">
                            <div class="signature-line"></div>
                            <p class="signature-place"><em>Ende, 15 Juni 2026</em></p>
                            <p class="signature-position">Pemilik dan Pengelola</p>
                            <p class="signature-museum">Museum Bahari Ende "Ngera Shells"</p>
                            <p class="signature-name">Kalianus Nusa Nipa</p>
                        </div>
                    </div>
                </div>
                
                <div class="hero-buttons">
                    <a href="#" class="btn btn-primary" data-submenu="bifalfia">
                        <i class="fas fa-compass"></i> Jelajahi Koleksi
                    </a>
                    <a href="#" class="btn btn-outline" data-page="galeri">
                        <i class="fas fa-images"></i> Lihat Galeri
                    </a>
                    <a href="#" class="btn btn-outline" data-page="dokumen">
                        <i class="fas fa-file-alt"></i> Dokumen
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
                    const firstItem = items[0];
                    return `
                        <div class="collection-card reveal" data-submenu="${key}">
                            <div class="collection-img" style="background: linear-gradient(135deg, ${info.color}22, ${info.color}44);">
                                <span class="collection-category">${info.title}</span>
                                <img src="${firstItem.img}" alt="${info.title}" loading="lazy"
                                     style="width:100%; height:100%; object-fit:cover; position:relative; z-index:1;"
                                     onerror="this.style.display='none'; this.parentElement.insertAdjacentHTML('beforeend', '<span style=\\'font-size:5rem; position:relative; z-index:1;\\'>${info.icon}</span>')">
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
                <h2 class="section-title">Hubungi <span class="accent">Kami</span></h2>
                <p class="section-desc" style="max-width:700px; margin:1rem auto 2rem;">
                    Butuh informasi lebih lanjut? Ingin berdonasi atau berkunjung? Hubungi kami langsung via WhatsApp!
                </p>
                <div style="display:flex; gap:1rem; justify-content:center; flex-wrap:wrap;">
                    <a href="https://wa.me/6281353810065" target="_blank" class="btn" style="background: linear-gradient(135deg, #25D366, #128C7E); color: white;">
                        <i class="fab fa-whatsapp"></i> Admin Utama
                    </a>
                    <a href="https://wa.me/6281338607300" target="_blank" class="btn" style="background: linear-gradient(135deg, #25D366, #128C7E); color: white;">
                        <i class="fab fa-whatsapp"></i> Pengelola
                    </a>
                    <a href="#" class="btn btn-outline" data-page="whatsapp" style="color:var(--ocean-dark); border-color:var(--ocean-primary);">
                        <i class="fas fa-address-book"></i> Semua Kontak
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

// =====================================================
// RENDER SIMPLE PAGES (PAKAI NARASI.js)
// =====================================================
function renderProfil() {
    mainContainer.innerHTML = `<section class="section" style="padding-top: 8rem;">${narasi.profil.konten}</section>`;
}

function renderSejarah() {
    mainContainer.innerHTML = `<section class="section" style="padding-top: 8rem;">${narasi.sejarah.konten}</section>`;
}

function renderTujuan() {
    mainContainer.innerHTML = `<section class="section" style="padding-top: 8rem;">${narasi.tujuan.konten}</section>`;
}

function renderDonasi() {
    mainContainer.innerHTML = `<section class="section" style="padding-top: 8rem;">${narasi.donasi.konten}</section>`;
}

// =====================================================
// RENDER GALERI
// =====================================================
function renderGaleri() {
    mainContainer.innerHTML = `
        <section class="section" style="padding-top: 8rem;">
            <div class="section-header reveal">
                <span class="section-label">Dokumentasi</span>
                <h2 class="section-title">Galeri <span class="accent">Kegiatan Museum</span></h2>
                <p class="section-desc">Momen-momen berharga dari berbagai kegiatan Museum Bahari Ngera Shells. Klik foto untuk melihat lebih detail.</p>
            </div>
            <div class="galeri-tabs reveal">
                <button class="galeri-tab ${currentGaleriKategori === 'semua' ? 'active' : ''}" data-kategori="semua"><i class="fas fa-th"></i> Semua Kegiatan</button>
                <button class="galeri-tab ${currentGaleriKategori === 'ekspedisi' ? 'active' : ''}" data-kategori="ekspedisi"><i class="fas fa-compass"></i> Ekspedisi</button>
                <button class="galeri-tab ${currentGaleriKategori === 'edukasi' ? 'active' : ''}" data-kategori="edukasi"><i class="fas fa-graduation-cap"></i> Edukasi</button>
                <button class="galeri-tab ${currentGaleriKategori === 'penelitian' ? 'active' : ''}" data-kategori="penelitian"><i class="fas fa-microscope"></i> Penelitian</button>
                <button class="galeri-tab ${currentGaleriKategori === 'pelestarian' ? 'active' : ''}" data-kategori="pelestarian"><i class="fas fa-leaf"></i> Pelestarian</button>
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
            <img src="${item.img}" alt="${item.judul}" loading="lazy"
                 onerror="this.src='assets/images/logo/og-image.jpg'">
            <div class="galeri-icon"><i class="fas fa-search-plus"></i></div>
            <div class="galeri-overlay">
                <div class="galeri-title">${item.judul}</div>
                <div class="galeri-date"><i class="fas fa-calendar"></i> ${item.tanggal}</div>
            </div>
        </div>
    `).join('');
}

// =====================================================
// RENDER YOUTUBE / VIDEO (Support YouTube + Video Lokal)
// =====================================================
function renderYoutube() {
    mainContainer.innerHTML = `
        <section class="section" style="padding-top: 8rem;">
            <div class="section-header reveal">
                <span class="section-label">Video Edukasi</span>
                <h2 class="section-title">Channel <span class="accent">Video Museum</span></h2>
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
                    ${videoData.map(video => {
                        // Pilih video source berdasarkan type
                        let videoContent = '';
                        if (video.type === 'youtube' && video.youtubeId) {
                            videoContent = `<iframe src="https://www.youtube.com/embed/${video.youtubeId}" 
                                            title="${video.judul}" 
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                            allowfullscreen></iframe>`;
                        } else if (video.type === 'lokal' && video.lokalSrc) {
                            videoContent = `<video controls poster="${video.thumbnail}" preload="metadata">
                                            <source src="${video.lokalSrc}" type="video/mp4">
                                            Browser Anda tidak mendukung video HTML5.
                                        </video>`;
                        } else {
                            videoContent = `<div style="display:flex; align-items:center; justify-content:center; height:100%; background:#000; color:white;">
                                            <i class="fas fa-video-slash" style="font-size:3rem;"></i>
                                        </div>`;
                        }
                        
                        return `
                            <div class="video-item reveal">
                                <div class="video-wrapper">
                                    ${videoContent}
                                </div>
                                <div class="video-info">
                                    <h4>
                                        <i class="${video.type === 'youtube' ? 'fab fa-youtube' : 'fas fa-film'}"></i> 
                                        ${video.judul}
                                    </h4>
                                    <p>${video.deskripsi}</p>
                                    <div class="video-meta">
                                        <span><i class="fas fa-tag"></i> ${video.kategori}</span>
                                        <span><i class="fas fa-calendar"></i> ${video.tanggal}</span>
                                        <span><i class="fas fa-clock"></i> ${video.durasi}</span>
                                        <span><i class="fas fa-${video.type === 'youtube' ? 'youtube' : 'video'}"></i> ${video.type === 'youtube' ? 'YouTube' : 'Lokal'}</span>
                                    </div>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        </section>
    `;
    initRevealAnimations();
}

// =====================================================
// RENDER DOKUMEN (HALAMAN BARU)
// =====================================================
function renderDokumen() {
    mainContainer.innerHTML = `
        <section class="section" style="padding-top: 8rem;">
            <div class="section-header reveal">
                <span class="section-label">Dokumen Resmi</span>
                <h2 class="section-title">Arsip <span class="accent">Dokumen Museum</span></h2>
                <p class="section-desc">Dokumen legalitas, laporan, dan informasi resmi Museum Bahari Ngera Shells yang dapat diakses oleh publik.</p>
            </div>
            
            <div class="dokumen-grid">
                ${dokumenData.map(doc => `
                    <div class="dokumen-card reveal">
                        <div class="dokumen-icon">
                            <i class="fas ${doc.icon}"></i>
                        </div>
                        <div class="dokumen-info">
                            <span class="dokumen-kategori">${doc.kategori}</span>
                            <h3>${doc.judul}</h3>
                            <p>${doc.deskripsi}</p>
                            <div class="dokumen-meta">
                                <span><i class="fas fa-calendar"></i> ${doc.tanggal}</span>
                                <span><i class="fas fa-file-pdf"></i> ${doc.ukuran}</span>
                            </div>
                            <a href="${doc.file}" target="_blank" class="dokumen-btn" download>
                                <i class="fas fa-download"></i> Download PDF
                            </a>
                        </div>
                    </div>
                `).join('')}
            </div>
            
            <div class="quote-section reveal" style="margin-top: 4rem; border-radius: 20px;">
                <div class="quote-content">
                    <p class="quote-text">"Transparansi adalah kunci kepercayaan. Semua dokumen resmi museum dapat diakses oleh publik."</p>
                    <p class="quote-author">— Museum Bahari Ngera Shells</p>
                </div>
            </div>
        </section>
    `;
    initRevealAnimations();
}

// =====================================================
// RENDER KOLEKSI SUBMENU
// =====================================================
function renderKoleksiSubmenu(submenu) {
    const items = koleksiData[submenu];
    if (!items) return;
    
    const judulMap = { bifalfia: "Bifalfia", gastropoda: "Gastropoda", sepalopoda: "Sepalopoda", astropoda: "Astropoda" };
    const descMap = { 
        bifalfia: "Kerang purba dengan dua katup simetris", 
        gastropoda: "Siput laut purba dengan cangkang spiral", 
        sepalopoda: "Nenek moyang cumi-cumi dan nautilus", 
        astropoda: "Bintang laut dan bulu babi dari era purba" 
    };
    
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
                            <img src="${item.img}" alt="${item.nama}" loading="lazy"
                                 style="width:100%; height:100%; object-fit:cover; position:relative; z-index:1;"
                                 onerror="this.style.display='none'; this.parentElement.insertAdjacentHTML('beforeend', '<span style=\\'font-size:5rem; position:relative; z-index:1;\\'>${item.icon}</span>')">
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

// =====================================================
// RENDER WHATSAPP PAGE
// =====================================================
function renderWhatsapp() {
    mainContainer.innerHTML = `
        <section class="section" style="padding-top: 8rem;">
            <div class="wa-page-container">
                <div class="wa-hero-card reveal">
                    <div class="wa-hero-icon"><i class="fab fa-whatsapp"></i></div>
                    <h2>Hubungi Kami via WhatsApp</h2>
                    <p>Tim Museum Bahari Ngera Shells siap membantu Anda. Pilih kontak di bawah untuk memulai percakapan.</p>
                </div>
                <div class="wa-cards-grid">
                    <div class="wa-contact-card reveal">
                        <div class="wa-contact-header">
                            <div class="wa-contact-avatar"><i class="fas fa-user-tie"></i></div>
                            <div class="wa-contact-info">
                                <h3>Admin Utama</h3>
                                <div class="wa-contact-role">Informasi Umum & Donasi</div>
                                <div class="wa-contact-number">+62 813-5381-0065</div>
                            </div>
                        </div>
                        <ul class="wa-contact-features">
                            <li><i class="fas fa-check-circle"></i> Informasi Museum</li>
                            <li><i class="fas fa-check-circle"></i> Donasi & Kerjasama</li>
                            <li><i class="fas fa-check-circle"></i> Kunjungan Grup</li>
                            <li><i class="fas fa-check-circle"></i> Respon Cepat</li>
                        </ul>
                        <a href="https://wa.me/6281353810065?text=Halo%20Admin%20Museum%20Bahari%20Ngera%20Shells%2C%20saya%20ingin%20bertanya%20tentang..." target="_blank" class="wa-contact-btn">
                            <i class="fab fa-whatsapp"></i> Chat Sekarang
                        </a>
                    </div>
                    <div class="wa-contact-card reveal">
                        <div class="wa-contact-header">
                            <div class="wa-contact-avatar"><i class="fas fa-user-graduate"></i></div>
                            <div class="wa-contact-info">
                                <h3>Pengelola Museum</h3>
                                <div class="wa-contact-role">Koleksi & Edukasi</div>
                                <div class="wa-contact-number">+62 813-3860-7300</div>
                            </div>
                        </div>
                        <ul class="wa-contact-features">
                            <li><i class="fas fa-check-circle"></i> Detail Koleksi Fosil</li>
                            <li><i class="fas fa-check-circle"></i> Program Edukasi</li>
                            <li><i class="fas fa-check-circle"></i> Riset & Penelitian</li>
                            <li><i class="fas fa-check-circle"></i> Konsultasi Akademik</li>
                        </ul>
                        <a href="https://wa.me/6281338607300?text=Halo%20Pengelola%20Museum%20Bahari%20Ngera%20Shells%2C%20saya%20ingin%20bertanya%20tentang%20koleksi..." target="_blank" class="wa-contact-btn">
                            <i class="fab fa-whatsapp"></i> Chat Sekarang
                        </a>
                    </div>
                </div>
                <div class="wa-topic-section reveal">
                    <h3><i class="fas fa-lightbulb" style="color: var(--coral);"></i> Pilih Topik Pertanyaan</h3>
                    <p style="text-align: center; color: var(--text-light); margin-bottom: 2rem;">Klik topik di bawah untuk langsung chat dengan pesan yang sudah terisi</p>
                    <div class="wa-topics-grid">
                        <a href="https://wa.me/6281353810065?text=Halo%2C%20saya%20ingin%20mengetahui%20informasi%20tentang%20Museum%20Bahari%20Ngera%20Shells." target="_blank" class="wa-topic-btn"><i class="fas fa-info-circle"></i>Info Museum</a>
                        <a href="https://wa.me/6281353810065?text=Halo%2C%20saya%20tertarik%20untuk%20berdonasi%20guna%20pembangunan%20kembali%20Museum%20Bahari%20fisik." target="_blank" class="wa-topic-btn"><i class="fas fa-hand-holding-heart"></i>Donasi</a>
                        <a href="https://wa.me/6281338607300?text=Halo%2C%20saya%20ingin%20mengetahui%20lebih%20detail%20tentang%20koleksi%20fosil%20di%20Museum%20Bahari." target="_blank" class="wa-topic-btn"><i class="fas fa-bone"></i>Koleksi Fosil</a>
                        <a href="https://wa.me/6281338607300?text=Halo%2C%20saya%20dari%20sekolah%2Finstansi%2C%20ingin%20mengadakan%20kunjungan%20edukasi%20ke%20Museum%20Bahari." target="_blank" class="wa-topic-btn"><i class="fas fa-school"></i>Kunjungan Sekolah</a>
                        <a href="https://wa.me/6281353810065?text=Halo%2C%20saya%20ingin%20berkerjasama%20dengan%20Museum%20Bahari%20Ngera%20Shells." target="_blank" class="wa-topic-btn"><i class="fas fa-handshake"></i>Kerjasama</a>
                        <a href="https://wa.me/6281338607300?text=Halo%2C%20saya%20peneliti%2Fmahasiswa%2C%20ingin%20bertanya%20tentang%20riset%20paleontologi%20di%20Museum%20Bahari." target="_blank" class="wa-topic-btn"><i class="fas fa-microscope"></i>Riset</a>
                    </div>
                </div>
                <div class="quote-section reveal" style="margin-top: 2rem; border-radius: 20px;">
                    <div class="quote-content">
                        <p class="quote-text">"Kami siap melayani Anda dengan sepenuh hati. Setiap pertanyaan dan dukungan Anda sangat berarti bagi pelestarian warisan bahari Nusantara."</p>
                        <p class="quote-author">— Tim Museum Bahari Ngera Shells</p>
                    </div>
                </div>
            </div>
        </section>
    `;
    initRevealAnimations();
}

// =====================================================
// MODAL FUNCTIONS
// =====================================================
function showDetail(submenu, id) {
    const item = koleksiData[submenu].find(i => i.id === id);
    if (!item) return;
    
    modalBody.innerHTML = `
        <div class="modal-hero">
            <img src="${item.img}" alt="${item.nama}" 
                 style="width:100%; height:100%; object-fit:cover;"
                 onerror="this.style.display='none'; this.parentElement.insertAdjacentHTML('beforeend', '<span style=\\'font-size:7rem\\'>${item.icon}</span>')">
        </div>
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

// =====================================================
// LIGHTBOX FUNCTIONS
// =====================================================
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
    if (!data) return;
    lightboxImg.src = data.img;
    lightboxCaption.innerHTML = `<strong>${data.judul}</strong><br><small><i class="fas fa-calendar"></i> ${data.tanggal}</small>`;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

// =====================================================
// NAVIGATION ACTIVE STATE
// =====================================================
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
    else if (currentPage === "dokumen") selector = '.nav-menu a[data-page="dokumen"]';
    else if (currentPage === "whatsapp") selector = '.nav-menu a[data-page="whatsapp"]';
    else if (currentPage === "koleksi") selector = '.nav-menu .dropbtn';
    // ⚠️ renderChat ada di chat.js, tapi nav tetap bisa di-highlight
    else if (currentPage === "chat") selector = '.nav-menu a[data-page="chat"]';
    
    if (selector) {
        const el = document.querySelector(selector);
        if (el) el.classList.add('active');
    }
}

console.log('✅ Render functions loaded');