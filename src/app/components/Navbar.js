'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

export const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Track mobile menu state

  const handleScroll = () => {
    const scrollY = window.scrollY;

    if (scrollY > lastScrollY) {
      setIsVisible(false); // Scrolling down
    } else {
      setIsVisible(true); // Scrolling up
    }
    setLastScrollY(scrollY);
  };

  const scrollToSection = (e, index) => {
    e.preventDefault();
    const target = document.getElementById(e.target.getAttribute('href').substring(1));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveIndex(index); // Set active index when clicked
    setIsMenuOpen(false); // Close menu on section click
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionIndex = Array.from(sections).indexOf(entry.target);
            setActiveIndex(sectionIndex);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 border-b bg-black z-50 border-customBlue transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className='container px-10 py-4 flex items-center justify-between'>
        {/* Logo */}
        <div
          className='overflow-hidden flex items-center justify-center w-36 h-10 cursor-pointer'
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <Image src='/logo.png' alt='logo' width={1000} height={1000} className='object-contain w-full h-full' />
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div className='lg:hidden'>
          {isMenuOpen ? (
            <AiOutlineClose
              size={30}
              className='text-customBlue cursor-pointer transition-transform duration-300 ease-in-out'
              onClick={() => setIsMenuOpen(false)}
            />
          ) : (
            <AiOutlineMenu
              size={30}
              className='text-customBlue cursor-pointer transition-transform duration-300 ease-in-out'
              onClick={() => setIsMenuOpen(true)}
            />
          )}
        </div>

        {/* Navigation Links (Desktop) */}
        <ul className='text-customBlue flex text-sm font-medium hidden lg:flex'>
          {['home', 'about', 'selected-works', 'contact'].map((item, index, array) => (
            <li
              key={index}
              className={`py-1 pl-10 ${
                index !== array.length - 1 ? 'border-r-2 pr-10 border-customBlue' : ''
              } cursor-pointer ${
                activeIndex === index ? 'text-customWhite text-glow' : 'text-customBlue'
              }`}
              onClick={(e) => scrollToSection(e, index)}
              href={`#${item}`}
            >
              {item.toUpperCase()}
            </li>
          ))}
        </ul>
      </div>

      {/* Dropdown Menu for Small Screens */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-4 overflow-hidden'
        } bg-black`}
      >
        <ul className='flex flex-col text-customBlue text-sm font-medium px-10 py-4'>
          {['home', 'about', 'selected-works', 'contact'].map((item, index) => (
            <li
              key={index}
              className={`py-3 cursor-pointer ${
                activeIndex === index ? 'text-customWhite text-glow' : 'text-customBlue'
              }`}
              onClick={(e) => scrollToSection(e, index)}
              href={`#${item}`}
            >
              {item.toUpperCase()}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
