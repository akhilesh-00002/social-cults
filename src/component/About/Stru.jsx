import React, { useState, useEffect, useRef } from 'react';

import tem1 from './../../assets/image/stt.jpg'
import tem2 from './../../assets/image/cszx.png'
import tem3 from './../../assets/image/scs.png'

// Use one of the existing images for the hero section
const team1 = tem1; // or use tem2/tem3 depending on which image you want for the hero

// SVG Icons Component
const SVGIcon = ({ name, className = "" }) => {
  const icons = {
    sparkle: (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.8 12.3c.2-.4.8-.4 1 0l1.7 2.9c.2.4 0 .8-.4.9l-3.3 1.2c-.2.1-.2.3 0 .4l3.3 1.2c.4.1.6.6.4.9l-1.7 2.9c-.2.4-.8.4-1 0l-1.7-2.9c-.2-.4 0-.8.4-.9l3.3-1.2c.2-.1.2-.3 0-.4l-3.3-1.2c-.4-.1-.6-.6-.4-.9l1.7-2.9z"/>
        <path d="M11.8 2.3c.2-.4.8-.4 1 0l1.7 2.9c.2.4 0 .8-.4.9l-3.3 1.2c-.2.1-.2.3 0 .4l3.3 1.2c.4.1.6.6.4.9l-1.7 2.9c-.2.4-.8.4-1 0l-1.7-2.9c-.2-.4 0-.8.4-.9l3.3-1.2c.2-.1.2-.3 0-.4l-3.3-1.2c-.4-.1-.6-.6-.4-.9l1.7-2.9z"/>
        <path d="M3.8 12.3c.2-.4.8-.4 1 0l1.7 2.9c.2.4 0 .8-.4.9l-3.3 1.2c-.2.1-.2.3 0 .4l3.3 1.2c.4.1.6.6.4.9l-1.7 2.9c-.2.4-.8.4-1 0l-1.7-2.9c-.2-.4 0-.8.4-.9l3.3-1.2c.2-.1.2-.3 0-.4l-3.3-1.2c-.4-.1-.6-.6-.4-.9l1.7-2.9z"/>
      </svg>
    ),
    rocket: (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M9.19 6.35c-2.04 2.29-3.44 5.58-3.57 5.89L2 10.69l4.05-4.05c.47-.47 1.15-.68 1.81-.55l1.33.26zM11.17 17s3.74-1.55 5.89-3.7c5.4-5.4 4.5-9.62 4.21-10.57-.95-.3-5.17-1.19-10.57 4.21C8.55 9.09 7 12.83 7 12.83L11.17 17zm6.48-2.19c-2.29 2.04-5.58 3.44-5.89 3.57L13.31 22l4.05-4.05c.47-.47.68-1.15.55-1.81l-.26-1.33zM9 18c0 .83-.34 1.58-.88 2.12C6.94 21.3 2 22 2 22s.7-4.94 1.88-6.12C4.42 15.34 5.17 15 6 15c1.66 0 3 1.34 3 3zm4-9c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z"/>
      </svg>
    ),
    phone: (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM12 3v10l3-3h6V3h-9z"/>
      </svg>
    ),
    calendar: (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
      </svg>
    ),
    location: (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
      </svg>
    ),
    ticket: (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 12c0-1.1.9-2 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2zm-4.42 4.8L12 14.5l-3.58 2.3 1.08-4.12-3.29-2.69 4.24-.25L12 5.8l1.54 3.95 4.24.25-3.29 2.69 1.09 4.11z"/>
      </svg>
    ),
    clipboard: (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
      </svg>
    ),
    users: (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A2.01 2.01 0 0 0 18.06 7h-.12a2 2 0 0 0-1.9 1.37l-.86 2.58c1.08.6 1.82 1.73 1.82 3.05v8h3zm-7.5-10.5c.28 0 .5.22.5.5s-.22.5-.5.5-.5-.22-.5-.5.22-.5.5-.5zM9 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm0 1c-2.33 0-7 1.17-7 3.5V19h14v-3.5c0-2.33-4.67-3.5-7-3.5z"/>
      </svg>
    ),
    message: (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
      </svg>
    ),
    check: (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
      </svg>
    ),
    star: (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
      </svg>
    ),
    trophy: (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2c-.55 0-1 .45-1 1v1h-4V3c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1v1H4c-1.1 0-2 .9-2 2v2c0 1.38 1.12 2.5 2.5 2.5S7 9.38 7 8V6h2v6.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V6h2v6.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V6h2v2c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-1.1-.9-2-2-2zm-2 12h-4v1c0 1.1.9 2 2 2s2-.9 2-2v-1z"/>
      </svg>
    ),
    chart: (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 11.78l4.24-7.33 1.73 1-5.23 9.05-6.51-3.75L5.46 19H22v2H2V3h2v14.54L9.5 8l6.5 3.78z"/>
      </svg>
    ),
    globe: (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
      </svg>
    ),
    briefcase: (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
      </svg>
    ),
    clock: (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
      </svg>
    ),
    smile: (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
      </svg>
    ),
    search: (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
      </svg>
    ),
    social: (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
      </svg>
    ),
    ads: (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
      </svg>
    ),
    content: (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
      </svg>
    ),
    linkedin: (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
      </svg>
    ),
    twitter: (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
      </svg>
    ),
    instagram: (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
      </svg>
    ),
    website: (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"/>
      </svg>
    ),
    camera: (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 15.2C13.767 15.2 15.2 13.767 15.2 12 15.2 10.233 13.767 8.8 12 8.8 10.233 8.8 8.8 10.233 8.8 12 8.8 13.767 10.233 15.2 12 15.2zM20 4h-3.17l-1.24-1.35A1.99 1.99 0 0 0 14.12 2H9.88c-.56 0-1.1.24-1.48.65L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 13c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
      </svg>
    )
  };

  return icons[name] || null;
};

export const AboutEvents = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleEvents, setVisibleEvents] = useState([]);
  const [visibleTeam, setVisibleTeam] = useState([]);
  const [activeService, setActiveService] = useState(0);
  const [stats, setStats] = useState([
    { number: 0, target: 15, suffix: '+', label: 'Years Experience', icon: 'clock' },
    { number: 0, target: 500, suffix: '+', label: 'Happy Clients', icon: 'smile' },
    { number: 0, target: 100, suffix: '%', label: 'Satisfaction Rate', icon: 'star' },
    { number: 0, target: 50, suffix: '+', label: 'Experts Team', icon: 'users' }
  ]);

  const aboutRef = useRef(null);
  const eventsRef = useRef(null);
  const teamRef = useRef(null);

  // Services data
  const services = [
    {
      id: 1,
      icon: 'rocket',
      title: 'SEO Optimization',
      description: 'Boost your search rankings with data-driven strategies',
      features: ['Keyword Research', 'Technical SEO', 'Content Optimization']
    },
    {
      id: 2,
      icon: 'social',
      title: 'Social Media Marketing',
      description: 'Engage your audience across all platforms',
      features: ['Content Strategy', 'Community Management', 'Performance Analytics']
    },
    {
      id: 3,
      icon: 'ads',
      title: 'PPC Advertising',
      description: 'Maximize your ROI with targeted campaigns',
      features: ['Google Ads', 'Social Media Ads', 'Conversion Tracking']
    },
    {
      id: 4,
      icon: 'content',
      title: 'Content Marketing',
      description: 'Tell your brand story effectively',
      features: ['Content Creation', 'Blog Management', 'Email Marketing']
    }
  ];

  // Scroll animations
  useEffect(() => {
    const observers = [];

    const aboutObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          animateStats();
        }
      },
      { threshold: 0.3 }
    );

    const eventsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const eventId = parseInt(entry.target.dataset.eventId);
            setVisibleEvents(prev => [...new Set([...prev, eventId])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const teamObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const memberId = parseInt(entry.target.dataset.memberId);
            setVisibleTeam(prev => [...new Set([...prev, memberId])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) aboutObserver.observe(aboutRef.current);
    
    const timer = setTimeout(() => {
      const eventElements = document.querySelectorAll('[data-event-id]');
      const teamElements = document.querySelectorAll('[data-member-id]');
      
      eventElements.forEach(element => eventsObserver.observe(element));
      teamElements.forEach(element => teamObserver.observe(element));
    }, 100);

    observers.push(aboutObserver, eventsObserver, teamObserver);

    return () => {
      observers.forEach(observer => observer.disconnect());
      clearTimeout(timer);
    };
  }, []);

  const animateStats = () => {
    stats.forEach((stat, index) => {
      const duration = 2000;
      const steps = 60;
      const stepValue = stat.target / steps;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        const newNumber = Math.min(Math.floor(stepValue * currentStep), stat.target);
        
        setStats(prev => prev.map((s, i) => 
          i === index ? { ...s, number: newNumber } : s
        ));

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, duration / steps);
    });
  };

  // Data
  const events = [
    {
      id: 1,
      date: "22",
      month: "NOV",
      time: "8:00 AM - 5:00 PM",
      duration: "Full Day Event",
      title: "Digital Marketing Summit 2024",
      location: "Convention Center, London",
      description: "Join industry leaders for insights on AI-driven marketing, social media trends, and data analytics. Network with 500+ professionals.",
      type: "marketing",
      attendees: "500+",
      price: "Free"
    },
    {
      id: 2,
      date: "24",
      month: "NOV",
      time: "9:00 AM - 6:00 PM",
      duration: "Full Day Event",
      title: "Web Analytics & SEO Conference",
      location: "Tech Park, Lisbon",
      description: "Master Google Analytics 4, advanced SEO techniques, and conversion optimization strategies from top experts.",
      type: "analytics",
      attendees: "300+",
      price: "$199"
    },
    {
      id: 3,
      date: "27",
      month: "NOV",
      time: "10:00 AM - 5:00 PM",
      duration: "Full Day Event",
      title: "Social Media Innovation Workshop",
      location: "Innovation Hub, London",
      description: "Hands-on workshop covering TikTok strategies, Instagram Reels, and emerging social media platforms.",
      type: "social",
      attendees: "150+",
      price: "$149"
    }
  ];

  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "SEO Director",
      image: tem1,
      description: "8+ years in search engine optimization. Helped 200+ businesses achieve top Google rankings and increase organic traffic by 300%.",
      social: {
        linkedin: "#",
        twitter: "#",
        website: "#"
      },
      expertise: ["Technical SEO", "Content Strategy", "Analytics"]
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "PPC Specialist",
      image: tem2,
      description: "Google Ads certified expert with 6+ years experience. Generated over $50M in revenue for e-commerce and SaaS clients.",
      social: {
        linkedin: "#",
        twitter: "#",
        website: "#"
      },
      expertise: ["Google Ads", "Facebook Ads", "ROI Optimization"]
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Social Media Strategist",
      image: tem3,
      description: "Creative social media expert with 7+ years experience. Grew brand engagement by 400% for Fortune 500 companies.",
      social: {
        linkedin: "#",
        instagram: "#",
        website: "#"
      },
      expertise: ["Content Creation", "Community Management", "Influencer Marketing"]
    }
  ];

  return (
    <>
      {/* Hero Section with Image */}
      <section className="about-events-hero-section" ref={aboutRef}>
        <div className="about-events-container">
          <div className="about-events-hero-content">
            {/* Text Content */}
            <div className="about-events-hero-text">
              <div className="about-events-hero-badge">
                <SVGIcon name="sparkle" className="about-events-hero-badge-icon" />
                Award-Winning Digital Agency
              </div>
              
              <h1 className="about-events-hero-title">
                Transform Your Brand with 
                <span className="about-events-hero-gradient"> Digital Excellence</span>
              </h1>
              
              <p className="about-events-hero-description">
                Social Cults is your premier digital marketing partner with <strong>15+ years of expertise</strong> 
                in driving measurable results for global brands. We combine data-driven strategies with 
                creative innovation to elevate your digital presence.
              </p>

              {/* Quick Stats */}
              <div className="about-events-hero-stats">
                <div className="about-events-hero-stat">
                  <div className="about-events-hero-stat-number">500+</div>
                  <div className="about-events-hero-stat-label">Happy Clients</div>
                </div>
                <div className="about-events-hero-stat">
                  <div className="about-events-hero-stat-number">300%</div>
                  <div className="about-events-hero-stat-label">Average ROI</div>
                </div>
                <div className="about-events-hero-stat">
                  <div className="about-events-hero-stat-number">15+</div>
                  <div className="about-events-hero-stat-label">Years Experience</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="about-events-hero-actions">
                <button className="about-events-hero-btn about-events-hero-primary">
                  <SVGIcon name="rocket" className="about-events-hero-btn-icon" />
                  Start Your Project
                </button>
                <button className="about-events-hero-btn about-events-hero-secondary">
                  <SVGIcon name="phone" className="about-events-hero-btn-icon" />
                  Book Free Consultation
                </button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="about-events-hero-image">
              <div className="about-events-hero-image-container">
                <div className="about-events-hero-main-image">
                  <img 
                    src={team1} 
                    alt="Professional digital marketing team collaborating in modern office" 
                    className="about-events-hero-img"
                  />
                  
                  {/* Floating Elements */}
                  <div className="about-events-hero-floating about-events-floating-1">
                    <div className="about-events-floating-content">
                      <SVGIcon name="star" className="about-events-floating-icon" />
                      <div className="about-events-floating-text">
                        <span className="about-events-floating-number">4.9/5</span>
                        <span className="about-events-floating-label">Client Rating</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="about-events-hero-floating about-events-floating-2">
                    <div className="about-events-floating-content">
                      <SVGIcon name="trophy" className="about-events-floating-icon" />
                      <div className="about-events-floating-text">
                        <span className="about-events-floating-number">50+</span>
                        <span className="about-events-floating-label">Awards</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="about-events-hero-floating about-events-floating-3">
                    <div className="about-events-floating-content">
                      <SVGIcon name="globe" className="about-events-floating-icon" />
                      <div className="about-events-floating-text">
                        <span className="about-events-floating-number">25+</span>
                        <span className="about-events-floating-label">Countries</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Background Decoration */}
                <div className="about-events-hero-image-bg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of your component remains the same... */}
      {/* About Section */}
      <section className="about-events-about-section" id="about-events-about" aria-labelledby="about-events-about-title">
        <div className="about-events-container">
          <div className="about-events-section-header">
            <span className="about-events-section-badge">
              <SVGIcon name="briefcase" className="about-events-section-icon" />
              Why Choose Social Cults
            </span>
            <h1 id="about-events-about-title" className="about-events-section-title">Your Digital Success Partner</h1>
            <p className="about-events-section-subtitle">
              We don't just create campaigns - we build digital legacies that drive sustainable growth and measurable results.
            </p>
          </div>
          
          <div className="about-events-about-content">
            {/* Services Grid */}
            <div className="about-events-services-section">
              <h2 className="about-events-services-main-title">Our Core Expertise</h2>
              <div className="about-events-services-grid">
                {services.map((service, index) => (
                  <div
                    key={service.id}
                    className={`about-events-service-card ${activeService === index ? 'about-events-service-active' : ''}`}
                    onMouseEnter={() => setActiveService(index)}
                    onFocus={() => setActiveService(index)}
                    tabIndex={0}
                  >
                    <div className="about-events-service-card-header">
                      <div className="about-events-service-icon-wrapper">
                        <SVGIcon name={service.icon} className="about-events-service-icon" />
                      </div>
                      <h3 className="about-events-service-title">{service.title}</h3>
                    </div>
                    <p className="about-events-service-description">{service.description}</p>
                    <div className="about-events-service-features">
                      {service.features.map((feature, featureIndex) => (
                        <span key={featureIndex} className="about-events-service-feature">
                          {feature}
                        </span>
                      ))}
                    </div>
                    <div className="about-events-service-arrow">→</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Section */}
            <div className="about-events-stats-section">
              <div className="about-events-stats-grid">
                {stats.map((stat, index) => (
                  <div key={index} className="about-events-stat-card">
                    <SVGIcon name={stat.icon} className="about-events-stat-icon" />
                    <div className="about-events-stat-content">
                      <div className="about-events-stat-number">
                        {stat.number}{stat.suffix}
                      </div>
                      <div className="about-events-stat-label">{stat.label}</div>
                    </div>
                    <div className="about-events-stat-glow" aria-hidden="true"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievement Highlights */}
            <div className="about-events-achievements-section">
              <h2 className="about-events-achievements-title">Our Achievements</h2>
              <div className="about-events-achievements-grid">
                <div className="about-events-achievement-card">
                  <SVGIcon name="trophy" className="about-events-achievement-icon" />
                  <div className="about-events-achievement-content">
                    <h3>Google Premier Partner</h3>
                    <p>Certified excellence in digital marketing and advertising</p>
                  </div>
                </div>
                <div className="about-events-achievement-card">
                  <SVGIcon name="chart" className="about-events-achievement-icon" />
                  <div className="about-events-achievement-content">
                    <h3>300% Average ROI</h3>
                    <p>Consistent results across all digital campaigns</p>
                  </div>
                </div>
                <div className="about-events-achievement-card">
                  <SVGIcon name="star" className="about-events-achievement-icon" />
                  <div className="about-events-achievement-content">
                    <h3>4.9/5 Client Rating</h3>
                    <p>Exceptional service delivery and client satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="about-events-events-section" id="about-events-events" ref={eventsRef} aria-labelledby="about-events-events-title">
        <div className="about-events-container">
          <div className="about-events-section-header">
            <span className="about-events-section-badge">
              <SVGIcon name="calendar" className="about-events-section-icon" />
              Upcoming Events
            </span>
            <h1 id="about-events-events-title" className="about-events-section-title">Digital Marketing Events</h1>
            <p className="about-events-section-subtitle">Join us to learn, network, and grow with industry experts</p>
          </div>
          
          <div className="about-events-events-grid">
            {events.map((event, index) => (
              <article 
                key={event.id}
                className={`about-events-event-card about-events-event-${event.type} ${visibleEvents.includes(event.id) ? 'about-events-visible' : ''}`}
                data-event-id={event.id}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="about-events-event-content">
                  <div className="about-events-event-header">
                    <div className="about-events-event-date">
                      <div className="about-events-date-badge">
                        <time className="about-events-date-number" dateTime={`2024-11-${event.date}`}>
                          {event.date}
                        </time>
                        <span className="about-events-date-month">{event.month}</span>
                      </div>
                      <div className="about-events-date-info">
                        <span className="about-events-date-time">{event.time}</span>
                        <span className="about-events-date-duration">{event.duration}</span>
                      </div>
                    </div>
                    <div className="about-events-event-meta">
                      <span className="about-events-event-price">{event.price}</span>
                      <span className="about-events-event-attendees">{event.attendees} Attendees</span>
                    </div>
                  </div>
                  
                  <div className="about-events-event-body">
                    <h3 className="about-events-event-title">{event.title}</h3>
                    <p className="about-events-event-location">
                      <SVGIcon name="location" className="about-events-location-icon" />
                      {event.location}
                    </p>
                    <p className="about-events-event-description">{event.description}</p>
                    
                    <div className="about-events-event-features">
                      <span className="about-events-feature-tag">Networking</span>
                      <span className="about-events-feature-tag">Workshops</span>
                      <span className="about-events-feature-tag">Certification</span>
                    </div>
                  </div>
                  
                  <div className="about-events-event-actions">
                    <button className="about-events-event-btn about-events-primary-btn">
                      <SVGIcon name="ticket" className="about-events-btn-icon" />
                      Register Now
                    </button>
                    <button className="about-events-event-btn about-events-secondary-btn">
                      <SVGIcon name="clipboard" className="about-events-btn-icon" />
                      View Agenda
                    </button>
                  </div>
                </div>
                
                <div className="about-events-event-glow" aria-hidden="true"></div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* Team Section */}
      <section className="about-events-team-section" id="about-events-team" ref={teamRef} aria-labelledby="about-events-team-title">
        <div className="about-events-container">
          <div className="about-events-section-header">
            <span className="about-events-section-badge">
              <SVGIcon name="users" className="about-events-section-icon" />
              Meet Our Experts
            </span>
            <h1 id="about-events-team-title" className="about-events-section-title">Our Marketing Team</h1>
            <p className="about-events-section-subtitle">Dedicated professionals driving your digital success</p>
          </div>
          
          <div className="about-events-team-grid">
            {teamMembers.map((member, index) => (
              <article 
                key={member.id}
                className={`about-events-team-card ${visibleTeam.includes(member.id) ? 'about-events-visible' : ''}`}
                data-member-id={member.id}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="about-events-team-content">
                  <div className="about-events-team-image-wrapper">
                    <div className="about-events-team-image-frame">
                      <img 
                        src={member.image} 
                        alt={`Portrait of ${member.name}, ${member.position}`} 
                        className="about-events-team-image"
                      />
                      <div className="about-events-team-image-overlay">
                        <div className="about-events-social-links">
                          <a href={member.social.linkedin} className="about-events-social-link" aria-label={`Visit ${member.name}'s LinkedIn`}>
                            <SVGIcon name="linkedin" className="about-events-social-icon" />
                          </a>
                          {member.social.twitter && (
                            <a href={member.social.twitter} className="about-events-social-link" aria-label={`Visit ${member.name}'s Twitter`}>
                              <SVGIcon name="twitter" className="about-events-social-icon" />
                            </a>
                          )}
                          {member.social.instagram && (
                            <a href={member.social.instagram} className="about-events-social-link" aria-label={`Visit ${member.name}'s Instagram`}>
                              <SVGIcon name="instagram" className="about-events-social-icon" />
                            </a>
                          )}
                          <a href={member.social.website} className="about-events-social-link" aria-label={`Visit ${member.name}'s Website`}>
                            <SVGIcon name="website" className="about-events-social-icon" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="about-events-team-info">
                    <h3 className="about-events-member-name">{member.name}</h3>
                    <p className="about-events-member-position">{member.position}</p>
                    <p className="about-events-member-description">{member.description}</p>
                    
                    <div className="about-events-member-expertise">
                      <h4>Areas of Expertise:</h4>
                      <div className="about-events-expertise-tags">
                        {member.expertise.map((skill, skillIndex) => (
                          <span key={skillIndex} className="about-events-expertise-tag">{skill}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="about-events-team-glow" aria-hidden="true"></div>
              </article>
            ))}
          </div>

         
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="about-events-cta-section" id="about-events-cta" aria-labelledby="about-events-cta-title">
        <div className="about-events-container">
          <div className="about-events-cta-content">
            <div className="about-events-cta-text">
              <h2 id="about-events-cta-title" className="about-events-cta-title">Start Your Digital Transformation Today</h2>
              <p className="about-events-cta-description">
                Join 500+ successful brands that trust Social Cults for their digital marketing success. 
                Let's create a customized strategy that drives real results for your business.
              </p>
              
              <div className="about-events-cta-features">
                <div className="about-events-cta-feature">
                  <SVGIcon name="check" className="about-events-feature-icon" />
                  <span>Free Strategy Session</span>
                </div>
                <div className="about-events-cta-feature">
                  <SVGIcon name="check" className="about-events-feature-icon" />
                  <span>No Long-term Contracts</span>
                </div>
                <div className="about-events-cta-feature">
                  <SVGIcon name="check" className="about-events-feature-icon" />
                  <span>30-Day Results Guarantee</span>
                </div>
              </div>
            </div>
            
            <div className="about-events-cta-actions">
              <button className="about-events-cta-button about-events-primary-cta">
                <SVGIcon name="rocket" className="about-events-cta-icon" />
                Get Started Now
                <span className="about-events-cta-arrow">→</span>
              </button>
              <button className="about-events-cta-button about-events-secondary-cta">
                <SVGIcon name="phone" className="about-events-cta-icon" />
                Schedule Call
              </button>
            </div>
          </div>
          
          <div className="about-events-cta-background">
            <div className="about-events-cta-particle about-events-particle-1" aria-hidden="true"></div>
            <div className="about-events-cta-particle about-events-particle-2" aria-hidden="true"></div>
            <div className="about-events-cta-particle about-events-particle-3" aria-hidden="true"></div>
            <div className="about-events-cta-particle about-events-particle-4" aria-hidden="true"></div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default AboutEvents;