/* =====================================================
   VISITOR.JS - SISTEM PERKENALAN PENGUNJUNG
   Versi 3: Dengan debugging & perbaikan
   ===================================================== */

console.log('🚀 Visitor.js mulai di-load...');

// Visitor Manager Class
class VisitorManager {
    constructor() {
        this.storageKey = 'museumVisitor';
        this.visitor = this.getVisitor();
        console.log('✅ VisitorManager initialized', this.visitor ? '(ada data)' : '(belum ada data)');
    }
    
    getVisitor() {
        try {
            const data = localStorage.getItem(this.storageKey);
            return data ? JSON.parse(data) : null;
        } catch (e) {
            console.error('❌ Error getting visitor:', e);
            return null;
        }
    }
    
    saveVisitor(data) {
        try {
            localStorage.setItem(this.storageKey, JSON.stringify(data));
            this.visitor = data;
            console.log('✅ Visitor saved:', data);
        } catch (e) {
            console.error('❌ Error saving visitor:', e);
        }
    }
    
    hasVisitor() {
        return this.visitor !== null;
    }
    
    getName() {
        return this.visitor ? this.visitor.name : null;
    }
    
    getCategory() {
        return this.visitor ? this.visitor.category : null;
    }
    
    getCategoryLabel() {
        const category = this.getCategory();
        const labels = {
            'umum': 'Pengunjung Umum',
            'pelajar': 'Pelajar/Mahasiswa',
            'peneliti': 'Peneliti',
            'donatur': 'Donatur'
        };
        return labels[category] || 'Pengunjung';
    }
    
    getInitial() {
        const name = this.getName();
        return name ? name.charAt(0).toUpperCase() : '?';
    }
    
    incrementVisitCount() {
        if (this.visitor) {
            this.visitor.visitCount = (this.visitor.visitCount || 0) + 1;
            this.visitor.lastVisit = new Date().toISOString();
            this.saveVisitor(this.visitor);
        }
    }
    
    reset() {
        localStorage.removeItem(this.storageKey);
        this.visitor = null;
        console.log('✅ Visitor reset');
    }
}

// Initialize visitor manager
const visitorManager = new VisitorManager();
window.visitorManager = visitorManager;

// ==========================================
// WELCOME MODAL FUNCTIONS
// ==========================================

function showWelcomeModal() {
    console.log('🎯 showWelcomeModal dipanggil');
    
    // Check if modal already exists
    let modal = document.getElementById('welcomeModal');
    if (!modal) {
        console.log('🔨 Modal belum ada, membuat modal baru...');
        modal = createWelcomeModal();
    }
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    console.log('✅ Modal ditampilkan');
    
    // Focus input after animation
    setTimeout(() => {
        const input = modal.querySelector('input');
        if (input) input.focus();
    }, 500);
}

function createWelcomeModal() {
    console.log('🔨 Creating welcome modal...');
    
    const modal = document.createElement('div');
    modal.id = 'welcomeModal';
    modal.className = 'welcome-modal';
    
    modal.innerHTML = `
        <div class="welcome-modal-container">
            <div class="welcome-modal-icon">
                <i class="fas fa-landmark"></i>
            </div>
            <h2>Selamat Datang!</h2>
            <p class="welcome-subtitle">Di Museum Bahari Ngera Shells</p>
            <p class="welcome-description">Boleh tahu nama Anda dan Anda datang sebagai apa?</p>
            
            <form class="welcome-form" id="welcomeForm">
                <div class="form-group">
                    <label for="visitorNameInput">
                        <i class="fas fa-user"></i> Nama Anda
                    </label>
                    <input 
                        type="text" 
                        id="visitorNameInput" 
                        placeholder="Masukkan nama lengkap" 
                        required 
                        maxlength="50" 
                        autocomplete="off"
                    >
                </div>
                
                <div class="form-group">
                    <label>
                        <i class="fas fa-id-badge"></i> Anda datang sebagai
                    </label>
                    <div class="category-options">
                        <label class="category-option">
                            <input type="radio" name="visitorCategory" value="umum" checked>
                            <div class="category-card">
                                <i class="fas fa-users"></i>
                                <span>Pengunjung Umum</span>
                            </div>
                        </label>
                        
                        <label class="category-option">
                            <input type="radio" name="visitorCategory" value="pelajar">
                            <div class="category-card">
                                <i class="fas fa-graduation-cap"></i>
                                <span>Pelajar/Mahasiswa</span>
                            </div>
                        </label>
                        
                        <label class="category-option">
                            <input type="radio" name="visitorCategory" value="peneliti">
                            <div class="category-card">
                                <i class="fas fa-microscope"></i>
                                <span>Peneliti</span>
                            </div>
                        </label>
                        
                        <label class="category-option">
                            <input type="radio" name="visitorCategory" value="donatur">
                            <div class="category-card">
                                <i class="fas fa-hand-holding-heart"></i>
                                <span>Donatur</span>
                            </div>
                        </label>
                    </div>
                </div>
                
                <button type="submit" class="welcome-submit-btn">
                    <i class="fas fa-arrow-right"></i> Mulai Jelajah
                </button>
            </form>
        </div>
    `;
    
    document.body.appendChild(modal);
    console.log('✅ Modal created dan ditambahkan ke body');
    
    // Add form submit handler
    const form = modal.querySelector('#welcomeForm');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        submitVisitorInfo();
    });
    
    return modal;
}

function hideWelcomeModal() {
    const modal = document.getElementById('welcomeModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        console.log('✅ Modal disembunyikan');
    }
}

function submitVisitorInfo() {
    console.log('📝 submitVisitorInfo dipanggil');
    
    const nameInput = document.getElementById('visitorNameInput');
    if (!nameInput) {
        console.error('❌ Name input not found');
        return;
    }
    
    const name = nameInput.value.trim();
    
    if (!name) {
        alert('Mohon masukkan nama Anda');
        return;
    }
    
    // Get selected category
    const categoryInput = document.querySelector('input[name="visitorCategory"]:checked');
    const category = categoryInput ? categoryInput.value : 'umum';
    
    // Save visitor data
    const visitorData = {
        name: name,
        category: category,
        firstVisit: new Date().toISOString(),
        lastVisit: new Date().toISOString(),
        visitCount: 1
    };
    
    visitorManager.saveVisitor(visitorData);
    
    // Hide modal
    hideWelcomeModal();
    
    // Show user info in navbar
    setTimeout(() => {
        updateLogoSubtitle();
        updateMobileBadge();
    }, 300);
    
    console.log(`✅ Selamat datang, ${name} (${visitorManager.getCategoryLabel()})!`);
}

// ==========================================
// NAVBAR SUBTITLE & BADGE FUNCTIONS
// ==========================================

function updateLogoSubtitle() {
    const name = visitorManager.getName();
    const category = visitorManager.getCategoryLabel();
    
    if (!name) {
        console.warn('⚠️ Tidak ada nama untuk ditampilkan');
        return;
    }

    const subtitle = document.getElementById('navUserSubtitle');
    const nameEl = document.getElementById('navUserName');
    const roleEl = document.getElementById('navUserRole');
    
    if (subtitle && nameEl && roleEl) {
        nameEl.textContent = `Hi, ${name}`;
        roleEl.textContent = `(${category})`;
        subtitle.style.display = 'flex';
        console.log('✅ Subtitle ditampilkan:', name, category);
    } else {
        console.error('❌ Elemen subtitle tidak ditemukan di HTML');
    }
}

function updateMobileBadge() {
    const name = visitorManager.getName();
    
    if (!name) return;

    const badge = document.getElementById('userBadgeMobile');
    const badgeName = document.getElementById('userBadgeMobileName');
    
    if (badge && badgeName) {
        badgeName.textContent = name;
        badge.style.display = 'flex';
        console.log('✅ Mobile badge ditampilkan:', name);
    }
}

function resetVisitorName() {
    if (confirm('Ingin mengubah nama/kategori Anda?')) {
        visitorManager.reset();
        location.reload();
    }
}

// ==========================================
// INITIALIZATION
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 DOMContentLoaded - Visitor system initializing...');
    console.log('📊 Visitor data:', visitorManager.visitor);
    
    // Check if visitor exists
    if (!visitorManager.hasVisitor()) {
        console.log('🆕 New visitor detected - showing welcome modal');
        // Show welcome modal after 1 second
        setTimeout(showWelcomeModal, 1000);
    } else {
        console.log('✅ Returning visitor - showing user info');
        // Update visit count
        visitorManager.incrementVisitCount();
        
        // Show user info after 500ms
        setTimeout(() => {
            updateLogoSubtitle();
            updateMobileBadge();
        }, 500);
    }
});

// Expose functions to window
window.showWelcomeModal = showWelcomeModal;
window.hideWelcomeModal = hideWelcomeModal;
window.resetVisitorName = resetVisitorName;

console.log('✅ Visitor.js loaded successfully (Version 3)');