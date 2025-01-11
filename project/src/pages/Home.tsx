import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';
import ParticlesBackground from '../components/ParticlesBackground';

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check the current theme (light or dark) based on the system or user preference
  useEffect(() => {
    const prefersDarkMode =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDarkMode);
  }, []);

  const ProfileSection = () => {
    return (
      <div style={styles.container}>
        {/* Smaller Text aligned left */}
        <p
          style={isDarkMode ? styles.smallerTextDark : styles.smallerTextLight}
        >
          Hello I'm
        </p>

        {/* Name in Bold and Larger Text with Instagram Link */}
        <h1 style={styles.nameText}>
          <a
            href="https://www.instagram.com/norton_jaat/"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.nameLink}
          >
            Navratan Jat
          </a>
        </h1>

        {/* Dynamic Typewriter Effect */}
        <div style={styles.typewriterText}>
          <TypeAnimation
            sequence={[
              'Front-end Developer',
              2000,
              'Backend Developer',
              2000,
              'Full-stack Developer',
              2000,
            ]}
            speed={50}
            repeat={Infinity}
            wrapper="p"
          />
        </div>

        {/* Profile Summary */}
        <p style={styles.profileSummary}>
          A passionate and dedicated developer with expertise in modern web
          technologies, building user-centric interfaces, and creating robust
          backend solutions. I thrive on delivering high-quality, scalable
          applications and collaborating with teams to optimize performance.
        </p>

        {/* Buttons Section */}
        <div style={styles.buttonsContainer}>
          {/* Hire Me Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="button-container"
          >
            <Link to="/contact" style={styles.button}>
              Hire Me
            </Link>
          </motion.div>

          {/* Download CV Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="button-container"
          >
            <a
              href="https://docs.google.com/document/d/1D4udnFUecZgYSdmMchmmjNAHBnsPXFShq1TjkelrybQ/export?format=pdf"
              download="Navratan_Jat_Resume"
              style={styles.button}
            >
              Download CV
            </a>
          </motion.div>
        </div>
      </div>
    );
  };

  // Inline Styles with Light/Dark Mode Adjustments
  const styles = {
    container: {
      textAlign: 'left', // Align everything left
      fontFamily: "'Arial', sans-serif",
      margin: '50px auto',
      padding: '20px',
      maxWidth: '600px',
    },
    smallerTextLight: {
      fontSize: '18px',
      color: '#333', // Dark color for light theme
      marginBottom: '5px', // Decrease margin between Hello I'm and Navratan Jat
    },
    smallerTextDark: {
      fontSize: '18px',
      color: '#ffffff', // White color for dark theme
      marginBottom: '5px', // Decrease margin between Hello I'm and Navratan Jat
    },
    nameText: {
      fontSize: '50px', // Increased size for Navratan Jat
      fontWeight: 'bold',
      color: '#D32F2F', // Red color for the name
      marginBottom: '20px',
    },
    nameLink: {
      color: '#D32F2F', // Red color for Instagram link text
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      fontWeight: 'bold',
    },
    typewriterText: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#007ACC', // Blue color for typewriter text
      marginBottom: '20px',
    },
    profileSummary: {
      fontSize: '16px',
      color: '#666', // Light gray for readability
      lineHeight: '1.5',
    },
    buttonsContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      marginTop: '20px',
    },
    button: {
      padding: '10px 20px',
      backgroundColor: 'rgba(255, 255, 255, 0.1)', // Glassmorphism background (light)
      color: '#D32F2F', // Red text color for the button
      fontSize: '16px',
      fontWeight: 'bold',
      borderRadius: '5px',
      textDecoration: 'none',
      transition: 'all 0.3s ease-in-out',
      boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
      backdropFilter: 'blur(10px)', // Glassmorphism effect
      border: '2px solid #D32F2F', // Red border for the buttons
    },
  };

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Founder & CEO, TechVeda Solutions',
      company: 'TechVeda Solutions Pvt Ltd',
      location: 'Bengaluru, Karnataka',
      content:
        'Navratan completely transformed our e-commerce website. Their expertise in React and Node.js helped us achieve a 40% increase in our conversion rate during the Diwali season. The integration of UPI payments and regional language support was seamless.',
      metrics: '40% increase in conversions, 50K+ daily active users',
      image:
        'https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Priya Sharma',
      role: 'Director of Technology',
      company: 'HealthFirst India',
      location: 'Mumbai, Maharashtra',
      content:
        'Working with Navratan was transformative for our healthcare platform. Their understanding of both technical requirements and Indian healthcare compliance standards was exceptional. The telemedicine features they implemented helped us serve 25,000+ patients across rural India.',
      metrics: '25K+ rural patients served, 95% user satisfaction',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Amit Patel',
      role: 'Managing Director',
      company: 'Textile Hub',
      location: 'Surat, Gujarat',
      content:
        'As a traditional textile business going digital, we needed someone who understood both technology and our local market. Navratan understood our requirements and delivered a brilliant solution. The B2B platform they built helped us connect with buyers across India.',
      metrics:
        '200+ textile manufacturers onboarded, ₹2Cr+ monthly transactions',
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ];

  return (
    <div className="relative min-h-screen pt-16">
      <ParticlesBackground />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Add ProfileSection Component Here */}
        <ProfileSection /> {/* This will render the ProfileSection */}
        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-20"
        >
          <h2 className="text-2xl font-bold mb-8 text-center">
            Client Success Stories
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-white/5 p-6 rounded-lg border border-red-600/20 hover:border-red-600 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role}
                    </p>
                    <p className="text-sm text-red-600">
                      {testimonial.company}
                    </p>
                    <p className="text-xs text-gray-500">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
                <blockquote className="text-gray-600 dark:text-gray-400 italic mb-4">
                  "{testimonial.content}"
                </blockquote>
                <div className="mt-4 pt-4 border-t border-red-600/20">
                  <p className="text-sm font-semibold text-red-600">
                    Key Achievement: {testimonial.metrics}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
