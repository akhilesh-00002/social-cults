import React from "react";

import user1 from "../../assets/image/1.png";
import user2 from "../../assets/image/2.png";
import user3 from "../../assets/image/3.png";
import user4 from "../../assets/image/4.png";
import user5 from "../../assets/image/5.png";
import user6 from "../../assets/image/6.png";

const Clients = () => {
  const clients = [
    { id: 1, logo: user1, name: "Google Partner", url: "#0" },
    { id: 2, logo: user2, name: "Meta Business", url: "#0" },
    { id: 3, logo: user3, name: "HubSpot Certified", url: "#0" },
    { id: 4, logo: user4, name: "Google Analytics", url: "#0" },
    { id: 5, logo: user5, name: "Microsoft Ads", url: "#0" },
    { id: 6, logo: user6, name: "Amazon AWS", url: "#0" },
  ];

  // Duplicate for seamless animation
  const duplicatedClients = [...clients, ...clients, ...clients, ...clients];

  return (
    <section className="clients-section">
      {/* Full-width header */}
      <div className="clients-header">
        <div className="header-content">
          <div className="section-badge">
            <span>Partners & Certification</span>
          </div>
          <h2 className="section-title">
            Trusted by{" "}
            <span className="blue-gradient">Industry Leaders</span>
          </h2>
          <p className="clients-subtitle">
            Partnered with world-class platforms and certified by industry standards
            for excellence in digital innovation.
          </p>
        </div>
      </div>

      {/* Scrolling Logos */}
      <div className="clients-scroll-container">
        <div className="clients-scroll-track">
          {duplicatedClients.map((client, index) => (
            <div key={`${client.id}-${index}`} className="client-card">
              <a href={client.url} className="client-link">
                <div className="client-logo-wrapper">
                  <img
                    src={client.logo}
                    alt={`${client.name} - Partner Logo`}
                    className="client-logo"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  <div className="logo-fallback">
                    {client.name
                      .split(" ")
                      .map((word) => word[0])
                      .join("")}
                  </div>
                </div>
                <div className="client-info">
                  <span className="client-name">{client.name}</span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
