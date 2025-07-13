import { useState } from "react";
import type { TodoListProps } from "../types/todo";

const TodoList = ({ todos, setTodos }: TodoListProps) => {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editValue, setEditValue] = useState<string>("");

  // 완료 여부 체크박스
  const handleCheckboxChange = (id: string) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
    );
    setTodos(updatedTodos);
    console.log("투두 업데이트: ", updatedTodos);
  };

  // 삭제
  const handleDeleteTodo = (id: string) => {
    const deletedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(deletedTodos);
  };

  // 수정
  const handleEditTodo = (id: string) => {
    const target = todos.find((todo) => todo.id === id);
    if (!target) return;
    setEditingId(id);
    setEditValue(target.todo);
  };

  const handleSaveTodo = (id: string) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, todo: editValue } : todo
    );
    setTodos(updatedTodos);
    setEditingId(null);
    setEditValue("");
  };

  const handleChangeEditValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditValue(e.target.value);
  };

  return (
    <div className="flex flex-col gap-2">
      {todos.map((todo) => (
        <div key={todo.id} className="flex gap-4">
          <input
            type="checkbox"
            checked={todo.isComplete}
            onChange={() => handleCheckboxChange(todo.id)}
          />
          {editingId === todo.id ? (
            <input
              type="text"
              value={editValue}
              onChange={handleChangeEditValue}
              className="border p-1 rounded"
            />
          ) : (
            <span>{todo.todo}</span>
          )}
          <div className="flex gap-1">
            {editingId === todo.id ? (
              <button onClick={() => handleSaveTodo(todo.id)}>✅</button>
            ) : (
              <button onClick={() => handleEditTodo(todo.id)}>🔄</button>
            )}
            <button onClick={() => handleDeleteTodo(todo.id)}>❎</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
