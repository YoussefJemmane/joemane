import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Menu = ({ isOpen, onClose, sections }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="absolute top-16 right-4 w-48 bg-white shadow-lg rounded-md overflow-hidden z-10"
        >
          <ul className="py-2">
            {sections.map((section) => (
              <li key={section.name}>
                <a
                  href={section.href}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.querySelector(section.href);
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                    onClose();
                  }}
                >
                  {section.name}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Menu;