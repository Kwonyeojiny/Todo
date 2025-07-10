import { useState } from "react";

const TodoInput = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newInputValue = e.target.value;
    setInputValue(e.target.value);
    console.log(newInputValue);
  };

  return <input type="text" value={inputValue} onChange={handleChange} />;
};

export default TodoInput;
