import React from "react";
import { Tilt } from 'react-tilt';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services, servicos } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { useLanguage } from "../context/LanguageContext";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-[#FFEEDD] text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  const {language, toggleLanguage} = useLanguage();
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{language === "pt" ? "Introdução" : "Introduction"}</p>
        <h2 className={styles.sectionHeadText}>{language === "pt" ? "visão geral" : "Overview"}</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-[#cacaca] text-[20px] max-w-3xl leading-[30px]'
      >
        {language === "pt" ? "Sou um desenvolvedor de software qualificado, com experiência em JavaScript e especialização em tecnologias como Next, React, Node.js e WordPress. Aprendo rápido e colaboro de perto com os clientes para criar soluções eficientes, escaláveis e fáceis de usar, que resolvem problemas do mundo real. Vamos trabalhar juntos para dar vida às suas ideias!" : "I'm a skilled software developer with experience in JavaScript, and expertise in technologies like Next ,React, Node.js and wordpress. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!"}
        
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {(language === "pt" ? servicos : services).map((service, index) => (
          <ServiceCard key={index} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
