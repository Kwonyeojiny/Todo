import type { TodoListProps } from "../types/todo";

const TodoList = ({ todos, setTodos }: TodoListProps) => {
  const handleCheckboxChange = (id: string) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
    );
    setTodos(updatedTodos);
    console.log("투두 업데이트: ", updatedTodos);
  };

  const handleDeleteTodo = (id: string) => {
    const deletedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(deletedTodos);
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
          <span>{todo.todo}</span>
          <div className="flex gap-1">
            <button onClick={() => handleDeleteTodo(todo.id)}>❎</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
