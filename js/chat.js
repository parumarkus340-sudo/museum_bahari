/* =====================================================
   CHAT.js - SISTEM CHAT REAL-TIME
   Museum Bahari Ngera Shells
   
   FUNGSI UTAMA:
   - Real-time chat dengan Firebase Realtime Database
   - Fallback ke localStorage jika Firebase gagal
   - Halaman chat full-page
   - Widget chat floating
   - Filter kata kasar otomatis
   - Notifikasi pesan baru (badge)
   
   DEPENDENCIES:
   - firebase-config.js → chatRef (Firebase reference)
   - app.js → DOM refs (chatFab, chatWindow, dll)
   
   DIGUNAKAN OLEH:
   - render.js → renderChat()
   - app.js → toggleChat(), sendMessage(), initChatWidget()
   
   FIREBASE STRUCTURE:
   chat_messages/
     -{autoId}/
       nama: "John Doe"
       pesan: "Hello world"
       timestamp: 1234567890
   ===================================================== */

// =====================================================
// 1. CHAT STATE VARIABLES
// =====================================================
// Shared with app.js - declared as global variables

let chatListener = null;          // Firebase listener untuk widget
let chatPageListener = null;      // Firebase listener untuk halaman
let chatUserName = localStorage.getItem('chatUserName') || '';
let unreadMessages = 0;           // Counter pesan belum dibaca
let isChatOpen = false;           // Status widget chat

// Kata-kata yang akan di-filter (sensor otomatis)
const KATA_KASAR = [
    'anjing', 'bajingan', 'kontol', 'memek', 'bangsat', 
    'goblok', 'tolol', 'asu', 'babi', 'keparat'
];

console.log('✅ Chat state initialized');

// =====================================================
// 2. UTILITY FUNCTIONS
// =====================================================

/**
 * Escape HTML untuk mencegah XSS attack
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
 * Filter kata kasar dari pesan
 * Mengganti kata kasar dengan ***
 * @param {string} pesan - Pesan yang akan di-filter
 * @returns {string} Pesan yang sudah di-filter
 */
function filterKataKasar(pesan) {
    let filteredPesan = pesan;
    const pesanLower = pesan.toLowerCase();
    
    KATA_KASAR.forEach(kata => {
        if (pesanLower.includes(kata)) {
            // Replace semua kemunculan (case-insensitive)
            const regex = new RegExp(kata, 'gi');
            filteredPesan = filteredPesan.replace(regex, '***');
        }
    });
    
    return filteredPesan;
}

/**
 * Format timestamp ke format waktu Indonesia (HH:MM)
 * @param {number} timestamp - Unix timestamp dalam ms
 * @returns {string} Waktu dalam format HH:MM
 */
function formatWaktu(timestamp) {
    if (!timestamp) return '';
    const date = new Date(timestamp);
    return date.toLocaleTimeString('id-ID', { 
        hour: '2-digit', 
        minute: '2-digit' 
    });
}

/**
 * Format timestamp ke format tanggal Indonesia
 * @param {number} timestamp - Unix timestamp dalam ms
 * @returns {string} Tanggal dalam format Indonesia
 */
function formatTanggalPesan(timestamp) {
    if (!timestamp) return '';
    const date = new Date(timestamp);
    const hari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    const bulan = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
    
    return `${hari[date.getDay()]}, ${date.getDate()} ${bulan[date.getMonth()]} ${date.getFullYear()}`;
}

console.log('✅ Chat utility functions loaded');

// =====================================================
// 3. SEND MESSAGE TO FIREBASE
// =====================================================

/**
 * Kirim pesan ke Firebase Realtime Database
 * Dengan fallback ke localStorage jika gagal
 * @param {string} nama - Nama pengirim
 * @param {string} pesan - Isi pesan
 */
function sendMessage(nama, pesan) {
    // Validasi input
    if (!nama || !nama.trim()) {
        console.warn('⚠️ Nama tidak boleh kosong');
        return;
    }
    
    if (!pesan || !pesan.trim()) {
        console.warn('⚠️ Pesan tidak boleh kosong');
        return;
    }
    
    // Trim dan filter pesan
    const namaClean = nama.trim().substring(0, 30);
    const pesanClean = pesan.trim().substring(0, 500);
    const pesanFiltered = filterKataKasar(pesanClean);
    
    // Prepare message object
    const newMessage = {
        nama: namaClean,
        pesan: pesanFiltered,
        timestamp: firebase.database.ServerValue.TIMESTAMP
    };
    
    // Show loading state pada tombol send
    const chatSend = document.getElementById('chatSend');
    if (chatSend) {
        chatSend.disabled = true;
        chatSend.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
    }
    
    // Push ke Firebase
    chatRef.push(newMessage)
        .then(() => {
            console.log('✅ Pesan terkirim ke Firebase');
            
            // Clear input
            const chatInput = document.getElementById('chatInput');
            if (chatInput) chatInput.value = '';
            
            // Restore button
            if (chatSend) {
                chatSend.disabled = false;
                chatSend.innerHTML = '<i class="fas fa-paper-plane"></i>';
            }
            
            // Show success feedback (optional)
            showNotification('✅ Pesan terkirim', 'success');
        })
        .catch((error) => {
            console.error('❌ Error Firebase:', error);
            
            // Restore button
            if (chatSend) {
                chatSend.disabled = false;
                chatSend.innerHTML = '<i class="fas fa-paper-plane"></i>';
            }
            
            // Fallback ke localStorage
            saveMessageLocally({
                nama: namaClean,
                pesan: pesanFiltered,
                timestamp: Date.now()
            });
            
            // Show error notification
            let errorMsg = 'Gagal mengirim ke server. ';
            if (error.code === 'PERMISSION_DENIED') {
                errorMsg += 'Akses ditolak. Pesan disimpan lokal.';
            } else if (error.code === 'NETWORK_ERROR') {
                errorMsg += 'Tidak ada koneksi internet. Pesan disimpan lokal.';
            } else {
                errorMsg += 'Pesan disimpan di browser ini.';
            }
            
            showNotification(errorMsg, 'error');
        });
}

/**
 * Tampilkan notifikasi popup
 * @param {string} message - Pesan notifikasi
 * @param {string} type - 'success' atau 'error'
 */
function showNotification(message, type = 'success') {
    // Hapus notifikasi lama jika ada
    const existing = document.querySelector('.chat-notification');
    if (existing) existing.remove();
    
    // Buat notifikasi baru
    const notif = document.createElement('div');
    notif.className = 'chat-notification';
    notif.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' 
            ? 'linear-gradient(135deg, #4ade80, #22c55e)' 
            : 'linear-gradient(135deg, #ef4444, #dc2626)'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        z-index: 9999;
        font-weight: 600;
        font-size: 0.9rem;
        animation: slideInRight 0.3s ease;
        max-width: 300px;
    `;
    notif.innerHTML = message;
    document.body.appendChild(notif);
    
    // Auto-remove setelah 3 detik
    setTimeout(() => {
        notif.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notif.remove(), 300);
    }, 3000);
}

console.log('✅ Send message function loaded');

// =====================================================
// 4. LOCAL STORAGE FALLBACK
// =====================================================

/**
 * Simpan pesan ke localStorage (fallback)
 * @param {Object} message - Object pesan {nama, pesan, timestamp}
 */
function saveMessageLocally(message) {
    try {
        const localMessages = JSON.parse(localStorage.getItem('chat_local') || '[]');
        
        // Tambah ID unik untuk pesan lokal
        message.id = 'local_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
        localMessages.push(message);
        
        // Batasi max 100 pesan di localStorage
        if (localMessages.length > 100) {
            localMessages.splice(0, localMessages.length - 100);
        }
        
        localStorage.setItem('chat_local', JSON.stringify(localMessages));
        console.log('💾 Pesan disimpan ke localStorage');
        
        // Update tampilan
        displayLocalMessages();
    } catch (error) {
        console.error('❌ Error save to localStorage:', error);
    }
}

/**
 * Tampilkan pesan dari localStorage
 */
function displayLocalMessages() {
    const chatMessagesEl = document.getElementById('chatMessages');
    if (!chatMessagesEl) return;
    
    try {
        const localMessages = JSON.parse(localStorage.getItem('chat_local') || '[]');
        
        if (localMessages.length === 0) return;
        
        const messagesHTML = localMessages.map(msg => createMessageHTML(msg)).join('');
        chatMessagesEl.innerHTML = messagesHTML;
        chatMessagesEl.scrollTop = chatMessagesEl.scrollHeight;
    } catch (error) {
        console.error('❌ Error display local messages:', error);
    }
}

/**
 * Hapus semua pesan lokal
 * (Bisa dipanggil dari console: clearLocalChat())
 */
function clearLocalChat() {
    if (confirm('Yakin ingin menghapus semua pesan lokal?')) {
        localStorage.removeItem('chat_local');
        displayLocalMessages();
        console.log('🗑️ Local chat cleared');
    }
}

// Expose ke global
window.clearLocalChat = clearLocalChat;

console.log('✅ LocalStorage fallback loaded');

// =====================================================
// 5. CREATE MESSAGE HTML
// =====================================================

/**
 * Buat HTML untuk satu pesan
 * @param {Object} msg - Object pesan {nama, pesan, timestamp}
 * @returns {string} HTML string
 */
function createMessageHTML(msg) {
    if (!msg || !msg.nama || !msg.pesan) return '';
    
    const isMine = msg.nama === chatUserName;
    const waktu = formatWaktu(msg.timestamp);
    const initial = msg.nama.charAt(0).toUpperCase();
    const escapedPesan = escapeHTML(msg.pesan);
    const escapedNama = escapeHTML(msg.nama);
    
    return `
        <div class="chat-message ${isMine ? 'mine' : ''}">
            <div class="chat-avatar">${initial}</div>
            <div class="chat-bubble">
                <span class="chat-bubble-name">${escapedNama}</span>
                <div class="chat-bubble-text">${escapedPesan}</div>
                <span class="chat-bubble-time">${waktu}</span>
            </div>
        </div>
    `;
}

/**
 * Buat HTML untuk group pesan berdasarkan tanggal
 * @param {Array} messages - Array pesan
 * @returns {string} HTML string
 */
function createMessagesWithDates(messages) {
    if (!messages || messages.length === 0) {
        return `
            <div class="chat-empty">
                <i class="fas fa-comments"></i>
                <p>Belum ada pesan.<br>Jadilah yang pertama memulai percakapan!</p>
            </div>
        `;
    }
    
    let html = '';
    let lastDate = '';
    
    messages.forEach(msg => {
        const currentDate = formatTanggalPesan(msg.timestamp);
        
        // Tambah date separator jika tanggal berubah
        if (currentDate && currentDate !== lastDate) {
            html += `
                <div class="chat-date-separator">
                    <span>${currentDate}</span>
                </div>
            `;
            lastDate = currentDate;
        }
        
        html += createMessageHTML(msg);
    });
    
    return html;
}

console.log('✅ Message HTML functions loaded');

// =====================================================
// 6. CHAT WIDGET FUNCTIONS
// =====================================================

/**
 * Initialize chat widget
 * Dipanggil saat window load dari app.js
 */
function initChatWidget() {
    const chatMessagesEl = document.getElementById('chatMessages');
    const chatBadge = document.getElementById('chatBadge');
    
    if (!chatMessagesEl) {
        console.warn('⚠️ chatMessages element not found');
        return;
    }
    
    // Tampilkan pesan lokal dulu (instant)
    displayLocalMessages();
    
    // Setup Firebase listener
    try {
        // Limit 20 pesan terakhir untuk widget
        chatListener = chatRef.orderByChild('timestamp').limitToLast(20);
        
        chatListener.on('value', (snapshot) => {
            const data = snapshot.val();
            
            if (!data) {
                // Jika Firebase kosong, tampilkan pesan lokal
                displayLocalMessages();
                
                if (!localStorage.getItem('chat_local')) {
                    chatMessagesEl.innerHTML = `
                        <div class="chat-empty">
                            <i class="fas fa-comments"></i>
                            <p>Belum ada pesan.<br>Jadilah yang pertama memulai percakapan!</p>
                        </div>
                    `;
                }
                return;
            }
            
            // Convert ke array dan sort by timestamp
            const messages = Object.values(data).sort((a, b) => a.timestamp - b.timestamp);
            
            // Render messages
            chatMessagesEl.innerHTML = messages.map(msg => createMessageHTML(msg)).join('');
            chatMessagesEl.scrollTop = chatMessagesEl.scrollHeight;
            
            // Update badge jika widget tertutup
            if (!isChatOpen && chatBadge) {
                const lastMsg = messages[messages.length - 1];
                if (lastMsg && lastMsg.nama !== chatUserName) {
                    unreadMessages++;
                    chatBadge.textContent = unreadMessages > 99 ? '99+' : unreadMessages;
                    chatBadge.classList.remove('hidden');
                    
                    // Play notification sound (optional)
                    playNotificationSound();
                }
            }
            
            console.log('✅ Chat messages updated:', messages.length, 'messages');
        }, (error) => {
            console.error('❌ Firebase listener error:', error);
            displayLocalMessages();
        });
        
    } catch (error) {
        console.error('❌ Firebase init error:', error);
        displayLocalMessages();
    }
}

/**
 * Toggle chat widget (buka/tutup)
 */
function toggleChat() {
    const chatWindow = document.getElementById('chatWindow');
    const chatFab = document.getElementById('chatFab');
    const chatBadge = document.getElementById('chatBadge');
    const chatInput = document.getElementById('chatInput');
    const chatMessagesEl = document.getElementById('chatMessages');
    
    if (!chatWindow) return;
    
    isChatOpen = !isChatOpen;
    
    // Toggle classes
    chatWindow.classList.toggle('active', isChatOpen);
    if (chatFab) chatFab.classList.toggle('active', isChatOpen);
    
    if (isChatOpen) {
        // Reset badge
        unreadMessages = 0;
        if (chatBadge) chatBadge.classList.add('hidden');
        
        // Focus input
        if (chatInput) {
            setTimeout(() => chatInput.focus(), 300);
        }
        
        // Scroll ke bawah
        if (chatMessagesEl) {
            setTimeout(() => {
                chatMessagesEl.scrollTop = chatMessagesEl.scrollHeight;
            }, 300);
        }
        
        console.log('💬 Chat widget opened');
    } else {
        console.log('💬 Chat widget closed');
    }
}

/**
 * Play notification sound (optional)
 */
function playNotificationSound() {
    // Bisa ditambahkan audio notifikasi di sini
    // const audio = new Audio('assets/audio/notification.mp3');
    // audio.play().catch(err => console.log('Audio play blocked'));
}

console.log('✅ Chat widget functions loaded');

// =====================================================
// 7. CHAT PAGE FUNCTIONS (Full-Page Chat)
// =====================================================

/**
 * Render halaman chat full-page
 * Dipanggil dari render.js
 */
function renderChat() {
    mainContainer.innerHTML = `
        <section class="section" style="padding-top: 8rem;">
            <div class="section-header reveal">
                <span class="section-label">Diskusi Publik</span>
                <h2 class="section-title">Chat <span class="accent">Ngera Shells</span></h2>
                <p class="section-desc">Ruang diskusi terbuka untuk pengunjung Museum Bahari Ngera Shells. Saling sapa, berbagi informasi, dan berdiskusi tentang fosil, museum, dan kehidupan laut Nusantara.</p>
            </div>
            
            <div class="chat-page-container reveal">
                <div class="chat-page-header">
                    <h2><i class="fas fa-comments"></i> Chat Publik Ngera Shells</h2>
                    <p>Diskusi santai seputar fosil, museum, dan kehidupan laut Nusantara</p>
                    <div class="chat-page-info">
                        <span><i class="fas fa-circle" style="color:#4ade80; font-size:0.6rem;"></i> Real-time</span>
                        <span><i class="fas fa-users"></i> Publik</span>
                        <span><i class="fas fa-shield-alt"></i> Moderated</span>
                    </div>
                </div>
                
                <div class="chat-page-messages" id="chatPageMessages">
                    <div class="chat-empty">
                        <i class="fas fa-spinner fa-spin"></i>
                        <p>Memuat pesan...</p>
                    </div>
                </div>
                
                <div class="chat-page-input-area">
                    <form class="chat-page-form" id="chatPageForm">
                        <input type="text" 
                               id="chatPageName" 
                               placeholder="Nama Anda" 
                               maxlength="30" 
                               value="${escapeHTML(chatUserName)}" 
                               required>
                        <textarea id="chatPageInput" 
                                  placeholder="Tulis pesan Anda di sini... (maks 500 karakter)" 
                                  rows="1" 
                                  maxlength="500" 
                                  required></textarea>
                        <button type="submit" title="Kirim pesan">
                            <i class="fas fa-paper-plane"></i>
                        </button>
                    </form>
                    <div class="chat-page-tips">
                        <small>
                            <i class="fas fa-info-circle"></i>
                            Tips: Tekan <strong>Enter</strong> untuk kirim, <strong>Shift+Enter</strong> untuk baris baru. Pesan dengan kata kasar akan otomatis disensor.
                        </small>
                    </div>
                </div>
            </div>
            
            <!-- Chat Guidelines -->
            <div class="section" style="padding: 2rem;">
                <div class="goals-grid">
                    <div class="goal-card reveal">
                        <div class="goal-icon" style="background: linear-gradient(135deg, #4ade80, #22c55e);">
                            <i class="fas fa-check"></i>
                        </div>
                        <h3>Boleh</h3>
                        <p>Berdiskusi tentang fosil, museum, edukasi, penelitian, dan pelestarian budaya bahari Nusantara.</p>
                    </div>
                    <div class="goal-card reveal">
                        <div class="goal-icon" style="background: linear-gradient(135deg, #ef4444, #dc2626);">
                            <i class="fas fa-times"></i>
                        </div>
                        <h3>Tidak Boleh</h3>
                        <p>SARA, kata kasar, spam, promosi, dan konten yang melanggar norma kesopanan.</p>
                    </div>
                    <div class="goal-card reveal">
                        <div class="goal-icon" style="background: linear-gradient(135deg, #3b82f6, #1d4ed8);">
                            <i class="fas fa-lightbulb"></i>
                        </div>
                        <h3>Saran</h3>
                        <p>Gunakan nama asli atau nama panggilan. Hormati pendapat orang lain. Belajar bersama!</p>
                    </div>
                </div>
            </div>
        </section>
    `;
    
    // Setup form handler
    setupChatPageForm();
    
    // Load messages
    loadChatMessages();
    
    // Init reveal animations
    if (typeof initRevealAnimations === 'function') {
        initRevealAnimations();
    }
}

/**
 * Setup form handler untuk halaman chat
 */
function setupChatPageForm() {
    const chatPageForm = document.getElementById('chatPageForm');
    const chatPageInput = document.getElementById('chatPageInput');
    const chatPageName = document.getElementById('chatPageName');
    
    if (!chatPageForm) return;
    
    chatPageForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const nama = chatPageName ? chatPageName.value.trim() : '';
        const pesan = chatPageInput ? chatPageInput.value.trim() : '';
        
        if (!nama || !pesan) {
            showNotification('⚠️ Nama dan pesan harus diisi', 'error');
            return;
        }
        
        // Kirim pesan
        sendMessage(nama, pesan);
        
        // Clear input
        if (chatPageInput) chatPageInput.value = '';
        
        // Save username
        chatUserName = nama;
        localStorage.setItem('chatUserName', nama);
    });
    
    // Auto-resize textarea
    if (chatPageInput) {
        chatPageInput.addEventListener('input', function() {
            this.style.height = 'auto';
            this.style.height = Math.min(this.scrollHeight, 150) + 'px';
        });
        
        // Enter to send, Shift+Enter for new line
        chatPageInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                chatPageForm.dispatchEvent(new Event('submit'));
            }
        });
    }
    
    // Save name on input
    if (chatPageName) {
        chatPageName.addEventListener('input', () => {
            chatUserName = chatPageName.value.trim();
            localStorage.setItem('chatUserName', chatUserName);
        });
    }
}

/**
 * Load messages untuk halaman chat
 * Menggunakan Firebase listener dengan limit 50 pesan
 */
function loadChatMessages() {
    const chatPageMessages = document.getElementById('chatPageMessages');
    if (!chatPageMessages) return;
    
    // Cleanup listener lama jika ada
    if (chatPageListener) {
        chatPageListener.off();
    }
    
    // Setup listener baru - limit 50 pesan terakhir
    chatPageListener = chatRef.orderByChild('timestamp').limitToLast(50);
    
    chatPageListener.on('value', (snapshot) => {
        const data = snapshot.val();
        
        if (!data) {
            chatPageMessages.innerHTML = `
                <div class="chat-empty">
                    <i class="fas fa-comments"></i>
                    <p>Belum ada pesan.<br>Jadilah yang pertama memulai percakapan!</p>
                </div>
            `;
            return;
        }
        
        // Convert ke array dan sort by timestamp
        const messages = Object.values(data).sort((a, b) => a.timestamp - b.timestamp);
        
        // Render dengan date separators
        chatPageMessages.innerHTML = createMessagesWithDates(messages);
        
        // Scroll ke bawah
        chatPageMessages.scrollTop = chatPageMessages.scrollHeight;
        
        console.log('✅ Chat page messages loaded:', messages.length, 'messages');
    }, (error) => {
        console.error('❌ Chat page listener error:', error);
        chatPageMessages.innerHTML = `
            <div class="chat-empty">
                <i class="fas fa-exclamation-triangle"></i>
                <p>Gagal memuat pesan.<br>Silakan refresh halaman.</p>
            </div>
        `;
    });
}

console.log('✅ Chat page functions loaded');

// =====================================================
// 8. ADDITIONAL CSS INJECTION
// =====================================================

/**
 * Inject CSS untuk chat date separator dan notification
 * (Karena tidak ada di style.css utama)
 */
function injectChatStyles() {
    const style = document.createElement('style');
    style.textContent = `
        /* Chat Date Separator */
        .chat-date-separator {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 1rem 0;
            position: relative;
        }
        
        .chat-date-separator::before,
        .chat-date-separator::after {
            content: '';
            flex: 1;
            height: 1px;
            background: rgba(0, 105, 148, 0.2);
        }
        
        .chat-date-separator span {
            padding: 0.3rem 1rem;
            background: rgba(255, 255, 255, 0.8);
            border-radius: 15px;
            font-size: 0.75rem;
            color: var(--text-light);
            font-weight: 600;
            margin: 0 0.5rem;
        }
        
        /* Chat Page Info */
        .chat-page-info {
            display: flex;
            gap: 1rem;
            justify-content: center;
            margin-top: 1rem;
            flex-wrap: wrap;
        }
        
        .chat-page-info span {
            display: inline-flex;
            align-items: center;
            gap: 0.4rem;
            font-size: 0.8rem;
            color: rgba(255, 255, 255, 0.8);
            background: rgba(255, 255, 255, 0.1);
            padding: 0.3rem 0.8rem;
            border-radius: 15px;
        }
        
        /* Chat Page Tips */
        .chat-page-tips {
            margin-top: 0.8rem;
            padding: 0.6rem 1rem;
            background: rgba(0, 105, 148, 0.05);
            border-radius: 8px;
            border-left: 3px solid var(--ocean-primary);
        }
        
        .chat-page-tips small {
            color: var(--text-light);
            font-size: 0.8rem;
        }
        
        .chat-page-tips i {
            color: var(--ocean-primary);
            margin-right: 0.3rem;
        }
        
        /* Notification Animations */
        @keyframes slideInRight {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideOutRight {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
    console.log('✅ Chat styles injected');
}

// Inject styles saat file di-load
injectChatStyles();

// =====================================================
// 9. LOGGING & EXPORT
// =====================================================

console.log('✅ Chat module fully loaded');
console.log('💬 Available functions:');
console.log('   - sendMessage(nama, pesan)');
console.log('   - toggleChat()');
console.log('   - initChatWidget()');
console.log('   - renderChat()');
console.log('   - loadChatMessages()');
console.log('   - clearLocalChat() [debug]');

// Expose to global scope
window.sendMessage = sendMessage;
window.toggleChat = toggleChat;
window.initChatWidget = initChatWidget;
window.renderChat = renderChat;
window.loadChatMessages = loadChatMessages;
window.escapeHTML = escapeHTML;
window.filterKataKasar = filterKataKasar;