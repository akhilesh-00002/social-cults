import React, { useState, useEffect } from 'react';


// Import all images properly
import logo1 from "../../assets/image/1.png";
import logo2 from "../../assets/image/2.jpg";
import logo3 from "../../assets/image/3.jpg";
import logo4 from "../../assets/image/4.jpg";
import logo5 from "../../assets/image/5.jpg";
import logo6 from "../../assets/image/6.jpg";
import logo7 from "../../assets/image/7.jpg";
import logo8 from "../../assets/image/8.jpg";
import logo9 from "../../assets/image/9.jpg";
import logo10 from "../../assets/image/10.jpg";
import logo11 from "../../assets/image/11.jpg";
import logo12 from "../../assets/image/12.jpg";
import logo13 from "../../assets/image/13.jpg";
import logo14 from "../../assets/image/14.jpg";

const Slider = () => {
  const [loadedImages, setLoadedImages] = useState({});

  const logos = [
    { id: 1, src: logo1, alt: "Digital Marketing", category: "Marketing" },
    { id: 2, src: logo2, alt: "SEO Services", category: "SEO" },
    { id: 3, src: logo3, alt: "Social Media Marketing", category: "Social Media" },
    { id: 4, src: logo4, alt: "PPC Advertising", category: "Advertising" },
    { id: 5, src: logo5, alt: "Web Development", category: "Development" },
    { id: 6, src: logo6, alt: "Email Marketing", category: "Marketing" },
    { id: 7, src: logo7, alt: "Content Marketing", category: "Content" },
    { id: 8, src: logo8, alt: "Video Marketing", category: "Video" },
    { id: 9, src: logo9, alt: "Online Reputation Management", category: "Reputation" },
    { id: 10, src: logo10, alt: "Branding Services", category: "Branding" },
    { id: 11, src: logo11, alt: "Lead Generation", category: "Leads" },
    { id: 12, src: logo12, alt: "Digital Strategy Consulting", category: "Strategy" },
    { id: 13, src: logo13, alt: "Local SEO", category: "SEO" },
    { id: 14, src: logo14, alt: "Conversion Rate Optimization", category: "CRO" }
  ];

  const handleImageLoad = (id) => {
    setLoadedImages(prev => ({ ...prev, [id]: true }));
  };

  return (
    <div className="slider-section">
    
      
      <div className="slider-container">
        <div className="slider">
          <div className="slide-track">
            {/* First set of logos */}
            {logos.map(logo => (
              <div className="slide" key={logo.id}>
                <div className="logo-card">
                  <div className="logo-image-container">
                    <img 
                      src={logo.src} 
                      alt={logo.alt}
                      className={`logo-image ${loadedImages[logo.id] ? 'loaded' : 'loading'}`}
                      onLoad={() => handleImageLoad(logo.id)}
                      loading="eager" // Changed to eager for above-the-fold content
                    />
                    {!loadedImages[logo.id] && (
                      <div className="image-placeholder">
                        <div className="placeholder-spinner"></div>
                      </div>
                    )}
                  </div>
                  <div className="logo-content">
                    <span className="logo-category">{logo.category}</span>
                    <h4 className="logo-title">{logo.alt}</h4>
                  </div>
                  <div className="logo-hover-effect">
                    <div className="hover-shine"></div>
                  </div>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {logos.map(logo => (
              <div className="slide" key={`duplicate-${logo.id}`}>
                <div className="logo-card">
                  <div className="logo-image-container">
                    <img 
                      src={logo.src} 
                      alt={logo.alt}
                      className={`logo-image ${loadedImages[logo.id] ? 'loaded' : 'loading'}`}
                      onLoad={() => handleImageLoad(logo.id)}
                      loading="eager"
                    />
                    {!loadedImages[logo.id] && (
                      <div className="image-placeholder">
                        <div className="placeholder-spinner"></div>
                      </div>
                    )}
                  </div>
                  <div className="logo-content">
                    <span className="logo-category">{logo.category}</span>
                    <h4 className="logo-title">{logo.alt}</h4>
                  </div>
                  <div className="logo-hover-effect">
                    <div className="hover-shine"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Gradient overlays */}
      <div className="slider-gradient left-gradient"></div>
      <div className="slider-gradient right-gradient"></div>
      
      {/* Floating particles */}
      <div className="floating-particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>
    </div>
  );
};

export default Slider;