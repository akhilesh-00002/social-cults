import React from "react";
import {
  FaCogs,
  FaMobileAlt,
  FaBullhorn,
  FaGlobe,
  FaUsers,
  FaChartLine,
  FaSearch,
  FaAd,
  FaPalette,
  FaInfoCircle,
  FaCalendar,
  FaCheck
} from "react-icons/fa";

const DigitalServices = () => {
  const services = [
    {
      icon: <FaCogs />,
      title: "CRM / LMS / ERP Development",
      description:
        "Custom-built software solutions that streamline business operations and enhance productivity.",
      points: [
        "Custom ERP integration",
        "CRM dashboards & analytics",
        "LMS platform development",
        "Workflow automation",
      ],
    },
    {
      icon: <FaBullhorn />,
      title: "Social Media Marketing",
      description:
        "Boost your online presence and engage your audience across all social platforms.",
      points: [
        "Facebook & Instagram campaigns",
        "Influencer collaboration",
        "Creative content strategy",
        "Social growth tracking",
      ],
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile App Development",
      description:
        "Building user-friendly and high-performing mobile apps for Android and iOS platforms.",
      points: [
        "Native & hybrid apps",
        "UI/UX mobile design",
        "App deployment & maintenance",
        "Performance optimization",
      ],
    },
    {
      icon: <FaUsers />,
      title: "ORM & PR Management",
      description:
        "Protect and improve your brand reputation with online reputation and PR strategies.",
      points: [
        "Crisis management",
        "Review monitoring",
        "Brand reputation campaigns",
        "Public communication planning",
      ],
    },
    {
      icon: <FaPalette />,
      title: "Branding Services",
      description:
        "Crafting powerful brand identities that connect emotionally with your audience.",
      points: [
        "Logo & visual design",
        "Brand strategy planning",
        "Market positioning",
        "Packaging design",
      ],
    },
    {
      icon: <FaGlobe />,
      title: "Web Development",
      description:
        "Professional website design and development focused on performance and conversion.",
      points: [
        "Custom business websites",
        "E-commerce solutions",
        "CMS development",
        "Responsive layouts",
      ],
    },
    {
      icon: <FaChartLine />,
      title: "Conversion Rate Optimization",
      description:
        "Data-driven strategies to increase website conversions and maximize ROI.",
      points: [
        "A/B testing & experimentation",
        "User experience optimization",
        "Funnel analysis",
        "Landing page optimization",
      ],
    },
    {
      icon: <FaSearch />,
      title: "SEO Services",
      description:
        "Improve search engine rankings and drive qualified organic traffic to your website.",
      points: [
        "Technical SEO audit",
        "Keyword research & strategy",
        "Content optimization",
        "Link building",
      ],
    },
    {
      icon: <FaAd />,
      title: "PPC Advertising",
      description:
        "Strategic paid advertising campaigns that deliver measurable results and maximize ROI.",
      points: [
        "Google Ads management",
        "Social media advertising",
        "Remarketing campaigns",
        "Performance tracking",
      ],
    }
  ];

  return (
    <section className="digiserv-section">
      <h2 className="digiserv-title">Our Professional Services</h2>
    
      <div className="digiserv-grid">
        {services.map((service, index) => (
          <div className="digiserv-card" key={index}>
            <div className="digiserv-icon-wrapper">{service.icon}</div>
            <h3 className="digiserv-card-title">{service.title}</h3>
            <p className="digiserv-description">{service.description}</p>
            <ul className="digiserv-features">
              {service.points.map((point, i) => (
                <li key={i} className="digiserv-feature-item">
                  <FaCheck className="digiserv-check-icon" />
                  {point}
                </li>
              ))}
            </ul>
            <div className="digiserv-buttons">
              <button className="digiserv-btn-primary">
                <FaInfoCircle className="digiserv-btn-icon" />
                Learn More
              </button>
              <button className="digiserv-btn-outline">
                <FaCalendar className="digiserv-btn-icon" />
                Consult
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DigitalServices;