import React from "react";
import { motion } from "framer-motion";
import ExperienceItem from "../components/ExperienceItem";

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer Intern",
      company: "Ibn Tofail University",
      date: "12/2023 – 05/2024",
      location: "Kenitra, Morocco",
      description: [
        "Developed from scratch a laboratories budget management app.",
      ],
    },
    {
      title: "Back End Developer Intern",
      company: "FeverTokens",
      date: "11/2023 – 05/2024",
      location: "Paris, France (Remotely)",
      description: [
        "Developed a dynamic calendar component that allows users to select dates and stores them in a table.",
        "Created the FeverTokens Package-Oriented Transpiler Demo, converting smart contracts into packages.",
      ],
    },
    {
      title: "Full Stack Developer Intern",
      company: "Marsa Maroc",
      date: "03/2023 – 04/2023",
      location: "Casablanca, Morocco",
      description: [
        "Built a responsive full stack web application for managing ships, workers and reporting issues.",
      ],
    },
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
