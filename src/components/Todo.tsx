import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const Todo = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <TodoInput />
      <TodoList />
    </div>
  );
};

export default Todo;
