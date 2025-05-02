'use client'
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiSend } from 'react-icons/fi';
import { FaWhatsapp, FaTelegram } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium px-4 py-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white backdrop-blur-md">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-6">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-400">Me</span>
          </h2>
          <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
            Reach out directly via email or messaging apps
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Email */}
          <motion.a
            href="mailto:shakilahmmed8906@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-gray-800/50 backdrop-blur-md rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/30 transition-all flex flex-col items-center text-center"
          >
            <div className="p-4 rounded-full bg-purple-900/30 mb-4">
              <FiMail className="text-2xl text-purple-300" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Email</h3>
            <p className="text-gray-300 mb-4">For professional inquiries</p>
            {/* <span className="text-purple-300 font-medium">shakilahmmed8906@gmail.com</span> */}
          </motion.a>

          {/* WhatsApp */}
          <motion.a
            href="https://wa.me/+8801994636030"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-gray-800/50 backdrop-blur-md rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/30 transition-all flex flex-col items-center text-center"
          >
            <div className="p-4 rounded-full bg-green-900/30 mb-4">
              <FaWhatsapp className="text-2xl text-green-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">WhatsApp</h3>
            <p className="text-gray-300 mb-4">For quick conversations</p>
            {/* <span className="text-green-400 font-medium">+123 456 7890</span> */}
          </motion.a>

          {/* Telegram */}
          <motion.a
            href="https://t.me/shakil_ahmmed_se"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-gray-800/50 backdrop-blur-md rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/30 transition-all flex flex-col items-center text-center"
          >
            <div className="p-4 rounded-full bg-blue-900/30 mb-4">
              <FaTelegram className="text-2xl text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Telegram</h3>
            <p className="text-gray-300 mb-4">For messaging</p>
            {/* <span className="text-blue-400 font-medium">@yourusername</span> */}
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 max-w-2xl mx-auto">
            Typically respond within 24 hours. For urgent matters, please use WhatsApp.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;