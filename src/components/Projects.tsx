import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Globe, Users, Rocket } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      icon: Bot,
      title: "AI Image Recognition Chatbot",
      description: "Developed during a 24-hour hackathon using Django, NLP, and OpenCV",
      tags: ["Python", "Django", "OpenCV", "NLP"]
    },
    {
      icon: Globe,
      title: "Digital Marketing Agency",
      description: "Founded and managing a successful digital marketing agency",
      tags: ["Marketing", "Management", "Strategy"]
    },
    {
      icon: Users,
      title: "College Social Media",
      description: "Managing and growing college's social media presence",
      tags: ["Social Media", "Content", "Growth"]
    },
    {
      icon: Rocket,
      title: "Kids' Fashion AI Project",
      description: "Leading an AI-based project for kids' fashion",
      tags: ["AI", "Fashion", "Leadership"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white/30 backdrop-blur-lg">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 gradient-text"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map(({ icon: Icon, title, description, tags }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-300" />
              <div className="relative bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                <Icon className="w-12 h-12 text-pink-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2 rainbow-text">{title}</h3>
                <p className="text-gray-600 mb-4">{description}</p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;