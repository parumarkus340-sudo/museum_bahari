/* =====================================================
   FIREBASE-CONFIG.js - KONFIGURASI FIREBASE
   Museum Bahari Ngera Shells
   
   FUNGSI FILE:
   - Konfigurasi Firebase project
   - Inisialisasi Firebase app
   - Setup Realtime Database reference
   - Connection status monitoring
   - Error handling & fallback
   
   DEPENDENCIES:
   - firebase-app-compat.js (CDN)
   - firebase-database-compat.js (CDN)
   
   FILE INI HARUS DI-LOAD:
   - Setelah Firebase SDK dari CDN
   - Sebelum file JS lainnya (data.js, narasi.js, dll)
   
   URUTAN LOAD DI index.html:
   1. firebase-app-compat.js (CDN)
   2. firebase-database-compat.js (CDN)
   3. firebase-config.js ← FILE INI
   4. data.js
   5. narasi.js
   6. render.js
   7. chat.js
   8. app.js
   
   FIREBASE PROJECT INFO:
   - Project ID: museumbahari-10de3
   - Database URL: asia-southeast1 (Singapore)
   - Type: Realtime Database (Compat SDK)
   ===================================================== */

// =====================================================
// 1. FIREBASE CONFIGURATION
// =====================================================
// Konfigurasi project Firebase dari Firebase Console
// ⚠️ JANGAN share apiKey ke publik (untuk production)
// Untuk website publik seperti ini, apiKey AMAN karena
// security diatur di Firebase Rules, bukan di apiKey

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

console.log('📋 Firebase config loaded');

// =====================================================
// 2. FIREBASE INITIALIZATION
// =====================================================
// Inisialisasi Firebase app dengan error handling

let firebaseApp = null;
let firebaseReady = false;

try {
    // Cek apakah Firebase SDK sudah di-load
    if (typeof firebase === 'undefined') {
        throw new Error('Firebase SDK not loaded. Pastikan script Firebase SDK ada di index.html sebelum file ini.');
    }
    
    // Cek apakah sudah ada app yang di-inisialisasi
    if (firebase.apps && firebase.apps.length > 0) {
        console.warn('⚠️ Firebase app sudah di-inisialisasi sebelumnya, menggunakan instance yang ada');
        firebaseApp = firebase.app();
    } else {
        // Inisialisasi Firebase app
        firebaseApp = firebase.initializeApp(firebaseConfig);
        console.log('✅ Firebase app initialized successfully');
    }
    
    firebaseReady = true;
    
} catch (error) {
    console.error('❌ Firebase initialization error:', error.message);
    console.error('💡 Chat akan menggunakan localStorage sebagai fallback');
    firebaseReady = false;
}

// =====================================================
// 3. DATABASE REFERENCES
// =====================================================
// Setup reference ke Realtime Database

let db = null;
let chatRef = null;

if (firebaseReady) {
    try {
        // Database reference
        db = firebase.database();
        console.log('✅ Firebase database connected');
        
        // Chat messages reference
        chatRef = db.ref('chat_messages');
        console.log('✅ Chat reference ready: chat_messages');
        
        // Test koneksi dengan ping sederhana
        testFirebaseConnection();
        
    } catch (error) {
        console.error('❌ Database setup error:', error.message);
        firebaseReady = false;
    }
} else {
    console.warn('⚠️ Firebase not ready, database references not created');
}

// =====================================================
// 4. CONNECTION STATUS MONITORING
// =====================================================
// Monitor status koneksi Firebase secara real-time

let firebaseConnected = false;

function setupConnectionMonitor() {
    if (!firebaseReady || !db) return;
    
    try {
        // Reference ke .info/connected (special Firebase path)
        const connectedRef = db.ref('.info/connected');
        
        connectedRef.on('value', (snapshot) => {
            if (snapshot.val() === true) {
                if (!firebaseConnected) {
                    console.log('🟢 Firebase connected to database server');
                    firebaseConnected = true;
                    updateConnectionStatus('connected');
                }
            } else {
                if (firebaseConnected) {
                    console.warn('🔴 Firebase disconnected from database server');
                    firebaseConnected = false;
                    updateConnectionStatus('disconnected');
                }
            }
        });
        
    } catch (error) {
        console.error('❌ Connection monitor error:', error.message);
    }
}

/**
 * Update visual status koneksi (opsional)
 * Bisa ditambahkan indicator di UI
 * @param {string} status - 'connected' atau 'disconnected'
 */
function updateConnectionStatus(status) {
    // Simpan status di localStorage untuk akses global
    localStorage.setItem('firebaseConnectionStatus', status);
    
    // Dispatch custom event untuk komponen lain
    window.dispatchEvent(new CustomEvent('firebaseConnectionChange', {
        detail: { status: status, timestamp: Date.now() }
    }));
}

// Setup monitor saat file di-load
setupConnectionMonitor();

// =====================================================
// 5. CONNECTION TEST FUNCTION
// =====================================================

/**
 * Test koneksi Firebase dengan operasi read sederhana
 * Dipanggil sekali saat initialization
 */
function testFirebaseConnection() {
    if (!chatRef) return;
    
    console.log('🧪 Testing Firebase connection...');
    
    // Coba read 1 data terakhir (limit 1 untuk efisiensi)
    chatRef.orderByChild('timestamp').limitToLast(1).once('value')
        .then((snapshot) => {
            console.log('✅ Firebase connection test SUCCESS');
            console.log('📊 Database contains:', snapshot.exists() ? 'data' : 'no data');
            
            // Update status
            firebaseConnected = true;
            updateConnectionStatus('connected');
        })
        .catch((error) => {
            console.error('❌ Firebase connection test FAILED:', error.message);
            console.error('💡 Error code:', error.code);
            
            // Update status
            firebaseConnected = false;
            updateConnectionStatus('disconnected');
            
            // Berikan saran berdasarkan error code
            provideErrorSuggestion(error.code);
        });
}

/**
 * Berikan saran berdasarkan error code Firebase
 * @param {string} errorCode - Firebase error code
 */
function provideErrorSuggestion(errorCode) {
    const suggestions = {
        'PERMISSION_DENIED': 
            '⚠️ Akses ditolak. Cek Firebase Rules di Console:\n' +
            '   Firebase Console → Realtime Database → Rules\n' +
            '   Pastikan rules mengizinkan read/write untuk chat_messages',
        
        'NETWORK_ERROR': 
            '⚠️ Tidak ada koneksi internet.\n' +
            '   Chat akan menggunakan localStorage sebagai fallback.',
        
        'AUTHENTICATION_ERROR': 
            '⚠️ Error autentikasi.\n' +
            '   Cek Firebase config di file ini.',
        
        'INVALID_TOKEN': 
            '⚠️ Token tidak valid.\n' +
            '   Refresh halaman atau cek Firebase config.'
    };
    
    if (suggestions[errorCode]) {
        console.log(suggestions[errorCode]);
    } else {
        console.log('💡 Error tidak dikenal. Cek dokumentasi Firebase:', 
                    'https://firebase.google.com/docs/reference/js/firebase.database');
    }
}

// =====================================================
// 6. HELPER FUNCTIONS
// =====================================================

/**
 * Cek apakah Firebase siap digunakan
 * @returns {boolean} true jika Firebase ready
 */
function isFirebaseReady() {
    return firebaseReady && firebaseConnected;
}

/**
 * Cek apakah Firebase initialized (meski belum connected)
 * @returns {boolean} true jika Firebase initialized
 */
function isFirebaseInitialized() {
    return firebaseReady;
}

/**
 * Get status koneksi Firebase
 * @returns {string} 'connected', 'disconnected', atau 'not_initialized'
 */
function getFirebaseStatus() {
    if (!firebaseReady) return 'not_initialized';
    return firebaseConnected ? 'connected' : 'disconnected';
}

/**
 * Force reconnect ke Firebase
 * (Go offline lalu online lagi)
 */
function forceReconnect() {
    if (!db) {
        console.warn('⚠️ Database not initialized, cannot reconnect');
        return;
    }
    
    console.log('🔄 Forcing Firebase reconnect...');
    
    db.goOffline();
    setTimeout(() => {
        db.goOnline();
        console.log('✅ Firebase reconnect initiated');
    }, 1000);
}

/**
 * Get server timestamp dari Firebase
 * Berguna untuk sinkronisasi waktu
 * @returns {Object} Firebase ServerValue.TIMESTAMP
 */
function getServerTimestamp() {
    if (!firebaseReady) {
        console.warn('⚠️ Firebase not ready, using local timestamp');
        return Date.now();
    }
    return firebase.database.ServerValue.TIMESTAMP;
}

// =====================================================
// 7. FIREBASE RULES INFO
// =====================================================
// Informasi rules yang harus di-set di Firebase Console

const FIREBASE_RULES_INFO = {
    description: 'Rules untuk Museum Bahari Ngera Shells',
    recommended: {
        "rules": {
            "chat_messages": {
                ".read": true,
                ".write": true,
                ".validate": "newData.hasChildren(['nama', 'pesan', 'timestamp'])",
                ".indexOn": ["timestamp"]
            },
            ".read": false,
            ".write": false
        }
    },
    howToSetup: [
        '1. Buka https://console.firebase.google.com/',
        '2. Pilih project: museumbahari-10de3',
        '3. Klik "Realtime Database" di menu kiri',
        '4. Klik tab "Rules"',
        '5. Paste rules di atas',
        '6. Klik "Publish"'
    ]
};

console.log('📋 Firebase rules info available at: window.FIREBASE_RULES_INFO');

// =====================================================
// 8. LOGGING & STATUS
// =====================================================

console.log('═══════════════════════════════════════════');
console.log('🔥 FIREBASE CONFIGURATION STATUS');
console.log('═══════════════════════════════════════════');
console.log('📋 Project ID:', firebaseConfig.projectId);
console.log('🌍 Database Region: asia-southeast1 (Singapore)');
console.log('✅ Firebase Initialized:', firebaseReady);
console.log('🟢 Connection Status:', getFirebaseStatus());
console.log('💾 Database Reference:', chatRef ? 'ready' : 'not ready');
console.log('═══════════════════════════════════════════');

// =====================================================
// 9. EXPORT TO GLOBAL SCOPE
// =====================================================
// Expose variables & functions untuk file JS lain

// Variables
window.firebaseConfig = firebaseConfig;
window.firebaseApp = firebaseApp;
window.db = db;
window.chatRef = chatRef;
window.firebaseReady = firebaseReady;
window.firebaseConnected = firebaseConnected;

// Functions
window.isFirebaseReady = isFirebaseReady;
window.isFirebaseInitialized = isFirebaseInitialized;
window.getFirebaseStatus = getFirebaseStatus;
window.forceReconnect = forceReconnect;
window.getServerTimestamp = getServerTimestamp;
window.testFirebaseConnection = testFirebaseConnection;

// Info
window.FIREBASE_RULES_INFO = FIREBASE_RULES_INFO;

console.log('✅ Firebase config exported to global scope');
console.log('💡 Available commands:');
console.log('   - isFirebaseReady()          → cek status lengkap');
console.log('   - getFirebaseStatus()        → cek status koneksi');
console.log('   - testFirebaseConnection()   → test koneksi manual');
console.log('   - forceReconnect()           → paksa reconnect');
console.log('   - FIREBASE_RULES_INFO        → info rules Firebase');

// =====================================================
// 10. EVENT LISTENERS
// =====================================================

// Listen untuk connection change events
window.addEventListener('firebaseConnectionChange', (e) => {
    console.log('🔄 Firebase connection changed:', e.detail.status);
});

// Listen untuk visibility change (tab aktif/tidak)
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        console.log('⏸️ Tab hidden - Firebase listeners still active');
    } else {
        console.log('▶️ Tab visible - checking Firebase connection...');
        if (firebaseReady && !firebaseConnected) {
            // Coba reconnect saat tab aktif lagi
            setTimeout(() => testFirebaseConnection(), 1000);
        }
    }
});

// Listen untuk online/offline events
window.addEventListener('online', () => {
    console.log('🟢 Browser online - checking Firebase...');
    if (firebaseReady) {
        setTimeout(() => testFirebaseConnection(), 500);
    }
});

window.addEventListener('offline', () => {
    console.log('🔴 Browser offline - Firebase will use cache');
    firebaseConnected = false;
    updateConnectionStatus('disconnected');
});

console.log('✅ Event listeners registered');

// =====================================================
// END OF FILE
// =====================================================