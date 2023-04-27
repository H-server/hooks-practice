import { useState, useEffect, useRef } from "react";

const useFullscreen = () => {
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

function App() {
  const {element, enterFullscreen, exitFullscreen } = useFullscreen();
  return (
    <div ref={element}>
      <h1>useFullscreen</h1>
      <img src="https://legacy.reactjs.org/logo-og.png" />
      <button onClick={enterFullscreen} >enter</button>
      <button onClick={exitFullscreen} >exit</button>
    </div>
  );
}

export default App;
