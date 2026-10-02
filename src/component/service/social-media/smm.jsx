import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import social1 from "../../../assets/image/m1.png";
import social2 from "../../../assets/image/T1.png";
import social3 from "../../../assets/image/T2.png";
import social4 from "../../../assets/image/T3.png";
import social5 from "../../../assets/image/k1.jpg";
import social6 from "../../../assets/image/C1.png";
import social7 from "../../../assets/image/L1.jpg";



const SocialMediaMarketing = () => {
  const [activePlatform, setActivePlatform] = useState('instagram');
  const [isVisible, setIsVisible] = useState(false);
  const [metrics, setMetrics] = useState({
    reach: 0,
    engagement: 0,
    conversions: 0,
    growth: 0
  });

  const navigate = useNavigate();
  const observerRefs = useRef([]);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);

    // Animate metrics counter
    const animateMetrics = () => {
      let reach = 0;
      let engagement = 0;
      let conversions = 0;
      let growth = 0;
      
      const interval = setInterval(() => {
        if (reach < 2.5) reach += 0.1;
        if (engagement < 87) engagement += 2;
        if (conversions < 45) conversions += 1;
        if (growth < 320) growth += 8;
        
        setMetrics({
          reach: parseFloat(reach.toFixed(1)),
          engagement,
          conversions,
          growth
        });

        if (reach >= 2.5 && engagement >= 87 && conversions >= 45 && growth >= 320) {
          clearInterval(interval);
        }
      }, 50);
    };

    animateMetrics();

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('smm-animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    observerRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Social Media Icons
  const SocialIcons = {
    Instagram: () => (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
    Facebook: () => (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
    Twitter: () => (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
      </svg>
    ),
    LinkedIn: () => (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
 
    Analytics: () => 
      (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    Strategy: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    Content: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    Engagement: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
      </svg>
    ),
    Growth: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    Check: () => (
      <svg viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
    ),
    Arrow: () => (
      <svg viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    ),
    Users: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
      </svg>
    )
  };

  const platforms = [
    {
      id: 'instagram',
      name: 'Instagram',
      icon: SocialIcons.Instagram,
      color: '#E1306C',
      stats: {
        followers: '125K+',
        engagement: '4.8%',
        reach: '2.5M'
      }
    },
    {
      id: 'facebook',
      name: 'Facebook',
      icon: SocialIcons.Facebook,
      color: '#1877F2',
      stats: {
        followers: '89K+',
        engagement: '3.2%',
        reach: '1.8M'
      }
    },
    {
      id: 'twitter',
      name: 'Twitter',
      icon: SocialIcons.Twitter,
      color: '#1DA1F2',
      stats: {
        followers: '45K+',
        engagement: '2.1%',
        reach: '850K'
      }
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      icon: SocialIcons.LinkedIn,
      color: '#0077B5',
      stats: {
        followers: '32K+',
        engagement: '1.8%',
        reach: '420K'
      }
    },
 
    
  ];

  const clients = [
    {
      id: 1,
      name: 'Truvie Ayurveda',
      industry: 'Health & Wellness',
      logo: social4,
      results: {
        followers: '+15K',
        engagement: '+320%',
        reach: '+2.4M'
      },
      testimonial: 'Their social media strategy transformed our brand presence and drove meaningful engagement with our target audience.',
      duration: '6 months'
    },
    {
      id: 2,
      name: 'Meeravii.in',
      industry: 'Fashion & Lifestyle',
      logo: social1,
      results: {
        followers: '+28K',
        engagement: '+185%',
        reach: '+1.8M'
      },
      testimonial: 'The team delivered exceptional results, increasing our conversion rate by 45% through targeted social campaigns.',
      duration: '8 months'
    },
    {
      id: 3,
      name: 'Trip8',
      industry: 'Travel & Tourism',
      logo: social2,
      results: {
        followers: '+12K',
        engagement: '+275%',
        reach: '+950K'
      },
      testimonial: 'Professional approach with measurable results. Our booking inquiries increased by 60% within 3 months.',
      duration: '4 months'
    },
    {
      id: 4,
      name: 'Trip design',
      industry: 'Food & Beverage',
      logo: social3,
      results: {
        followers: '+22K',
        engagement: '+210%',
        reach: '+1.6M'
      },
      testimonial: 'Outstanding content strategy that perfectly captured our brand voice and resonated with our customers.',
      duration: '7 months'
    },
      {
      id: 5,
      name: 'luxmitaps',
      industry: 'Travel & Tourism',
      logo: social7,
      results: {
        followers: '+12K',
        engagement: '+275%',
        reach: '+950K'
      },
      testimonial: 'Professional approach with measurable results. Our booking inquiries increased by 60% within 3 months.',
      duration: '4 months'
    },
      {
      id: 6,
      name: 'SAISEI',
      industry: 'Travel & Tourism',
      logo: '/api/placeholder/120/60',
      results: {
        followers: '+12K',
        engagement: '+275%',
        reach: '+950K'
      },
      testimonial: 'Professional approach with measurable results. Our booking inquiries increased by 60% within 3 months.',
      duration: '4 months'
    },
      {
      id: 7,
      name: 'kukutripholiday',
      industry: 'Travel & Tourism',
      logo: social5,
      results: {
        followers: '+12K',
        engagement: '+275%',
        reach: '+950K'
      },
      testimonial: 'Professional approach with measurable results. Our booking inquiries increased by 60% within 3 months.',
      duration: '4 months'
    },

      {
      id: 8,
      name: 'Caring Vision',
      industry: 'Caring vision Therapy Center',
      logo: social6,
      results: {
        followers: '+42K',
        engagement: '+575%',
        reach: '+950K'
      },
      testimonial: 'India’s only Board Certified Centre for Vision Therapy',
      duration: '4 months'
    }


  ];

  const processSteps = [
    {
      step: '01',
      title: 'Strategy & Analysis',
      description: 'Comprehensive audit of your current social presence and competitive landscape analysis',
      icon: SocialIcons.Strategy
    },
    {
      step: '02',
      title: 'Content Planning',
      description: 'Develop engaging content calendar tailored to your audience and business objectives',
      icon: SocialIcons.Content
    },
    {
      step: '03',
      title: 'Community Building',
      description: 'Grow your audience and foster meaningful engagement through strategic interactions',
      icon: SocialIcons.Engagement
    },
    {
      step: '04',
      title: 'Performance Tracking',
      description: 'Monitor analytics and optimize campaigns based on real-time performance data',
      icon: SocialIcons.Analytics
    }
  ];

  const addToObserver = (el) => {
    if (el && !observerRefs.current.includes(el)) {
      observerRefs.current.push(el);
    }
  };

  return (
    <div className="smm-marketing-page">
      {/* Hero Section */}
      <section className="smm-hero-section">
        <div className="smm-container">
          <div className="smm-hero-grid">
            <div className={`smm-hero-content ${isVisible ? 'smm-slide-in-left' : ''}`}>
              <div className="smm-breadcrumb">
                <Link to="/">Home</Link>
                <span className="smm-breadcrumb-divider">/</span>
                <Link to="/services">Services</Link>
                <span className="smm-breadcrumb-divider">/</span>
                <span>Social Media Marketing</span>
              </div>
              
              <h1 className="smm-hero-title">
                Transform Your Brand's
                <span className="smm-gradient-text"> Social Presence</span>
              </h1>
              
              <p className="smm-hero-description">
                Drive meaningful engagement, build loyal communities, and accelerate business growth 
                through data-driven social media strategies tailored to your unique brand voice.
              </p>

              <div className="smm-hero-actions">
                <button className="smm-primary-btn">
                  <span>Start Your Social Success</span>
                  <SocialIcons.Arrow />
                </button>
                <button className="smm-secondary-btn">
                  View Case Studies
                </button>
              </div>

              <div className="smm-trust-indicators">
                <div className="smm-trust-item">
                  <div className="smm-trust-icon">
                    <SocialIcons.Users />
                  </div>
                  <span>500K+ Followers Generated</span>
                </div>
                <div className="smm-trust-item">
                  <div className="smm-trust-icon">
                    <SocialIcons.Engagement />
                  </div>
                  <span>87% Avg. Engagement Growth</span>
                </div>
                <div className="smm-trust-item">
                  <div className="smm-trust-icon">
                    <SocialIcons.Growth />
                  </div>
                  <span>320% ROI Delivered</span>
                </div>
              </div>
            </div>

            <div className={`smm-hero-visual ${isVisible ? 'smm-slide-in-right' : ''}`}>
              <div className="smm-dashboard-mockup">
                <div className="smm-dashboard-header">
                  <div className="smm-platform-tabs">
                    {platforms.map(platform => (
                      <button
                        key={platform.id}
                        className={`smm-platform-tab ${activePlatform === platform.id ? 'smm-tab-active' : ''}`}
                        onClick={() => setActivePlatform(platform.id)}
                        style={{ '--smm-platform-color': platform.color }}
                      >
                        <platform.icon />
                        <span>{platform.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="smm-dashboard-content">
                  <div className="smm-metrics-grid">
                    <div className="smm-metric-card">
                      <div className="smm-metric-value">{metrics.reach}M</div>
                      <div className="smm-metric-label">Monthly Reach</div>
                      <div className="smm-metric-trend">+45%</div>
                    </div>
                    <div className="smm-metric-card">
                      <div className="smm-metric-value">{metrics.engagement}%</div>
                      <div className="smm-metric-label">Engagement Rate</div>
                      <div className="smm-metric-trend">+32%</div>
                    </div>
                    <div className="smm-metric-card">
                      <div className="smm-metric-value">{metrics.conversions}</div>
                      <div className="smm-metric-label">Daily Conversions</div>
                      <div className="smm-metric-trend">+28%</div>
                    </div>
                    <div className="smm-metric-card">
                      <div className="smm-metric-value">+{metrics.growth}</div>
                      <div className="smm-metric-label">Followers Growth</div>
                      <div className="smm-metric-trend">+15%</div>
                    </div>
                  </div>

                  <div className="smm-engagement-chart">
                    <div className="smm-chart-header">
                      <h4>Engagement Trends</h4>
                      <span>Last 30 Days</span>
                    </div>
                    <div className="smm-chart-bars">
                      {[65, 80, 45, 90, 75, 85, 70, 95, 60, 87, 78, 92, 68, 83, 77].map((height, index) => (
                        <div
                          key={index}
                          className="smm-chart-bar"
                          style={{ height: `${height}%` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Success Section */}
      <section className="smm-clients-section" ref={addToObserver}>
        <div className="smm-container">
          <div className="smm-section-header smm-centered">
            <h2>Client Success Stories</h2>
            <p>Transforming brands across industries with proven social media strategies</p>
          </div>

          <div className="smm-clients-grid">
            {clients.map((client, index) => (
              <div key={client.id} className="smm-client-card">
                <div className="smm-client-header">
                  <div className="smm-client-logo">
                    <img src={client.logo} alt={client.name} />
                  </div>
                  <div className="smm-client-info">
                    <h3>{client.name}</h3>
                    <span className="smm-client-industry">{client.industry}</span>
                  </div>
                </div>

                <div className="smm-client-results">
                  <div className="smm-result-item">
                    <div className="smm-result-value">{client.results.followers}</div>
                    <div className="smm-result-label">Followers</div>
                  </div>
                  <div className="smm-result-item">
                    <div className="smm-result-value">{client.results.engagement}</div>
                    <div className="smm-result-label">Engagement</div>
                  </div>
                  <div className="smm-result-item">
                    <div className="smm-result-value">{client.results.reach}</div>
                    <div className="smm-result-label">Reach</div>
                  </div>
                </div>

                <div className="smm-client-testimonial">
                  <p>"{client.testimonial}"</p>
                </div>

                <div className="smm-client-duration">
                  <span>Results achieved in {client.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Performance */}
      <section className="smm-platforms-section" ref={addToObserver}>
        <div className="smm-container">
          <div className="smm-section-header">
            <h2>Platform-Specific Excellence</h2>
            <p>Mastering each platform with tailored strategies for maximum impact</p>
          </div>

          <div className="smm-platforms-grid">
            {platforms.map(platform => (
              <div key={platform.id} className="smm-platform-card">
                <div className="smm-platform-header" style={{ backgroundColor: platform.color }}>
                  <div className="smm-platform-icon">
                    <platform.icon />
                  </div>
                  <h3>{platform.name}</h3>
                </div>
                
                <div className="smm-platform-stats">
                  <div className="smm-platform-stat">
                    <span className="smm-stat-value">{platform.stats.followers}</span>
                    <span className="smm-stat-label">Followers</span>
                  </div>
                  <div className="smm-platform-stat">
                    <span className="smm-stat-value">{platform.stats.engagement}</span>
                    <span className="smm-stat-label">Engagement</span>
                  </div>
                  <div className="smm-platform-stat">
                    <span className="smm-stat-value">{platform.stats.reach}</span>
                    <span className="smm-stat-label">Reach</span>
                  </div>
                </div>

                <div className="smm-platform-features">
                  <div className="smm-feature-item">
                    <SocialIcons.Check />
                    <span>Content Strategy</span>
                  </div>
                  <div className="smm-feature-item">
                    <SocialIcons.Check />
                    <span>Audience Growth</span>
                  </div>
                  <div className="smm-feature-item">
                    <SocialIcons.Check />
                    <span>Performance Analytics</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Process Section */}
      <section className="smm-process-section" ref={addToObserver}>
        <div className="smm-container">
          <div className="smm-section-header smm-centered">
            <h2 className="smm-process-main-title">Our 4-Step Social Media Process</h2>
            <p className="smm-process-subtitle">A systematic approach to building your brand's social media dominance</p>
          </div>

          <div className="smm-process-timeline-container">
            <div className="smm-process-timeline">
              {processSteps.map((step, index) => (
                <div key={step.step} className="smm-process-step-card">
                  <div className="smm-step-visual-container">
                    <div className="smm-step-number-badge">{step.step}</div>
                    <div className="smm-step-icon-wrapper">
                      <step.icon />
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="smm-step-connector-line"></div>
                    )}
                  </div>
                  <div className="smm-step-content-wrapper">
                    <h4 className="smm-step-title">{step.title}</h4>
                    <p className="smm-step-description">{step.description}</p>
                    <div className="smm-step-progress-indicator">
                      <div 
                        className="smm-step-progress-bar" 
                        style={{width: `${(index + 1) * 25}%`}}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="smm-cta-showcase" ref={addToObserver}>
        <div className="smm-container">
          <div className="smm-cta-container">
            <div className="smm-cta-content-wrapper">
              <div className="smm-cta-text-content">
                <h2 className="smm-cta-main-heading">Ready to Amplify Your Social Presence?</h2>
                <p className="smm-cta-subheading">Join brands like Truvie Ayurved and Vevante in achieving remarkable social media success</p>
                
                <div className="smm-cta-features-grid">
                  <div className="smm-cta-feature-item">
                    <div className="smm-feature-icon-wrapper">
                      <SocialIcons.Check />
                    </div>
                    <span className="smm-feature-text">Custom strategy development</span>
                  </div>
                  <div className="smm-cta-feature-item">
                    <div className="smm-feature-icon-wrapper">
                      <SocialIcons.Check />
                    </div>
                    <span className="smm-feature-text">Daily content management</span>
                  </div>
                  <div className="smm-cta-feature-item">
                    <div className="smm-feature-icon-wrapper">
                      <SocialIcons.Check />
                    </div>
                    <span className="smm-feature-text">Real-time performance tracking</span>
                  </div>
                </div>
              </div>
              
              <div className="smm-cta-action-panel">
                <button className="smm-cta-primary-btn smm-cta-btn-large">
                  <span className="smm-btn-text">Start Your Social Journey</span>
                  <div className="smm-btn-arrow">
                    <SocialIcons.Arrow />
                  </div>
                </button>
                
                <div className="smm-cta-guarantee-banner">
                  <div className="smm-guarantee-icon">
                    <SocialIcons.Strategy />
                  </div>
                  <div className="smm-guarantee-content">
                    <span className="smm-guarantee-text">30-day performance guarantee</span>
                    <span className="smm-guarantee-subtext">See results or your money back</span>
                  </div>
                </div>

                <div className="smm-cta-stats-preview">
                  <div className="smm-stat-preview-item">
                    <div className="smm-stat-preview-value">87%</div>
                    <div className="smm-stat-preview-label">Success Rate</div>
                  </div>
                  <div className="smm-stat-preview-item">
                    <div className="smm-stat-preview-value">24/7</div>
                    <div className="smm-stat-preview-label">Support</div>
                  </div>
                  <div className="smm-stat-preview-item">
                    <div className="smm-stat-preview-value">100+</div>
                    <div className="smm-stat-preview-label">Happy Clients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialMediaMarketing;