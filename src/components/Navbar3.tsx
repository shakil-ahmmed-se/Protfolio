"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar3 = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Projects", id: "projects" },
    { name: "Skills", id: "skills" },
    { name: "About", id: "about" },
    { name: "Contact", id: "contact" },
  ];

  const handleNavClick = (id: string) => {
    if (isMenuOpen) {
      setIsMenuOpen(false); // Close the mobile menu first
  
      // Delay scroll until after menu collapse animation finishes (300ms)
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
          window.history.replaceState(null, '', `#${id}`);
        }
      }, 350); // Match AnimatePresence exit duration
    } else {
      // Desktop or already closed menu
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.replaceState(null, '', `#${id}`);
      }
    }
  };
  

  const itemVariants = {
    closed: { opacity: 0, y: -20 },
    open: { opacity: 1, y: 0 },
  };

  const sideVariants = {
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: 1,
      },
    },
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-shrink-0"
          >
            <button
              onClick={() => handleNavClick("home")}
              className="flex items-center"
            >
              <span className="text-xl font-bold text-white">
                Shakil Ahmmed
              </span>
            </button>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <motion.div
                key={link.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={() => handleNavClick(link.id)}
                  className={`relative px-3 py-2 cursor-pointer text-base font-medium transition-colors ${
                    pathname === `#${link.id}`
                      ? "text-white"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.name}
                  {pathname === `#${link.id}` && (
                    <motion.span
                      layoutId="activeLink"
                      className="absolute left-0 top-full h-0.5 w-full bg-white"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              </motion.div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-4">
            {/* <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full text-white focus:outline-none"
            >
              <Moon size={20} />
            </motion.div> */}

            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-900 overflow-hidden"
          >
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
              className="px-4 pt-2 pb-6 space-y-2"
            >
              {navLinks.map((link) => (
                <motion.div
                  key={link.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative"
                >
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className={`block w-full text-left px-3 py-3 text-base font-medium transition-colors ${
                      pathname === `#${link.id}`
                        ? "text-white"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {link.name}
                    {pathname === `#${link.id}` && (
                      <motion.span
                        layoutId="activeLink"
                        className="absolute left-3 bottom-1 h-0.5 w-[calc(100%-1.5rem)] bg-white"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                  </button>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar3;
