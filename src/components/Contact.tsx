import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "arifsmart2005@gmail.com",
      href: "mailto:arifsmart2005@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9390219103",
      href: "tel:+919390219103"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "India",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 gradient-text"
        >
          Get in Touch
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            {contactInfo.map(({ icon: Icon, title, value, href }) => (
              <a
                key={title}
                href={href}
                className="flex items-center space-x-4 group"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold rainbow-text">{title}</h3>
                  <p className="text-gray-600 group-hover:text-pink-500 transition-colors">
                    {value}
                  </p>
                </div>
              </a>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-white/50 backdrop-blur-sm border border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg bg-white/50 backdrop-blur-sm border border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition"
              />
            </div>
            <div>
              <textarea
                rows={4}
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-lg bg-white/50 backdrop-blur-sm border border-gray-200 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none transition"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold flex items-center justify-center space-x-2 hover:shadow-lg transition-shadow"
            >
              <span>Send Message</span>
              <Send className="w-4 h-4" />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;