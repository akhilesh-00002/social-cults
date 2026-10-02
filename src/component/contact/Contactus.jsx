import React, { useState } from 'react';

export const Contactpa = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setShowPopup(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = {
    phone: "+919129939996",
    email: "connect@socialcults.com",
    address: "G69, G Block, Sector 63, Noida, Chotpur, Uttar Pradesh 201301",
    whatsapp: "https://api.whatsapp.com/send?phone=+919129939996&text=Hi%20I%20want%20to%20know%20about%20your%20services"
  };

  const businessHours = [
    { days: "Monday - Friday", time: "10:00 AM - 8:30 PM", status: "open" },
    { days: "Saturday", time: "10:00 AM - 6:00 PM", status: "open" },
    { days: "Sunday", time: "Weekly Off", status: "closed" }
  ];

  return (
    <div className="contact-container">
      {/* Professional Hero Banner */}
      <section className="contact-hero">
        <div className="hero-container">
          <div className="hero-content">
          
            <h1 className="hero-title">
                  Get in touch
              <span className="gradient-text"> with us....</span>
            </h1>
            
        
          </div>
          
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="contact-main-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Information Side */}
            <div className="contact-info-side">
              {/* Office Information */}
              <div className="info-card">
                <div className="card-header">
                  <div className="header-icon">🏢</div>
                  <div>
                    <h3>Central Office</h3>
                    <p>Let's discuss your digital marketing needs</p>
                  </div>
                </div>
                
                <div className="contact-details">
                  <div className="contact-item">
                    <div className="item-icon">📞</div>
                    <div className="item-content">
                      <span className="item-label">Phone Number</span>
                      <a href={`tel:${contactInfo.phone}`} className="item-value">
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="item-icon">✉️</div>
                    <div className="item-content">
                      <span className="item-label">Email Address</span>
                      <a href={`mailto:${contactInfo.email}`} className="item-value">
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="item-icon">📍</div>
                    <div className="item-content">
                      <span className="item-label">Office Location</span>
                      <span className="item-value">{contactInfo.address}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="info-card">
                <div className="card-header">
                  <div className="header-icon">🕒</div>
                  <div>
                    <h3>Business Hours</h3>
                    <p>We're here when you need us</p>
                  </div>
                </div>
                
                <div className="hours-list">
                  {businessHours.map((schedule, index) => (
                    <div key={index} className="hour-item">
                      <div className="day-info">
                        <span className="days">{schedule.days}</span>
                        <span className="time">{schedule.time}</span>
                      </div>
                      <div className={`status ${schedule.status}`}>
                        {schedule.status === 'open' ? 'Open' : 'Closed'}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="quick-actions">
                <a href={contactInfo.whatsapp} className="action-btn whatsapp-btn" target="_blank" rel="noopener noreferrer">
                  <span className="btn-icon">💬</span>
                  <span className="btn-text">Chat on WhatsApp</span>
                </a>
                <button 
                  className="action-btn call-btn"
                  onClick={() => window.open(`tel:${contactInfo.phone}`, '_self')}
                >
                  <span className="btn-icon">📞</span>
                  <span className="btn-text">Call Now</span>
                </button>
              </div>
            </div>

            {/* Contact Form Side */}
            <div className="contact-form-side">
              <div className="form-container">
                <div className="form-header">
                  <h3>Start Your Project</h3>
                  <p>Complete the form below and we'll contact you within 24 hours</p>
                </div>
                
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="contact-name" className="form-label">
                        Full Name *
                      </label>
                      <input 
                        id="contact-name" 
                        name="name" 
                        className="form-input" 
                        placeholder="Enter your full name" 
                        type="text" 
                        value={formData.name}
                        onChange={handleInputChange}
                        required 
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="contact-email" className="form-label">
                        Email Address *
                      </label>
                      <input 
                        id="contact-email" 
                        name="email" 
                        className="form-input" 
                        placeholder="your.email@example.com" 
                        type="email" 
                        value={formData.email}
                        onChange={handleInputChange}
                        required 
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-phone" className="form-label">
                      Phone Number *
                    </label>
                    <input 
                      id="contact-phone" 
                      name="phone" 
                      className="form-input" 
                      placeholder="+91 9667728901" 
                      type="tel" 
                      value={formData.phone}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-message" className="form-label">
                      Project Details *
                    </label>
                    <textarea 
                      className="form-textarea" 
                      id="contact-message" 
                      name="message" 
                      placeholder="Tell us about your project requirements, goals, and timeline..." 
                      rows="5"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    ></textarea>
                  </div>

                  <button 
                    className={`submit-btn ${isSubmitting ? 'submitting' : ''}`} 
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner"></span>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span className="btn-text">Send Message</span>
                        <span className="btn-arrow">→</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <div className="section-header">
            <h2>Visit Our Office</h2>
            <p>Come by for a meeting or just to say hello over coffee</p>
          </div>
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.370782626298!2d77.38504737349768!3d28.61864743096513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xad39a91d0eb8309%3A0x113d062f343daad7!2sSocial%20Cults%20-%20Social%20media%20marketing%20company%20in%20noida!5e0!3m2!1sen!2sin!4v1718967858539!5m2!1sen!2sin" 
              width="100%" 
              height="450" 
              style={{ border: 0, borderRadius: '12px' }} 
              allowFullScreen 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Social Cults Office Location - Noida"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Floating Action Button */}
      <div 
        className="floating-action-btn"
        onClick={() => document.querySelector('.contact-form-side').scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })}
      >
        <span className="fab-icon">💼</span>
        <span className="fab-text">Get Started</span>
      </div>

      {/* Success Modal */}
      {showPopup && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-icon">🎉</div>
            <h3 className="modal-title">Message Received!</h3>
            <p className="modal-description">
              Thank you for reaching out. Our team has received your inquiry and will 
              contact you within 24 hours to discuss your project.
            </p>
            <div className="modal-actions">
              <button 
                className="modal-btn primary" 
                onClick={() => setShowPopup(false)}
              >
                Continue Exploring
              </button>
              <a 
                href={contactInfo.whatsapp} 
                className="modal-btn secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Contactpa;