import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const PPCServices = () => {
  const [activeTab, setActiveTab] = useState('social');
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingMessage, setLoadingMessage] = useState('');
  const [animatedStats, setAnimatedStats] = useState({
    conversions: 0,
    roas: 0,
    cpc: 0,
    traffic: 0
  });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const navigate = useNavigate();
  const observerRefs = useRef([]);
  const pageRef = useRef(null);

  // Mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Scroll progress tracking
  useEffect(() => {
    const handleScroll = () => {
      const winHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight - winHeight;
      const scrollTop = window.pageYOffset;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Initialization
  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);

    const animateStats = () => {
      const targets = { conversions: 185, roas: 425, cpc: 65, traffic: 320 };
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      Object.keys(targets).forEach(key => {
        let current = 0;
        const target = targets[key];
        const stepValue = target / steps;

        const interval = setInterval(() => {
          current += stepValue;
          if (current >= target) {
            current = target;
            clearInterval(interval);
          }
          setAnimatedStats(prev => ({
            ...prev,
            [key]: Math.floor(current)
          }));
        }, stepDuration);
      });
    };

    const timer = setTimeout(animateStats, 500);

    // Intersection Observer
    const observerOptions = {
      threshold: isMobile ? 0.05 : 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('ppc-animate-in');
            const index = observerRefs.current.indexOf(entry.target);
            entry.target.style.animationDelay = `${index * 0.1}s`;
          }
        });
      },
      observerOptions
    );

    observerRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [isMobile]);

  const startLoading = useCallback((action, message = "Processing your request...") => {
    setIsLoading(true);
    setLoadingProgress(0);
    setLoadingMessage(message);

    let progress = 0;
    const progressInterval = setInterval(() => {
      progress += Math.random() * 5 + 1;
      if (progress >= 100) {
        progress = 100;
        clearInterval(progressInterval);
        
        setTimeout(() => {
          setIsLoading(false);
          setLoadingProgress(0);
          
          switch (action) {
            case 'navigate-contact':
              navigate('/contact');
              break;
            case 'navigate-projects':
              navigate('/projects');
              break;
            case 'show-case-studies':
              setTimeout(() => {
                alert('PPC case studies loaded successfully!');
              }, 300);
              break;
            case 'tab-switch':
              break;
            default:
              console.warn('Unknown action:', action);
          }
        }, 500);
      }
      setLoadingProgress(Math.min(progress, 100));
    }, 50);

    return () => clearInterval(progressInterval);
  }, [navigate]);

  const handleTabSwitch = useCallback((tabId, serviceTitle) => {
    setActiveTab(tabId);
    startLoading('tab-switch', `Loading ${serviceTitle} details...`);
  }, [startLoading]);

  // Mobile-optimized tab navigation
  const handleMobileTabSwitch = useCallback((tabId, serviceTitle) => {
    setActiveTab(tabId);
    // Scroll to top of services section on mobile
    const servicesSection = document.querySelector('.ppc-services-section');
    if (servicesSection && isMobile) {
      servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [isMobile]);

  // Enhanced SVG Icons (keeping your original icons)
  const PPCSvgIcons = {
    Social: ({ className = "" }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    Search: ({ className = "" }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    Display: ({ className = "" }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    Video: ({ className = "" }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    Analytics: ({ className = "" }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    Target: ({ className = "" }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    Check: ({ className = "" }) => (
      <svg className={className} viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
    ),
    Arrow: ({ className = "" }) => (
      <svg className={className} viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    ),
    Rocket: ({ className = "" }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    Trending: ({ className = "" }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    Conversion: ({ className = "" }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    Budget: ({ className = "" }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
      </svg>
    ),
    Partner: ({ className = "" }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    Award: ({ className = "" }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    Chart: ({ className = "" }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  };

  // Mobile-optimized services data
  const services = [
    {
      id: 'social',
      title: 'Social Media PPC',
      shortTitle: 'Social',
      description: 'Drive targeted traffic and conversions through strategic social media advertising campaigns',
      features: [
        'Facebook & Instagram Ads Management',
        'LinkedIn B2B Campaigns',
        'Twitter & Pinterest Advertising',
        'Advanced Audience Targeting',
        'Creative Ad Design & Copywriting',
        'Performance Analytics & Optimization'
      ],
      icon: PPCSvgIcons.Social,
      color: '#3b82f6',
      platforms: ['Facebook', 'Instagram', 'LinkedIn', 'Twitter', 'Pinterest']
    },
    {
      id: 'search',
      title: 'Search Engine PPC',
      shortTitle: 'Search',
      description: 'Capture high-intent traffic at the moment of search with strategic paid search campaigns',
      features: [
        'Google Ads & Bing Ads Management',
        'Keyword Research & Strategy',
        'Quality Score Optimization',
        'Remarketing Campaigns',
        'Local Search Advertising',
        'Competitor Analysis & Bidding'
      ],
      icon: PPCSvgIcons.Search,
      color: '#10b981',
      platforms: ['Google Ads', 'Bing Ads', 'YouTube Ads']
    },
    {
      id: 'display',
      title: 'Display & Remarketing',
      shortTitle: 'Display',
      description: 'Re-engage your audience and build brand awareness across the web',
      features: [
        'Google Display Network',
        'Programmatic Advertising',
        'Retargeting Pixel Implementation',
        'Dynamic Remarketing',
        'Lookalike Audience Expansion',
        'Cross-Platform Retargeting'
      ],
      icon: PPCSvgIcons.Display,
      color: '#8b5cf6',
      platforms: ['Google Display', 'Programmatic', 'Native Ads']
    },
    {
      id: 'video',
      title: 'Video Advertising',
      shortTitle: 'Video',
      description: 'Engage your audience with compelling video content across multiple platforms',
      features: [
        'YouTube Advertising',
        'Social Video Campaigns',
        'Video Ad Creative Production',
        'In-Stream & Out-Stream Ads',
        'Video Remarketing',
        'Performance Video Analytics'
      ],
      icon: PPCSvgIcons.Video,
      color: '#ef4444',
      platforms: ['YouTube', 'Facebook Video', 'TikTok', 'Instagram Reels']
    }
  ];

  const results = [
    {
      metric: 'Conversion Rate',
      increase: '185%',
      description: 'Average increase in conversion rates',
      icon: PPCSvgIcons.Conversion,
      key: 'conversions'
    },
    {
      metric: 'ROAS',
      increase: '425%',
      description: 'Average return on ad spend',
      icon: PPCSvgIcons.Budget,
      key: 'roas'
    },
    {
      metric: 'Cost Reduction',
      increase: '65%',
      description: 'Average decrease in cost per conversion',
      icon: PPCSvgIcons.Trending,
      key: 'cpc'
    },
    {
      metric: 'Quality Traffic',
      increase: '320%',
      description: 'Increase in qualified website traffic',
      icon: PPCSvgIcons.Chart,
      key: 'traffic'
    }
  ];

  const platforms = [
    { name: 'Google Ads', icon: PPCSvgIcons.Search, color: '#4285F4' },
    { name: 'Facebook', icon: PPCSvgIcons.Social, color: '#1877F2' },
    { name: 'Instagram', icon: PPCSvgIcons.Social, color: '#E4405F' },
    { name: 'LinkedIn', icon: PPCSvgIcons.Social, color: '#0A66C2' },
    { name: 'Twitter', icon: PPCSvgIcons.Social, color: '#1DA1F2' },
    { name: 'YouTube', icon: PPCSvgIcons.Video, color: '#FF0000' },
    { name: 'TikTok', icon: PPCSvgIcons.Video, color: '#000000' },
    { name: 'Pinterest', icon: PPCSvgIcons.Social, color: '#E60023' }
  ];

  const addToObserver = useCallback((el) => {
    if (el && !observerRefs.current.includes(el)) {
      observerRefs.current.push(el);
    }
  }, []);

  return (
    <div className="ppc-professional-page" ref={pageRef}>
      {/* Scroll Progress Bar */}
      <div 
        className="ppc-scroll-progress-bar" 
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Loading Overlay */}
      {isLoading && (
        <div className="ppc-loader-overlay">
          <div className="ppc-loader-container">
            <div className="ppc-loader-spinner">
              <div className="ppc-spinner-ring"></div>
              <div className="ppc-spinner-ring"></div>
              <div className="ppc-spinner-ring"></div>
              <div className="ppc-spinner-center"></div>
            </div>
            <h3 className="ppc-loader-title">Please Wait</h3>
            <p className="ppc-loader-message">{loadingMessage}</p>
            <div className="ppc-loader-progress-container">
              <div 
                className="ppc-loader-progress-bar" 
                style={{ width: `${loadingProgress}%` }}
              >
                <span className="ppc-loader-progress-text">{Math.round(loadingProgress)}%</span>
              </div>
            </div>
            <div className="ppc-loader-stats">
              <div className="ppc-loader-stat">
                <span className="ppc-stat-label">Loading</span>
                <span className="ppc-stat-value">Assets</span>
              </div>
              <div className="ppc-loader-stat">
                <span className="ppc-stat-label">Processing</span>
                <span className="ppc-stat-value">Data</span>
              </div>
              <div className="ppc-loader-stat">
                <span className="ppc-stat-label">Preparing</span>
                <span className="ppc-stat-value">Content</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Animated Background Elements */}
      <div className="ppc-background-elements">
        <div className="ppc-floating-shape ppc-shape-1"></div>
        <div className="ppc-floating-shape ppc-shape-2"></div>
        <div className="ppc-floating-shape ppc-shape-3"></div>
        <div className="ppc-grid-pattern"></div>
      </div>

      {/* Enhanced Mobile-Friendly Hero Section */}
      <section className="ppc-hero-section">
        <div className="ppc-container">
          <div className="ppc-hero-grid">
            <div className={`ppc-hero-content ${isVisible ? 'ppc-slide-in-left' : ''}`}>
              <div className="ppc-breadcrumb">
                <Link to="/">Home</Link>
                <span className="ppc-breadcrumb-divider">/</span>
                <Link to="/services">Services</Link>
                <span className="ppc-breadcrumb-divider">/</span>
                <span>PPC Advertising</span>
              </div>
              
              <h1 className="ppc-hero-title">
                Drive Instant Results with 
                <span className="ppc-gradient-text"> Strategic PPC</span>
              </h1>
              
              <p className="ppc-hero-description">
                Maximize your ROI with data-driven PPC campaigns across search engines and social media platforms. 
                We create targeted advertising strategies that deliver measurable results and accelerate your business growth.
              </p>

              <div className="ppc-hero-actions">
                <button 
                  className="ppc-primary-btn"
                  onClick={() => startLoading('navigate-contact', 'Preparing your free PPC audit...')}
                  aria-label="Get Free PPC Audit"
                >
                  <span>Get Free PPC Audit</span>
                  <PPCSvgIcons.Arrow className="ppc-btn-arrow" />
                </button>
                <button 
                  className="ppc-secondary-btn"
                  onClick={() => startLoading('show-case-studies', 'Loading PPC case studies...')}
                  aria-label="View Case Studies"
                >
                  View Case Studies
                </button>
              </div>

              <div className="ppc-trust-indicators">
                <div className="ppc-trust-item">
                  <div className="ppc-trust-icon">
                    <PPCSvgIcons.Partner className="ppc-trust-svg" />
                  </div>
                  <span>Google Premier Partner</span>
                </div>
                <div className="ppc-trust-item">
                  <div className="ppc-trust-icon">
                    <PPCSvgIcons.Award className="ppc-trust-svg" />
                  </div>
                  <span>Facebook Marketing Partner</span>
                </div>
                <div className="ppc-trust-item">
                  <div className="ppc-trust-icon">
                    <PPCSvgIcons.Chart className="ppc-trust-svg" />
                  </div>
                  <span>Data-Driven Approach</span>
                </div>
              </div>
            </div>

            <div className={`ppc-hero-visual ${isVisible ? 'ppc-slide-in-right' : ''}`}>
              <div className="ppc-dashboard-mockup">
                <div className="ppc-dashboard-header">
                  <div className="ppc-dashboard-title">PPC Campaign Dashboard</div>
                  <div className="ppc-dashboard-stats">
                    <div className="ppc-dashboard-stat">
                      <span className="ppc-stat-label">ROAS</span>
                      <span className="ppc-stat-value">425%</span>
                    </div>
                    <div className="ppc-dashboard-stat">
                      <span className="ppc-stat-label">CTR</span>
                      <span className="ppc-stat-value">4.8%</span>
                    </div>
                  </div>
                </div>
                <div className="ppc-dashboard-content">
                  <div className="ppc-metric-cards">
                    <div className="ppc-metric-card">
                      <span className="ppc-metric-title">Conversions</span>
                      <span className="ppc-metric-value">1,247</span>
                      <span className="ppc-metric-change ppc-positive">+185%</span>
                    </div>
                    <div className="ppc-metric-card">
                      <span className="ppc-metric-title">Cost/Conv</span>
                      <span className="ppc-metric-value">$24.50</span>
                      <span className="ppc-metric-change ppc-positive">-65%</span>
                    </div>
                  </div>
                  <div className="ppc-chart-container">
                    <div className="ppc-chart-bar" style={{ height: '80%' }}></div>
                    <div className="ppc-chart-bar" style={{ height: '65%' }}></div>
                    <div className="ppc-chart-bar" style={{ height: '90%' }}></div>
                    <div className="ppc-chart-bar" style={{ height: '75%' }}></div>
                    <div className="ppc-chart-bar" style={{ height: '85%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="ppc-stats-bar">
        <div className="ppc-container">
          <div className="ppc-stats-grid">
            {results.map((result, index) => (
              <div key={index} className="ppc-stat-item" ref={addToObserver}>
                <div className="ppc-stat-icon">
                  <result.icon className="ppc-result-svg" />
                </div>
                <div className="ppc-stat-value">{animatedStats[result.key]}%</div>
                <div className="ppc-stat-label">{result.metric}</div>
                <div className="ppc-stat-trend">Industry Leading</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="ppc-platforms-section" ref={addToObserver}>
        <div className="ppc-container">
          <div className="ppc-section-header ppc-centered">
            <h2>Multi-Platform PPC Expertise</h2>
            <p>We manage campaigns across all major advertising platforms to maximize your reach and ROI</p>
          </div>
          <div className="ppc-platforms-grid">
            {platforms.map((platform, index) => (
              <div key={platform.name} className="ppc-platform-item">
                <div 
                  className="ppc-platform-icon-large"
                  style={{ backgroundColor: platform.color }}
                >
                  <platform.icon className="ppc-platform-svg" />
                </div>
                <h4>{platform.name}</h4>
                <p>Advanced campaign management and optimization</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="ppc-services-section" ref={addToObserver}>
        <div className="ppc-container">
          <div className="ppc-section-header ppc-centered">
            <h2>Comprehensive PPC Services</h2>
            <p>End-to-end pay-per-click advertising solutions tailored to your business objectives</p>
          </div>

          <div className="ppc-services-tabs">
            {/* Mobile-optimized tab navigation */}
            {isMobile ? (
              <div className="ppc-tabs-navigation-mobile">
                <select 
                  className="ppc-mobile-tab-select"
                  value={activeTab}
                  onChange={(e) => handleMobileTabSwitch(e.target.value, 
                    services.find(s => s.id === e.target.value)?.title || ''
                  )}
                >
                  {services.map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.shortTitle || service.title}
                    </option>
                  ))}
                </select>
              </div>
            ) : (
              <div className="ppc-tabs-navigation">
                {services.map((service) => (
                  <button
                    key={service.id}
                    className={`ppc-tab-button ${activeTab === service.id ? 'ppc-active' : ''}`}
                    onClick={() => handleTabSwitch(service.id, service.title)}
                    style={{ '--ppc-accent-color': service.color }}
                    aria-selected={activeTab === service.id}
                    aria-controls={`ppc-panel-${service.id}`}
                  >
                    <div className="ppc-tab-icon">
                      <service.icon className="ppc-service-icon" />
                    </div>
                    <span>{service.title}</span>
                  </button>
                ))}
              </div>
            )}

            <div className="ppc-tabs-content">
              {services.map((service) => (
                <div
                  key={service.id}
                  id={`ppc-panel-${service.id}`}
                  className={`ppc-tab-panel ${activeTab === service.id ? 'ppc-active' : ''}`}
                  role="tabpanel"
                  aria-labelledby={`ppc-tab-${service.id}`}
                >
                  <div className="ppc-panel-content">
                    <div className="ppc-panel-header">
                      <h3>{service.title}</h3>
                      <p className="ppc-panel-description">{service.description}</p>
                      
                      <div className="ppc-platform-tags">
                        {service.platforms.map(platform => (
                          <span key={platform} className="ppc-platform-tag">
                            {platform}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="ppc-features-grid">
                      {service.features.map((feature, index) => (
                        <div key={index} className="ppc-feature-card">
                          <div className="ppc-feature-icon" style={{ backgroundColor: service.color }}>
                            <PPCSvgIcons.Check className="ppc-check-icon" />
                          </div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="ppc-panel-cta">
                      <button 
                        className="ppc-outline-button"
                        onClick={() => startLoading('navigate-contact', `Setting up your ${service.title} strategy...`)}
                      >
                        Start This Service
                      </button>
                    </div>
                  </div>
                  
                  <div className="ppc-panel-visual">
                    <div className="ppc-service-data-card">
                      {/* Service Performance Overview */}
                      <div className="ppc-data-header">
                        <h4 className="ppc-data-title">Performance Insights</h4>
                        <div className="ppc-data-badge" style={{ backgroundColor: service.color }}>
                          Real-time Data
                        </div>
                      </div>

                      {/* Key Performance Indicators */}
                      <div className="ppc-kpi-grid">
                        <div className="ppc-kpi-item">
                          <div className="ppc-kpi-icon" style={{ backgroundColor: service.color + '20' }}>
                            <PPCSvgIcons.Trending className="ppc-kpi-svg" style={{ color: service.color }} />
                          </div>
                          <div className="ppc-kpi-content">
                            <span className="ppc-kpi-value">4.8%</span>
                            <span className="ppc-kpi-label">Average CTR</span>
                            <div className="ppc-kpi-trend ppc-positive">
                              <PPCSvgIcons.Trending className="ppc-trend-svg" />
                              +12.5%
                            </div>
                          </div>
                        </div>

                        <div className="ppc-kpi-item">
                          <div className="ppc-kpi-icon" style={{ backgroundColor: service.color + '20' }}>
                            <PPCSvgIcons.Conversion className="ppc-kpi-svg" style={{ color: service.color }} />
                          </div>
                          <div className="ppc-kpi-content">
                            <span className="ppc-kpi-value">12.5%</span>
                            <span className="ppc-kpi-label">Conversion Rate</span>
                            <div className="ppc-kpi-trend ppc-positive">
                              <PPCSvgIcons.Trending className="ppc-trend-svg" />
                              +8.2%
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Performance Chart */}
                      <div className="ppc-performance-chart">
                        <div className="ppc-chart-header">
                          <span className="ppc-chart-title">Campaign Performance</span>
                          <span className="ppc-chart-period">Last 30 Days</span>
                        </div>
                        <div className="ppc-chart-bars">
                          {[65, 80, 45, 90, 75, 85, 70, 95, 60, 78, 82, 88].map((height, index) => (
                            <div
                              key={index}
                              className="ppc-chart-bar"
                              style={{
                                height: `${height}%`,
                                backgroundColor: service.color,
                                opacity: 0.7 + (index * 0.025)
                              }}
                            />
                          ))}
                        </div>
                        <div className="ppc-chart-labels">
                          <span>W1</span>
                          <span>W2</span>
                          <span>W3</span>
                          <span>W4</span>
                        </div>
                      </div>

                      {/* Platform Distribution */}
                      <div className="ppc-platform-distribution">
                        <h5 className="ppc-distribution-title">Platform Performance</h5>
                        <div className="ppc-distribution-bars">
                          {service.platforms.map((platform, index) => (
                            <div key={platform} className="ppc-distribution-item">
                              <span className="ppc-platform-name">{platform}</span>
                              <div className="ppc-distribution-bar-container">
                                <div
                                  className="ppc-distribution-bar"
                                  style={{
                                    width: `${70 + (index * 10)}%`,
                                    backgroundColor: service.color
                                  }}
                                />
                              </div>
                              <span className="ppc-distribution-value">{70 + (index * 10)}%</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Quick Stats */}
                      <div className="ppc-quick-stats">
                        <div className="ppc-quick-stat">
                          <div className="ppc-stat-indicator" style={{ backgroundColor: service.color }} />
                          <div className="ppc-stat-info">
                            <span className="ppc-stat-number">2.4x</span>
                            <span className="ppc-stat-desc">ROI Increase</span>
                          </div>
                        </div>
                        <div className="ppc-quick-stat">
                          <div className="ppc-stat-indicator" style={{ backgroundColor: service.color }} />
                          <div className="ppc-stat-info">
                            <span className="ppc-stat-number">-35%</span>
                            <span className="ppc-stat-desc">Cost Reduction</span>
                          </div>
                        </div>
                        <div className="ppc-quick-stat">
                          <div className="ppc-stat-indicator" style={{ backgroundColor: service.color }} />
                          <div className="ppc-stat-info">
                            <span className="ppc-stat-number">+185%</span>
                            <span className="ppc-stat-desc">Lead Growth</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Floating CTA */}
      {isMobile && (
        <div className="ppc-mobile-floating-cta">
          <button 
            className="ppc-primary-btn ppc-floating-btn"
            onClick={() => startLoading('navigate-contact', 'Preparing your free PPC audit...')}
          >
            <PPCSvgIcons.Rocket className="ppc-floating-icon" />
            <span>Get Free Audit</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default PPCServices;