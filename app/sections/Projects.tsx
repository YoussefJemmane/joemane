import React from 'react';
import { motion } from 'framer-motion';
import project1  from "@/app/assets/project1.png"
import project2  from "@/app/assets/project2.png"
import project3  from "@/app/assets/project3.png"
import ProjectCard from '../components/ProjectItem';


const Projects = () => {
  const projectsData = [
    {
      image: project3,
      projectName: "Afnane Photography",
      projectLink: "https://www.afnanephotography.com/",
      projectDescription: "A static website for Afnane Photography, a photography studio specializing in personalized and unique photo sessions.",
      projectTech: ["Next.js", "TailwindCSS"],
      projectExternalLinks: {
        github: "https://github.com/YoussefJemmane/AfnanePhotography",
      },
    },
    {
      image: project1,
      projectName: "CV Builder App",
      projectLink: "",
      projectDescription: "A user-friendly web application that simplifies and enhances the resume creation process.",
      projectTech: ["React", "Express", "MongoDB", "Node.js", "Tailwind", "DaisyUI", "Alpine.js", "Puppeteer"],
      projectExternalLinks: {
        github: "https://github.com/YoussefJemmane/CV_Builder",
        externalLink: "",
      },
    },
    {
      image: project2,
      projectName: "Rent Cars App",
      projectLink: "",
      projectDescription: "A user-friendly web application that allows you to rent a car and manage your reservations there is also an admin panel to manage the cars and reservations.",
      projectTech: ["Laravel", "Breeze", "Tailwind"],
      projectExternalLinks: {
        github: "https://github.com/YoussefJemmane/Location_voiture",
        externalLink: "",
      },
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
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;