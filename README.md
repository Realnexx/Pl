# SaaS Admin Dashboard

A modern, responsive SaaS admin dashboard built with HTML, CSS, Bootstrap 5, and JavaScript. Features a clean blue and orange color theme with modern UI/UX principles.

## 🚀 Features

### Layout & Navigation
- **Fixed Top Navbar**: Professional navigation with brand logo and user profile
- **Collapsible Sidebar**: Responsive sidebar with icons and labels
- **Mobile-Friendly**: Fully responsive design that works on all devices
- **Smooth Animations**: Modern hover effects and transitions

### Dashboard Components
- **Analytics Cards**: Display key metrics (Users, Revenue, Orders, Tasks)
- **Interactive Charts**: 
  - Line chart for revenue overview
  - Doughnut chart for revenue sources
- **Recent Activity Table**: Real-time user activity feed
- **Quick Actions**: Fast access to common tasks

### Interactive Elements
- **Dropdown Menus**: Notifications and profile dropdowns
- **Modal Dialogs**: Add User and Create Order forms
- **Responsive Tables**: Hover effects and clean styling
- **Form Validation**: Client-side validation with notifications

### Modern UI/UX Features
- **Clean Color Scheme**: Blue and orange theme with gradients
- **Shadow Effects**: Subtle shadows for depth and modern look
- **Hover Animations**: Smooth transitions and micro-interactions
- **Loading States**: Visual feedback for user actions
- **Keyboard Shortcuts**: Ctrl+K to toggle sidebar, Escape to close modals

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **Bootstrap 5.3.2**: Latest version for responsive components
- **Bootstrap Icons**: Beautiful icon library
- **Chart.js**: Interactive charts and graphs
- **Vanilla JavaScript**: No framework dependencies

## 📱 Responsive Design

The dashboard is fully responsive and optimized for:
- **Desktop**: Full sidebar and expanded layout
- **Tablet**: Collapsible sidebar with touch-friendly interface
- **Mobile**: Hamburger menu with overlay sidebar

## 🎨 Color Theme

- **Primary Blue**: #007bff (Main brand color)
- **Secondary Blue**: #0056b3 (Darker blue for gradients)
- **Accent Orange**: #fd7e14 (Call-to-action and highlights)
- **Light Orange**: #ff8c42 (Hover states and accents)
- **Neutral Grays**: Various shades for text and backgrounds

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No server required - runs entirely in the browser

### Installation
1. Clone or download the project files
2. Open `index.html` in your web browser
3. The dashboard will load immediately with all features

### File Structure
```
├── index.html          # Main HTML file
├── styles.css          # Custom CSS styles
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🎯 Usage

### Navigation
- **Sidebar Toggle**: Click the hamburger menu on mobile or use Ctrl+K
- **Profile Menu**: Click your profile picture in the top-right
- **Notifications**: Click the bell icon to view notifications

### Dashboard Features
- **Analytics Cards**: View key metrics at a glance
- **Charts**: Interactive charts with hover tooltips
- **Recent Activity**: Monitor user actions in real-time
- **Quick Actions**: Fast access to common tasks

### Modals
- **Add User**: Click "Add User" button to open user creation form
- **Create Order**: Click "Create Order" button to open order form
- **Form Validation**: All forms include client-side validation

## 🎨 Customization

### Colors
Modify the CSS custom properties in `styles.css`:
```css
:root {
    --primary-blue: #007bff;
    --secondary-blue: #0056b3;
    --accent-orange: #fd7e14;
    --light-orange: #ff8c42;
    /* ... other colors */
}
```

### Layout
- Adjust sidebar width by changing `--sidebar-width`
- Modify navbar height with `--navbar-height`
- Update spacing and shadows as needed

### Charts
Edit chart data and options in `script.js`:
```javascript
// Revenue chart data
data: [30000, 35000, 32000, 40000, 45000, 42000, 48000, 52000, 49000, 55000, 58000, 62000]

// Pie chart data
data: [55, 30, 15] // Direct, Social, Referral percentages
```

## 🔧 Browser Support

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For questions or support, please open an issue in the repository.

---

**Built with ❤️ using modern web technologies**