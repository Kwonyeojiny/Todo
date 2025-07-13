import { useEffect, useState } from "react";
import type { TodoListProps } from "../types/todo";

const TodoInput = ({ todos, setTodos }: TodoListProps) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    const newArr = [...todos];
    const generatedId = () => {
      return `${Date.now()}_${Math.floor(Math.random() * 10000)}`;
    };
    newArr.push({
      id: generatedId(),
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
