"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";

const AboutSection = () => {
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

  return (
    <section id="about" className="relative py-20 bg-gray-900 overflow-hidden">
      {/* Subtle floating elements */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.2 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="absolute inset-0 overflow-hidden"
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, 50, 0],
              y: [0, 25, 0],
            }}
            transition={{
              duration: Math.random() * 30 + 15,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute rounded-full bg-purple-900/20"
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="text-sm font-medium px-4 py-1 rounded-full bg-purple-900/30 text-purple-200 backdrop-blur-md">
              About Me
            </span>
            <motion.h2 className="text-4xl md:text-5xl font-bold text-white mt-6 mb-8">
              Crafting{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-400">
                Digital Experiences
              </span>
            </motion.h2>
          </motion.div>

          <motion.div variants={itemVariants} className="text-center">
            <motion.p
              className="text-xl md:text-2xl leading-relaxed text-gray-300 mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              I&apos;m a{" "}
              <span className="text-purple-300 font-medium">
                passionate developer
              </span>{" "}
              with a focus on creating immersive digital experiences. My work
              blends technical precision with creative vision to build solutions
              that resonate with users.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-gray-800/50 backdrop-blur-md p-8 rounded-xl border border-gray-700/50 hover:border-purple-500/30 transition-all"
              >
                <div className="text-purple-300 text-4xl mb-4">{"{"}</div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  My Philosophy
                </h3>
                <p className="text-gray-300">
                  I believe in clean, efficient code that delivers exceptional
                  user experiences. Every project is an opportunity to innovate
                  and push boundaries.
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-gray-800/50 backdrop-blur-md p-8 rounded-xl border border-gray-700/50 hover:border-purple-500/30 transition-all"
              >
                <div className="text-purple-300 text-4xl mb-4">{"}"}</div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  My Approach
                </h3>
                <p className="text-gray-300">
                  From concept to deployment, I focus on creating scalable
                  solutions with attention to detail and performance
                  optimization at every stage.
                </p>
              </motion.div>
            </div>

            <motion.div
              className="mt-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Link target="_blank" href={`https://wa.me/+8801994636030`}>
                <button className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all cursor-pointer text-lg">
                 <span className="flex items-center gap-2">
                 <BsWhatsapp />
                 Let&apos;s Work Together
                 </span>
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
