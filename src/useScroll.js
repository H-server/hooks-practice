import { useState, useEffect } from "react";

export const useScroll = () => {
    const [scrollPos, setScrollPos] = useState(window.scrollY);
  
    const handleScroll = () => {
      setScrollPos(window.scrollY);
    }
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      }
    }, []);
  
    return scrollPos;
  };