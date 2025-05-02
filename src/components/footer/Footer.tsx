'use client'
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsTelegram, BsWhatsapp } from 'react-icons/bs';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col justify-between items-center gap-8">
          

          {/* Middle - Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="hidden md:block"
          >
            <ul className="flex space-x-6">
              {['Home', 'About', 'Projects', 'Experience', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-purple-300 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right side - Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex space-x-6"
          >
            <Link
              href="https://github.com/shakil-ahmmed-se"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-300 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="text-xl" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/shakil-ahmmed-se/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-300 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-xl" />
            </Link>
            <Link
              href="https://wa.me/+8801994636030"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-300 transition-colors"
              aria-label="LinkedIn"
            >
              <BsWhatsapp className="text-xl" />
            </Link>
            <Link
              href="https://t.me/shakil_ahmmed_se"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-300 transition-colors"
              aria-label="Twitter"
            >
              <BsTelegram className="text-xl" />
            </Link>
          </motion.div>
          {/* Left side - Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <p className="text-gray-400">
              &copy; {currentYear} Shakil Ahmmed. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm mt-1">
              {/* Develop by <FaHeart className="inline text-red-500" /> Shakil */}
            </p>
          </motion.div>
        </div>

        {/* Mobile navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 md:hidden"
        >
          <ul className="flex flex-wrap justify-center gap-4">
            {['Home', 'About', 'Projects', 'Experience', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-400 hover:text-purple-300 transition-colors text-sm"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;