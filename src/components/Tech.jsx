import React from "react";
import { technologies } from "../constants";


const Tech = () => {
  return (
    <section className='flex relative whitespace-nowrap logos h-96 overflow-hidden items-center '>
      <div className="animate-slides">
      {technologies.map((technology, index) => (
        <div className=' w-28 h-28 inline-block ' key={index}>
          <img className="opacity-50"  src={technology.icon} alt="tech" />
        </div>
      ))}
      </div>
    </section>
  );
};

export default Tech
