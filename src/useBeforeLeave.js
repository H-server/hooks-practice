import { useEffect } from "react";

export const useBeforeLeave = (onBeforeLeave) => {
  useEffect(() => {
    const handleBeforeLeave = (event) => {
      if(event.clientY <= 0){
        onBeforeLeave();
      }
    };
    document.addEventListener('mouseleave', handleBeforeLeave);
    return () => {
      document.removeEventListener('mouseleave', handleBeforeLeave);
    }
  }, [onBeforeLeave])
}