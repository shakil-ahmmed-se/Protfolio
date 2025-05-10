'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { useState } from 'react';

const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);
  
  const allProjects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured online store with cart functionality, user authentication, and payment processing.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      live: "https://www.banglastitch.com/",
      image: "/images/bangla.jpeg"
    },
    {
      title: "Cardlinx ",
      description: "A responsive one-page website showcasing how to use the app. It includes a hero section, features section, and a contact section.",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
      github: "#",
      live: "https://cardlinx.app/",
      image: "/images/cardlinx-land.png"
    },
    {
        "title": "Phibook",
        "description": "A social media site where users can post photos and statuses, with login/registration (including email verification), liking, commenting, and customization options for authenticated users' posts and profiles.",
        "tags": ["JavScript", "Python", "Django", "MySQL"],
        "github": "https://github.com/shakil-ahmmed-se/phibook",
        "live": "https://phibook-4g8j.onrender.com/accounts/register/",
        "image": "/images/phibook.png"
      },
    {
      title: "Cardlinx Dashboard",
      description: "Manage your business, health, and personal documents effortlessly in one place. It includes a dashboard, calendar, and a chat feature.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Nest.js", "PostgreSQL"],
      github: "#",
      live: "https://web.cardlinx.app/",
      image: "/images/cardlinx-web.png"
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website to showcase my projects and skills.",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/shakil-ahmmed-se/Protfolio",
      live: "https://shakil-ahmmed-se.vercel.app/",
      image: "/images/portfolio.png"
    },
    {
      title: "E-Commerce Admin Dashboard",
      description: "An admin dashboard for managing an e-commerce platform, including product management, order tracking, and user management.",
      tags: ["React", "Redux", "Tailwind CSS"],
      github: "#",
      live: "#",
      image: "/images/ecommerce-admin.png"
    }
    
  ];

  // Show only 4 projects initially, or all if showAll is true
  const displayedProjects = showAll ? allProjects : allProjects.slice(0, 4);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium px-4 py-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white backdrop-blur-md">
            My Work
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-6">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-400">Projects</span>
          </h2>
          <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-md border border-gray-700/50 hover:border-purple-500/50 transition-all shadow-lg hover:shadow-purple-500/20"
            >
              <div className="h-60 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent z-10" />
                <Image
                  src={project.image} 
                  alt={project.title}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6 relative z-20">
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-purple-900/30 text-purple-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a 
                    href={project.github} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-700/50 hover:bg-gray-600/50 text-white transition-all"
                  >
                    <FiGithub /> Code
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white transition-all"
                  >
                    <FiExternalLink /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button
            onClick={toggleShowAll}
            className="inline-block px-8 py-3 rounded-full bg-gray-800 hover:bg-gray-700 text-white font-medium transition-all"
          >
            {showAll ? 'Show Less' : 'View All Projects'}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;