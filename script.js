// SaaS Admin Dashboard JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initializeSidebar();
    initializeCharts();
    initializeModals();
    initializeDropdowns();
    initializeAnimations();
});

// Sidebar Toggle Functionality
function initializeSidebar() {
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('mainContent');
    
    if (sidebarToggle && sidebar) {
        sidebarToggle.addEventListener('click', function() {
            sidebar.classList.toggle('show');
            
            // Add overlay for mobile
            if (sidebar.classList.contains('show')) {
                addOverlay();
            } else {
                removeOverlay();
            }
        });
    }
    
    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 991.98) {
            if (!sidebar.contains(e.target) && !sidebarToggle.contains(e.target)) {
                sidebar.classList.remove('show');
                removeOverlay();
            }
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 991.98) {
            sidebar.classList.remove('show');
            removeOverlay();
        }
    });
}

// Overlay functions for mobile sidebar
function addOverlay() {
    if (!document.getElementById('sidebarOverlay')) {
        const overlay = document.createElement('div');
        overlay.id = 'sidebarOverlay';
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            z-index: 999;
            opacity: 0;
            transition: opacity 0.3s ease;
        `;
        document.body.appendChild(overlay);
        
        setTimeout(() => {
            overlay.style.opacity = '1';
        }, 10);
        
        overlay.addEventListener('click', function() {
            document.getElementById('sidebar').classList.remove('show');
            removeOverlay();
        });
    }
}

function removeOverlay() {
    const overlay = document.getElementById('sidebarOverlay');
    if (overlay) {
        overlay.style.opacity = '0';
        setTimeout(() => {
            overlay.remove();
        }, 300);
    }
}

// Initialize Charts
function initializeCharts() {
    // Revenue Line Chart
    const revenueChartCtx = document.getElementById('revenueChart');
    if (revenueChartCtx) {
        const revenueChart = new Chart(revenueChartCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [{
                    label: 'Revenue',
                    data: [30000, 35000, 32000, 40000, 45000, 42000, 48000, 52000, 49000, 55000, 58000, 62000],
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
    
    // Revenue Pie Chart
    const revenuePieChartCtx = document.getElementById('revenuePieChart');
    if (revenuePieChartCtx) {
        const revenuePieChart = new Chart(revenuePieChartCtx, {
            type: 'doughnut',
            data: {
                labels: ['Direct', 'Social', 'Referral'],
                datasets: [{
                    data: [55, 30, 15],
                    backgroundColor: [
                        '#007bff',
                        '#28a745',
                        '#17a2b8'
                    ],
                    borderWidth: 0,
                    hoverBorderWidth: 3,
                    hoverBorderColor: '#ffffff'
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
                cutout: '70%'
            }
        });
    }
}

// Initialize Modals
function initializeModals() {
    // Add User Modal
    const addUserModal = document.getElementById('addUserModal');
    if (addUserModal) {
        addUserModal.addEventListener('show.bs.modal', function() {
            // Reset form when modal opens
            const form = addUserModal.querySelector('form');
            if (form) {
                form.reset();
            }
        });
        
        // Handle form submission
        const addUserBtn = addUserModal.querySelector('.btn-primary');
        if (addUserBtn) {
            addUserBtn.addEventListener('click', function() {
                const userName = document.getElementById('userName').value;
                const userEmail = document.getElementById('userEmail').value;
                const userRole = document.getElementById('userRole').value;
                
                if (userName && userEmail) {
                    // Simulate form submission
                    showNotification('User added successfully!', 'success');
                    
                    // Close modal
                    const modal = bootstrap.Modal.getInstance(addUserModal);
                    modal.hide();
                } else {
                    showNotification('Please fill in all required fields.', 'error');
                }
            });
        }
    }
    
    // Create Order Modal
    const createOrderModal = document.getElementById('createOrderModal');
    if (createOrderModal) {
        createOrderModal.addEventListener('show.bs.modal', function() {
            // Reset form when modal opens
            const form = createOrderModal.querySelector('form');
            if (form) {
                form.reset();
            }
        });
        
        // Handle form submission
        const createOrderBtn = createOrderModal.querySelector('.btn-success');
        if (createOrderBtn) {
            createOrderBtn.addEventListener('click', function() {
                const customerName = document.getElementById('customerName').value;
                const productName = document.getElementById('productName').value;
                const orderAmount = document.getElementById('orderAmount').value;
                
                if (customerName && productName && orderAmount) {
                    // Simulate form submission
                    showNotification('Order created successfully!', 'success');
                    
                    // Close modal
                    const modal = bootstrap.Modal.getInstance(createOrderModal);
                    modal.hide();
                } else {
                    showNotification('Please fill in all required fields.', 'error');
                }
            });
        }
    }
}

// Initialize Dropdowns
function initializeDropdowns() {
    // Add click outside to close dropdowns
    document.addEventListener('click', function(e) {
        const dropdowns = document.querySelectorAll('.dropdown-menu.show');
        dropdowns.forEach(dropdown => {
            if (!dropdown.contains(e.target) && !dropdown.previousElementSibling.contains(e.target)) {
                dropdown.classList.remove('show');
            }
        });
    });
}

// Initialize Animations
function initializeAnimations() {
    // Animate cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Notification System
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        color: white;
        font-weight: 600;
        z-index: 9999;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    `;
    
    // Set background color based on type
    const colors = {
        success: '#28a745',
        error: '#dc3545',
        warning: '#ffc107',
        info: '#17a2b8'
    };
    notification.style.backgroundColor = colors[type] || colors.info;
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 10);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
    
    // Click to dismiss
    notification.addEventListener('click', function() {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    });
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

// Add loading states to buttons
function addLoadingState(button, text = 'Loading...') {
    const originalText = button.innerHTML;
    button.innerHTML = `<span class="loading"></span> ${text}`;
    button.disabled = true;
    
    return function() {
        button.innerHTML = originalText;
        button.disabled = false;
    };
}

// Simulate data updates
function updateDashboardData() {
    // Update analytics cards with random data
    const userCount = document.querySelector('.border-left-primary .h5');
    const revenueCount = document.querySelector('.border-left-success .h5');
    const orderCount = document.querySelector('.border-left-info .h5');
    const taskCount = document.querySelector('.border-left-warning .h5');
    
    if (userCount) {
        const currentUsers = parseInt(userCount.textContent.replace(/,/g, ''));
        const newUsers = currentUsers + Math.floor(Math.random() * 10);
        userCount.textContent = formatNumber(newUsers);
    }
    
    if (revenueCount) {
        const currentRevenue = parseInt(revenueCount.textContent.replace(/[$,]/g, ''));
        const newRevenue = currentRevenue + Math.floor(Math.random() * 1000);
        revenueCount.textContent = formatCurrency(newRevenue);
    }
    
    if (orderCount) {
        const currentOrders = parseInt(orderCount.textContent.replace(/,/g, ''));
        const newOrders = currentOrders + Math.floor(Math.random() * 5);
        orderCount.textContent = formatNumber(newOrders);
    }
    
    if (taskCount) {
        const currentTasks = parseInt(taskCount.textContent);
        const newTasks = Math.max(0, currentTasks - Math.floor(Math.random() * 3));
        taskCount.textContent = newTasks;
    }
}

// Auto-update data every 30 seconds
setInterval(updateDashboardData, 30000);

// Add keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + K to toggle sidebar
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const sidebar = document.getElementById('sidebar');
        const sidebarToggle = document.getElementById('sidebarToggle');
        if (sidebar && sidebarToggle) {
            sidebarToggle.click();
        }
    }
    
    // Escape to close modals
    if (e.key === 'Escape') {
        const openModals = document.querySelectorAll('.modal.show');
        openModals.forEach(modal => {
            const modalInstance = bootstrap.Modal.getInstance(modal);
            if (modalInstance) {
                modalInstance.hide();
            }
        });
    }
});

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});