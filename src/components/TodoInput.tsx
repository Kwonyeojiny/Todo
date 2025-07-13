import { useEffect, useState } from "react";
import type { TodoInputProps } from "../types/todo";

const TodoInput = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [todos, setTodos] = useState<TodoInputProps[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    const newArr = [...todos];

    newArr.push({
      id: newArr.length + 1,
      todo: inputValue,
      isComplete: false,
    });

    setTodos(newArr);
  };

  useEffect(() => {
    console.log("현재 todos: ", todos);
  }, [todos]);

  return (
    <>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={handleAddTodo}>등록</button>
    </>
  );
};

export default TodoInput;
