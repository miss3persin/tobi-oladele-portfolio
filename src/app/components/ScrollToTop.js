'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const ScrollToTop = () => {
  const pathname = usePathname(); // Get the current route

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top whenever the path changes
  }, [pathname]); // Re-run this effect whenever the route (pathname) changes

  return null; // This component renders nothing visible
};

export default ScrollToTop;
