import React, { useState, useEffect } from 'react';

// Import images
import client1 from '../../assets/image/02.jpg';
import client2 from '../../assets/image/01.jpg';
import client3 from '../../assets/image/03.jpg';
import client4 from '../../assets/image/04.jpg';
import client5 from '../../assets/image/05.jpg';
import client6 from '../../assets/image/06.jpg';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Abhinav Ekansh",
      image: client1,
      text: "Social Cults is a powerhouse in the world of digital marketing. Their team is skilled, dedicated, and always up-to-date on the latest trends and best practices.",
      rating: 5,
      company: "Tech Solutions Inc.",
      role: "CEO"
    },
    {
      id: 2,
      name: "Ankita Singh",
      image: client2,
      text: "I've recommended Social Cults to several friends and colleagues, and they've all had great experiences. This company knows how to deliver results with integrity.",
      rating: 5,
      company: "Creative Minds Ltd.",
      role: "Marketing Director"
    },
    {
      id: 3,
      name: "Prachi Purohit",
      image: client3,
      text: "Choosing Social Cults was one of the best decisions we made. Their data-driven approach has resulted in remarkable ROI. Really the best digital marketing agency!",
      rating: 5,
      company: "Innovate Corp",
      role: "Business Owner"
    },
    {
      id: 4,
      name: "Ajay Kumar",
      image: client4,
      text: "Social Cults transformed our online presence completely. Their strategic approach and attention to detail exceeded our expectations in every way.",
      rating: 5,
      company: "Business Growth Co.",
      role: "Founder"
    },
    {
      id: 5,
      name: "Priya Thakur",
      image: client5,
      text: "Social Cults helped my business take off! Their team is knowledgeable and responsive, and they know how to create effective digital marketing strategies.",
      rating: 5,
      company: "StartUp Ventures",
      role: "Entrepreneur"
    },
    {
      id: 6,
      name: "Sheetal Singh",
      image: client6,
      text: "As a small business owner, I was hesitant to invest in digital marketing. But Social Cults has proven to be worth every penny for exponential growth.",
      rating: 5,
      company: "Small Business Hub",
      role: "Owner"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const handleDotClick = (index) => {
    setActiveIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`star ${index < rating ? 'filled' : ''}`}
      >
        ★
      </span>
    ));
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        {/* Header */}
        <div className="testimonials-header">
          <div className="header-badge">
            <span className="badge-dot"></span>
            Client Testimonials
          </div>
          <h2 className="section-title">
            Trusted by <span className="gradient-text">1,500+ Businesses</span>
          </h2>
          <p className="section-description">
            Discover why companies choose Social Cults for exceptional digital marketing results
          </p>
        </div>

        {/* Single Card Carousel */}
        <div className="carousel-container">
          <div className="carousel-wrapper" >
            <div
              className="carousel-track"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="testimonial-card"
                  data-active={index === activeIndex}
                >
                  <div className="card-content">
                    {/* Quote Icon */}
                    <div className="quote-mark">"</div>

                    {/* Rating */}
                    <div className="rating-stars">
                      {renderStars(testimonial.rating)}
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="testimonial-text">
                      {testimonial.text}
                    </blockquote>

                    {/* Client Info */}
                    <div className="client-info">
                      <div className="client-avatar">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          loading="lazy"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <div className="avatar-fallback">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      </div>
                      <div className="client-details">
                        <h4 className="client-name">{testimonial.name}</h4>
                        <p className="client-company">{testimonial.company}</p>
                        <span className="client-role">{testimonial.role}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="carousel-controls">
            <button
              className="control-btn prev-btn"
              onClick={handlePrev}
              aria-label="Previous testimonial"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div className="carousel-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`carousel-dot ${index === activeIndex ? 'active' : ''}`}
                  onClick={() => handleDotClick(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              className="control-btn next-btn"
              onClick={handleNext}
              aria-label="Next testimonial"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;