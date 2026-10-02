import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaSearch, FaSpinner, FaExternalLinkAlt } from 'react-icons/fa';
import Test1 from '../../assets/image/op.png';
import Test2 from '../../assets/image/img6.jpg';
import Test3 from '../../assets/image/po.png';
import Test4 from '../../assets/image/tif.png';
import Test5 from '../../assets/image/foo.png';
import Test6 from '../../assets/image/trav.png';

export const ProjCompo= () => {
  const [projects] = useState([
    {
      id: 1,
      name: "Vevante Furniture",
      category: "web",
      description: "A modern, responsive website with online ordering capabilities and reservation system for furniture business.",
      image: Test1,
      link: "https://www.vevante.in/",
      tags: ["Furniture", "E-commerce"],
      client: "Vevante",
      technologies: ["React", "Node.js", "MongoDB"],
      results: "Increased sales by 45%"
    },
    {
      id: 2,
      name: "Truvie Ayurveda",
      category: "web",
      description: "Comprehensive e-commerce solution with integrated payment processing and inventory management.",
      image: Test2,
      link: "https://truvieayurveda.com/",
      tags: ["E-commerce", "Health"],
      client: "Truvie Ayurveda",
      technologies: ["Shopify", "React", "Stripe"],
      results: "220% sales growth"
    },
    {
      id: 3,
      name: "Bhutani Group",
      category: "web",
      description: "Professional corporate website with integrated CMS and lead generation system for real estate.",
      image: Test3,
      link: "https://www.bhutanigroup.com/",
      tags: ["Real Estate", "Corporate"],
      client: "Bhutani Group",
      technologies: ["WordPress", "PHP", "MySQL"],
      results: "45% conversion improvement"
    },
    {
      id: 4,
      name: "Tifton Clothing",
      category: "web",
      description: "Elegant clothing e-commerce platform with modern design and seamless user experience.",
      image: Test4,
      link: "https://tifton.co.in/",
      tags: ["Clothing", "Fashion"],
      client: "Tifton",
      technologies: ["React", "Next.js", "Sanity CMS"],
      results: "3x more engagement"
    },
    {
      id: 5,
      name: "Chicago Pizza",
      category: "web",
      description: "Order our one of a kind, do it yourself Pizza Kit! Includes 3 or 5 signature pizza bases.",
      image: Test5,
      link: "https://chicagopizza.in/",
      tags: ["Food & Beverage", "Delivery"],
      client: "Chicago Pizza",
      technologies: ["React", "Firebase", "Payment Gateway"],
      results: "180% order increase"
    },
    {
      id: 6,
      name: "Travenzo Travel",
      category: "web",
      description: "Travel booking platform with integrated payment and itinerary management.",
      image: Test6,
      link: "https://travenzo.in/",
      tags: ["Travel", "Booking"],
      client: "Travenzo",
      technologies: ["Vue.js", "Laravel", "MySQL"],
      results: "150% booking growth"
    },
    {
      id: 7,
      name: "Vevante Furniture SMM",
      category: "smm",
      description: "Social media marketing campaign that increased brand awareness and customer engagement.",
      image: Test1,
      link: "https://www.vevante.in/",
      tags: ["Furniture", "Social Media"],
      client: "Vevante",
      technologies: ["Facebook Ads", "Instagram", "Content Strategy"],
      results: "Increased engagement by 65%"
    },
    {
      id: 8,
      name: "Vevante Furniture SMM",
      category: "smm",
      description: "Social media marketing campaign that increased brand awareness and customer engagement.",
      image: Test1,
      link: "https://www.vevante.in/",
      tags: ["Furniture", "Social Media"],
      client: "Vevante",
      technologies: ["Facebook Ads", "Instagram", "Content Strategy"],
      results: "Increased engagement by 65%"
    },


  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(false);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [loadingMessage, setLoadingMessage] = useState('');

  // Filter projects based on search and filter
  useEffect(() => {
    const filtered = projects.filter(project => {
      const matchesSearch = searchTerm === '' ||
        project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesFilter = activeFilter === 'all' || project.category.includes(activeFilter);

      return matchesSearch && matchesFilter;
    });

    setFilteredProjects(filtered);
  }, [searchTerm, activeFilter, projects]);

  const handleSearch = () => {
    if (searchTerm.trim()) {
      setLoadingMessage(`Searching for "${searchTerm}"...`);
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 800);
    }
  };

  const handleFilterClick = (categoryId, categoryName) => {
    setLoadingMessage(`Loading ${categoryName} projects...`);
    setIsLoading(true);
    setActiveFilter(categoryId);
    setTimeout(() => {
      setIsLoading(false);
    }, 600);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const categories = [
    { id: 'all', name: 'All Projects', count: projects.length },
    { id: 'web', name: 'Web Development', count: projects.filter(p => p.category === 'web').length },
    { id: 'smm', name: 'Social Media Marketing', count: projects.filter(p => p.category === 'smm').length }
  ];

  const getCategoryColor = (category) => {
    return category === 'web' ? '#2563eb' : '#dc2626';
  };

  return (
    <div className="projects-portfolio-page" id="projects-portfolio">
      {/* Enhanced Loader */}
      {isLoading && (
        <div className="projects-loader-container">
          <div className="projects-loader-content">
            <div className="projects-loader-animation">
              <FaSpinner className="projects-loader-spinner" />
            </div>
            <div className="projects-loader-text">
              <h3>{loadingMessage}</h3>
            </div>
          </div>
        </div>
      )}

      {/* Projects Section */}
      <section className="projects-showcase-section">
        <div className="projects-container">
          {/* Header Section */}
          <div className="projects-header-section">
            {/* <div className="header-badge">
              <span className="badge-dot"></span>
              Our Portfolio
            </div> */}
            <h1 className="projects-main-title">
              Featured <span className="gradient-text">Projects</span>
            </h1>
            {/* <p className="projects-section-description">
              Discover our successful web development and social media marketing projects that drive real business results
            </p> */}
          </div>

          {/* Search and Filter Section */}
          <div className="projects-search-filter-section">
            <div className="projects-search-container">
              <div className="projects-search-box">
                <div className="search-input-wrapper">
                  <FaSearch className="search-input-icon" />
                  <input
                    type="text"
                    className="projects-search-input"
                    placeholder="Search projects by name, technology, or results..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyPress={handleKeyPress}
                  />
                </div>
                <button className="projects-search-btn" onClick={handleSearch}>
                  Search
                </button>

                  <div className="projects-filter-section">
              {/* <div className="filter-label">Filter by category:</div> */}
              <div className="projects-filter-buttons">
                {categories.map(category => (
                  <button
                    key={category.id}
                    className={`projects-filter-btn ${activeFilter === category.id ? 'projects-filter-active' : ''}`}
                    onClick={() => handleFilterClick(category.id, category.name)}
                    style={{
                      '--active-color': category.id === 'web' ? '#2563eb' : category.id === 'smm' ? '#dc2626' : '#000'
                    }}
                  >
                    <span className="filter-btn-text">{category.name}</span>
                    <span className="projects-filter-count">{category.count}</span>
                  </button>
                ))}
              </div>
            </div>



                
              </div>
              {/* <div className="projects-search-stats">
                <span className="stats-number">{filteredProjects.length}</span>
                <span className="stats-text">of {projects.length} projects matching</span>
              </div> */}
              
            </div>

          
          </div>

          {/* Projects Grid */}
          <div className="projects-display-grid">
            {filteredProjects.map(project => (
              <div
                key={project.id}
                className="project-display-card"
                data-category={project.category}
              >
                <div className="project-card-image-container">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="project-card-image"
                    loading="lazy"
                  />
                  <div className="project-card-overlay">
                    <div className="overlay-content">
                      <div className="result-badge">
                        <span className="result-text">{project.results}</span>
                      </div>
                      <a
                        href={project.link}
                        className="project-link-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaExternalLinkAlt />
                        Visit Live Site
                      </a>
                    </div>
                  </div>
                  <div
                    className="project-category-badge"
                    style={{ backgroundColor: getCategoryColor(project.category) }}
                  >
                    {project.category === 'web' ? 'Web Development' : 'Social Media Marketing'}
                  </div>
                </div>

                <div className="project-card-content">
                  <div className="project-card-header">
                    <h3 className="project-card-title">{project.name}</h3>
                    <span className="project-client">{project.client}</span>
                  </div>

                  <p className="project-card-description">{project.description}</p>

                  <div className="project-tags-container">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="project-tag">{tag}</span>
                    ))}
                  </div>

                  <div className="project-technologies">
                    <span className="tech-label">Technologies:</span>
                    <div className="tech-tags">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>

                  <div className="project-card-footer">
                    <a
                      href={project.link}
                      className="project-view-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt />
                      View Project
                    </a>
                    <div className="project-results">
                      <span className="results-text">{project.results}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results State */}
          {filteredProjects.length === 0 && !isLoading && (
            <div className="projects-no-results">
              <div className="no-results-content">
                <div className="no-results-icon">🔍</div>
                <h3 className="no-results-title">No projects found</h3>
                <p className="no-results-message">
                  Try adjusting your search terms or filter criteria to see more projects.
                </p>
                <button
                  className="clear-filters-btn"
                  onClick={() => {
                    setSearchTerm('');
                    setActiveFilter('all');
                  }}
                >
                  Clear All Filters
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProjCompo;