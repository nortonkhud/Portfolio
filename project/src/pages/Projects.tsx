import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Search, ChevronDown, ChevronUp } from 'lucide-react';

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce website with modern features and seamless user experience.',
      fullDescription: 'Developed a comprehensive e-commerce platform using React.js, Next.js, and Node.js. Implemented user authentication, product management, shopping cart functionality, and payment gateway integration. The platform features a responsive design, real-time inventory updates, and optimized performance for a smooth shopping experience.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80',
      tags: ['React.js', 'Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
      github: 'https://github.com/yourusername/ecommerce-platform',
      demo: 'https://ecommerce-demo.com',
      metrics: [
        'Responsive design for all devices',
        'Integrated payment gateway',
        'Real-time inventory management',
        'Optimized performance'
      ]
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio showcasing skills, experience, and projects.',
      fullDescription: 'Designed and developed a modern portfolio website using React.js and Tailwind CSS. Features include dark mode support, smooth animations, responsive design, and interactive components. The website showcases technical skills, professional experience, and project highlights with optimized performance and accessibility.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      tags: ['React.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
      github: 'https://github.com/yourusername/portfolio',
      demo: 'https://portfolio-demo.com',
      metrics: [
        'Dark mode support',
        'Responsive design',
        'Interactive UI components',
        'Optimized performance'
      ]
    },
    {
      title: 'Task Management System',
      description: 'A collaborative task management application for teams.',
      fullDescription: 'Created a task management system using React.js and Node.js. Implemented features such as task creation, assignment, status tracking, and team collaboration. The application includes real-time updates, file attachments, and progress tracking with a focus on user experience and productivity.',
      image: 'https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1475&q=80',
      tags: ['React.js', 'Node.js', 'MongoDB', 'Socket.io', 'Express.js'],
      github: 'https://github.com/yourusername/task-manager',
      demo: 'https://taskmanager-demo.com',
      metrics: [
        'Real-time collaboration',
        'File attachment support',
        'Progress tracking',
        'Team management'
      ]
    }
  ];

  const filteredProjects = projects.filter(project => 
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-8 text-center">Featured <span className="text-red-600">Projects</span></h1>
          
          <div className="relative max-w-md mx-auto mb-12">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-black/50 border border-red-600/20 rounded-lg focus:outline-none focus:border-red-600 text-white"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-black/50 rounded-lg overflow-hidden border border-red-600/20 hover:border-red-600 transition-colors duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">
                    {expandedProject === index ? project.fullDescription : project.description}
                  </p>
                  <button
                    onClick={() => setExpandedProject(expandedProject === index ? null : index)}
                    className="text-red-600 hover:text-red-500 flex items-center gap-1 mb-4"
                  >
                    {expandedProject === index ? (
                      <>Show Less <ChevronUp size={16} /></>
                    ) : (
                      <>Read More <ChevronDown size={16} /></>
                    )}
                  </button>

                  {expandedProject === index && (
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Key Features:</h4>
                      <ul className="list-disc list-inside text-gray-400">
                        {project.metrics.map((metric, idx) => (
                          <li key={idx}>{metric}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-red-600/10 text-red-600 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-red-600 transition-colors duration-200"
                    >
                      <Github size={20} />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-red-600 transition-colors duration-200"
                    >
                      <ExternalLink size={20} />
                      Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;