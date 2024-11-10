'use client';

import { useState, useEffect } from 'react';
import AuthLoad from '@/components/authLoad';

const Load = (loadingTime = 2000) => {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false); 

  useEffect(() => {
    const isSessionLoaded = sessionStorage.getItem('authorLoaded');

    if (!isSessionLoaded) {
     
      const timer = setTimeout(() => {
       
        setFadeOut(true);

        setTimeout(() => {
          setIsLoading(false);
        }, 500); 

        sessionStorage.setItem('authorLoaded', 'true');
      }, loadingTime);

      return () => clearTimeout(timer);
    } else {
      
      setFadeOut(true);
      
      setTimeout(() => {
        setIsLoading(false); 
      }, 500); 
    }
  }, [loadingTime]);

  return {
    isLoading,
    loadingComponent: (
      <div
        className='authLoad'
        style={{
          opacity: fadeOut ? 0 : 1, 
          transition: 'opacity 0.5s ease-out',
        }}
      >
        <AuthLoad />
      </div>
    ),
  };
};

export default Load;
