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

    // NOTE: map을 사용하는 방식이 더 효율적
    // map + 불변성(상태 변경 정확하게 감지) 유지
    //   -> React 철학에 더 적합하고, 버그 발생 가능성 감소

    // const newArr = [...todos];
    // newArr[id].isComplete = !newArr[id].isComplete;
    // setTodos(newArr);
    // console.log("투두 업데이트: ", todos);
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
