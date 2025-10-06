import React from 'react';
import './LoadingStates.css';

export function PageLoader() {
  return (
    <div className="page-loader">
      <div className="loader-content">
        <div className="loader-animation">
          <div className="loader-ring"></div>
          <div className="loader-ring"></div>
          <div className="loader-ring"></div>
        </div>
        <h2 className="loader-text">Loading Portfolio...</h2>
        <div className="loader-progress">
          <div className="progress-bar"></div>
        </div>
      </div>
    </div>
  );
}

export function SectionLoader({ message = "Loading..." }) {
  return (
    <div className="section-loader">
      <div className="section-spinner">
        <div className="spinner-dot"></div>
        <div className="spinner-dot"></div>
        <div className="spinner-dot"></div>
      </div>
      <p className="section-loader-text">{message}</p>
    </div>
  );
}

export function ImageLoader({ src, alt, className, ...props }) {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  return (
    <div className={`image-container ${className || ''}`}>
      {loading && !error && (
        <div className="image-skeleton">
          <div className="skeleton-animation"></div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`${loading ? 'image-loading' : 'image-loaded'} ${error ? 'image-error' : ''}`}
        onLoad={() => setLoading(false)}
        onError={() => {
          setLoading(false);
          setError(true);
        }}
        {...props}
      />
      {error && (
        <div className="image-error-placeholder">
          <span>⚠️</span>
          <p>Image failed to load</p>
        </div>
      )}
    </div>
  );
}