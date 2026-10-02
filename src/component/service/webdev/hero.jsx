import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Test1 from '../../../assets/image/op.png';
import Test2 from '../../../assets/image/img6.jpg';
import Test5 from '../../../assets/image/foo.png';
import Test6 from '../../../assets/image/trav.png';
import Test3 from '../../../assets/image/po.png';
import Test4 from '../../../assets/image/tif.png';


const WebsiteDevelopment = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
  const [stats, setStats] = useState({
    projects: 0,
    clients: 0,
    technologies: 0,
    satisfaction: 0
  });

  const observerRefs = useRef([]);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);

    // Animate stats counter
    const animateStats = () => {
      let projects = 0;
      let clients = 0;
      let technologies = 0;
      let satisfaction = 0;
      
      const interval = setInterval(() => {
        if (projects < 150) projects += 5;
        if (clients < 89) clients += 2;
        if (technologies < 25) technologies += 1;
        if (satisfaction < 98) satisfaction += 2;
        
        setStats({
          projects,
          clients,
          technologies,
          satisfaction
        });

        if (projects >= 150 && clients >= 89 && technologies >= 25 && satisfaction >= 98) {
          clearInterval(interval);
        }
      }, 50);
    };

    animateStats();

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('webdev-animate-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    observerRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Development Icons
  const WebDevIcons = {
    Design: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    Development: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    Responsive: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    SEO: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    Check: () => (
      <svg viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
    ),
    Arrow: () => (
      <svg viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    ),
    Speed: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    Security: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  };

  const services = [
    {
      icon: WebDevIcons.Design,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that provide exceptional user experiences and drive engagement.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design']
    },
    {
      icon: WebDevIcons.Development,
      title: 'Web Development',
      description: 'Custom websites built with modern technologies for optimal performance and scalability.',
      features: ['Frontend Development', 'Backend Development', 'Database Design', 'API Integration']
    },
    {
      icon: WebDevIcons.Responsive,
      title: 'Responsive Design',
      description: 'Websites that look and work perfectly on all devices - desktop, tablet, and mobile.',
      features: ['Mobile-First Approach', 'Cross-Browser Testing', 'Performance Optimization', 'Progressive Web Apps']
    },
    {
      icon: WebDevIcons.SEO,
      title: 'SEO Optimization',
      description: 'Built-in SEO best practices to ensure your website ranks high in search results.',
      features: ['Technical SEO', 'Content Optimization', 'Page Speed', 'Structured Data']
    }
  ];

  const technologies = [
    {
      category: 'Frontend',
      items: [
        { name: 'React', level: 95 },
        { name: 'Vue.js', level: 85 },
        { name: 'Angular', level: 80 },
        { name: 'TypeScript', level: 90 },
        { name: 'JavaScript (ES6+)', level: 98 },
        { name: 'HTML5/CSS3', level: 99 }
      ]
    },
    {
      category: 'Backend',
      items: [
        { name: 'Node.js', level: 92 },
        { name: 'Python/Django', level: 88 },
        { name: 'PHP/Laravel', level: 85 },
        { name: 'Java/Spring', level: 82 },
        { name: 'C#/.NET', level: 80 },
        { name: 'Ruby on Rails', level: 78 }
      ]
    },
    {
      category: 'Database',
      items: [
        { name: 'MySQL', level: 90 },
        { name: 'PostgreSQL', level: 88 },
        { name: 'MongoDB', level: 85 },
        { name: 'Redis', level: 82 },
        { name: 'Firebase', level: 80 },
        { name: 'SQLite', level: 85 }
      ]
    },
    {
      category: 'Tools & Others',
      items: [
        { name: 'Git/GitHub', level: 95 },
        { name: 'Docker', level: 85 },
        { name: 'AWS', level: 80 },
        { name: 'Webpack', level: 82 },
        { name: 'Figma', level: 88 },
        { name: 'Jest/Testing', level: 85 }
      ]
    }
  ];

  const portfolioProjects = [
    {
      id: 1,
      title: 'Truvie Ayurved E-Commerce',
      category: 'ecommerce',
      image:  Test2,
      description: 'Complete e-commerce platform for Ayurvedic products with inventory management and payment integration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: 'https://truvieayurveda.com/',
      githubUrl: '#',
      features: ['Product Catalog', 'Shopping Cart', 'User Accounts', 'Payment Processing']
    },
    {
      id: 2,
      title: 'Vevante Furniture',
      category: 'ecommerce',
      image: Test1,
      description: 'A modern, responsive website with online ordering capabilities and reservation system for furniture business.',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'AWS'],
      liveUrl: 'https://www.vevante.in/',
      githubUrl: '#',
      features: ['Advanced Search', 'Size Guide', 'Wishlist', 'Order Tracking']
    },
    {
      id: 3,
      title: 'Tifton Clothing',
      category: 'Clothing E-Commerce',
      image: Test4,
      description: 'Elegant clothing e-commerce platform with modern design and seamless user experience.',
      technologies: ['React', 'Python', 'PostgreSQL', 'Redis'],
      liveUrl: ' "https://tifton.co.in/"',
      githubUrl: '#',
      features: ['Booking System', 'Payment Gateway', 'Review System', 'Admin Dashboard']
    },
    {
      id: 4,
      title: 'Chicago Pizza',
      category: 'cms',
      image: Test5,
      description: 'Custom content management system for organic food brand with inventory and order management.',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Firebase'],
      liveUrl: 'https://chicagopizza.in/',
      githubUrl: '#',
      features: ['Content Management', 'Inventory Tracking', 'Order Processing', 'Analytics']
    },
    {
      id: 5,
      title: 'Travenzo Travel',
      category: 'Travel & Tourism',
      image: Test6,
      description: 'Secure healthcare platform for patient management and appointment scheduling.',
      technologies: ['React', 'TypeScript', 'PostgreSQL', 'Docker'],
      liveUrl: 'https://travenzo.in/',
      githubUrl: '#',
      features: ['Patient Records', 'Appointment System', 'Billing', 'Telemedicine']
    },
    {
      id: 6,
      title: 'Bhutani Group',
      category: 'realestate',
      image: Test3,
      description: 'Advanced real estate platform with property search and virtual tour capabilities.',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Mapbox'],
      liveUrl: "https://www.bhutanigroup.com/",
      githubUrl: '#',
      features: ['Property Search', 'Virtual Tours', 'Agent Profiles', 'Mortgage Calculator']
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your requirements, target audience, and business goals to create a comprehensive project plan.'
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'Our designers create wireframes and prototypes to visualize the user experience and interface.'
    },
    {
      step: '03',
      title: 'Development',
      description: 'Our developers bring the designs to life using the latest technologies and best practices.'
    },
    {
      step: '04',
      title: 'Testing & Quality Assurance',
      description: 'Rigorous testing ensures your website works perfectly across all devices and browsers.'
    },
    {
      step: '05',
      title: 'Launch & Deployment',
      description: 'We deploy your website to production and ensure everything is running smoothly.'
    },
    {
      step: '06',
      title: 'Support & Maintenance',
      description: 'Ongoing support and maintenance to keep your website secure and up-to-date.'
    }
  ];

  const projectCategories = [
    { id: 'all', name: 'All Projects' },
    { id: 'ecommerce', name: 'E-Commerce' },
    { id: 'travel', name: 'Travel' },
    { id: 'cms', name: 'CMS' },
    { id: 'healthcare', name: 'Healthcare' },
    { id: 'realestate', name: 'Real Estate' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? portfolioProjects 
    : portfolioProjects.filter(project => project.category === activeFilter);

  const addToObserver = (el) => {
    if (el && !observerRefs.current.includes(el)) {
      observerRefs.current.push(el);
    }
  };

  return (
    <div className="webdev-services-page">
      {/* Hero Section */}
   <section className="webdev-hero-section">
  <div className="webdev-container">
    <div className="webdev-hero-grid">
      <div className="webdev-hero-content">
        <div className="webdev-breadcrumb">
          <Link to="/">Home</Link>
          <span className="webdev-breadcrumb-divider">/</span>
          <Link to="/services">Services</Link>
          <span className="webdev-breadcrumb-divider">/</span>
          <span>Website Development</span>
        </div>
        
        <h1 className="webdev-hero-title">
          Transform Your Digital Presence with
          <span className="webdev-blue-text"> Custom Web Solutions</span>
        </h1>
        
        <p className="webdev-hero-description">
          We create stunning, high-performance websites that drive results. From concept to launch, 
          we build digital experiences that captivate your audience and grow your business.
        </p>

        <div className="webdev-hero-stats">
          <div className="webdev-stat-item">
            <div className="webdev-stat-value">+{stats.projects}</div>
            <div className="webdev-stat-label">Projects Delivered</div>
          </div>
          <div className="webdev-stat-item">
            <div className="webdev-stat-value">+{stats.clients}</div>
            <div className="webdev-stat-label">Happy Clients</div>
          </div>
          <div className="webdev-stat-item">
            <div className="webdev-stat-value">{stats.technologies}+</div>
            <div className="webdev-stat-label">Technologies</div>
          </div>
          <div className="webdev-stat-item">
            <div className="webdev-stat-value">{stats.satisfaction}%</div>
            <div className="webdev-stat-label">Client Satisfaction</div>
          </div>
        </div>

        {/* <div className="webdev-hero-actions">
          <button className="webdev-primary-btn">
            <span>Start Your Project</span>
            <WebDevIcons.Arrow />
          </button>
        </div> */}
      </div>

      <div className="webdev-hero-visual-fixed">
        <div className="webdev-code-mockup-fixed">
          <div className="webdev-code-header-fixed">
            <div className="webdev-code-dots-fixed">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="webdev-code-title-fixed">website-development.js</div>
          </div>
          <div className="webdev-code-content-fixed">
            <div className="webdev-code-line-fixed">
              <span className="webdev-code-keyword-fixed">import</span>
              <span className="webdev-code-text-fixed"> React from </span>
              <span className="webdev-code-string-fixed">'react'</span>
            </div>
            <div className="webdev-code-line-fixed">
              <span className="webdev-code-keyword-fixed">import</span>
              <span className="webdev-code-text-fixed"> Innovation from </span>
              <span className="webdev-code-string-fixed">'our-process'</span>
            </div>
            <div className="webdev-code-line-fixed webdev-code-comment-fixed">// Your vision + Our expertise</div>
            <div className="webdev-code-line-fixed">
              <span className="webdev-code-keyword-fixed">const</span>
              <span className="webdev-code-variable-fixed"> AmazingWebsite</span>
              <span className="webdev-code-operator-fixed"> = </span>
              <span className="webdev-code-punctuation-fixed">()</span>
              <span className="webdev-code-operator-fixed"> =&gt;</span>
              <span className="webdev-code-punctuation-fixed"> {'{'}</span>
            </div>
            <div className="webdev-code-line-fixed webdev-code-indent-fixed">
              <span className="webdev-code-keyword-fixed">return</span>
              <span className="webdev-code-punctuation-fixed"> (</span>
            </div>
            <div className="webdev-code-line-fixed webdev-code-double-indent-fixed">
              <span className="webdev-code-tag-fixed">&lt;div</span>
              <span className="webdev-code-attr-fixed"> className=</span>
              <span className="webdev-code-string-fixed">"success-story"</span>
              <span className="webdev-code-tag-fixed">&gt;</span>
            </div>
            <div className="webdev-code-line-fixed webdev-code-triple-indent-fixed">
              <span className="webdev-code-comment-fixed">{'// Your digital transformation starts here'}</span>
            </div>
            <div className="webdev-code-line-fixed webdev-code-double-indent-fixed">
              <span className="webdev-code-tag-fixed">&lt;/div&gt;</span>
            </div>
            <div className="webdev-code-line-fixed webdev-code-indent-fixed">
              <span className="webdev-code-punctuation-fixed">)</span>
            </div>
            <div className="webdev-code-line-fixed">
              <span className="webdev-code-punctuation-fixed">{'}'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      {/* Services Section */}


      {/* Portfolio Section */}
      <section className="webdev-portfolio-section" ref={addToObserver}>
        <div className="webdev-container">
          <div className="webdev-section-header">
            <h2>Our Portfolio</h2>
            <p>Explore our latest projects and see how we've helped businesses transform their digital presence</p>
          </div>

          <div className="webdev-portfolio-filters">
            {projectCategories.map(category => (
              <button
                key={category.id}
                className={`webdev-filter-btn ${activeFilter === category.id ? 'webdev-filter-active' : ''}`}
                onClick={() => setActiveFilter(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="webdev-portfolio-grid">
            {filteredProjects.map(project => (
              <div key={project.id} className="webdev-project-card">
                <div className="webdev-project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="webdev-project-overlay">
                    <div className="webdev-project-links">
                      <a href={project.liveUrl} className="webdev-project-link">
                        Live Demo
                      </a>
                      <a href={project.githubUrl} className="webdev-project-link">
                        View Code
                      </a>
                    </div>
                  </div>
                </div>
                <div className="webdev-project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="webdev-project-technologies">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="webdev-tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="webdev-project-features">
                    <h4>Key Features:</h4>
                    <ul>
                      {project.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="webdev-technologies-section" ref={addToObserver}>
        <div className="webdev-container">
          <div className="webdev-section-header webdev-centered">
            <h2>Technologies We Work With</h2>
            <p>Mastering the latest tools and frameworks to deliver cutting-edge web solutions</p>
          </div>

          <div className="webdev-technologies-grid">
            {technologies.map((category, index) => (
              <div key={index} className="webdev-tech-category">
                <h3 className="webdev-tech-category-title">{category.category}</h3>
                <div className="webdev-tech-list">
                  {category.items.map((tech, idx) => (
                    <div key={idx} className="webdev-tech-item">
                      <div className="webdev-tech-header">
                        <span className="webdev-tech-name">{tech.name}</span>
                        <span className="webdev-tech-level">{tech.level}%</span>
                      </div>
                      <div className="webdev-tech-bar">
                        <div 
                          className="webdev-tech-progress" 
                          style={{ width: `${tech.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="webdev-process-section" ref={addToObserver}>
        <div className="webdev-container">
          <div className="webdev-section-header webdev-centered">
            <h2>Our Development Process</h2>
            <p>A structured approach to ensure your project's success from concept to launch</p>
          </div>

          <div className="webdev-process-timeline">
            {processSteps.map((step, index) => (
              <div key={step.step} className="webdev-process-step">
                <div className="webdev-step-number">{step.step}</div>
                <div className="webdev-step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="webdev-step-connector"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
  <section className="webdev-cta-section" ref={addToObserver}>
  <div className="webdev-container">
    <div className="webdev-cta-content">
      <div className="webdev-cta-text">
        <h2>Ready to Build Your Dream Website?</h2>
        <p>Let's discuss your project and create something amazing together</p>
        
        <div className="webdev-cta-features">
          <div className="webdev-cta-feature">
            <WebDevIcons.Check />
            <span>Free consultation and project estimate</span>
          </div>
          <div className="webdev-cta-feature">
            <WebDevIcons.Check />
            <span>Dedicated project manager</span>
          </div>
          <div className="webdev-cta-feature">
            <WebDevIcons.Check />
            <span>Ongoing support and maintenance</span>
          </div>
        </div>
      </div>

      <div className="webdev-cta-form">
        <form className="webdev-contact-form">
          <div className="webdev-form-group">
            <input 
              type="text" 
              placeholder="Your Name" 
              required 
            />
          </div>
          <div className="webdev-form-group">
            <input 
              type="email" 
              placeholder="Your Email" 
              required 
            />
          </div>
          <div className="webdev-form-group">
            <select required>
              <option value="">Project Type</option>
              <option value="ecommerce">E-Commerce Website</option>
              <option value="business">Business Website</option>
              <option value="portfolio">Portfolio Website</option>
              <option value="webapp">Web Application</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="webdev-form-group">
            <textarea 
              placeholder="Tell us about your project..." 
              rows="4"
              required
            ></textarea>
          </div>

       <button type="submit" className="webdev-primary-btn webdev-btn-large">
  <span className="webdev-btn-text">Start Your Project</span>
  <div className="webdev-btn-icon">
    <WebDevIcons.Arrow />
  </div>
  <div className="webdev-btn-shine"></div>
</button>
        </form>
      </div>
    </div>
  </div>
</section>
    </div>
  );
};

export default WebsiteDevelopment;