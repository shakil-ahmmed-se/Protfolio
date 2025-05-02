'use client'
import { motion } from 'framer-motion';
import { FaBriefcase, FaCode, FaServer, FaChartLine, FaCloud } from 'react-icons/fa';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium px-4 py-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white backdrop-blur-md">
            Professional Journey
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-400">Experience</span>
          </h2>
          <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
            Current role and key contributions at GizanTech
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl border border-gray-700/50 p-8 shadow-lg hover:shadow-purple-500/10 transition-all">
            <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
              <div className="flex-shrink-0">
                <div className="p-4 rounded-xl bg-gradient-to-r from-purple-900/30 to-pink-900/30">
                  <FaBriefcase className="text-3xl text-purple-300" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Frontend Developer</h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 mt-1">
                  <p className="text-purple-200 font-medium flex items-center gap-2">
                    <span>GizanTech</span>
                    <span className="hidden sm:inline">•</span>
                  </p>
                  <p className="text-gray-400">Dhaka, Bangladesh</p>
                  <p className="text-gray-400">July 2024 – Present</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex gap-4 p-4 rounded-lg bg-gray-800/30 hover:bg-gray-700/50 transition-all"
              >
                <FaCode className="text-purple-300 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-white">Web Application Development</h4>
                  <p className="text-gray-300 mt-1">
                    Developed and deployed dynamic, responsive web applications using React.js and Next.js, enhancing user experience and accessibility.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ x: 5 }}
                className="flex gap-4 p-4 rounded-lg bg-gray-800/30 hover:bg-gray-700/50 transition-all"
              >
                <FaChartLine className="text-purple-300 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-white">Data Visualization</h4>
                  <p className="text-gray-300 mt-1">
                    Designed and built interactive dashboards with advanced charting for effective data visualization and business insights.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ x: 5 }}
                className="flex gap-4 p-4 rounded-lg bg-gray-800/30 hover:bg-gray-700/50 transition-all"
              >
                <FaServer className="text-purple-300 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-white">Backend Integration</h4>
                  <p className="text-gray-300 mt-1">
                    Integrated frontend applications with backend services and APIs for seamless data flow and functionality.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ x: 5 }}
                className="flex gap-4 p-4 rounded-lg bg-gray-800/30 hover:bg-gray-700/50 transition-all"
              >
                <FaCloud className="text-purple-300 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-white">Cloud Deployment</h4>
                  <p className="text-gray-300 mt-1">
                    Deployed and managed applications on AWS cloud infrastructure, ensuring scalability, security, and high availability.
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-700/50">
              <h4 className="font-semibold text-white mb-3">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {['React.js', 'Next.js', 'Node.js', 'MongoDB', 'Express.js', 'Tailwind CSS',  'TypeScript', 'AWS', 'REST APIs', 'Data Visualization', 'Responsive Design'].map((tech, i) => (
                  <span 
                    key={i}
                    className="text-xs px-3 py-1.5 rounded-full bg-purple-900/30 text-purple-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <a
              href="#"
              className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-medium transition-all"
            >
              View Full Work History
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;