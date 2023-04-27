import { useState, useEffect } from "react";

export const useFadeIn = (duration = 1, delay = 0) => {
    const [opacity, setOpacity] = useState(0);
  
    useEffect(() => {
      const fadeInTimer = setTimeout(() => {
        setOpacity(1);
      }, delay * 1000);
      return () => clearTimeout(fadeInTimer);
    }, [delay]);
  
    return { 
      opacity,
      transition: `opacity ${duration}s ease-in-out` 
    };
  };