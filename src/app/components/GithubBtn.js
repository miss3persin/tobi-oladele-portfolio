import Link from 'next/link';
import React from 'react';
import { SiGithub } from 'react-icons/si';

export const GithubBtn = ({ link }) => {
  return (
    <div className="xl:w-48 xl:h-10 w-40 h-8 bg-customBlue flex items-center justify-center">
      <Link href={link} target='_blank' rel='noopener noreferrer' className="flex items-center justify-center gap-2 py-3 px-10">
        <SiGithub className="text-lg xl:text-2xl"  />
        <p className="text-lg xl:text-xl 2xl:font-medium">GitHub</p>
      </Link>
    </div>
  );
};
