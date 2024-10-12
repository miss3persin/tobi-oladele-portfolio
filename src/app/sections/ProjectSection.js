'use client'

import React, { useState } from 'react';
import { CardProjects } from '../components/CardProjects';
import { SectionTitle } from '../components/SectionTitle';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const mlprojectsData = [
    {
        imageUrl: 'https://images.unsplash.com/photo-1523284998774-f6d3960be911?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Potato-Leaf-Classification-Model',
        description: 'Developed a machine learning model to classify different diseases affecting potato leaves using image data. This project helps farmers identify issues early, preventing crop losses and improving yield.',
        githubLink: 'https://github.com/Tobi-Oladele/Potato-Leaf-Classification-Model'
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1516239482977-b550ba7253f2?q=80&w=1388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Face-Recognition',
        description: 'Built an advanced facial recognition system capable of accurately identifying individuals in real-time. The model was trained to handle various lighting conditions and facial angles for security applications.',
        githubLink: 'https://github.com/Tobi-Oladele/face-recognition'
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1563723103083-482d8c4e85c6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Breast Cancer',
        description: 'Created a predictive model for early detection of breast cancer based on medical data. This model assists healthcare professionals in diagnosing cancer at earlier stages, improving patient outcomes.',
        githubLink: 'https://github.com/Tobi-Oladele/Breast-Cancer'
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1511452885600-a3d2c9148a31?q=80&w=1442&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'House-Prices',
        description: 'A regression-based model to predict house prices using a combination of location, size, and other property features. This project aimed to help real estate professionals make more informed pricing decisions.',
        githubLink: 'https://github.com/Tobi-Oladele/House-prices'
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1489389944381-3471b5b30f04?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Tree-Censure',
        description: 'Developed a decision tree model to analyze and categorize complex datasets with high accuracy. This project focused on making sense of large-scale data for better decision-making in various industries.',
        githubLink: 'https://github.com/Tobi-Oladele/Tree-Censure'
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Fashion-Generator',
        description: 'Created a generative model capable of producing new and unique fashion designs based on existing trends. This project explores the creative intersection between machine learning and fashion design.',
        githubLink: 'https://github.com/Tobi-Oladele/Fashion-generator'
    }
];

const sqlprojectsData = [
    // {
    //     imageUrl: 'https://images.unsplash.com/photo-1523284998774-f6d3960be911?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    //     title: 'Potato-Leaf-Classification-Model',
    //     description: 'Developed a machine learning model to classify different diseases affecting potato leaves using image data. This project helps farmers identify issues early, preventing crop losses and improving yield.',
    //     githubLink: 'https://github.com/miss3persin/my-nextjs-template'
    // },
    // {
    //     imageUrl: 'https://images.unsplash.com/photo-1514516870000-b658cb12c1dc?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    //     title: 'Tomato Disease Prediction',
    //     description: 'Created a model to predict diseases in tomato plants using deep learning techniques on leaf images.',
    //     githubLink: 'https://github.com/miss3persin/my-nextjs-template'
    // }
];

export const ProjectSection = () => {
    const [activeCategory, setActiveCategory] = useState('ML');

    const handleCategoryChange = (category) => {
        setActiveCategory(category);
    };

    return (
        <section id='selected-works' className='overflow-hidden pt-20 relative'>
            <div className='bg-[url("/project-bg.png")] bg-cover bg-center h-auto w-auto'>
            <div className='container px-10'>
            <div className='flex md:flex-row flex-col-reverse md:gap-0 gap-10 justify-between mb-14'>
                <div className='flex gap-16 text-xl lg:text-2xl font-semibold items-center justify-center relative z-10'
                    data-aos="fade-right"
                    data-aos-easing="ease-out-cubic"
                     data-aos-duration="1000">
                    <p
                        className={`cursor-pointer ${activeCategory === 'ML' ? 'text-customWhite text-glow' : 'text-customBlue'}`}
                        onClick={() => handleCategoryChange('ML')}
                    >
                        ML
                    </p>
                    <p
                        className={`cursor-pointer ${activeCategory === 'SQL' ? 'text-customWhite text-glow' : 'text-customBlue'}`}
                        onClick={() => handleCategoryChange('SQL')}
                    >
                        SQL
                    </p>
                </div>
                <div     data-aos="fade-left"
    data-aos-easing="ease-out-cubic"
     data-aos-duration="1000">
                <SectionTitle title='SELECTED WORKS' />
                </div>
            </div>

            <AnimatePresence mode="wait" > 
            <motion.div
    key={activeCategory} // Use key to trigger re-mount
    initial={{ opacity: 0, y: 30 }} // Start from slightly below
    animate={{ opacity: 1, y: 0 }} // Animate to original position
    exit={{ opacity: 0, y: -30 }} // Exit slightly upwards
    transition={{ type: 'spring', stiffness: 200, damping: 30 }} // Spring transition for a smooth effect
    className="flex flex-wrap justify-center md:justify-between gap-4 relative z-10"
    data-aos="fade-up"
    data-aos-easing="ease-out-cubic"
     data-aos-duration="1000"
>
    {activeCategory === 'ML' && mlprojectsData.length > 0 ? (
        mlprojectsData.map((project, index) => (
            <CardProjects
                key={index}
                imageUrl={project.imageUrl}
                title={project.title}
                description={project.description}
                githubLink={project.githubLink}
            />
        ))
    ) : activeCategory === 'ML' ? (
        <h2 className="text-5xl md:text-7xl text-center flex items-center justify-center font-bold text-customWhite h-72 md:h-96 w-full text-glow">Coming Soon</h2>
    ) : null}

    {activeCategory === 'SQL' && sqlprojectsData.length > 0 ? (
        sqlprojectsData.map((project, index) => (
            <CardProjects
                key={index}
                imageUrl={project.imageUrl}
                title={project.title}
                description={project.description}
                githubLink={project.githubLink}
            />
        ))
    ) : activeCategory === 'SQL' ? (
        <h2 className="text-5xl md:text-7xl text-center flex items-center justify-center font-bold text-customWhite h-72 md:h-96 w-full text-glow">COMING SOON</h2>
    ) : null}
</motion.div>

            </AnimatePresence>
            </div>
        </div>

        {/* <div className='w-[40rem] h-[40rem] absolute -left-[25rem] -bottom-16 select-none'><Image src='/radial-blur.png' alt='' width={1000} height={1000} className='w-full h-full object-contain'/></div> */}
        </section>
    );
};
