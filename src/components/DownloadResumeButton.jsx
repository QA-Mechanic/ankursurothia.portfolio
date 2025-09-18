import React from 'react';

export default function DownloadResumeButton() {
  return (
    <div className="download-resume">
      <a href="/assets/ankur_resume.pdf" download>
        <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 16.5l4.5-4.5h-3v-7h-3v7h-3z"/>
          <path d="M5 18h14v2H5z" />
        </svg>
        Download Resume
      </a>
    </div>
  );
}