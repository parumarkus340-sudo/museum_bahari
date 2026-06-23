/* =====================================================
   FIREBASE-CONFIG.js - KONFIGURASI FIREBASE
   Museum Bahari Ngera Shells
   ===================================================== */

// =====================================================
// 1. FIREBASE CONFIGURATION
// =====================================================

// ⚠️ Untuk production: Pindahkan apiKey ke file .env atau config terpisah
// Cara aman: window.FIREBASE_API_KEY dari server-side injection

const firebaseConfig = {
    apiKey: window.FIREBASE_API_KEY || "AIzaSyCzzUqEgP_xSFO1Kht1PPPSuF7v2k0r8DI",
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

let firebaseApp = null;
let firebaseReady = false;
let firebaseConnected = false;
let firebaseErrorCount = 0;
const MAX_ERROR_COUNT = 5;

try {
    if (typeof firebase === 'undefined') {
        throw new Error('Firebase SDK not loaded. Pastikan script Firebase SDK ada di index.html sebelum file ini.');
    }
    
    if (firebase.apps && firebase.apps.length > 0) {
        console.warn('⚠️ Firebase app sudah di-inisialisasi sebelumnya, menggunakan instance yang ada');
        firebaseApp = firebase.app();
    } else {
        firebaseApp = firebase.initializeApp(firebaseConfig);
        console.log('✅ Firebase app initialized successfully');
    }
    
    firebaseReady = true;
    
} catch (error) {
    console.error('❌ Firebase initialization error:', error.message);
    firebaseReady = false;
    reportFirebaseError(error, 'initialization');
}

// =====================================================
// 3. DATABASE REFERENCES
// =====================================================

let db = null;
let chatRef = null;

if (firebaseReady) {
    try {
        db = firebase.database();
        console.log('✅ Firebase database connected');
        
        chatRef = db.ref('chat_messages');
        console.log('✅ Chat reference ready: chat_messages');
        
        testFirebaseConnection();
        
    } catch (error) {
        console.error('❌ Database setup error:', error.message);
        firebaseReady = false;
        reportFirebaseError(error, 'database_setup');
    }
} else {
    console.warn('⚠️ Firebase not ready, database references not created');
}

// =====================================================
// 4. CONNECTION STATUS MONITORING
// =====================================================

function setupConnectionMonitor() {
    if (!firebaseReady || !db) return;
    
    try {
        const connectedRef = db.ref('.info/connected');
        
        connectedRef.on('value', (snapshot) => {
            const connected = snapshot.val() === true;
            
            if (connected && !firebaseConnected) {
                console.log('🟢 Firebase connected to database server');
                firebaseConnected = true;
                firebaseErrorCount = 0; // Reset error counter
                updateConnectionStatus('connected');
                window.dispatchEvent(new CustomEvent('firebaseConnected'));
            } else if (!connected && firebaseConnected) {
                console.warn('🔴 Firebase disconnected from database server');
                firebaseConnected = false;
                updateConnectionStatus('disconnected');
                window.dispatchEvent(new CustomEvent('firebaseDisconnected'));
            }
        }, (error) => {
            reportFirebaseError(error, 'connection_monitor');
        });
        
    } catch (error) {
        console.error('❌ Connection monitor error:', error.message);
        reportFirebaseError(error, 'connection_monitor_setup');
    }
}

setupConnectionMonitor();

// =====================================================
// 5. CONNECTION TEST
// =====================================================

function testFirebaseConnection() {
    if (!chatRef) {
        console.warn('⚠️ Cannot test connection: chatRef is null');
        return Promise.reject(new Error('chatRef not available'));
    }
    
    console.log('🧪 Testing Firebase connection...');
    
    return chatRef.orderByChild('timestamp').limitToLast(1).once('value')
        .then((snapshot) => {
            console.log('✅ Firebase connection test SUCCESS');
            console.log('📊 Database contains:', snapshot.exists() ? 'data' : 'no data');
            firebaseConnected = true;
            firebaseErrorCount = 0;
            updateConnectionStatus('connected');
            return true;
        })
        .catch((error) => {
            console.error('❌ Firebase connection test FAILED:', error.message);
            firebaseConnected = false;
            firebaseErrorCount++;
            updateConnectionStatus('disconnected');
            provideErrorSuggestion(error.code);
            reportFirebaseError(error, 'connection_test');
            return false;
        });
}

// =====================================================
// 6. ERROR HANDLING
// =====================================================

function reportFirebaseError(error, context = '') {
    // Simpan error untuk debugging
    const errors = JSON.parse(localStorage.getItem('firebaseErrors') || '[]');
    errors.push({
        timestamp: Date.now(),
        context: context,
        message: error.message || String(error),
        code: error.code || 'unknown'
    });
    if (errors.length > 50) errors.shift();
    localStorage.setItem('firebaseErrors', JSON.stringify(errors));
    
    // Jika terlalu banyak error, matikan Firebase sementara
    if (firebaseErrorCount >= MAX_ERROR_COUNT) {
        console.warn(`⚠️ Firebase error count reached ${MAX_ERROR_COUNT}, switching to fallback mode`);
        firebaseConnected = false;
        updateConnectionStatus('error_limit_reached');
        window.dispatchEvent(new CustomEvent('firebaseFallbackMode', { 
            detail: { reason: 'too_many_errors' } 
        }));
    }
}

function provideErrorSuggestion(errorCode) {
    const suggestions = {
        'PERMISSION_DENIED': 
            '⚠️ Akses ditolak. Cek Firebase Rules di Console.\n' +
            'Pastikan rules mengizinkan read/write untuk chat_messages',
        
        'NETWORK_ERROR': 
            '⚠️ Tidak ada koneksi internet. Chat akan menggunakan localStorage.',
        
        'AUTHENTICATION_ERROR': 
            '⚠️ Error autentikasi. Cek Firebase config.',
        
        'INVALID_TOKEN': 
            '⚠️ Token tidak valid. Refresh halaman atau cek Firebase config.'
    };
    
    if (suggestions[errorCode]) {
        console.log(suggestions[errorCode]);
    } else {
        console.log('💡 Error tidak dikenal. Cek dokumentasi Firebase.');
    }
}

// =====================================================
// 7. HELPER FUNCTIONS
// =====================================================

function isFirebaseReady() {
    return firebaseReady && firebaseConnected;
}

function isFirebaseInitialized() {
    return firebaseReady;
}

function getFirebaseStatus() {
    if (!firebaseReady) return 'not_initialized';
    if (firebaseErrorCount >= MAX_ERROR_COUNT) return 'error_limit';
    return firebaseConnected ? 'connected' : 'disconnected';
}

function forceReconnect() {
    if (!db) {
        console.warn('⚠️ Database not initialized, cannot reconnect');
        return;
    }
    
    console.log('🔄 Forcing Firebase reconnect...');
    firebaseErrorCount = 0;
    db.goOffline();
    setTimeout(() => {
        db.goOnline();
        console.log('✅ Firebase reconnect initiated');
        setTimeout(() => testFirebaseConnection(), 2000);
    }, 1000);
}

function getServerTimestamp() {
    if (!firebaseReady) {
        console.warn('⚠️ Firebase not ready, using local timestamp');
        return Date.now();
    }
    return firebase.database.ServerValue.TIMESTAMP;
}

// =====================================================
// 8. FIREBASE RULES (AMAN)
// =====================================================

const FIREBASE_RULES_INFO = {
    description: 'Rules untuk Museum Bahari Ngera Shells - Versi Aman',
    recommended: {
        "rules": {
            "chat_messages": {
                ".read": true,
                ".write": true,
                ".validate": "newData.hasChildren(['nama', 'pesan', 'timestamp']) && newData.child('pesan').val().length <= 500 && newData.child('nama').val().length <= 30",
                ".indexOn": ["timestamp"]
            },
            "chat_messages_flagged": {
                ".write": false,
                ".read": false
            },
            "users": {
                ".read": false,
                ".write": false
            },
            "settings": {
                ".read": false,
                ".write": false
            }
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

// =====================================================
// 9. EXPORT TO GLOBAL SCOPE
// =====================================================

window.firebaseConfig = firebaseConfig;
window.firebaseApp = firebaseApp;
window.db = db;
window.chatRef = chatRef;
window.firebaseReady = firebaseReady;
window.firebaseConnected = firebaseConnected;
window.firebaseErrorCount = firebaseErrorCount;

window.isFirebaseReady = isFirebaseReady;
window.isFirebaseInitialized = isFirebaseInitialized;
window.getFirebaseStatus = getFirebaseStatus;
window.forceReconnect = forceReconnect;
window.getServerTimestamp = getServerTimestamp;
window.testFirebaseConnection = testFirebaseConnection;

window.FIREBASE_RULES_INFO = FIREBASE_RULES_INFO;

console.log('✅ Firebase config exported to global scope');
console.log('💡 Available commands:');
console.log('   - isFirebaseReady()          → cek status lengkap');
console.log('   - getFirebaseStatus()        → cek status koneksi');
console.log('   - testFirebaseConnection()   → test koneksi manual');
console.log('   - forceReconnect()           → paksa reconnect');

// =====================================================
// 10. EVENT LISTENERS
// =====================================================

document.addEventListener('visibilitychange', () => {
    if (!document.hidden && firebaseReady && !firebaseConnected) {
        console.log('▶️ Tab visible - checking Firebase connection...');
        setTimeout(() => testFirebaseConnection(), 1000);
    }
});

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