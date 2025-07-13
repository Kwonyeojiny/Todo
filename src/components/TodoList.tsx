import { useState } from "react";
import { todoList } from "../mock/todoList";
import type { TodoInputProps } from "../types/todo";

const TodoList = () => {
  const [todos, setTodos] = useState<TodoInputProps[]>(todoList);

  const handleCheckboxChange = (id: number) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
    );
    setTodos(updatedTodos);
    console.log("투두 업데이트: ", updatedTodos);
  };

  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <input
            type="checkbox"
            checked={todo.isComplete}
            onChange={() => handleCheckboxChange(todo.id)}
          />
          <span>{todo.todo}</span>
        </div>
      ))}
    </>
  );
};

export default TodoList;
