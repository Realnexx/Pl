// SaaS Admin Dashboard JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initializeSidebar();
    initializeCharts();
    initializeAnimations();
    initializeEventListeners();
});

// Sidebar Toggle Functionality
function initializeSidebar() {
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('mainContent');
    
    if (sidebarToggle && sidebar && mainContent) {
        sidebarToggle.addEventListener('click', function() {
            sidebar.classList.toggle('collapsed');
            mainContent.classList.toggle('expanded');
            
            // Store sidebar state in localStorage
            const isCollapsed = sidebar.classList.contains('collapsed');
            localStorage.setItem('sidebarCollapsed', isCollapsed);
        });
        
        // Restore sidebar state on page load
        const isCollapsed = localStorage.getItem('sidebarCollapsed') === 'true';
        if (isCollapsed) {
            sidebar.classList.add('collapsed');
            mainContent.classList.add('expanded');
        }
        
        // Mobile sidebar functionality
        if (window.innerWidth <= 768) {
            sidebar.classList.add('collapsed');
            mainContent.classList.add('expanded');
        }
    }
}

// Chart Initialization
function initializeCharts() {
    // Revenue Chart
    const revenueCtx = document.getElementById('revenueChart');
    if (revenueCtx) {
        const revenueChart = new Chart(revenueCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [{
                    label: 'Revenue',
                    data: [12000, 19000, 15000, 25000, 22000, 30000, 28000, 35000, 32000, 40000, 38000, 45000],
                    borderColor: '#007bff',
                    backgroundColor: 'rgba(0, 123, 255, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: '#007bff',
                    pointBorderColor: '#ffffff',
                    pointBorderWidth: 2,
                    pointRadius: 6,
                    pointHoverRadius: 8
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(0, 0, 0, 0.1)'
                        },
                        ticks: {
                            callback: function(value) {
                                return '$' + value.toLocaleString();
                            }
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                },
                interaction: {
                    intersect: false,
                    mode: 'index'
                }
            }
        });
    }
    
    // Traffic Sources Chart
    const trafficCtx = document.getElementById('trafficChart');
    if (trafficCtx) {
        const trafficChart = new Chart(trafficCtx, {
            type: 'doughnut',
            data: {
                labels: ['Direct', 'Organic Search', 'Social Media', 'Referral', 'Email'],
                datasets: [{
                    data: [35, 25, 20, 15, 5],
                    backgroundColor: [
                        '#007bff',
                        '#28a745',
                        '#fd7e14',
                        '#6f42c1',
                        '#17a2b8'
                    ],
                    borderWidth: 0,
                    hoverOffset: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 20,
                            usePointStyle: true,
                            font: {
                                size: 12
                            }
                        }
                    }
                },
                cutout: '60%'
            }
        });
    }
}

// Animation Initialization
function initializeAnimations() {
    // Add fade-in animation to cards
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
    
    // Add slide-in animation to sidebar
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
        sidebar.style.transform = 'translateX(-100%)';
        setTimeout(() => {
            sidebar.style.transition = 'transform 0.3s ease';
            sidebar.style.transform = 'translateX(0)';
        }, 100);
    }
}

// Event Listeners
function initializeEventListeners() {
    // Sidebar navigation
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all items
            sidebarLinks.forEach(l => l.parentElement.classList.remove('active'));
            
            // Add active class to clicked item
            this.parentElement.classList.add('active');
            
            // Add loading state
            addLoadingState();
            
            // Simulate page load
            setTimeout(() => {
                removeLoadingState();
            }, 1000);
        });
    });
    
    // Search functionality
    const searchInput = document.querySelector('.navbar input[type="text"]');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            // Add search functionality here
            console.log('Searching for:', searchTerm);
        });
    }
    
    // Notification click
    const notificationItems = document.querySelectorAll('.dropdown-item');
    notificationItems.forEach(item => {
        item.addEventListener('click', function(e) {
            if (this.textContent.includes('View all')) {
                e.preventDefault();
                // Handle view all notifications
                console.log('View all notifications clicked');
            }
        });
    });
    
    // Modal functionality
    const activityModal = document.getElementById('activityModal');
    if (activityModal) {
        activityModal.addEventListener('show.bs.modal', function() {
            // Add loading state to modal
            const modalBody = this.querySelector('.modal-body');
            modalBody.innerHTML = '<div class="text-center"><div class="spinner-border text-primary" role="status"></div><p class="mt-2">Loading activity data...</p></div>';
            
            // Simulate data loading
            setTimeout(() => {
                modalBody.innerHTML = `
                    <p>This modal would show all recent activity with pagination and filtering options.</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div>
                            <label class="form-label">Filter by:</label>
                            <select class="form-select form-select-sm">
                                <option>All Activities</option>
                                <option>Orders</option>
                                <option>Payments</option>
                                <option>Registrations</option>
                            </select>
                        </div>
                        <div>
                            <label class="form-label">Date Range:</label>
                            <input type="date" class="form-control form-control-sm">
                        </div>
                    </div>
                `;
            }, 1000);
        });
    }
    
    // Window resize handler
    window.addEventListener('resize', function() {
        const sidebar = document.getElementById('sidebar');
        const mainContent = document.getElementById('mainContent');
        
        if (window.innerWidth <= 768) {
            sidebar.classList.add('collapsed');
            mainContent.classList.add('expanded');
        } else {
            // Restore desktop state
            const isCollapsed = localStorage.getItem('sidebarCollapsed') === 'true';
            if (!isCollapsed) {
                sidebar.classList.remove('collapsed');
                mainContent.classList.remove('expanded');
            }
        }
    });
    
    // Analytics card hover effects
    const analyticsCards = document.querySelectorAll('.analytics-card');
    analyticsCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Loading State Functions
function addLoadingState() {
    const mainContent = document.getElementById('mainContent');
    if (mainContent) {
        mainContent.classList.add('loading');
    }
}

function removeLoadingState() {
    const mainContent = document.getElementById('mainContent');
    if (mainContent) {
        mainContent.classList.remove('loading');
    }
}

// Utility Functions
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(amount);
}

function formatNumber(num) {
    return new Intl.NumberFormat('en-US').format(num);
}

function formatDate(date) {
    return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    }).format(new Date(date));
}

// Real-time data updates (simulated)
function updateAnalyticsData() {
    const userCount = document.querySelector('.analytics-card:nth-child(1) .card-title');
    const revenueCount = document.querySelector('.analytics-card:nth-child(2) .card-title');
    const orderCount = document.querySelector('.analytics-card:nth-child(3) .card-title');
    const conversionCount = document.querySelector('.analytics-card:nth-child(4) .card-title');
    
    if (userCount) {
        const currentValue = parseInt(userCount.textContent.replace(/,/g, ''));
        const newValue = currentValue + Math.floor(Math.random() * 10);
        userCount.textContent = formatNumber(newValue);
    }
    
    if (revenueCount) {
        const currentValue = parseInt(revenueCount.textContent.replace(/[$,]/g, ''));
        const newValue = currentValue + Math.floor(Math.random() * 1000);
        revenueCount.textContent = formatCurrency(newValue);
    }
    
    if (orderCount) {
        const currentValue = parseInt(orderCount.textContent.replace(/,/g, ''));
        const newValue = currentValue + Math.floor(Math.random() * 5);
        orderCount.textContent = formatNumber(newValue);
    }
    
    if (conversionCount) {
        const currentValue = parseFloat(conversionCount.textContent);
        const newValue = (currentValue + (Math.random() * 0.1 - 0.05)).toFixed(2);
        conversionCount.textContent = newValue + '%';
    }
}

// Auto-update analytics every 30 seconds
setInterval(updateAnalyticsData, 30000);

// Export functions for external use
window.DashboardUtils = {
    formatCurrency,
    formatNumber,
    formatDate,
    updateAnalyticsData,
    addLoadingState,
    removeLoadingState
};

// Console welcome message
console.log('%c🚀 SaaS Admin Dashboard Loaded Successfully!', 'color: #007bff; font-size: 16px; font-weight: bold;');
console.log('%cBuilt with Bootstrap 5, Chart.js, and modern CSS', 'color: #6c757d; font-size: 12px;');