import { useContext, useRef } from "react";
import { TodosContext } from "../store/todos-context";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC = () => {
  const todos = useContext(TodosContext);

  const textInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const enteredText = textInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      // throw an error
      return;
    }

    todos.addTodo(enteredText);
  };

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={textInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
