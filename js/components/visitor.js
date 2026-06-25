/* =====================================================
   VISITOR.JS - SISTEM NAMA PENGUNJUNG (SIMPLIFIED)
   Tanpa welcome modal & welcome banner
   ===================================================== */

// Visitor Manager Class
class VisitorManager {
    constructor() {
        this.storageKey = 'museumVisitor';
        this.visitor = this.getVisitor();
        console.log('✅ VisitorManager initialized');
    }
    
    getVisitor() {
        try {
            const data = localStorage.getItem(this.storageKey);
            return data ? JSON.parse(data) : null;
        } catch (e) {
            console.error('Error getting visitor:', e);
            return null;
        }
    }
    
    saveVisitor(data) {
        try {
            localStorage.setItem(this.storageKey, JSON.stringify(data));
            this.visitor = data;
            console.log('✅ Visitor saved:', data);
        } catch (e) {
            console.error('Error saving visitor:', e);
        }
    }
    
    hasVisitor() {
        return this.visitor !== null;
    }
    
    getName() {
        return this.visitor ? this.visitor.name : null;
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

// Expose to window for debugging
window.visitorManager = visitorManager;

// Show User Badge di Navbar
function showUserBadge() {
    console.log('🎯 showUserBadge called');
    
    let badge = document.getElementById('userBadge');
    if (!badge) {
        badge = createUserBadge();
    }
    
    const name = visitorManager.getName();
    const initial = name ? name.charAt(0).toUpperCase() : '?';
    
    const badgeAvatar = badge.querySelector('#userBadgeAvatar');
    const badgeName = badge.querySelector('#userBadgeName');
    
    if (badgeAvatar) badgeAvatar.textContent = initial;
    if (badgeName && name) badgeName.textContent = name;
    
    badge.classList.add('active');
}

// Create User Badge
function createUserBadge() {
    const badge = document.createElement('div');
    badge.id = 'userBadge';
    badge.className = 'user-badge';
    badge.title = 'Klik untuk reset nama';
    badge.onclick = resetVisitorName;
    
    const name = visitorManager.getName() || 'Pengunjung';
    const initial = name.charAt(0).toUpperCase();
    
    badge.innerHTML = `
        <div class="user-badge-avatar" id="userBadgeAvatar">${initial}</div>
        <span class="user-badge-name" id="userBadgeName">${name}</span>
    `;
    
    // Insert in navbar
    const navContainer = document.querySelector('.nav-container');
    if (navContainer) {
        navContainer.appendChild(badge);
    }
    
    return badge;
}

// Reset Visitor Name
function resetVisitorName() {
    if (confirm('Ingin mengubah nama Anda?')) {
        visitorManager.reset();
        location.reload();
    }
}

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 DOMContentLoaded - Visitor system initializing...');
    
    // Show user badge if visitor exists
    if (visitorManager.hasVisitor()) {
        console.log('✅ Returning visitor - showing user badge');
        visitorManager.incrementVisitCount();
        setTimeout(showUserBadge, 500);
    } else {
        console.log('🆕 New visitor - no modal, just track');
        // Tidak ada welcome modal lagi
    }
});

// Expose functions to window
window.resetVisitorName = resetVisitorName;

console.log('✅ Visitor.js loaded successfully (simplified version)');