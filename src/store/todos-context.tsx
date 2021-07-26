import { createContext, useState } from "react";
import Todo from "../models/todo";

type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: () => {},
});

const TodosContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (enteredText: string) => {
    const newTodo = new Todo(enteredText);

    setTodos((prevState) => [...prevState, newTodo]);
  };

  const handleRemoveTodo = (id: string) => {
    setTodos((prevState) => prevState.filter((item) => item.id !== id));
  };

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: handleAddTodo,
    removeTodo: handleRemoveTodo,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
