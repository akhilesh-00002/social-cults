import React, { useState, useEffect } from 'react';

// SVG Icons Components
const ApplePlatformIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
);

const AndroidPlatformIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85-.3-.15-.68-.04-.84.26L16.5 8.7C14.44 7.77 12.24 7.24 10 7.24s-4.44.53-6.5 1.46L1.66 5.71c-.16-.3-.54-.41-.84-.26-.3.16-.42.54-.26.85L2.4 9.48C1.63 10.14 1 10.91.5 11.76v.24c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-.24c.24-.43.53-.83.87-1.2.46.28.94.53 1.44.76-.14.41-.21.85-.21 1.31 0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5c0-.46-.07-.9-.21-1.31.5-.23.98-.48 1.44-.76.34.37.63.77.87 1.2v.24c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-.24c-.5-.85-1.13-1.62-1.9-2.28zM8 13.24c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm8 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
  </svg>
);

const CrossPlatformIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
  </svg>
);

const CheckCircleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
  </svg>
);

const CodeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
  </svg>
);

const RocketIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.5s4.5 2.04 4.5 10.5c0 2.49-1.04 5.57-1.6 7H9.1c-.56-1.43-1.6-4.51-1.6-7C7.5 4.54 12 2.5 12 2.5zm2 8.5c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-6.31 9.52c-.48-1.23-1.52-4.17-1.67-6.87l-1.13.75c-.56.38-.89 1-.89 1.67V22l3.69-1.48zM20 22v-5.93c0-.67-.33-1.29-.89-1.66l-1.13-.75c-.15 2.69-1.2 5.64-1.67 6.87L20 22z"/>
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
  </svg>
);

const CaseStudyIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
  </svg>
);

const DownloadIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
  </svg>
);

const ClockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
  </svg>
);

const DocumentIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
  </svg>
);

const CalendarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
  </svg>
);

const LayersIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z"/>
  </svg>
);

const TrophyIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C13.1 2 14 2.9 14 4v.29c2.89.86 5 3.54 5 6.71v1.33c0 2.21-1.79 4-4 4h-1c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h4v2H7v-2h4c.55 0 1-.45 1-1v-2c0-.55-.45-1-1-1h-1c-2.21 0-4-1.79-4-4V11c0-3.17 2.11-5.85 5-6.71V4c0-1.1.9-2 2-2zm-2 19c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm4 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>
  </svg>
);

const AppDeliveredIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 1H5c-1.1 0-1.99.9-1.99 2L3 15.93c0 .69.35 1.3.88 1.66L12 23l8.11-5.41c.53-.36.88-.97.88-1.66L21 3c0-1.1-.9-2-2-2zm-7 19.6l-7-4.66V3h14v12.93l-7 4.67zm-2.01-7.42l-2.58-2.59L6 12l4 4 8-8-1.42-1.42z"/>
  </svg>
);

const StarRatingIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
  </svg>
);

const SuccessRateIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
  </svg>
);

// Technology Icons
const SwiftIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.09 19.72c-2.36 1.36-5.59 1.5-8.86.1A12.44 12.44 0 012 12.46c.82.83 1.91 1.64 3.07 2.34 2.54 1.53 5.46 2.15 8.33 1.86-3.24-1.39-6.5-3.35-9.19-5.95 2.72 2.15 5.94 3.85 9.14 4.55-1.62-1.27-3.14-2.73-4.5-4.32 2.28 1.79 4.86 3.23 7.54 4.15-2.37-2.59-4.41-5.5-6-8.65 3.24 3.17 7.36 5.44 11.23 6.11-1.68-3.86-4.98-7.23-9.16-9.32 4.18 2.73 8.14 6.31 10.46 10.93-1.5-5.25-6.12-9.63-11.69-11.46 5.5 3.95 10.5 9.86 12.62 16.5-2.53-3.17-6.12-5.64-9.95-7.14z"/>
  </svg>
);

const SwiftUIIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
  </svg>
);

const XcodeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.5 14.5l-1.41-1.41L10.17 12 8.09 9.91 9.5 8.5 12 11l2.5-2.5 1.41 1.41L13.83 12l2.08 2.09L15.5 15.5 12 13l-2.5 2.5z"/>
  </svg>
);

const CoreDataIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
  </svg>
);

const KotlinIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7 7h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z"/>
  </svg>
);

const JetpackIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 15c-4.42 0-8-2.69-8-6s3.58-6 8-6 8 2.69 8 6-3.58 6-8 6z"/>
  </svg>
);

const AndroidStudioIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11 2v20c-5.07-.5-9-4.79-9-10s3.93-9.5 9-10zm2 0v9h9c-.47-4.74-4.24-8.5-9-9zm0 11v9c4.74-.47 8.5-4.24 9-9h-9z"/>
  </svg>
);

const MaterialDesignIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
  </svg>
);

const ReactNativeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);

const FlutterIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M14.5 12.5l-3-3 3-3 3 3-3 3zm-9 0l3 3 3-3-3-3-3 3zm9 9l3-3-3-3-3 3 3 3zm-9 0l3-3-3-3-3 3 3 3z"/>
  </svg>
);

const DartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
    <path d="M12 7l5 5-5 5-5-5 5-5z"/>
  </svg>
);

const JavaScriptIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
    <path d="M12 7l5 5-5 5-5-5 5-5z"/>
  </svg>
);

const AppDevelopmentPage = () => {
  const [activePlatform, setActivePlatform] = useState('ios');
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      icon: (
        <svg width="56" height="56" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>
        </svg>
      ),
      title: "Native Mobile Apps",
      description: "High-performance native applications built for iOS and Android platforms with platform-specific optimizations.",
      features: ["Platform-Specific UI/UX", "Optimal Performance", "Hardware Access", "App Store Compliance", "Offline Capabilities"],
      price: "From $15,000",
      timeline: "8-12 weeks",
      popular: false
    },
    {
      icon: (
        <svg width="56" height="56" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-2 14H5V6h14v12z"/>
        </svg>
      ),
      title: "Cross-Platform Apps",
      description: "Single codebase applications that run seamlessly on both iOS and Android with native-like performance.",
      features: ["Code Reusability", "Faster Development", "Consistent UI", "Cost-Effective", "Easy Maintenance"],
      price: "From $12,000",
      timeline: "6-10 weeks",
      popular: true
    },
    {
      icon: (
        <svg width="56" height="56" viewBox="0 0 24 24" fill="currentColor">
          <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
        </svg>
      ),
      title: "Custom App Development",
      description: "Tailored solutions designed specifically for your business needs and unique workflows.",
      features: ["Custom Features", "Scalable Architecture", "API Integration", "Brand Alignment", "Advanced Analytics"],
      price: "From $25,000",
      timeline: "12-20 weeks",
      popular: false
    }
  ];

  const platforms = {
    ios: {
      name: "iOS Development",
      tagline: "Native iOS Excellence",
      description: "Native iOS apps built with Swift and SwiftUI, following Apple's Human Interface Guidelines for exceptional user experiences.",
      features: [
        "Swift & SwiftUI Development",
        "Apple Human Interface Guidelines",
        "App Store Optimization",
        "iOS Version Compatibility",
        "Push Notifications",
        "In-App Purchases"
      ],
      stats: [
        { value: "98%", label: "Success Rate" },
        { value: "4.8★", label: "Store Rating" },
        { value: "2M+", label: "Downloads" }
      ],
      stack: "Swift & SwiftUI",
      technologies: [
        { name: "Swift", proficiency: 95, icon: <SwiftIcon /> },
        { name: "SwiftUI", proficiency: 90, icon: <SwiftUIIcon /> },
        { name: "Xcode", proficiency: 92, icon: <XcodeIcon /> },
        { name: "Core Data", proficiency: 88, icon: <CoreDataIcon /> }
      ]
    },
    android: {
      name: "Android Development",
      tagline: "Native Android Power",
      description: "Native Android applications using Kotlin and Jetpack Compose with Material Design 3 principles.",
      features: [
        "Kotlin & Jetpack Compose",
        "Material Design 3",
        "Google Play Optimization",
        "Device Compatibility",
        "Background Services",
        "Google Play Billing"
      ],
      stats: [
        { value: "95%", label: "Success Rate" },
        { value: "4.6★", label: "Store Rating" },
        { value: "5M+", label: "Downloads" }
      ],
      stack: "Kotlin & Jetpack",
      technologies: [
        { name: "Kotlin", proficiency: 94, icon: <KotlinIcon /> },
        { name: "Jetpack", proficiency: 89, icon: <JetpackIcon /> },
        { name: "Android Studio", proficiency: 91, icon: <AndroidStudioIcon /> },
        { name: "Material Design", proficiency: 93, icon: <MaterialDesignIcon /> }
      ]
    },
    cross: {
      name: "Cross-Platform Development",
      tagline: "Universal App Solutions",
      description: "React Native and Flutter apps delivering native performance with maximum code reusability.",
      features: [
        "React Native & Flutter",
        "Single Codebase",
        "Native Performance",
        "Hot Reload",
        "Third-Party Libraries",
        "Cost Efficiency"
      ],
      stats: [
        { value: "92%", label: "Success Rate" },
        { value: "4.7★", label: "Store Rating" },
        { value: "3M+", label: "Downloads" }
      ],
      stack: "React Native & Flutter",
      technologies: [
        { name: "React Native", proficiency: 90, icon: <ReactNativeIcon /> },
        { name: "Flutter", proficiency: 88, icon: <FlutterIcon /> },
        { name: "Dart", proficiency: 85, icon: <DartIcon /> },
        { name: "JavaScript", proficiency: 93, icon: <JavaScriptIcon /> }
      ]
    }
  };

  const features = [
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.38 8.57l-1.23 1.85a8 8 0 01-.22 7.58H5.07A8 8 0 0115.58 6.85l1.85-1.23A10 10 0 003.35 19a2 2 0 001.72 1h13.85a2 2 0 001.74-1 10 10 0 00-.27-10.44z"/>
          <path d="M10.59 15.41a2 2 0 002.83 0l5.66-8.49-8.49 5.66a2 2 0 000 2.83z"/>
        </svg>
      ),
      title: "Lightning Fast Performance",
      description: "Optimized for speed with 60fps animations, instant loading, and efficient resource management"
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
        </svg>
      ),
      title: "Enterprise Security",
      description: "Bank-level security with data encryption, secure APIs, and regular security audits"
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"/>
        </svg>
      ),
      title: "Beautiful UI/UX Design",
      description: "Modern, intuitive designs that provide exceptional user experiences and high conversion rates"
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/>
        </svg>
      ),
      title: "24/7 Technical Support",
      description: "Round-the-clock maintenance, updates, and technical support with 99.9% uptime guarantee"
    }
  ];

  return (
    <div className="app-dev-page">
      {/* Services Section */}
      <section className="app-dev-services">
        <div className="app-dev-container">
          <div className="app-dev-section-header">
            <h2>Our App Development Services</h2>
            <p>Comprehensive mobile solutions tailored to your specific business goals and user needs</p>
          </div>

          <div className="app-dev-services-grid">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`app-dev-service-card ${service.popular ? 'app-dev-service-popular' : ''}`}
              >
                {service.popular && (
                  <div className="app-dev-popular-badge">Most Popular</div>
                )}
                
                <div className="app-dev-service-header">
                  <div className="app-dev-service-icon">
                    {service.icon}
                  </div>
                  <h3>{service.title}</h3>
                </div>
                
                <p className="app-dev-service-description">{service.description}</p>
                
                <ul className="app-dev-service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <span className="app-dev-feature-check">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="#10b981">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="app-dev-service-pricing">
                  <div className="app-dev-pricing-info">
                    <div className="app-dev-price">{service.price}</div>
                    <div className="app-dev-timeline">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="#64748b">
                        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                        <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                      </svg>
                      {service.timeline}
                    </div>
                  </div>
                  <button className="app-dev-cta-btn app-dev-btn-primary">
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Platforms Section */}
      <section className="app-dev-platforms" id="app-dev-platforms-section">
        <div className="app-dev-container">
          <div className="app-dev-section-header">
            <span className="app-dev-section-badge">Platform Mastery</span>
            <h2>Development Platforms Expertise</h2>
            <p>We master all major mobile platforms to bring your app idea to life with the best technology stack</p>
          </div>

          <div className="app-dev-platforms-content">
            <div className="app-dev-platforms-tabs">
              {Object.keys(platforms).map(platform => (
                <button
                  key={platform}
                  className={`app-dev-platform-tab ${activePlatform === platform ? 'app-dev-tab-active' : ''}`}
                  onClick={() => setActivePlatform(platform)}
                >
                  <div className="app-dev-tab-content">
                    <div className="app-dev-tab-icon">
                      {platform === 'ios' && <ApplePlatformIcon />}
                      {platform === 'android' && <AndroidPlatformIcon />}
                      {platform === 'cross' && <CrossPlatformIcon />}
                    </div>
                    <span>{platforms[platform].name}</span>
                  </div>
                  <div className="app-dev-tab-indicator"></div>
                </button>
              ))}
            </div>

            <div className="app-dev-platform-details">
              <div className="app-dev-platform-info">
                <div className="app-dev-platform-header">
                  <div className="app-dev-platform-title-section">
                    <h3>{platforms[activePlatform].name}</h3>
                    <div className="app-dev-platform-tagline">{platforms[activePlatform].tagline}</div>
                  </div>
                  <div className="app-dev-platform-stats">
                    {platforms[activePlatform].stats.map((stat, index) => (
                      <div key={index} className="app-dev-platform-stat">
                        <div className="app-dev-platform-stat-value">{stat.value}</div>
                        <div className="app-dev-platform-stat-label">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <p className="app-dev-platform-description">
                  {platforms[activePlatform].description}
                </p>
                
                <div className="app-dev-platform-features">
                  <h4 className="app-dev-features-title">
                    <CodeIcon />
                    Key Capabilities
                  </h4>
                  <div className="app-dev-features-grid">
                    {platforms[activePlatform].features.map((feature, index) => (
                      <div key={index} className="app-dev-feature-card">
                        <div className="app-dev-feature-icon">
                          <CheckCircleIcon />
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="app-dev-platform-actions">
                  <div className="app-dev-action-primary">
                    <button className="app-dev-cta-btn app-dev-btn-primary">
                      <RocketIcon />
                      <span>Start {platforms[activePlatform].name} Project</span>
                      <ArrowRightIcon />
                    </button>
                    <div className="app-dev-action-benefits">
                      <div className="app-dev-benefit-item">
                        <ClockIcon />
                        <span>Free consultation</span>
                      </div>
                      <div className="app-dev-benefit-item">
                        <DocumentIcon />
                        <span>Detailed proposal</span>
                      </div>
                      <div className="app-dev-benefit-item">
                        <CalendarIcon />
                        <span>Project timeline</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="app-dev-action-secondary">
                    <button className="app-dev-cta-btn app-dev-btn-secondary">
                      <CaseStudyIcon />
                      <span>View Case Studies</span>
                    </button>
                    <button className="app-dev-cta-btn app-dev-btn-outline">
                      <DownloadIcon />
                      <span>Download Brochure</span>
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Enhanced Visual Section */}
              <div className="app-dev-platform-visual-enhanced">
                <div className="app-dev-tech-stack">
                  <div className="app-dev-stack-header">
                    <h4>
                      <LayersIcon />
                      Technology Stack
                    </h4>
                    <div className="app-dev-stack-badge">{platforms[activePlatform].stack}</div>
                  </div>
                  
                  <div className="app-dev-tech-items">
                    {platforms[activePlatform].technologies.map((tech, index) => (
                      <div key={index} className="app-dev-tech-item">
                        <div className="app-dev-tech-icon-wrapper">
                          <div className="app-dev-tech-icon">
                            {tech.icon}
                          </div>
                          <div className="app-dev-tech-glow"></div>
                        </div>
                        <span className="app-dev-tech-name">{tech.name}</span>
                        <div className="app-dev-tech-progress">
                          <div 
                            className="app-dev-tech-progress-fill" 
                            style={{width: `${tech.proficiency}%`}}
                          ></div>
                        </div>
                        <span className="app-dev-tech-percent">{tech.proficiency}%</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="app-dev-platform-achievements">
                  <h5>
                    <TrophyIcon />
                    Our Achievements
                  </h5>
                  <div className="app-dev-achievements-grid">
                    <div className="app-dev-achievement-card">
                      <div className="app-dev-achievement-icon">
                        <AppDeliveredIcon />
                      </div>
                      <div className="app-dev-achievement-content">
                        <div className="app-dev-achievement-value">150+</div>
                        <div className="app-dev-achievement-label">Apps Delivered</div>
                      </div>
                    </div>
                    <div className="app-dev-achievement-card">
                      <div className="app-dev-achievement-icon">
                        <StarRatingIcon />
                      </div>
                      <div className="app-dev-achievement-content">
                        <div className="app-dev-achievement-value">4.9/5</div>
                        <div className="app-dev-achievement-label">Client Rating</div>
                      </div>
                    </div>
                    <div className="app-dev-achievement-card">
                      <div className="app-dev-achievement-icon">
                        <SuccessRateIcon />
                      </div>
                      <div className="app-dev-achievement-content">
                        <div className="app-dev-achievement-value">98%</div>
                        <div className="app-dev-achievement-label">Success Rate</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}

    </div>
  );
};

export default AppDevelopmentPage;