import React, { useState } from 'react';
import './ContactSection.css';

export default function ContactSection() {
  const [expanded, setExpanded] = useState(false);
  const [copiedField, setCopiedField] = useState(null);

  const contactInfo = [
    {
      icon: "✉️",
      label: "Email",
      value: "ankur.surethia@gmail.com",
      href: "mailto:ankur.surethia@gmail.com",
      copyable: true
    },
    {
      icon: "📱",
      label: "Mobile",
      value: "07404045999",
      href: "tel:07404045999",
      copyable: true
    },
    {
      icon: "📍",
      label: "Location",
      value: "London, UK",
      href: "https://maps.google.com/?q=London,UK",
      copyable: false
    },
    {
      icon: "💼",
      label: "LinkedIn",
      value: "View Profile",
      href: "https://linkedin.com/in/your-profile",
      copyable: false
    }
  ];

  const copyToClipboard = async (text, field) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className="contact-section">
      <div className="section-header" onClick={() => setExpanded(!expanded)}>
        <div className="header-content">
          <div className="icon-wrapper">
            <span className={`expand-icon ${expanded ? 'expanded' : ''}`}>
              {expanded ? "▼" : "▶"}
            </span>
            <div className="contact-icon">🤝</div>
          </div>
          <h2 className="section-title">
            Let's Connect
            <span className="availability-badge">Available</span>
          </h2>
        </div>
        <div className="header-glow"></div>
      </div>

      <div className={`content-container ${expanded ? 'expanded' : ''}`}>
        <div className="contact-grid">
          {contactInfo.map((contact, idx) => (
            <div 
              key={idx} 
              className="contact-item"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="contact-icon-wrapper">
                <span className="contact-emoji">{contact.icon}</span>
              </div>
              
              <div className="contact-details">
                <label className="contact-label">{contact.label}</label>
                <div className="contact-value-wrapper">
                  <a 
                    href={contact.href} 
                    className="contact-value"
                    target={contact.href.startsWith('http') ? '_blank' : '_self'}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  >
                    {contact.value}
                  </a>
                  
                  {contact.copyable && (
                    <button
                      className={`copy-btn ${copiedField === contact.label ? 'copied' : ''}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        copyToClipboard(contact.value, contact.label);
                      }}
                      title={`Copy ${contact.label}`}
                    >
                      {copiedField === contact.label ? '✓' : '📋'}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="contact-cta">
          <p className="cta-text">Ready to discuss your next project?</p>
          <a href="mailto:ankur.surethia@gmail.com" className="cta-button">
            <span className="button-text">Start a Conversation</span>
            <span className="button-icon">💬</span>
          </a>
        </div>
      </div>
    </div>
  );
}
