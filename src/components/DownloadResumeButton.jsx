import React from 'react';

export default function DownloadResumeButton() {
  return (
    <div className="download-resume">
      <a 
        href={require('../assets/ankur_resume.pdf')} 
        download="Ankur_Surothia_Resume.pdf"
        className="download-btn"
      >
        <svg className="icon" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
          <path d="M12 16l-4-4h3V8h2v4h3l-4 4z"/>
          <path d="M19 18H5v2h14v-2z"/>
        </svg>
        Download Resume
      </a>
    </div>
  );
}