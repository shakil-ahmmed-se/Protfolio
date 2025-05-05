"use client";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Github,
  Linkedin,
  Twitter,
  Download,
  Facebook,

} from "lucide-react";

import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const socialLinks = [
    { icon: <Github size={20} />, url: "https://github.com/shakil-ahmmed-se" },
    { icon: <Linkedin size={20} />, url: "https://www.linkedin.com/in/shakil-ahmmed-se/" },
    { icon: <Facebook size={20} />, url: "https://www.facebook.com/shakil.ahmmedbd.3" },
  ];

  return (
    <section
      id="home"
      className="relative pt-10 min-h-screen flex items-center justify-center bg-gray-900 overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 overflow-hidden"
      >
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute rounded-full bg-purple-900/30"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </motion.div>

      <div className="container mx-auto px-6 py-24 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center justify-between gap-12"
        >
          {/* Left content */}
          <div className="lg:w-1/2 order-2 md:order-1">
            <motion.div variants={itemVariants} className="mb-6">
              <span className="text-sm font-medium px-4 py-1 rounded-full bg-purple-900/30 text-purple-200 backdrop-blur-md">
                Full Stack Developer
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="font-bold text-white mb-6"
            >
              <motion.span className="text-xl md:text-2xl mr-2">
                Hi
                <motion.span
                  initial={{ rotate: 0 }}
                  animate={{ rotate: [0, 20, -10, 20, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                  className="inline-block origin-bottom-left ml-2"
                >
                  👋
                </motion.span>
              </motion.span>
              <span className="text-xl md:text-2xl ">
                {" "}
                , I&apos;m <br />
              </span>
              <span className="text-purple-300 text-xl md:text-4xl mt-4">
                Shakil Ahmmed
              </span>
              <br />
              <span className="text-transparent text-xl md:text-4xl bg-clip-text bg-gradient-to-r from-purple-300 to-pink-400">
                Full Stack Developer
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-300 mb-8 max-w-lg"
            >
              I build exceptional digital experiences with modern web
              technologies. Currently specializing in React, Next.js, and
              Node.js applications.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <button onClick={() => window.open("https://github.com/shakil-ahmmed-se")} className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all cursor-pointer">
                View My Work <ArrowRight size={18} />
              </button>

              <Link target="_blank" href={`https://drive.google.com/file/d/1b-iFyjheqQU4qMHyP7UX_rZ392nWMsJB/view?usp=sharing`}>
              <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-gray-800/80 text-white font-medium hover:bg-gray-700/80 backdrop-blur-md transition-all cursor-pointer">
            
                  Download CV <Download size={18} />
               
              </button>
              </Link>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-4 mt-8">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-800/80 text-purple-200 hover:bg-gray-700/80 backdrop-blur-md transition-all"
                >
                  {link.icon}
                </a>
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="lg:w-1/2 flex justify-center mt-10 lg:mt-0 order-1 md:order-2"
          >
            <div className="relative w-72 h-72  md:w-11/12 md:h-11/12">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-400 blur-xl opacity-30 animate-pulse" />

              <div className="relative rounded-full overflow-hidden border-4 border-gray-800/50 backdrop-blur-md">
                <Image
                  src="/images/project.png"
                  alt="Profile"
                  width={1000}
                  height={1000}
                  className="w-full h-11/12 object-cover rounded-full"
                  priority
                />
              </div>

              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute -z-10 inset-0 border-2 border-dashed border-purple-900/50 rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: [0, 1, 0],
          y: [20, 0, -20],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-purple-200/50"
      >
        <div className="flex flex-col items-center">
          <span className="mb-2 text-sm">Scroll down</span>
          <div className="w-4 h-8 border-2 border-purple-200/30 rounded-full">
            <motion.div
              animate={{
                y: [0, 4, 0],
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-1 h-1 bg-purple-200 rounded-full mx-auto mt-1"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
