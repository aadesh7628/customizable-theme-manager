# Customizable Theme Manager 

A modern React application demonstrating theme management with light and dark mode support. This project showcases best practices for implementing theme switching functionality with persistent user preferences.

## Features

- 🌓 Toggle between light and dark themes
- 💾 Persistent theme preferences using localStorage
- 🎨 Smooth transition effects
- 🖥️ System theme detection
- 📱 Fully responsive design
- ♿ Accessibility-friendly

## Technology Stack

- React
- CSS
- Lucide Icons

## Getting Started

1. Clone the repository
   ```bash
   git clone https://github.com/aadesh7628/customizable-theme-manager.git
   cd customizable-theme-manager
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure

```
src/
├── components/
│   ├── ThemeToggle.jsx    # Theme toggle button component
│   └── ThemeToggle.css    # Toggle button styles
├── hooks/
│   └── useTheme.jsx       # Custom hook for theme management
├── App.js                 # Main application component
├── App.css                # Application styles
├── index.css              # Global styles
└── index.js               # Application entry point
```

## How It Works

The theme management system is built using React's Context API and localStorage for persistence. The `useTheme` hook provides the current theme state and toggle functionality throughout the application.

Key features:
- Automatic system theme detection on first visit
- Smooth transitions between themes
- Persistent theme selection across sessions
- Accessible theme toggle with keyboard support
