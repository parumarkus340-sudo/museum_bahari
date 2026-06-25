/* =====================================================
   BACKGROUND SLIDESHOW
   Sistem slideshow background untuk setiap halaman
   ===================================================== */

class BackgroundSlideshow {
    constructor(options = {}) {
        this.slides = options.slides || [];
        this.interval = options.interval || 5000; // Default 5 detik
        this.transitionDuration = options.transitionDuration || 1500;
        this.currentIndex = 0;
        this.timer = null;
        this.container = null;
        this.overlay = null;
        
        console.log('✅ BackgroundSlideshow initialized');
    }
    
    // Initialize slideshow
    init() {
        if (this.slides.length === 0) {
            console.warn('⚠️ No slides provided');
            return;
        }
        
        this.createSlideshowElements();
        this.start();
        
        console.log(`🎬 Slideshow started with ${this.slides.length} slides`);
    }
    
    // Create slideshow DOM elements
    createSlideshowElements() {
        // Create container
        this.container = document.createElement('div');
        this.container.className = 'background-slideshow';
        
        // Create slides
        this.slides.forEach((slide, index) => {
            const slideEl = document.createElement('div');
            slideEl.className = `background-slide ${index === 0 ? 'active' : ''}`;
            slideEl.style.backgroundImage = `url('${slide}')`;
            this.container.appendChild(slideEl);
        });
        
        // Create overlay
        this.overlay = document.createElement('div');
        this.overlay.className = 'background-overlay';
        
        // Append to body
        document.body.appendChild(this.container);
        document.body.appendChild(this.overlay);
        
        // Create controls (optional)
        this.createControls();
        this.createIndicators();
    }
    
    // Create slideshow controls
    createControls() {
        const controls = document.createElement('div');
        controls.className = 'slideshow-controls';
        
        const prevBtn = document.createElement('button');
        prevBtn.className = 'slideshow-btn';
        prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
        prevBtn.onclick = () => this.prev();
        
        const nextBtn = document.createElement('button');
        nextBtn.className = 'slideshow-btn';
        nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
        nextBtn.onclick = () => this.next();
        
        controls.appendChild(prevBtn);
        controls.appendChild(nextBtn);
        
        document.body.appendChild(controls);
        
        // Show controls on hover
        document.addEventListener('mousemove', () => {
            controls.classList.add('visible');
        });
        
        setTimeout(() => {
            controls.classList.remove('visible');
        }, 3000);
    }
    
    // Create indicators
    createIndicators() {
        const indicators = document.createElement('div');
        indicators.className = 'slideshow-indicators';
        
        this.slides.forEach((_, index) => {
            const indicator = document.createElement('div');
            indicator.className = `slideshow-indicator ${index === 0 ? 'active' : ''}`;
            indicator.onclick = () => this.goTo(index);
            indicators.appendChild(indicator);
        });
        
        document.body.appendChild(indicators);
    }
    
    // Update active slide
    updateActiveSlide() {
        const slides = this.container.querySelectorAll('.background-slide');
        const indicators = document.querySelectorAll('.slideshow-indicator');
        
        slides.forEach((slide, index) => {
            if (index === this.currentIndex) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });
        
        indicators.forEach((indicator, index) => {
            if (index === this.currentIndex) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }
    
    // Next slide
    next() {
        this.currentIndex = (this.currentIndex + 1) % this.slides.length;
        this.updateActiveSlide();
        this.resetTimer();
    }
    
    // Previous slide
    prev() {
        this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
        this.updateActiveSlide();
        this.resetTimer();
    }
    
    // Go to specific slide
    goTo(index) {
        this.currentIndex = index;
        this.updateActiveSlide();
        this.resetTimer();
    }
    
    // Start slideshow
    start() {
        this.timer = setInterval(() => {
            this.next();
        }, this.interval);
    }
    
    // Stop slideshow
    stop() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }
    
    // Reset timer
    resetTimer() {
        this.stop();
        this.start();
    }
    
    // Destroy slideshow
    destroy() {
        this.stop();
        if (this.container) {
            this.container.remove();
        }
        if (this.overlay) {
            this.overlay.remove();
        }
        const controls = document.querySelector('.slideshow-controls');
        if (controls) {
            controls.remove();
        }
        const indicators = document.querySelector('.slideshow-indicators');
        if (indicators) {
            indicators.remove();
        }
    }
}

// Initialize slideshow when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Define background images untuk setiap halaman
    const pageBackgrounds = {
        home: [
            'assets/images/hero/hero-bg.PNG',
            'assets/images/backgrounds/ocean-1.PNG',
            'assets/images/backgrounds/ocean-2.PNG',
            'assets/images/backgrounds/ocean-3.PNG'
        ],
        sejarah: [
            'assets/images/backgrounds/sejarah-1.PNG',
            'assets/images/backgrounds/sejarah-2.PNG',
            'assets/images/backgrounds/sejarah-3.PNG'
        ],
        profil: [
            'assets/images/backgrounds/profil-1.PNG',
            'assets/images/backgrounds/profil-2.PNG'
        ],
        tujuan: [
            'assets/images/backgrounds/tujuan-1.PNG',
            'assets/images/backgrounds/tujuan-2.PNG'
        ],
        koleksi: [
            'assets/images/backgrounds/koleksi-1.PNG',
            'assets/images/backgrounds/koleksi-2.PNG',
            'assets/images/backgrounds/koleksi-3.PNG'
        ],
        galeri: [
            'assets/images/backgrounds/galeri-1.PNG',
            'assets/images/backgrounds/galeri-2.PNG'
        ],
        dokumen: [
            'assets/images/backgrounds/dokumen-1.PNG'
        ],
        default: [
            'assets/images/hero/hero-bg.PNG',
            'assets/images/backgrounds/ocean-1.PNG',
            'assets/images/backgrounds/ocean-2.PNG'
        ]
    };
    
    // Determine current page
    const body = document.body;
    const currentPage = body.classList.contains('page-home') ? 'home' :
                        body.classList.contains('page-sejarah') ? 'sejarah' :
                        body.classList.contains('page-profil') ? 'profil' :
                        body.classList.contains('page-tujuan') ? 'tujuan' :
                        body.classList.contains('page-koleksi') ? 'koleksi' :
                        body.classList.contains('page-galeri') ? 'galeri' :
                        body.classList.contains('page-dokumen') ? 'dokumen' : 'default';
    
    // Get slides for current page
    const slides = pageBackgrounds[currentPage] || pageBackgrounds.default;
    
    // Filter out non-existent slides (optional - for demo purposes)
    // In production, make sure all images exist
    
    // Initialize slideshow
    window.backgroundSlideshow = new BackgroundSlideshow({
        slides: slides,
        interval: 3000, // Change slide every 6 seconds
        transitionDuration: 1500
    });
    
    window.backgroundSlideshow.init();
});

console.log('✅ Background Slideshow.js loaded successfully');