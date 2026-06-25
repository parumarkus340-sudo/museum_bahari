/* =====================================================
   ANALYTICS.JS - CUSTOM VISITOR TRACKING
   ===================================================== */

class AnalyticsManager {
    constructor() {
        this.storageKey = 'museumAnalytics';
        this.data = this.loadData();
        console.log('✅ AnalyticsManager initialized');
    }
    
    // Load analytics data
    loadData() {
        try {
            const data = localStorage.getItem(this.storageKey);
            return data ? JSON.parse(data) : this.getDefaultData();
        } catch (e) {
            console.error('Error loading analytics:', e);
            return this.getDefaultData();
        }
    }
    
    // Get default data structure
    getDefaultData() {
        return {
            totalVisitors: 0,
            totalVisits: 0,
            visitors: [],
            pageViews: {},
            collections: {},
            dailyStats: {},
            firstVisit: new Date().toISOString(),
            lastVisit: new Date().toISOString()
        };
    }
    
    // Save data
    saveData() {
        try {
            localStorage.setItem(this.storageKey, JSON.stringify(this.data));
        } catch (e) {
            console.error('Error saving analytics:', e);
        }
    }
    
    // Track new visitor
    trackVisitor(name) {
        const today = new Date().toISOString().split('T')[0];
        
        // Check if visitor already exists
        const existingVisitor = this.data.visitors.find(v => v.name === name);
        
        if (existingVisitor) {
            // Update existing visitor
            existingVisitor.lastVisit = new Date().toISOString();
            existingVisitor.visitCount++;
        } else {
            // Add new visitor
            this.data.visitors.push({
                name: name,
                firstVisit: new Date().toISOString(),
                lastVisit: new Date().toISOString(),
                visitCount: 1
            });
            this.data.totalVisitors++;
        }
        
        // Update total visits
        this.data.totalVisits++;
        
        // Update daily stats
        if (!this.data.dailyStats[today]) {
            this.data.dailyStats[today] = {
                visitors: 0,
                visits: 0
            };
        }
        this.data.dailyStats[today].visits++;
        if (!existingVisitor) {
            this.data.dailyStats[today].visitors++;
        }
        
        this.data.lastVisit = new Date().toISOString();
        this.saveData();
        
        console.log(`✅ Visitor tracked: ${name}`);
    }
    
    // Track page view
    trackPageView(pageName) {
        if (!this.data.pageViews[pageName]) {
            this.data.pageViews[pageName] = 0;
        }
        this.data.pageViews[pageName]++;
        this.saveData();
    }
    
    // Track collection view
    trackCollectionView(collectionName) {
        if (!this.data.collections[collectionName]) {
            this.data.collections[collectionName] = 0;
        }
        this.data.collections[collectionName]++;
        this.saveData();
    }
    
    // Get statistics
    getStats() {
        return {
            totalVisitors: this.data.totalVisitors,
            totalVisits: this.data.totalVisits,
            uniqueVisitors: this.data.visitors.length,
            pageViews: this.data.pageViews,
            collections: this.data.collections,
            lastVisit: this.data.lastVisit
        };
    }
    
    // Get recent visitors
    getRecentVisitors(limit = 10) {
        return this.data.visitors
            .sort((a, b) => new Date(b.lastVisit) - new Date(a.lastVisit))
            .slice(0, limit);
    }
    
    // Get daily stats for chart
    getDailyStats(days = 7) {
        const stats = [];
        const today = new Date();
        
        for (let i = days - 1; i >= 0; i--) {
            const date = new Date(today);
            date.setDate(date.getDate() - i);
            const dateStr = date.toISOString().split('T')[0];
            
            stats.push({
                date: dateStr,
                label: date.toLocaleDateString('id-ID', { weekday: 'short', day: 'numeric' }),
                visitors: this.data.dailyStats[dateStr]?.visitors || 0,
                visits: this.data.dailyStats[dateStr]?.visits || 0
            });
        }
        
        return stats;
    }
    
    // Reset analytics (for testing)
    reset() {
        localStorage.removeItem(this.storageKey);
        this.data = this.getDefaultData();
        console.log('✅ Analytics reset');
    }
}

// Initialize analytics
const analyticsManager = new AnalyticsManager();

// Expose to window
window.analyticsManager = analyticsManager;

// Track visitor when they register
document.addEventListener('DOMContentLoaded', function() {
    const visitor = localStorage.getItem('museumVisitor');
    if (visitor) {
        const data = JSON.parse(visitor);
        analyticsManager.trackVisitor(data.name);
    }
});

// Track page navigation
document.addEventListener('click', function(e) {
    if (e.target.matches('a[data-page]')) {
        const page = e.target.dataset.page;
        analyticsManager.trackPageView(page);
    }
});

// Track collection views
document.addEventListener('click', function(e) {
    if (e.target.matches('[data-submenu]')) {
        const collection = e.target.dataset.submenu;
        analyticsManager.trackCollectionView(collection);
    }
});

console.log('✅ Analytics.js loaded successfully');