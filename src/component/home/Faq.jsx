import React, { useState } from 'react';

export const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState('web-development');
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const faqData = {
    'web-development': [
      {
        id: 'web1',
        question: "What technologies do you use for web development?",
        answer: "We use modern technologies including React.js, Next.js, Node.js, and various databases. All our websites are mobile-responsive and optimized for performance."
      },
      {
        id: 'web2',
        question: "How long does it take to build a website?",
        answer: "Basic websites: 2-4 weeks, E-commerce sites: 4-8 weeks, Custom applications: 8-16 weeks. We provide clear timelines upfront."
      },
      {
        id: 'web3',
        question: "Do you provide website maintenance?",
        answer: "Yes, we offer maintenance packages including security updates, performance optimization, and technical support."
      },
      {
        id: 'web4',
        question: "Can you redesign my existing website?",
        answer: "Absolutely! We specialize in website redesigns while maintaining your SEO value and improving user experience."
      }
    ],
    'digital-marketing': [
      {
        id: 'dm1',
        question: "Which social media platforms do you manage?",
        answer: "We manage Facebook, Instagram, LinkedIn, Twitter, and TikTok with platform-specific strategies for maximum engagement."
      },
      {
        id: 'dm2',
        question: "How do you measure campaign success?",
        answer: "We track engagement rates, conversions, ROI, and other key metrics. You'll receive clear monthly reports with insights."
      },
      {
        id: 'dm3',
        question: "Do you handle paid advertising?",
        answer: "Yes, we manage Facebook Ads, Google Ads, and Instagram Ads, optimized for your budget and goals."
      },
      {
        id: 'dm4',
        question: "How soon will I see results?",
        answer: "Initial results in 2-4 weeks, significant growth in 3-6 months. We focus on sustainable, long-term success."
      }
    ],
    'general': [
      {
        id: 'gen1',
        question: "What makes your agency different?",
        answer: "We combine technical expertise with creative marketing strategies, focusing on measurable results and transparent communication."
      },
      {
        id: 'gen2',
        question: "Do you work with small businesses?",
        answer: "Yes! We work with businesses of all sizes and customize our services to fit different budgets and needs."
      },
      {
        id: 'gen3',
        question: "What's your process for new clients?",
        answer: "Simple 4-step process: Discovery → Proposal → Development → Launch. We keep you informed at every stage."
      },
      {
        id: 'gen4',
        question: "Do you provide ongoing support?",
        answer: "Yes, we provide continuous support, monthly reports, and regular check-ins to ensure your success."
      }
    ]
  };

  const categories = [
    { 
      id: 'web-development', 
      name: 'Web Development', 
      icon: '💻',
      color: '#2563eb'
    },
    { 
      id: 'digital-marketing', 
      name: 'Digital Marketing', 
      icon: '📱',
      color: '#dc2626'
    },
    { 
      id: 'general', 
      name: 'General', 
      icon: '❓',
      color: '#059669'
    }
  ];

  const getActiveCategoryColor = () => {
    const category = categories.find(cat => cat.id === activeCategory);
    return category ? category.color : '#2563eb';
  };

  return (
    <div className="faq-container">
      <div className="faq-content">
        
        {/* Header */}
        <div className="faq-header">
          <div className="header-badge">
            <span className="badge-dot"></span>
            FAQ
          </div>
          <h1>Frequently Asked Questions</h1>
          <p>Get quick answers to common questions about our services</p>
        </div>

        {/* Category Tabs */}
        <div className="category-tabs">
          {categories.map(category => (
            <button
              key={category.id}
              className={`tab ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
              style={{ '--active-color': category.color }}
            >
              <span className="tab-icon">{category.icon}</span>
              <span className="tab-text">{category.name}</span>
              <div className="tab-indicator"></div>
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="faq-list">
          {faqData[activeCategory].map((faq) => (
            <div 
              key={faq.id} 
              className={`faq-item ${openItems[faq.id] ? 'open' : ''}`}
              style={{ '--active-color': getActiveCategoryColor() }}
            >
              <div 
                className="faq-question"
                onClick={() => toggleItem(faq.id)}
              >
                <div className="question-content">
                  <h3>{faq.question}</h3>
                  <span className="toggle">
                    <span className="toggle-line"></span>
                    <span className="toggle-line"></span>
                  </span>
                </div>
              </div>
              {openItems[faq.id] && (
                <div className="faq-answer">
                  <div className="answer-content">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>

      {/* Full Width Contact CTA */}
     

    </div>
  );
};
export default FAQ;