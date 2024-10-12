'use client'

import React from 'react';
import { SectionTitle } from '../components/SectionTitle';
import { Skills } from '../components/Skills';
import model_icon from '../../../public/model-icon.png';
import data_analysis_icon from '../../../public/data-analysis-icon.png';
import tensorflow_icon from '../../../public/tensorflow-icon.png';
import python_icon from '../../../public/python-icon.png';
import scikit_icon from '../../../public/scikit-icon.png';
import Image from 'next/image';

export const AboutSection = () => {
  return (
    <section id='about' className='container px-10 pt-20 mb-20 xl:mb-56 relative'>
        <div className='mb-14'
            data-aos="fade-right"
            data-aos-easing="ease-out-cubic"
             data-aos-duration="1000">
        <SectionTitle title='ABOUT'/>
        </div>

        <div className='flex flex-col gap-10 lg:gap-0 lg:flex-row justify-center'>

          <div className='text-customWhite text-sm 2xl:text-base flex flex-col gap-5 text-center lg:text-left lg:gap-0 justify-between lg:pr-8 xl:pr-32'
          data-aos="fade-right"
          data-aos-easing="ease-out-cubic"
           data-aos-duration="1000">
            <p>Hi, I'm Tobi Oladele, a machine learning engineer and SQL expert with 3 years of experience turning data into actionable insights and building intelligent systems and models.</p>
            <p>I specialize in areas like NLP, deep learning, and predictive modeling, as well as SQL that solve complex problems and drive real-world impact. My approach is centered on using data to create scalable, efficient solutions that adapt to changing environments and continuously improve performance. I am passionate about pushing the boundaries of AI to deliver innovative results.</p>
          </div>
            
          <div className="gap-6 relative z-10"
          data-aos="fade-left"
          data-aos-easing="ease-out-cubic"
           data-aos-duration="1000">

            <div className='flex flex-col md:flex-row gap-6 xl:gap-12 mb-6 items-center justify-center'>
                {/* Instance 1: Custom icon and unique hover effect */}
  <Skills
    icon={model_icon}
    text="MODEL DEVELOPMENT"
    hoverEffect={{
      scale: 1.12,
      y: -5,
      boxShadow: "0px 6px 30px rgba(0, 51, 204, 0.5)",
      transition: { duration: 0.3 },
    }}
  />

  {/* Instance 2: TensorFlow icon with unique hover effect */}
  <Skills
    icon={tensorflow_icon}
    text="TENSORFLOW"
    hoverEffect={{
      scale: 1.12,
      y: -5,
      boxShadow: "0px 6px 30px rgba(0, 51, 204, 0.5)",
      transition: { duration: 0.3 },
    }}
  />

            </div>


            <div className='flex  flex-col md:flex-row gap-6 xl:gap-12 mb-6 items-center justify-center'>
      
  {/* Instance 3: Python icon with unique hover effect */}
  <Skills
    icon={python_icon}
    text="PYTHON LANGUAGE"
    hoverEffect={{
      scale: 1.12,
      y: -5,
      boxShadow: "0px 6px 30px rgba(0, 51, 204, 0.5)",
      transition: { duration: 0.3 },
    }}
    />

                  
  {/* Instance 4: Data Analysis icon with unique hover effect */}
  <Skills
    icon={data_analysis_icon}
    text="DATA ANALYSIS"
    hoverEffect={{
      scale: 1.12,
      y: -5,
      boxShadow: "0px 6px 30px rgba(0, 51, 204, 0.5)",
      transition: { duration: 0.3 },
    }}
  />
            </div>


            <div className='flex gap-6 xl:gap-12 items-center justify-center'>
  {/* Instance 5: Scikit-Learn icon with unique hover effect */}
  <Skills
    icon={scikit_icon}
    text="SCIKIT-LEARN"
    hoverEffect={{
      scale: 1.12,
      y: -5,
      boxShadow: "0px 6px 30px rgba(0, 51, 204, 0.5)",
      transition: { duration: 0.3 },
    }}
  />
            </div>

</div>


        </div>

        <div className='w-[65rem] h-[65rem] absolute -left-[45rem] -top-56 select-none'><Image src='/radial-blur.png' alt='' width={1000} height={1000} className='w-full h-full object-contain'/></div>
        <div className='w-[45rem] h-[45rem] absolute -right-[25rem] -bottom-72 select-none'><Image src='/radial-blur.png' alt='' width={1000} height={1000} className='w-full h-full object-contain'/></div>
    </section>
  );
};
