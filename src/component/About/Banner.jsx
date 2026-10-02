// AboutUsBanner.jsx
import React from 'react';
;

const AboutUsBanner = () => {
  return (
    <section className="about-banner">
      <div className="banner-container">
        <div className="banner-content">
          <div className="banner-text">
            <div className="breadcrumb">
              <span>Home</span>
              <span className="separator">/</span>
              <span className="current">About Us</span>
            </div>
            
            <h1 className="about-heading">
              ABOUT <span className="highlight">OUR COMPANY</span>
            </h1>
            
            <p className="about-subtitle">
              Crafting Digital Excellence Since 2010
            </p>
            
            <p className="about-description">
              We are a passionate team of innovators, creators, and problem-solvers 
              dedicated to delivering exceptional digital experiences that drive real 
              business results and transform brands for the modern era.
            </p>
            
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">14+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">500+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">98%</div>
                <div className="stat-label">Client Satisfaction</div>
              </div>
            </div>
            
            <div className="banner-actions">
              <button className="btn btn-primary">
                Our Story
              </button>
              <button className="btn btn-secondary">
                Meet The Team
              </button>
            </div>
          </div>
          
          <div className="banner-visual">
            <div className="image-container">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=700&q=80" 
                alt="Our professional team collaborating in modern office" 
                className="banner-image"
              />
              <div className="image-overlay"></div>
              
              {/* Floating achievement badges */}
              <div className="floating-badge badge-1">
                <div className="badge-icon">🏆</div>
                <div className="badge-content">
                  <div className="badge-number">25+</div>
                  <div className="badge-label">Awards</div>
                </div>
              </div>
              
              <div className="floating-badge badge-2">
                <div className="badge-icon">🌍</div>
                <div className="badge-content">
                  <div className="badge-number">50+</div>
                  <div className="badge-label">Countries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="background-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
    </section>
  );
};

export default AboutUsBanner;