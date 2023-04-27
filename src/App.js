import { useState, useEffect, useRef } from "react";

const useNetwork = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine);

  const handleStatusChange = () => {
    setStatus(navigator.onLine);
  }

  useEffect(() => {
    window.addEventListener('online', handleStatusChange);
    window.addEventListener('offline', handleStatusChange);
    return () => {
      window.removeEventListener('online', handleStatusChange);
      window.removeEventListener('offline', handleStatusChange);
    }
  });
  return status;
}

function App() {
  const onLine = useNetwork();
  return (
    <div>
      <h1>useNetwork</h1>
      <h2>{onLine ? "online" : "offline"}</h2>
    </div>
  );
}

export default App;
