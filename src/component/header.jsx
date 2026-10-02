import React, { useState, useEffect } from 'react';
import Logo from '../assets/image/logo.png';
import GetQuery from './../component/GetQuote/GetQuote'




export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const services = [
        'Social Media Marketing',
        'SEO Services',
        'PPC Advertising',
        'Website Development',
        'Mobile App Development',
        'Branding',
        'ORM',
        'CRO',
        'CRM/LMS/ERP'
    ];

    return (
        <>
            {/* Compact Top Header */}
            <div id="topHeaderBar" className="top-header-bar">
                <div id="topHeaderContainer" className="top-header-container">
                    <div id="topHeaderWrapper" className="top-header-wrapper">
                        {/* Contact Info - Left */}
                        <div id="topContactInfo" className="top-contact-info">
                            <a id="topEmailLink" href="mailto:info@socialcults.com" className="top-contact-link">
                        
                           
                            </a>
                            <a id="topPhoneLink" href="tel:+ +919129939996" className="top-contact-link">
                                <PhoneIcon />
                                +919129939996
                            </a>
                        </div>

                        {/* Social Media - Right */}
                        <div id="topSocialLinks" className="top-social-links">
                            <span id="followText" className="top-follow-text"></span>
                            <div id="socialIconsContainer" className="top-social-icons">
                                <a id="facebookLink" href="#" aria-label="Facebook"><FacebookIcon /></a>
                                <a id="instagramLink" href="#" aria-label="Instagram"><InstagramIcon /></a>
                                <a id="linkedinLink" href="#" aria-label="LinkedIn"><LinkedInIcon /></a>
                                <a id="YouTubeLink" href="#" aria-label="YouTube"><YouTubeIcon /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <header id="mainHeader" className={`main-header ${isScrolled ? 'scrolled' : ''}`}>
                <div id="headerContainer" className="container">
                    {/* Logo */}
                    <a id="logoLink" href="/" className="logo">
                        <img src={Logo} alt="Social Cults" />
                    </a>


                    {/* Mobile Menu Button */}
                    <button
                        id="mobileMenuToggle"
                        className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle navigation"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    {/* Navigation */}
                    <nav id="mainNavigation" className={`nav ${isMenuOpen ? 'active' : ''}`}>
                        <a id="navHome" href="/" onClick={() => setIsMenuOpen(false)}>Home</a>
                        <a id="navAbout" href="/about" onClick={() => setIsMenuOpen(false)}>About</a>

                        <div id="servicesDropdown" className="dropdown">
                            <a id="servicesLink" href="/services" className="dropdown-btn">
                                Services <ChevronIcon />
                            </a>
                            <div id="servicesMenu" className="dropdown-menu">
                                {services.map((service, index) => (
                                    <a
                                        key={index}
                                        id={`service-${service.toLowerCase().replace(/\s+/g, '-')}`}
                                        href={`/${service.toLowerCase().replace(/\s+/g, '-')}`}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {service}
                                    </a>
                                ))}
                            </div>
                        </div>

                        <a id="navProjects" href="/projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
                        <a id="navBlog" href="/blog" onClick={() => setIsMenuOpen(false)}>Blog</a>
                        <a id="navCareer" href="/career" onClick={() => setIsMenuOpen(false)}>Career</a>
                        <a id="navContact" href="/contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
                    </nav>

                    <div className="md-hide">
                        <GetQuery />
                    </div>






                   
                   
                </div>
            </header>
        </>
    );
};


// Compact SVG Icons
const EmailIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
);

const PhoneIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z" />
    </svg>
);

const FacebookIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
);

const InstagramIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 110 12.324 6.162 6.162 0 010-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 110 2.881 1.44 1.44 0 010-2.881z" />
    </svg>
);

const LinkedInIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
);

const YouTubeIcon = ({ color = "currentColor", size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
    </svg>
);

const ChevronIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M7.41 8.84L12 13.42l4.59-4.58L18 10.25l-6 6-6-6z" />
    </svg>
);

export default Header;