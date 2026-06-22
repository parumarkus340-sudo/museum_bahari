/* =====================================================
   PAYWALL.JS
   Paywall system & payment handling
   
   CARA UPDATE:
   - Ubah harga paket di sini
   - Ubah nomor rekening di sini
   ===================================================== */

// Pricing Plans
const pricingPlans = {
    basic: {
        name: 'Basic',
        price: 50000,
        duration: 7, // days
        features: [
            { text: 'Akses 7 hari', enabled: true },
            { text: 'Akses semua koleksi', enabled: true },
            { text: 'Download gambar (watermark)', enabled: true },
            { text: 'Akses video premium', enabled: false },
            { text: 'Sertifikat digital', enabled: false }
        ]
    },
    premium: {
        name: 'Premium',
        price: 150000,
        duration: 30,
        features: [
            { text: 'Akses 30 hari', enabled: true },
            { text: 'Akses semua koleksi', enabled: true },
            { text: 'Download gambar (watermark)', enabled: true },
            { text: 'Akses video premium', enabled: true },
            { text: 'Sertifikat digital', enabled: true }
        ],
        featured: true
    },
    vip: {
        name: 'VIP',
        price: 500000,
        duration: 365,
        features: [
            { text: 'Akses 1 tahun', enabled: true },
            { text: 'Akses semua koleksi', enabled: true },
            { text: 'Download gambar (tanpa watermark)', enabled: true },
            { text: 'Akses video premium', enabled: true },
            { text: 'Sertifikat digital', enabled: true },
            { text: 'Konsultasi pribadi', enabled: true }
        ]
    }
};

// Payment Info
const paymentInfo = {
    bank: 'Bank BNI',
    accountNumber: '1234-5678-9012',
    accountName: 'Kalianus Nusa Nipa'
};

// Check if user has access
function checkAccess() {
    const accessData = localStorage.getItem('museumAccess');
    if (!accessData) return false;
    
    const access = JSON.parse(accessData);
    const now = new Date().getTime();
    const expiry = access.expiry;
    
    return now < expiry;
}

// Get access info
function getAccessInfo() {
    const accessData = localStorage.getItem('museumAccess');
    if (!accessData) return null;
    return JSON.parse(accessData);
}

// Show paywall
function showPaywall() {
    const paywall = document.getElementById('paywallOverlay');
    if (!paywall) {
        createPaywallOverlay();
    }
    document.getElementById('paywallOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Hide paywall
function hidePaywall() {
    const paywall = document.getElementById('paywallOverlay');
    if (paywall) {
        paywall.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Create paywall overlay
function createPaywallOverlay() {
    const overlay = document.createElement('div');
    overlay.id = 'paywallOverlay';
    overlay.className = 'paywall-overlay';
    
    overlay.innerHTML = `
        <div class="paywall-container">
            <div class="paywall-header">
                <button class="paywall-close" onclick="hidePaywall()">
                    <i class="fas fa-times"></i>
                </button>
                <h2><i class="fas fa-lock"></i> Akses Premium</h2>
                <p>Pilih paket untuk mengakses konten premium Museum Bahari</p>
            </div>
            
            <div class="pricing-grid" id="pricingGrid">
                ${Object.entries(pricingPlans).map(([key, plan]) => `
                    <div class="pricing-card ${plan.featured ? 'featured' : ''}">
                        ${plan.featured ? '<div class="pricing-badge">POPULER</div>' : ''}
                        <div class="pricing-icon">
                            <i class="fas fa-${key === 'basic' ? 'star' : key === 'premium' ? 'crown' : 'gem'}"></i>
                        </div>
                        <h3 class="pricing-title">${plan.name}</h3>
                        <div class="pricing-price">
                            Rp ${plan.price.toLocaleString('id-ID')}
                            <small>/${plan.duration} hari</small>
                        </div>
                        <ul class="pricing-features">
                            ${plan.features.map(f => `
                                <li class="${f.enabled ? '' : 'disabled'}">
                                    <i class="fas fa-${f.enabled ? 'check' : 'times'}"></i>
                                    ${f.text}
                                </li>
                            `).join('')}
                        </ul>
                        <button class="pricing-btn" onclick="selectPlan('${key}')">
                            Pilih Paket
                        </button>
                    </div>
                `).join('')}
            </div>
            
            <div class="payment-form" id="paymentForm">
                <h3>Informasi Pembayaran</h3>
                
                <div class="payment-info">
                    <h4>Transfer ke:</h4>
                    <div class="payment-details">
                        <div class="payment-detail-item">
                            <span>Bank:</span>
                            <strong>${paymentInfo.bank}</strong>
                        </div>
                        <div class="payment-detail-item">
                            <span>No. Rekening:</span>
                            <strong>${paymentInfo.accountNumber}</strong>
                        </div>
                        <div class="payment-detail-item">
                            <span>Atas Nama:</span>
                            <strong>${paymentInfo.accountName}</strong>
                        </div>
                        <div class="payment-detail-item">
                            <span>Jumlah:</span>
                            <strong id="paymentAmount">Rp 0</strong>
                        </div>
                    </div>
                </div>
                
                <div class="upload-section">
                    <h4>Upload Bukti Transfer</h4>
                    <div class="upload-box" onclick="document.getElementById('proofUpload').click()">
                        <i class="fas fa-cloud-upload-alt"></i>
                        <p>Klik untuk upload bukti transfer</p>
                        <small>Format: JPG, PNG (Max 5MB)</small>
                    </div>
                    <input type="file" id="proofUpload" accept="image/*" style="display:none" onchange="previewProof(this)">
                    <div class="upload-preview" id="uploadPreview"></div>
                </div>
                
                <div class="form-group">
                    <label>Nama Lengkap</label>
                    <input type="text" id="payerName" placeholder="Masukkan nama lengkap" required>
                </div>
                
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" id="payerEmail" placeholder="Masukkan email aktif" required>
                </div>
                
                <div class="form-group">
                    <label>Nomor WhatsApp</label>
                    <input type="tel" id="payerPhone" placeholder="08xxxxxxxxxx" required>
                </div>
                
                <button class="submit-payment-btn" onclick="submitPayment()">
                    <i class="fas fa-paper-plane"></i> Kirim Konfirmasi
                </button>
            </div>
            
            <div class="success-message" id="successMessage">
                <div class="success-icon">
                    <i class="fas fa-check"></i>
                </div>
                <h3>Pembayaran Berhasil Dikirim!</h3>
                <p>Tim kami akan memverifikasi pembayaran Anda dalam 1x24 jam. Anda akan menerima konfirmasi via email dan WhatsApp.</p>
                <button class="submit-payment-btn" onclick="hidePaywall()">
                    Tutup
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(overlay);
}

// Select plan
let selectedPlan = null;
function selectPlan(planKey) {
    selectedPlan = pricingPlans[planKey];
    document.getElementById('paymentAmount').textContent = `Rp ${selectedPlan.price.toLocaleString('id-ID')}`;
    document.getElementById('pricingGrid').style.display = 'none';
    document.getElementById('paymentForm').classList.add('active');
}

// Preview proof upload
function previewProof(input) {
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const preview = document.getElementById('uploadPreview');
            preview.innerHTML = `<img src="${e.target.result}" alt="Bukti Transfer">`;
            preview.style.display = 'block';
        };
        reader.readAsDataURL(input.files[0]);
    }
}

// Submit payment
function submitPayment() {
    const name = document.getElementById('payerName').value;
    const email = document.getElementById('payerEmail').value;
    const phone = document.getElementById('payerPhone').value;
    const proofFile = document.getElementById('proofUpload').files[0];
    
    if (!name || !email || !phone || !proofFile) {
        alert('Mohon lengkapi semua data dan upload bukti transfer');
        return;
    }
    
    // In production, upload to server/Firebase
    // For now, simulate success
    setTimeout(() => {
        document.getElementById('paymentForm').style.display = 'none';
        document.getElementById('successMessage').classList.add('active');
        
        // Save to localStorage (in production, save to database)
        const accessData = {
            plan: selectedPlan.name,
            name: name,
            email: email,
            phone: phone,
            expiry: new Date().getTime() + (selectedPlan.duration * 24 * 60 * 60 * 1000),
            status: 'pending'
        };
        localStorage.setItem('museumAccess', JSON.stringify(accessData));
    }, 1000);
}

// Check access on page load
document.addEventListener('DOMContentLoaded', () => {
    if (!checkAccess()) {
        // Show premium overlay on protected content
        setTimeout(() => {
            const protectedElements = document.querySelectorAll('.protected-content');
            protectedElements.forEach(el => {
                el.style.position = 'relative';
                el.innerHTML += `
                    <div class="premium-overlay">
                        <i class="fas fa-lock"></i>
                        <h4>Konten Premium</h4>
                        <p>Upgrade ke paket premium untuk mengakses konten ini</p>
                        <button onclick="showPaywall()">Upgrade Sekarang</button>
                    </div>
                `;
            });
        }, 1000);
    }
});