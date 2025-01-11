import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Code2, Briefcase, GraduationCap, Trophy } from 'lucide-react';

const About = () => {
  const achievements = [
    { icon: <Code2 size={24} />, title: '10+ Projects', description: 'Successfully Completed' },
    { icon: <Users size={24} />, title: 'Cross-functional', description: 'Team Collaboration' },
    { icon: <Award size={24} />, title: 'Full-Stack', description: 'Development Expertise' },
    { icon: <Trophy size={24} />, title: '25%', description: 'Performance Improvement' },
  ];

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-8 text-center">About <span className="text-red-600">Me</span></h1>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Professional Summary</h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>
                    Passionate Full-Stack Developer with expertise in building user-centric, responsive web applications using modern technologies. 
                    Proficient in React.js, Next.js, Node.js, HTML, and CSS, with a strong focus on scalability, performance, and clean code practices.
                  </p>
                  <p>
                    Adept at delivering high-quality solutions and collaborating effectively in a team environment. Experienced in optimizing web application 
                    performance and ensuring cross-browser compatibility.
                  </p>
                  <p>
                    Currently focused on developing dynamic and scalable web applications while continuously learning and adapting to new technologies 
                    in the ever-evolving field of web development.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
                <div className="space-y-6">
                  <div className="border-l-2 border-red-600 pl-4">
                    <h3 className="text-xl font-semibold">Full-Stack Developer</h3>
                    <p className="text-red-600">Amparo Secure Tech Pvt Ltd • October 2024 - Present</p>
                    <ul className="list-disc list-inside mt-2 text-gray-600 dark:text-gray-400 space-y-2">
                      <li>Developed dynamic and scalable web applications using React.js and Next.js</li>
                      <li>Collaborated with cross-functional teams to design and implement backend APIs using Node.js and PostgreSQL</li>
                      <li>Ensured responsive design and cross-browser compatibility</li>
                      <li>Optimized web application performance, improving page load times by 25%</li>
                    </ul>
                  </div>

                  <div className="border-l-2 border-red-600 pl-4">
                    <h3 className="text-xl font-semibold">Software Developer Trainee</h3>
                    <p className="text-red-600">Technology Twist • June 2024 - September 2024</p>
                    <ul className="list-disc list-inside mt-2 text-gray-600 dark:text-gray-400 space-y-2">
                      <li>Designed and built interactive UI components using React.js and Tailwind CSS</li>
                      <li>Assisted in backend development using Node.js and database integration with MongoDB</li>
                      <li>Worked on bug fixes and feature enhancements for existing projects</li>
                    </ul>
                  </div>

                  <div className="border-l-2 border-red-600 pl-4">
                    <h3 className="text-xl font-semibold">Freelance Web Developer</h3>
                    <p className="text-red-600">Self-Employed</p>
                    <ul className="list-disc list-inside mt-2 text-gray-600 dark:text-gray-400 space-y-2">
                      <li>Created custom websites and web apps for small businesses using HTML, CSS, and React.js</li>
                      <li>Migrated static sites to dynamic, scalable solutions with Next.js</li>
                      <li>Delivered projects on time, ensuring high client satisfaction</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4">Education & Certifications</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <GraduationCap size={24} className="text-red-600 mt-1" />
                    <div>
                      <h3 className="font-semibold">Bachelor of Computer Applications (BCA)</h3>
                      <p className="text-gray-600 dark:text-gray-400">Sangam University, Bhilwara • 2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <img 
                src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Professional workspace"
                className="rounded-lg shadow-xl mb-8"
              />

              <div className="grid grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white/50 dark:bg-black/50 p-6 rounded-lg border border-gray-200 dark:border-red-600/20 hover:border-red-600 transition-colors duration-300"
                  >
                    <div className="text-red-600 mb-4">{achievement.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{achievement.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;