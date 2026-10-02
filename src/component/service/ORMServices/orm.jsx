// ORMServicePage.jsx
import React, { useState, useEffect } from 'react';

// SVG Icons for ORM Service
const ORMIcons = {
  Dashboard: ({ className = "" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
    </svg>
  ),
  Services: ({ className = "" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  ),
  Cases: ({ className = "" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  Reports: ({ className = "" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
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
  Refresh: ({ className = "" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  ),
  Download: ({ className = "" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
  ),
  Shield: ({ className = "" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  Chart: ({ className = "" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  Users: ({ className = "" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
    </svg>
  ),
  TrendingUp: ({ className = "" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  ),
  Star: ({ className = "" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  ),
  Clock: ({ className = "" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  CheckCircle: ({ className = "" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  Alert: ({ className = "" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
    </svg>
  ),
  Calendar: ({ className = "" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  File: ({ className = "" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  )
};

// Mock data for services
const mockORMServices = [
  {
    id: 1,
    name: 'Essential Monitoring',
    description: 'Basic reputation monitoring across key platforms with weekly reports',
    price: 299,
    features: [
      'Daily sentiment monitoring',
      'Weekly summary reports',
      '3 social media platforms',
      'Basic alert system',
      'Email support'
    ],
    monitoringTools: ['Google Alerts', 'Social Mention', 'Review Trackers'],
    reportingFeatures: ['Weekly PDF Reports', 'Sentiment Analysis', 'Mention Volume'],
    responseTime: '24-48 hours',
    platformsCovered: ['Google Reviews', 'Facebook', 'Twitter'],
    popular: false
  },
  {
    id: 2,
    name: 'Professional ORM',
    description: 'Comprehensive reputation management with real-time alerts and monthly strategy sessions',
    price: 699,
    features: [
      'Real-time sentiment monitoring',
      'Customized alert system',
      '8+ social media platforms',
      'Monthly strategy sessions',
      'Priority email & chat support',
      'Competitor analysis',
      'Crisis management protocol'
    ],
    monitoringTools: ['Brand24', 'Mention', 'ReviewTrackers', 'Hootsuite'],
    reportingFeatures: ['Real-time Dashboard', 'Custom Reports', 'Competitor Analysis', 'Sentiment Trends'],
    responseTime: '2-4 hours',
    platformsCovered: ['Google Reviews', 'Yelp', 'Facebook', 'Twitter', 'Instagram', 'LinkedIn', 'Industry Forums'],
    popular: true
  },
  {
    id: 3,
    name: 'Enterprise Reputation',
    description: 'Full-scale reputation management with dedicated account manager and crisis response team',
    price: 1299,
    features: [
      '24/7 real-time monitoring',
      'Dedicated account manager',
      'All major platforms + news sites',
      'Weekly strategy sessions',
      'Phone, email, chat support',
      'Advanced competitor analysis',
      'Crisis response team',
      'Legal consultation access',
      'Custom API integration'
    ],
    monitoringTools: ['Brand24 Enterprise', 'Mention Pro', 'Cision', 'Meltwater'],
    reportingFeatures: ['Custom Real-time Dashboard', 'Executive Summary', 'ROI Analysis', 'Market Insights'],
    responseTime: '1-2 hours',
    platformsCovered: ['All major review sites', 'All social media', 'News outlets', 'Blogs', 'Forums'],
    popular: false
  }
];

// Enhanced mock user data
const mockUser = {
  id: 1,
  name: 'Sarah Wilson',
  email: 'sarah@example.com',
  role: 'client',
  company: 'TechCorp Inc.',
  joinDate: '2023-05-15'
};

// Enhanced mock cases data
const mockCases = [
  {
    id: 1,
    serviceId: 2,
    title: 'Negative Review Management - Google',
    status: 'active',
    priority: 'high',
    negativeMentions: 12,
    positiveMentions: 45,
    sentimentScore: 73,
    service: { name: 'Professional ORM' },
    createdAt: '2024-01-15',
    lastUpdate: '2024-01-20',
    assignedTo: 'John Davis',
    nextAction: 'Response drafting',
    platform: 'Google Reviews'
  },
  {
    id: 2,
    serviceId: 1,
    title: 'Social Media Sentiment Analysis',
    status: 'monitoring',
    priority: 'medium',
    negativeMentions: 5,
    positiveMentions: 28,
    sentimentScore: 82,
    service: { name: 'Essential Monitoring' },
    createdAt: '2024-01-10',
    lastUpdate: '2024-01-19',
    assignedTo: 'Sarah Miller',
    nextAction: 'Weekly report',
    platform: 'Twitter & Facebook'
  },
  {
    id: 3,
    serviceId: 2,
    title: 'Competitor Comparison Analysis',
    status: 'completed',
    priority: 'low',
    negativeMentions: 3,
    positiveMentions: 67,
    sentimentScore: 91,
    service: { name: 'Professional ORM' },
    createdAt: '2024-01-05',
    lastUpdate: '2024-01-18',
    assignedTo: 'Mike Johnson',
    nextAction: 'Completed',
    platform: 'Multiple Platforms'
  }
];

// Mock reports data
const mockReports = [
  {
    id: 1,
    title: 'Monthly Reputation Analysis - January 2024',
    type: 'comprehensive',
    date: '2024-01-31',
    status: 'generated',
    downloadUrl: '#',
    metrics: {
      totalMentions: 324,
      sentimentScore: 78,
      engagementRate: 4.2
    }
  },
  {
    id: 2,
    title: 'Competitor Benchmark Report',
    type: 'competitive',
    date: '2024-01-28',
    status: 'pending',
    downloadUrl: '#',
    metrics: {
      totalMentions: 187,
      sentimentScore: 82,
      engagementRate: 3.8
    }
  },
  {
    id: 3,
    title: 'Crisis Alert Summary',
    type: 'alert',
    date: '2024-01-25',
    status: 'generated',
    downloadUrl: '#',
    metrics: {
      totalMentions: 89,
      sentimentScore: 45,
      engagementRate: 6.1
    }
  }
];

// Mock dashboard data
const mockDashboardData = {
  overview: {
    totalMentions: 847,
    positiveMentions: 623,
    negativeMentions: 87,
    neutralMentions: 137,
    overallSentiment: 78
  },
  recentActivity: [
    {
      id: 1,
      type: 'mention',
      platform: 'Google Reviews',
      sentiment: 'positive',
      content: 'Great service and excellent support team!',
      time: '2 hours ago'
    },
    {
      id: 2,
      type: 'alert',
      platform: 'Twitter',
      sentiment: 'negative',
      content: 'Customer complaint about delivery time',
      time: '5 hours ago'
    },
    {
      id: 3,
      type: 'response',
      platform: 'Facebook',
      sentiment: 'neutral',
      content: 'Response posted to customer inquiry',
      time: '1 day ago'
    }
  ],
  platformMetrics: [
    { platform: 'Google', mentions: 324, sentiment: 82 },
    { platform: 'Facebook', mentions: 187, sentiment: 75 },
    { platform: 'Twitter', mentions: 156, sentiment: 71 },
    { platform: 'Yelp', mentions: 89, sentiment: 85 },
    { platform: 'Instagram', mentions: 91, sentiment: 88 }
  ]
};

const ORMServicePage = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [services, setServices] = useState([]);
  const [userCases, setUserCases] = useState([]);
  const [reports, setReports] = useState([]);
  const [dashboardData, setDashboardData] = useState(null);
  const [statistics, setStatistics] = useState(null);
  const [user, setUser] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    initializeData();
  }, []);

  const initializeData = async () => {
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setServices(mockORMServices);
      setUser(mockUser);
      setUserCases(mockCases);
      setReports(mockReports);
      setDashboardData(mockDashboardData);
      
      const stats = {
        totalCases: mockCases.length,
        activeCases: mockCases.filter(c => c.status === 'active').length,
        resolvedCases: mockCases.filter(c => c.status === 'completed').length,
        averageSentiment: Math.round(mockCases.reduce((sum, c) => sum + c.sentimentScore, 0) / mockCases.length * 10) / 10
      };
      setStatistics(stats);
      setLoading(false);
    }, 1000);
  };

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const handleOrderSubmit = async (orderData) => {
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const newCase = {
        id: Date.now(),
        serviceId: selectedService.id,
        status: 'monitoring',
        priority: orderData.priority || 'medium',
        negativeMentions: 0,
        positiveMentions: 0,
        sentimentScore: 0,
        service: selectedService,
        createdAt: new Date().toISOString()
      };
      
      setUserCases(prev => [newCase, ...prev]);
      
      const updatedStats = {
        totalCases: userCases.length + 1,
        activeCases: userCases.filter(c => c.status === 'active').length,
        resolvedCases: userCases.filter(c => c.status === 'resolved').length,
        averageSentiment: statistics.averageSentiment
      };
      setStatistics(updatedStats);
      
      setShowModal(false);
      setSelectedService(null);
      setActiveTab('dashboard');
      setLoading(false);
    }, 1500);
  };

  // Service Card Component
  const ServiceCard = ({ service, onSelect }) => {
    const getPopularBadge = () => {
      if (service.popular) {
        return <div className="orm-popular-badge">MOST POPULAR</div>;
      }
      return null;
    };

    const getResponseTimeColor = (responseTime) => {
      if (responseTime.includes('1-2')) return '#10B981';
      if (responseTime.includes('2-4')) return '#F59E0B';
      return '#EF4444';
    };

    return (
      <div className={`orm-service-card ${service.popular ? 'orm-popular' : ''}`}>
        {getPopularBadge()}
        
        <div className="orm-service-header">
          <h3>{service.name}</h3>
          <div className="orm-price-section">
            <span className="orm-price">${service.price}</span>
            <span className="orm-period">/month</span>
          </div>
        </div>

        <p className="orm-service-description">{service.description}</p>

        <div className="orm-response-time">
          <span 
            className="orm-response-indicator"
            style={{ backgroundColor: getResponseTimeColor(service.responseTime) }}
          ></span>
          Response Time: {service.responseTime}
        </div>

        <div className="orm-service-features">
          <h4>Key Features:</h4>
          <ul>
            {service.features.slice(0, 4).map((feature, index) => (
              <li key={index}>
                <ORMIcons.Check className="orm-check-icon" />
                {feature}
              </li>
            ))}
            {service.features.length > 4 && (
              <li className="orm-more-features">
                +{service.features.length - 4} more features
              </li>
            )}
          </ul>
        </div>

        <div className="orm-monitoring-tools">
          <h4>Monitoring Includes:</h4>
          <div className="orm-tools-tags">
            {service.monitoringTools.slice(0, 3).map((tool, index) => (
              <span key={index} className="orm-tool-tag">{tool}</span>
            ))}
            {service.monitoringTools.length > 3 && (
              <span className="orm-tool-tag">+{service.monitoringTools.length - 3}</span>
            )}
          </div>
        </div>

        <button 
          className={`orm-select-btn ${service.popular ? 'orm-popular-btn' : ''}`}
          onClick={() => onSelect(service)}
        >
          {service.popular ? 'Get Started' : 'Choose Plan'}
          <ORMIcons.Arrow className="orm-btn-arrow" />
        </button>
      </div>
    );
  };

  // Service Modal Component
  const ServiceModal = ({ service, onSubmit, onClose, loading }) => {
    const [formData, setFormData] = useState({
      priority: 'medium',
      companyName: '',
      website: '',
      requirements: ''
    });

    const handleInputChange = (field, value) => {
      setFormData(prev => ({
        ...prev,
        [field]: value
      }));
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit(formData);
    };

    return (
      <div className="orm-modal-overlay">
        <div className="orm-modal-content">
          <div className="orm-modal-header">
            <h2>Start Your Reputation Management</h2>
            <button className="orm-close-btn" onClick={onClose}>×</button>
          </div>

          <div className="orm-modal-body">
            <div className="orm-service-summary">
              <div className="orm-service-badge">{service.popular ? 'POPULAR' : 'STANDARD'}</div>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <div className="orm-service-price-modal">
                ${service.price}<span>/month</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="orm-order-form-modal">
              <div className="orm-form-section">
                <label>Service Priority Level</label>
                <div className="orm-priority-options">
                  {['low', 'medium', 'high', 'critical'].map(priority => (
                    <label key={priority} className="orm-priority-option">
                      <input
                        type="radio"
                        name="priority"
                        value={priority}
                        checked={formData.priority === priority}
                        onChange={(e) => handleInputChange('priority', e.target.value)}
                      />
                      <span className="orm-priority-label">
                        {priority.charAt(0).toUpperCase() + priority.slice(1)}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="orm-form-section">
                <label>Company Information</label>
                <input
                  type="text"
                  placeholder="Company Name"
                  value={formData.companyName}
                  onChange={(e) => handleInputChange('companyName', e.target.value)}
                  required
                />
                <input
                  type="url"
                  placeholder="Website URL (optional)"
                  value={formData.website}
                  onChange={(e) => handleInputChange('website', e.target.value)}
                />
              </div>

              <div className="orm-form-section">
                <label>Specific Requirements</label>
                <textarea
                  placeholder="Tell us about your current reputation challenges, specific platforms to monitor, or any special requirements..."
                  rows="4"
                  value={formData.requirements}
                  onChange={(e) => handleInputChange('requirements', e.target.value)}
                />
              </div>

              <div className="orm-form-actions">
                <button type="button" className="orm-cancel-btn" onClick={onClose}>
                  Cancel
                </button>
                <button type="submit" className="orm-submit-btn" disabled={loading}>
                  {loading ? (
                    <>
                      <div className="orm-btn-spinner"></div>
                      Setting Up Monitoring...
                    </>
                  ) : (
                    `Start Monitoring - $${service.price}/month`
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };

  // Sentiment Chart Component
  const SentimentChart = ({ score }) => {
    const radius = 40;
    const circumference = 2 * Math.PI * radius;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (score / 100) * circumference;

    return (
      <div className="orm-sentiment-chart">
        <svg width="120" height="120" viewBox="0 0 120 120">
          <circle
            cx="60"
            cy="60"
            r={radius}
            stroke="#e2e8f0"
            strokeWidth="8"
            fill="none"
          />
          <circle
            cx="60"
            cy="60"
            r={radius}
            stroke={score >= 70 ? '#10B981' : score >= 50 ? '#F59E0B' : '#EF4444'}
            strokeWidth="8"
            fill="none"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            transform="rotate(-90 60 60)"
          />
          <text
            x="60"
            y="60"
            textAnchor="middle"
            dy="7"
            fontSize="20"
            fontWeight="600"
            fill="#1e293b"
          >
            {score}%
          </text>
        </svg>
      </div>
    );
  };

  // Enhanced Hero Section with proper layout
  const HeroSection = () => (
    <div className="orm-hero-section">
      <div className="orm-hero-background">
        <div className="orm-hero-shape orm-shape-1"></div>
        <div className="orm-hero-shape orm-shape-2"></div>
        <div className="orm-hero-shape orm-shape-3"></div>
      </div>
      
      <div className="orm-container">
        <div className="orm-hero-content-wrapper">
          <div className="orm-hero-content">
            <div className="orm-hero-badge">
              <ORMIcons.Shield className="orm-badge-icon" />
              <span>Enterprise-Grade Reputation Protection</span>
            </div>
            
            <h1 className="orm-hero-title">
              Protect Your Brand's
              <span className="orm-hero-accent"> Digital Reputation</span>
            </h1>
            
            <p className="orm-hero-description">
              Comprehensive online reputation management solutions that monitor, protect, and enhance 
              your brand's digital presence across all platforms and channels.
            </p>

            {/* Enhanced Stats Section */}
            <div className="orm-hero-stats">
              <div className="orm-stat-item">
                <div className="orm-stat-icon">
                  <ORMIcons.Chart className="orm-stat-svg" />
                </div>
                <div className="orm-stat-content">
                  <div className="orm-stat-number">24/7</div>
                  <div className="orm-stat-label">Real-time Monitoring</div>
                </div>
              </div>
              <div className="orm-stat-item">
                <div className="orm-stat-icon">
                  <ORMIcons.Users className="orm-stat-svg" />
                </div>
                <div className="orm-stat-content">
                  <div className="orm-stat-number">500+</div>
                  <div className="orm-stat-label">Brands Protected</div>
                </div>
              </div>
              <div className="orm-stat-item">
                <div className="orm-stat-icon">
                  <ORMIcons.Star className="orm-stat-svg" />
                </div>
                <div className="orm-stat-content">
                  <div className="orm-stat-number">98%</div>
                  <div className="orm-stat-label">Client Satisfaction</div>
                </div>
              </div>
              <div className="orm-stat-item">
                <div className="orm-stat-icon">
                  <ORMIcons.TrendingUp className="orm-stat-svg" />
                </div>
                <div className="orm-stat-content">
                  <div className="orm-stat-number">4.8x</div>
                  <div className="orm-stat-label">ROI Average</div>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="orm-trust-indicators">
              <div className="orm-trust-item">
                <ORMIcons.CheckCircle className="orm-trust-icon" />
                <span>Google Premier Partner</span>
              </div>
              <div className="orm-trust-item">
                <ORMIcons.CheckCircle className="orm-trust-icon" />
                <span>ISO 27001 Certified</span>
              </div>
              <div className="orm-trust-item">
                <ORMIcons.CheckCircle className="orm-trust-icon" />
                <span>24/7 Support</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="orm-hero-actions">
              <button className="orm-primary-btn orm-large-btn">
                Start Protecting Your Brand
                <ORMIcons.Arrow className="orm-btn-arrow" />
              </button>
              <button className="orm-secondary-btn">
                View Case Studies
              </button>
            </div>
          </div>

          {/* Hero Visual - Reputation Dashboard Preview */}
          <div className="orm-hero-visual">
            <div className="orm-dashboard-preview">
              <div className="orm-preview-header">
                <div className="orm-preview-title">Live Reputation Dashboard</div>
                <div className="orm-preview-badge">Active Monitoring</div>
              </div>
              
              <div className="orm-preview-metrics">
                <div className="orm-preview-metric">
                  <span className="orm-metric-value">89%</span>
                  <span className="orm-metric-label">Sentiment Score</span>
                </div>
                <div className="orm-preview-metric">
                  <span className="orm-metric-value">247</span>
                  <span className="orm-metric-label">Mentions Today</span>
                </div>
              </div>

              <div className="orm-preview-chart">
                <div className="orm-chart-bar" style={{height: '80%'}}></div>
                <div className="orm-chart-bar" style={{height: '65%'}}></div>
                <div className="orm-chart-bar" style={{height: '90%'}}></div>
                <div className="orm-chart-bar" style={{height: '75%'}}></div>
                <div className="orm-chart-bar" style={{height: '85%'}}></div>
              </div>

              <div className="orm-preview-platforms">
                <div className="orm-platform orm-platform-active">
                  <ORMIcons.Check className="orm-platform-icon" />
                  <span>Google Reviews</span>
                </div>
                <div className="orm-platform orm-platform-active">
                  <ORMIcons.Check className="orm-platform-icon" />
                  <span>Social Media</span>
                </div>
                <div className="orm-platform">
                  <ORMIcons.Clock className="orm-platform-icon" />
                  <span>News Sites</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Services Section Component
  const ServicesSection = () => {
    const monitoringPlatforms = [
      'Google Reviews', 'Yelp', 'Trustpilot', 'Facebook', 'Twitter',
      'Instagram', 'LinkedIn', 'Industry Forums', 'News Sites'
    ];

    return (
      <section className="orm-services-section">
        <div className="orm-container">
          <div className="orm-section-header">
            <h2>Comprehensive Reputation Management Solutions</h2>
            <p>Choose the perfect plan to protect and enhance your online reputation across all digital platforms</p>
          </div>

          <div className="orm-services-grid">
            {services.map(service => (
              <ServiceCard
                key={service.id}
                service={service}
                onSelect={handleServiceSelect}
              />
            ))}
          </div>

          {/* Additional Services Info */}
          <div className="orm-services-features">
            <div className="orm-feature-column">
              <ORMIcons.Shield className="orm-feature-icon" />
              <h4>Real-time Protection</h4>
              <p>24/7 monitoring across all major platforms with instant alerts</p>
            </div>
            <div className="orm-feature-column">
              <ORMIcons.Chart className="orm-feature-icon" />
              <h4>Advanced Analytics</h4>
              <p>Deep insights into sentiment trends and reputation metrics</p>
            </div>
            <div className="orm-feature-column">
              <ORMIcons.Users className="orm-feature-icon" />
              <h4>Expert Support</h4>
              <p>Dedicated reputation specialists and crisis management teams</p>
            </div>
          </div>

          {/* Platforms Covered */}
          <div className="orm-platforms-covered">
            <h3>Platforms We Monitor</h3>
            <div className="orm-platform-tags">
              {monitoringPlatforms.map(platform => (
                <span key={platform} className="orm-platform-tag">{platform}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };

  // Dashboard Tab Component
  const DashboardTab = () => {
    if (!dashboardData) return null;

    return (
      <div className="orm-dashboard">
        <div className="orm-dashboard-header">
          <div className="orm-dashboard-welcome">
            <h2>Welcome back, {user?.name}!</h2>
            <p>Here's your reputation management overview</p>
          </div>
          <div className="orm-dashboard-date">
            <ORMIcons.Calendar className="orm-date-icon" />
            <span>{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
        </div>

        {/* Overview Cards */}
        <div className="orm-overview-cards">
          <div className="orm-overview-card">
            <div className="orm-card-header">
              <h3>Total Mentions</h3>
              <ORMIcons.Chart className="orm-card-icon" />
            </div>
            <div className="orm-card-value">{dashboardData.overview.totalMentions}</div>
            <div className="orm-card-trend">
              <ORMIcons.TrendingUp className="orm-trend-icon" />
              <span>12% increase</span>
            </div>
          </div>

          <div className="orm-overview-card">
            <div className="orm-card-header">
              <h3>Positive Mentions</h3>
              <ORMIcons.Star className="orm-card-icon" />
            </div>
            <div className="orm-card-value">{dashboardData.overview.positiveMentions}</div>
            <div className="orm-card-progress">
              <div 
                className="orm-progress-bar orm-progress-positive" 
                style={{width: `${(dashboardData.overview.positiveMentions / dashboardData.overview.totalMentions) * 100}%`}}
              ></div>
            </div>
          </div>

          <div className="orm-overview-card">
            <div className="orm-card-header">
              <h3>Sentiment Score</h3>
              <ORMIcons.CheckCircle className="orm-card-icon" />
            </div>
            <div className="orm-card-value">{dashboardData.overview.overallSentiment}%</div>
            <div className={`orm-sentiment-badge ${dashboardData.overview.overallSentiment >= 70 ? 'orm-positive' : 'orm-warning'}`}>
              {dashboardData.overview.overallSentiment >= 70 ? 'Excellent' : 'Needs Attention'}
            </div>
          </div>

          <div className="orm-overview-card">
            <div className="orm-card-header">
              <h3>Active Cases</h3>
              <ORMIcons.Cases className="orm-card-icon" />
            </div>
            <div className="orm-card-value">{statistics?.activeCases || 0}</div>
            <div className="orm-card-subtext">Requiring attention</div>
          </div>
        </div>

        <div className="orm-dashboard-content">
          {/* Recent Activity */}
          <div className="orm-activity-section">
            <h3>Recent Activity</h3>
            <div className="orm-activity-list">
              {dashboardData.recentActivity.map(activity => (
                <div key={activity.id} className="orm-activity-item">
                  <div className={`orm-activity-icon orm-${activity.type}`}>
                    {activity.type === 'mention' && <ORMIcons.Star className="orm-activity-svg" />}
                    {activity.type === 'alert' && <ORMIcons.Alert className="orm-activity-svg" />}
                    {activity.type === 'response' && <ORMIcons.Check className="orm-activity-svg" />}
                  </div>
                  <div className="orm-activity-content">
                    <div className="orm-activity-title">{activity.content}</div>
                    <div className="orm-activity-meta">
                      <span className={`orm-sentiment orm-${activity.sentiment}`}>{activity.sentiment}</span>
                      <span className="orm-platform">{activity.platform}</span>
                      <span className="orm-time">{activity.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Platform Performance */}
          <div className="orm-platform-section">
            <h3>Platform Performance</h3>
            <div className="orm-platform-metrics">
              {dashboardData.platformMetrics.map(platform => (
                <div key={platform.platform} className="orm-platform-metric">
                  <div className="orm-platform-header">
                    <span className="orm-platform-name">{platform.platform}</span>
                    <span className="orm-platform-mentions">{platform.mentions} mentions</span>
                  </div>
                  <div className="orm-platform-sentiment">
                    <div className="orm-sentiment-bar">
                      <div 
                        className="orm-sentiment-fill" 
                        style={{width: `${platform.sentiment}%`}}
                      ></div>
                    </div>
                    <span className="orm-sentiment-value">{platform.sentiment}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Cases Tab Component
  const CasesTab = () => (
    <div className="orm-cases-tab">
      <div className="orm-cases-header">
        <h2>My Reputation Cases</h2>
        <p>Monitor and manage your active reputation cases</p>
      </div>

      <div className="orm-cases-stats">
        <div className="orm-case-stat">
          <span className="orm-stat-number">{statistics?.totalCases || 0}</span>
          <span className="orm-stat-label">Total Cases</span>
        </div>
        <div className="orm-case-stat">
          <span className="orm-stat-number">{statistics?.activeCases || 0}</span>
          <span className="orm-stat-label">Active</span>
        </div>
        <div className="orm-case-stat">
          <span className="orm-stat-number">{statistics?.resolvedCases || 0}</span>
          <span className="orm-stat-label">Resolved</span>
        </div>
        <div className="orm-case-stat">
          <span className="orm-stat-number">{statistics?.averageSentiment || 0}%</span>
          <span className="orm-stat-label">Avg. Sentiment</span>
        </div>
      </div>

      <div className="orm-cases-table">
        <div className="orm-table-header">
          <div className="orm-table-col">Case Details</div>
          <div className="orm-table-col">Status</div>
          <div className="orm-table-col">Platform</div>
          <div className="orm-table-col">Sentiment</div>
          <div className="orm-table-col">Last Update</div>
          <div className="orm-table-col">Actions</div>
        </div>

        {userCases.map(caseItem => (
          <div key={caseItem.id} className="orm-table-row">
            <div className="orm-table-col">
              <div className="orm-case-title">{caseItem.title}</div>
              <div className="orm-case-service">{caseItem.service.name}</div>
              <div className="orm-case-assigned">Assigned to: {caseItem.assignedTo}</div>
            </div>
            <div className="orm-table-col">
              <div className={`orm-status-badge orm-${caseItem.status}`}>
                {caseItem.status}
              </div>
              <div className={`orm-priority-badge orm-${caseItem.priority}`}>
                {caseItem.priority} priority
              </div>
            </div>
            <div className="orm-table-col">
              <div className="orm-platform-badge">{caseItem.platform}</div>
            </div>
            <div className="orm-table-col">
              <div className="orm-sentiment-display">
                <SentimentChart score={caseItem.sentimentScore} />
                <div className="orm-mention-counts">
                  <span className="orm-positive">+{caseItem.positiveMentions}</span>
                  <span className="orm-negative">-{caseItem.negativeMentions}</span>
                </div>
              </div>
            </div>
            <div className="orm-table-col">
              <div className="orm-update-date">
                {new Date(caseItem.lastUpdate).toLocaleDateString()}
              </div>
              <div className="orm-next-action">{caseItem.nextAction}</div>
            </div>
            <div className="orm-table-col">
              <button className="orm-action-btn orm-view-btn">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Reports Tab Component
  const ReportsTab = () => (
    <div className="orm-reports-tab">
      <div className="orm-reports-header">
        <h2>Reports & Analytics</h2>
        <p>Access comprehensive reputation reports and insights</p>
      </div>

      <div className="orm-reports-actions">
        <button className="orm-primary-btn">
          <ORMIcons.Download className="orm-btn-icon" />
          Generate New Report
        </button>
        <button className="orm-secondary-btn">
          <ORMIcons.Refresh className="orm-btn-icon" />
          Refresh Data
        </button>
      </div>

      <div className="orm-reports-grid">
        {reports.map(report => (
          <div key={report.id} className="orm-report-card">
            <div className="orm-report-header">
              <div className="orm-report-title">
                <ORMIcons.File className="orm-report-icon" />
                <h3>{report.title}</h3>
              </div>
              <div className={`orm-report-status orm-${report.status}`}>
                {report.status}
              </div>
            </div>

            <div className="orm-report-meta">
              <div className="orm-report-type">{report.type} Report</div>
              <div className="orm-report-date">
                Generated: {new Date(report.date).toLocaleDateString()}
              </div>
            </div>

            <div className="orm-report-metrics">
              <div className="orm-report-metric">
                <span className="orm-metric-value">{report.metrics.totalMentions}</span>
                <span className="orm-metric-label">Total Mentions</span>
              </div>
              <div className="orm-report-metric">
                <span className="orm-metric-value">{report.metrics.sentimentScore}%</span>
                <span className="orm-metric-label">Sentiment</span>
              </div>
              <div className="orm-report-metric">
                <span className="orm-metric-value">{report.metrics.engagementRate}%</span>
                <span className="orm-metric-label">Engagement</span>
              </div>
            </div>

            <div className="orm-report-actions">
              <button className="orm-download-btn" disabled={report.status !== 'generated'}>
                <ORMIcons.Download className="orm-btn-icon" />
                Download PDF
              </button>
              <button className="orm-view-btn">
                View Insights
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Stats */}
      <div className="orm-reports-stats">
        <h3>Reporting Overview</h3>
        <div className="orm-stats-grid">
          <div className="orm-stat-card">
            <ORMIcons.Chart className="orm-stat-card-icon" />
            <div className="orm-stat-card-content">
              <div className="orm-stat-card-value">12</div>
              <div className="orm-stat-card-label">Reports Generated</div>
            </div>
          </div>
          <div className="orm-stat-card">
            <ORMIcons.Clock className="orm-stat-card-icon" />
            <div className="orm-stat-card-content">
              <div className="orm-stat-card-value">3</div>
              <div className="orm-stat-card-label">Pending Analysis</div>
            </div>
          </div>
          <div className="orm-stat-card">
            <ORMIcons.TrendingUp className="orm-stat-card-icon" />
            <div className="orm-stat-card-content">
              <div className="orm-stat-card-value">78%</div>
              <div className="orm-stat-card-label">Avg. Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  if (loading && services.length === 0) {
    return (
      <div className="orm-loading">
        <div className="orm-loading-spinner"></div>
        <p>Loading Reputation Management Services...</p>
      </div>
    );
  }

  return (
    <div className="orm-service-page">
      <HeroSection />
      
      <nav className="orm-navigation">
        <div className="orm-container">
          <button 
            className={`orm-nav-tab ${activeTab === 'dashboard' ? 'orm-active' : ''}`}
            onClick={() => setActiveTab('dashboard')}
          >
            <ORMIcons.Dashboard className="orm-nav-icon" />
            <span>Dashboard</span>
          </button>
          <button 
            className={`orm-nav-tab ${activeTab === 'services' ? 'orm-active' : ''}`}
            onClick={() => setActiveTab('services')}
          >
            <ORMIcons.Services className="orm-nav-icon" />
            <span>ORM Services</span>
          </button>
          <button 
            className={`orm-nav-tab ${activeTab === 'cases' ? 'orm-active' : ''}`}
            onClick={() => setActiveTab('cases')}
          >
            <ORMIcons.Cases className="orm-nav-icon" />
            <span>My Cases</span>
          </button>
          <button 
            className={`orm-nav-tab ${activeTab === 'reports' ? 'orm-active' : ''}`}
            onClick={() => setActiveTab('reports')}
          >
            <ORMIcons.Reports className="orm-nav-icon" />
            <span>Reports</span>
          </button>
        </div>
      </nav>

      <div className="orm-content">
        <div className="orm-container">
          {activeTab === 'dashboard' && <DashboardTab />}
          {activeTab === 'services' && <ServicesSection />}
          {activeTab === 'cases' && <CasesTab />}
          {activeTab === 'reports' && <ReportsTab />}
        </div>
      </div>

      {showModal && selectedService && (
        <ServiceModal
          service={selectedService}
          onSubmit={handleOrderSubmit}
          onClose={() => setShowModal(false)}
          loading={loading}
        />
      )}
    </div>
  );
};

export default ORMServicePage;