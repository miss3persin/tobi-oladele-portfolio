'use client'

import React, { useState } from 'react';
import { CardProjects } from '../components/CardProjects';
import { SectionTitle } from '../components/SectionTitle';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const mlprojectsData = [
    {
        imageUrl: 'https://plus.unsplash.com/premium_photo-1681842855252-9216825229d7?q=80&w=1662&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Object Recognition',
        description: 'Developed an object recognition system using ResNet50, achieving high accuracy in detecting and classifying objects across diverse categories. Ideal for real-time and automated applications.',
        githubLink: 'https://github.com/Tobi-Oladele/ResNet50-Object-Recognition'
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1516239482977-b550ba7253f2?q=80&w=1388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Face Recognition',
        description: 'Designed a face recognition model using a Siamese neural network to identify and verify individuals by comparing facial features, ensuring robust security and authentication accuracy.',
        githubLink: 'https://github.com/Tobi-Oladele/face-recognition-model'
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1563723103083-482d8c4e85c6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Breast Cancer',
        description: 'Built a neural network model for breast cancer classification, leveraging patient data to accurately predict malignancy or benignity, aiding early detection and improving diagnostic outcomes.',
        githubLink: 'https://github.com/Tobi-Oladele/Breast-cancer-neural-network-classification'
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1600119330210-e7a3f5a0d079?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Sonar VS Mine Dectection',
        description: 'Developed a sonar-based classification model to distinguish between rocks and mines using machine learning, enhancing underwater object detection for safety and exploration.',
        githubLink: 'https://github.com/Tobi-Oladele/sonar-rock-vs-mine-detection'
    },
    {
        imageUrl: 'https://plus.unsplash.com/premium_photo-1701192908221-d0ae92edb257?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Sales Trend Prediction',
        description: 'Created a sales trend prediction model using time series analysis to forecast future sales, helping businesses optimize inventory, plan strategies, and boost profitability.',
        githubLink: 'https://github.com/Tobi-Oladele/sales-trend-prediction'
    },
    {
        imageUrl: 'https://plus.unsplash.com/premium_photo-1682310144714-cb77b1e6d64a?q=80&w=1512&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Customer Segmentation',
        description: 'Implemented a customer segmentation model using clustering algorithms to group customers by behavior and preferences, enabling targeted marketing and personalized experiences.',
        githubLink: 'https://github.com/Tobi-Oladele/customer-segmentation'
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
