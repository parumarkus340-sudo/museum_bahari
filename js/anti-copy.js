/* =====================================================
   ANTI-COPY.JS
   Anti-copy & anti-download protection
   
   CARA UPDATE:
   - Tambah proteksi baru di sini
   ===================================================== */

// Disable right-click
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    showProtectedNotice('Klik kanan dinonaktifkan untuk melindungi konten');
    return false;
});

// Disable keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Ctrl+C (Copy)
    if (e.ctrlKey && e.key === 'c') {
        e.preventDefault();
        showProtectedNotice('Copy dinonaktifkan untuk melindungi konten');
        return false;
    }
    
    // Ctrl+V (Paste)
    if (e.ctrlKey && e.key === 'v') {
        e.preventDefault();
        showProtectedNotice('Paste dinonaktifkan untuk melindungi konten');
        return false;
    }
    
    // Ctrl+U (View Source)
    if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
        showProtectedNotice('View source dinonaktifkan');
        return false;
    }
    
    // Ctrl+S (Save)
    if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        showProtectedNotice('Save dinonaktifkan untuk melindungi konten');
        return false;
    }
    
    // Ctrl+P (Print)
    if (e.ctrlKey && e.key === 'p') {
        e.preventDefault();
        showProtectedNotice('Print dinonaktifkan untuk melindungi konten');
        return false;
    }
    
    // F12 (Developer Tools)
    if (e.key === 'F12') {
        e.preventDefault();
        showProtectedNotice('Developer tools dinonaktifkan');
        return false;
    }
    
    // Ctrl+Shift+I (Developer Tools)
    if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        e.preventDefault();
        showProtectedNotice('Developer tools dinonaktifkan');
        return false;
    }
    
    // Ctrl+Shift+J (Console)
    if (e.ctrlKey && e.shiftKey && e.key === 'J') {
        e.preventDefault();
        showProtectedNotice('Console dinonaktifkan');
        return false;
    }
    
    // Ctrl+Shift+C (Inspect)
    if (e.ctrlKey && e.shiftKey && e.key === 'C') {
        e.preventDefault();
        showProtectedNotice('Inspect dinonaktifkan');
        return false;
    }
});

// Disable drag and drop
document.addEventListener('dragstart', (e) => {
    e.preventDefault();
    showProtectedNotice('Drag & drop dinonaktifkan untuk melindungi gambar');
    return false;
});

// Disable text selection on protected elements
document.addEventListener('selectstart', (e) => {
    if (e.target.closest('.protected-content')) {
        e.preventDefault();
        return false;
    }
});

// Show protected notice
function showProtectedNotice(message) {
    let notice = document.querySelector('.protected-notice');
    
    if (!notice) {
        notice = document.createElement('div');
        notice.className = 'protected-notice';
        document.body.appendChild(notice);
    }
    
    notice.innerHTML = `<i class="fas fa-shield-alt"></i> ${message}`;
    notice.classList.add('show');
    
    setTimeout(() => {
        notice.classList.remove('show');
    }, 2000);
}

// Add watermark to images
function addWatermarkToImages() {
    const images = document.querySelectorAll('.protected-image img');
    
    images.forEach(img => {
        // Create canvas for watermark
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        // Set canvas size
        canvas.width = img.naturalWidth || 800;
        canvas.height = img.naturalHeight || 600;
        
        // Draw image
        ctx.drawImage(img, 0, 0);
        
        // Add watermark text
        ctx.save();
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.rotate(-30 * Math.PI / 180);
        ctx.font = 'bold 60px Playfair Display';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.textAlign = 'center';
        ctx.fillText('MUSEUM BAHARI', 0, 0);
        ctx.fillText('NGERA SHELLS', 0, 80);
        ctx.restore();
        
        // Replace image with canvas
        img.src = canvas.toDataURL();
    });
}

// Initialize anti-copy on page load
document.addEventListener('DOMContentLoaded', () => {
    // Add watermark after images load
    window.addEventListener('load', () => {
        setTimeout(addWatermarkToImages, 1000);
    });
});

// Detect developer tools (advanced)
(function() {
    const devtools = { open: false };
    const threshold = 160;
    
    setInterval(() => {
        const widthThreshold = window.outerWidth - window.innerWidth > threshold;
        const heightThreshold = window.outerHeight - window.innerHeight > threshold;
        
        if (widthThreshold || heightThreshold) {
            if (!devtools.open) {
                devtools.open = true;
                showProtectedNotice('Developer tools terdeteksi! Konten dilindungi.');
            }
        } else {
            devtools.open = false;
        }
    }, 1000);
})();