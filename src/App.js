import { useState, useEffect, useRef } from "react";

const useBeforeLeave = (onBeforeLeave) => {
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

function App() {
  const beforeLeave = () => {
    console.log("Don't leave!!");
  }
  useBeforeLeave(beforeLeave)
  return (
    <div>
      <h1>useBeforeLeave</h1>
    </div>
  );
}

export default App;
