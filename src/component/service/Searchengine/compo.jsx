// SEOServicesPage.jsx
import React, { useState, useEffect } from 'react';


// SVG Icons with unique class names
const SearchIconSEO = () => (
  <svg className="seoservices-icon-search" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ChartIconSEO = () => (
  <svg className="seoservices-icon-chart" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 3V19H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7 15L11 9L15 11L19 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const LinkIconSEO = () => (
  <svg className="seoservices-icon-link" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 13C10.4295 13.5741 10.9774 14.0491 11.6066 14.3929C12.2357 14.7367 12.9315 14.9411 13.6467 14.9923C14.3618 15.0435 15.0796 14.9403 15.7513 14.6897C16.4231 14.4392 17.0331 14.047 17.54 13.54L20.54 10.54C21.4508 9.59695 21.9548 8.33394 21.9434 7.02296C21.932 5.71198 21.4061 4.45791 20.4791 3.5309C19.5521 2.60389 18.298 2.078 16.987 2.0666C15.676 2.0552 14.413 2.5592 13.47 3.47L11.75 5.18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 11C13.5705 10.4259 13.0226 9.95085 12.3934 9.60705C11.7643 9.26325 11.0685 9.05889 10.3533 9.00766C9.63816 8.95643 8.92037 9.05972 8.24861 9.31028C7.57685 9.56084 6.96689 9.95304 6.46 10.46L3.46 13.46C2.54921 14.403 2.04521 15.6661 2.05661 16.977C2.06801 18.288 2.5939 19.5421 3.52091 20.4691C4.44792 21.3961 5.70199 21.922 7.01297 21.9334C8.32395 21.9448 9.58696 21.4408 10.53 20.53L12.24 18.82" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const GearIconSEO = () => (
  <svg className="seoservices-icon-gear" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19.4 15C19.2662 15.3031 19.1334 15.6062 19.0017 15.9094C18.9498 16.0361 18.9226 16.1722 18.922 16.3097C18.9214 16.4472 18.9474 16.5835 18.9983 16.7106C19.0492 16.8377 19.1239 16.9529 19.2178 17.0491L21.2657 19.097C21.458 19.2893 21.5635 19.5518 21.5574 19.8242C21.5513 20.0966 21.4341 20.3539 21.2329 20.5372C20.2771 21.4296 19.1342 22.1193 17.8816 22.5606C16.629 23.0018 15.2946 23.1849 13.9657 23.0978C12.6369 23.0107 11.3423 22.6553 10.1641 22.0544C8.98596 21.4535 7.95083 20.6206 7.12891 19.6117C6.30699 18.6029 5.71663 17.441 5.39648 16.2031C5.07633 14.9652 5.03363 13.6797 5.27148 12.4258C5.50933 11.1719 6.02246 9.97887 6.77734 8.92969C7.53223 7.88051 8.51172 6.99951 9.64766 6.34766C10.7836 5.6958 12.0492 5.28809 13.3562 5.15234C14.6633 5.0166 15.9812 5.15625 17.2258 5.56172C17.4812 5.64141 17.6906 5.83125 17.7973 6.08203C17.904 6.33281 17.8975 6.61875 17.7797 6.86484L16.3094 9.70312C16.2155 9.89932 16.0568 10.0579 15.8606 10.1517C15.6644 10.2456 15.4429 10.2691 15.2312 10.218C14.7908 10.1068 14.3373 10.0503 13.8813 10.05C12.0914 10.05 10.3748 10.7648 9.1043 12.0353C7.83384 13.3058 7.11914 15.0224 7.11914 16.8123C7.11914 17.2684 7.17563 17.7219 7.28672 18.1623C7.33781 18.374 7.31438 18.5955 7.22051 18.7917C7.12664 18.9879 6.96804 19.1466 6.77184 19.2405L3.93356 20.7108C3.68747 20.8286 3.40153 20.8351 3.15075 20.7284C2.89997 20.6217 2.71013 20.4123 2.63044 20.1569C2.22598 18.9123 2.08633 17.5944 2.22207 16.2873C2.35781 14.9803 2.76553 13.7147 3.41738 12.5788C4.06924 11.4428 4.95023 10.4633 5.99941 9.70841C7.0486 8.95352 8.2416 8.44039 9.49547 8.20254C10.7493 7.96469 12.0348 8.00739 13.2727 8.32754C14.5106 8.64769 15.6725 9.23805 16.6813 10.06C17.6902 10.8819 18.5231 11.917 19.124 13.0952C19.7249 14.2734 20.0803 15.568 20.1674 16.8968C20.2545 18.2257 20.0714 19.5601 19.6302 20.8127C19.1889 22.0653 18.4992 23.2082 17.6068 24.1641C17.4235 24.3653 17.1662 24.4824 16.8938 24.4885C16.6214 24.4946 16.3589 24.3891 16.1666 24.1968L14.1187 22.1489C14.0225 22.055 13.9073 21.9803 13.7802 21.9294C13.6531 21.8785 13.5168 21.8525 13.3793 21.8531C13.2418 21.8537 13.1057 21.8809 12.979 21.9328C12.6758 22.0645 12.3727 22.1973 12.0695 22.3311" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const MapIconSEO = () => (
  <svg className="seoservices-icon-map" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 3L3 7V21L9 17L15 21L21 17V3L15 7L9 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 3V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15 7V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CartIconSEO = () => (
  <svg className="seoservices-icon-cart" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.7 15.3C4.3 15.7 4.6 16.4 5.2 16.4H17M17 13V16.4M17 16.4C15.9 16.4 15 17.3 15 18.4C15 19.5 15.9 20.4 17 20.4C18.1 20.4 19 19.5 19 18.4C19 17.3 18.1 16.4 17 16.4ZM9 18.4C9 19.5 8.1 20.4 7 20.4C5.9 20.4 5 19.5 5 18.4C5 17.3 5.9 16.4 7 16.4C8.1 16.4 9 17.3 9 18.4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const DocumentIconSEO = () => (
  <svg className="seoservices-icon-document" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.7893 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 9H9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CheckIconSEO = () => (
  <svg className="seoservices-icon-check" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SEOServicesPage = () => {
  const [activeServiceSEO, setActiveServiceSEO] = useState('on-page-seo');
  const [activeFAQSEO, setActiveFAQSEO] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const servicesSEO = {
    'on-page-seo': {
      title: 'On-Page SEO',
      icon: <DocumentIconSEO />,
      items: [
        'Keyword research & optimization',
        'Meta titles & descriptions',
        'Internal linking structure',
        'Image & alt tag optimization',
        'Schema markup integration'
      ],
      description: 'Optimize every element on your website to rank higher in search results and provide better user experience.'
    },
    'off-page-seo': {
      title: 'Off-Page SEO',
      icon: <LinkIconSEO />,
      items: [
        'High-quality backlink building',
        'Guest posting & outreach',
        'Local citation building',
        'Competitor backlink analysis'
      ],
      description: 'Build authority and credibility through strategic external signals that search engines trust.'
    },
    'technical-seo': {
      title: 'Technical SEO',
      icon: <GearIconSEO />,
      items: [
        'Website speed optimization',
        'Mobile responsiveness',
        'Crawlability & indexing fixes',
        'Structured data implementation',
        'HTTPS, canonical tags, robots.txt setup'
      ],
      description: 'Ensure search engines can properly crawl, index, and understand your website structure and content.'
    },
    'local-seo': {
      title: 'Local SEO',
      icon: <MapIconSEO />,
      items: [
        'Google My Business (GMB) optimization',
        'Local keyword targeting',
        'Citation building (NAP consistency)',
        'Local review management'
      ],
      description: 'Dominate local search results and attract customers in your geographic area.'
    },
    'ecommerce-seo': {
      title: 'E-commerce SEO',
      icon: <CartIconSEO />,
      items: [
        'Product keyword optimization',
        'Category page SEO',
        'Structured data for products',
        'Shopify / WooCommerce optimization'
      ],
      description: 'Increase product visibility and drive qualified traffic to your online store.'
    },
    'content-seo': {
      title: 'Content SEO',
      icon: <DocumentIconSEO />,
      items: [
        'SEO-optimized blogs',
        'Landing page copywriting',
        'Content strategy and calendar',
        'Voice search optimization'
      ],
      description: 'Create valuable, search-optimized content that attracts and engages your target audience.'
    },
    'audit-seo': {
      title: 'SEO Audit & Strategy',
      icon: <ChartIconSEO />,
      items: [
        'Complete site audit report',
        'Competitor & gap analysis',
        'Data-driven SEO roadmap'
      ],
      description: 'Comprehensive analysis and strategic planning to maximize your SEO investment.'
    }
  };

  const processStepsSEO = [
    { number: '01', title: 'Audit & Research', description: 'Comprehensive analysis of your current SEO status and competitors' },
    { number: '02', title: 'Keyword Strategy', description: 'Developing targeted keyword strategy based on search volume and intent' },
    { number: '03', title: 'On-Site Optimization', description: 'Implementing technical and on-page SEO improvements' },
    { number: '04', title: 'Link Building', description: 'Acquiring high-quality backlinks from authoritative sources' },
    { number: '05', title: 'Tracking & Reporting', description: 'Monitoring performance and providing detailed progress reports' }
  ];

  const caseStudiesSEO = [
    { 
      client: 'E-commerce Store', 
      industry: 'Fashion Retail',
      before: '2,100',
      after: '15,800',
      period: '6 months',
      description: 'Increased organic traffic by 652% through comprehensive product page optimization and content strategy.',
      growth: '+652%'
    },
    { 
      client: 'B2B SaaS Company', 
      industry: 'Software',
      before: '3,500',
      after: '28,400',
      period: '9 months',
      description: 'Achieved first-page rankings for 35+ competitive keywords through technical SEO and content marketing.',
      growth: '+711%'
    },
    { 
      client: 'Local Service Business', 
      industry: 'Home Services',
      before: '450',
      after: '3,200',
      period: '4 months',
      description: 'Dominating local search results with 85% increase in qualified leads through local SEO optimization.',
      growth: '+611%'
    }
  ];

  const toolsSEO = [
    { name: 'Google Analytics', logo: 'GA' },
    { name: 'SEMrush', logo: 'SEM' },
    { name: 'Ahrefs', logo: 'AH' },
    { name: 'Moz', logo: 'MZ' },
    { name: 'Screaming Frog', logo: 'SF' },
    { name: 'Google Search Console', logo: 'GSC' }
  ];

  const faqsSEO = [
    {
      question: 'How long does SEO take to show results?',
      answer: 'SEO is a long-term strategy. Initial improvements can be seen in 3-6 months, but significant results typically take 6-12 months of consistent effort.'
    },
    {
      question: 'What\'s included in your SEO packages?',
      answer: 'Our packages include comprehensive site audit, keyword research, on-page optimization, technical fixes, content strategy, and monthly reporting. Custom packages are available based on your specific needs.'
    },
    {
      question: 'Do you guarantee first-page rankings?',
      answer: 'No ethical SEO company can guarantee first-page rankings as search algorithms change frequently. We focus on sustainable growth and can show proven results from our case studies.'
    },
    {
      question: 'Is SEO better than paid ads?',
      answer: 'SEO and PPC serve different purposes. SEO builds long-term, sustainable organic traffic while PPC provides immediate visibility. We recommend a balanced approach for optimal results.'
    }
  ];

  const testimonialsSEO = [
    {
      name: 'Sarah Johnson',
      company: 'TechSolutions Inc.',
      position: 'Marketing Director',
      text: 'Our organic traffic increased by 240% in just 8 months. The ROI has been incredible! The team provided detailed reports and clear strategies that actually worked.',
      rating: 5,
      image: 'SJ'
    },
    {
      name: 'Michael Chen',
      company: 'Global Retail Co.',
      position: 'E-commerce Manager',
      text: 'Their technical SEO expertise fixed issues we didn\'t even know we had. Our site speed improved by 60% and conversions increased by 35%. Highly recommended!',
      rating: 5,
      image: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      company: 'Local Service Pro',
      position: 'Business Owner',
      text: 'We\'re now ranking #1 for all our key local search terms. The phone hasn\'t stopped ringing! They transformed our online presence completely.',
      rating: 5,
      image: 'ER'
    },
    {
      name: 'David Thompson',
      company: 'HealthTech Solutions',
      position: 'CEO',
      text: 'The content strategy they developed tripled our blog traffic in 6 months. Our domain authority increased from 28 to 45. Exceptional service!',
      rating: 5,
      image: 'DT'
    }
  ];

  const toggleFAQSEO = (index) => {
    setActiveFAQSEO(activeFAQSEO === index ? null : index);
  };

  return (
    <div className={`seoservices-page-wrapper ${isVisible ? 'seoservices-page-visible' : ''}`}>
      {/* Hero Section */}
   
      {/* Why SEO Matters */}
 

      {/* Our SEO Services */}
      <section className="seoservices-services-section" id="seoservices-services-section">
        <div className="seoservices-container-main">
          <h2 className="seoservices-section-title-main">Our Comprehensive SEO Services</h2>
          <p className="seoservices-section-subtitle-main">Tailored SEO solutions designed to drive sustainable growth and maximize your online visibility</p>
          
          <div className="seoservices-services-nav">
            {Object.keys(servicesSEO).map(key => (
              <button
                key={key}
                className={`seoservices-service-tab ${activeServiceSEO === key ? 'seoservices-service-tab-active' : ''}`}
                onClick={() => setActiveServiceSEO(key)}
              >
                <div className="seoservices-service-tab-icon">
                  {servicesSEO[key].icon}
                </div>
                <span>{servicesSEO[key].title}</span>
              </button>
            ))}
          </div>
          
          <div className="seoservices-service-content">
            <div className="seoservices-service-info">
              <div className="seoservices-service-header">
                <h3>{servicesSEO[activeServiceSEO].title}</h3>
                <p className="seoservices-service-description">{servicesSEO[activeServiceSEO].description}</p>
              </div>
              <ul className="seoservices-service-list">
                {servicesSEO[activeServiceSEO].items.map((item, index) => (
                  <li key={index} className="seoservices-service-item">
                    <div className="seoservices-service-item-icon">
                      <CheckIconSEO />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="seoservices-service-actions">
                <button className="seoservices-btn seoservices-btn-primary">Learn More</button>
                <button className="seoservices-btn seoservices-btn-secondary">Get Quote</button>
              </div>
            </div>
            <div className="seoservices-service-visual">
              <div className="seoservices-service-image">
                <div className="seoservices-service-placeholder">
                  {servicesSEO[activeServiceSEO].icon}
                  <p>Visualization of {servicesSEO[activeServiceSEO].title}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="seoservices-process-section" id="seoservices-process-section">
        <div className="seoservices-container-main">
          <h2 className="seoservices-section-title-main">Our Proven 5-Step SEO Process</h2>
          <p className="seoservices-section-subtitle-main">A systematic approach to delivering measurable SEO results</p>
          <div className="seoservices-process-steps">
            {processStepsSEO.map((step, index) => (
              <div key={index} className="seoservices-process-step">
                <div className="seoservices-step-number">{step.number}</div>
                <h3 className="seoservices-step-title">{step.title}</h3>
                <p className="seoservices-step-description">{step.description}</p>
                <div className="seoservices-step-connector"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
<section className="seoservices-case-studies-section" id="seoservices-case-studies-section">
  <div className="seoservices-container-main">
    <div className="seoservices-case-studies-header">
      <span className="seoservices-section-badge">Case Studies</span>
      <h2 className="seoservices-section-title-main">Proven SEO Results</h2>
      <p className="seoservices-section-subtitle-main">
        Data-driven SEO strategies that deliver measurable business growth
      </p>
    </div>
    
    <div className="seoservices-case-studies-grid">
      {caseStudiesSEO.map((study, index) => (
        <div key={index} className="seoservices-case-study-card">
          <div className="seoservices-case-study-content">
            {/* Header Section */}
            <div className="seoservices-case-header">
              <div className="seoservices-client-info">
                <div className="seoservices-client-avatar">
                  {study.client.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h3 className="seoservices-case-client">{study.client}</h3>
                  <div className="seoservices-case-industry">{study.industry}</div>
                </div>
              </div>
              <div className="seoservices-growth-badge">
                <span className="seoservices-growth-icon">↑</span>
                <span className="seoservices-case-growth-value">{study.growth}</span>
              </div>
            </div>

            {/* Metrics Section */}
            <div className="seoservices-metrics-section">
              <div className="seoservices-metrics-comparison">
                <div className="seoservices-metric-group">
                  <span className="seoservices-metric-label">Before</span>
                  <span className="seoservices-metric-value before">{study.before}</span>
                  <span className="seoservices-metric-unit">visitors/mo</span>
                </div>
                
                <div className="seoservices-growth-arrow">
                  <div className="seoservices-arrow-line"></div>
                  <div className="seoservices-arrow-head">→</div>
                </div>
                
                <div className="seoservices-metric-group">
                  <span className="seoservices-metric-label">After</span>
                  <span className="seoservices-metric-value after">{study.after}</span>
                  <span className="seoservices-metric-unit">visitors/mo</span>
                </div>
              </div>
              
              <div className="seoservices-progress-visual">
                <div className="seoservices-progress-labels">
                  <span>0</span>
                  <span>{study.after}</span>
                </div>
                <div className="seoservices-progress-track">
                  <div 
                    className="seoservices-progress-fill" 
                    style={{width: `${(parseInt(study.after.replace('K', '')) / 50) * 100}%`}}
                  ></div>
                </div>
              </div>
            </div>

            {/* Details Section */}
            <div className="seoservices-case-details">
              <div className="seoservices-case-meta">
                <div className="seoservices-case-period">
                  <i className="fas fa-clock"></i>
                  <span>{study.period}</span>
                </div>
                <div className="seoservices-case-results">
                  <i className="fas fa-chart-line"></i>
                  <span>Organic Growth</span>
                </div>
              </div>
              
              <p className="seoservices-case-description">{study.description}</p>
              
              <button className="seoservices-case-study-btn">
                <span>View Case Study</span>
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
    
    {/* CTA Section */}
    {/* <div className="seoservices-case-studies-cta">
      <div className="seoservices-cta-content">
        <h3>Ready to Transform Your Online Presence?</h3>
        <p>Join hundreds of businesses achieving remarkable growth with our proven SEO strategies</p>
        <div className="seoservices-cta-actions">
          <button className="seoservices-cta-btn primary">Get Free SEO Audit</button>
          <button className="seoservices-cta-btn secondary">View All Case Studies</button>
        </div>
      </div>
    </div> */}
  </div>
</section>

      {/* Testimonials */}
    

      {/* FAQs */}
      <section className="seoservices-faq-section" id="seoservices-faq-section">
        <div className="seoservices-container-main">
          <h2 className="seoservices-section-title-main">Frequently Asked Questions</h2>
          <p className="seoservices-section-subtitle-main">Get answers to the most common questions about our SEO services</p>
          <div className="seoservices-faq-list">
            {faqsSEO.map((faq, index) => (
              <div key={index} className="seoservices-faq-item">
                <button 
                  className="seoservices-faq-question"
                  onClick={() => toggleFAQSEO(index)}
                >
                  <span className="seoservices-faq-question-text">{faq.question}</span>
                  <span className="seoservices-faq-toggle">{activeFAQSEO === index ? '−' : '+'}</span>
                </button>
                {activeFAQSEO === index && (
                  <div className="seoservices-faq-answer">
                    <p className="seoservices-faq-answer-text">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

 
 
    </div>
  );
};

export default SEOServicesPage;