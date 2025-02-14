import React from 'react';
import { motion } from 'framer-motion';
import { Award, Code, Briefcase, MessageSquare } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      icon: Code,
      title: "AI/ML Development",
      description: "24-hour Hackathon Achievement - Developed an AI Chatbot",
      date: "2023"
    },
    {
      icon: Briefcase,
      title: "Digital Marketing",
      description: "Practical Experience Running Digital Marketing Agency",
      date: "2023"
    },
    {
      icon: Award,
      title: "Leadership Recognition",
      description: "Student Startup Coordinator Certificate",
      date: "2023"
    },
    {
      icon: MessageSquare,
      title: "Social Media Management",
      description: "Certificate of Responsibility as Social Media Manager",
      date: "2023"
    }
  ];

  return (
    <section id="certificates" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 gradient-text"
        >
          Certificates & Achievements
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certificates.map(({ icon: Icon, title, description, date }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-300" />
              <div className="relative bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                <Icon className="w-12 h-12 text-pink-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2 rainbow-text">{title}</h3>
                <p className="text-gray-600 mb-2">{description}</p>
                <span className="text-sm text-gray-500">{date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;