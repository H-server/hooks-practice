import { useRef } from "react";

export const useFullscreen = () => {
    const element = useRef();
  
    const enterFullscreen = () => {
      if(element.current){
        element.current.requestFullscreen();
      }
    };
  
    const exitFullscreen = () => {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      }
    };
  
    return { element, enterFullscreen, exitFullscreen };
  }