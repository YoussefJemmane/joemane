import { motion } from 'framer-motion';
import EducationItem from '../components/EducationItem';

const Education = () => {
    const educations = [
      {
        degree: "Bachelor's Degree in Software Engineering and Information Systems",
        institution: "ENSA, Ibn Tofail University",
        date: "",
        location: "Kenitra, Morocco",
        details: [
         
        ]
      }
      // You can add more education items here if needed
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
            Education
          </motion.h2>
          {educations.map((edu, index) => (
            <EducationItem key={index} {...edu} />
          ))}
        </div>
      </section>
    );
  };
  
  export default Education;