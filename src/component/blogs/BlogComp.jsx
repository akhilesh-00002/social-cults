import React, { useState } from 'react';

// Import your images - replace these with actual blog images
import BlogImage1 from "../../assets/image/B1.jpg";
import BlogImage2 from "../../assets/image/B2.jpg";
import BlogImage3 from "../../assets/image/B3.jpg";


const BlogSection = () => {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [visiblePosts, setVisiblePosts] = useState(6);

  const blogPosts = [
    {
      id: 1,
      image: BlogImage1,
      title: "The Complete Guide to Digital Marketing in 2024",
      excerpt: "Learn how to create a comprehensive digital marketing strategy that drives results and maximizes ROI.",
      category: "DIGITAL MARKETING",
      date: "March 15, 2024",
      readTime: "8 min read",
      author: "Sarah Johnson",
      authorRole: "Marketing Director"
    },
    {
      id: 2,
      image: BlogImage2,
      title: "Social Media Algorithms: What You Need to Know",
      excerpt: "Understand how social media algorithms work and how to optimize your content for maximum reach and engagement.",
      category: "SOCIAL MEDIA MARKETING",
      date: "March 12, 2024",
      readTime: "6 min read",
      author: "Mike Chen",
      authorRole: "Social Media Expert"
    },
     {
       id: 3,
       image: BlogImage3,
       title: "PPC Optimization Strategies for Higher Conversion",
       excerpt: "Discover advanced PPC techniques to lower your cost per click and increase conversion Implement Smart Bidding with Target CPA/ROAS rates.",
       category: "PPC",
       date: "March 10, 2024",
      readTime: "5 min read",
       author: "Emily Rodriguez",
       authorRole: "PPC Specialist"
     },
  

  ];

  const categories = ["ALL", "DIGITAL MARKETING", "SOCIAL MEDIA MARKETING", "PPC"];

  const filteredPosts = activeCategory === 'ALL'
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);

  const displayedPosts = filteredPosts.slice(0, visiblePosts);

  const loadMore = () => {
    setVisiblePosts(prev => prev + 3);
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'DIGITAL MARKETING':
        return { background: '#dbeafe', color: '#1e40af' };
      case 'SOCIAL MEDIA MARKETING':
        return { background: '#f3e8ff', color: '#7e22ce' };
      case 'PPC':
        return { background: '#dcfce7', color: '#166534' };
      default:
        return { background: '#f3f4f6', color: '#374151' };
    }
  };

  const getAuthorInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('');
  };

  const styles = {
    section: {
      padding: '1rem 0',
      background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #bae6fd 100%)'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1rem'
    },
    header: {
      textAlign: 'center',
      marginBottom: '3rem'
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: '700',
      color: '#111827',
      marginBottom: '1rem'
    },
    subtitle: {
      fontSize: '1.25rem',
      color: '#6b7280',
      maxWidth: '800px',
      margin: '0 auto',
      lineHeight: '1.6'
    },
    filters: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      gap: '1rem',
      marginBottom: '3rem'
    },
    filterButton: {
      padding: '0.75rem 1.5rem',
      borderRadius: '9999px',
      fontWeight: '600',
      fontSize: '0.875rem',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, 350px)', // fixed width for each card
      gap: '2rem',
      justifyContent: 'center', // centers the grid if items don’t fill the row
      marginBottom: '3rem'
    },
    card: {
      backgroundColor: 'white',
      borderRadius: '12px',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      overflow: 'hidden',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    },
    cardHover: {
      transform: 'translateY(-4px)',
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
    },
    cardImage: {
      width: '100%',
      height: '200px',
      position: 'relative',
      overflow: 'hidden'
    },
    blogImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.3s ease'
    },
    imageHover: {
      transform: 'scale(1.05)'
    },
    categoryBadge: {
      position: 'absolute',
      top: '1rem',
      left: '1rem',
      padding: '0.5rem 1rem',
      borderRadius: '9999px',
      fontSize: '0.75rem',
      fontWeight: '600',
      zIndex: 2
    },
    cardContent: {
      padding: '1.5rem'
    },
    meta: {
      display: 'flex',
      alignItems: 'center',
      fontSize: '0.875rem',
      color: '#6b7280',
      marginBottom: '0.75rem'
    },
    cardTitle: {
      fontSize: '1.25rem',
      fontWeight: '700',
      color: '#111827',
      marginBottom: '0.75rem',
      lineHeight: '1.4'
    },
    excerpt: {
      color: '#6b7280',
      lineHeight: '1.6',
      marginBottom: '1.5rem'
    },
    cardFooter: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingTop: '1rem',
      borderTop: '1px solid #f3f4f6'
    },
    author: {
      display: 'flex',
      alignItems: 'center'
    },
    authorAvatar: {
      width: '2.5rem',
      height: '2.5rem',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: '600',
      color: 'white',
      fontSize: '0.875rem'
    },
    authorInfo: {
      marginLeft: '0.75rem'
    },
    authorName: {
      fontSize: '0.875rem',
      fontWeight: '600',
      color: '#111827'
    },
    authorRole: {
      fontSize: '0.75rem',
      color: '#6b7280'
    },
    readMore: {
      color: '#2563eb',
      fontWeight: '600',
      fontSize: '0.875rem',
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    readMoreHover: {
      color: '#1d4ed8',
      transform: 'translateX(4px)'
    },
    loadMore: {
      display: 'block',
      margin: '0 auto',
      padding: '0.75rem 2rem',
      backgroundColor: 'white',
      color: '#2563eb',
      border: '2px solid #2563eb',
      borderRadius: '9999px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    loadMoreHover: {
      backgroundColor: '#2563eb',
      color: 'white',
      transform: 'scale(1.05)'
    },
    newsletter: {
      background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
      borderRadius: '16px',
      padding: '3rem 2rem',
      textAlign: 'center',
      color: 'white',
      marginTop: '4rem'
    },
    newsletterTitle: {
      fontSize: '1.875rem',
      fontWeight: '700',
      marginBottom: '1rem'
    },
    newsletterText: {
      fontSize: '1.125rem',
      opacity: '0.9',
      marginBottom: '2rem',
      maxWidth: '600px',
      margin: '0 auto 2rem'
    },
    newsletterForm: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      maxWidth: '400px',
      margin: '0 auto'
    },
    input: {
      padding: '0.75rem 1rem',
      borderRadius: '8px',
      border: 'none',
      fontSize: '1rem'
    },
    subscribeButton: {
      padding: '0.75rem 2rem',
      backgroundColor: 'white',
      color: '#2563eb',
      border: 'none',
      borderRadius: '8px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    subscribeButtonHover: {
      backgroundColor: '#f3f4f6',
      transform: 'translateY(-2px)'
    }
  };

  const [hoverStates, setHoverStates] = useState({});
  const [readMoreHoverStates, setReadMoreHoverStates] = useState({});
  const [loadMoreHover, setLoadMoreHover] = useState(false);
  const [subscribeHover, setSubscribeHover] = useState(false);

  const handleMouseEnter = (id) => {
    setHoverStates(prev => ({ ...prev, [id]: true }));
  };

  const handleMouseLeave = (id) => {
    setHoverStates(prev => ({ ...prev, [id]: false }));
  };

  const handleReadMoreEnter = (id) => {
    setReadMoreHoverStates(prev => ({ ...prev, [id]: true }));
  };

  const handleReadMoreLeave = (id) => {
    setReadMoreHoverStates(prev => ({ ...prev, [id]: false }));
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        {/* Header */}
        <div style={styles.header}>
          <h2 style={styles.title}>Marketing Insights & Updates</h2>
          <p style={styles.subtitle}>
            Stay ahead of the curve with our latest insights on digital marketing,
            social media strategies, and PPC optimization techniques.
          </p>
        </div>

        {/* Category Filters */}
        <div style={styles.filters}>
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setVisiblePosts(6);
                }}
                style={{
                  ...styles.filterButton,
                  backgroundColor: isActive ? '#2563eb' : 'white',
                  color: isActive ? 'white' : '#374151',
                  boxShadow: isActive
                    ? '0 10px 15px -3px rgba(37, 99, 235, 0.3)'
                    : '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Blog Grid */}
        <div style={styles.grid}>
          {displayedPosts.map((post) => {
            const categoryColor = getCategoryColor(post.category);
            const avatarColor = `hsl(${post.id * 137.5}, 70%, 50%)`;

            return (
              <div
                key={post.id}
                style={{
                  ...styles.card,
                  ...(hoverStates[post.id] ? styles.cardHover : {})
                }}
                onMouseEnter={() => handleMouseEnter(post.id)}
                onMouseLeave={() => handleMouseLeave(post.id)}
              >
                <div style={styles.cardImage}>
                  <img
                    src={post.image}
                    alt={post.title}
                    style={{
                      ...styles.blogImage,
                      ...(hoverStates[post.id] ? styles.imageHover : {})
                    }}
                  />
                  <div
                    style={{
                      ...styles.categoryBadge,
                      ...categoryColor
                    }}
                  >
                    {post.category}
                  </div>
                </div>

                <div style={styles.cardContent}>
                  <div style={styles.meta}>
                    <span>{post.date}</span>
                    <span style={{ margin: '0 0.5rem' }}>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 style={styles.cardTitle}>{post.title}</h3>
                  <p style={styles.excerpt}>{post.excerpt}</p>

                  <div style={styles.cardFooter}>
                    <div style={styles.author}>
                      <div
                        style={{
                          ...styles.authorAvatar,
                          backgroundColor: avatarColor
                        }}
                      >
                        {getAuthorInitials(post.author)}
                      </div>
                      <div style={styles.authorInfo}>
                        <div style={styles.authorName}>{post.author}</div>
                        <div style={styles.authorRole}>{post.authorRole}</div>
                      </div>
                    </div>

                    <button
                      style={{
                        ...styles.readMore,
                        ...(readMoreHoverStates[post.id] ? styles.readMoreHover : {})
                      }}
                      onMouseEnter={() => handleReadMoreEnter(post.id)}
                      onMouseLeave={() => handleReadMoreLeave(post.id)}
                    >
                      Read More →
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Load More Button */}
        {visiblePosts < filteredPosts.length && (
          <button
            style={{
              ...styles.loadMore,
              ...(loadMoreHover ? styles.loadMoreHover : {})
            }}
            onClick={loadMore}
            onMouseEnter={() => setLoadMoreHover(true)}
            onMouseLeave={() => setLoadMoreHover(false)}
          >
            Load More Articles
          </button>
        )}

        {/* Newsletter CTA */}
        {/* <div style={styles.newsletter}>
          <h3 style={styles.newsletterTitle}>
            Never Miss a Marketing Update
          </h3>
          <p style={styles.newsletterText}>
            Join thousands of marketers who receive our weekly insights and strategies 
            directly in their inbox.
          </p>
          <div style={styles.newsletterForm}>
            <input
              type="email"
              placeholder="Enter your email"
              style={styles.input}
            />
            <button
              style={{
                ...styles.subscribeButton,
                ...(subscribeHover ? styles.subscribeButtonHover : {})
              }}
              onMouseEnter={() => setSubscribeHover(true)}
              onMouseLeave={() => setSubscribeHover(false)}
            >
              Subscribe Now
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default BlogSection;