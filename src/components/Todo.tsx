import { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import type { TodoInputProps } from "../types/todo";
import { todoList } from "../mock/todoList";

const Todo = () => {
  const [todos, setTodos] = useState<TodoInputProps[]>(todoList);

  return (
    <div className="flex flex-col justify-start items-center gap-4">
      <TodoInput todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default Todo;
