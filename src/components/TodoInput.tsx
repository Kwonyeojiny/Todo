import { useEffect, useState } from "react";

const TodoInput = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    console.log("변경된 값: ", inputValue);
  }, [inputValue]);

  return <input type="text" value={inputValue} onChange={handleChange} />;
};

export default TodoInput;
