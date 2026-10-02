import React, { useEffect, useState } from 'react';

const LetsTalkSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`ltk-cta-section ${isVisible ? 'ltk-visible' : ''}`} id="ltk-contact-cta">
      {/* Animated Background Elements */}
      <div className="ltk-animated-bg">
        <div className="ltk-particle ltk-particle-1"></div>
        <div className="ltk-particle ltk-particle-2"></div>
        <div className="ltk-particle ltk-particle-3"></div>
        <div className="ltk-particle ltk-particle-4"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="ltk-floating-elements">
        <div className="ltk-float-element ltk-float-element-1"></div>
        <div className="ltk-float-element ltk-float-element-2"></div>
        <div className="ltk-float-element ltk-float-element-3"></div>
        <div className="ltk-float-element ltk-float-element-4"></div>
      </div>
      
      <div className="ltk-container">
        <div className="ltk-content-wrapper">
          <h6 className="ltk-subtitle">Ready to Transform Your Digital Presence?</h6>
          <h2 className="ltk-title">
            <span className="ltk-highlight">Let's Build</span> Something Amazing Together
          </h2>
          {/* <p className="ltk-description">
            Partner with us to create cutting-edge digital solutions that drive results and exceed expectations.
          </p> */}
          
          <div className="ltk-button-group">
            <a href="tel:+91223344555656" className="ltk-btn ltk-btn-primary">
              <svg className="ltk-btn-icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1z"/>
              </svg>
              <span className="ltk-btn-text">+91 22 3344 5556</span>
            </a>
            <a href="#contact" className="ltk-btn ltk-btn-secondary">
              <svg className="ltk-btn-icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <span className="ltk-btn-text">Start Your Project</span>
            </a>
          </div>

          {/* Trust Indicators */}
          {/* <div className="ltk-trust-indicators">
            <div className="ltk-trust-item">
              <div className="ltk-trust-number">150+</div>
              <div className="ltk-trust-label">Projects Delivered</div>
            </div>
            <div className="ltk-trust-item">
              <div className="ltk-trust-number">98%</div>
              <div className="ltk-trust-label">Client Satisfaction</div>
            </div>
            <div className="ltk-trust-item">
              <div className="ltk-trust-number">24/7</div>
              <div className="ltk-trust-label">Support</div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default LetsTalkSection;