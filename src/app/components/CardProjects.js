import Image from 'next/image';
import React from 'react';
import { GithubBtn } from './GithubBtn';

// const mlprojectsData = [
//   {
//       imageUrl: 'https://images.unsplash.com/photo-1523284998774-f6d3960be911?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//       title: 'Potato-Leaf-Classification-Model',
//       description: 'Developed a machine learning model to classify different diseases affecting potato leaves using image data. This project helps farmers identify issues early, preventing crop losses and improving yield.',
//       githubLink: 'https://github.com/Tobi-Oladele/Potato-Leaf-Classification-Model'
//   },
//   {
//       imageUrl: 'https://images.unsplash.com/photo-1516239482977-b550ba7253f2?q=80&w=1388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//       title: 'Face-Recognition',
//       description: 'Built an advanced facial recognition system capable of accurately identifying individuals in real-time. The model was trained to handle various lighting conditions and facial angles for security applications.',
//       githubLink: 'https://github.com/Tobi-Oladele/face-recognition'
//   },
//   {
//       imageUrl: 'https://images.unsplash.com/photo-1563723103083-482d8c4e85c6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//       title: 'Breast Cancer',
//       description: 'Created a predictive model for early detection of breast cancer based on medical data. This model assists healthcare professionals in diagnosing cancer at earlier stages, improving patient outcomes.',
//       githubLink: 'https://github.com/Tobi-Oladele/Breast-Cancer'
//   },
//   {
//       imageUrl: 'https://images.unsplash.com/photo-1511452885600-a3d2c9148a31?q=80&w=1442&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//       title: 'House-Prices',
//       description: 'A regression-based model to predict house prices using a combination of location, size, and other property features. This project aimed to help real estate professionals make more informed pricing decisions.',
//       githubLink: 'https://github.com/Tobi-Oladele/House-prices'
//   },
//   {
//       imageUrl: 'https://images.unsplash.com/photo-1489389944381-3471b5b30f04?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//       title: 'Tree-Censure',
//       description: 'Developed a decision tree model to analyze and categorize complex datasets with high accuracy. This project focused on making sense of large-scale data for better decision-making in various industries.',
//       githubLink: 'https://github.com/Tobi-Oladele/Tree-Censure'
//   },
//   {
//       imageUrl: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//       title: 'Fashion-Generator',
//       description: 'Created a generative model capable of producing new and unique fashion designs based on existing trends. This project explores the creative intersection between machine learning and fashion design.',
//       githubLink: 'https://github.com/Tobi-Oladele/Fashion-generator'
//   }
// ];

// const sqlprojectsData = [
//   {
//       imageUrl: 'https://images.unsplash.com/photo-1523284998774-f6d3960be911?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//       title: 'Potato-Leaf-Classification-Model',
//       description: 'Developed a machine learning model to classify different diseases affecting potato leaves using image data. This project helps farmers identify issues early, preventing crop losses and improving yield.',
//       githubLink: 'https://github.com/miss3persin/my-nextjs-template'
//   },
//   {
//       imageUrl: 'https://images.unsplash.com/photo-1514516870000-b658cb12c1dc?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//       title: 'Tomato Disease Prediction',
//       description: 'Created a model to predict diseases in tomato plants using deep learning techniques on leaf images.',
//       githubLink: 'https://github.com/miss3persin/my-nextjs-template'
//   }
// ];


export const CardProjects = ({ imageUrl, title, description, githubLink }) => {
  return (
    <div className="flex flex-col items-center justify-center mb-20 md:mb-32">
      {/* Image Section */}
      <div className="w-60 md:w-72 xl:w-[21rem] 2xl:w-[27rem] h-44 md:h-36 xl:h-44 2xl:h-64 bg-customBlue/50 overflow-hidden flex items-center justify-center">
        <Image
          src={imageUrl}
          alt={title}
          width={600}
          height={600}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title and Description Section */}
      <div className=" w-60 md:w-72 xl:w-[21rem] 2xl:w-[27rem] h-56 md:h-44 xl:h-52 2xl:h-72 mb-8 md:mb-12 border border-t-0 border-customBlue bg-black text-customWhite px-6 2xl:px-8 py-5 xl:py-7 2xl:py-10">
        <p className="font-semibold mb-3 2xl:mb-5 text-center md:text-sm xl:text-base 2xl:text-xl">{title}</p>
        <p className="text-[0.8rem] xl:text-sm font-light 2xl:font-normal 2xl:text-lg text-center md:text-left">{description}</p>
      </div>

      {/* GitHub Button */}
      <div>
        <GithubBtn link={githubLink} />
      </div>
    </div>
  );
};
