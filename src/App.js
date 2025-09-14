import React from 'react';
import ProfileHeader from './components/ProfileHeader';
import ResumeSection from './components/ResumeSection';
import PortfolioSection from './components/PortfolioSection';
import TestimonialsSection from './components/TestimonialsSection';
import BlogSection from './components/BlogSection';
import ContactSection from './components/ContactSection';
import DownloadResumeButton from './components/DownloadResumeButton';
import './styles.css';

function App() {
  return (
    <div className="main-bg">
      <div className="topbar">
        <div className="social-links">
          <a href="https://github.com/QA-Mechanic" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            {/* GitHub SVG */}
            <svg className="icon" width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.07 3.29 9.36 7.86 10.87.58.11.79-.25.79-.56
              0-.27-.01-1.15-.01-2.09-3.2.7-3.88-1.39-3.88-1.39-.53-1.36-1.3-1.72-1.3-1.72-1.06-.72
              .08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.76.41-1.27.75-1.56
              -2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .98-.31
              3.21 1.18a11.17 11.17 0 012.93-.39c.99.01 1.99.13 2.93.39 2.22-1.49 3.2-1.18 3.2-1.18.63
              1.59.23 2.77.11 3.06.74.8 1.19 1.83 1.19 3.09 0 4.43-2.69 5.41-5.25 5.7.42.36.79 1.08.79
              2.18 0 1.58-.01 2.86-.01 3.25 0 .31.21.67.8.56C20.71 21.36 24 17.07 24 12c0-6.27-5.23-11.5-12-11.5z"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/ankur-surothia/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            {/* LinkedIn SVG */}
            <svg className="icon" width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24
              5-5v-14c0-2.76-2.24-5-5-5zm-11.28 20.48h-3.12v-10.52h3.12v10.52zm-1.56-12.04c-.99
              0-1.8-.81-1.8-1.8s.81-1.8 1.8-1.8c.99 0 1.8.81 1.8 1.8s-.81 1.8-1.8 1.8zm14.04
              12.04h-3.12v-5.5c0-1.31-.03-3-1.83-3-1.83 0-2.11 1.43-2.11 2.91v5.59h-3.12v-10.52h2.99v1.44h.04c.41-.78
              1.41-1.6 2.9-1.6 3.1 0 3.67 2.04 3.67 4.7v5.98z"/>
            </svg>
          </a>
        </div>
        <DownloadResumeButton />
      </div>
      <div className="fancy-container">
        <ProfileHeader />
        <ResumeSection />
        <PortfolioSection />
        <TestimonialsSection />
        <BlogSection />
        <ContactSection />
      </div>
    </div>
  );
}

export default App;