import { useEffect, useState } from "react";
import type { TodoInputProps } from "../types/todo";
import { todoList } from "../mock/todoList";

const TodoInput = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [todos, setTodos] = useState<TodoInputProps[]>(todoList);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    const newArr = [...todos];

    newArr.push({
      id: newArr.length,
      todo: inputValue,
      isComplete: false,
    });

    setTodos(newArr);
  };

  useEffect(() => {
    console.log("현재 todos: ", todos);
  }, [todos]);

  return (
    <div className="flex gap-4">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        className="p-2 border rounded-md"
      />
      <button onClick={handleAddTodo} className="p-2 px-4 border rounded-md">
        등록
      </button>
    </div>
  );
};

export default TodoInput;
