import { useState, useEffect } from "react";

export const useNetwork = (onChange) => {
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