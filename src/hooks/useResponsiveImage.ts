import { useState, useEffect } from 'react';

export const useResponsiveImage = (desktopSrc: string, mobileSrc: string, breakpoint = 768) => {
  const [src, setSrc] = useState(() => 
    typeof window !== 'undefined' && window.innerWidth < breakpoint ? mobileSrc : desktopSrc
  );

  useEffect(() => {
    const handleResize = () => {
      setSrc(window.innerWidth < breakpoint ? mobileSrc : desktopSrc);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [desktopSrc, mobileSrc, breakpoint]);

  return src;
};
