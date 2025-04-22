import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import backgroundfoto from "../assets/background/ifes_serra.jpg";
import { useLanguage } from "../context/LanguageContext";

const Hero = () => {
  const {language, toggleLanguage} = useLanguage()
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 ${styles.distanceHeroHead}  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        {/* <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div> */}

        <div className="flex justify-center flex-col w-full">
          <h1 className={`${styles.heroHeadText} text-[#3E1F0F] text-center`}>
          {language === 'pt' ? (<>Olá, Eu sou <span className='text-[#915eff]'>Marllon</span></>) : (<>Hi, I'm <span className='text-[#915eff]'>Marllon</span></>)}
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-[#3E1F0F] text-center`}>
            {(language === "pt" ? 'Eu desenvolvo Interfaces de Usuário e Aplicações Web' : 'I develop user interfaces and web applications')}
          </p>
        </div>
      </div>
      <div className="absolute flex justify-center items-center w-full  lg:bottom-40 md:bottom-32 sm:bottom-40 bottom-40">
          {/* <ComputersCanvas /> */}
          <div className="lg:w-[35%] md:w-[60%] sm:w-[70%] w-[90%] ">
            <img className="rounded-xl green-pink-gradient p-[1.5px]" src={backgroundfoto} alt="foto da instituição federal do Espirito santo Campus Serra"/>
          </div>
          
      </div>
      

      <div className='absolute xs:bottom-10 bottom-20 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
