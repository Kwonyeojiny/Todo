export interface TodoInputProps {
  id: number;
  todo: string;
  isComplete: boolean;
}

export interface TodoListProps {
  todos: TodoInputProps[];
  setTodos: React.Dispatch<React.SetStateAction<TodoInputProps[]>>;
}
