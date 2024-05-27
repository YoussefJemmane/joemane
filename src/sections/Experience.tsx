import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
function Experience() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector<HTMLElement>(".underline");
      underline!.style.top = `${selected * 2.5}rem`;
    };
    transformSelected();
  }, [selected]);

  const expereinces = [
    {
      name:"Ibn Tofail University",
      role:"Full Stack Intern",
      url:"https://www.uit.ac.ma/",
      start:"October 2023",
      end:"May 2024",
      shortDescription:[
      " Developed from scratch a laboratories budget management app. using Laravel, Livewire, Chart.js, Laravel Breeze, OAuth, Spatie, FastExcel, Laravel Buil-in Email notification"
  ]
  },

{
    name:"FeverTokens",
    role:"Back End Intern",
    url:"https://www.fevertokens.io/",
    start:"13 September 2023",
    end:"13 May 2024",
    shortDescription:[
    "Developed a dynamic calendar component using React.js that allows users to select dates and stores them in a table using Unix timestamps.",
    "Created the FeverTokens Package-Oriented Transpiler Demo, converting smart contracts into packages using Typescript, Regex and Solidity."
]
},
    {
      name: "Marsa Maroc",
      role: "Full Stack Intern",
      url: "https://www.marsamaroc.co.ma",
      start: "01 March 2023",
      end: "01 April 2023",
      shortDescription: [
        "Built a responsive full stack web application for managing ships, workers and reporting issues using Laravel, Breeze and Tailwind CSS",
        
      ],
    },
    
    
    
  ];
  return (
    <motion.div
      className="experience"
      id="experience"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>Where I&apos;ve Worked</h2>
      </div>
      <div className="container">
        <ul className="exp-slider">
          <div className="underline"></div>
          {expereinces.map((expereince, index) => {
            return (
              <li
                className={`exp-slider-item ${
                  index === selected && "exp-slider-item-selected"
                }`}
                onClick={() => setSelected(index)}
                key={expereince.name}
              >
                <span>{expereince.name}</span>
              </li>
            );
          })}
        </ul>
        <div className="exp-details">
          <div className="exp-details-position">
            <h3>
              <span>{expereinces[selected].role}</span>
              <span className="exp-details-position-company">
                &nbsp;@&nbsp;
                <Link href={expereinces[selected].url} className="link">
                  {expereinces[selected].name}
                </Link>
              </span>
            </h3>
            <p className="exp-details-range">
              {expereinces[selected].start} - {expereinces[selected].end}
            </p>
            <ul className="exp-details-list">
              {expereinces[selected].shortDescription.map(
                (description, index) => (
                  <li key={index} className="exp-details-list-item">
                    {description}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
