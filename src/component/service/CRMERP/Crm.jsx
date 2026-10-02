import React, { useState, useEffect } from 'react';

const CRMLMSERPServicePage = () => {
  const [activeTab, setActiveTab] = useState('crm');
  const [services, setServices] = useState({});
  const [selectedService, setSelectedService] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    companyName: '',
    employees: '',
    industry: '',
    currentSystem: '',
    budget: '',
    timeline: '1-3 months',
    requirements: ''
  });

  // Professional SVG Icons
  const SVGIcons = {
    CRM: () => (
      <svg className="crmlmserp-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="7" r="4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 3a4 4 0 0 1 0 8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="m21 21-4.3-4.3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    LMS: () => (
      <svg className="crmlmserp-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 12h6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 9v6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    ERP: () => (
      <svg className="crmlmserp-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="3" y1="9" x2="21" y2="9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="9" y1="21" x2="9" y2="9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="8" cy="6" r="1" fill="currentColor"/>
        <circle cx="12" cy="6" r="1" fill="currentColor"/>
        <circle cx="16" cy="6" r="1" fill="currentColor"/>
      </svg>
    ),
    Rocket: () => (
      <svg className="crmlmserp-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" strokeWidth="2"/>
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" strokeWidth="2"/>
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" strokeWidth="2"/>
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" strokeWidth="2"/>
      </svg>
    ),
    Tools: () => (
      <svg className="crmlmserp-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" strokeWidth="2"/>
      </svg>
    ),
    Analytics: () => (
      <svg className="crmlmserp-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <line x1="18" y1="20" x2="18" y2="10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="12" y1="20" x2="12" y2="4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="6" y1="20" x2="6" y2="14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    Cloud: () => (
      <svg className="crmlmserp-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    Check: () => (
      <svg className="crmlmserp-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <polyline points="20 6 9 17 4 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    Integration: () => (
      <svg className="crmlmserp-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M8 17l4 4 4-4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 21V11" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 11l-4-4-4 4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 11l4-4 4 4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 3v8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    Shield: () => (
      <svg className="crmlmserp-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    TrendingUp: () => (
      <svg className="crmlmserp-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M23 6l-9.5 9.5-5-5L1 18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17 6h6v6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    Users: () => (
      <svg className="crmlmserp-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="9" cy="7" r="4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    Globe: () => (
      <svg className="crmlmserp-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <circle cx="12" cy="12" r="10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="2" y1="12" x2="22" y2="12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    Award: () => (
      <svg className="crmlmserp-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <circle cx="12" cy="8" r="7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  };

  // Mock data for CRM services
  const crmServices = [
    {
      id: 'crm-service-1',
      name: 'Sales CRM Pro',
      description: 'Complete customer relationship management with advanced sales automation and pipeline tracking',
      price: 299,
      features: [
        'Contact & lead management',
        'Sales pipeline tracking',
        'Email marketing automation',
        'Mobile app access',
        'Basic analytics & reporting',
        'Social media integration'
      ],
      integrations: ['Salesforce', 'HubSpot', 'Mailchimp', 'Slack'],
      bestFor: 'Sales teams needing comprehensive customer tracking',
      users: 'Up to 10 users',
      popular: true
    },
    {
      id: 'crm-service-2',
      name: 'Marketing CRM Suite',
      description: 'Advanced marketing automation with customer journey mapping and multi-channel campaigns',
      price: 599,
      features: [
        'Advanced lead scoring',
        'Customer journey mapping',
        'Multi-channel marketing',
        'AI-powered insights',
        'API access',
        'Dedicated account manager'
      ],
      integrations: ['Google Analytics', 'Facebook Ads', 'Instagram', 'LinkedIn'],
      bestFor: 'Marketing teams requiring advanced automation',
      users: 'Up to 25 users',
      popular: false
    },
    {
      id: 'crm-service-3',
      name: 'Enterprise CRM Platform',
      description: 'Full-scale CRM with custom development, enterprise support, and unlimited scalability',
      price: 1299,
      features: [
        'Custom workflow development',
        'Advanced AI analytics',
        'Unlimited users',
        '24/7 premium support',
        'Custom API development',
        'On-premise deployment option',
        'Training & certification'
      ],
      integrations: ['All major platforms', 'Custom integrations', 'Legacy systems'],
      bestFor: 'Large enterprises needing custom solutions',
      users: 'Unlimited users',
      popular: false
    }
  ];

  // Mock data for LMS services
  const lmsServices = [
    {
      id: 'lms-service-1',
      name: 'Learning Platform Basic',
      description: 'Essential learning management for small teams with course creation and progress tracking',
      price: 199,
      features: [
        'Course creation tools',
        'Student progress tracking',
        'Basic assessments',
        'Certificate generation',
        'Mobile learning app',
        'Discussion forums'
      ],
      integrations: ['Zoom', 'Google Drive', 'YouTube'],
      bestFor: 'Small teams and educational institutions',
      users: 'Up to 50 students',
      popular: false
    },
    {
      id: 'lms-service-2',
      name: 'Corporate Training Suite',
      description: 'Advanced corporate training platform with compliance tracking and custom branding',
      price: 499,
      features: [
        'Compliance tracking',
        'Advanced reporting',
        'Custom branding',
        'SSO integration',
        'Advanced assessments',
        'Gamification features',
        'Manager dashboards'
      ],
      integrations: ['HR Systems', 'Single Sign-On', 'SCORM', 'xAPI'],
      bestFor: 'Corporate training departments',
      users: 'Up to 500 employees',
      popular: true
    },
    {
      id: 'lms-service-3',
      name: 'Enterprise Academy',
      description: 'Complete learning ecosystem for large organizations with AI-powered recommendations',
      price: 999,
      features: [
        'Unlimited courses & users',
        'AI-powered recommendations',
        'Custom development',
        'Advanced analytics',
        'Multi-tenant architecture',
        'API marketplace',
        'Dedicated support team'
      ],
      integrations: ['All enterprise systems', 'Custom APIs', 'Legacy LMS'],
      bestFor: 'Large enterprises and universities',
      users: 'Unlimited users',
      popular: false
    }
  ];

  // Mock data for ERP services
  const erpServices = [
    {
      id: 'erp-service-1',
      name: 'Business Essentials ERP',
      description: 'Integrated business management solution for growing companies and startups',
      price: 799,
      features: [
        'Accounting & finance',
        'Inventory management',
        'Basic HR management',
        'Sales & purchase orders',
        'Basic reporting',
        'Multi-currency support'
      ],
      integrations: ['QuickBooks', 'Stripe', 'PayPal'],
      bestFor: 'Small to medium businesses',
      users: 'Up to 20 users',
      popular: false
    },
    {
      id: 'erp-service-2',
      name: 'Enterprise Resource Pro',
      description: 'Comprehensive ERP with advanced business intelligence and supply chain management',
      price: 1899,
      features: [
        'Advanced financials',
        'Supply chain management',
        'Advanced HR & payroll',
        'Manufacturing modules',
        'Business intelligence',
        'Custom workflows',
        'Advanced security'
      ],
      integrations: ['SAP', 'Oracle', 'Salesforce', 'Custom systems'],
      bestFor: 'Medium to large enterprises',
      users: 'Up to 100 users',
      popular: true
    },
    {
      id: 'erp-service-3',
      name: 'Global Enterprise Suite',
      description: 'End-to-end enterprise resource planning for global operations and multi-company management',
      price: 3499,
      features: [
        'Global compliance management',
        'Multi-company consolidation',
        'Advanced analytics & AI',
        'Custom module development',
        '24/7 dedicated support',
        'Disaster recovery',
        'Performance optimization'
      ],
      integrations: ['All enterprise systems', 'Custom development', 'Legacy ERP'],
      bestFor: 'Global enterprises with complex operations',
      users: 'Unlimited users',
      popular: false
    }
  ];

  // Mock statistics
  const serviceStats = {
    crm: { clients: 1250, satisfaction: 98, implementation: '2-4 weeks' },
    lms: { clients: 890, satisfaction: 96, implementation: '3-6 weeks' },
    erp: { clients: 540, satisfaction: 95, implementation: '4-8 weeks' }
  };

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setServices({
        crm: crmServices,
        lms: lmsServices,
        erp: erpServices
      });
      setLoading(false);
    }, 1000);
  }, []);

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setShowModal(false);
      setSelectedService(null);
      setFormData({
        companyName: '',
        employees: '',
        industry: '',
        currentSystem: '',
        budget: '',
        timeline: '1-3 months',
        requirements: ''
      });
      setLoading(false);
      
      // Show success message
      alert('Thank you! Our team will contact you within 24 hours to discuss your ' + selectedService.name + ' implementation.');
    }, 2000);
  };

  // Enhanced Hero Section Component
  const EnhancedHeroSection = () => {
    return (
      <div className="crmlmserp-hero-section-enhanced">
        {/* Animated Background */}
        <div className="crmlmserp-hero-background-enhanced">
          <div className="crmlmserp-hero-gradient"></div>
          <div className="crmlmserp-hero-particles">
            {[...Array(15)].map((_, i) => (
              <div key={i} className="crmlmserp-particle" style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${15 + Math.random() * 10}s`
              }}></div>
            ))}
          </div>
          <div className="crmlmserp-hero-grid-pattern"></div>
        </div>

        {/* Main Hero Content */}
        <div className="crmlmserp-hero-content-enhanced">
          <div className="crmlmserp-hero-main">
            {/* Left Content */}
            <div className="crmlmserp-hero-text-enhanced">
              <div className="crmlmserp-hero-badge">
                <SVGIcons.Award />
                <span>Trusted by 2,680+ Enterprises Worldwide</span>
              </div>

              <h1 className="crmlmserp-hero-title-enhanced">
                <span className="crmlmserp-hero-title-line">Transform Your Business</span>
                <span className="crmlmserp-hero-title-accent">With Enterprise-Grade</span>
                <span className="crmlmserp-hero-title-main">CRM • LMS • ERP</span>
                <span className="crmlmserp-hero-title-line">Solutions</span>
              </h1>

              <p className="crmlmserp-hero-description-enhanced">
                Streamline operations, accelerate growth, and drive digital transformation with our comprehensive suite of business solutions. 
                Built for scalability, powered by innovation, trusted by industry leaders.
              </p>

              {/* Enhanced CTA Buttons */}
              <div className="crmlmserp-hero-actions-enhanced">
                <button className="crmlmserp-hero-cta-primary">
                  <span>Start Free Consultation</span>
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <button className="crmlmserp-hero-cta-secondary">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" strokeWidth="2"/>
                    <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeWidth="2"/>
                  </svg>
                  <span>Watch Demo</span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="crmlmserp-hero-trust">
                <div className="crmlmserp-trust-label">Trusted by industry leaders:</div>
                <div className="crmlmserp-trust-logos">
                  <div className="crmlmserp-trust-logo">Microsoft</div>
                  <div className="crmlmserp-trust-logo">Google</div>
                  <div className="crmlmserp-trust-logo">Amazon</div>
                  <div className="crmlmserp-trust-logo">Salesforce</div>
                </div>
              </div>
            </div>

            {/* Right Visual Content */}
            <div className="crmlmserp-hero-visual-enhanced">
              <div className="crmlmserp-hero-dashboard">
                {/* Dashboard Mockup */}
                <div className="crmlmserp-dashboard-header">
                  <div className="crmlmserp-dashboard-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className="crmlmserp-dashboard-title">Enterprise Dashboard</div>
                </div>
                
                <div className="crmlmserp-dashboard-content">
                  <div className="crmlmserp-dashboard-widgets">
                    <div className="crmlmserp-widget crmlmserp-widget-analytics">
                      <div className="crmlmserp-widget-header">
                        <span>Performance Analytics</span>
                        <span className="crmlmserp-widget-badge">+24%</span>
                      </div>
                      <div className="crmlmserp-chart">
                        <div className="crmlmserp-chart-bar" style={{height: '60%'}}></div>
                        <div className="crmlmserp-chart-bar" style={{height: '80%'}}></div>
                        <div className="crmlmserp-chart-bar" style={{height: '45%'}}></div>
                        <div className="crmlmserp-chart-bar" style={{height: '90%'}}></div>
                        <div className="crmlmserp-chart-bar" style={{height: '70%'}}></div>
                      </div>
                    </div>
                    
                    <div className="crmlmserp-widget crmlmserp-widget-stats">
                      <div className="crmlmserp-stat-mini">
                        <SVGIcons.Users />
                        <div>
                          <div className="crmlmserp-stat-value">1.2K</div>
                          <div className="crmlmserp-stat-label">Active Users</div>
                        </div>
                      </div>
                      <div className="crmlmserp-stat-mini">
                        <SVGIcons.TrendingUp />
                        <div>
                          <div className="crmlmserp-stat-value">98%</div>
                          <div className="crmlmserp-stat-label">Satisfaction</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="crmlmserp-hero-floating crmlmserp-floating-1">
                <SVGIcons.Shield />
                <span>Enterprise Security</span>
              </div>
              <div className="crmlmserp-hero-floating crmlmserp-floating-2">
                <SVGIcons.Globe />
                <span>Global Support</span>
              </div>
              <div className="crmlmserp-hero-floating crmlmserp-floating-3">
                <SVGIcons.Cloud />
                <span>Cloud Native</span>
              </div>
            </div>
          </div>

          {/* Enhanced Stats Bar */}
          <div className="crmlmserp-hero-stats-enhanced">
            <div className="crmlmserp-hero-stat-enhanced">
              <div className="crmlmserp-stat-icon">
                <SVGIcons.TrendingUp />
              </div>
              <div className="crmlmserp-stat-content">
                <div className="crmlmserp-stat-number">2,680+</div>
                <div className="crmlmserp-stat-label">Businesses Transformed</div>
              </div>
            </div>
            
            <div className="crmlmserp-hero-stat-enhanced">
              <div className="crmlmserp-stat-icon">
                <SVGIcons.Users />
              </div>
              <div className="crmlmserp-stat-content">
                <div className="crmlmserp-stat-number">98%</div>
                <div className="crmlmserp-stat-label">Client Satisfaction Rate</div>
              </div>
            </div>
            
            <div className="crmlmserp-hero-stat-enhanced">
              <div className="crmlmserp-stat-icon">
                <SVGIcons.Shield />
              </div>
              <div className="crmlmserp-stat-content">
                <div className="crmlmserp-stat-number">24/7</div>
                <div className="crmlmserp-stat-label">Expert Support & Security</div>
              </div>
            </div>
            
            <div className="crmlmserp-hero-stat-enhanced">
              <div className="crmlmserp-stat-icon">
                <SVGIcons.Globe />
              </div>
              <div className="crmlmserp-stat-content">
                <div className="crmlmserp-stat-number">50+</div>
                <div className="crmlmserp-stat-label">Countries Served</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Enhanced Service Card Component
  const ServiceCard = ({ service, serviceType }) => {
    return (
      <div className={`crmlmserp-service-card ${service.popular ? 'crmlmserp-service-card-popular' : ''}`}>
        {service.popular && <div className="crmlmserp-popular-badge">RECOMMENDED</div>}
        
        <div className="crmlmserp-service-header">
          <h3 className="crmlmserp-service-title">{service.name}</h3>
          <div className="crmlmserp-price-section">
            <span className="crmlmserp-price">${service.price}</span>
            <span className="crmlmserp-period">/month</span>
          </div>
        </div>

        <p className="crmlmserp-service-description">{service.description}</p>

        <div className="crmlmserp-service-meta">
          <div className="crmlmserp-meta-item">
            <span className="crmlmserp-meta-label">Best For:</span>
            <span className="crmlmserp-meta-value">{service.bestFor}</span>
          </div>
          <div className="crmlmserp-meta-item">
            <span className="crmlmserp-meta-label">Users:</span>
            <span className="crmlmserp-meta-value">{service.users}</span>
          </div>
        </div>

        <div className="crmlmserp-service-features">
          <h4 className="crmlmserp-features-title">
            <SVGIcons.Check />
            Key Features
          </h4>
          <ul className="crmlmserp-features-list">
            {service.features.map((feature, index) => (
              <li key={index} className="crmlmserp-feature-item">
                <span className="crmlmserp-feature-check">
                  <SVGIcons.Check />
                </span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="crmlmserp-service-integrations">
          <h4 className="crmlmserp-integrations-title">
            <SVGIcons.Integration />
            Integrations
          </h4>
          <div className="crmlmserp-integrations-tags">
            {service.integrations.map((integration, index) => (
              <span key={index} className="crmlmserp-integration-tag">{integration}</span>
            ))}
          </div>
        </div>

        <button 
          className={`crmlmserp-select-btn ${service.popular ? 'crmlmserp-select-btn-popular' : ''}`}
          onClick={() => handleServiceSelect(service)}
        >
          Get Started
          <span className="crmlmserp-btn-arrow">→</span>
        </button>
      </div>
    );
  };

  // Stats Component
  const ServiceStats = ({ serviceType }) => {
    const stats = serviceStats[serviceType];
    return (
      <div className="crmlmserp-service-stats">
        <div className="crmlmserp-stat-item">
          <span className="crmlmserp-stat-number">{stats.clients}+</span>
          <span className="crmlmserp-stat-label">Happy Clients</span>
        </div>
        <div className="crmlmserp-stat-item">
          <span className="crmlmserp-stat-number">{stats.satisfaction}%</span>
          <span className="crmlmserp-stat-label">Satisfaction Rate</span>
        </div>
        <div className="crmlmserp-stat-item">
          <span className="crmlmserp-stat-number">{stats.implementation}</span>
          <span className="crmlmserp-stat-label">Implementation Time</span>
        </div>
      </div>
    );
  };

  // Consultation Modal Component
  const ConsultationModal = ({ service, serviceType, onClose, onSubmit, loading }) => {
    const getServiceTypeName = (type) => {
      switch(type) {
        case 'crm': return 'CRM';
        case 'lms': return 'LMS';
        case 'erp': return 'ERP';
        default: return 'Business';
      }
    };

    return (
      <div className="crmlmserp-modal-overlay">
        <div className="crmlmserp-modal-content">
          <div className="crmlmserp-modal-header">
            <h2 className="crmlmserp-modal-title">Start Your {getServiceTypeName(serviceType)} Implementation</h2>
            <button className="crmlmserp-close-btn" onClick={onClose}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <line x1="18" y1="6" x2="6" y2="18" strokeWidth="2"/>
                <line x1="6" y1="6" x2="18" y2="18" strokeWidth="2"/>
              </svg>
            </button>
          </div>

          <div className="crmlmserp-modal-body">
            <div className="crmlmserp-service-summary">
              <h3 className="crmlmserp-service-summary-title">{service.name}</h3>
              <p className="crmlmserp-service-summary-desc">{service.description}</p>
              <div className="crmlmserp-service-price-modal">${service.price}<span>/month</span></div>
            </div>

            <form onSubmit={onSubmit} className="crmlmserp-consultation-form">
              <div className="crmlmserp-form-section">
                <label className="crmlmserp-form-label">Company Name *</label>
                <input
                  type="text"
                  placeholder="Your company name"
                  value={formData.companyName}
                  onChange={(e) => handleInputChange('companyName', e.target.value)}
                  required
                  className="crmlmserp-form-input"
                />
              </div>

              <div className="crmlmserp-form-row">
                <div className="crmlmserp-form-section">
                  <label className="crmlmserp-form-label">Number of Employees *</label>
                  <select 
                    value={formData.employees}
                    onChange={(e) => handleInputChange('employees', e.target.value)}
                    required
                    className="crmlmserp-form-select"
                  >
                    <option value="">Select size</option>
                    <option value="1-10">1-10 employees</option>
                    <option value="11-50">11-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                    <option value="201-500">201-500 employees</option>
                    <option value="501-1000">501-1000 employees</option>
                    <option value="1000+">1000+ employees</option>
                  </select>
                </div>

                <div className="crmlmserp-form-section">
                  <label className="crmlmserp-form-label">Industry *</label>
                  <select 
                    value={formData.industry}
                    onChange={(e) => handleInputChange('industry', e.target.value)}
                    required
                    className="crmlmserp-form-select"
                  >
                    <option value="">Select industry</option>
                    <option value="technology">Technology</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="education">Education</option>
                    <option value="retail">Retail</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="finance">Finance</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="crmlmserp-form-row">
                <div className="crmlmserp-form-section">
                  <label className="crmlmserp-form-label">Current System</label>
                  <input
                    type="text"
                    placeholder="What system are you using now?"
                    value={formData.currentSystem}
                    onChange={(e) => handleInputChange('currentSystem', e.target.value)}
                    className="crmlmserp-form-input"
                  />
                </div>

                <div className="crmlmserp-form-section">
                  <label className="crmlmserp-form-label">Monthly Budget *</label>
                  <select 
                    value={formData.budget}
                    onChange={(e) => handleInputChange('budget', e.target.value)}
                    required
                    className="crmlmserp-form-select"
                  >
                    <option value="">Select budget</option>
                    <option value="under-500">Under $500</option>
                    <option value="500-1000">$500 - $1,000</option>
                    <option value="1000-2500">$1,000 - $2,500</option>
                    <option value="2500-5000">$2,500 - $5,000</option>
                    <option value="5000+">$5,000+</option>
                  </select>
                </div>
              </div>

              <div className="crmlmserp-form-section">
                <label className="crmlmserp-form-label">Implementation Timeline</label>
                <select 
                  value={formData.timeline}
                  onChange={(e) => handleInputChange('timeline', e.target.value)}
                  className="crmlmserp-form-select"
                >
                  <option value="1-3 months">1-3 months</option>
                  <option value="3-6 months">3-6 months</option>
                  <option value="6-12 months">6-12 months</option>
                  <option value="12+ months">12+ months</option>
                </select>
              </div>

              <div className="crmlmserp-form-section">
                <label className="crmlmserp-form-label">Specific Requirements</label>
                <textarea
                  placeholder="Tell us about your specific needs, challenges, and goals..."
                  rows="4"
                  value={formData.requirements}
                  onChange={(e) => handleInputChange('requirements', e.target.value)}
                  className="crmlmserp-form-textarea"
                />
              </div>

              <div className="crmlmserp-form-actions">
                <button type="button" className="crmlmserp-cancel-btn" onClick={onClose}>
                  Cancel
                </button>
                <button type="submit" className="crmlmserp-submit-btn" disabled={loading}>
                  {loading ? (
                    <>
                      <div className="crmlmserp-btn-spinner"></div>
                      Processing...
                    </>
                  ) : (
                    `Start ${getServiceTypeName(serviceType)} Implementation`
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };

  if (loading && Object.keys(services).length === 0) {
    return (
      <div className="crmlmserp-loading">
        <div className="crmlmserp-loading-spinner"></div>
        <p className="crmlmserp-loading-text">Loading Business Solutions...</p>
      </div>
    );
  }

  return (
    <div className="crmlmserp-service-page">
      {/* Enhanced Hero Section */}
      <EnhancedHeroSection />

      {/* Enhanced Service Navigation */}
      <nav className="crmlmserp-navigation">
        <button 
          className={`crmlmserp-nav-tab ${activeTab === 'crm' ? 'crmlmserp-nav-tab-active' : ''}`}
          onClick={() => setActiveTab('crm')}
        >
          <span className="crmlmserp-nav-icon">
            <SVGIcons.CRM />
          </span>
          <span className="crmlmserp-nav-text">CRM Solutions</span>
        </button>
        <button 
          className={`crmlmserp-nav-tab ${activeTab === 'lms' ? 'crmlmserp-nav-tab-active' : ''}`}
          onClick={() => setActiveTab('lms')}
        >
          <span className="crmlmserp-nav-icon">
            <SVGIcons.LMS />
          </span>
          <span className="crmlmserp-nav-text">LMS Platforms</span>
        </button>
        <button 
          className={`crmlmserp-nav-tab ${activeTab === 'erp' ? 'crmlmserp-nav-tab-active' : ''}`}
          onClick={() => setActiveTab('erp')}
        >
          <span className="crmlmserp-nav-icon">
            <SVGIcons.ERP />
          </span>
          <span className="crmlmserp-nav-text">ERP Systems</span>
        </button>
      </nav>

      {/* Main Content */}
      <div className="crmlmserp-content">
        {activeTab === 'crm' && (
          <div className="crmlmserp-service-section">
            <div className="crmlmserp-section-header">
              <h2 className="crmlmserp-section-title">Customer Relationship Management</h2>
              <p className="crmlmserp-section-description">Streamline your sales, marketing, and customer service with intelligent CRM solutions</p>
              <ServiceStats serviceType="crm" />
            </div>

            <div className="crmlmserp-services-grid">
              {services.crm && services.crm.map(service => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  serviceType="crm"
                />
              ))}
            </div>
          </div>
        )}

        {activeTab === 'lms' && (
          <div className="crmlmserp-service-section">
            <div className="crmlmserp-section-header">
              <h2 className="crmlmserp-section-title">Learning Management Systems</h2>
              <p className="crmlmserp-section-description">Deliver engaging learning experiences with our comprehensive LMS platforms</p>
              <ServiceStats serviceType="lms" />
            </div>

            <div className="crmlmserp-services-grid">
              {services.lms && services.lms.map(service => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  serviceType="lms"
                />
              ))}
            </div>
          </div>
        )}

        {activeTab === 'erp' && (
          <div className="crmlmserp-service-section">
            <div className="crmlmserp-section-header">
              <h2 className="crmlmserp-section-title">Enterprise Resource Planning</h2>
              <p className="crmlmserp-section-description">Integrate and automate your business processes with powerful ERP systems</p>
              <ServiceStats serviceType="erp" />
            </div>

            <div className="crmlmserp-services-grid">
              {services.erp && services.erp.map(service => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  serviceType="erp"
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Enhanced Features Comparison Section */}
<div className="crmlmserp-comparison-section">
  <div className="crmlmserp-comparison-header">
    <h2 className="crmlmserp-comparison-title">Why Choose Our Business Solutions?</h2>
    <p className="crmlmserp-comparison-subtitle">Enterprise-grade features designed for scalability and performance</p>
  </div>
  
  <div className="crmlmserp-comparison-grid">
    <div className="crmlmserp-comparison-card">
      <div className="crmlmserp-comparison-icon">
        <SVGIcons.Rocket />
      </div>
      <h3 className="crmlmserp-comparison-card-title">Rapid Implementation</h3>
      <p className="crmlmserp-comparison-card-description">Get your systems up and running in weeks, not months with our proven implementation methodology</p>
      <div className="crmlmserp-card-hover-effect"></div>
    </div>
    
    <div className="crmlmserp-comparison-card">
      <div className="crmlmserp-comparison-icon">
        <SVGIcons.Tools />
      </div>
      <h3 className="crmlmserp-comparison-card-title">Custom Development</h3>
      <p className="crmlmserp-comparison-card-description">Tailored solutions that fit your unique business processes and requirements</p>
      <div className="crmlmserp-card-hover-effect"></div>
    </div>
    
    <div className="crmlmserp-comparison-card">
      <div className="crmlmserp-comparison-icon">
        <SVGIcons.Analytics />
      </div>
      <h3 className="crmlmserp-comparison-card-title">Advanced Analytics</h3>
      <p className="crmlmserp-comparison-card-description">Make data-driven decisions with comprehensive reporting and business intelligence</p>
      <div className="crmlmserp-card-hover-effect"></div>
    </div>
    
    <div className="crmlmserp-comparison-card">
      <div className="crmlmserp-comparison-icon">
        <SVGIcons.Cloud />
      </div>
      <h3 className="crmlmserp-comparison-card-title">Cloud & On-Premise</h3>
      <p className="crmlmserp-comparison-card-description">Flexible deployment options to meet your security and infrastructure needs</p>
      <div className="crmlmserp-card-hover-effect"></div>
    </div>
  </div>
</div>

      {/* Consultation Modal */}
      {showModal && selectedService && (
        <ConsultationModal
          service={selectedService}
          serviceType={activeTab}
          onClose={() => setShowModal(false)}
          onSubmit={handleFormSubmit}
          loading={loading}
        />
      )}
    </div>
  );
};

export default CRMLMSERPServicePage;