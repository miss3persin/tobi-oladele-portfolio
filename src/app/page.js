import React from 'react'
import { HomeSection } from './sections/HomeSection'
import { ProjectSection } from './sections/ProjectSection'
import { AboutSection } from './sections/AboutSection'
import { Navbar } from './components/Navbar'
import { ContactSection } from './sections/ContactSection'
import { Footer } from './components/Footer'


const page = () => {
  return (
    <div className='bg-black'>
      <Navbar/>
     <HomeSection/>
     <AboutSection/>
     <ProjectSection/>
     <ContactSection/>
     <Footer/>
  </div>
  )
}

export default page