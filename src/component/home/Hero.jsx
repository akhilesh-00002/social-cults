import React, { useState } from 'react';
import rocketImage from '../../assets/image/rocket.png';

export const Hero = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleReadMore = () => {
    setShowMore((prev) => !prev);
  };

  // Professional SVG Icons
  const HappyCustomersIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
    </svg>
  );

  const StarIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
    </svg>
  );

  const PhoneIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"/>
    </svg>
  );

  const TrophyIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2c-1.82 0-3.53.5-5 1.35 2.99 1.73 5 4.95 5 8.65 0 3.7-2.01 6.92-5 8.65 1.47.85 3.18 1.35 5 1.35 5.52 0 10-4.48 10-10S17.52 2 12 2z"/>
    </svg>
  );

  const CheckIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
    </svg>
  );

  return (
    <section className="hero-opposite">
      {/* Background Elements */}
      <div className="hero-bg-opposite">
        <div className="opposite-gradients">
          <div className="opposite-gradient-1"></div>
          <div className="opposite-gradient-2"></div>
          <div className="opposite-gradient-3"></div>
        </div>
        <div className="opposite-shapes">
          <div className="opposite-shape shape-1"></div>
          <div className="opposite-shape shape-2"></div>
          <div className="opposite-shape shape-3"></div>
          <div className="opposite-shape shape-4"></div>
        </div>
      </div>

      <div className="hero-container-opposite">
        <div className="hero-content-opposite">
          {/* Text Content - Left Side */}
          <div className="hero-text-opposite">
            <div className="content-wrapper-opposite">
              <div className="hero-badge-opposite">
                <span className="badge-star-opposite">⭐</span>
                <span className="badge-text-opposite">Premium Digital Agency</span>
              </div>
              
              <h1 className="hero-title-opposite">
                Best Digital Marketing & Social Media Agency in <span className="title-highlight-opposite">Noida - Social Cults</span>
              </h1>

              <div className="welcome-text-opposite">
                Welcome to Social Cults, a trusted performance marketing company in Noida delivering outstanding results through creativity, innovation, and data-driven insights.
              </div>

              <div className="hero-description-opposite">
               
                
                {showMore && (
                  <div className="expanded-content-opposite">
                    <p>
                      We offer a comprehensive range of digital marketing services, including SEO, Social Media Marketing, PPC, Web Development, Email Marketing, and Video Marketing. With expertise in Local SEO, Content Marketing, Lead Generation, and Social Media Advertising, we provide cost-effective solutions tailored to meet your specific business needs.
                    </p>
                    <p>
                      As your trusted partner for Online Marketing and Digital Strategy Consulting, we also specialize in Website Design and Development, catering to both local and global clients. Drive your business growth with our expert services.
                    </p>
                  </div>
                )}
                
                <button className="read-more-btn-opposite" onClick={toggleReadMore}>
                  <span>{showMore ? 'Show Less' : 'Read More'}</span>
                  <span className="btn-arrow-opposite">{showMore ? '↑' : '↓'}</span>
                </button>
              </div>

              {/* Action Buttons - Smaller */}
              <div className="hero-buttons-opposite">
                <a href="/contact" className="btn-opposite btn-primary-opposite">
                  <span className="btn-icon-opposite">
                    <PhoneIcon />
                  </span>
                  Free Consultation
                </a>
                <a href="/projects" className="btn-opposite btn-secondary-opposite">
                  View Portfolio
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="trust-indicators-opposite">
                <div className="trust-item-opposite">
                  <div className="trust-icon-opposite">
                    <CheckIcon />
                  </div>
                  <span>No Upfront Payment</span>
                </div>
                <div className="trust-item-opposite">
                  <div className="trust-icon-opposite">
                    <CheckIcon />
                  </div>
                  <span>Result Guarantee</span>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Section - Right Side */}
          <div className="hero-visual-opposite">
            <div className="visual-container-opposite">
              {/* Main Image Container */}
              <div className="main-visual-opposite">
                <div className="image-frame-opposite">
                  <img 
                    src={rocketImage} 
                    alt="Digital Marketing Excellence - Social Cults" 
                    className="hero-image-opposite" 
                  />
                  <div className="image-glow-opposite"></div>
                </div>
                
                {/* Animated Orbit Elements */}
                <div className="orbit-ring-opposite orbit-1-opposite">
                  <div className="orbit-item-opposite item-1-opposite">
                    <div className="orbit-icon-opposite">📈</div>
                  </div>
                </div>
                <div className="orbit-ring-opposite orbit-2-opposite">
                  <div className="orbit-item-opposite item-2-opposite">
                    <div className="orbit-icon-opposite">🎨</div>
                  </div>
                </div>
                <div className="orbit-ring-opposite orbit-3-opposite">
                  <div className="orbit-item-opposite item-3-opposite">
                    <div className="orbit-icon-opposite">🔧</div>
                  </div>
                </div>
              </div>

              {/* Floating Achievement Cards - Smaller and Better Positioned */}
              <div className="achievement-card-opposite card-left-opposite">
                <div className="achievement-content-opposite">
                  <div className="achievement-icon-opposite">
                    <HappyCustomersIcon />
                  </div>
                  <div className="achievement-text-opposite">
                    <div className="achievement-number-opposite">1.5K+</div>
                    <div className="achievement-label-opposite">Happy Customers</div>
                  </div>
                </div>
              </div>

              <div className="achievement-card-opposite card-right-opposite">
                <div className="achievement-content-opposite">
                  <div className="achievement-icon-opposite rating-opposite">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                  </div>
                  <div className="achievement-text-opposite">
                    <div className="achievement-number-opposite">4.9/5</div>
                    <div className="achievement-label-opposite">Client Rating</div>
                  </div>
                </div>
              </div>

              <div className="achievement-card-opposite card-bottom-opposite">
                <div className="achievement-content-opposite">
                  <div className="achievement-icon-opposite">
                    <TrophyIcon />
                  </div>
                  <div className="achievement-text-opposite">
                    <div className="achievement-number-opposite">50+</div>
                    <div className="achievement-label-opposite">Awards Won</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;