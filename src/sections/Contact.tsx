import Button from "@/components/Button";
import React from "react";
import { motion } from "framer-motion";
function Contact() {
  return (
    <motion.div
      className="contact"
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <h2 className="contact-title">What&apos;s Next?</h2>
      <h2 className="contact-sub-title">Get In Touch</h2>
      <p className="contact-text">
      I am actively looking for new job opportunities. If you have any job openings or if you would like to discuss potential employment possibilities, please feel free to reach out to me. I am open to exploring new opportunities and would be happy to hear from you.
      </p>
      <div className="contact-cta">
        <Button link="mailto:youssef.jemmane@outlook.com" text="Say Hello" />
      </div>
    </motion.div>
  );
}

export default Contact;
