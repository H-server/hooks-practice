import { useState, useEffect } from "react";

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);

  useEffect(() => {
    document.title = title;
  }, [title])

  return [title, setTitle];
}

function App() {
  const [title, setTitle] = useTitle("initialTitle");
  const handleButtonClick =  () => {
    setTitle("newTitle");
  }

  return (
    <div>
      <h1>useTitle</h1>
      <h2>{title}</h2>
      <button onClick={handleButtonClick}>title update</button>
    </div>
  );
}

export default App;
