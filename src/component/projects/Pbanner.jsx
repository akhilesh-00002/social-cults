// ProjectBanner.jsx
import React, { useState, useEffect } from 'react';

const ProjectBanner = ({ 
  projectTitle = "Project Title",
  projectDescription = "A brief description of the project goes here, highlighting the main objectives and key achievements.",
  projectCategory = "Web Development",
  completionDate = "December 2023",
  clientName = "Client Name",
  projectImage = "https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&h=600&q=80",
  status = "Completed"
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="project-banner">
      <div className="banner-container">
        <div className="banner-content">
          <div className="content-left">
            <nav className="breadcrumb">
              <a href="/">Home</a>
              <span className="separator">/</span>
              <a href="/projects">Projects</a>
              <span className="separator">/</span>
              <span className="current">{projectCategory}</span>
            </nav>
            
            <div className={`project-header ${isVisible ? 'visible' : ''}`}>
              <div className="category-badge">
                {projectCategory}
              </div>
              
              <h1 className="project-title">
                {projectTitle}
              </h1>
              
              <p className="project-description">
                {projectDescription}
              </p>
              
              <div className="project-meta">
                <div className="meta-item">
                  <div className="meta-icon">📅</div>
                  <div className="meta-content">
                    <div className="meta-label">Completed</div>
                    <div className="meta-value">{completionDate}</div>
                  </div>
                </div>
                
                <div className="meta-item">
                  <div className="meta-icon">👤</div>
                  <div className="meta-content">
                    <div className="meta-label">Client</div>
                    <div className="meta-value">{clientName}</div>
                  </div>
                </div>
                
                <div className="meta-item">
                  <div className="meta-icon">📊</div>
                  <div className="meta-content">
                    <div className="meta-label">Status</div>
                    <div className="meta-value status-badge">{status}</div>
                  </div>
                </div>
              </div>
              
              <div className="project-stats">
                <div className="stat">
                  <div className="stat-number">40%</div>
                  <div className="stat-label">ROI Increase</div>
                </div>
                <div className="stat">
                  <div className="stat-number">3x</div>
                  <div className="stat-label">Performance</div>
                </div>
                <div className="stat">
                  <div className="stat-number">99.9%</div>
                  <div className="stat-label">Uptime</div>
                </div>
              </div>
              
              <div className="action-buttons">
                <button className="btn btn-primary">
                  <span className="btn-icon">🌐</span>
                  View Live Project
                </button>
                <button className="btn btn-secondary">
                  <span className="btn-icon">📁</span>
                  Case Study
                </button>
              </div>
            </div>
          </div>
          
          <div className="content-right">
            <div className={`project-showcase ${isVisible ? 'visible' : ''}`}>
              <div className="showcase-container">
                <div className="showcase-image-wrapper">
                  <img 
                    src={projectImage} 
                    alt={projectTitle}
                    className="showcase-image"
                  />
                  <div className="image-overlay"></div>
                </div>
                
                <div className="tech-stack">
                  <div className="tech-tag">React</div>
                  <div className="tech-tag">Node.js</div>
                  <div className="tech-tag">MongoDB</div>
                  <div className="tech-tag">AWS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectBanner;