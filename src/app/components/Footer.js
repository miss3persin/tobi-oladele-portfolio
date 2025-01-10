'use client'

import Image from 'next/image'
import React from 'react'

export const Footer = () => {

  return (
    <footer className='border-t border-customBlue'>
        <div className='items-center flex flex-col md:flex-row justify-center md:gap-0 gap-3 md:justify-between container px-10 py-4'>
            <div>
            <div className='overflow-hidden flex items-center justify-center w-28 md:w-36 h-10 cursor-pointer' onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <Image src='/logo.png' alt='logo' width={1000} height={1000} className='object-contain w-full h-full' />
        </div>
            </div>

            <div><p className='text-customBlue text-xs md:text-sm'>2019 - 2025</p></div>
        </div>
    </footer>
  )
}
