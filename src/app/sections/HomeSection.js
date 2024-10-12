import React from 'react'

export const HomeSection = () => {
  return (
    <section id='home' className='overflow-hidden'>
      <div  className='bg-[url("/hero-bg.png")] bg-cover bg-center h-screen w-screen flex flex-col items-center justify-center gap-5 md:gap-6 lg:gap-8 2xl:gap-16 pt-20'>
        <p  data-aos="zoom-out" data-aos-duration="700" data-aos-easing="ease-out-cubic" className='text-customWhite flex md:flex-row md:gap-3 lg:gap-4 xl:gap-5 2xl:gap-7 flex-col text-center text-3xl md:text-4xl lg:text-6xl 2xl:text-8xl font-bold md:font-semibold'>HI, MY NAME IS <span className='text-customBlue'>TOBI OLADELE</span></p>
        <p data-aos="zoom-out"  data-aos-duration="700" data-aos-easing="ease-out-cubic" className='text-customWhite text-sm text-center md:text-lg lg:text-2xl 2xl:text-4xl font-medium'>A MACHINE LEARNING AND DATA SCIENCE ENGINEER</p>
        <p data-aos="zoom-out"  data-aos-duration="700" data-aos-easing="ease-out-cubic" className='text-customBlue text-xs md:text-base lg:text-lg 2xl:text-3xl font-medium'>AND THIS IS MY PORTFOLIO</p>
      </div>
    </section>
  )
}
