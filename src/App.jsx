import React, { useState } from 'react';
import ProfileHeader from './components/ProfileHeader';
import ResumeSection from './components/ResumeSection';
import PortfolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection';
import PingPongGame from './components/PingPongGame';
import TestimonialsSection from './components/TestimonialsSection';
import ThemeSwitcher from './components/ThemeSwitcher';
import DownloadResumeButton from './components/DownloadResumeButton';
import BlogSection from './components/BlogSection';
import EasterEgg from './components/EasterEgg';
import './styles.css';

function App() {
  const [theme, setTheme] = useState('vibrant'); // default theme

  return (
    <div className={`main-bg theme-${theme}`}>
      <ThemeSwitcher currentTheme={theme} setTheme={setTheme} />
      <ProfileHeader />
      <DownloadResumeButton />
      <ResumeSection />
      <PortfolioSection />
      <ContactSection />
      <TestimonialsSection />
      <BlogSection />
      <PingPongGame />
      <EasterEgg />
    </div>
  );
}

export default App;