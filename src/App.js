import { useState, useEffect, useRef } from "react";

const useClick = (onClick) => {
  const element = useRef();
  useEffect(() => {
    if(element.current){
      element.current.addEventListener('click', onClick);
    return () => {
      element.current.removeEventListener('click', onClick);
    }
  }
}, [])
  return element;
}

function App() {
  const sayHello = () => {
    console.log("hello")
  }
  const hello = useClick(sayHello);
  return (
    <div>
      <h1>useClick</h1>
      <button ref={hello}>hi</button>
    </div>
  );
}

export default App;
