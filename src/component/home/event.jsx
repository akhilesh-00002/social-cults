import React, { useState, useEffect } from 'react';


export const Event = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      date: "22",
      month: "NOV",
      year: "2025",
      time: "8:00 AM - 5:00 PM",
      title: "Digital Marketing Summit 2025",
      location: "London, UK",
      description: "Join industry leaders to explore the latest trends in SEO, social media marketing, and data analytics.",
      category: "marketing",
      seats: 150,
      registered: 120,
      image: "/images/event1.jpg",
      status: "upcoming"
    },
    {
      id: 2,
      date: "24",
      month: "NOV",
      year: "2025",
      time: "9:00 AM - 6:00 PM",
      title: "Web Development Conference",
      location: "Lisbon, Portugal",
      description: "Advanced web technologies, React frameworks, and modern development practices.",
      category: "development",
      seats: 200,
      registered: 180,
      image: "/images/event2.jpg",
      status: "upcoming"
    },
    {
      id: 3,
      date: "27",
      month: "NOV",
      year: "2025",
      time: "10:00 AM - 5:00 PM",
      title: "Social Media Masters 2025",
      location: "London, UK",
      description: "Master social media strategies, content creation, and audience engagement techniques.",
      category: "social",
      seats: 100,
      registered: 95,
      image: "/images/event3.jpg",
      status: "upcoming"
    }
  ]);

  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredCard, setHoveredCard] = useState(null);

  const categories = [
    { id: "all", name: "All Events", icon: "🎯" },
    { id: "marketing", name: "Marketing", icon: "📊" },
    { id: "development", name: "Development", icon: "💻" },
    { id: "social", name: "Social Media", icon: "📱" }
  ];

  const filteredEvents = activeFilter === "all" 
    ? events 
    : events.filter(event => event.category === activeFilter);

  const handleRegister = (eventId) => {
    setEvents(prevEvents => 
      prevEvents.map(event => 
        event.id === eventId && event.registered < event.seats
          ? { ...event, registered: event.registered + 1 }
          : event
      )
    );
  };

  return (
    <section className="events-section">
      <div className="container">
        {/* Header */}
        <div className="events-header">
          <div className="header-badge">
            <span className="badge-icon">✨</span>
            Upcoming Events
          </div>
          <h1 className="events-title">
            Join Our <span className="highlight">Digital</span> Experiences
          </h1>
          <p className="events-subtitle">
            Discover cutting-edge insights in marketing, development, and social media. 
            Network with industry leaders and transform your digital skills.
          </p>
        </div>

        {/* Category Filter */}
        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(category.id)}
            >
              <span className="filter-icon">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="events-grid">
          {filteredEvents.map(event => (
            <div 
              key={event.id}
              className={`event-card ${event.category} ${hoveredCard === event.id ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredCard(event.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Header with Date */}
              <div className="card-header">
                <div className="event-date">
                  <div className="date-main">
                    <span className="date-number">{event.date}</span>
                    <div className="date-month">{event.month}</div>
                  </div>
                  <div className="date-year">{event.year}</div>
                </div>
                <div className="event-category-tag">
                  <span className={`category-dot ${event.category}`}></span>
                  {event.category.toUpperCase()}
                </div>
              </div>

              {/* Card Content */}
              <div className="card-content">
                <h3 className="event-name">{event.title}</h3>
                <p className="event-description">{event.description}</p>
                
                <div className="event-meta">
                  <div className="meta-item">
                    <span className="meta-icon">⏰</span>
                    {event.time}
                  </div>
                  <div className="meta-item">
                    <span className="meta-icon">📍</span>
                    {event.location}
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="registration-progress">
                  <div className="progress-header">
                    <span className="progress-text">
                      {event.registered}/{event.seats} Registered
                    </span>
                    <span className="progress-percent">
                      {Math.round((event.registered / event.seats) * 100)}%
                    </span>
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill"
                      style={{ width: `${(event.registered / event.seats) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="card-footer">
                <button 
                  className={`register-btn ${event.registered >= event.seats ? 'sold-out' : ''}`}
                  onClick={() => handleRegister(event.id)}
                  disabled={event.registered >= event.seats}
                >
                  {event.registered >= event.seats ? (
                    <>
                      <span className="btn-icon">🔒</span>
                      Sold Out
                    </>
                  ) : (
                    <>
                      <span className="btn-icon">🎟️</span>
                      Register Now
                    </>
                  )}
                </button>
                
                <div className="social-actions">
                  <button className="social-action">
                    <span className="action-icon">❤️</span>
                    <span className="action-count">24</span>
                  </button>
                  <button className="social-action">
                    <span className="action-icon">🔄</span>
                    <span className="action-count">12</span>
                  </button>
                  <button className="social-action">
                    <span className="action-icon">📤</span>
                  </button>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="card-overlay">
                <div className="overlay-content">
                  <h4>What You'll Learn:</h4>
                  <ul className="learning-list">
                    {event.category === 'marketing' && (
                      <>
                        <li>Advanced SEO Strategies</li>
                        <li>Data-Driven Campaigns</li>
                        <li>ROI Optimization</li>
                        <li>Marketing Automation</li>
                      </>
                    )}
                    {event.category === 'development' && (
                      <>
                        <li>Modern React Patterns</li>
                        <li>Performance Optimization</li>
                        <li>API Best Practices</li>
                        <li>Cloud Deployment</li>
                      </>
                    )}
                    {event.category === 'social' && (
                      <>
                        <li>Content Strategy</li>
                        <li>Audience Engagement</li>
                        <li>Analytics & Insights</li>
                        <li>Viral Campaigns</li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="events-cta">
          <div className="cta-content">
            <h2>Can't Find the Right Event?</h2>
            <p>We organize custom workshops and corporate training sessions tailored to your team's needs.</p>
            <div className="cta-buttons">
              <button className="cta-btn primary">
                <span className="btn-icon">📅</span>
                Request Custom Event
              </button>
              <button className="cta-btn secondary">
                <span className="btn-icon">📥</span>
                Download Event Calendar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};