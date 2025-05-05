'use client'
import { motion } from 'framer-motion';
import { 
  FaReact, 
  FaNodeJs, 
  FaDatabase, 
  FaServer, 
  FaAws, 
  FaTools, 
  FaJs, 
  FaPython,
  FaGitAlt,
  FaDocker
} from 'react-icons/fa';
import { 
  SiNextdotjs, 
  SiTypescript, 
  SiSvelte, 
  SiHtml5, 
  SiCss3, 
  SiBootstrap, 
  SiTailwindcss,
  SiExpress,
  SiDjango,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiPlesk,
  SiCpanel,
  SiCloudflare,
  SiJenkins,
  SiGithubactions,
  SiPostman,
  SiVercel,
  SiNetlify,
  SiRailway
} from 'react-icons/si';
import { VscVscode } from "react-icons/vsc";
import { TbBrandVscode } from 'react-icons/tb';

const SkillsSection = () => {
  const categories = [
    {
      name: 'Frontend',
      icon: <FaReact className="text-blue-400" size={24} />,
      items: [
        { name: 'React.js', icon: <FaReact className="text-blue-400" /> },
        { name: 'Next.js', icon: <SiNextdotjs /> },
        { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
        { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" /> },
        { name: 'Svelte', icon: <SiSvelte className="text-orange-500" /> },
        { name: 'HTML', icon: <SiHtml5 className="text-orange-500" /> },
        { name: 'CSS', icon: <SiCss3 className="text-blue-500" /> },
        { name: 'Bootstrap', icon: <SiBootstrap className="text-purple-500" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> }
      ]
    },
    {
      name: 'Backend',
      icon: <FaNodeJs className="text-green-500" size={24} />,
      items: [
        { name: 'Python', icon: <FaPython className="text-blue-500" /> },
        { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
        { name: 'Express.js', icon: <SiExpress /> },
        { name: 'Django', icon: <SiDjango className="text-dark-green-500" /> },
        { name: 'Django Rest Framework', icon: <SiDjango className="text-dark-green-500" /> }
      ]
    },
    {
      name: 'Database',
      icon: <FaDatabase className="text-blue-300" size={24} />,
      items: [
        { name: 'MySQL', icon: <SiMysql className="text-blue-500" /> },
        { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-700" /> },
        { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> }
      ]
    },
    {
      name: 'Hosting',
      icon: <FaServer className="text-purple-400" size={24} />,
      items: [
        { name: 'VPS', icon: <FaServer className="text-purple-400" /> },
        { name: 'Plesk', icon: <SiPlesk className="text-orange-500" /> },
        { name: 'Hostinger', icon: <FaServer className="text-purple-400" /> },
        { name: 'Cpanel', icon: <SiCpanel className="text-red-500" /> },
        { name: 'Aapanel', icon: <FaServer className="text-purple-400" /> },
        { name: 'Cloudflare', icon: <SiCloudflare className="text-orange-500" /> }
      ]
    },
    {
      name: 'DevOps',
      icon: <FaAws className="text-orange-500" size={24} />,
      items: [
        { name: 'AWS', icon: <FaAws className="text-orange-500" /> },
        { name: 'EC2', icon: <FaAws className="text-orange-500" /> },
        { name: 'RDS', icon: <FaAws className="text-orange-500" /> },
        { name: 'Lambda Function', icon: <FaAws className="text-orange-500" /> },
        { name: 'Serverless', icon: <FaAws className="text-orange-500" /> },
        { name: 'Docker', icon: <FaDocker className="text-blue-500" /> },
        { name: 'GitHub Action', icon: <SiGithubactions /> },
        { name: 'VPS', icon: <FaServer className="text-purple-400" /> }
      ]
    },
    {
      name: 'Tools',
      icon: <FaTools className="text-gray-400" size={24} />,
      items: [
        { name: 'Git', icon: <FaGitAlt className="text-orange-600" /> },
        { name: 'GitHub', icon: <FaGitAlt className="text-gray-800" /> },
        { name: 'Postman', icon: <SiPostman className="text-orange-500" /> },
        { name: 'VS Code', icon: <VscVscode className="text-blue-500" /> },
        { name: 'Vercel', icon: <SiVercel /> },
        { name: 'Chrome Dev Tool', icon: <TbBrandVscode className="text-blue-500" /> },
        { name: 'Netlify', icon: <SiNetlify className="text-teal-400" /> },
        { name: 'Render', icon: <FaServer className="text-purple-400" /> },
        { name: 'Railway', icon: <SiRailway /> },
        { name: 'Mailcow', icon: <FaTools className="text-gray-400" /> }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium px-4 py-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white backdrop-blur-md">
            Tech Stack
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-400">Technical Expertise</span>
          </h2>
          <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
            Technologies I've worked with to build amazing digital experiences
          </p>
        </motion.div>

        <div className="relative">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mx-auto w-64 h-64 rounded-full bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/30 shadow-lg shadow-purple-500/10 flex items-center justify-center mb-12"
          >
            <div className="text-center">
              <div className="text-5xl mb-3">
                <FaTools className="text-purple-300 mx-auto" />
              </div>
              <h3 className="text-2xl font-bold text-white">Tech Stack</h3>
              <p className="text-sm text-gray-300 mt-2">6 Core Categories</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ scale: 1.03 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-md rounded-xl p-5 border border-gray-700/50 hover:border-purple-500/50 transition-all shadow-lg hover:shadow-purple-500/20"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-purple-900/30 to-pink-900/30">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.name}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg min-w-[100px] h-10 transition-all bg-[#2D3748] text-white"
                    >
                      <div className="text-lg">
                        {skill.icon}
                      </div>
                      <span className="text-xs font-medium">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className="text-gray-400 max-w-2xl mx-auto text-sm">
            * Icons represent primary technologies - always learning new tools and frameworks
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;