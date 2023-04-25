import { useState } from "react";

function App() {
  const useInput = (initialValue, validator) => {
    const [value, setValue] = useState(initialValue);
    const onChange = (event) => {
      const value = event.target.value;
      let willUpdate = true;
      if(typeof validator === "function"){
        willUpdate = validator(value);
      }
      if(willUpdate){
        setValue(value);
      }
    }
    return { value, onChange };
  }
  const maxLen = value => value.length < 10;
  const name = useInput("Mr.", maxLen);
  return (
    <div>
      <h1>useInput</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
}

export default App;
