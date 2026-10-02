import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SEOServices = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [animatedStats, setAnimatedStats] = useState({
    traffic: 0,
    rankings: 0,
    leads: 0,
    roi: 0
  });

  const navigate = useNavigate();
  const observerRefs = useRef([]);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
      setIsVisible(true);
      window.scrollTo(0, 0);
    }, 1500);

    // Animate stats counter
    const animateStats = () => {
      let traffic = 0;
      let rankings = 0;
      let leads = 0;
      let roi = 0;
      
      const interval = setInterval(() => {
        if (traffic < 235) traffic += 5;
        if (rankings < 89) rankings += 1;
        if (leads < 320) leads += 4;
        if (roi < 425) roi += 5;
        
        setAnimatedStats({
          traffic,
          rankings,
          leads,
          roi
        });

        if (traffic >= 235 && rankings >= 89 && leads >= 320 && roi >= 425) {
          clearInterval(interval);
        }
      }, 30);
    };

    animateStats();

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleFreeAudit = () => {
    navigate('/contact', { state: { service: 'seo-audit' } });
  };

  const handleCaseStudies = () => {
    navigate('/case-studies');
  };

  // Professional SVG Icons for Hero Section
  const SEO_Icons = {
    Search: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    Arrow: () => (
      <svg viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    ),
    Trending: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  };

  const results = [
    {
      metric: 'Organic Traffic',
      increase: '235%',
      description: 'Average increase in qualified organic visitors',
      icon: '📈',
      key: 'traffic'
    },
    {
      metric: 'Top Rankings',
      increase: '89%',
      description: 'More keywords ranking on first page of Google',
      icon: '🏆',
      key: 'rankings'
    },
    {
      metric: 'Lead Generation',
      increase: '320%',
      description: 'Growth in qualified leads from organic search',
      icon: '🎯',
      key: 'leads'
    },
    {
      metric: 'ROI',
      increase: '425%',
      description: 'Average return on SEO investment',
      icon: '💰',
      key: 'roi'
    }
  ];

  if (isLoading) {
    return (
      <div className="seo-loader-overlay">
        
      </div>
    );
  }

  return (
    <div className="seo-professional-page">
      {/* Animated Background Elements */}
      <div className="seo-background-elements">
        <div className="floating-circle circle-1"></div>
        <div className="floating-circle circle-2"></div>
        <div className="floating-circle circle-3"></div>
      </div>

      {/* Hero Section */}
      <section className="seo-hero-section">
        <div className="seo-container">
          <div className="seo-hero-grid">
            <div className={`seo-hero-content ${isVisible ? 'slide-in-left' : ''}`}>
              <div className="seo-breadcrumb">
                <Link to="/">Home</Link>
                <span className="breadcrumb-divider">/</span>
                <Link to="/services">Services</Link>
                <span className="breadcrumb-divider">/</span>
                <span>SEO Services</span>
              </div>
              
              <h1 className="seo-hero-title">
                Dominate Search Results with 
                <span className="gradient-text"> Data-Driven SEO</span>
              </h1>
              
              <p className="seo-hero-description">
                Transform your online visibility and drive sustainable organic growth with our 
                comprehensive SEO strategies. We combine technical expertise with content excellence 
                to deliver measurable results that impact your bottom line.
              </p>

              <div className="seo-hero-actions">
                <button 
                  className="seo-primary-btn large"
                  onClick={handleFreeAudit}
                >
                  <span>Get Free SEO Audit</span>
                  <SEO_Icons.Arrow />
                </button>
                <button 
                  className="seo-secondary-btn"
                  onClick={handleCaseStudies}
                >
                  View Case Studies
                </button>
              </div>

              <div className="seo-trust-indicators">
                <div className="trust-item">
                  <div className="trust-icon">✅</div>
                  <span>Google Partner Certified</span>
                </div>
                <div className="trust-item">
                  <div className="trust-icon">🏆</div>
                  <span>Award-Winning Strategies</span>
                </div>
                <div className="trust-item">
                  <div className="trust-icon">📊</div>
                  <span>Data-First Approach</span>
                </div>
              </div>
            </div>

            <div className={`seo-hero-visual ${isVisible ? 'slide-in-right' : ''}`}>
              <div className="seo-rankings-display">
                <div className="search-engine-mockup">
                  <div className="search-header">
                    <SEO_Icons.Search />
                    <span>Search for your target keywords...</span>
                  </div>
                  <div className="search-results">
                    <div className="result-item featured">
                      <span className="rank-number">#1</span>
                      <span className="website-url">yourwebsite.com</span>
                      <SEO_Icons.Trending />
                    </div>
                    {[2, 3, 4, 5].map(rank => (
                      <div key={rank} className="result-item">
                        <span className="rank-number">#{rank}</span>
                        <span className="website-url">competitor{rank}.com</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="seo-floating-stats">
                {results.map((result, index) => (
                  <div 
                    key={result.metric} 
                    className="floating-stat-card"
                    style={{ animationDelay: `${index * 0.3}s` }}
                  >
                    <div className="stat-icon">{result.icon}</div>
                    <div className="stat-info">
                      <strong>{result.increase}</strong>
                      <span>{result.metric}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SEOServices;