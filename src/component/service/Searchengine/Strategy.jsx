import React from 'react';

// SVG Icons for Content Strategy
const ContentIcons = {
  Rocket: () => (
    <svg className="content-svg-icon content-rocket-icon" viewBox="0 0 24 24">
      <path d="M2.81,14.12L5.64,11.29L8.17,10.79C11.39,6.41 17.55,4.22 19.78,4.22C19.78,6.45 17.59,12.61 13.21,15.83L12.71,18.36L9.88,21.19C9.5,21.57 8.91,21.57 8.54,21.19L7.78,20.43L5.81,22.4L3.6,20.19L5.57,18.22L4.81,17.46C4.43,17.09 4.43,16.5 4.81,16.12M16.12,10.93C16.5,10.55 17.09,10.55 17.46,10.93C17.84,11.31 17.84,11.9 17.46,12.28C17.08,12.66 16.5,12.66 16.12,12.28C15.74,11.9 15.74,11.31 16.12,10.93Z"/>
    </svg>
  ),
  Chart: () => (
    <svg className="content-svg-icon content-chart-icon" viewBox="0 0 24 24">
      <path d="M22,21H2V3H4V19H6V10H10V19H12V6H16V19H18V14H22V21Z"/>
    </svg>
  ),
  Analysis: () => (
    <svg className="content-svg-icon content-analysis-icon" viewBox="0 0 24 24">
      <path d="M21,8C19.5,8 18.7,9.4 19.1,10.5L15.5,14.1C15.2,14 14.8,14 14.5,14.1L11.9,11.5C12.3,10.4 11.5,9 10,9C8.6,9 7.7,10.4 8.1,11.5L3.5,16C2.4,15.7 1,16.5 1,18C1,19.1 1.9,20 3,20C4.4,20 5.3,18.6 4.9,17.5L9.4,12.9C9.7,13 10.1,13 10.4,12.9L13,15.5C12.7,16.5 13.5,18 15,18C16.5,18 17.3,16.6 16.9,15.5L20.5,11.9C21.6,12.2 23,11.4 23,10C23,8.9 22.1,8 21,8Z"/>
    </svg>
  ),
  Writing: () => (
    <svg className="content-svg-icon content-writing-icon" viewBox="0 0 24 24">
      <path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"/>
    </svg>
  ),
  Copywriting: () => (
    <svg className="content-svg-icon content-copywriting-icon" viewBox="0 0 24 24">
      <path d="M18.5,16.8C17.8,16.8 17.3,16.2 17.3,15.6C17.3,14.9 17.9,14.4 18.5,14.4C19.1,14.4 19.7,15 19.7,15.6C19.8,16.2 19.2,16.8 18.5,16.8M18.5,12C16.6,12 15,13.6 15,15.5C15,18.1 18.5,22 18.5,22C18.5,22 22,18.1 22,15.5C22,13.6 20.4,12 18.5,12M14.9,11.3C14.6,10 13.4,9 12,9C10.3,9 9,10.3 9,12C9,13.7 10.3,15 12,15C12.4,15 12.7,14.9 13,14.8C13.2,13.4 13.9,12.2 14.9,11.3M13,16H7A2,2 0 0,0 5,14V6A2,2 0 0,0 7,4H21A2,2 0 0,0 23,6V14A2,2 0 0,0 21,16H17V18H21V20H17V22H15V16H13Z"/>
    </svg>
  ),
  Calendar: () => (
    <svg className="content-svg-icon content-calendar-icon" viewBox="0 0 24 24">
      <path d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z"/>
    </svg>
  ),
  SEO: () => (
    <svg className="content-svg-icon content-seo-icon" viewBox="0 0 24 24">
      <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12C4,14.09 4.8,16 6.11,17.41L9.88,9.88L17.41,6.11C16,4.8 14.09,4 12,4M12,20A8,8 0 0,0 20,12C20,9.91 19.2,8 17.89,6.59L14.12,14.12L6.59,17.89C8,19.2 9.91,20 12,20M12,12L11.23,11.23L9.7,14.3L12.77,12.77L12,12M12,17.5H13V19H12V17.5M15.88,15.89L16.59,15.18L17.65,16.24L16.94,16.95L15.88,15.89M17.5,12V11H19V12H17.5M12,6.5H11V5H12V6.5M8.12,8.11L7.41,8.82L6.35,7.76L7.06,7.05L8.12,8.11M6.5,12V13H5V12H6.5Z"/>
    </svg>
  ),
  Check: () => (
    <svg className="content-svg-icon content-check-icon" viewBox="0 0 24 24">
      <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/>
    </svg>
  )
};

const ContentStrategySection = () => {
  const contentServices = [
    {
      icon: 'Analysis',
      title: 'Content Gap & Competitor Analysis',
      description: 'Identify opportunities and outperform competitors with data-driven content insights'
    },
    {
      icon: 'Writing',
      title: 'Blog Post & Article Writing',
      description: 'Engaging, well-researched content that establishes thought leadership'
    },
    {
      icon: 'Copywriting',
      title: 'Service Page & Landing Page Copywriting',
      description: 'Compelling copy that converts visitors into customers'
    },
    {
      icon: 'Rocket',
      title: '"Skyscraper" & Pillar Content Creation',
      description: 'Comprehensive content assets that dominate search results'
    },
    {
      icon: 'Calendar',
      title: 'Content Calendar Management',
      description: 'Strategic planning and consistent content delivery'
    },
    {
      icon: 'SEO',
      title: 'SEO-Focused Copywriting',
      description: 'Content optimized for both readers and search engines'
    }
  ];

  const results = [
    { number: '3-5x', label: 'Increase in Organic Traffic' },
    { number: '40-60%', label: 'Higher Conversion Rates' },
    { number: '2.5x', label: 'More Backlinks Earned' },
    { number: '85%', label: 'Faster Time to Page One' }
  ];

  return (
    <section className="content-strategy-section">
      <div className="content-container">
        {/* Header Section */}
        <div className="content-header">
          <div className="content-badge">
            <ContentIcons.Rocket />
            Content Strategy & Creation
          </div>
          <h2 className="content-title">
            Create Content That <span className="content-accent">Ranks and Converts</span>
          </h2>
          <p className="content-description">
            High-quality, relevant content is the cornerstone of modern SEO. We develop a content plan that answers your audience's questions and builds topical authority.
          </p>
        </div>

        {/* Results Metrics */}
        <div className="content-results">
          <div className="results-grid">
            {results.map((result, index) => (
              <div key={index} className="result-card">
                <div className="result-number">{result.number}</div>
                <div className="result-label">{result.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="content-services-grid">
          {contentServices.map((service, index) => (
            <div key={index} className="content-service-card">
              <div className="service-icon">
                {ContentIcons[service.icon]()}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="content-cta">
          <div className="cta-content">
            <h3 className="cta-title">Ready to Dominate Your Market with Strategic Content?</h3>
            <p className="cta-description">
              Let's build a content strategy that drives measurable results and establishes your brand as an industry authority.
            </p>
            <div className="cta-buttons">
              <button className="cta-btn cta-primary">
                Start Your Content Strategy
                <ContentIcons.ArrowRight />
              </button>
              <button className="cta-btn cta-secondary">
                View Content Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentStrategySection;