import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Wrench, Brain, Users, Database } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Code2 className="text-red-600" size={24} />,
      skills: [
        { name: 'React/Next.js', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'Tailwind CSS', level: 85 },
      ],
    },
    {
      title: 'Backend Development',
      icon: <Server className="text-red-600" size={24} />,
      skills: [
        { name: 'Node.js/Express', level: 85 },
        { name: 'FastAPI', level: 80 },
        { name: 'RESTful APIs', level: 85 },
        { name: 'GraphQL', level: 75 },
      ],
    },
    {
      title: 'Database & Tools',
      icon: <Database className="text-red-600" size={24} />,
      skills: [
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'SQLite', level: 75 },
        { name: 'Docker', level: 70 },
      ],
    },
    {
      title: 'Development Tools',
      icon: <Wrench className="text-red-600" size={24} />,
      skills: [
        { name: 'Git', level: 85 },
        { name: 'VS Code', level: 90 },
        { name: 'Chrome DevTools', level: 85 },
        { name: 'Postman', level: 80 },
      ],
    },
    {
      title: 'Best Practices',
      icon: <Brain className="text-red-600" size={24} />,
      skills: [
        { name: 'Clean Code', level: 85 },
        { name: 'Performance Optimization', level: 80 },
        { name: 'Responsive Design', level: 90 },
        { name: 'Testing', level: 75 },
      ],
    },
    {
      title: 'Soft Skills',
      icon: <Users className="text-red-600" size={24} />,
      skills: [
        { name: 'Team Collaboration', level: 90 },
        { name: 'Problem Solving', level: 85 },
        { name: 'Communication', level: 85 },
        { name: 'Time Management', level: 80 },
      ],
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
          <h1 className="text-4xl font-bold mb-8 text-center">Technical <span className="text-red-600">Skills</span></h1>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="bg-black/50 p-6 rounded-lg border border-red-600/20"
              >
                <div className="flex items-center gap-2 mb-6">
                  {category.icon}
                  <h2 className="text-xl font-semibold">{category.title}</h2>
                </div>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-red-600">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-[#949392] rounded-full">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className="h-full bg-red-600 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;