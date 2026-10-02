import React from 'react';


export const Careers = () => {
  const currentOpenings = [
    { 
      title: "Internship Program", 
      type: "internship",
      department: "Marketing",
      experience: "Entry Level"
    },
    { 
      title: "Account Manager", 
      type: "full-time",
      department: "Client Services",
      experience: "2+ Years"
    },
    { 
      title: "Business Development", 
      type: "full-time",
      department: "Growth",
      experience: "3+ Years"
    },
    { 
      title: "Marketing Intern", 
      type: "internship",
      department: "Digital Marketing",
      experience: "Entry Level"
    }
  ];

  const upcomingOpenings = [
    { 
      title: "Social Media Specialist", 
      timeframe: "2-4 months",
      department: "Digital Marketing"
    },
    { 
      title: "Administrative Assistant", 
      timeframe: "2-4 months",
      department: "Operations"
    },
    { 
      title: "Online Advertising Specialist", 
      timeframe: "2-4 months",
      department: "Performance Marketing"
    }
  ];

  const marketingStats = [
    { number: "50+", label: "Campaigns Managed" },
    { number: "15+", label: "Industry Awards" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "3M+", label: "Audience Reach" }
  ];

  return (
    <div className="careers-container">
      <div className="careers-content">
        {/* Hero Section */}
       

        {/* Current Openings */}
        <section className="openings-section">
          <div className="section-header">
            <div className="section-icon"></div>
            <h2>Immediate Marketing Opportunities</h2>
            <p>Join our team and help drive innovative marketing campaigns</p>
          </div>
          
          <div className="jobs-grid">
            {currentOpenings.map((job, index) => (
              <div key={index} className="job-card">
                <div className="card-header">
                  <div className="job-meta">
                    <span className="department">{job.department}</span>
                    <span className="experience">{job.experience}</span>
                  </div>
                  <span className={`job-type ${job.type}`}>
                    {job.type === 'internship' ? 'Internship' : 'Full Time'}
                  </span>
                </div>
                
                <h3 className="job-title">{job.title}</h3>
                <p className="job-description">
                  Drive marketing initiatives and contribute to campaign success in a collaborative environment.
                </p>
                
                <div className="card-footer">
                  <button className="apply-btn">
                    <span className="btn-icon">📧</span>
                    Apply Now
                  </button>
                  <button className="learn-more-btn">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Upcoming Openings */}
        <section className="upcoming-section">
       
            <div className="section-icon"></div>
            <h2>Future Growth Roles</h2>
            <p>Upcoming positions in our expanding marketing department</p>
          
          <div className="upcoming-grid">
            {upcomingOpenings.map((job, index) => (
              <div key={index} className="upcoming-card">
                <div className="upcoming-badge">Coming Soon</div>
                <div className="upcoming-header">
                  <h3>{job.title}</h3>
                  <span className="department-tag">{job.department}</span>
                </div>
                <p className="upcoming-timeline">
                  <span className="timeline-icon">⏰</span>
                  Estimated: {job.timeframe}
                </p>
                <ul className="role-highlights">
                  <li>Strategic campaign development</li>
                  <li>Data-driven decision making</li>
                  <li>Cross-functional collaboration</li>
                </ul>
                <button className="notify-btn">
                  <span className="btn-icon">🔔</span>
                  Notify Me When Open
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
       
      </div>
    </div>
  );
};
export default Careers;