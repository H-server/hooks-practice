import { useState, useEffect, useRef } from "react";

const useFadeIn = (duration = 1, delay = 0) => {
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

function App() {
  const { opacity, transition } = useFadeIn(3, 1);
  return (
    <div style={{ opacity, transition }}>
      <h1>useFadeIn</h1>
    </div>
  );
}

export default App;
