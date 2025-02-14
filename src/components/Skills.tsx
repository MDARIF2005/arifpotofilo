import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Brain, Megaphone, Users } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Technical & Development",
      skills: [
        "AI & Machine Learning with Django",
        "Web Development",
        "Full-Stack Development",
        "NLP & OpenCV"
      ]
    },
    {
      icon: Megaphone,
      title: "Digital Marketing & Social Media",
      skills: [
        "Social Media Management",
        "Digital Marketing Strategy",
        "Content Creation",
        "Brand Promotion"
      ]
    },
    {
      icon: Users,
      title: "Leadership & Business",
      skills: [
        "Team Management",
        "Project Leadership",
        "Startup Coordination",
        "Sales Strategy"
      ]
    },
    {
      icon: Brain,
      title: "Soft Skills",
      skills: [
        "Problem Solving",
        "Communication",
        "Team Collaboration",
        "Creative Thinking"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="skills" className="py-20 bg-white/30 backdrop-blur-lg">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 gradient-text"
        >
          Skills & Expertise
        </motion.h2>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skillCategories.map(({ icon: Icon, title, skills }) => (
            <motion.div
              key={title}
              variants={itemVariants}
              className="bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <Icon className="w-8 h-8 text-pink-500 mr-3" />
                <h3 className="text-xl font-semibold gradient-text">{title}</h3>
              </div>
              <ul className="space-y-2">
                {skills.map((skill) => (
                  <li key={skill} className="flex items-center">
                    <span className="w-2 h-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mr-2" />
                    <span className="text-gray-700">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;