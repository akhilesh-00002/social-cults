import React, { useState, useEffect, useRef } from 'react';

const CROService = () => {
  const [activeTab, setActiveTab] = useState('discovery');
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRefs = useRef([]);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Enhanced SVG Icons with more professional styling
  const CROIcons = {
    Analytics: ({ className = "" }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    Strategy: ({ className = "" }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    Design: ({ className = "" }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    Test: ({ className = "" }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    Growth: ({ className = "" }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    Check: ({ className = "" }) => (
      <svg className={className} viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
    ),
    Ecommerce: ({ className = "" }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    Landing: ({ className = "" }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
      </svg>
    ),
    SaaS: ({ className = "" }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    Content: ({ className = "" }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    ),
    Booking: ({ className = "" }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    Data: ({ className = "" }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    Funnel: ({ className = "" }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
      </svg>
    ),
    Transparency: ({ className = "" }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    Target: ({ className = "" }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    Rocket: ({ className = "" }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    Chart: ({ className = "" }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  };

  const croServices = [
    {
      id: 'discovery',
      title: 'Discovery & Data Deep Dive',
      description: 'Comprehensive analysis to identify conversion barriers and opportunities through advanced analytics.',
      activities: [
        'Analytics & Technical Audit',
        'Heuristic UX Analysis',
        'Qualitative Research (Heatmaps & Session Recordings)'
      ],
      icon: CROIcons.Analytics
    },
    {
      id: 'strategy',
      title: 'Strategy & Planning',
      description: 'Data-backed hypothesis development and testing roadmap creation for maximum ROI.',
      activities: [
        'Conversion Funnel Mapping',
        'Test Prioritization (using PIE/ICE frameworks)',
        'Quarterly Test Roadmap Creation'
      ],
      icon: CROIcons.Strategy
    },
    {
      id: 'execution',
      title: 'Execution & Testing',
      description: 'Building and running high-converting variations with statistical validation and precision.',
      activities: [
        'A/B & Multivariate Testing',
        'Copywriting & UX Optimization',
        'High-Converting Design',
        'Personalization for User Segments'
      ],
      icon: CROIcons.Design
    },
    {
      id: 'analysis',
      title: 'Analysis & Growth',
      description: 'Continuous learning and scaling of winning strategies for sustainable growth.',
      activities: [
        'Statistical Significance Analysis',
        'Detailed Reporting & Insights',
        'Iterative Strategy Refinement'
      ],
      icon: CROIcons.Growth
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Analyze & Uncover',
      description: 'We dive deep into your analytics, heatmaps, and user session recordings to identify friction points and drop-off areas.',
      icon: CROIcons.Analytics
    },
    {
      step: '02',
      title: 'Hypothesize & Strategize',
      description: 'We develop data-backed hypotheses on what changes will improve performance and create a clear testing roadmap.',
      icon: CROIcons.Strategy
    },
    {
      step: '03',
      title: 'Design & Develop',
      description: 'We build high-converting variations (A/B or Multivariate tests) that are both visually appealing and functionally superior.',
      icon: CROIcons.Design
    },
    {
      step: '04',
      title: 'Test & Validate',
      description: 'We run rigorous, statistically significant tests to ensure our changes deliver real, measurable improvements.',
      icon: CROIcons.Test
    },
    {
      step: '05',
      title: 'Learn & Scale',
      description: 'We analyze the results, implement the winners, and use the insights to fuel your next wave of growth.',
      icon: CROIcons.Growth
    }
  ];

  const optimizationAreas = [
    {
      title: 'E-commerce Product Pages & Checkout Flows',
      description: 'Increase sales and reduce cart abandonment with optimized user journeys',
      icon: CROIcons.Ecommerce
    },
    {
      title: 'Landing Pages & Lead Generation Forms',
      description: 'Boost conversions and capture more qualified leads through strategic design',
      icon: CROIcons.Landing
    },
    {
      title: 'SaaS Sign-up Flows & Free Trials',
      description: 'Improve onboarding and trial-to-paid conversion with seamless experiences',
      icon: CROIcons.SaaS
    },
    {
      title: 'Content & Blog Engagement',
      description: 'Increase readership and content conversions with strategic placement',
      icon: CROIcons.Content
    },
 {
      title: "User Flow Optimization",
      description: "Streamline user journeys to reduce friction and increase conversions through intuitive navigation paths.",
      icon: () => (
        <svg className="cro-optimization-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      title: 'Booking & Appointment Systems',
      description: 'Streamline scheduling and reduce no-shows with intuitive interfaces',
      icon: CROIcons.Booking
    },

      {
 
      title: "Trust Signals",
      description: "Build credibility with security badges, testimonials, and social proof elements throughout the site.",
      icon: () => (
        <svg className="cro-optimization-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
       {

      title: "Page Speed",
      description: "Improve loading times and performance metrics to reduce bounce rates and improve user satisfaction.",
      icon: () => (
        <svg className="cro-optimization-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    


  ];

  const benefits = [
    {
      title: 'Data-Driven, Not Guess-Driven',
      description: 'Every recommendation is backed by quantitative data and qualitative user insights—no hunches.',
      icon: CROIcons.Data
    },
    {
      title: 'Holistic Approach',
      description: 'We analyze your entire marketing funnel, from ad click to post-purchase, to find every leak.',
      icon: CROIcons.Funnel
    },
    {
      title: 'Transparency is Key',
      description: 'Get direct access to our testing dashboards and easy-to-understand reports. No black boxes.',
      icon: CROIcons.Transparency
    },
    {
      title: 'Focus on Your Business Goals',
      description: 'We optimize for revenue and growth, not just vanity metrics.',
      icon: CROIcons.Target
    }
  ];

  const caseStudies = [
    {
      metric: '+45%',
      label: 'Conversion Rate',
      description: 'Increased overall website conversion rate',
      color: '#10b981'
    },
    {
      metric: '+$120K',
      label: 'Annual Revenue',
      description: 'Additional revenue generated through CRO',
      color: '#3b82f6'
    },
    {
      metric: '-20%',
      label: 'Cart Abandonment',
      description: 'Reduced shopping cart abandonment rate',
      color: '#ef4444'
    },
    {
      metric: '+147%',
      label: 'Lead Conversion',
      description: 'Improved lead form conversion rate',
      color: '#8b5cf6'
    }
  ];

  const trustTools = [
    { name: 'Google Optimize', logo: 'GO' },
    { name: 'VWO', logo: 'VWO' },
    { name: 'Hotjar', logo: 'HJ' },
    { name: 'Google Analytics 4', logo: 'GA4' },
    { name: 'Optimizely', logo: 'OP' },
    { name: 'Crazy Egg', logo: 'CE' }
  ];

  const faqs = [
    {
      question: 'How long does a CRO test take?',
      answer: 'To achieve statistical significance, most tests run for 2-4 weeks, depending on your traffic volume. We ensure proper sample sizes for reliable results.'
    },
    {
      question: 'What\'s the minimum traffic required for CRO?',
      answer: 'We recommend at least 10,000 monthly visitors and 1,000 conversions per month for reliable results, but we can work with less and provide tailored approaches.'
    },
    {
      question: 'How much does CRO cost?',
      answer: 'We offer project-based and retainer plans starting at $3,000. Schedule a free consult for a custom quote based on your specific goals and website complexity.'
    },
    {
      question: 'What makes your CRO approach different?',
      answer: 'We combine advanced data analysis with user psychology and continuous testing to create sustainable growth, not just quick fixes. Our holistic approach ensures long-term success.'
    }
  ];

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <div className={`cro-service-page ${isVisible ? 'page-visible' : ''}`}>
      {/* Progress Bar */}
      <div className="cro-progress-bar">
        <div 
          className="cro-progress-fill" 
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Enhanced Hero Section */}
      <section className="cro-hero-section">
        <div className="cro-hero-background">
          <div className="cro-hero-particles">
            {[...Array(15)].map((_, i) => (
              <div key={i} className="cro-particle" style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}></div>
            ))}
          </div>
        </div>
        
        <div className="cro-container">
          <div className="cro-hero-content">
            <div className="cro-hero-badge">
              <CROIcons.Rocket className="cro-badge-icon" />
              <span>Proven Conversion Optimization</span>
            </div>

            <h1 className="cro-hero-title">
              Don't Just Drive Traffic. 
              <span className="cro-hero-accent"> Drive Conversions.</span>
            </h1>
            
            <p className="cro-hero-subtitle">
              We transform your website from a passive brochure into your <strong>most effective salesperson</strong>.
            </p>

            <div className="cro-definition">
              <div className="cro-definition-icon">
                <CROIcons.Chart className="cro-definition-svg" />
              </div>
              <div>
                <h3>What is Conversion Rate Optimization (CRO)?</h3>
                <p>
                  CRO is a systematic process of using data and user insights to increase the percentage of visitors to your website who complete a desired action—making a purchase, filling out a form, signing up for a trial, or anything else that grows your business.
                </p>
              </div>
            </div>

            <div className="cro-hero-actions">
              <button className="cro-cta-btn cro-btn-primary cro-btn-glow">
                <span>See Our Case Studies</span>
                <div className="cro-btn-shine"></div>
              </button>
              <button className="cro-cta-btn cro-btn-secondary">
                Get a Free CRO Audit
              </button>
            </div>

            <div className="cro-hero-stats">
              <div className="cro-stat">
                <div className="cro-stat-number">450+</div>
                <div className="cro-stat-label">Projects Completed</div>
              </div>
              <div className="cro-stat">
                <div className="cro-stat-number">$28M+</div>
                <div className="cro-stat-label">Revenue Generated</div>
              </div>
              <div className="cro-stat">
                <div className="cro-stat-number">98%</div>
                <div className="cro-stat-label">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Process Section */}


      {/* Enhanced Services Section */}
      <section className="cro-services-section">
        <div className="cro-container">
          <div className="cro-section-header">
            <h2>Our <span className="cro-text-gradient">Comprehensive</span> CRO Framework</h2>
            <p>End-to-end conversion optimization services designed to maximize your digital performance</p>
          </div>

          <div className="cro-services-tabs">
            {croServices.map(service => (
              <button
                key={service.id}
                className={`cro-tab-btn ${activeTab === service.id ? 'cro-tab-active' : ''}`}
                onClick={() => setActiveTab(service.id)}
              >
                <div className="cro-tab-icon">
                  <service.icon className="cro-service-icon" />
                </div>
                <span>{service.title}</span>
                <div className="cro-tab-indicator"></div>
              </button>
            ))}
          </div>

          <div className="cro-service-details">
            {croServices.map(service => (
              <div 
                key={service.id}
                className={`cro-service-panel ${activeTab === service.id ? 'cro-panel-active' : ''}`}
              >
                <div className="cro-service-info">
                  <div className="cro-service-header">
                    <div className="cro-service-icon-large">
                      <service.icon className="cro-service-icon-large-svg" />
                    </div>
                    <div>
                      <h3>{service.title}</h3>
                      <p className="cro-service-description">{service.description}</p>
                    </div>
                  </div>
                  
                  <div className="cro-activities-list">
                    <h4 className="cro-activities-title">Key Activities & Deliverables</h4>
                    <div className="cro-activities-grid">
                      {service.activities.map((activity, index) => (
                        <div key={index} className="cro-activity-item">
                          <div className="cro-check-icon">
                            <CROIcons.Check className="cro-check-svg" />
                          </div>
                          <span>{activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

     <div className="cro-optimization-areas-full">
  <h3 className="cro-optimization-title">What We <span className="cro-text-gradient">Optimize</span> For</h3>
  <div className="cro-optimization-grid">
    {optimizationAreas.map((area, index) => (
      <div key={index} className="cro-optimization-card cro-card-hover">
        <div className="cro-optimization-icon cro-icon-animate">
          <area.icon className="cro-optimization-svg" />
        </div>
        <h4 className="cro-card-heading">{area.title}</h4>
        <p className="cro-card-text">{area.description}</p>
        <div className="cro-optimization-hover cro-hover-shine"></div>
      </div>
    ))}
  </div>
</div>

       
        </div>
      </section>

      {/* Enhanced Why Choose Us Section */}
     <section className="cro-why-section">
  <div className="cro-container">
    <div className="cro-section-header">
      <h2>Why <span className="cro-text-gradient">Choose Us</span> for CRO?</h2>
      <p>We combine cutting-edge technology with proven methodologies to deliver exceptional results</p>
    </div>

    <div className="cro-benefits-grid-four">
      {benefits.map((benefit, index) => (
        <div key={index} className="cro-benefit-card-four">
          <div className="cro-benefit-icon-four">
            <benefit.icon className="cro-benefit-svg-four" />
          </div>
          <h3 className="cro-benefit-title-four">{benefit.title}</h3>
          <p className="cro-benefit-desc-four">{benefit.description}</p>
          <div className="cro-benefit-hover-four"></div>
        </div>
      ))}
    </div>

    <div className="cro-results-showcase">
      <div className="cro-results-content">
        <div className="cro-results-badge">
          <CROIcons.Target className="cro-results-badge-icon" />
          <span>Proven Track Record</span>
        </div>
        <h3>Real Results That Drive Business Growth</h3>
        <p>We deliver tangible results, like helping <strong>TechStart Inc.</strong> increase their lead conversion rate by <strong className="cro-text-highlight">147% in 6 months</strong>.</p>
        
        <div className="cro-testimonial">
          <div className="cro-testimonial-quote">
            <CROIcons.Check className="cro-quote-icon" />
          </div>
          <blockquote>
            "The team transformed our approach to our website. Their CRO process was methodical and insightful, leading to a <strong>34% increase in our online sales</strong> without spending a dime more on ads. They are true growth partners."
          </blockquote>
          <div className="cro-testimonial-author">
            <div className="cro-author-avatar">SJ</div>
            <div className="cro-author-info">
              <strong>Sarah Johnson</strong>
              <span>Marketing Director at TechStart Inc.</span>
            </div>
          </div>
        </div>
      </div>

      <div className="cro-results-stats">
        <h4>Real Results Delivered:</h4>
        <div className="cro-stats-grid">
          {caseStudies.map((study, index) => (
            <div key={index} className="cro-stat-item" style={{ '--stat-color': study.color }}>
              <div className="cro-stat-metric" style={{ color: study.color }}>{study.metric}</div>
              <div className="cro-stat-label">{study.label}</div>
              <div className="cro-stat-description">{study.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>

  </div>
</section>

      {/* Enhanced Trust & Tools Section */}
      <section className="cro-trust-section">
        <div className="cro-container">
          <div className="cro-section-header">
            <h2>Trusted by Industry Leaders</h2>
            <p>We're certified experts in the industry's leading optimization tools and platforms</p>
          </div>

          <div className="cro-trust-badges">
            {trustTools.map((tool, index) => (
              <div key={index} className="cro-trust-badge">
                <div className="cro-trust-logo">{tool.logo}</div>
                <span>{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced FAQ Section */}
      <section className="cro-faq-section">
        <div className="cro-container">
          <div className="cro-section-header">
            <h2>Frequently Asked <span className="cro-text-gradient">Questions</span></h2>
            <p>Everything you need to know about our CRO process and services</p>
          </div>

          <div className="cro-faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="cro-faq-item">
                <button 
                  className="cro-faq-question"
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{faq.question}</span>
                  <span className={`cro-faq-toggle ${activeFAQ === index ? 'cro-faq-open' : ''}`}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                <div className={`cro-faq-answer ${activeFAQ === index ? 'cro-faq-answer-open' : ''}`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Final CTA Section */}
  
   
    </div>
  );
};

export default CROService;