import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '80vh',
        textAlign: 'center',
        backgroundColor: '#f9fafb', // gray-50
        padding: '1rem',
      }}
    >
      <h1
        style={{
          fontSize: '4rem',
          fontWeight: '700',
          color: '#4f46e5', // indigo-600
          marginBottom: '1rem',
        }}
      >
        404
      </h1>

      <h2
        style={{
          fontSize: '1.5rem',
          fontWeight: '600',
          color: '#1f2937', // gray-800
          marginBottom: '0.5rem',
        }}
      >
        Page Not Found
      </h2>

      <p
        style={{
          color: '#4b5563', // gray-600
          marginBottom: '1.5rem',
          maxWidth: '500px',
        }}
      >
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </p>

      <Link
        to="/"
        style={{
          padding: '0.75rem 1.5rem',
          backgroundColor: '#4f46e5', // indigo-600
          color: '#ffffff',
          borderRadius: '9999px',
          textDecoration: 'none',
          fontWeight: '500',
          transition: 'background-color 0.3s ease',
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = '#4338ca')} // hover color
        onMouseLeave={(e) => (e.target.style.backgroundColor = '#4f46e5')}
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
