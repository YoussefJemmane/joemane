import React from 'react';
import { motion } from 'framer-motion';

const ExperienceItem = ({ title, company, date, location, description }) => (
  <motion.div
    className="mb-8 flex flex-col md:flex-row"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <motion.div
      className="flex-shrink-0 w-full md:w-1/4 mb-4 md:mb-0"
      whileHover={{ scale: 1.05 }}
    >
      <h3 className="text-lg font-semibold text-[#D84747]">{company}</h3>
      <p className="text-sm text-gray-600">{date}</p>
      <p className="text-sm text-gray-600">{location}</p>
    </motion.div>
    <motion.div
      className="md:ml-8 md:border-l-2 md:border-gray-200 md:pl-8 flex-grow"
      whileHover={{ x: 10 }}
    >
      <h4 className="text-xl font-bold mb-2">{title}</h4>
      <ul className="list-disc list-inside text-gray-700">
        {description.map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.2 }}
          >
            {item}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  </motion.div>
);

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer Intern",
      company: "Ibn Tofail University",
      date: "12/2023 – 05/2024",
      location: "Kenitra, Morocco",
      description: [
        "Developed from scratch a laboratories budget management app."
      ]
    },
    {
      title: "Back End Developer Intern",
      company: "FeverTokens",
      date: "11/2023 – 05/2024",
      location: "Paris, France (Remotely)",
      description: [
        "Developed a dynamic calendar component that allows users to select dates and stores them in a table.",
        "Created the FeverTokens Package-Oriented Transpiler Demo, converting smart contracts into packages."
      ]
    },
    {
      title: "Full Stack Developer Intern",
      company: "Marsa Maroc",
      date: "03/2023 – 04/2023",
      location: "Casablanca, Morocco",
      description: [
        "Built a responsive full stack web application for managing ships, workers and reporting issues."
      ]
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center text-[#D84747]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h2>
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} {...exp} />
        ))}
      </div>
    </section>
  );
};

export default Experience;