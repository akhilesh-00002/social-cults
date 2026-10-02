import React from 'react';

export const Marquee = () => {
  const marqueeItems = [
    { id: 1, text: "Digital Marketing", icon: "🚀" },
    { id: 2, text: "SEO Optimization", icon: "🔍" },
    { id: 3, text: "Social Media Management", icon: "💬" },
    { id: 4, text: "PPC Advertising", icon: "📈" },
    { id: 5, text: "Web Development", icon: "💻" },
    { id: 6, text: "Content Marketing", icon: "📝" },
    { id: 7, text: "Brand Strategy", icon: "🎯" },
    { id: 8, text: "Email Marketing", icon: "✉️" }
  ];

  const trustedBrands = [
    { id: 1, name: "Google Partner", icon: "🔵" },
    { id: 2, name: "Meta Certified", icon: "🔷" },
    { id: 3, name: "Award Winning", icon: "🏆" },
    { id: 4, name: "15+ Years Exp", icon: "⭐" },
    { id: 5, name: "1500+ Projects", icon: "✅" },
    { id: 6, name: "24/7 Support", icon: "🛡️" }
  ];

  return (
    <div className="marquee-section-modern">
      {/* Top Marquee - Services */}
      <div className="marquee-container-modern">
        <div className="marquee-track-modern">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <div key={`${item.id}-${index}`} className="marquee-item-modern">
              <span className="marquee-icon">{item.icon}</span>
              <span className="marquee-text">{item.text}</span>
              <div className="marquee-dot">•</div>
            </div>
          ))}
        </div>
      </div>

      {/* Middle Spacer with CTA */}
      <div className="marquee-cta-modern">
        <div className="cta-content">
          <span className="cta-badge">Trusted By 1500+ Businesses</span>
          <h3 className="cta-title">Ready to Boost Your Growth?</h3>
          <a href="#contact" className="cta-button">Start Your Project</a>
        </div>
      </div>

      {/* Bottom Marquee - Trust Badges */}
      <div className="marquee-container-modern marquee-bottom">
        <div className="marquee-track-modern marquee-reverse">
          {[...trustedBrands, ...trustedBrands].map((item, index) => (
            <div key={`brand-${item.id}-${index}`} className="marquee-brand-item">
              <span className="brand-icon">{item.icon}</span>
              <span className="brand-text">{item.name}</span>
              <div className="brand-separator">|</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const LogoMarquee = () => {
  const clientLogos = [
    { id: 1, name: "Client 1", placeholder: "CLIENT 1" },
    { id: 2, name: "Client 2", placeholder: "CLIENT 2" },
    { id: 3, name: "Client 3", placeholder: "CLIENT 3" },
    { id: 4, name: "Client 4", placeholder: "CLIENT 4" },
    { id: 5, name: "Client 5", placeholder: "CLIENT 5" },
    { id: 6, name: "Client 6", placeholder: "CLIENT 6" }
  ];

  return (
    <div className="logo-marquee-section">
      <div className="logo-marquee-header">
        <h3>Trusted by Industry Leaders</h3>
        <p>Join 1500+ satisfied clients who trust our expertise</p>
      </div>
      
      <div className="logo-marquee-container">
        <div className="logo-marquee-track">
          {[...clientLogos, ...clientLogos].map((logo, index) => (
            <div key={`logo-${logo.id}-${index}`} className="logo-item">
              <div className="logo-placeholder">
                {logo.placeholder}
              </div>
              <span className="logo-name">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Marquee;