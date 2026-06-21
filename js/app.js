/* =====================================================
   APP.js - MAIN ENTRY POINT
   Museum Bahari Ngera Shells
   
   FUNGSI:
   - DOM Element References (shared across all files)
   - Event Handlers (navigation, modal, lightbox, chat, audio)
   - Attachment Functions (home, collection, galeri)
   - Utility Functions (clipboard, audio, escapeHTML)
   - Animation Functions (reveal, stats counter)
   - Initialization (window load)
   
   DEPENDENCIES:
   - firebase-config.js → db, chatRef
   - data.js → koleksiData, profilData, galeriData, videoData, dokumenData, audioData
   - narasi.js → narasi
   - render.js → render, updateActiveNav, showDetail, closeModal, openLightbox, closeLightbox, attachLightboxEvents
   - chat.js → renderChat, sendMessage, initChatWidget, toggleChat
   
   CATATAN:
   - File ini HARUS di-load terakhir (setelah semua file JS lain)
   - Semua DOM refs di-expose sebagai global variables
   ===================================================== */

// =====================================================
// 1. DOM ELEMENT REFERENCES
// =====================================================
// Shared across all files - declared here, used everywhere

// Main containers
const mainContainer = document.getElementById("mainContainer");
const navbar = document.getElementById("navbar");
const navMenu = document.getElementById("navMenu");
const navToggle = document.getElementById("navToggle");

// Modal
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modalBody");
const modalClose = document.getElementById("modalClose");

// Lightbox
const lightbox = document.getElementById("lightbox");
const lightboxClose = document.getElementById("lightboxClose");
const lightboxPrev = document.getElementById("lightboxPrev");
const lightboxNext = document.getElementById("lightboxNext");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxCaption = document.getElementById("lightboxCaption");

// Back to top
const backToTop = document.getElementById("backToTop");

// Chat widget
const chatFab = document.getElementById("chatFab");
const chatWindow = document.getElementById("chatWindow");
const chatMessages = document.getElementById("chatMessages");
const chatInput = document.getElementById("chatInput");
const chatName = document.getElementById("chatName");
const chatSend = document.getElementById("chatSend");
const chatCloseBtn = document.getElementById("chatCloseBtn");
const chatBadge = document.getElementById("chatBadge");

// Audio player
const audioPlayer = document.getElementById("audioPlayer");
const museumAudio = document.getElementById("museumAudio");

// Preloader
const preloader = document.getElementById("preloader");

console.log('✅ DOM references initialized');

// =====================================================
// 2. ATTACHMENT FUNCTIONS
// =====================================================
// Called by render.js after rendering each page

/**
 * Attach event handlers untuk halaman Home
 * Dipanggil oleh renderHome() di render.js
 */
function attachHomeEvents() {
    // Handle semua link dengan data-page
    document.querySelectorAll('[data-page]').forEach(el => {
        el.onclick = (e) => {
            e.preventDefault();
            currentPage = el.dataset.page;
            currentSubmenu = null;
            render();
        };
    });
    
    // Handle semua link dengan data-submenu
    document.querySelectorAll('[data-submenu]').forEach(el => {
        el.onclick = (e) => {
            e.preventDefault();
            currentPage = "koleksi";
            currentSubmenu = el.dataset.submenu;
            render();
        };
    });
}

/**
 * Attach event handlers untuk halaman Koleksi
 * Dipanggil oleh renderKoleksiSubmenu() di render.js
 * @param {string} submenu - Kategori koleksi (bifalfia, gastropoda, dll)
 */
function attachCollectionEvents(submenu) {
    // Handle category tabs
    document.querySelectorAll('.category-tab').forEach(tab => {
        tab.onclick = () => {
            currentSubmenu = tab.dataset.submenu;
            render();
        };
    });
    
    // Handle collection cards - buka modal detail
    document.querySelectorAll('.collection-card').forEach(card => {
        card.onclick = () => {
            const id = parseInt(card.dataset.id);
            showDetail(submenu, id);
        };
    });
}

/**
 * Attach event handlers untuk halaman Galeri
 * Dipanggil oleh renderGaleri() di render.js
 */
function attachGaleriEvents() {
    // Handle galeri tabs (filter kategori)
    document.querySelectorAll('.galeri-tab').forEach(tab => {
        tab.onclick = () => {
            document.querySelectorAll('.galeri-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentGaleriKategori = tab.dataset.kategori;
            const grid = document.getElementById('galeriGrid');
            if (grid) {
                grid.innerHTML = renderGaleriItems(currentGaleriKategori);
                attachLightboxEvents();
            }
        };
    });
}

console.log('✅ Attachment functions loaded');

// =====================================================
// 3. NAVIGATION EVENT HANDLERS
// =====================================================

// Navbar links dengan data-page
document.querySelectorAll('nav a[data-page]').forEach(link => {
    link.onclick = (e) => {
        e.preventDefault();
        currentPage = link.dataset.page;
        currentSubmenu = null;
        render();
    };
});

// Dropdown submenu links
document.querySelectorAll('.dropdown-content a[data-submenu]').forEach(sub => {
    sub.onclick = (e) => {
        e.preventDefault();
        currentPage = "koleksi";
        currentSubmenu = sub.dataset.submenu;
        render();
    };
});

// Footer links dengan data-page
document.querySelectorAll('footer a[data-page]').forEach(link => {
    link.onclick = (e) => {
        e.preventDefault();
        currentPage = link.dataset.page;
        currentSubmenu = null;
        render();
    };
});

// Footer links dengan data-submenu
document.querySelectorAll('footer a[data-submenu]').forEach(link => {
    link.onclick = (e) => {
        e.preventDefault();
        currentPage = "koleksi";
        currentSubmenu = link.dataset.submenu;
        render();
    };
});

// Mobile menu toggle
if (navToggle) {
    navToggle.onclick = () => {
        navMenu.classList.toggle('active');
        const icon = navToggle.querySelector('i');
        if (icon) {
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        }
    };
}

// Mobile dropdown toggle
const dropbtn = document.querySelector('.dropbtn');
if (dropbtn) {
    dropbtn.onclick = (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            const dropdown = document.querySelector('.dropdown');
            if (dropdown) dropdown.classList.toggle('active');
        }
    };
}

console.log('✅ Navigation events loaded');

// =====================================================
// 4. MODAL & LIGHTBOX EVENT HANDLERS
// =====================================================

// Modal close button
if (modalClose) {
    modalClose.onclick = closeModal;
}

// Click outside modal to close
if (modal) {
    modal.onclick = (e) => {
        if (e.target === modal) closeModal();
    };
}

// Lightbox close button
if (lightboxClose) {
    lightboxClose.onclick = closeLightbox;
}

// Click outside lightbox to close
if (lightbox) {
    lightbox.onclick = (e) => {
        if (e.target === lightbox) closeLightbox();
    };
}

// Lightbox navigation
if (lightboxPrev) {
    lightboxPrev.onclick = () => {
        if (currentLightboxItems && currentLightboxItems.length > 0) {
            currentLightboxIndex = (currentLightboxIndex - 1 + currentLightboxItems.length) % currentLightboxItems.length;
            openLightbox();
        }
    };
}

if (lightboxNext) {
    lightboxNext.onclick = () => {
        if (currentLightboxItems && currentLightboxItems.length > 0) {
            currentLightboxIndex = (currentLightboxIndex + 1) % currentLightboxItems.length;
            openLightbox();
        }
    };
}

console.log('✅ Modal & Lightbox events loaded');

// =====================================================
// 5. CHAT WIDGET EVENT HANDLERS
// =====================================================

// Toggle chat window
if (chatFab) {
    chatFab.onclick = toggleChat;
}

if (chatCloseBtn) {
    chatCloseBtn.onclick = toggleChat;
}

// Send chat message
if (chatSend) {
    chatSend.onclick = () => {
        const nama = chatName.value.trim();
        const pesan = chatInput.value.trim();
        
        if (!nama) {
            chatName.focus();
            chatName.style.borderColor = 'var(--coral)';
            setTimeout(() => {
                chatName.style.borderColor = '';
            }, 2000);
            return;
        }
        
        if (!pesan) return;
        
        // sendMessage sudah ada di chat.js
        sendMessage(nama, pesan);
        chatInput.value = '';
        chatUserName = nama;
        localStorage.setItem('chatUserName', nama);
    };
}

// Enter to send message (Shift+Enter for new line)
if (chatInput) {
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            if (chatSend) chatSend.click();
        }
    });
}

// Save chat name on input
if (chatName) {
    chatName.addEventListener('input', () => {
        chatUserName = chatName.value.trim();
        localStorage.setItem('chatUserName', chatUserName);
    });
}

// Initialize chat name from localStorage
if (chatUserName && chatName) {
    chatName.value = chatUserName;
}

console.log('✅ Chat widget events loaded');

// =====================================================
// 6. AUDIO GUIDE FUNCTIONS
// =====================================================

/**
 * Toggle audio guide player
 * Dipanggil dari tombol di hero section dan tombol close di player
 */
function toggleAudioGuide() {
    if (!audioPlayer) {
        console.warn('Audio player element not found');
        return;
    }
    
    if (audioPlayer.style.display === 'none' || !audioPlayer.style.display) {
        audioPlayer.style.display = 'block';
        if (museumAudio) {
            museumAudio.play().catch(err => {
                console.log('Auto-play blocked by browser:', err.message);
            });
        }
    } else {
        audioPlayer.style.display = 'none';
        if (museumAudio) {
            museumAudio.pause();
        }
    }
}

// Expose to global scope (for onclick in HTML)
window.toggleAudioGuide = toggleAudioGuide;

console.log('✅ Audio guide functions loaded');

// =====================================================
// 7. KEYBOARD SHORTCUTS
// =====================================================

document.addEventListener('keydown', (e) => {
    // ESC - Close modal or lightbox
    if (e.key === 'Escape') {
        if (modal && modal.classList.contains('active')) {
            closeModal();
        }
        if (lightbox && lightbox.classList.contains('active')) {
            closeLightbox();
        }
        // Close chat window
        if (chatWindow && chatWindow.classList.contains('active')) {
            toggleChat();
        }
    }
    
    // Arrow keys for lightbox navigation
    if (lightbox && lightbox.classList.contains('active')) {
        if (e.key === 'ArrowLeft' && lightboxPrev) {
            lightboxPrev.click();
        }
        if (e.key === 'ArrowRight' && lightboxNext) {
            lightboxNext.click();
        }
    }
});

console.log('✅ Keyboard shortcuts loaded');

// =====================================================
// 8. SCROLL EFFECTS
// =====================================================

window.addEventListener('scroll', () => {
    // Navbar scroll effect
    if (navbar) {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    }
    
    // Back to top button visibility
    if (backToTop) {
        backToTop.classList.toggle('visible', window.scrollY > 500);
    }
});

// Back to top click
if (backToTop) {
    backToTop.onclick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
}

console.log('✅ Scroll effects loaded');

// =====================================================
// 9. UTILITY FUNCTIONS
// =====================================================

/**
 * Copy text to clipboard
 * Dipanggil dari tombol "Salin" di halaman Donasi
 * @param {string} text - Text yang akan di-copy
 * @param {HTMLElement} btn - Tombol yang diklik
 */
function copyToClipboard(text, btn) {
    if (!navigator.clipboard) {
        // Fallback untuk browser lama
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        try {
            document.execCommand('copy');
            showCopySuccess(btn);
        } catch (err) {
            console.error('Copy failed:', err);
            alert('Gagal menyalin. Silakan copy manual: ' + text);
        }
        document.body.removeChild(textarea);
        return;
    }
    
    navigator.clipboard.writeText(text).then(() => {
        showCopySuccess(btn);
    }).catch(err => {
        console.error('Copy failed:', err);
        alert('Gagal menyalin. Silakan copy manual: ' + text);
    });
}

/**
 * Helper untuk menampilkan feedback setelah copy
 * @param {HTMLElement} btn - Tombol yang diklik
 */
function showCopySuccess(btn) {
    if (!btn) return;
    const originalHTML = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-check"></i> Tersalin!';
    btn.style.background = 'var(--ocean-primary)';
    btn.style.color = 'white';
    setTimeout(() => {
        btn.innerHTML = originalHTML;
        btn.style.background = '';
        btn.style.color = '';
    }, 2000);
}

/**
 * Escape HTML untuk mencegah XSS
 * Dipanggil dari chat.js untuk escape pesan
 * @param {string} str - String yang akan di-escape
 * @returns {string} String yang sudah di-escape
 */
function escapeHTML(str) {
    if (!str) return '';
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

/**
 * Format tanggal ke format Indonesia
 * @param {Date|string} date - Date object atau date string
 * @returns {string} Tanggal dalam format Indonesia
 */
function formatTanggal(date) {
    const d = new Date(date);
    const bulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 
                   'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    return `${d.getDate()} ${bulan[d.getMonth()]} ${d.getFullYear()}`;
}

/**
 * Format angka dengan separator ribuan
 * @param {number} num - Angka yang akan diformat
 * @returns {string} Angka dengan separator
 */
function formatAngka(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

/**
 * Debounce function untuk optimasi performance
 * @param {Function} func - Function yang akan di-debounce
 * @param {number} wait - Waktu tunggu dalam ms
 * @returns {Function} Function yang sudah di-debounce
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Expose utility functions to global scope
window.copyToClipboard = copyToClipboard;
window.escapeHTML = escapeHTML;
window.formatTanggal = formatTanggal;
window.formatAngka = formatAngka;

console.log('✅ Utility functions loaded');

// =====================================================
// 10. ANIMATION FUNCTIONS
// =====================================================

/**
 * Initialize reveal animations on scroll
 * Menggunakan IntersectionObserver untuk performa optimal
 * Dipanggil setiap kali halaman di-render
 */
function initRevealAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { 
        threshold: 0.1, 
        rootMargin: '0px 0px -50px 0px' 
    });
    
    document.querySelectorAll('.reveal').forEach(el => {
        // Reset dulu agar animasi bisa jalan lagi
        if (!el.classList.contains('visible')) {
            observer.observe(el);
        }
    });
}

/**
 * Animate stats counter di halaman Home
 * Menggunakan IntersectionObserver untuk trigger saat terlihat
 */
function animateStats() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.dataset.target);
                if (isNaN(target)) return;
                
                let current = 0;
                const increment = target / 50;
                const duration = 1500; // 1.5 detik
                const stepTime = duration / 50;
                
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        el.textContent = target.toLocaleString('id-ID');
                        clearInterval(timer);
                    } else {
                        el.textContent = Math.floor(current).toLocaleString('id-ID');
                    }
                }, stepTime);
                
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.5 });
    
    document.querySelectorAll('.stat-number').forEach(el => {
        observer.observe(el);
    });
}

console.log('✅ Animation functions loaded');

// =====================================================
// 11. ERROR HANDLING
// =====================================================

/**
 * Global error handler untuk debug
 */
window.addEventListener('error', (e) => {
    console.error('🔴 Global error:', {
        message: e.message,
        source: e.filename,
        line: e.lineno,
        column: e.colno,
        error: e.error
    });
});

/**
 * Handle unhandled promise rejections
 */
window.addEventListener('unhandledrejection', (e) => {
    console.error('🔴 Unhandled promise rejection:', e.reason);
});

console.log('✅ Error handlers loaded');

// =====================================================
// 12. INITIALIZATION
// =====================================================

/**
 * Initialize aplikasi saat window selesai load
 */
window.addEventListener('load', () => {
    console.log('🚀 Window loaded, initializing app...');
    
    // Hide preloader setelah 800ms
    setTimeout(() => {
        if (preloader) {
            preloader.classList.add('hidden');
            console.log('✅ Preloader hidden');
        }
    }, 800);
    
    // Initialize chat widget (dari chat.js)
    if (typeof initChatWidget === 'function') {
        initChatWidget();
        console.log('✅ Chat widget initialized');
    } else {
        console.warn('⚠️ initChatWidget function not found');
    }
    
    // Initial render (dari render.js)
    if (typeof render === 'function') {
        render();
        console.log('✅ Initial render complete');
    } else {
        console.error('❌ render function not found!');
    }
    
    // Log success message
    console.log('%c🌊 Museum Bahari Ngera Shells - Ready!', 
                'color: #006994; font-size: 16px; font-weight: bold;');
    console.log('%c"Rumah Kita" - Melestarikan Warisan Bahari Nusantara', 
                'color: #7ed6df; font-size: 12px; font-style: italic;');
    console.log('%c© 2026 Museum Bahari Ngera Shells', 
                'color: #7f8c8d; font-size: 10px;');
});

/**
 * Handle page visibility change (untuk pause audio saat tab tidak aktif)
 */
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Tab tidak aktif - pause audio jika sedang play
        if (museumAudio && !museumAudio.paused) {
            museumAudio.pause();
            console.log('⏸️ Audio paused (tab hidden)');
        }
    }
});

/**
 * Handle window resize untuk responsive adjustments
 */
window.addEventListener('resize', debounce(() => {
    // Close mobile menu on resize to desktop
    if (window.innerWidth > 768 && navMenu) {
        navMenu.classList.remove('active');
    }
    
    // Close dropdown on resize
    const dropdown = document.querySelector('.dropdown');
    if (dropdown && window.innerWidth > 768) {
        dropdown.classList.remove('active');
    }
}, 250));

console.log('✅ Initialization setup complete');

// =====================================================
// 13. DEVELOPMENT HELPERS (Optional - bisa dihapus di production)
// =====================================================

/**
 * Debug function - tampilkan info state aplikasi
 * Panggil di console: debugApp()
 */
window.debugApp = function() {
    console.group('🔍 App State Debug');
    console.log('Current Page:', typeof currentPage !== 'undefined' ? currentPage : 'undefined');
    console.log('Current Submenu:', typeof currentSubmenu !== 'undefined' ? currentSubmenu : 'undefined');
    console.log('Chat User:', typeof chatUserName !== 'undefined' ? chatUserName : 'undefined');
    console.log('Is Chat Open:', typeof isChatOpen !== 'undefined' ? isChatOpen : 'undefined');
    console.log('Lightbox Index:', typeof currentLightboxIndex !== 'undefined' ? currentLightboxIndex : 'undefined');
    console.log('Galeri Kategori:', typeof currentGaleriKategori !== 'undefined' ? currentGaleriKategori : 'undefined');
    console.log('Data Loaded:');
    console.log('  - koleksiData:', typeof koleksiData !== 'undefined' ? Object.keys(koleksiData).length + ' categories' : 'NOT LOADED');
    console.log('  - profilData:', typeof profilData !== 'undefined' ? 'loaded' : 'NOT LOADED');
    console.log('  - galeriData:', typeof galeriData !== 'undefined' ? Object.keys(galeriData).length + ' categories' : 'NOT LOADED');
    console.log('  - videoData:', typeof videoData !== 'undefined' ? videoData.length + ' videos' : 'NOT LOADED');
    console.log('  - dokumenData:', typeof dokumenData !== 'undefined' ? dokumenData.length + ' documents' : 'NOT LOADED');
    console.log('  - audioData:', typeof audioData !== 'undefined' ? 'loaded' : 'NOT LOADED');
    console.log('  - narasi:', typeof narasi !== 'undefined' ? Object.keys(narasi).length + ' templates' : 'NOT LOADED');
    console.groupEnd();
};

/**
 * Help function - tampilkan daftar fungsi yang tersedia
 * Panggil di console: helpApp()
 */
window.helpApp = function() {
    console.group('📚 Available Functions');
    console.log('🎯 Navigation:');
    console.log('  - render() - Render halaman saat ini');
    console.log('  - updateActiveNav() - Update active state navbar');
    console.log('');
    console.log('🎨 UI:');
    console.log('  - showDetail(submenu, id) - Tampilkan detail koleksi');
    console.log('  - closeModal() - Tutup modal');
    console.log('  - openLightbox() - Buka lightbox');
    console.log('  - closeLightbox() - Tutup lightbox');
    console.log('');
    console.log('💬 Chat:');
    console.log('  - toggleChat() - Toggle chat window');
    console.log('  - sendMessage(nama, pesan) - Kirim pesan chat');
    console.log('');
    console.log('🎧 Audio:');
    console.log('  - toggleAudioGuide() - Toggle audio player');
    console.log('');
    console.log('🛠️ Utilities:');
    console.log('  - copyToClipboard(text, btn) - Copy text');
    console.log('  - escapeHTML(str) - Escape HTML');
    console.log('  - formatTanggal(date) - Format tanggal ID');
    console.log('  - formatAngka(num) - Format angka');
    console.log('');
    console.log('🔍 Debug:');
    console.log('  - debugApp() - Tampilkan state aplikasi');
    console.groupEnd();
};

console.log('✅ Development helpers loaded');
console.log('💡 Tip: Ketik debugApp() atau helpApp() di console untuk debug');

// =====================================================
// END OF FILE
// =====================================================
