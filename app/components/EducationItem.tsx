import { motion } from 'framer-motion';

const EducationItem = ({ degree, institution, date, location, details }) => (
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
      <h3 className="text-lg font-semibold text-[#D84747]">{institution}</h3>
      <p className="text-sm text-gray-600">{date}</p>
      <p className="text-sm text-gray-600">{location}</p>
    </motion.div>
    <motion.div
      className="md:ml-8 md:border-l-2 md:border-gray-200 md:pl-8 flex-grow"
      whileHover={{ x: 10 }}
    >
      <h4 className="text-xl font-bold mb-2">{degree}</h4>
      {details && (
        <ul className="list-disc list-inside text-gray-700">
          {details.map((item, index) => (
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
      )}
    </motion.div>
  </motion.div>
);

export default EducationItem;