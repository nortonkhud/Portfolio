import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Check } from 'lucide-react';
import { supabase } from '../lib/supabase';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([formData]);

      if (error) throw error;

      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      value: '+91 6367412559',
      href: 'tel:+916367412559',
    },
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'nortonkhud@gmail.com',
      href: 'mailto:nortonkhud@gmail.com',
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      value: 'Bhilwara, Rajasthan, India',
      href: 'https://maps.google.com/?q=Bhilwara,Rajasthan,India',
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-8 text-center">Get in <span className="text-red-600">Touch</span></h1>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    target={info.title === 'Location' ? '_blank' : undefined}
                    rel={info.title === 'Location' ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 group cursor-pointer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors duration-200">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-medium">{info.title}</h3>
                      <p className="text-gray-400 group-hover:text-red-500 transition-colors duration-200">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-6">Send Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-black/50 border border-red-600/20 rounded-lg focus:outline-none focus:border-red-600 text-white"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-black/50 border border-red-600/20 rounded-lg focus:outline-none focus:border-red-600 text-white"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    required
                    className="w-full px-4 py-2 bg-black/50 border border-red-600/20 rounded-lg focus:outline-none focus:border-red-600 text-white resize-none"
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors duration-200 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSuccess ? (
                    <>
                      <Check size={20} />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;