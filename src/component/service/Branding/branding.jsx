import React, { useState, useEffect } from 'react';

const BrandingService = () => {
  const [activeTab, setActiveTab] = useState('strategy');
  const [activeCase, setActiveCase] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // SVG Icons for Branding Service
  const BrandingIcons = {
    Award: ({ className = "" }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    Check: ({ className = "" }) => (
      <svg className={className} viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
    ),
    Package: ({ className = "" }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
      </svg>
    ),
    Clock: ({ className = "" }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    Strategy: ({ className = "" }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    Design: ({ className = "" }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    Voice: ({ className = "" }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
    Digital: ({ className = "" }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    Guidelines: ({ className = "" }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    Launch: ({ className = "" }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    Growth: ({ className = "" }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    Satisfaction: ({ className = "" }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
      </svg>
    ),
    Revenue: ({ className = "" }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
      </svg>
    )
  };

  const brandingServices = [
    {
      id: 'strategy',
      title: 'Brand Strategy',
      description: 'Develop a comprehensive brand foundation that defines your purpose, positioning, and personality.',
      features: [
        'Brand Positioning & Architecture',
        'Target Audience Analysis',
        'Competitive Landscape Research',
        'Brand Voice & Messaging',
        'Brand Story Development'
      ],
      deliverables: ['Brand Strategy Document', 'Persona Development', 'Messaging Framework', 'Brand Architecture Map'],
      timeline: '2-3 weeks',
      investment: '$5,000 - $15,000',
      icon: BrandingIcons.Strategy
    },
    {
      id: 'identity',
      title: 'Visual Identity',
      description: 'Create a distinctive visual system that communicates your brand essence and builds recognition.',
      features: [
        'Logo Design & Variations',
        'Color Palette Development',
        'Typography System',
        'Imagery & Photography Style',
        'Iconography & Graphic Elements'
      ],
      deliverables: ['Logo Suite', 'Brand Guidelines', 'Color System', 'Typography Guide', 'Visual Asset Library'],
      timeline: '4-6 weeks',
      investment: '$8,000 - $25,000',
      icon: BrandingIcons.Design
    },
    {
      id: 'digital',
      title: 'Digital Branding',
      description: 'Extend your brand across digital touchpoints with consistent, engaging experiences.',
      features: [
        'Website Design & Development',
        'Social Media Branding',
        'Email Marketing Templates',
        'Digital Ad Creatives',
        'UI/UX Design System'
      ],
      deliverables: ['Website Design', 'Social Media Kit', 'Email Templates', 'Digital Ad Suite', 'UI Component Library'],
      timeline: '6-8 weeks',
      investment: '$12,000 - $40,000',
      icon: BrandingIcons.Digital
    }
  ];

  const brandingProcess = [
    {
      step: '01',
      title: 'Discovery & Research',
      description: 'We dive deep into your business, market, and audience to understand your unique position and opportunities.',
      duration: '1-2 weeks',
      icon: BrandingIcons.Strategy
    },
    {
      step: '02',
      title: 'Strategy & Positioning',
      description: 'We define your brand foundation, messaging, and competitive differentiation to guide all creative decisions.',
      duration: '2-3 weeks',
      icon: BrandingIcons.Voice
    },
    {
      step: '03',
      title: 'Design & Development',
      description: 'We bring your brand to life through visual identity, verbal identity, and brand experience design.',
      duration: '4-6 weeks',
      icon: BrandingIcons.Design
    },
    {
      step: '04',
      title: 'Implementation & Launch',
      description: 'We ensure seamless rollout across all touchpoints and provide guidelines for consistent brand management.',
      duration: '2-3 weeks',
      icon: BrandingIcons.Launch
    }
  ];

  const brandElements = [
    {
      title: 'Brand Strategy',
      description: 'Foundation for meaningful brand connections',
      icon: BrandingIcons.Strategy
    },
    {
      title: 'Visual Identity',
      description: 'Memorable and distinctive brand appearance',
      icon: BrandingIcons.Design
    },
    {
      title: 'Brand Voice',
      description: 'Consistent and compelling communication',
      icon: BrandingIcons.Voice
    },
    {
      title: 'Digital Presence',
      description: 'Cohesive brand experience across platforms',
      icon: BrandingIcons.Digital
    },
    {
      title: 'Brand Guidelines',
      description: 'Tools for consistent brand application',
      icon: BrandingIcons.Guidelines
    },
    {
      title: 'Launch Strategy',
      description: 'Successful brand introduction and adoption',
      icon: BrandingIcons.Launch
    }
  ];

  return (
    <div className="bs-branding-service-page">
      {/* Hero Section */}
<section className="bs-hero-section">
  <div className="bs-container">
    <div className="bs-hero-content">

      
      {/* Main Heading */}
      <div className="bs-hero-heading">
        <h1 className="bs-hero-title">
          Transform Your Business with
          <span className="bs-hero-accent"> Strategic Branding</span>
        </h1>
        <div className="bs-title-underline"></div>
      </div>
      
      {/* Description */}
      <p className="bs-hero-description">
        We craft memorable brands that connect with audiences, drive growth, and stand the test of time. 
        From startup launches to enterprise rebrands, we build identities that make an impact.
      </p>

      {/* Value Proposition Cards */}
      <div className="bs-value-props">
        <div className="bs-value-card">
          <div className="bs-value-icon">
            <BrandingIcons.Strategy className="bs-value-svg" />
          </div>
          <h3>Strategic Brand Development</h3>
          <p>Comprehensive brand strategy, positioning, and identity systems that align with your business goals</p>
        </div>
        
        <div className="bs-value-card">
          <div className="bs-value-icon">
            <BrandingIcons.Design className="bs-value-svg" />
          </div>
          <h3>Visual Identity Design</h3>
          <p>Stunning logos, color palettes, typography, and design systems that capture your brand essence</p>
        </div>
        
        <div className="bs-value-card">
          <div className="bs-value-icon">
            <BrandingIcons.Growth className="bs-value-svg" />
          </div>
          <h3>Brand Growth Solutions</h3>
          <p>Scalable brand frameworks and guidelines that support your business as it evolves and expands</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="bs-hero-stats">
        <div className="bs-stat-item">
          <div className="bs-stat-content">
            <div className="bs-stat-number">150+</div>
            <div className="bs-stat-label">Brands Transformed</div>
            <div className="bs-stat-description">Successful brand launches and rebrands across multiple industries</div>
          </div>
        </div>
        
        <div className="bs-stat-item">
          <div className="bs-stat-content">
            <div className="bs-stat-number">98%</div>
            <div className="bs-stat-label">Client Satisfaction</div>
            <div className="bs-stat-description">Consistently exceeding client expectations and delivering measurable results</div>
          </div>
        </div>
        
        <div className="bs-stat-item">
          <div className="bs-stat-content">
            <div className="bs-stat-number">$2.3B</div>
            <div className="bs-stat-label">Client Revenue Growth</div>
            <div className="bs-stat-description">Cumulative revenue growth achieved by our clients post-brand transformation</div>
          </div>
        </div>
      </div>



      {/* CTA Buttons */}
      <div className="bs-hero-actions">
        <button className="bs-cta-btn bs-btn-primary">
          <span className="bs-btn-text">Start Your Brand Journey</span>
        </button>
        <button className="bs-cta-btn bs-btn-secondary">
          <span className="bs-btn-text">View Our Portfolio</span>
        </button>
        <button className="bs-cta-btn bs-btn-tertiary">
          <span className="bs-btn-text">Book a Consultation</span>
        </button>
      </div>

      {/* Trust Badges */}
      <div className="bs-hero-trust">
        <span className="bs-trust-label">Trusted by industry leaders worldwide</span>
        <div className="bs-trust-logos">
          {['Google', 'Microsoft', 'Apple', 'Amazon', 'Meta', 'Netflix', 'Spotify', 'Airbnb'].map((company) => (
            <div key={company} className="bs-trust-logo">
              {company}
            </div>
          ))}
        </div>
      </div>

 
    </div>
  </div>
</section>
      {/* Services Section */}
      <section className="bs-services-section">
        <div className="bs-container">
          <div className="bs-section-header">
            <h2>Comprehensive Branding Services</h2>
            <p>End-to-end branding solutions tailored to your business goals and market position</p>
          </div>

          <div className="bs-services-tabs">
            {brandingServices.map(service => (
              <button
                key={service.id}
                className={`bs-tab-btn ${activeTab === service.id ? 'bs-tab-active' : ''}`}
                onClick={() => setActiveTab(service.id)}
              >
                <div className="bs-tab-icon">
                  <service.icon className="bs-service-icon" />
                </div>
                <span>{service.title}</span>
              </button>
            ))}
          </div>

          <div className="bs-service-details">
            {brandingServices.map(service => (
              <div
                key={service.id}
                className={`bs-service-panel ${activeTab === service.id ? 'bs-panel-active' : ''}`}
              >
                <div className="bs-service-info">
                  <div className="bs-service-header">
                    <div className="bs-service-icon-large">
                      <service.icon className="bs-service-icon-large-svg" />
                    </div>
                    <div>
                      <h3>{service.title}</h3>
                      <p className="bs-service-description">{service.description}</p>
                    </div>
                  </div>

                  <div className="bs-service-grid">
                    <div className="bs-features-column">
                      <h4 className="bs-column-title">What's Included</h4>
                      <ul className="bs-features-list">
                        {service.features.map((feature, index) => (
                          <li key={index} className="bs-feature-item">
                            <div className="bs-check-icon">
                              <BrandingIcons.Check className="bs-check-svg" />
                            </div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bs-deliverables-column">
                      <h4 className="bs-column-title">Key Deliverables</h4>
                      <ul className="bs-deliverables-list">
                        {service.deliverables.map((item, index) => (
                          <li key={index} className="bs-deliverable-item">
                            <div className="bs-deliverable-icon">
                              <BrandingIcons.Package className="bs-package-svg" />
                            </div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bs-service-meta">
                    <div className="bs-meta-item">
                      <div className="bs-meta-icon">
                        <BrandingIcons.Clock className="bs-clock-svg" />
                      </div>
                      <div>
                        <div className="bs-meta-label">Timeline</div>
                        <div className="bs-meta-value">{service.timeline}</div>
                      </div>
                    </div>
                    <div className="bs-meta-item">
                      <div className="bs-meta-icon">
                        <BrandingIcons.Revenue className="bs-revenue-svg" />
                      </div>
                      <div>
                        <div className="bs-meta-label">Investment</div>
                        <div className="bs-meta-value">{service.investment}</div>
                      </div>
                    </div>
                  </div>

                  <button className="bs-cta-btn bs-btn-primary bs-btn-large">
                    Get {service.title} Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bs-process-section">
        <div className="bs-container">
          <div className="bs-section-header">
            <h2>Our Proven Branding Process</h2>
            <p>A structured approach that ensures strategic alignment and exceptional creative execution</p>
          </div>

          <div className="bs-process-timeline">
            {brandingProcess.map((step, index) => (
              <div key={index} className="bs-process-step">
                <div className="bs-step-indicator">
                  <div className="bs-step-number">{step.step}</div>
                  <div className="bs-step-connector"></div>
                </div>
                <div className="bs-step-content">
                  <div className="bs-step-icon">
                    <step.icon className="bs-step-svg" />
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                  <div className="bs-step-duration">
                    <BrandingIcons.Clock className="bs-duration-svg" />
                    {step.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Elements Section */}
      <section className="bs-elements-section">
        <div className="bs-container">
          <div className="bs-section-header">
            <h2>Complete Brand Ecosystem</h2>
            <p>Every element working together to create a cohesive and powerful brand presence</p>
          </div>

          <div className="bs-elements-grid">
            {brandElements.map((element, index) => (
              <div key={index} className="bs-element-card">
                <div className="bs-element-icon">
                  <element.icon className="bs-element-svg" />
                </div>
                <h3>{element.title}</h3>
                <p>{element.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrandingService;