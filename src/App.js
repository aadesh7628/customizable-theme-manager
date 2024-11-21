import React from 'react';
import { ThemeProvider } from './hooks/useTheme';
import { ThemeToggle } from './components/ThemeToggle';
import { Palette, Github } from 'lucide-react';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <ThemeToggle />
        
        <main className="container">
          <div className="content">
            <div className="header">
              <Palette className="header-icon" />
              <h1>Theme Manager</h1>
            </div>

            <div className="sections">
              <section className="card">
                <h2>Welcome to Theme Manager</h2>
                <p>
                  This is a demonstration of a theme manager that supports both light and dark modes.
                  Your preference is automatically saved and will persist across page reloads.
                </p>
              </section>

              <section className="card">
                <h2>Features</h2>
                <ul className="feature-list">
                  <li>
                    <span className="bullet"></span>
                    Automatic theme detection based on system preferences
                  </li>
                  <li>
                    <span className="bullet"></span>
                    Persistent theme selection using localStorage
                  </li>
                  <li>
                    <span className="bullet"></span>
                    Smooth transition effects between themes
                  </li>
                  <li>
                    <span className="bullet"></span>
                    Responsive and accessible design
                  </li>
                </ul>
              </section>

              <section className="card">
                <h2>Try It Out</h2>
                <p>
                  Click the theme toggle button in the top-right corner to switch between light and dark modes.
                  Your selection will be remembered the next time you visit.
                </p>
                <div className="sample-container">
                  <div className="sample-box">
                    <p>Light theme sample</p>
                  </div>
                  <div className="sample-box">
                    <p>Dark theme sample</p>
                  </div>
                </div>
              </section>

              <section className="card github-card">
                <h2>GitHub Repository</h2>
                <p>
                  Check out the source code and contribute to this project on GitHub!
                </p>
                <a 
                  href="https://github.com/aadesh7628/customizable-theme-manager" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  <Github className="github-icon" />
                  <span>View on GitHub</span>
                </a>
              </section>
            </div>
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;