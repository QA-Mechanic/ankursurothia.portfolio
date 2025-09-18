import React from 'react';

export default function ThemeSwitcher({ currentTheme, setTheme }) {
  return (
    <div className="theme-switcher">
      <span>Theme: </span>
      <button onClick={() => setTheme('light')}>Light</button>
      <button onClick={() => setTheme('dark')}>Dark</button>
      <button onClick={() => setTheme('vibrant')}>Vibrant</button>
    </div>
  );
}