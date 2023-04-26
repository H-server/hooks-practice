import { useState, useEffect } from "react";

export const useTitle = (initialTitle) => {
    const [title, setTitle] = useState(initialTitle);
  
    useEffect(() => {
      document.title = title;
    }, [title])
  
    return [title, setTitle];
  }