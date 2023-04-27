import { useState, useEffect, useRef } from "react";

const useScroll = () => {
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

  return scrollPos
}

function App() {
  const Y = useScroll();
  const backgroundColor = `rgb(0, ${Y % 255}, ${Y % 255})`;
  return (
    <div style={{ height: '200vh', backgroundColor }}>
      <h1>useNetwork</h1>
    </div>
  );
}

export default App;
